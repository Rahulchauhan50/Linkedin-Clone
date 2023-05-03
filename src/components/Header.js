import React from 'react'
import styles from './Styling/Header.module.css'
import { Link } from 'react-router-dom'
export default function Header(props) {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <span style={{marginRight: "8px",fontSize:"0px"}}>
          <Link to="/home">
              <img src="/images/home-logo.svg" alt="" />
          </Link>
        </span>
        <div className={styles.Search}>
          <div>
            <input type='text' placeholder='search here'></input>
          </div>
          <div className={styles.SearchIcon}>
            <img src="/images/search-icon.svg" alt="" />
          </div>
          {/* <div className={styles.Nav}>
            <ul className={styles.NavListWrap}>
              <li className={styles.NavList}>
                <a href='/'>
                  <img src="/images/nav-home.svg" alt="" />
                  <span>Home</span>
                </a>
              </li>
              <li className={styles.NavList}>
                <a href='/'>
                  <img src="/images/nav-network.svg" alt="" />
                  <span>My Network</span>
                </a>
              </li>
              <li className={styles.NavList}>
                <a href='/'>
                  <img src="/images/nav-jobs.svg" alt="" />
                  <span>Jobs</span>
                </a>
              </li>
              <li className={styles.NavList}>
                <a href='/'>
                  <img src="/images/nav-messaging.svg" alt="" />
                  <span>Messaging</span>
                </a>
              </li>
              <li className={styles.NavList}>
                <a href='/'>
                  <img src="/images/nav-notifications.svg" alt="" />
                  <span>Notifications</span>
                </a>
              </li>
              <li className={styles.NavList} id='User'>
                <a href='/'>
                  <img src="/images/user.svg" alt="" />
                  <span>Me</span>
                  <img src="/images/down-icon.svg" alt="" />
                </a>
                <div className={styles.SignOut}>
                <a>Sign Out</a>
              </div>
              </li>
            </ul>
          </div> */}

        </div>
      </div>
    </div>
  )
}
