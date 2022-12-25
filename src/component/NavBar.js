import 'semantic-ui-css/semantic.min.css';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { setSearchAction } from '../Redux/Actions/searchAction';

export default function NavBar() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const onFormSubmit = () => {
    dispatch(setSearchAction(searchText));
  };

  return (
    <div>
      <Input onChange={event => setSearchText(event.target.value)} focus placeholder='Search...' />
      <Button onClick={onFormSubmit} type='submit'>
        Click Here
      </Button>
    </div>
  );
}
