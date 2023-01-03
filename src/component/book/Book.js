import axios from 'axios';
import { Card, Image, Grid, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import unknownBook from '../../asset/unknownBook.jpg';
import '../book/book.css';
import BookDescriptionPopup from '../bookDescriptionPopup/BookDescriptionPopup';
import BookCreatPopup from '../bookCreatPopup/BookCreatPopup';

export default function Book() {
  const [books, setBooks] = useState([]);

  const [openBookDescriptipnPopup, setOpenBookDescriptipnPopup] = useState(false);

  const [openBookCreatPopup, setOpenBookCreatPopup] = useState(false);

  const [volumeInfo, setVolumeInfo] = useState('');

  const { search } = useSelector(state => state.search);

  function closeBookDescriptionPopup() {
    setOpenBookDescriptipnPopup(false);
  }

  function closeBookCreatPopup() {
    setOpenBookCreatPopup(false);
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
      <BookDescriptionPopup
        volumeInfo={volumeInfo}
        closePopup={closeBookDescriptionPopup}
        open={openBookDescriptipnPopup}
      />
      <BookCreatPopup closePopup={closeBookCreatPopup} open={openBookCreatPopup} />
      <Grid.Row className='new-book-button-row'>
        <Button
          icon
          labelPosition='left'
          color='blue'
          className='new-book-button'
          onClick={() => {
            setOpenBookCreatPopup(true);
            setVolumeInfo(volumeInfo);
          }}
        >
          <Icon plus name='plus' />
          Add Book
        </Button>
      </Grid.Row>
      <Grid.Row>
        {books.map((book, index) => {
          const { volumeInfo } = book;
          return (
            <Card
              onClick={() => {
                setOpenBookDescriptipnPopup(true);
                setVolumeInfo(volumeInfo);
              }}
              key={index}
            >
              <Image
                src={volumeInfo.imageLinks?.smallThumbnail ?? unknownBook}
                wrapped
                ui={false}
              />
              <Card.Content className='card-content'>
                <Card.Header>{volumeInfo.title}</Card.Header>
              </Card.Content>
            </Card>
          );
        })}
      </Grid.Row>
    </Grid>
  );
}
