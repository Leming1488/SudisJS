const React = require('react');
const PasswordResetForm = require('PasswordResetForm');
const AcceptAicForm = require('AcceptAicForm');


const NewRequest = React.createClass({
  getInitialState: function () {
    return {
      requestType: 'password-reset'
    }
  },
  onRadioChange: function (event) {
    const requestType =  event.target.value;
    this.setState({
      requestType: requestType
    });
  },
  render: function () {
    const requestType = this.state.requestType;
    function renderForm () {
      const components = {
        'password-reset': PasswordResetForm,
        'accept-aic': AcceptAicForm
      }
      const RequestForm = components[requestType];
      return <RequestForm/>;
    }
    return (
      <div className='new-request row'>
        <div className='medium-12 columns'>
          <div className='medium-4 columns'>
            <legend className='text-right'>Тип заявки</legend>
          </div>
          <div className='medium-4 columns'>
            <input type='radio' defaultChecked={true} onChange={this.onRadioChange}  name='new-request-type' value='password-reset' id='password-reset' />
            <label htmlFor='password-reset'>На сброс пароля</label>
          </div>
          <div className='medium-4 columns'>
            <input type='radio'  onChange={this.onRadioChange}  name='new-request-type' value='accept-aic' id='accept-aic'/>
            <label htmlFor='accept-aic'>На доступ к АИС</label>
          </div>
        </div>
        {renderForm()}
      </div>
    )
  }
});

module.exports = NewRequest;
