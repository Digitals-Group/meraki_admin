import Input from "Components/Form/Input/Input";
import PhoneInput from "Components/Form/PhoneInput/PhoneInput";
import Textarea from "Components/Form/TextArea/TextArea";
import UploadFile from "Components/Form/UploadFIle/UploadFile";
import Label from "Components/Label/Label";

export const inputs = (tab_name, control, errors, setValue) => {
 switch (tab_name) {
  case "users":
   return (
    <>
     <Label label="First name*">
      <Input
       control={control}
       placeholder="Enter first name"
       name="first_name"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Last name*">
      <Input
       control={control}
       placeholder="Enter last name"
       name="last_name"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Phone number">
      <PhoneInput
       mask="+\9\9\8 (99) 999-99-99"
       maskChar="_"
       name="phone_number"
       control={control}
       errors={errors}
       validation={{
        required: {
         value: true,
         message: "Required Field",
        },
        validate: {
         isFull: (value) => {
          if (value.includes("_")) return "Invalid phone";
         },
        },
       }}
      />
     </Label>
     <Label label="User name">
      <Input
       control={control}
       placeholder="Enter user name"
       name="username"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Password">
      <Input
       control={control}
       placeholder="Enter password"
       name="password"
       typePassword
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
    </>
   );

  case "roles":
   return (
    <Label label="Name*">
     <Input
      control={control}
      placeholder="Enter role name"
      name="name"
      validation={{
       required: {
        value: true,
        message: "required",
       },
      }}
      errors={errors}
     />
    </Label>
   );

  case "blog":
   return (
    <>
     <Label label="Title*">
      <Input
       control={control}
       placeholder="Enter title"
       name="title"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Description*">
      <Textarea
       control={control}
       placeholder="Enter description"
       name="description"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <UploadFile
      control={control}
      name="image"
      errors={errors}
      setValue={setValue}
     />
    </>
   );

  case "partners":
   return (
    <UploadFile
     control={control}
     name="image"
     errors={errors}
     setValue={setValue}
    />
   );

  case "awards":
   return (
    <>
     <Label label="Title*">
      <Input
       control={control}
       placeholder="Enter title"
       name="title"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Description*">
      <Textarea
       control={control}
       placeholder="Enter description"
       name="description"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <UploadFile
      control={control}
      name="image"
      errors={errors}
      setValue={setValue}
     />
    </>
   );

  case "review":
   return (
    <>
     <UploadFile
      control={control}
      name="video"
      errors={errors}
      setValue={setValue}
      isVideo
     />
     <Label label="Title*">
      <Input
       control={control}
       placeholder="Enter title"
       name="title"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Description*">
      <Textarea
       control={control}
       placeholder="Enter description"
       name="description"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <UploadFile
      control={control}
      name="image"
      errors={errors}
      setValue={setValue}
     />
    </>
   );

  default:
   break;
 }
};
