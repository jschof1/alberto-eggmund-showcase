import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import HoverImage from "react-hover-image";

function SmallAnimation({ title, still, gifs, index }) {
  return (
    <>
      <div className="w-1/4 overflow-hidden sm:my-3 sm:px-3">
        <Link to={title}>
          <div key={uuidv4()} id="img_wrap" className="static">
            <HoverImage key={index} src={still} hoverSrc={gifs} />
          </div>
        </Link>
      </div>
    </>
  );
}

export default SmallAnimation;

// a.Still[0].url a.Gifs[0].url
