// import React, { Component } from 'react';
import './cardlist.css';
import Card from '../card/Card';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card className="card-container" key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
export default CardList;
