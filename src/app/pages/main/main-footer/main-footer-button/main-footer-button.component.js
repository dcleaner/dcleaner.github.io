import React, { Component } from 'react';
import './main-footer-button.component.css';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';


class MainFooterButtonComponent extends Component {
        
    onPrice = () => {
        window.scrollTo(0, 0);
        this.props.history.push('price')
    };
    
    render(){
        return (
            <div className='MainFooterButton MainFooter__Children'>
                <Button className='MainFooter__Button' size='massive' color='violet' onClick={ this.onPrice }>
                    디시클리너 구매하기
                </Button>
            </div>
        );
    }
}

export default withRouter(MainFooterButtonComponent);