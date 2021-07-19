import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillSetting } from 'react-icons/ai'
import { IoNotifications } from 'react-icons/io5'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href='/'>
                <div className={styles.imgWrapper}>
                    <Image src="/images/navbar-logo.png" layout="fill" objectFit="contain" priority />
                </div>
            </Link>
            <div className={styles.userInfo}>
                <div className={styles.btnContainer}>
                    <button><AiFillSetting /></button>
                    <button><IoNotifications /></button>
                </div>
                <div className={styles.userImageWrapper}>
                    <Image src="/images/userImage.png" layout="fill" objectFit="contain" priority />
                </div>
            </div>
        </div>
    )
}
