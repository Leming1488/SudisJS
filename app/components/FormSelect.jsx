import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    disabled: {
      display: 'none'
    },
    selectDefaultColor: {
      color: '#cdcaca'
    },
    optionColor: {
      color: 'black'
    }
});

class Option extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {value, placeholder, disabled} = this.props.atr;
    return (
      <option value={value} className={disabled? css(styles.disabled) : css(styles.optionColor) } disabled={disabled}>{placeholder}</option>
    );
  }
};

export class FormSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: this.props.atr.value || ''
    };
  }
  selectOption(event) {
    const value = event.target.value
    this.setState({
      selectValue: value
    });
    this.props.onChangeInput(this.props.atr.name, value);
  }
  reset() {
    this.setState({
      selectValue: ''
    });
  }
  render() {
    const {id, name, optionsData} = this.props.atr;
    const options =[];
    optionsData.forEach((atr, id) => {
      options.push(<Option atr={atr} key={id}/>)
    })
    return (
      <div className='medium-4 columns'>
        <select value={this.state.selectValue} className={this.state.selectValue === ''? css(styles.selectDefaultColor) : css(styles.selectColor)} onChange={this.selectOption.bind(this)} id={id} ref={name}>
          {options}
        </select>
      </div>
    );
  }
};
