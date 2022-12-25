import axios from 'axios';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';

export default function Book() {
  const [books, setBooks] = useState([]);

  const { search } = useSelector(state => state.search);

  useEffect(() => {
    if (!!search) {
      axios.get(`http://localhost:8080/books?query=${search}`).then(res => {
        setBooks(res.data?.items);
      });
    }
  }, [search]);

  return (
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Row>
        {books.map((book, index) => {
          const { id, volumeInfo } = book;
          return (
            <Card key={index}>
              <Image
                src={
                  volumeInfo.imageLinks?.smallThumbnail ??
                  'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
                }
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{volumeInfo.title}</Card.Header>
                <Card.Meta>{id}</Card.Meta>
                <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href='/node_modules#'>
                  <Icon name='user' />
                  10 Friends
                </a>
              </Card.Content>
            </Card>
          );
        })}
      </Grid.Row>
    </Grid>
  );
}
