const React = require('react');
import {RequestsAccessFilterForm} from 'RequestsAccessFilterForm';
const RequestsAccessTable = require('RequestsAccessTable');

const RequestsAccess = React.createClass({
  render: function () {
    const ACCESSFORMDATA =  [
      {component: 'input',
        atr: {type: 'text', id: 'request-date-from', value: '', name: 'request-date-from', placeholder: 'Дата подачи заявки с...'}
      },
      {component: 'input',
        atr: {type: 'text', id: 'request-date-by', value: '', name: 'request-date-by', placeholder: 'Дата подачи заявки по...'}
      },
      {component: 'select',
        atr: {id: 'request-state', value: '', name: 'request-state',
          optionsData: [
            {value: '',  disabled: true , placeholder:'Статус заявки...'},
            {value: 'new', placeholder:'Новая'},
            {value: 'complete', placeholder:'Исполненая'},
            {value: 'rejected', placeholder:'Отклоненая'}
          ]
        }
      },
      {component: 'input',
        atr: {type: 'text', id: 'request-user-login', value: '', name: 'request-user-login', placeholder: 'Логин пользователя'}
      },
      {component: 'input',
        atr: {type: 'email', id: 'request-email', value: '', name: 'request-email', placeholder: 'E-mail адрес...'}
      },
      {component: 'input',
        atr: {type: 'text', id: 'request-user-fio', value: '', name: 'request-user-fio', placeholder: 'ФИО...'}
      }
    ];
    return (
      <div className='requests-access row'>
        <h2 className='medium-12 colums text-center'>Запрос на доступ к подсистемам АИС</h2>
        <RequestsAccessFilterForm formData={ACCESSFORMDATA}/>
        <RequestsAccessTable />
      </div>
    )
  }
});

module.exports = RequestsAccess;
