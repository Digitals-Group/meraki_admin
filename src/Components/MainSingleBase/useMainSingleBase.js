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
  UseGetUsersById,
  UsePostUsers,
  UsePutUsers,
} from "services/user.service";

const useMainSingleBase = () => {
  const { tab_name, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expanded = useSelector((state) => state.sidebar.expand);
  const expandedSinglePage = useSelector(
    (state) => state.sidebar.expandSinglePage
  );

  const { data, isLoading } = UseGetUsersById({
    id: id,
    querySettings: {
      enabled: id !== "create",
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  useEffect(() => {
    for (let item in data) setValue(item, data[item]);
  }, [data, setValue]);

  const { mutate: userMutate } = UsePostUsers({
    onSuccess: (res) => {
      dispatch(showAlert("Successfully created", "success"));
      navigate(`/main/${tab_name}`);
      reset();
      queryClient.refetchQueries("GET_USERS");
    },
    onError: (err) => {},
  });

  const { mutate: userUpdateMutate } = UsePutUsers({
    onSuccess: (res) => {
      dispatch(showAlert("Successfully Updated", "success"));
      navigate(`/main/${tab_name}`);
      reset();
      queryClient.refetchQueries("GET_USERS");
    },
    onError: (err) => {},
  });

  const onSubmit = (data) => {
    if (id === "create") {
      userMutate(data);
    } else {
      userUpdateMutate({ id, data });
    }
  };

  const inputs = () => {
    if (isLoading) {
      return <BigLoading />;
    } else {
      switch (tab_name) {
        case "users":
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
              <Label label="Ваш номер телефона*">
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
            </>
          );

        default:
          break;
      }
    }
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
  };
};

export default useMainSingleBase;
