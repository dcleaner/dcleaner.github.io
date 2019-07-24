import React from 'react';
import './login.component.css';
import { Dimmer, Loader, Card, Icon, Input } from 'semantic-ui-react';

export default function LoginComponent(){
    
    setTimeout(() => document.querySelector('.Login__Input input').focus(), 50);

    var onAccess = _ => {
        let [ name, accesskey ] = document.querySelectorAll('.Login__Input input'),
            notice = document.querySelector('.Login__Token__Text'),
            faild = _ => [ document.querySelector('.Login__Token__Loader').classList.remove('active'), document.querySelector('.Login__Input input').focus(), notice.value = ''];

        name.disabled = true;
        accesskey.disabled = true;
        document.querySelector('.Login__Token__Loader').classList.add('active');

        fetch('https://api.ipify.org?format=json').then((resp) => resp.json()).then(e => {
            

            fetch(`https://d3lmc0k36acdcv.cloudfront.net/create-token/${ name.value }/${ accesskey.value }`)
            .then(e => e.json())
                .then(e => e.isAccess ? [ document.querySelector('.Login__Token__Loader').classList.remove('active'), notice.value = e.token, notice.disabled = false, notice.select() ] : faild())
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
                        <Dimmer inverted className='Login__Token__Loader'>
                            <Loader>잠시만 기다려주세요 (1 ~ 10초 소요)</Loader>
                        </Dimmer>
                        <input className='Login__Token__Text' disabled='true' />
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