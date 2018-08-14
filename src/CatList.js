import React from 'react';

const CatList = ({ catPics }) => {
  const displayCats = catPics.map(catPic => <img  key={catPic.id} src={catPic.url} alt="Cat" />)
  return (
    <div>
      {displayCats}
    </div>
  )
  }

export default CatList;
