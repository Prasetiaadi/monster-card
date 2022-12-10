import React from 'react'

export default function Card({ monster }) {
  const { name, email, id } = monster;
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${id}?set=set2&size=200x200`} alt={`monster ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
