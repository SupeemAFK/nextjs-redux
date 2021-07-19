import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/actions/actions'

import styles from '../styles/Addpost.module.css'

//components
import Input from '../components/Input'

export default function Addpost() {
    const dispatch = useDispatch()

    const initialState = {
        username: '',
        fullname: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    }
    const [addpostForm, setAddpostForm] = useState(initialState)
    
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
        toast.success('✔️ Post has been added!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    function handleOnChange(e){
        const name = e.target.name
        const value = e.target.value

        setAddpostForm({...addpostForm, [name]: value})
    }

    function handleOnSubmit() {
        const { username, fullname, email, password, phone, address } = addpostForm

        if (!username || !fullname || !email || !password || !phone || !address) {
            showAlert()
        } 
        else {
            const post = {...addpostForm, id: new Date().getTime().toString()}
            dispatch(addPost(post))
            setAddpostForm(initialState)
            showSuccess()
        }
    }

    return (
        <>
            <ToastContainer />
            <div className={styles.formContainer}>
                <h1>New User</h1>
                <form className={styles.form}>
                    <Input handleOnChange={handleOnChange} postForm={addpostForm} label_1="Username" label_2="Fullname" />
                    <Input handleOnChange={handleOnChange} postForm={addpostForm}  label_1="Email" label_2="Password" />
                    <Input handleOnChange={handleOnChange} postForm={addpostForm}  label_1="Phone" label_2="Address" />
                </form>
                <div className={styles.btnContainer}>
                    <Link href='/'>
                        <button className={`${styles.btn} ${styles.goBack}`}>go back</button> 
                    </Link>
                    <button onClick={() => handleOnSubmit()} type="submit" className={`${styles.btn} ${styles.create}`}>create</button>
                </div>
            </div>
        </>
    )
}
