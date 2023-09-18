import WSelect from "Components/Form/WSelect/WSelect";
import Label from "Components/Label/Label";
import React, { useState } from "react";
import { UseGetRelations } from "services/relation.service";

const RelationsSingle = ({ elem, control, errors, ind, multiInsert }) => {
  const [search, setSearch] = useState("");
  const { data } = UseGetRelations({
    queryParams: {
      offset: 0,
      limit: 10,
      search,
    },
    tab_name: elem.tab_name,
  });

  return (
    <Label label={elem.tab_name?.toUpperCase()}>
      <WSelect
        name={
          multiInsert ? `images.${ind}.${elem?.inputName}` : elem?.inputName
        }
        control={control}
        options={data?.datas?.map((el) => ({
          label: el.name || el.title || el.code,
          value: el.id,
        }))}
        errors={errors}
        validation={{
          required: {
            value: true,
            message: "Обязательное поле",
          },
        }}
        isClearable
        isSearchable
        isMulti={elem.isMulti}
        onInputChange={(e) => {
          setSearch(e);
        }}
      />
    </Label>
  );
};

export default RelationsSingle;
