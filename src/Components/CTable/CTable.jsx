import React from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";

const CTable = ({
  columns,
  data,
  settings: {
    enableColumnActions = true,
    enableColumnFilters = true,
    enablePagination = true,
    enableSorting = true,
    enableTopBottomToolbar = true,
    muiTableBodyRowProps = true,
    enableColumnResizing = true,
    enableColumnOrdering = true,
    enablePinning = true,
    enableStickyHeader = true,
    enableStickyFooter = true,
    enableEditing = true,
    enableRowNumbers = true,
    editingMode = "modal",
    enableRowActions = true,
    enableClickToCopy = false,
    enableColumnDragging = true,
    enableColumnFilterModes = true,
    enableExpanding = false,
  },
  border: {
    borderFull = "1px solid black",
    borderHeader = "1px solid black",
    borderData = "1px solid black",
  },
  handleEditRow,
  handleDeleteRow,
}) => (
  <div id={!enableTopBottomToolbar && "mui-table"}>
    <MaterialReactTable
      // data
      columns={columns}
      data={data}
      // settings
      enableColumnActions={enableColumnActions}
      enableColumnFilters={enableColumnFilters}
      enablePagination={enablePagination}
      enableSorting={enableSorting}
      enableBottomToolbar={enableTopBottomToolbar}
      enableTopToolbar={enableTopBottomToolbar}
      enableColumnResizing={enableColumnResizing}
      enableColumnOrdering={enableColumnOrdering}
      enablePinning={enablePinning}
      enableStickyHeader={enableStickyHeader}
      enableStickyFooter={enableStickyFooter}
      enableRowNumbers={enableRowNumbers}
      muiTableBodyRowProps={{ hover: muiTableBodyRowProps }}
      enableClickToCopy={enableClickToCopy}
      enableColumnDragging={enableColumnDragging}
      enableColumnFilterModes={enableColumnFilterModes}
      enableExpanding={enableExpanding}
      // edit
      enableEditing={enableEditing}
      editingMode={editingMode}
      muiTableBodyCellEditTextFieldProps={({ cell }) => ({
        //onBlur is more efficient, but could use onChange instead
        onBlur: (event) => {
          handleEditRow(cell, event.target.value);
        },
      })}
      // delete
      enableRowActions={enableRowActions}
      renderRowActions={({ row, table }) => (
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Tooltip arrow placement="right" title="Delete">
            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      )}
      // borders
      muiTableProps={{
        sx: {
          border: borderFull,
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          border: borderHeader,
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          border: borderData,
        },
      }}
    />
  </div>
);

export default CTable;
