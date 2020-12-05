import React, {useRef, useState} from 'react'

 export default function Comments() {
  const inputRef = useRef();
  /* const commentList = [
    'Hej',
    'Tjena',
    'Hello'
  ] */
  const [commentList, setCommentlist] = useState (['Hej', 'Hå']);

  function handleOnClick() {
    //hämta ut det användaren har skrivit i input fältet
    
    console.log(inputRef);//TEST
    console.log(inputRef.current);//TEST
    console.log(inputRef.current.value);//TEST

    const value = inputRef.current.value;
    //Lägg till det i Comment List
    /* commentList.push(value);
    console.log(commentList); */
    setCommentlist( [...commentList, value])

  }

  return (
    <div>
      {commentList.map((comment, index) => {
        return <p key={index}>{comment}</p>
      })}
      <input ref={inputRef} type='text' />
      <button onClick={handleOnClick}
      className='btn btn-primary'>
        Send
      </button>
    </div>
  )
 }