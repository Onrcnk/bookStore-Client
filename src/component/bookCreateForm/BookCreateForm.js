import React, { useState } from 'react';
import { Form, Image, Grid, TextArea, Button } from 'semantic-ui-react';
import './bookCreateForm.css';

export default function BookCreateForm(props) {
  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    props.setBookImage(e.target.files[0].name);
  }

  function setDefaultImage() {
    setFile('https://react.semantic-ui.com/images/wireframe/square-image.png');
  }

  return (
    <Form className='form-position'>
      <Grid columns={2} relaxed='very'>
        <h1 className='creatform-header'>Add Book Form</h1>
        <Grid.Row className='grid-row'>
          <Grid.Column className='grid-column'>
            <Image
              className='new-book-image'
              src={
                file ??
                props.volumeInfo.imageLinks?.smallThumbnail ??
                'https://react.semantic-ui.com/images/wireframe/square-image.png'
              }
              size='medium'
            />
            <p></p>

            <input type='file' onChange={handleChange} />
            <Button
              size='mini'
              className='default-image-button'
              icon='cancel'
              onClick={setDefaultImage}
            ></Button>
          </Grid.Column>
          <Grid.Column>
            <Form.Field inline>
              <label className='label'>Title</label>
              <input
                value={props.volumeInfo.title}
                onChange={e => props.setVolumeInfo({ ...props.volumeInfo, title: e.target.value })}
                placeholder='...'
              />
            </Form.Field>
            <Form.Field inline>
              <label className='label'>Author(s)</label>
              <input value={props.volumeInfo.authors} placeholder='...' />
            </Form.Field>
            <Form.Field inline>
              <label className='label'>Publish Date</label>
              <input
                value={props.volumeInfo.publishedDate}
                onChange={e =>
                  props.setVolumeInfo({ ...props.volumeInfo, publishedDate: e.target.value })
                }
                placeholder='...'
              />
            </Form.Field>
            <Form.Field inline>
              <label className='label'>Page</label>
              <input
                value={props.volumeInfo.pageCount}
                onChange={e =>
                  props.setVolumeInfo({ ...props.volumeInfo, pageCount: e.target.value })
                }
                placeholder='...'
              />
            </Form.Field>
            <Form.Field inline>
              <label className='label'>Categories</label>
              <input value={props.volumeInfo.categories} placeholder='...' />
            </Form.Field>
            <Form.Field inline>
              <label className='label'>Language</label>
              <input
                value={props.volumeInfo.language}
                onChange={e =>
                  props.setVolumeInfo({ ...props.volumeInfo, language: e.target.value })
                }
                placeholder='...'
              />
            </Form.Field>

            <Form.Field inline>
              <label className='label'>Price</label>
              <input
                onChange={e => props.setVolumeInfo({ ...props.volumeInfo, price: e.target.value })}
                placeholder='...'
              />
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
              onChange={e =>
                props.setVolumeInfo({ ...props.volumeInfo, description: e.target.value })
              }
              className='label-tex-area'
              id='first-name'
              label='Name'
            />
          </Form.Field>
        </Grid.Row>
        <Grid.Row style={{ marginTop: '-20px' }}>
          <Button color='blue' onClick={props.saveBook}>
            Creat Book
          </Button>
        </Grid.Row>
      </Grid>
    </Form>
  );
}
