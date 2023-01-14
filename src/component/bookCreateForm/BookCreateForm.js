import React, { useState } from 'react';
import {Form, Image, Grid, TextArea, Header } from 'semantic-ui-react';
import './bookCreateForm.css';

export default function BookCreatePopup(props) {
  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    props.setBookImage(e.target.files[0].name);
  }

  return (
   
        <Form className='form-position'>
          <Grid columns={2} relaxed='very'>
          <Header>Add Book Form</Header>
            <Grid.Row className='grid-row'>
              <Grid.Column className='grid-column'>
                <Image
                  className='new-book-image'
                  src={file ?? 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
                  size='medium'
                />
                <p></p>
                <input type='file' onChange={handleChange} />
              </Grid.Column>
              <Grid.Column>
                <Form.Field inline>
                  <label className='label'>Title</label>
                  <input onChange={e => props.setBookTitle(e.target.value)} placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Author(s)</label>
                  <input placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Publish Date</label>
                  <input
                    onChange={e => props.setBookPublishedDate(e.target.value)}
                    placeholder='...'
                  />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Page</label>
                  <input onChange={e => props.setBookPageCount(e.target.value)} placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Categories</label>
                  <input placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Language</label>
                  <input onChange={e => props.setBookLanguage(e.target.value)} placeholder='...' />
                </Form.Field>

                <Form.Field inline>
                  <label className='label'>Price</label>
                  <input onChange={e => props.setBookPrice(e.target.value)} placeholder='...' />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '0px' }}>
              <Form.Field>
                <label className='label-description' style={{ fontSize: '18px' }}>
                  Description
                </label>
                <TextArea
                  onChange={e => props.setBookDescription(e.target.value)}
                  className='label-tex-area'
                  id='first-name'
                  label='Name'
                />
              </Form.Field>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '0px' }}>
            </Grid.Row>
          </Grid>
        </Form>
  
  );
}
