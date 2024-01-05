import React from "react";
import styles from "./AddSchool.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is required"),
  })
  .required();
const AddSchool = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const urlpost = "http://localhost:3000/api/school";
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;
  const onSubmit = async (data) => {
    if (isSubmitting) {
      return;
    }
    try {
      setIsSubmitting(true);
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      };
      const res = await fetch(urlpost, postData);
      const response = await res.json();
      // console.log(response);
    } catch (error) {
      console.error("Error creating new data:", error.message);
    }
  };
  return (
    <div className={styles.form}>
      <div className={styles.title}>Welcome</div>
      <div className={styles.subtitle}>Let's add your new school</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.inputContainer} ${styles.ic1}`}>
          <input
            {...register("name")}
            id="name"
            className={styles.input}
            type="text"
            placeholder=" "
          />

          <label htmlFor="name" className={styles.placeholder}>
            name
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic2}`}>
          <input
            {...register("address")}
            id="address"
            className={styles.input}
            type="text"
            placeholder=" "
          />
          <label htmlFor="address" className={styles.placeholder}>
            address
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic2}`}>
          <input
            {...register("city")}
            id="city"
            className={styles.input}
            type="text"
            placeholder=" "
          />
          <label htmlFor="city" className={styles.placeholder}>
            city
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic2}`}>
          <input
            {...register("state")}
            id="state"
            className={styles.input}
            type="text"
            placeholder=" "
          />
          <label htmlFor="state" className={styles.placeholder}>
            state
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic2}`}>
          <input
            id="contact"
            {...register("contact")}
            className={styles.input}
            type="text"
            placeholder=" "
          />

          <label htmlFor="contact" className={styles.placeholder}>
            Contact
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic2}`}>
          <input
            id="email"
            {...register("email")}
            className={styles.input}
            type="text"
            placeholder=" "
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
          <label htmlFor="email" className={styles.placeholder}>
            Email
          </label>
        </div>
        <button
          type="submit"
          className={styles.submit}
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddSchool;
