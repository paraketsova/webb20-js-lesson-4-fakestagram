import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import Comments from './Comments';

export default function ImageItem({imageItem, imageIndex}) {
  const [likes, setLikes] = useState(imageItem.likes)
  
  function handleOnClick() {
    setLikes(likes + 1)
  }

  return (
    <div className="col-md-5">
      <img
        onClick={handleOnClick} 
        className="img-fluid" 
        src={imageItem.imageURL} 
        alt={imageItem.description}
      />
      {/* {!isNaN(imageIndex)
        ?
        <Link to={`/instagram/${imageIndex}`}>
          <strong>{imageItem.title}</strong>
        </Link>
        :
        <strong>{imageItem.title}</strong> // !!!здесь проблема в том, что для js 0  это не число
      } */}

      {imageIndex || imageIndex === 0
        ?
        <Link to={`/instagram/${imageIndex}`}>
          <strong>{imageItem.title}</strong>
        </Link>
        :
        <strong>{imageItem.title}</strong>
      }
      <p>
        {imageItem.description}
      </p>
      <p onClick={handleOnClick} >
        ♥︎ {likes}
      </p>
      <Comments />
    </div>
  )
}
