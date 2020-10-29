import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import md5 from 'crypto-js/md5';


function Login (props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const salt = 'E1F5';

    async function mySubmitHandler () {
        const hashedPassword = md5(password+salt).toString();
        const url ='http://localhost:8080/api/person/'+username+'/'+hashedPassword;
        await axios.get(url).then(res => {
            console.log(res.data.valid);
            if(res.data.valid){
                props.isLogged();
                history.push("/");
               console.log("logged");
            }else{
                props.isNotLogged();
                console.log("not logged");
            }
        });
    }

        return (
            <div className='login'>
                <form className="form" >
                    <i className="material-icons">lock</i>
                    <input className = 'input' type = 'text'name='username' placeholder='username' onChange={event => setUsername(event.target.value)}/>
                    <input className = 'input' type = 'password' name = 'password' placeholder='Password' onChange={event => setPassword(event.target.value)}/>
                    <button className='btn' type='button' onClick={mySubmitHandler}>Log In</button>
                 </form>
            </div>
        )
    
} 

export default Login;