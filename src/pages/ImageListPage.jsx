import React, {useState} from 'react'
import ImageItem from '../components/ImageItem'
/* import { imageList } from '../imageList' */

export default function ImageListPage() {
  const [imageList, setImageList] = useState([]);

  function handleOnClick() {
    fetch('https://image-mock-data.firebaseio.com/image.json')
    .then( response => console.log(response) )
    .then ( data => console.log(data) )
  }
  
  console.log(imageList)
  return (
    <>
      <h2>Instagram</h2>
      <button onClick={handleOnClick}>Load Data</button>
      <div className="row">
        {imageList.map( imageItem => {
          return <ImageItem 
            key={imageItem.id} 
            imageItem={imageItem} 
          />
        } )}
      </div>
    </>
  )
}
