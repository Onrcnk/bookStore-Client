import React, { useState } from 'react';
import { Modal, Button, Form, Image, Grid, TextArea, Input } from 'semantic-ui-react';
import './bookCreatePopup.css';

export default function BookCreatePopup(props) {
  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <Modal onClose={() => props.closePopup()} open={props.open}>
      <Modal.Header>Creat Book</Modal.Header>
      <Modal.Content>
        <Form>
          <Grid columns={2} relaxed='very'>
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
                  <input placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Author(s)</label>
                  <input placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Publish Date</label>
                  <input placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Page</label>
                  <input placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Categories</label>
                  <input placeholder='...' />
                </Form.Field>
                <Form.Field inline>
                  <label className='label'>Language</label>
                  <input placeholder='...' />
                </Form.Field>

                <Form.Field inline>
                  <label className='label'>Price</label>
                  <input placeholder='...' />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '0px' }}>
              <Form.Field>
                <label className='label-description' style={{ fontSize: '18px' }}>
                  Description
                </label>
                <TextArea className='label-tex-area' id='first-name' label='Name' />
              </Form.Field>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '0px' }}>
              <Modal.Actions>
                <span>
                  <Input className='count-input' placeholder='Count' />
                  <Button
                    className='create-card-button'
                    color='blue'
                    onClick={() => props.closePopup()}
                  >
                    Add Store
                  </Button>
                </span>
              </Modal.Actions>
            </Grid.Row>
          </Grid>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
