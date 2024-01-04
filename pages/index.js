"use client";
import Head from "next/head";
// import Image from 'next/image'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
// import { useState,useEffect } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Edunify</title>
        <meta name="description" content="Edunify Next.js MySQL Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/edunify.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.welcome}>
          <h3>Well Come to EdUnify</h3>
          <div className={styles.btnContainer}>
            <button>
              <Link className={styles.link} href="/schools">Schools</Link>
            </button>
            <button>
              <Link className={styles.link} href="/addSchool">Add New School</Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
