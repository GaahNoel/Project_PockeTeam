import React from 'react';
import {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {Link, useHistory} from 'react-router-dom'
import Header from '../../components/header'

import './styles.css'

export default function Register(){

    const [login, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");


    return(
        
        
            <div className="registerContainer">
                
               
                    <Helmet>
                        <title>Pokemania - Registro</title>
                    </Helmet>
                    <Header/>
              

                <div className="registerBody"> 
                    <h3 id="cadastroMobile">CADASTRO</h3>    
                        <div className="registerForm">
                            <form>
                                <label>Login</label>
                                <input type="text" value={login} onChange={e => setLogin(e.target.value)}/>
                                <label>Username</label>
                                <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                                <label>Email</label>
                                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                                <label>Password</label>
                                <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                                <label>Confirm Password</label>
                                <input type="text" value={password2} onChange={e => setPassword2(e.target.value)}/>

                                <button type="submit">CRIAR</button>
                            </form>
                            <Link to="/Login">VOLTAR</Link>
                        </div>

                        <h3 id="cadastroDesktop">CADASTRO</h3>
                        
                </div>
        </div>
)}