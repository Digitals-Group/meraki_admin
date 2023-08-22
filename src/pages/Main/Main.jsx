import CTable from "Components/CTable/CTable";
import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import { UseGetProducts } from "services/fake.service";
import RefreshIcon from "@mui/icons-material/Refresh";

const Main = () => {
  const { id } = useParams();
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  console.log("pagination", pagination);
  const { data, isError, isFetching, isLoading, refetch } = UseGetProducts({
    queryParams: {
      offset: pagination.pageIndex * pagination.pageSize,
      limit: pagination.pageSize,
    },
  });

  const columns = data?.fields?.map((elem) => {
    return {
      accessorKey: elem.slug,
      header: elem.label,
    };
  });

  const columnsLoading = [
    {
      accessorKey: "name_ru",
      header: "",
    },
    {
      accessorKey: "lastName",
      header: "",
    },
    {
      accessorKey: "address",
      header: "",
    },
    {
      accessorKey: "state",
      header: "",
    },
    {
      accessorKey: "phoneNumber",
      header: "",
    },
  ];

  return (
    <div>
      {!id && (
        <CTable
          data={data?.data ?? []}
          columns={columns ?? columnsLoading}
          settings={{
            enableColumnActions: true,
            enableColumnFilters: true,
            enablePagination: true,
            enableSorting: true,
            enableTopBottomToolbar: true,
            muiTableBodyRowProps: true,
            enableColumnResizing: true,
            enableColumnOrdering: true,
            enablePinning: true,
            enableStickyHeader: true,
            enableStickyFooter: true,
            enableEditing: (row) => {
              return row.original.status;
            },
            enableRowNumbers: true,
            editingMode: "modal",
            enableRowActions: true,
            enableClickToCopy: true,
            enableColumnDragging: true,
            enableColumnFilterModes: true,
            enableExpanding: true,
          }}
          border={{
            borderFull: "1px solid #e1e5e8",
            borderHeader: "1px solid #e1e5e8",
            borderData: "1px solid #e1e5e8",
          }}
          handleEditRow={(cell, value) => {
            // //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here
            // let keys = cell.column.id.split(".");
            // let newObj = {};
            // keys.forEach((element, i) => {
            //   if (i === 0) {
            //     newObj = tableData[cell.row.index][element];
            //   } else {
            //     if (typeof newObj[element] === "object")
            //       newObj = newObj[element];
            //   }
            // });
            // if (keys.length > 1) {
            //   newObj[keys[keys.length - 1]] = value;
            // } else tableData[cell.row.index][cell.column.id] = value;
            // //send/receive api updates here
            // setTableData([...tableData]); //re-render with new data
          }}
          handleDeleteRow={(row) => {
            // const newTableData = tableData.filter(
            //   (_, index) => index !== row.index
            // );
            // setTableData(newTableData);
          }}
          // set initial state
          initialState={{ showColumnFilters: false }}
          // manual
          manualFiltering
          manualPagination
          manualSorting
          //error message
          muiToolbarAlertBannerProps={
            isError
              ? {
                  color: "error",
                  children: "Error loading data",
                }
              : undefined
          }
          // on Change
          onColumnFiltersChange={setColumnFilters}
          onGlobalFilterChange={setGlobalFilter}
          onSortingChange={setSorting}
          onPaginationChange={setPagination}
          renderTopToolbarCustomActions={() => (
            <Tooltip arrow title="Refresh Data">
              <IconButton onClick={() => refetch()}>
                <RefreshIcon />
              </IconButton>
            </Tooltip>
          )}
          rowCount={data?.count ?? 0}
          state={{
            columnFilters,
            globalFilter,
            isLoading,
            pagination,
            showAlertBanner: isError,
            showProgressBars: isFetching,
            sorting,
          }}
        />
      )}
      <Outlet />
    </div>
  );
};

export default Main;
