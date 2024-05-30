import Input from "Components/Form/Input/Input";
import PhoneInput from "Components/Form/PhoneInput/PhoneInput";
import Label from "Components/Label/Label";

export const inputs = (tab_name, control, errors) => {
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
         message: "Обязательное поле",
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

  default:
   break;
 }
};
