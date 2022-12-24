import 'semantic-ui-css/semantic.min.css';
import React, { useState, useEffect } from 'react';
import { Input, Button } from 'semantic-ui-react';

export default function NavBar() {
  const [searchText, setSearchText] = useState('');

  const onFormSubmit = () => {};

  console.log(searchText)

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <Input
          onChange={event => setSearchText(event.target.value)}
          focus
          placeholder='Search...'
        />
        <Button type='submit'>Click Here</Button>
      </form>
    </div>
  );
}
