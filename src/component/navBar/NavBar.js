import 'semantic-ui-css/semantic.min.css';
import React, { useState } from 'react';
import { Segment, Menu } from 'semantic-ui-react';


export default function NavBar() {

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
        </Menu>
      </Segment>
    </div>
  );
}
