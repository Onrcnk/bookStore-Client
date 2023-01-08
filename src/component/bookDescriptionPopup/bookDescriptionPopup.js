import { Image, Modal, Button, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import unknownBook from '../../asset/unknownBook.jpg';
import React from 'react';
import '../bookDescriptionPopup/bookDescriptionPopup.css';

export default function BookDescriptionPopup(props) {
  return (
    <Modal onClose={() => props.closePopup()} open={props.open}>
      {' '}
      <Modal.Header style={{ flexWrap: 'wrap' }}>{props.volumeInfo.title}</Modal.Header>
      <Modal.Content image>
        <Image
          size='medium'
          src={props.volumeInfo.imageLinks?.smallThumbnail ?? unknownBook}
          wrapped
        />
        <Modal.Description className='popup-description'>
          <p>
            <b>Author(s):</b> {props.volumeInfo.authors}{' '}
          </p>
          <p>
            <b>Page:</b> {props.volumeInfo.pageCount}{' '}
          </p>
          <p>
            <b>Publish Date:</b> {props.volumeInfo.publishedDate}{' '}
          </p>
          <p>
            <b>Categories:</b> {props.volumeInfo.categories}{' '}
          </p>
          <p>
            <b>Description:</b> {props.volumeInfo.description}{' '}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions style={{ flex: '1 !important' }}>
        <span>
          <Input className='count-input' placeholder='Count' />
          <Button
            className='description-card-button'
            color='blue'
            onClick={() => props.closePopup()}
          >
            Add Store
          </Button>
        </span>
      </Modal.Actions>
    </Modal>
  );
}
