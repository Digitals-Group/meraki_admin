import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./TextArea.module.scss";
import { Controller } from "react-hook-form";

const Textarea = ({
 disabled,
 name = "",
 defaultValue,
 control,
 icon,
 autoComplete = "off",
 placeholder,
 errors,
 validation,
 required = false,
 commentsRef,
 noBorder = false,
 ...restProps
}) => {
 const quillRef = useRef(null);

 return (
  <div>
   <Controller
    control={control}
    rules={validation}
    defaultValue={defaultValue}
    name={name}
    render={({ field: { value, onChange, name } }) => {
     return (
      <div
       className={`${styles.textAreaWrapper} ${
        disabled ? styles.disabled : ""
       } ${noBorder ? styles.noBorder : ""}`}
      >
       {icon && icon}
       <ReactQuill
        ref={commentsRef || quillRef}
        value={value}
        onChange={onChange}
        theme="snow"
        readOnly={disabled}
        placeholder={placeholder}
        className={styles.quillEditor}
        style={
         errors?.[`${name}`]?.message
          ? { borderColor: "#F76659", fontFamily: "inherit" }
          : { fontFamily: "inherit" }
        }
        {...restProps}
       />
      </div>
     );
    }}
   />
   {errors?.[`${name}`]?.message && (
    <span className={styles.errMsg}>{errors?.[`${name}`]?.message}</span>
   )}
  </div>
 );
};

export default Textarea;
