import React from "react";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import Label from "Components/Label/Label";
import Input from "Components/Form/Input/Input";
import MainButton from "Components/MainButton/MainButton";

const Login = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_name: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <div className={styles.login}>
      <div className={styles.login__image} />
      <div className={styles.login__form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.login__form__content}
        >
          <Label label="Name*">
            <Input
              control={control}
              placeholder="Enter name"
              name="user_name"
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
              }}
              errors={errors}
            />
          </Label>
          <Label label="Password*">
            <Input
              control={control}
              placeholder="Enter password"
              name="password"
              validation={{
                required: {
                  value: true,
                  message: "required",
                },
              }}
              typePassword
              errors={errors}
            />
          </Label>

          <MainButton
            type="submit"
            text="Submit"
            fullWidth
            variant="contained"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
