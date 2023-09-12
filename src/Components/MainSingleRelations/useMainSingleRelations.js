import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UseDeleteMain, UseGetMain } from "services/main.service";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "redux/alert/alert.thunk";
import { queryClient } from "services/http-client";
import { paginationChange } from "redux/pagination/pagination.slice";

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

const useMainSingleRelations = () => {
  const dispatch = useDispatch();
  const expandedSinglePage = useSelector(
    (state) => state.sidebar.expandSinglePage
  );
  const { id, tab_name } = useParams();
  const navigate = useNavigate();
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [columnPinning, setColumnPinning] = useState({});

  const pagination = useSelector(
    (state) => state.pagination.pagination_relation
  );

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

  const columns = () => {
    switch (tab_name) {
      case "user":
        return [
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
            accessorFn: (row) => row.role_data?.name,
            header: "Role name",
          },
        ];
      case "application":
        return [
          {
            accessorFn: (row) => row.full_name,
            header: "Full name",
          },
          {
            accessorFn: (row) => row.phone_number,
            header: "Phone number",
          },
          {
            accessorFn: (row) => row.description,
            header: "Description",
          },
        ];
      case "banner":
        return [];
      case "category":
        return [
          {
            accessorFn: (row) => row.name,
            header: "Category name",
          },
          {
            accessorFn: (row) => row.image_url,
            header: "Category image",
          },
        ];
      case "product":
        return [
          {
            accessorFn: (row) => row.title,
            header: "Name",
          },
          {
            accessorFn: (row) => row.subtitle,
            header: "Subtitle",
          },
          {
            accessorFn: (row) => row.description,
            header: "Description",
          },
          {
            accessorFn: (row) => row.image_url,
            header: "Image",
          },
          {
            accessorFn: (row) => row.price,
            header: "Price",
          },
          {
            accessorFn: (row) => row.rating,
            header: "Rating",
          },
        ];
      case "size":
        return [
          {
            accessorFn: (row) => row.code,
            header: "Size",
          },
        ];
      case "university":
        return [
          {
            accessorFn: (row) => row.title,
            header: "Name",
          },
          {
            accessorFn: (row) => row.image_url,
            header: "Image",
          },
          {
            accessorFn: (row) => row.description,
            header: "Description",
          },
        ];

      default:
        break;
    }
  };

  const { mutateAsync: userDeleteMutate } = UseDeleteMain({
    onSuccess: (res) => {
      dispatch(showAlert("Successfully deleted", "success"));
      queryClient.refetchQueries("GET_MAIN");
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

  const handlePaginationChange = (item) => {
    dispatch(paginationChange.setPaginationRelation(item(pagination)));
  };
  return {
    id,
    tab_name,
    navigate,
    data,
    columns: columns(),
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
    handlePaginationChange,
    dispatch,
    expandedSinglePage,
  };
};

export default useMainSingleRelations;
