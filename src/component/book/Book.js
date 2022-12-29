import axios from 'axios';
import { Card, Image, Grid, Modal,Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import unknownBook from '../../asset/unknownBook.jpg';
import '../book/book.css';

export default function Book() {
  const [books, setBooks] = useState([]);

  const [open, setOpen] = React.useState(false)

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
    <Modal
      onClose={() => setOpen(false)}
      
      open={open}

    > <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
      <Grid.Row>
        {books.map((book, index) => {
          const { id, volumeInfo } = book;
          return (
            <Card onClick={() => setOpen(true)}
            key={index}>
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
