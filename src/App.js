import React, { Component } from "react";
import "./App.css";
import "bootswatch/dist/cerulean/bootstrap.css";
import { Navbar, NavItem, ButtonGroup, 
  Button, MenuItem, Nav, Grid, Row, Col,} from "react-bootstrap";
import AddBankForm from './components/addbankform';
import BankList from './components/banklist';
import SelectAction from './components/selectaction';
import BankInfoDisplay from './components/bankinfodisplay';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdd: true,
            buttonClicked: 'Добавить банк',
            currentBank: 'Информация о банке',
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleClick(e) {
        if (e.target.innerHTML !== this.state.buttonClicked) {
        this.setState({ 
            isAdd: this.state.isAdd === true ? false : true, 
            buttonClicked: this.state.buttonClicked === 'Добавить банк' ? 
            'Список банков' : 'Добавить банк'
        });
        };
    }

    handleSelect(e) {
        this.setState({ 
            currentBank: JSON.parse(localStorage.getItem(e.currentTarget.innerHTML))
        });
    }

    render() {
        return (
        <div>
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                React Информация о банках
                </Navbar.Brand>
            </Navbar.Header>
            </Navbar>
            <Grid>
            <Row>
                <Col md={6} sm={6}>
                <h3>Выберите действие</h3>
                <SelectAction onClick={this.handleClick}/>
                {this.state.isAdd ? <AddBankForm /> : <BankList onClick={this.handleSelect}/>}
                </Col>
                <Col md={6} sm={6}>
                <BankInfoDisplay currentBank={this.state.currentBank} />
                </Col>
            </Row>
            </Grid>
        </div>
        );
    }
}

export default App;