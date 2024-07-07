import { useEffect } from "react";
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
import { relationFields } from "../../data/relations";
import { include } from "data/include";

const useMainSingleBase = () => {
 const { tab_name, id } = useParams();
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const expanded = useSelector((state) => state.sidebar.expand);
 const expandedSinglePage = useSelector(
  (state) => state.sidebar.expandSinglePage
 );

 const { data, isLoading } = UseGetMainById({
  tab_name,
  querySettings: {
   enabled: id !== "create",
  },
  queryParams: {
   where: { id },
   include: include(tab_name),
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
  if (id !== "create") {
   for (let item in data) {
    if (item !== "createdAt" && item !== "updatedAt" && item !== "id")
     setValue(item, data[item]);

    if (
     typeof data[item] === "object" &&
     !Array.isArray(data[item]) &&
     data[item] !== null
    ) {
     setValue(item, {
      label: data[item]?.name || data[item]?.title,
      value: data[item]?.id,
     });
    }
   }
  }
 }, [data, setValue, id, tab_name]);

 const { mutate: mainMutate } = UsePostMain({
  onSuccess: () => {
   dispatch(showAlert("Successfully created", "success"));
   reset();
   navigate(`/main/${tab_name}`);
   queryClient.refetchQueries("GET_MAIN");
  },
  onError: () => {},
 });

 const { mutate: userUpdateMutate } = UsePatchMain({
  onSuccess: () => {
   dispatch(showAlert("Successfully Updated", "success"));
   navigate(`/main/${tab_name}`);
   reset();
   queryClient.refetchQueries("GET_MAIN");
  },
  onError: (err) => {},
 });

 const onSubmit = (value) => {
  if (value.phone_number?.startsWith("+"))
   value.phone_number = value.phone_number.slice(4);

  relationFields(tab_name).forEach((elem) => {
   value[elem.inputName] = value[elem.tab_name].value;
   value[elem.tab_name] = undefined;
  });

  if (data?.password === value.password) value.password = undefined;

  if (id === "create") {
   mainMutate({
    tab_name,
    data: { data: value },
   });
  } else {
   userUpdateMutate({
    tab_name,
    data: { data: value, where: { id } },
   });
  }
 };

 const { mutate: mainDeleteMutate } = UseDeleteMain({
  onSuccess: () => {
   dispatch(showAlert("Successfully deleted", "success"));
   queryClient.refetchQueries("GET_MAIN");
  },
  onError: () => {},
 });

 const handleDeleteSingle = () => {
  mainDeleteMutate({ id, tab_name });
  navigate(`/main/${tab_name}`);
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
  navigate,
  handleDeleteSingle,
  relations: relationFields(tab_name),
  isLoading,
  setValue,
 };
};

export default useMainSingleBase;
