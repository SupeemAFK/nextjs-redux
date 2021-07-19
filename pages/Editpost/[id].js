import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { editPost } from '../../redux/actions/actions'

import styles from '../../styles/Editpost.module.css';

//components
import Input from '../../components/Input';

export default function Editpost(props) {

    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.posts)

    const post =  posts.find(post => post.id === props.id)

    const [editpostForm, setEditpostForm] = useState(post)

    //showalert
    function showAlert() {
        toast.error('❌ Please put all informations!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    //showsucces
    function showSuccess() {
        toast.success('✔️ Post has been updated!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }


    function handleOnChange(e) {
        const name = e.target.name
        const value = e.target.value

        setEditpostForm({...editpostForm, [name]: value})
    }

    function handleOnSubmit() {
        const { username, fullname, email, password, phone, address } = editpostForm

        if (!username || !fullname || !email || !password || !phone || !address) {
            showAlert()
        } 
        else {
            dispatch(editPost(editpostForm))
            showSuccess()
        }
    }

    return (
        <>
            <ToastContainer />
            <div className={styles.editPost}>
                <h1>Edit User</h1>
                <form className={styles.form}>
                    <Input handleOnChange={handleOnChange} postForm={editpostForm} label_1="Username" label_2="Fullname" />
                    <Input handleOnChange={handleOnChange} postForm={editpostForm}  label_1="Email" label_2="Password" />
                    <Input handleOnChange={handleOnChange} postForm={editpostForm}  label_1="Phone" label_2="Address" />
                </form>
                <div className={styles.btnContainer}>
                    <Link href='/'>
                        <button className={`${styles.btn} ${styles.goBack}`}>go back</button>
                    </Link>
                    <button onClick={() => handleOnSubmit()} className={`${styles.btn} ${styles.update}`}>update</button>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps({ params }) {
    return {
        props: {
            id: params.id,
        }
    }
}

