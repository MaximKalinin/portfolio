import * as React from 'react';
import { Link } from 'react-router-dom';

import example from '../../img/announce-preview-example.png';
import heart from '../../img/heart.svg';
import './AnnouncePreview.css';

const Like = () => <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>;

const announcePreview = (props) => {
  const { announce } = props;
  return (
    <Link to={ announce && announce.link || '/' } className="announce-preview">
      <div className="announce-preview__image">
        <div style={ { background: `url(${announce && announce.img || example})`, backgroundSize: 'cover', backgroundPosition: 'center center' } } />
      </div>
      <div className="announce-preview__description">
        <div className="date">{ announce && announce.date || '30 мая 2019' }</div>
        <div className="title">{ announce && announce.title || 'Логотип Юрия Хованского' }</div>
        <div className="likes-wrapper">
          <div className="likes"><Like />{ announce && announce.likes || '56 лайков' }</div>
        </div>
      </div>
    </Link>
  );
}

export default announcePreview;