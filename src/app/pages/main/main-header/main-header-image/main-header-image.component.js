import React from 'react';
import './main-header-image.component.css';

import search_IMAGE from '../../../../../assets/search.gif';
import gallog_IMAGE from '../../../../../assets/gallog.gif';
import search_reply_IMAGE from '../../../../../assets/search_reply.gif';
import gall_reply_IMAGE from '../../../../../assets/gall_reply.gif';


export default function MainHeaderImageComponent(){

    var demos = [
        search_IMAGE,
        gallog_IMAGE,
        search_reply_IMAGE,
        gall_reply_IMAGE
    ];

    var selectedDemo = 0;

    var divStyle = {
        backgroundImage : `url(${ demos[selectedDemo] })`
    };

    var onDemo = () => {
        selectedDemo !== 3 ? selectedDemo++ : selectedDemo = 0;
        document.querySelector('.MainHeader__Image__viewport').style.backgroundImage = `url(${ demos[selectedDemo]})`;
    };

    return (
        <div className='MainHeaderImage'>
            <div className='MainHeader__Image__imac'>
            <div className='MainHeader__Image__screen'>
                <div className='MainHeader__Image__viewport' style={ divStyle } onClick={ onDemo }></div>
            </div>
            <div className='MainHeader__Image__logo'></div>
            <div className='MainHeader__Image__leg'></div>
            <div className='MainHeader__Image__foot'></div>
            </div>
        </div>
    );
}