import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';

function BookCreatPopup(props) {
  return (
    <Modal onClose={() => props.closePopup()} open={props.open}>
      <Modal.Header>Creat Book</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field inline>
            <p>Title</p>
            <input placeholder='Title...' />
          </Form.Field>
          <Form.Field inline>
            <label>Author(s)</label>
            <input placeholder='Autors(s)...' />
          </Form.Field>
          <Form.Field inline>
            <label>Description</label>
            <input placeholder='Description...' />
          </Form.Field>

          <Button type='submit' primary>
            Submit
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default BookCreatPopup;
