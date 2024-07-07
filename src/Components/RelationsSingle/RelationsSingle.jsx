import WSelect from "Components/Form/WSelect/WSelect";
import Label from "Components/Label/Label";
import React from "react";
import { UseGetRelations } from "services/relation.service";

const RelationsSingle = ({ elem, control, errors }) => {
 const { data, isLoading } = UseGetRelations({
  queryParams: {},
  tab_name: elem.tab_name,
 });

 return (
  <Label label={elem.tab_name?.toUpperCase()}>
   <WSelect
    name={elem?.tab_name}
    control={control}
    options={data?.data?.map((el) => ({
     label: el.name || el.title,
     value: el.id,
    }))}
    errors={errors}
    validation={{
     required: {
      value: true,
      message: "Required Field",
     },
    }}
    isLoading={isLoading}
    isClearable
    isSearchable
    isMulti={elem.isMulti}
   />
  </Label>
 );
};

export default RelationsSingle;
