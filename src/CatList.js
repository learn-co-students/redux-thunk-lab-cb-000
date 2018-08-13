import React from 'react';

const CatList = ({ catPics }) => {
  const displayCats = catPics.map(catPic => <img  source={catPic.url} alt="Cat" />)
  return (
    <div>
      {displayCats}
    </div>
  )
  }

export default CatList;
