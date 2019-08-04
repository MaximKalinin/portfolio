import * as React from 'react';

import AnnouncePreview from '../AnnouncePreview/AnnouncePreview';
import './AnnounceGrid.css';

const announceGrid = props => (
  <div className="announce-grid">
    { props.announces.map(announce => {
      if (isNaN(announce)) {
        return <AnnouncePreview key={ announce.link } announce={ announce } />;
      }
      return <AnnouncePreview key={ announce } />;
    }) }
  </div>
);

export default announceGrid;