import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Box, Button, IconButton, Tooltip, useMediaQuery } from "@mui/material";
import { UseGetProducts } from "services/fake.service";
import RefreshIcon from "@mui/icons-material/Refresh";
import MaterialReactTable from "material-react-table";
import { Delete, Edit } from "@mui/icons-material";

const enableBottomToolbar = true;
const enableTopToolbar = true;

const Main = () => {
  const { id } = useParams();
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [columnPinning, setColumnPinning] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 1,
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

  const handleEditRow = (cell, value) => {
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
  };

  const handleDeleteRow = (row) => {
    // const newTableData = tableData.filter(
    //   (_, index) => index !== row.index
    // );
    // setTableData(newTableData);
  };

  return (
    <div
      id={!enableTopToolbar && !enableBottomToolbar && "mui-table"}
      className="mui-table"
    >
      {!id && (
        <MaterialReactTable
          data={data?.data ?? []}
          columns={columns ?? columnsLoading}
          enableColumnActions={true}
          enableColumnFilters={true}
          enablePagination={true}
          enableSorting={true}
          muiTableBodyRowProps={true}
          enableColumnResizing={true}
          enableColumnOrdering={true}
          enablePinning={true}
          enableStickyHeader={true}
          enableStickyFooter={true}
          enableEditing={(row) => {
            return row.original.status;
          }}
          enableRowNumbers={true}
          editingMode="cell"
          enableRowSelection={true}
          getRowId={(row) => row.phoneNumber}
          enableRowActions={true}
          enableClickToCopy={false}
          enableColumnDragging={true}
          enableColumnFilterModes={true}
          enableExpanding={false}
          muiTableProps={{
            sx: {
              border: "1px solid #e1e5e8",
            },
          }}
          muiTableHeadCellProps={{
            sx: {
              border: "1px solid #e1e5e8",
            },
          }}
          muiTableBodyCellProps={{
            sx: {
              border: "1px solid #e1e5e8",
            },
          }}
          displayColumnDefOptions={{
            "mrt-row-numbers": {
              size: 10,
            },
            "mrt-row-expand": {
              size: 10,
            },
            "mrt-row-actions": { size: 100 },
          }}
          initialState={{ showColumnFilters: false }}
          manualFiltering
          manualPagination
          manualSorting
          onColumnFiltersChange={setColumnFilters}
          onGlobalFilterChange={setGlobalFilter}
          onSortingChange={setSorting}
          onPaginationChange={setPagination}
          rowCount={data?.count ?? 0}
          state={{
            columnFilters,
            globalFilter,
            isLoading,
            pagination,
            showAlertBanner: isError,
            showProgressBars: isFetching,
            sorting,
            columnPinning,
          }}
          enableBottomToolbar={true}
          enableTopToolbar={true}
          muiTableBodyCellEditTextFieldProps={({ cell }) => ({
            onBlur: (event) => {
              handleEditRow(cell, event.target.value);
            },
          })}
          onColumnPinningChange={setColumnPinning}
          renderRowActions={({ row, table }) => (
            <Box
              sx={{
                display: "flex",
                gap: "0rem",
              }}
            >
              <IconButton
                color="primary"
                onClick={() => handleDeleteRow(row)}
                sx={{ padding: 0, margin: 0 }}
              >
                <Edit />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => handleDeleteRow(row)}
                sx={{ padding: 0, margin: 0 }}
              >
                <Delete />
              </IconButton>
            </Box>
          )}
          // renderRowActionMenuItems={({ row }) => [
          //   <IconButton
          //     color="primary"
          //     onClick={() => handleDeleteRow(row)}
          //     sx={{ padding: 0, margin: 0 }}
          //   >
          //     <Edit />
          //   </IconButton>,
          //   <IconButton
          //     color="error"
          //     onClick={() => handleDeleteRow(row)}
          //     sx={{ padding: 0, margin: 0 }}
          //   >
          //     <Delete />
          //   </IconButton>,
          // ]}
          muiToolbarAlertBannerProps={
            isError
              ? {
                  color: "error",
                  children: "Error loading data",
                }
              : undefined
          }
          positionToolbarAlertBanner="bottom"
          renderTopToolbarCustomActions={({ table }) => (
            <div
              style={{
                padding: "0 20px",
                maxWidth: "100%",
                display: "flex",
                gap: "15px",
              }}
            >
              <Tooltip arrow title="Refresh Data">
                <IconButton onClick={() => refetch()}>
                  <RefreshIcon />
                </IconButton>
              </Tooltip>
              <Button
                color="secondary"
                // onClick={() => setCreateModalOpen(true)}
                variant="contained"
              >
                Create New Account
              </Button>
              <Button
                color="error"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={() => {
                  alert("Delete Selected Accounts");
                }}
                variant="contained"
              >
                Delete Selected Accounts
              </Button>
            </div>
          )}
          // renderToolbarInternalActions={({ table }) => (
          //   <Box>
          //     {/* add custom button to print table  */}
          //     <IconButton
          //       onClick={() => {
          //         window.print();
          //       }}
          //     >
          //       <PrintIcon />
          //     </IconButton>
          //     {/* along-side built-in buttons in whatever order you want them */}
          //     {/* <MRT_ToggleDensePaddingButton table={table} /> */}
          //     {/* <MRT_FullScreenToggleButton table={table} /> */}
          //   </Box>
          // )}
        />
      )}
      <Outlet />
    </div>
  );
};

export default Main;
