import React from 'react';
import './footer.component.css';
import { Grid } from 'semantic-ui-react';

import logo_IMAGE from '../../../assets/dcleaner.png';
import github_IMAGE from '../../../assets/github.png';

export default function FooterComponent(){

    var onGithub = () => window.open('https://github.com/dcleaner');

    return (
        <div className='Footer'>
            <Grid centered={ true }>
                <Grid.Column mobile={ 16 } tablet={ 11 } computer={ 12 }>
                    <div className='Footer__Grid Text' >
                        Copyright © 2018 - 2019 Dcleaner. All Rights Reserved.
                    </div>
                </Grid.Column>
                <Grid.Column mobile={ 16 } tablet={ 5 } computer={ 4 }>
                    <div className='Footer__Grid Image' onClick={ onGithub } >
                        <img className='Footer__Logo' src={ logo_IMAGE } alt='dcleaner logo' />
                        <img className='Footer__Github' src={ github_IMAGE } alt='github logo' />
                    </div>
                </Grid.Column>                
            </Grid>
        </div>
    );
}