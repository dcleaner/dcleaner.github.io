import React from 'react';
import './main-footer-button.component.css';
import { Button } from 'semantic-ui-react';

export default function MainFooterButtonComponent(){
    return (
        <div className='MainFooterButton MainFooter__Children'>
            <Button className='MainFooter__Button' size='massive' color='violet'>
                디시클리너 구매하기
            </Button>
        </div>
    );
}