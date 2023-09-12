import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UseDeleteMain, UseGetMain } from "services/main.service";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "redux/alert/alert.thunk";
import { queryClient } from "services/http-client";
import { paginationChange } from "redux/pagination/pagination.slice";
import { columns } from "Components/Columns/Columns";

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

const useMain = () => {
  const { id, tab_name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [columnPinning, setColumnPinning] = useState({});

  const pagination = useSelector((state) => state.pagination.pagination_main);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setColumnPinning({
        left: ["mrt-row-expand", "mrt-row-numbers", "mrt-row-select"],
        right: ["mrt-row-actions"],
      });
    }
  }, []);

  const { data, isError, isFetching, isLoading, refetch } = UseGetMain({
    queryParams: {
      offset: pagination.pageIndex * pagination.pageSize,
      limit: pagination.pageSize,
    },
    tab_name,
  });

  const { mutate: mainDeleteMutate } = UseDeleteMain({
    onSuccess: (res) => {
      dispatch(showAlert("Successfully deleted", "success"));
      queryClient.refetchQueries("GET_MAIN");
    },
    onError: (err) => {},
  });

  const handleDeleteRow = (row) => {
    mainDeleteMutate({ id: row.original.id, tab_name });
  };

  const handlePaginationChange = (item) => {
    dispatch(paginationChange.setPaginationMain(item(pagination)));
  };
  return {
    id,
    tab_name,
    navigate,
    data,
    columns: columns(tab_name),
    columnsLoading,
    setColumnFilters,
    setGlobalFilter,
    setSorting,
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
    dispatch,
    handlePaginationChange,
  };
};

export default useMain;
