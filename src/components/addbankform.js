import React, { Component } from 'react';

export default class AddBankForm extends Component {
    handleClick() {
    const bik = document.querySelector('#bik').value,
            name = document.querySelector('#name').value,
            corAccount = document.querySelector('#corresp-account').value,
            adress = document.querySelector('#adress').value;

    if (bik && name && corAccount && adress) {
        const bankInfo = { bik, name, corAccount, adress };
        localStorage.setItem(`${bankInfo.name}`, JSON.stringify(bankInfo));
    } else {
        alert('Заполните все поля!');
    };
}
  
    render() {
      return (
        <form>
          <br/>
          <label for='bik'>БИК:</label><br/>
          <input type='text' id='bik'></input><br/><br/>
          <label for='name'>Название банка:</label><br/>
          <input type='text' id='name'></input><br/><br/>
          <label for='corresp-account'>Корсчет:</label><br/>
          <input type='text' id='corresp-account'></input><br/><br/>
          <label for='adress'>Адрес:</label><br/>
          <input type='text' id='adress'></input><br/>
          <input type='submit' value='Добавить' onClick={this.handleClick}></input>
        </form>
      );
    }
}