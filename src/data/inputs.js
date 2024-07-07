import Input from "Components/Form/Input/Input";
import PhoneInput from "Components/Form/PhoneInput/PhoneInput";
import Textarea from "Components/Form/TextArea/TextArea";
import UploadFile from "Components/Form/UploadFIle/UploadFile";
import WCheckbox from "Components/Form/WCheckbox/WCheckbox";
import Label from "Components/Label/Label";

export const inputs = (tab_name, control, errors, setValue) => {
 switch (tab_name) {
  case "role":
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

  case "user":
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

  case "blog":
   return (
    <>
     <Label label="Title uz*">
      <Input
       control={control}
       placeholder="Enter title"
       name="title_uz"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Title en*">
      <Input
       control={control}
       placeholder="Enter title"
       name="title_en"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Title ru*">
      <Input
       control={control}
       placeholder="Enter title"
       name="title_ru"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Description uz*">
      <Textarea
       control={control}
       placeholder="Enter description"
       name="description_uz"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Description en*">
      <Textarea
       control={control}
       placeholder="Enter description"
       name="description_en"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Description ru*">
      <Textarea
       control={control}
       placeholder="Enter description"
       name="description_ru"
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

  case "partner":
   return (
    <UploadFile
     control={control}
     name="image"
     errors={errors}
     setValue={setValue}
    />
   );

  case "award":
   return (
    <>
     <Label label="Title uz*">
      <Input
       control={control}
       placeholder="Enter title"
       name="title_uz"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Title en*">
      <Input
       control={control}
       placeholder="Enter title"
       name="title_en"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Title ru*">
      <Input
       control={control}
       placeholder="Enter title"
       name="title_ru"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Description uz*">
      <Textarea
       control={control}
       placeholder="Enter description"
       name="description_uz"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Description en*">
      <Textarea
       control={control}
       placeholder="Enter description"
       name="description_en"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Description ru*">
      <Textarea
       control={control}
       placeholder="Enter description"
       name="description_ru"
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
     <UploadFile
      control={control}
      name="image"
      errors={errors}
      setValue={setValue}
     />
     <Label label="Name uz*">
      <Input
       control={control}
       placeholder="Enter name"
       name="name_uz"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Name en*">
      <Input
       control={control}
       placeholder="Enter name"
       name="name_en"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Name ru*">
      <Input
       control={control}
       placeholder="Enter name"
       name="name_ru"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Company name*">
      <Input
       control={control}
       placeholder="Enter company name"
       name="company_name"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Position*">
      <Input
       control={control}
       placeholder="Enter position"
       name="position"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Review text*">
      <Textarea
       control={control}
       placeholder="Enter review text"
       name="review_text"
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

  case "contact":
   return (
    <>
     <Label label="Name*">
      <Input
       control={control}
       placeholder="Enter name"
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
     <Label label="Company name*">
      <Input
       control={control}
       placeholder="Enter company name"
       name="company_name"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Email*">
      <Input
       control={control}
       placeholder="Enter email"
       type="email"
       name="email"
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
     <Label label="Service*">
      <Input
       control={control}
       placeholder="Enter service"
       name="service"
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
     <Label label="Take info*">
      <Input
       control={control}
       placeholder="Enter take info"
       name="take_info"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <WCheckbox control={control} name="is_Called" label="Is called ?" />
    </>
   );

  case "faq":
   return (
    <>
     <Label label="Question uz*">
      <Input
       control={control}
       placeholder="Enter question"
       name="question_uz"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Question en*">
      <Input
       control={control}
       placeholder="Enter question"
       name="question_en"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Question ru*">
      <Input
       control={control}
       placeholder="Enter question"
       name="question_ru"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Answer uz*">
      <Textarea
       control={control}
       placeholder="Enter answer"
       name="answer_uz"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Answer en*">
      <Textarea
       control={control}
       placeholder="Enter answer"
       name="answer_en"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Answer ru*">
      <Textarea
       control={control}
       placeholder="Enter answer"
       name="answer_ru"
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

  case "career":
   return (
    <>
     <Label label="Name uz*">
      <Input
       control={control}
       placeholder="Enter name"
       name="name_uz"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Name en*">
      <Input
       control={control}
       placeholder="Enter name"
       name="name_en"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Name ru*">
      <Input
       control={control}
       placeholder="Enter name"
       name="name_ru"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Description uz*">
      <Textarea
       control={control}
       placeholder="Enter description"
       name="description_uz"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Description en*">
      <Textarea
       control={control}
       placeholder="Enter description"
       name="description_en"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Description ru*">
      <Textarea
       control={control}
       placeholder="Enter description"
       name="description_ru"
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

  case "career-apply":
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
     <Label label="Email*">
      <Input
       control={control}
       placeholder="Enter email"
       type="email"
       name="email"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Resume Link*">
      <Input
       control={control}
       placeholder="Enter resume link"
       name="resume"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <Label label="Cover Letter*">
      <Textarea
       control={control}
       placeholder="Enter cover_letter"
       name="cover_letter"
       validation={{
        required: {
         value: true,
         message: "required",
        },
       }}
       errors={errors}
      />
     </Label>
     <WCheckbox control={control} name="is_Called" label="Is called ?" />
    </>
   );

  default:
   break;
 }
};
