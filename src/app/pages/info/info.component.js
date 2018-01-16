import React from 'react';
import './info.component.css';
import demo_1_IMAGE from '../../../assets/info_demo1_1.png';
import demo_2_IMAGE from '../../../assets/info_demo2_1.png';
import demo_3_IMAGE from '../../../assets/info_demo3.png';
import demo_4_IMAGE from '../../../assets/info_demo4_1.png';
import demo_5_IMAGE from '../../../assets/info_demo5_1.png';
import demo_6_IMAGE from '../../../assets/info_demo6_1.png';
import demo_7_IMAGE from '../../../assets/info_demo7_1.png';

import demo_1_IMAGE_GIF from '../../../assets/info_demo1.gif';
import demo_2_IMAGE_GIF from '../../../assets/info_demo2.gif';
import demo_3_IMAGE_GIF from '../../../assets/info_demo3.gif';

import InfoLayerComponent from './info-layer/info-layer.component';
export default function InfoComponent(){

    var layers = [
        {
            left : { image : demo_1_IMAGE, text : '제품키를 발행하여 등록해주시기 바랍니다.' },
            right : { image : demo_1_IMAGE_GIF, text : '제품 사용을 위해서 인증키가 요구됩니다.' },
            isReversed : true
        },
        {
            left : { image : demo_2_IMAGE_GIF, text : '토클 형태의 버튼을 눌러 활성화 시킵니다.' },
            right : { image : demo_2_IMAGE, text : '세션이 유지되는 동안 디시클리너가 작동합니다.' },
            isReversed : false
        },
        {
            left : { image : demo_3_IMAGE_GIF, text : '수집이 끝나면 갤러리 목록들이 보여집니다.' },
            right : { image : demo_7_IMAGE, text : '작성 기록이 있는 갤러리 목록들을 조회합니다.' },
            isReversed : false
        },
        {
            left : { image : demo_3_IMAGE, text : '실제 갤로그에 출력된 목록' },
            right : { image : demo_4_IMAGE, text : '조회된 갤러리에 작성한 글 목록을 수집합니다.' },
            isReversed : false
        },
        {
            left : { image : demo_6_IMAGE, text : '코어를 추가하여 처리 속도를 향상합니다.' },
            right : { image : demo_5_IMAGE, text : '수집된 정보를 토대로 수행 작업이 처리됩니다.' },
            isReversed : false
        }
    ];

    return (
        <div className='Info'>
            { layers.map((layer, index) => <InfoLayerComponent key={ index } isReversed={ layer.isReversed } left={ layer.left } right={ layer.right } />)}
        </div>
    );
}