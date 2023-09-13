import React from "react";
import styles from "./MainSingleBase.module.scss";
import SideNav from "@trendmicro/react-sidenav";
import MainButton from "Components/MainButton/MainButton";
import useMainSingleBase from "./useMainSingleBase";
import Label from "Components/Label/Label";
import WSelect from "Components/Form/WSelect/WSelect";

const MainSingleBase = () => {
  const {
    expanded,
    expandedSinglePage,
    tab_name,
    handleSubmit,
    onSubmit,
    control,
    errors,
    id,
    inputs,
    navigate,
    handleDeleteSingle,
    relations,
  } = useMainSingleBase();
  return (
    <SideNav
      className={styles.base}
      style={{
        marginLeft: expanded ? "240px" : "64px",
        display: expandedSinglePage ? "flex" : "none",
      }}
      expanded={expandedSinglePage}
    >
      <div className={styles.base__body}>
        <div
          className={styles.base__body__header}
          onClick={() => navigate(`/main/${tab_name}`)}
        >
          <h3>{tab_name}</h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.base__body__content}
        >
          <div className={styles.base__body__content__inputs}>
            {relations.map((elem) => (
              <Label label={elem?.data?.tab_name?.toUpperCase()}>
                <WSelect
                  name={elem.data?.inputName}
                  control={control}
                  options={elem.data?.datas.map((el) => ({
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
                  isSearchable
                  isMulti={elem.data?.isMulti}
                />
              </Label>
            ))}
            {inputs()}
          </div>

          <div className={styles.base__body__content__buttons}>
            <MainButton
              type="button"
              text="Delete"
              fullWidth
              variant="outlined"
              loading={false}
              onClick={() => handleDeleteSingle()}
              sx={{ borderRadius: "0" }}
            />
            <MainButton
              type="submit"
              text={id === "create" ? "Create" : "Edit"}
              fullWidth
              variant="contained"
              loading={false}
              sx={{ borderRadius: "0" }}
            />
          </div>
        </form>
      </div>
    </SideNav>
  );
};

export default MainSingleBase;
