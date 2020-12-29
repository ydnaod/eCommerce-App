import React, { Fragment, useState } from 'react';

export function Login({handleAuthentication}){

    const [inputs, setInputs] = useState({
        user_email: '',
        user_password: ''
    });

    const {user_email, user_password} = inputs;

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            user_email,
            user_password
        }

        try {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })

            const parseRes = await response.json();
            localStorage.setItem("token", parseRes.token);
            handleAuthentication(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <p>
                Login
            </p>
            <form onSubmit={handleSubmit}>
                <input type="email" name="user_email" placeholder="email" value={user_email} onChange={handleChange}></input>
                <input type="password" name="user_password" placeholder="password" value={user_password} onChange={handleChange}></input>
                <button>Submit</button>
            </form>
        </Fragment>
    )
}