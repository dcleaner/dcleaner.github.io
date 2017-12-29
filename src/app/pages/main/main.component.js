import React from 'react';
import './main.component.css';

import MainHeaderComponent from './main-header/main-header.component';
import MainContentComponent from './main-content/main-content.component';
import MainFooterComponent from './main-footer/main-footer.component';

export default function MainComponent(){
    return (
        <div className='Main'>
            <MainHeaderComponent />
            <MainContentComponent />
            <MainFooterComponent />
        </div>
    );
}