import React from 'react';
import './login.component.css';
import { Card, Icon, Input } from 'semantic-ui-react';

export default function LoginComponent(){
    
    setTimeout(() => document.querySelector('input').focus(), 50);

    var onAccess = _ => {
        let [ name, accesskey ] = document.querySelectorAll('.Login__Input input'),
            notice = document.querySelector('h2'),
            faild = _ => [ document.querySelector('input').focus(), notice.innerHTML = ''];

        name.disabled = true;
        accesskey.disabled = true;

        fetch('https://api.ipify.org?format=json').then((resp) => resp.json()).then(e => {
            
            fetch(`http://127.0.0.1:7776`, {
                method: 'POST',
                body: JSON.stringify({
                    name : name.value,
                    accesskey : accesskey.value,
                    session : e.ip
                }),
                headers: new Headers({ 'Content-Type': 'application/json'})
            }).then(e => e.json())
                .then(e => e.isAccess ? notice.innerHTML = e.token : faild())
                .catch(e => faild());

            name.value = '';
            accesskey.value = '';
            name.disabled = false;
            accesskey.disabled = false;
        });
    };

    var handleAccesss = (e) => {
        if(e.keyCode === 13) onAccess();
    };

    return (
        <div className='Login'>
            
            <div className='Login__Wrapper'>

                <div className='Login__Input__Wrapper'>
                    <h1>제품키 발급</h1>
                    <Card className='Login__Input__Token'>
                        <h2> </h2>
                        <Card.Content extra>
                            <Input className='Login__Input' fluid size='large' placeholder='USER_KEY' />
                        <br />
                        <Input onKeyDown={ handleAccesss }
                            icon={<Icon name='cube' inverted circular link onClick={ onAccess }/>}
                            className='Login__Input' fluid size='large' placeholder='ACCESS_KEY'
                        />
                        </Card.Content>
                        <Card.Content extra>
                        <Icon name='user' />
                        120초 후 세션이 종료되니 즉시 등록바랍니다.
                        </Card.Content>
                    </Card>

                </div>
            </div>
        </div>
    );
}