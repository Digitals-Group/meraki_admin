import React, { useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";

const CTable = ({
  columns,
  data,
  settings = {
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
    enableEditing: true,
    enableRowNumbers: true,
    editingMode: "modal",
    enableRowActions: true,
    enableClickToCopy: false,
    enableColumnDragging: true,
    enableColumnFilterModes: true,
    enableExpanding: false,
    manualFiltering: false,
    manualPagination: false,
    manualSorting: false,
  },
  initialState,
  border = {
    borderFull: "1px solid black",
    borderHeader: "1px solid black",
    borderData: "1px solid black",
  },
  handleEditRow,
  handleDeleteRow,
  muiToolbarAlertBannerProps,
  onColumnFiltersChange,
  onGlobalFilterChange,
  onPaginationChange,
  onSortingChange,
  renderTopToolbarCustomActions,
  rowCount,
  state,
}) => {
  return (
    <div id={!settings.enableTopBottomToolbar && "mui-table"}>
      <MaterialReactTable
        // data
        columns={columns}
        data={data}
        // settings
        enableColumnActions={settings.enableColumnActions}
        enableColumnFilters={settings.enableColumnFilters}
        enablePagination={settings.enablePagination}
        enableSorting={settings.enableSorting}
        enableBottomToolbar={settings.enableTopBottomToolbar}
        enableTopToolbar={settings.enableTopBottomToolbar}
        enableColumnResizing={settings.enableColumnResizing}
        enableColumnOrdering={settings.enableColumnOrdering}
        enablePinning={settings.enablePinning}
        enableStickyHeader={settings.enableStickyHeader}
        enableStickyFooter={settings.enableStickyFooter}
        enableRowNumbers={settings.enableRowNumbers}
        muiTableBodyRowProps={{ hover: settings.muiTableBodyRowProps }}
        enableClickToCopy={settings.enableClickToCopy}
        enableColumnDragging={settings.enableColumnDragging}
        enableColumnFilterModes={settings.enableColumnFilterModes}
        enableExpanding={settings.enableExpanding}
        // edit
        enableEditing={settings.enableEditing}
        editingMode={settings.editingMode}
        muiTableBodyCellEditTextFieldProps={({ cell }) => ({
          //onBlur is more efficient, but could use onChange instead
          onBlur: (event) => {
            handleEditRow(cell, event.target.value);
          },
        })}
        // delete
        enableRowActions={settings.enableRowActions}
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
            border: border.borderFull,
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            border: border.borderHeader,
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            border: border.borderData,
          },
        }}
        // initial state
        initialState={initialState}
        //manual
        manualFiltering={settings.manualFiltering}
        manualPagination={settings.manualPagination}
        manualSorting={settings.manualSorting}
        //error
        muiToolbarAlertBannerProps={muiToolbarAlertBannerProps}
        // on change
        onColumnFiltersChange={onColumnFiltersChange}
        onGlobalFilterChange={onGlobalFilterChange}
        onPaginationChange={onPaginationChange}
        onSortingChange={onSortingChange}
        // custom action
        renderTopToolbarCustomActions={renderTopToolbarCustomActions}
        //rowCount
        rowCount={rowCount}
        //state
        state={state}
      />
    </div>
  );
};

export default CTable;
