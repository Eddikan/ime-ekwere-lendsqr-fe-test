"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAppDispatch } from '@/store/hooks';
import { login } from '@/store/userSlice';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import styles from "./login.module.scss";

interface LoginFormInputs {
  email: string;
  password: string;
}

// Validation schema using Yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    setLoading(true);
    
    // Dispatch email to the Redux store
    dispatch(login(data.email));

    // Simulate an async operation (like an API call)
    setTimeout(() => {
      setLoading(false);
      router.push("/users"); // Navigate to the users page
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <Image
            src="/lendsqr.svg"
            alt="welcome Banner"
            priority
            width={173.76}
            height={36}
          />
          <Image
            src="/welcomeBanner.svg"
            alt="welcome Banner"
            priority
            className={styles.welcomeBanner}
            width={600}
            height={337}
          />
        </div>
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.welcome}>Welcome!</h2>
        <p className={styles.details}>Enter details to login.</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <InputField
            placeholder="Email"
            type="text"
            register={register("email")}
            error={errors.email?.message}
          />
          <InputField
            placeholder="Password"
            type="password"
            register={register("password")}
            error={errors.password?.message}
            showTogglePassword={true}
          />
       
          <p className={styles.forgotPassword}>FORGOT PASSWORD?</p>

          <div>
            <Button isLoading={loading}>Log In</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
