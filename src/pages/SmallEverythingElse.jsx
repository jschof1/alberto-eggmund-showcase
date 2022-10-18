import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function SmallEverythingElse({ title, attachments }) {
  return (
    <>
      <div className="w-1/4 overflow-hidden sm:my-3 sm:px-3">
        <Link to={title}>
          <div key={uuidv4()} id="img_wrap" className="static">
            <LazyLoadImage src={attachments} />
          </div>
        </Link>
      </div>
    </>
  );
}

export default SmallEverythingElse;
