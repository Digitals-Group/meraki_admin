import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { UseDeleteUsers, UseGetUsers } from "services/user.service";
import { useDispatch } from "react-redux";
import { showAlert } from "redux/alert/alert.thunk";
import { queryClient } from "services/http-client";

const useMainSingleRelations = () => {
  const { id, tab_name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [columnPinning, setColumnPinning] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isDesktop) {
        setColumnPinning({
          left: ["mrt-row-expand", "mrt-row-numbers", "mrt-row-actions"],
          right: ["mrt-row-select"],
        });
      } else {
        setColumnPinning({});
      }
    }
  }, [isDesktop]);

  const { data, isError, isFetching, isLoading, refetch } = UseGetUsers({
    queryParams: {
      offset: pagination.pageIndex * pagination.pageSize,
      limit: pagination.pageSize,
    },
  });

  const columns = [
    {
      accessorFn: (row) => row.created_at,
      header: "Create date",
    },
    {
      accessorFn: (row) => row.first_name,
      header: "First name",
    },
    {
      accessorFn: (row) => row.last_name,
      header: "Last name",
    },
    {
      accessorFn: (row) => row.phone_number,
      header: "Phone number",
    },
    {
      accessorFn: (row) => row.username,
      header: "User name",
    },
    {
      accessorFn: (row) => row.role_data.name,
      header: "Role name",
    },
  ];

  const columnsLoading = [
    {
      accessorKey: "1",
      header: "",
    },
    {
      accessorKey: "2",
      header: "",
    },
    {
      accessorKey: "3",
      header: "",
    },
    {
      accessorKey: "4",
      header: "",
    },
    {
      accessorKey: "5",
      header: "",
    },
  ];

  const { mutateAsync: userDeleteMutate } = UseDeleteUsers({
    onSuccess: (res) => {
      dispatch(showAlert("Successfully deleted", "success"));
      queryClient.refetchQueries("GET_USERS");
    },
    onError: (err) => {},
  });

  const handleDeleteRow = (row) => {
    userDeleteMutate(row.original.id).then((res) => {
      if (row.original.id === id && data?.users?.[0]?.id) {
        navigate(`/main/${tab_name}/${data?.users?.[0]?.id}`);
      } else {
        navigate(`/main/${tab_name}`);
      }
    });
  };
  return {
    id,
    tab_name,
    navigate,
    data,
    columns,
    columnsLoading,
    setColumnFilters,
    setGlobalFilter,
    setSorting,
    setPagination,
    columnFilters,
    globalFilter,
    isLoading,
    pagination,
    isError,
    isFetching,
    sorting,
    columnPinning,
    setColumnPinning,
    refetch,
    handleDeleteRow,
  };
};

export default useMainSingleRelations;
