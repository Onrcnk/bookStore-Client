import axios from 'axios';
import { Card, Image, Grid, Modal, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import unknownBook from '../../asset/unknownBook.jpg';
import '../book/book.css';
import BookDescriptionPopup from '../bookDescriptionPopup/bookDescriptionPopup';

export default function Book() {
  const [books, setBooks] = useState([]);

  const [open, setOpen] = useState(false);

  const [volumeInfo, setVolumeInfo] = useState('');

  console.log(volumeInfo);

  const { search } = useSelector(state => state.search);

  useEffect(() => {
    if (!!search) {
      axios.get(`http://localhost:8080/books?query=${search}`).then(res => {
        setBooks(res.data?.items);
      });
    }
  }, [search]);

  return (
    <Grid>
      
      <Modal onClose={() => setOpen(false)} open={open}>
      {' '}
      <Modal.Header>{volumeInfo.title}</Modal.Header>
      <Modal.Content image>
        <Image
          size='medium'
          src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
          wrapped
        />
        <Modal.Description>
          <Header></Header>
          <p>
            <b>Author(s):</b> {volumeInfo.authors}{' '}
          </p>
          <p>
            <b>Page:</b> {volumeInfo.pageCount}{' '}
          </p>
          <p>
            <b>Publish Date:</b> {volumeInfo.publishedDate}{' '}
          </p>
          <p>
            <b>Categories:</b> {volumeInfo.categories}{' '}
          </p>
          <p>
            <b>Description:</b> {volumeInfo.description}{' '}
          </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
      <Grid.Row>
        {books.map((book, index) => {
          const { id, volumeInfo } = book;
          return (
            <Card
              onClick={() => {
                setOpen(true);
                setVolumeInfo(volumeInfo);
              }}
              key={index}
            >
              <Image
                src={volumeInfo.imageLinks?.smallThumbnail ?? unknownBook}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{volumeInfo.title}</Card.Header>
                <Card.Meta>{id}</Card.Meta>
                <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Grid.Row>
    </Grid>
  );
}
