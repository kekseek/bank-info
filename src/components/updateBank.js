import React, { Component } from 'react';

export default class UpdateBank extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const bik = document.querySelector('#bik-update').value,
        name = document.querySelector('#name-update').value,
        corAccount = document.querySelector('#corresp-account-update').value,
        adress = document.querySelector('#adress-update').value;
        
        if (bik && name && corAccount && adress) {
            const bankInfo = { bik, name, corAccount, adress };
            localStorage.setItem(`${bankInfo.name}`, JSON.stringify(bankInfo));
            localStorage.removeItem(this.props.currentBank.name);
        };
    }
    
    render() {
        return (
            <form>
                <br/>
                <label for='bik'>БИК:</label><br/>
                <input type='text' id='bik-update' placeholder={this.props.currentBank.bik}></input><br/><br/>
                <label for='name'>Название банка:</label><br/>
                <input type='text' id='name-update' placeholder={this.props.currentBank.name}></input><br/><br/>
                <label for='corresp-account'>Корсчет:</label><br/>
                <input type='text' id='corresp-account-update' placeholder={this.props.currentBank.corAccount}></input><br/><br/>
                <label for='adress'>Адрес:</label><br/>
                <input type='text' id='adress-update' placeholder={this.props.currentBank.adress}></input><br/>
                <button onClick={this.handleClick}>Изменить</button>
            </form>
        );
    }
}