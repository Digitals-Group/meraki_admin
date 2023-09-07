import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UseGetProducts } from "services/fake.service";

const useMain = () => {
  const { id } = useParams();
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

  const { data, isError, isFetching, isLoading, refetch } = UseGetProducts({
    queryParams: {
      offset: pagination.pageIndex * pagination.pageSize,
      limit: pagination.pageSize,
    },
  });

  const columns = data?.fields?.map((elem) => {
    return {
      accessorKey: elem.slug,
      accessorFn: (row) => {
        switch (elem.type) {
          case "PHOTO":
            return (
              <img
                src={row[elem.slug]}
                alt="ImageColumn"
                style={{ width: "100px", height: "100px" }}
              />
            );
          case "SWITCH":
            return (
              <div style={{ border: "1px solid red" }}>
                {row[elem.slug].toString()}
              </div>
            );
          default:
            return row[elem.slug];
        }
      },
      enableEditing: false,
      header: elem.label,
      // Header: (
      //   <i style={{ color: "red" }}>
      //     sdfsdfsdjfkjsdhfkjsdhkfkjsdh ksjdhkfj dskfh dskjfhksdh fkjsd{" "}
      //   </i>
      // ),
      // Footer: () => (
      //   <Stack>
      //     Max Age:
      //     <Box color="warning.main">sdfsdfsd</Box>
      //   </Stack>
      // ),
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

  const handleDeleteRow = (row) => {
    // const newTableData = tableData.filter(
    //   (_, index) => index !== row.index
    // );
    // setTableData(newTableData);
  };
  return {
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
  };
};

export default useMain;
