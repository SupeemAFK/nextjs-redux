import React from 'react'
import Link from 'next/link'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { deletePost } from '../redux/actions/actions'
import { useDispatch } from 'react-redux'

import styles from '../styles/Post.module.css'

export default function Post({ id, username, fullname, email, password, phone, address }) {
    const dispatch = useDispatch()

    return (
        <div className={styles.post}>
            <div className={styles.infoContainer}>
                <p>Username: {username}</p>
                <p>Fullname: {fullname}</p>
            </div>
            <div className={styles.infoContainer}>
                <p>Email: {email}</p> 
                <p>Password: {password}</p>
            </div>
            <div className={styles.infoContainer}>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
            </div>
            <div className={styles.btnContainer}>
                <button onClick={() => dispatch(deletePost(id))} className={`${styles.btn} ${styles.delete}`}><AiFillDelete /></button>
                <Link href={`Editpost/${id}`}>
                    <button className={`${styles.btn} ${styles.edit}`}><AiFillEdit /></button>
                </Link>
            </div>
        </div>
    )
}
