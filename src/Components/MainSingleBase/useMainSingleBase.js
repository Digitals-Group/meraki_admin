import React, { useEffect } from "react";
import Input from "Components/Form/Input/Input";
import PhoneInput from "Components/Form/PhoneInput/PhoneInput";
import Label from "Components/Label/Label";
import BigLoading from "Components/Loading/BigLoading";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { showAlert } from "redux/alert/alert.thunk";
import { queryClient } from "services/http-client";
import {
  UseDeleteMain,
  UseGetMainById,
  UsePatchMain,
  UsePostMain,
} from "services/main.service";
import WSelect from "Components/Form/WSelect/WSelect";
import Textarea from "Components/Form/TextArea/TextArea";
import UploadImage from "Components/Form/UploadImage/UploadImage";

const userTypeOptions = [
  {
    label: "USER",
    value: "3110a62f-7774-442a-b9b3-2d762d3b791a",
  },
  {
    label: "ADMIN",
    value: "64b8d97f-5b9e-4ffc-bbaa-94038b6694be",
  },
];

const useMainSingleBase = () => {
  const { tab_name, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expanded = useSelector((state) => state.sidebar.expand);
  const expandedSinglePage = useSelector(
    (state) => state.sidebar.expandSinglePage
  );

  const { data, isLoading } = UseGetMainById({
    id: id,
    tab_name,
    querySettings: {
      enabled: id !== "create",
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  console.log("watch", watch());

  useEffect(() => {
    if (id !== "create") {
      for (let item in data) {
        if (item !== "created_at" && item !== "updated_at")
          setValue(item, data[item]);
      }
      setValue("role_id", {
        label: data?.role_data?.name,
        value: data?.role_id,
      });
    }
  }, [data, setValue, id]);

  const { mutate: mainMutate } = UsePostMain({
    onSuccess: (res) => {
      dispatch(showAlert("Successfully created", "success"));
      navigate(`/main/${tab_name}`);
      reset();
      queryClient.refetchQueries("GET_MAIN");
    },
    onError: (err) => {},
  });

  const { mutate: userUpdateMutate } = UsePatchMain({
    onSuccess: (res) => {
      dispatch(showAlert("Successfully Updated", "success"));
      navigate(`/main/${tab_name}`);
      reset();
      queryClient.refetchQueries("GET_MAIN");
    },
    onError: (err) => {},
  });

  const onSubmit = (data) => {
    const apiData =
      tab_name === "user"
        ? {
            ...data,
            role_id: data.role_id.value,
            role_data: undefined,
          }
        : data;

    if (id === "create") {
      mainMutate({ tab_name, apiData });
    } else {
      userUpdateMutate({ id, tab_name, apiData });
    }
  };

  const inputs = () => {
    if (isLoading) {
      return <BigLoading />;
    } else {
      switch (tab_name) {
        case "user":
          return (
            <>
              <Label label="First name*">
                <Input
                  control={control}
                  placeholder="Enter first name"
                  name="first_name"
                  validation={{
                    required: {
                      value: true,
                      message: "required",
                    },
                  }}
                  errors={errors}
                />
              </Label>
              <Label label="Last name*">
                <Input
                  control={control}
                  placeholder="Enter last name"
                  name="last_name"
                  validation={{
                    required: {
                      value: true,
                      message: "required",
                    },
                  }}
                  errors={errors}
                />
              </Label>
              <Label label="Phone number">
                <PhoneInput
                  mask="+\9\9\8 (99) 999-99-99"
                  maskChar="_"
                  name="phone_number"
                  control={control}
                  errors={errors}
                  validation={{
                    required: {
                      value: true,
                      message: "Обязательное поле",
                    },
                    validate: {
                      isFull: (value) => {
                        if (value.includes("_")) return "Invalid phone";
                      },
                    },
                  }}
                />
              </Label>
              <Label label="User name">
                <Input
                  control={control}
                  placeholder="Enter user name"
                  name="username"
                />
              </Label>
              <Label label="Password">
                <Input
                  control={control}
                  placeholder="Enter password"
                  name="password"
                  typePassword
                />
              </Label>
              <Label label="Role type">
                <WSelect
                  name="role_id"
                  control={control}
                  options={userTypeOptions}
                  defaultValue={{
                    label: "USER",
                    value: "3110a62f-7774-442a-b9b3-2d762d3b791a",
                  }}
                  errors={errors}
                  validation={{
                    required: {
                      value: true,
                      message: "Обязательное поле",
                    },
                  }}
                />
              </Label>
            </>
          );

        case "application":
          return (
            <>
              <Label label="First name*">
                <Input
                  control={control}
                  placeholder="Enter first name"
                  name="full_name"
                  validation={{
                    required: {
                      value: true,
                      message: "required",
                    },
                  }}
                  errors={errors}
                />
              </Label>
              <Label label="Phone number">
                <PhoneInput
                  mask="+\9\9\8 (99) 999-99-99"
                  maskChar="_"
                  name="phone_number"
                  control={control}
                  errors={errors}
                  validation={{
                    required: {
                      value: true,
                      message: "Обязательное поле",
                    },
                    validate: {
                      isFull: (value) => {
                        if (value.includes("_")) return "Invalid phone";
                      },
                    },
                  }}
                />
              </Label>
              <Label label="Description">
                <Textarea
                  placeholder="description"
                  control={control}
                  name="description"
                  validation={{
                    required: {
                      value: true,
                      message: "Обязательное поле",
                    },
                    validate: {
                      freeSpace: (value) => {
                        if (!value.trim().length) return "Обязательное поле";
                      },
                    },
                  }}
                  errors={errors}
                />
              </Label>
            </>
          );

        case "banner":
          return (
            <UploadImage
              control={control}
              errors={errors}
              name="image_url"
              setValue={setValue}
            />
          );
        case "category":
          return (
            <>
              <Label label="Name">
                <Input
                  control={control}
                  placeholder="Enter name"
                  name="name"
                  validation={{
                    required: {
                      value: true,
                      message: "required",
                    },
                  }}
                  errors={errors}
                />
              </Label>
              <UploadImage
                control={control}
                errors={errors}
                name="image_url"
                setValue={setValue}
              />
            </>
          );
        case "product":
          return <></>;

        case "size":
          return (
            <Label label="Size">
              <Input
                control={control}
                placeholder="Enter size"
                name="code"
                validation={{
                  required: {
                    value: true,
                    message: "required",
                  },
                }}
                errors={errors}
              />
            </Label>
          );
        case "university":
          return (
            <>
              <Label label="University">
                <Input
                  control={control}
                  placeholder="Enter university name"
                  name="title"
                  validation={{
                    required: {
                      value: true,
                      message: "required",
                    },
                  }}
                  errors={errors}
                />
              </Label>
              <UploadImage
                control={control}
                errors={errors}
                name="image_url"
                setValue={setValue}
              />
              <Label label="Description">
                <Textarea
                  placeholder="description"
                  control={control}
                  name="description"
                  validation={{
                    required: {
                      value: true,
                      message: "Обязательное поле",
                    },
                    validate: {
                      freeSpace: (value) => {
                        if (!value.trim().length) return "Обязательное поле";
                      },
                    },
                  }}
                  errors={errors}
                />
              </Label>
            </>
          );

        default:
          break;
      }
    }
  };

  const { mutate: userDeleteMutate } = UseDeleteMain({
    onSuccess: (res) => {
      dispatch(showAlert("Successfully deleted", "success"));
      queryClient.refetchQueries("GET_MAIN");
    },
    onError: (err) => {},
  });

  const handleDeleteSingle = () => {
    navigate(`/main/${tab_name}`);
    userDeleteMutate(id);
  };
  return {
    expanded,
    expandedSinglePage,
    tab_name,
    handleSubmit,
    onSubmit,
    control,
    errors,
    id,
    inputs,
    navigate,
    handleDeleteSingle,
  };
};

export default useMainSingleBase;
