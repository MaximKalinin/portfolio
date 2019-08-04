import * as React from 'react';

import AnnounceGrid from '../components/AnnounceGrid/AnnounceGrid';
import './MainPage.css';
import dortable from '../img/dortable-1.png';

class MainPage extends React.Component {
  render () {
    return (
      <div className="main-page"><AnnounceGrid announces={ [{ img: dortable, title: 'DOR Table', date: 'Сегодня', likes: '33', link: '/dortable' },] } /></div>
    );
  }
}

export default MainPage;
