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

  function closePopup(){
    setOpen(false)
  }

  useEffect(() => {
    if (!!search) {
      axios.get(`http://localhost:8080/books?query=${search}`).then(res => {
        setBooks(res.data?.items);
      });
    }
  }, [search]);

  return (
    <Grid>
      
      <BookDescriptionPopup volumeInfo={volumeInfo} open={open} closePopup={closePopup}/>
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
