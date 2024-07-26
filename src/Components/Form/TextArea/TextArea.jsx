import React, { useRef, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./TextArea.module.scss";
import { Controller } from "react-hook-form";
import { UseUpload } from "services/upload.service";

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

 const { mutateAsync } = UseUpload({
  onSuccess: () => {},
 });

 const imageHandler = useCallback(() => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
   const file = input.files[0];
   const formData = new FormData();
   formData.append("file", file);

   try {
    const response = await mutateAsync(formData);
    const url = response?.data;

    const quill = quillRef.current?.getEditor();
    if (quill && url) {
     const range = quill.getSelection();
     quill.insertEmbed(range.index, "image", url);
    }
   } catch (error) {
    console.error("Image upload failed:", error);
   }
  };
 }, [mutateAsync]);

 const modules = {
  toolbar: {
   container: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
     { list: "ordered" },
     { list: "bullet" },
     { indent: "-1" },
     { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
   ],
   handlers: {
    image: imageHandler,
   },
  },
  clipboard: {
   matchVisual: false,
  },
 };

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
        ref={quillRef}
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
        modules={modules}
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
