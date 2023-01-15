import { Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import unknownBook from '../../asset/unknownBook.jpg';
import React from 'react';
import '../bookDescriptionPopup/bookDescriptionPopup.css';

export default function BookDescriptionPopup(props) {

  

  return (
      <div>
      <h2 style={{ flexWrap: 'wrap' }}>{props.volumeInfo.title}</h2>
      
        <Image
        className='popup-image'
          size='medium'
          src={props.volumeInfo.imageLinks?.smallThumbnail ?? unknownBook}
          wrapped
        />
        <div className='popup-description'>
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
        </div>
      
      </div>
  );
}
