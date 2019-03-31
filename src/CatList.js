import React from 'react';

const CatList = (props) => {
  const cats = props.catPics.map(catPic => {
    return <img key={catPic.id} src={catPic.url} alt="" />;
  });
  
  return (
    <div>
      {cats}
    </div>
  )
}

export default CatList;