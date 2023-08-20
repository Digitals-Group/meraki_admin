import CTable from "Components/CTable/CTable";
import React, { useMemo, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Box, Switch } from "@mui/material";
import { data } from "./data";
import { UseGetProducts } from "services/fake.service";

const Main = () => {
  const { id } = useParams();
  // react-query table
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

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

  //  simple table

  // const [tableData, setTableData] = useState(() => data);

  // const columns = useMemo(
  //   () => [
  //     {
  //       accessorFn: (row) => `${row.name.firstName} ${row.name.lastName}`,
  //       header: "Full Name",
  //       Cell: ({ renderedCellValue, row }) => {
  //         return (
  //           <Box
  //             sx={{
  //               display: "flex",
  //               alignItems: "center",
  //               gap: "1rem",
  //             }}
  //           >
  //             <img
  //               alt="avatar"
  //               height={30}
  //               src={row.original.avatar}
  //               loading="lazy"
  //               style={{ borderRadius: "50%" }}
  //             />
  //             <span>{renderedCellValue}</span>
  //           </Box>
  //         );
  //       },
  //     },
  //     {
  //       accessorKey: "name.firstName",
  //       header: "First Name",
  //       size: 150,
  //     },
  //     {
  //       accessorKey: "name.lastName",
  //       header: "Last Name",
  //       size: 150,
  //     },
  //     {
  //       accessorKey: "address", //normal accessorKey
  //       header: "Address",
  //       size: 300,
  //     },
  //     {
  //       accessorKey: "city",
  //       header: "City",
  //       size: 150,
  //     },
  //     {
  //       accessorKey: "state",
  //       header: "State",
  //       size: 150,
  //     },
  //     {
  //       accessorKey: "status",
  //       header: "Status",
  //       size: 150,
  //       Cell: ({ renderedCellValue, row }) => {
  //         return (
  //           <Box
  //             sx={{
  //               display: "flex",
  //               alignItems: "center",
  //               gap: "1rem",
  //             }}
  //           >
  //             <Switch
  //               checked={row.status}
  //               inputProps={{ "aria-label": "controlled" }}
  //             />
  //             {/* <span>{renderedCellValue}</span> */}
  //           </Box>
  //         );
  //       },
  //     },
  //   ],
  //   []
  // );

  return (
    <div>
      {!id && (
        // simgple table
        // <CTable
        //   data={tableData}
        //   columns={columns}
        //   settings={{
        //     enableColumnActions: true,
        //     enableColumnFilters: true,
        //     enablePagination: true,
        //     enableSorting: true,
        //     enableTopBottomToolbar: true,
        //     muiTableBodyRowProps: true,
        //     enableColumnResizing: true,
        //     enableColumnOrdering: true,
        //     enablePinning: true,
        //     enableStickyHeader: true,
        //     enableStickyFooter: true,
        //     enableEditing: (row) => {
        //       return row.original.status;
        //     },
        //     enableRowNumbers: true,
        //     editingMode: "cell",
        //     enableRowActions: true,
        //     enableClickToCopy: false,
        //     enableColumnDragging: true,
        //     enableColumnFilterModes: true,
        //     enableExpanding: false,
        //   }}
        //   border={{
        //     borderFull: "1px solid #e1e5e8",
        //     borderHeader: "1px solid #e1e5e8",
        //     borderData: "1px solid #e1e5e8",
        //   }}
        //   handleEditRow={(cell, value) => {
        //     //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here
        //     let keys = cell.column.id.split(".");
        //     let newObj = {};
        //     keys.forEach((element, i) => {
        //       if (i === 0) {
        //         newObj = tableData[cell.row.index][element];
        //       } else {
        //         if (typeof newObj[element] === "object")
        //           newObj = newObj[element];
        //       }
        //     });

        //     if (keys.length > 1) {
        //       newObj[keys[keys.length - 1]] = value;
        //     } else tableData[cell.row.index][cell.column.id] = value;

        //     //send/receive api updates here
        //     setTableData([...tableData]); //re-render with new data
        //   }}
        //   handleDeleteRow={(row) => {
        //     const newTableData = tableData.filter(
        //       (_, index) => index !== row.index
        //     );
        //     setTableData(newTableData);
        //   }}
        // />
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
            editingMode: "cell",
            enableRowActions: true,
            enableClickToCopy: false,
            enableColumnDragging: true,
            enableColumnFilterModes: true,
            enableExpanding: false,
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
        />
      )}
      <Outlet />
    </div>
  );
};

export default Main;
