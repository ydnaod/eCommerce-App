import React, { Fragment, useState } from 'react';

export function Register(){

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Fragment>
            <p>Register</p>
            <form>
                <input type="text" name="username" placeholder="username" value={inputs.username} onChange={handleChange}/>
                <input type="email" name="email" placeholder="email" value={inputs.email} onChange={handleChange}/>
                <input type="password" name="password" placeholder="password" value={inputs.password} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </Fragment>
    )
}