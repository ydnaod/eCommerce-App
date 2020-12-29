import React, { Fragment, useState } from 'react';

export function Register(props){

    const [inputs, setInputs] = useState({
        user_name: '',
        user_email: '',
        user_password: ''
    });

    const {user_name, user_email, user_password} = inputs;

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    const handleSubmitForm = async (e) => {

        e.preventDefault();

        const body = {
            user_name, user_email, user_password
        }
        try {
            const response = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: { "Content-Type" : "application/json" } ,
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();
            localStorage.setItem("token", parseRes.token);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <p>Register</p>
            <form onSubmit={handleSubmitForm}>
                <input type="text" name="user_name" placeholder="username" value={user_name} onChange={ e => handleChange(e)}/>
                <input type="email" name="user_email" placeholder="email" value={user_email} onChange={ e => handleChange(e)}/>
                <input type="password" name="user_password" placeholder="password" value={user_password} onChange={ e => handleChange(e)}/>
                <button>Submit</button>
            </form>
        </Fragment>
    )
}