import React, { useState } from 'react';

function SinglePet(props) {
  const [adopted, setAdopted] = useState(false);

  return (
    <div className={adopted ? 'single-pet adopted' : 'single-pet'}>
      <h1>{props.pet.name}</h1>
      <p>{props.pet.description}</p>
      <p>Species: {props.pet.species}</p>
      <hr></hr>
      <p>{adopted ? 'Adopted!' : 'Available'}</p>
      <button onClick={() => setAdopted(!adopted)}>Toggle Status</button>
    </div>
  );
}

export default SinglePet;
