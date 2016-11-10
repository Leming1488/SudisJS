import React, { Component } from 'react';
import {ReactDOM} from 'react-dom';
import {FormInput} from 'FormInput';
import {FormSelect} from 'FormSelect';
import update from 'react-addons-update';

export class RequestsAccessFilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {formData: {}};
  }
  componentWillMount() {
    let object = {};
    this.props.formData.forEach( (el) => {
      object[el.atr.id] = el.atr.value;
    })
    this.setState({formData: object});
  }
  formReset() {
    let newObj = {}
    this.props.formData.forEach( (el, i) => {
      this.refs[`${el.atr.id}`].reset();
    })
    for (let key in this.state.formData) {
      newObj[key] = '';
    }
    this.setState({formData: newObj})
  }
  handleOnChange(key,value) {
    const newObj = update(this.state.formData, {$merge: {[key]: value}});
    this.setState({formData: newObj});
  }
  formSubmit(e) {
    e.preventDefault();
  }
  render() {
    const formData = this.props.formData;
    const formRow = [];
    const renderForm  = (component, atr, i) =>{
      const components = {
        'input': FormInput,
        'select': FormSelect
      }
      const FormComponent = components[component];
      return <FormComponent atr={atr} onChangeInput={this.handleOnChange.bind(this)} key={atr.id} ref={atr.id} />;
    }
    formData.forEach((el, i) => {
      formRow.push(renderForm(el.component, el.atr, i));
    })
    return (
      <form className='access-filter-form row' ref='accessForm' onSubmit={this.formSubmit.bind(this)}>
        <div className='medium-8 columns'>
          <div className='row'>
            {formRow}
          </div>
        </div>
        <div className='medium-4 columns text-center'>
          <div className='row medium-12'>
            <input type='submit' id='exampleFileUpload' className='button' value='Применить'/>
          </div>
          <div className='row medium-12'>
            <button type='button' onClick={this.formReset.bind(this)} id='exampleFileUpload' className='button'>
              Отчистить
            </button>
          </div>
        </div>
    </form>
    );
  }
}
