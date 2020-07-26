import React from 'react';
import './HowItHelps.css';

export default class HowItHelps extends React.Component{
    render() {
        return (
            <div className={'how-it-helps-wrapper-div'}>
                <div className={'how-it-helps-title'}>
                    Prevention is Better than Cure - A Holistic Approach to Health
                </div>
                <div className={'container'}>
                    <img src={require('./how-it-helps.png')} className="card-img-top" alt="..."/>
                </div>
            </div>
        );
    }
}