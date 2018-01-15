import React from 'react';
import './info-layer-card.component.css';

export default function InfoLayerCardComponent({ image, text }){
    return (
        <div className='InfoLayerCard'>
            <img src={ image } alt='card'/>
            <div className='InfoLayerCard__Text'>
                <h3>{ text }</h3>
            </div>
        </div>
    );
}