import { Image, Modal, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import React, { useState } from 'react';

import '../book/book.css';

export default function BookDescriptionPopup(props) {
  return (
    <Modal onClose={() => props.closePopup} open={props.open}>
      {' '}
      <Modal.Header>{props.volumeInfo.title}</Modal.Header>
      <Modal.Content image>
        <Image
          size='medium'
          src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
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
