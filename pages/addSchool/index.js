import React from "react";
import styles from "./AddSchool.module.css";
import { useForm } from "react-hook-form";

import { useState} from "react";
const AddSchool = () => {
  const [isSubmitting,setIsSubmitting]=useState(false)
  const [database, setDatabase] = useState([]);
  const urlpost = "http://localhost:3000/api/createdata";
  const urlget = "http://localhost:3000/api/createdata";
  const { register, handleSubmit, formState, } = useForm();
  const onSubmit = async (data) => {
    if (isSubmitting) {
      return;
    }
      try {
        setIsSubmitting(true);
        const response= await fetch(urlpost, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data }),
        });
        if(response.ok){
          console.log('Form submitted successfully!');
        }
        else{
          console.error('Failed to submit form.');
        }

        const updatedResponse = await fetch(urlget);
        const { data: updatedData } = await updatedResponse.json();
        setDatabase(updatedData);
        console.log(database);
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
