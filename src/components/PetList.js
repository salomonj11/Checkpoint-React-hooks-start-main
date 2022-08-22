import React, { useState } from 'react';
import SinglePet from './SinglePet';

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  const [petSelected, setPetSelected] = useState('all');

  return (
    <>
      <div>
        {' Filter By Species: '}
        <select onChange={(element) => setPetSelected(element.target.value)}>
          <option value="all">All</option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
        </select>
        <div className="pet-list">
          {props.pets.map((pet) => {
            if (
              pet.species === petSelected.slice(0, -1) ||
              petSelected === 'all'
            ) {
              return <SinglePet pet={pet} key={pet.id} />;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default PetList;
