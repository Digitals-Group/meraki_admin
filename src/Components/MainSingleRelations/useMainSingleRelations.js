import { useCallback, useEffect, useState } from "react";
import styles from "./MainSingleRelations.module.scss";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { UseDeleteMain, UseGetMain } from "services/main.service";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "redux/alert/alert.thunk";
import { queryClient } from "services/http-client";
import { paginationChange } from "redux/pagination/pagination.slice";
import { tableColumns } from "data/Columns";
import { relationTabs } from "data/relationsTab";

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
 const [searchParams] = useSearchParams();

 const pagination = useSelector(
  (state) => state.pagination.pagination_relation
 );
 const columnSizing = useSelector((state) => state.resize);

 useEffect(() => {
  if (typeof window !== "undefined") {
   setColumnPinning({
    left: ["#", "mrt-row-expand", "mrt-row-numbers", "mrt-row-select"],
    right: ["mrt-row-actions"],
   });
  }
 }, []);

 const relationTab = relationTabs(tab_name).find(
  (tab) => tab.value === searchParams.get("relation")
 );
 const whereClause = relationTab ? { [relationTab.relation_name]: id } : {};

 const { data, isError, isFetching, isLoading, refetch } = UseGetMain({
  queryParams: {
   skip: pagination.pageIndex * pagination.pageSize,
   take: pagination.pageSize,
   ...(Object.keys(whereClause).length && { where: whereClause }),
   orderBy: {
    createdAt: "desc",
   },
  },
  tab_name: searchParams.get("relation") || tab_name,
 });

 const { mutateAsync: mainDeleteMutate } = UseDeleteMain({
  onSuccess: () => {
   dispatch(showAlert("Successfully deleted", "success"));
   queryClient.refetchQueries("GET_MAIN");
  },
 });

 const handleDeleteRow = (row) => {
  mainDeleteMutate({ id: row.original.id, tab_name });
 };

 const handlePaginationChange = useCallback(
  (item) => {
   dispatch(paginationChange.setPaginationRelation(item(pagination)));
  },
  [dispatch, pagination]
 );
 return {
  id,
  tab_name,
  navigate,
  data,
  columns: [
   {
    accessorFn: (_, index) => (
     <div className={styles.order}>
      {pagination.pageIndex * pagination.pageSize + index + 1}
     </div>
    ),
    header: "#",
    minSize: 45,
    maxSize: 45,
    size: 45,
    enableColumnActions: false,
    enableEditing: false,
    enableExpanding: false,
    enableColumnDragging: false,
    enableColumnFilter: false,
    enableColumnOrdering: false,
    enableResizing: false,
    enableSorting: false,
   },
   ...tableColumns(tab_name),
  ],
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
  columnSizing,
  tabs: relationTabs(tab_name),
 };
};

export default useMainSingleRelations;
