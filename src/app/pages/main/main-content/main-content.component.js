import React from 'react';
import './main-content.component.css';

import demo_0 from '../../../../assets/info_demo3.gif';
import demo_1 from '../../../../assets/info_demo2.gif';
import demo_2 from '../../../../assets/result_demo_1.png';

export default function MainContentComponent(){
    return (
        <div className='MainContent'>
            <h1 className='MainContent__Text'>2018년 무술년 (戊戌年) 디시클리너와 함께 새해를 시작하세요.</h1>

            <div className='MainContent__Image__wrapper'>
                <div className='MainContent__Image__box'>
                    <figure className='MainContent__Image__figure'><img src={ demo_0 } alt='demo 0' /></figure>
                <div className='MainContent__Image__shadow'></div>
                </div>
                <div className='MainContent__Image__box'>
                    <figure className='MainContent__Image__figure'><img src={ demo_1 } alt='demo 1' /></figure>
                <div className='MainContent__Image__shadow'></div>
                </div>
                <div className='MainContent__Image__box'>
                    <figure className='MainContent__Image__figure'><img src={ demo_2 } alt='demo 2' /></figure>
                <div className='MainContent__Image__shadow'></div>
                </div>
            </div>
        </div>
    );
}