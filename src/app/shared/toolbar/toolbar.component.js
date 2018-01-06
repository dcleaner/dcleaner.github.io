import React from 'react';
import './toolbar.component.css';
import { NavLink } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

export default function ToolbarComponent(){

    var flag = false;

    var onRoute = () => {
    };

    var onToggle = () => Array.from(document.querySelectorAll('.Toolbar__Toggle')).map(e => {
        
        window.getComputedStyle(e, 'style').getPropertyValue('display') === 'none' ? [e.style.display = 'flex', flag = true] : [e.style.display = 'none', , flag = false];

    });

    window.addEventListener('resize', () => {
        if(window.innerWidth < 768 && flag) {
            onToggle();
            
        }

        if(window.innerWidth > 768 && !flag) {
            onToggle();
            
        }
    });
    
    return (
        <div className='Toolbar'>
            <Menu pointing stackable>
                <Menu.Item name='main'>
                    <NavLink className='Toolbar__Title' to='/' exact activeClassName='active'>
                        <span>
                            <strong>DCleaner</strong> for 디시인사이드
                        </span>
                    </NavLink>

                    <div className='Toolbar__Toggle__Btn__Wrapper'>
                        <Button circular content='열기' className='Toolbar__Toggle__Btn' onClick={ onToggle } />
                    </div>

                </Menu.Item>

                <Menu.Menu position='left' className='Toolbar__Toggle'>
                    <Menu.Item name='info' className='Toolbar__Menu' onClick={ onRoute }>
                        특징
                    </Menu.Item>
                    <Menu.Item name='price' className='Toolbar__Menu' onClick={ onRoute }>
                        가격정책
                    </Menu.Item>
                    <Menu.Item name='support' className='Toolbar__Menu' onClick={ onRoute }>
                        문의지원
                    </Menu.Item>
                </Menu.Menu>

                <Menu.Menu position='right' className='Toolbar__Toggle'>
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