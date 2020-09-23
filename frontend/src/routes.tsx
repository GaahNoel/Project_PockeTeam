import React from 'react';
import Home from './pages/home';
import Register from './pages/register'
import {BrowserRouter, Route} from 'react-router-dom';

export default function Routes(){
    return(

                <BrowserRouter>
                    <Route path="/" component={Home} exact/>
                    <Route path="/register" component={Register} exact/>
                </BrowserRouter>


    )
}