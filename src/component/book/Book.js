import { Segment, Divider, Card, Image, Grid, Popup } from 'semantic-ui-react';
import unknownBook from '../../asset/unknownBook.jpg';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../book/book.css';
import SearchBar from '../searchBar/SearchBar';
import BookCreateForm from '../bookCreateForm/BookCreateForm';
import BookDescriptionPopup from '../bookDescriptionPopup/BookDescriptionPopup';

export default function Book() {
  const [books, setBooks] = useState([]);

  const [volumeInfo, setVolumeInfo] = useState({
    title: '',
    categories: [],
    authors: [],
    publishedDate: '',
    description: '',
    pageCount: '',
    language: '',
    smallThumbnail: '',
    price: 0,
    currencyCode: '',
    stockAmount: 0
  });

  const { search } = useSelector(state => state.search);

  useEffect(() => {
    if (!!search) {
      axios.get(`http://localhost:8080/books?query=${search}`).then(res => {
        setBooks(res.data?.items);
      });
    }
  }, [search]);

  function saveBook() {
    axios
      .post(`http://localhost:8080/book`, {
        volumeInfo
      })
      .then(res => {});
  }

  return (
    <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column className='stuck' style={{ margine: '10px' }}>
          <SearchBar />
          <Grid.Row>
            {books.map((book, index) => {
              const { volumeInfo } = book;
              return (
                <Popup
                  style={{ marginTop: '100px !important' }}
                  position='right center'
                  trigger={
                    <Card
                      onClick={() => {
                        setVolumeInfo({
                          title: volumeInfo.title,
                          categories: [],
                          authors: [],
                          publishedDate: volumeInfo.publishedDate,
                          description: volumeInfo.description ? volumeInfo.description : '',
                          pageCount: volumeInfo.pageCount ? volumeInfo.pageCount : '',
                          language: volumeInfo.language,
                          smallThumbnail: volumeInfo.imageLinks,
                          price: volumeInfo.price,
                          currencyCode: volumeInfo.currencyCode,
                          stockAmount: volumeInfo.stockAmount
                        });
                        console.log(volumeInfo);
                      }}
                      key={index}
                    >
                      <Card.Content style={{ padding: '5px' }}>
                        <Image
                          className='card-image'
                          floated='left'
                          size='small'
                          src={volumeInfo.imageLinks?.smallThumbnail ?? unknownBook}
                        />
                        <Card.Header className='card-header'>{volumeInfo.title}</Card.Header>
                        <Card.Meta className='card-meta'>
                          {' '}
                          <b>Author:</b> {volumeInfo.authors}
                        </Card.Meta>
                        <Card.Meta className='card-meta'>
                          {' '}
                          <b>Page:</b> {volumeInfo.pageCount}
                        </Card.Meta>
                      </Card.Content>
                    </Card>
                  }
                >
                  <BookDescriptionPopup setVolumeInfo={setVolumeInfo} volumeInfo={volumeInfo} />
                </Popup>
              );
            })}
          </Grid.Row>
        </Grid.Column>

        <Grid.Column>
          <BookCreateForm
            saveBook={saveBook}
            volumeInfo={volumeInfo}
            setVolumeInfo={setVolumeInfo}
          />
        </Grid.Column>
      </Grid>
      <Divider vertical></Divider>
    </Segment>
  );
}
