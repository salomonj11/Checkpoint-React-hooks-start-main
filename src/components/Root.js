import React, { useState, useEffect } from 'react';
import PetList from './PetList';
import Axios from 'axios';

const Root = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function getPets() {
      try {
        const { data } = await Axios.get('/api/pets');
        setPets(data);
      } catch (err) {
        console.error(err);
      }
    }
    getPets();
  }, []);

  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={pets} />
    </>
  );
};

export default Root;
