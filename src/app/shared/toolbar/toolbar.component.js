import React from 'react';
import './toolbar.component.css';
import { NavLink } from 'react-router-dom';

export default function ToolbarComponent(){
    return (
        <div className='Toolbar'>
            <h1>Toolbar</h1>
            <NavLink to='/' exact activeClassName='active'>Main</NavLink>
            <NavLink to='/info' exact activeClassName='active'>Info</NavLink>
            <NavLink to='/price' exact activeClassName='active'>Price</NavLink>
            <NavLink to='/support' exact activeClassName='active'>Support</NavLink>
            <NavLink to='/login' exact activeClassName='active'>Login</NavLink>
            <NavLink to='/regist' exact activeClassName='active'>Regist</NavLink>
        </div>
    );
}