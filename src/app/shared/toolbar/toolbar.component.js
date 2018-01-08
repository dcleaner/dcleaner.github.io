import React, { Component } from 'react';
import './toolbar.component.css';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

class ToolbarComponent extends Component {

    flag = false;

    onRoute = (e, { name }) => {
        this.props.history.push(name);
        window.scrollTo(0, 0);
        if(window.innerWidth < 768 && this.flag) this.onToggle();
    }

    onToggle = () => Array.from(document.querySelectorAll('.Toolbar__Toggle')).map(e => window.getComputedStyle(e, 'style').getPropertyValue('display') === 'none' ? [e.style.display = 'flex', this.flag = true] : [e.style.display = 'none', this.flag = false] );

    componentDidMount(){

        window.addEventListener('resize', () => {

            if( (window.innerWidth < 768 && this.flag) || (window.innerWidth > 768 && !this.flag)) this.onToggle();

        });

    }

    render() {

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
                            <Button circular content='열기' className='Toolbar__Toggle__Btn' onClick={ this.onToggle } />
                        </div>

                    </Menu.Item>

                    <Menu.Menu position='left' className='Toolbar__Toggle'>
                        <Menu.Item name='/' className='Toolbar__Menu' onClick={ this.onRoute }>
                            특징
                        </Menu.Item>
                        <Menu.Item name='price' className='Toolbar__Menu' onClick={ this.onRoute }>
                            가격정책
                        </Menu.Item>
                        <Menu.Item name='support' className='Toolbar__Menu' onClick={ this.onRoute }>
                            문의지원
                        </Menu.Item>
                    </Menu.Menu>

                    <Menu.Menu position='right' className='Toolbar__Toggle'>
                        <Menu.Item name='login' className='Toolbar__Menu' onClick={ this.onRoute }>
                            내 제품키 확인
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

export default withRouter(ToolbarComponent);