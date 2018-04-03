import React, { Component } from 'react';

export default class CurrentBank extends Component {
    render() {
        return (
            <div>    
                <p>Имя: {this.props.currentBank.name}</p>
                <p>БИК: {this.props.currentBank.bik}</p>
                <p>Корсчет: {this.props.currentBank.corAccount}</p>
                <p>Адрес: {this.props.currentBank.adress}</p>
            </div>
        );
    }
}