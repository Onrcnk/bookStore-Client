import React, { useState } from 'react';
import {Form, Image, Grid, TextArea, Button } from 'semantic-ui-react';
import './bookCreateForm.css';

export default function BookCreatePopup(props) {
  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    props.setBookImage(e.target.files[0].name);
  }

  function setDefaultImage(){
    setFile('https://react.semantic-ui.com/images/wireframe/square-image.png')
  }

  console.log(props.volumeInfo.imageLinks?.smallThumbnail)
  return (
   
        <Form className='form-position'>
          <Grid columns={2} relaxed='very'>
          <h1 className='creatform-header'>Add Book Form</h1>
            <Grid.Row className='grid-row'>
              <Grid.Column className='grid-column'>
                <Image
                  className='new-book-image'
                  src={file ?? props.volumeInfo.imageLinks?.smallThumbnail ?? 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
                  size='medium'
                />
                <p></p>
                
                <input type='file' onChange={handleChange} />
                <Button size='mini' className='default-image-button' icon="cancel" onClick={setDefaultImage}></Button>
                
              </Grid.Column>
              <Grid.Column>
                <Form.Field inline>
                  <label className='label'>Title</label>
                  <input value={props.volumeInfo.title} onChange={e => props.setBookTitle(e.target.value)} placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Author(s)</label>
                  <input value={props.volumeInfo.authors} placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Publish Date</label>
                  <input
                  value={props.volumeInfo.publishedDate}
                    onChange={e => props.setBookPublishedDate(e.target.value)}
                    placeholder='...'
                  />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Page</label>
                  <input value={props.volumeInfo.pageCount} onChange={e => props.setBookPageCount(e.target.value)} placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Categories</label>
                  <input value={props.volumeInfo.categories} placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Language</label>
                  <input value={props.volumeInfo.language} onChange={e => props.setBookLanguage(e.target.value)} placeholder='...' />
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
                value={props.volumeInfo.description}
                  onChange={e => props.setBookDescription(e.target.value)}
                  className='label-tex-area'
                  id='first-name'
                  label='Name'
                />
              </Form.Field>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '-20px' }}>
            <Button color='blue'>Creat Book</Button>
            </Grid.Row>
          </Grid>
        </Form>
  
  );
}
