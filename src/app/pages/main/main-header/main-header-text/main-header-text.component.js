import React from 'react';
import './main-header-text.component.css';

export default function MainHeaderTextComponent(){
    return (
        <div className='MainHeaderText'>
            <div className='MainHeaderText__Wrapper'>
                <h1>매번 막히던 클리너는 이제 안녕!</h1>
                <div className='MainHeaderText__Wrapper__Sub'>
                    <h3>Chrome Extension으로 새롭게 탈바꿈한 디시클리너가 갤러리부터 갤로그까지 단번에 모두 정리해드립니다.</h3>
                </div>
            </div>
        </div>
    );
}