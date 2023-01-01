import { Image, Modal, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import unknownBook from '../../asset/unknownBook.jpg';
import React from 'react';

import '../book/book.css';

export default function BookDescriptionPopup(props) {
  return (
    <Modal onClose={() => props.closePopup()} onOpen={() => props.openPopup()} open={props.open}>
      {' '}
      <Modal.Header>{props.volumeInfo.title}</Modal.Header>
      <Modal.Content image>
        <Image
          size='medium'
          src={props.volumeInfo.imageLinks?.smallThumbnail ?? unknownBook}
          wrapped
        />
        <Modal.Description>
          <Header></Header>
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
    </Modal>
  );
}
