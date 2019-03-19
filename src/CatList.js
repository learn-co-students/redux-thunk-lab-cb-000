import React from 'react';

const CatList = props => {

  return (
    <div>
      {props.catPics.map(catPic => {return <img src={catPic.url} />})}
    </div>
  )
}

export default CatList
