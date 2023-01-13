
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import unknownBook from '../../asset/unknownBook.jpg';



  

export default function CardExampleGroups() {

    const [books, setBooks] = useState([]);

  const [bookTitle, setBookTitle] = useState('');

  const [openBookDescriptipnPopup, setOpenBookDescriptipnPopup] = useState(false);

  const [openBookCreatePopup, setOpenBookCreatePopup] = useState(false);

  const [volumeInfo, setVolumeInfo] = useState('');

  const { search } = useSelector(state => state.search);

  const [bookPublishedDate, setBookPublishedDate] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [bookPageCount, setBookPageCount] = useState();
  const [bookLanguage, setBookLanguage] = useState('');
  const [bookImage, setBookImage] = useState('');
  const [bookCurrencyCode, setBookCurrencyCode] = useState('');
  const [bookPrice, setBookPrice] = useState();
  const [bookStockAmount, setBookStockAmount] = useState();



  useEffect(() => {
    if (!!search) {
      axios.get(`http://localhost:8080/books?query=${search}`).then(res => {
        setBooks(res.data?.items);
      });
    }
  }, [search]);

  return (
    <Card.Group >
    {books.map((book, index) => {
          const { volumeInfo } = book;
          return (
      <Card style={{width:"400px"}}>
        <Card.Content >
          <Image className='card.image'
            floated='left'
            size='small'
            src={volumeInfo.imageLinks?.smallThumbnail ?? unknownBook}
                wrapped
                ui={false}
           
          />
          <Card.Header>{volumeInfo.title}</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Meta>Friends of Elliot</Card.Meta>
        </Card.Content>
        
      </Card>
      );
        })}
    </Card.Group>
  );
}
