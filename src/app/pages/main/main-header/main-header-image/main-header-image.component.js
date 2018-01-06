import React from 'react';
import './main-header-image.component.css';

export default function MainHeaderImageComponent(){

    var demos = [
        'https://raw.githubusercontent.com/u4bi/dc-cleaner2/master/assets/search.gif',
        'https://raw.githubusercontent.com/u4bi/dc-cleaner2/master/assets/gallog.gif',
        'https://raw.githubusercontent.com/u4bi/dc-cleaner2/master/assets/search_reply.gif',
        'https://raw.githubusercontent.com/u4bi/dc-cleaner2/master/assets/gall_reply.gif'
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