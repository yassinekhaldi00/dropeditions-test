import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import md5 from 'crypto-js/md5';

function Signup(props){

    const URL_SPRING_API = 'http://localhost:8080/api/person/';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const salt = 'E1F5';

    async function mySubmitHandler () {
        const hashedPassword = md5(password+salt).toString();
        console.log(hashedPassword);
        await axios.post(URL_SPRING_API,{
            email: username,
            password: hashedPassword,
            valid: true
        }).then(res=>{
            if(res.data.valid){
                props.isLogged();
                history.push('/');
            }
        });
        
    }


    return(
        <div className='login'>
        <form className="form" >
            <i className="material-icons">add_circle</i>
            <input className = 'input' type = 'text'name='username' placeholder='username' onChange={event => setUsername(event.target.value)}/>
            <input className = 'input' type = 'password' name = 'password' placeholder='Password' onChange={event => setPassword(event.target.value)}/>
            <button className='btn' type='button' onClick={mySubmitHandler}>Sign up</button>
         </form>
    </div>
    )
}

export default Signup;