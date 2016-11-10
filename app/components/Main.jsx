import React, { Component } from 'react';
import {Nav} from 'Nav';

export class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='main'>
        <header className='main-header'>
          <Nav/>
          {this.props.children}
        </header>
      </div>
    )
  }
}
