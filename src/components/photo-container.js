import React from 'react';
import Image from './image.js';
import NotFound from './not-found.js';

export default ({images, finishedLoading}) => {
  let display;

  if (!finishedLoading)
    display = <h3>Loading...</h3>;
  else if (images.length === 0)
    display = <NotFound />
  else
    display = images.map(image => <Image source={image.image} key={image.id} />);

  return (
  <div className="photo-container">
    <h2>Results</h2>
    <ul>
      {display}
    </ul>
  </div>
)}