import React from 'react';
import './App.css';

import { Icon, Menu, Dropdown } from 'semantic-ui-react';

function AuthStateApp() {
  document.title = 'Travel Deals';
  return (
        <div className='App'>
          <Menu fixed='top' color='teal' inverted>
            <Menu.Menu>
              <Menu.Item header href='/'><Icon name='globe' />Travel Deals</Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
              <Dropdown item simple text='User Name'>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => alert('Log-out')}><Icon name='power off' />Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
        </div>
  );
}
export default AuthStateApp;
