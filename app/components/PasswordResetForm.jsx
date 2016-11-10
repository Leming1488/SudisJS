const React = require('react');

const PasswordResetForm = () => {
  return (
    <form className="password-reset-form row">
      <h2 className="medium-12 colums text-center">Заявка на сброс пароля УЗ пользователя</h2>
      <div className="row medium-8">
        <div className="medium-4 columns">
          <label for="right-label" className="text-right middle">Label</label>
        </div>
        <div className="medium-8 columns">
         <input type="text" id="right-label" placeholder="Right-aligned text input"/>
        </div>
      </div>
      <div className="row medium-8">
        <div className="medium-4 columns">
          <label for="right-label" className="text-right middle">Label</label>
        </div>
        <div className="medium-8 columns">
         <input type="text" id="right-label" placeholder="Right-aligned text input"/>
        </div>
      </div>
      <div className="row medium-8">
        <div className="medium-4 columns">
          <label for="right-label" className="text-right middle">Label</label>
        </div>
        <div className="medium-8 columns">
         <input type="text" id="right-label" placeholder="Right-aligned text input"/>
        </div>
      </div>
      <div className="row medium-8">
        <div className="medium-4 columns">
          <label for="right-label" className="text-right middle">Label</label>
        </div>
        <div className="medium-8 columns">
         <input type="text" id="right-label" placeholder="Right-aligned text input"/>
        </div>
      </div>
      <div className="row medium-8">
        <div className="medium-4 columns">
          <label for="right-label" className="text-right middle">Label</label>
        </div>
        <div className="medium-8 columns">
         <input type="text" id="right-label" placeholder="Right-aligned text input"/>
        </div>
      </div>
      <div className="row medium-8">
        <div className="medium-4 columns">
          <label for="right-label" className="text-right middle">Label</label>
        </div>
        <div className="medium-8 columns">
         <input type="text" id="right-label" placeholder="Right-aligned text input"/>
        </div>
      </div>
      <div className="row medium-8">
        <div className="medium-4 columns">
          <label for="right-label" className="text-right middle">Label</label>
        </div>
        <div className="medium-8 columns">
          <select type="text" id="right-label" placeholder="Right-aligned text input">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
      <div className="row medium-8">
        <div className="button-group text-center">
          <input type="submit" id="exampleFileUpload" className="button" value="Подать заявку"/>
          <button type="button" id="exampleFileUpload" className="button">
            Отменить
          </button>
        </div>
      </div>
    </form>
  );
}

module.exports = PasswordResetForm;
