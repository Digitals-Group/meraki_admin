import WSelect from "Components/Form/WSelect/WSelect";
import Label from "Components/Label/Label";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UseGetRelations } from "services/relation.service";

const RelationsSingle = ({ elem, control, errors }) => {
 const [search, setSearch] = useState("");
 const pagination = useSelector(
  (state) => state.pagination.pagination_relation
 );
 const { data } = UseGetRelations({
  queryParams: {
   where: {
    name: {
     contains: search,
     mode: "insensitive",
    },
   },
   skip: +pagination.pageIndex * pagination.pageSize,
   take: +pagination.pageSize,
  },
  tab_name: elem.tab_name,
 });

 return (
  <Label label={elem.tab_name?.toUpperCase()}>
   <WSelect
    name={elem?.tab_name}
    control={control}
    options={data?.data?.map((el) => ({
     label: el.name,
     value: el.id,
    }))}
    errors={errors}
    validation={{
     required: {
      value: true,
      message: "Required Field",
     },
    }}
    isClearable
    isSearchable
    isMulti={elem.isMulti}
    onInputChange={setSearch}
   />
  </Label>
 );
};

export default RelationsSingle;
