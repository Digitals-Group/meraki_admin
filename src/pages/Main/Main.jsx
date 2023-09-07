import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import MaterialReactTable from "material-react-table";
import { Delete } from "@mui/icons-material";
import useMain from "./useMain";

const enableBottomToolbar = true;
const enableTopToolbar = true;

const Main = () => {
  const {
    id,
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
  } = useMain();
  return (
    <div id={!enableTopToolbar && !enableBottomToolbar && "mui-table"}>
      {!id && (
        <MaterialReactTable
          data={data?.data ?? []}
          columns={columns ?? columnsLoading}
          rowCount={data?.count ?? 0}
          enableBottomToolbar={enableBottomToolbar}
          enableTopToolbar={enableTopToolbar}
          enableColumnActions={true}
          enableColumnFilters={true}
          enablePagination={true}
          enableSorting={true}
          enableColumnResizing={true}
          enableColumnOrdering={true}
          enablePinning={true}
          enableStickyHeader={true}
          enableStickyFooter={true}
          enableRowSelection={true}
          enableRowActions={true}
          enableColumnDragging={true}
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
              whiteSpace: "break-spaces",
            },
          }}
          displayColumnDefOptions={{
            "mrt-row-numbers": {
              size: 10,
            },
            "mrt-row-actions": { size: 70 },
          }}
          manualPagination
          manualSorting
          onColumnFiltersChange={setColumnFilters}
          onColumnPinningChange={setColumnPinning}
          onSortingChange={setSorting}
          onPaginationChange={setPagination}
          state={{
            isLoading,
            showAlertBanner: isError,
            showProgressBars: isFetching,
            columnPinning,
          }}
          defaultColumn={{
            minSize: 40, //allow columns to get smaller than default
            maxSize: 9001, //allow columns to get larger than default
            size: 260, //make columns wider by default
          }}
          renderRowActions={({ row, table }) => (
            <Box
              sx={{
                display: "flex",
                gap: "0rem",
              }}
            >
              <IconButton
                color="error"
                onClick={() => handleDeleteRow(row)}
                sx={{ padding: 0, margin: 0 }}
              >
                <Delete />
              </IconButton>
            </Box>
          )}
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
                // onClick={() => setCreateModalOpen(false)}
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
        />
      )}
      <Outlet />
    </div>
  );
};

export default Main;
