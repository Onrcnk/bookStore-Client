import { Segment, Divider, Card, Image, Grid, Popup } from 'semantic-ui-react';
import unknownBook from '../../asset/unknownBook.jpg';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../book/book.css';
import SearchBar from '../searchBar/SearchBar';
import BookCreatePopup from '../bookCreateForm/BookCreateForm';
import BookDescriptionPopup from '../bookDescriptionPopup/BookDescriptionPopup';

export default function CardExampleGroups() {
  const [books, setBooks] = useState([]);

  const [bookTitle, setBookTitle] = useState('');
  const [bookPublishedDate, setBookPublishedDate] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [bookPageCount, setBookPageCount] = useState();
  const [bookLanguage, setBookLanguage] = useState('');
  const [bookImage, setBookImage] = useState('');
  const [bookCurrencyCode, setBookCurrencyCode] = useState('');
  const [bookPrice, setBookPrice] = useState();
  const [bookStockAmount, setBookStockAmount] = useState();

  const [volumeInfo, setVolumeInfo] = useState('');

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
        title: bookTitle,
        categories: [{ categoryName: 'Mystery' }],
        authors: [{ authorName: 'Sir Conan Doyle' }],
        publishedDate: bookPublishedDate,
        description: bookDescription,
        pageCount: bookPageCount,
        language: bookLanguage,
        smallThumbnail: bookImage,
        price: bookPrice,
        currencyCode: bookCurrencyCode,
        stockAmount: bookStockAmount
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
                        setVolumeInfo(volumeInfo);
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
                  <BookDescriptionPopup
                    volumeInfo={volumeInfo}
                    setBookTitle={setBookTitle}
                    setBookPublishedDate={setBookPublishedDate}
                    setBookDescription={setBookDescription}
                    setBookPageCount={setBookPageCount}
                    setBookLanguage={setBookLanguage}
                    setBookImage={setBookImage}
                    setBookCurrencyCode={setBookCurrencyCode}
                    setBookPrice={setBookPrice}
                    setBookStockAmount={setBookStockAmount}
                  />
                </Popup>
              );
            })}
          </Grid.Row>
        </Grid.Column>

        <Grid.Column>
          <BookCreatePopup
            saveBook={saveBook}
            volumeInfo={volumeInfo}
            setBookTitle={setBookTitle}
            setBookPublishedDate={setBookPublishedDate}
            setBookDescription={setBookDescription}
            setBookPageCount={setBookPageCount}
            setBookLanguage={setBookLanguage}
            setBookImage={setBookImage}
            setBookCurrencyCode={setBookCurrencyCode}
            setBookPrice={setBookPrice}
            setBookStockAmount={setBookStockAmount}
          />
        </Grid.Column>
      </Grid>
      <Divider vertical></Divider>
    </Segment>
  );
}
