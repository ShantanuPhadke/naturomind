import React from 'react';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className={'home-wrapper-div'}>
                <div className={'home-title'}>
                    NATUROMIND
                </div>
                <div className={'home-subtitle'}>
                    Back to Nature ... Back to Health!
                </div>
            </div>
        )
    }
}