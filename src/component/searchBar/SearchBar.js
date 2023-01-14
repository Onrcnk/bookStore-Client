import 'semantic-ui-css/semantic.min.css';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';
import { setSearchAction } from '../../Redux/Actions/searchAction';
import '../searchBar/searchBar.css';

export default function SearchBar() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const onFormSubmit = () => {
    dispatch(setSearchAction(searchText));
  };

  return (
    <div className='searchbar-row'>
      <Input className='searchbar-box' onChange={event => setSearchText(event.target.value)} focus placeholder='Search...' />
      <Button icon onClick={onFormSubmit}>
        <Icon name='world' />
      </Button>
    </div>
  );
}
