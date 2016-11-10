import {Link, IndexLink} from 'react-router';
import React, { Component } from 'react';

export class Nav extends Component {
  render() {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'><div className='home-image'></div></li>
            <li>
              <IndexLink to='/'>Home</IndexLink>
            </li>
            <li>
              <Link to='/new_request'>Подача заявки</Link>
            </li>
                  <li>
                      <Link to='/requests_password_reset'>Заявки на сброс пароля</Link>
                  </li>
                  <li>
                      <Link to='/requests_for_access'>Заявки на доступ</Link>
                  </li>
              </ul>
          </div>
      </div>
    )
  }
};
