import React from 'react'
// import styled from 'styled-components'
import styles from './Styling/Login.module.css'

export default function Login(props) {
  return (
    <div className={styles.Container}>
      <nav className={styles.Nav}>
        <a id={styles.LinkImg} href='/'>
          <img src="/images/login-logo.svg" alt="" ></img>
        </a>
        <div>
          <a href='/' className={styles.Join}>Join now</a>
          <a href='/' className={styles.SignIn}>Sign In</a>
        </div>
      </nav>
      <section className={styles.Section}>
        <div className={styles.Hero}>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </div>
        <div className={styles.Form}>
          <button className={styles.Google}>
          <img src="/images/google.svg" alt="" />
           <p style={{marginLeft: "7px"}}> Sign in with Google</p>
          </button>
        </div>
      </section>
    </div>
  );
};


