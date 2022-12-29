import 'semantic-ui-css/semantic.min.css';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Input, Button, Segment, Menu, Icon } from 'semantic-ui-react';
import { setSearchAction } from '../../Redux/Actions/searchAction';
import '../navBar/navbar.css';

export default function NavBar() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const onFormSubmit = () => {
    dispatch(setSearchAction(searchText));  
  };

  const [activeItem, setActiveItem] = useState('home');

  function handleItemClick(name) {
    setActiveItem(name);
  }

  return (
    <div>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={(e, { name }) => handleItemClick(name)}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={(e, { name }) => handleItemClick(name)}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={(e, { name }) => handleItemClick(name)}
          />
          <Menu.Item>
            <div>
              <Input
                onChange={event => setSearchText(event.target.value)}
                focus
                placeholder='Search...'
              />
              <Button icon onClick={onFormSubmit}>
                <Icon name='world' />
              </Button>
            </div>
          </Menu.Item>
        </Menu>
      </Segment>
    </div>
  );
}
