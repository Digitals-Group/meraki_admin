import Label from "Components/Label/Label";
import React, { useRef, useState } from "react";
import styles from "./UploadFile.module.scss";
import SingleFileUpload from "./SingleFileUpload";
import Compressor from "compressorjs";
import { UseUpload } from "services/upload.service";
import { CircularProgress } from "@mui/material";
import { ClearImgIcon, ImageAddIcon } from "helpers/Icons/Icons";
import { useWatch } from "react-hook-form";
import Video from "Components/Fields/Video/Video";

const UploadFile = ({ control, errors, name, setValue, isVideo }) => {
 const fileUrl = useWatch({ control, name });

 const uploadRef = useRef(null);
 const [loading, setLoading] = useState(false);

 const { mutate } = UseUpload({
  onSuccess: (res) => {
   setLoading(false);
   setValue(name, res.data);
  },
 });

 const handleFileUpload = (e) => {
  setLoading(true);
  const file = e.target.files[0];

  if (file?.size <= 10000000) {
   if (isVideo) {
    const data = new FormData();
    data.append("file", file);
    mutate(data);
   } else {
    new Compressor(file, {
     quality: 1,
     success(result) {
      const data = new FormData();
      data.append("file", result);
      mutate(data);
     },
     error(err) {
      setLoading(false);
      console.error("Image compression error:", err);
     },
    });
   }
  } else {
   setLoading(false);
  }
 };

 return (
  <div className={styles.uploadWithLabel}>
   <Label label={isVideo ? "Video*" : "Image*"}>
    <>
     <SingleFileUpload
      control={control}
      name={name || "file_url"}
      type="file"
      handleImage={handleFileUpload}
      uploadRef={uploadRef}
      unvisible
      validation={{
       required: {
        value: true,
        message: "Required Field",
       },
      }}
     />
    </>
   </Label>
   {fileUrl ? (
    <div className={styles.wrap__upload}>
     {isVideo ? (
      <Video url={fileUrl} style={{ width: "100%" }} />
     ) : (
      <img src={fileUrl} className={styles.uploaded__img} alt="uploaded img" />
     )}
     <div
      className={styles.deleteIcon}
      onClick={() => {
       setValue(name, "");
      }}
     >
      <ClearImgIcon />
     </div>
    </div>
   ) : (
    <div onClick={() => uploadRef.current.click()} className={styles.upload}>
     {loading ? (
      <div className={styles.progress}>
       <CircularProgress variant="indeterminate" />
      </div>
     ) : (
      <ImageAddIcon />
     )}
    </div>
   )}
   {errors?.[name]?.message && (
    <span className={styles.errMsg}>{errors?.[name]?.message}</span>
   )}
  </div>
 );
};

export default UploadFile;
