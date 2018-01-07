import React from 'react';
import './login.component.css';
import { Search } from 'semantic-ui-react';

export default function LoginComponent(){
    
    setTimeout(() => document.querySelector('input').focus(), 50);

    return (
        <div className='Login'>
            <div className='Login__Input'>
                <Search 
                    noResultsMessage='등록된 정보가 없습니다.'
                />
            </div>
        </div>
    );
}