import React from 'react'

const CatList = props => {
  return (
    <div>
    { props.catPics.map(catPic => <img src={catPic.url} key={catPic.id} alt='pretty kitty' />) }
    </div>
  )
}

export default CatList