import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export default class SelectAction extends Component {
    render() {
      return (
        <ButtonGroup>
          <Button onClick={this.props.onClick}>Добавить банк</Button>
          <Button onClick={this.props.onClick}>Список банков</Button>
        </ButtonGroup>
      );
    }
}