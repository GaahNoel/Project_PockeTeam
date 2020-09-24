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
                    <h3 id="registerMobile">CADASTRO</h3>    
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
                            
                            <div>
                                <button type="submit">CRIAR</button>
                                <Link to="/Login" id="backButton">VOLTAR</Link>
                            </div>
                        </form>
                       
                    </div>

                    <div>
                        <h3 id="registerDesktop">CADASTRO</h3>
                        <h4 id="registerDesktopText">Realize o cadastro e faça parte do PockeTeam,<p>o site desenvolvido de fãs para fãs.</p></h4>
                    </div>
                        
                        
                </div>
        </div>
)}