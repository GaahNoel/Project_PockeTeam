import React from 'react';
import {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {Link, useHistory} from 'react-router-dom'
import Header from '../../components/header'

import './styles.css'

export default function Login(){

    const [login, setLogin] = useState("");
    const [username, setUsername] = useState("");

    return(
        
        
            <div className="loginContainer">
                
               
                    <Helmet>
                        <title>Pokemania - Login</title>
                    </Helmet>
                    <Header/>
              

                <div className="loginBody"> 
                    <h3 id="loginMobile">LOGIN</h3>    
                    <div className="loginForm">
                        <form>
                            <label>Login</label>
                            <input type="text" value={login} onChange={e => setLogin(e.target.value)}/>
                            <label>Username</label>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                            <div>
                                <button type="submit">ENTRAR</button>
                                <Link to="/Login" id="backButton">VOLTAR</Link>
                            </div>
                        </form>
                       
                    </div>

                    <div>
                        <h3 id="loginDesktop">LOGIN</h3>
                        <h4 id="loginDesktopText">Fique por dentro dos times <p>preferidos e das principais</p><p>estratégias de outros jogadores</p><p> e fãs de pokémon.</p></h4>
                    </div>
                        
                        
                </div>
        </div>
)}