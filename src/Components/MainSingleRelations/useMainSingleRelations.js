import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { UseGetUsers } from "services/user.service";

const useMainSingleRelations = () => {
  const { id, tab_name } = useParams();
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

  const handleDeleteRow = (row) => {};
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
