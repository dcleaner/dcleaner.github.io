import React from 'react';
import './toolbar.component.css';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default function ToolbarComponent(){

    var onRoute = () => {
    };

    return (
        <div className='Toolbar'>
            <Menu pointing>
                <Menu.Item name='main'>
                    <NavLink className='Toolbar__Title' to='/' exact activeClassName='active'>
                        <span>
                            <strong>DCleaner</strong> for 디시인사이드
                        </span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item name='info' className='Toolbar__Menu' onClick={ onRoute }>
                    특징
                </Menu.Item>
                <Menu.Item name='price' className='Toolbar__Menu' onClick={ onRoute }>
                    가격정책
                </Menu.Item>
                <Menu.Item name='support' className='Toolbar__Menu' onClick={ onRoute }>
                    문의지원
                </Menu.Item>

                <Menu.Menu position='right'>
                    
                    <Menu.Item name='login' className='Toolbar__Menu' onClick={ onRoute }>
                        로그인
                    </Menu.Item>

                    <Menu.Item name='regist' className='Toolbar__Menu' onClick={ onRoute }>
                        결제등록
                    </Menu.Item>

                </Menu.Menu>
            </Menu>
        </div>
    );
}