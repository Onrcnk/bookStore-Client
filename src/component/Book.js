import axios from 'axios';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import React, { useState, useEffect, useContext } from 'react';

export default function Book() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/books?query=Faust`).then(res => {
      setBooks(res.data?.items);
    });
  }, []);

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
                <a>
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
