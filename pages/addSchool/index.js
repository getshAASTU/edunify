import React from 'react'
import styles from './AddSchool.module.css'
import {useForm} from 'react-hook-form'
import { useState,useEffect } from 'react'
const AddSchool = () => {
    const [database,setDatabase]=useState([])
    const urlpost="http://localhost:3000/api/createdata"
    const urlget="http://localhost:3000/api/createdata"
    const {register,handleSubmit}=useForm()
    const onSubmit=async(data)=>{
       const createNewData = async (data) => {
        
        try {
          await fetch(urlpost, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          const updatedResponse = await fetch(urlget);
          const { data: updatedData } = await updatedResponse.json();
          setDatabase(updatedData);
          console.log(database)
        } catch (error) {
          console.error('Error creating new data:', error.message);
        }
      };
      await createNewData(data)
    }
    useEffect(()=>{
     onSubmit()
    },[])
  return (
    <div className={styles.form}>
    <div className={styles.title}>Welcome</div>
    <div className={styles.subtitle}>Let's add your new school</div>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div className={`${styles.inputContainer} ${styles.ic1}`}>
      <input {...register('name')} id="name" className={styles.input} type="text" placeholder=" " />
     
      <label htmlFor="name" className={styles.placeholder}>name</label>
    </div>
    <div className={`${styles.inputContainer} ${styles.ic2}`}>
      <input {...register('address')} id="address" className={styles.input} type="text" placeholder=" " />
      <label htmlFor="address" className={styles.placeholder}>address</label>
    </div>
    <div className={`${styles.inputContainer} ${styles.ic2}`}>
      <input {...register('city')} id="city" className={styles.input} type="text" placeholder=" " />
      <label htmlFor="city" className={styles.placeholder}>city</label>
    </div>
    <div className={`${styles.inputContainer} ${styles.ic2}`}>
      <input {...register('state')} id="state" className={styles.input} type="text" placeholder=" " />
      <label htmlFor="state" className={styles.placeholder}>state</label>
    </div>
    <div className={`${styles.inputContainer} ${styles.ic2}`}>
      <input id="contact" {...register('contact')} className={styles.input} type="text" placeholder=" " />
      
      <label htmlFor="contact" className={styles.placeholder}>Contact</label>
    </div>
    <div className={`${styles.inputContainer} ${styles.ic2}`}>
      <input id="email" {...register('email')} className={styles.input} type="text" placeholder=" " />
      
      <label htmlFor="email" className={styles.placeholder}>Email</label>
    </div>
    <button type="text" className={styles.submit}>submit</button>
    </form>
  </div>
  )
}

export default AddSchool