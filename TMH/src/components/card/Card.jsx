import React from 'react';
import classes from './card.module.css';

const Card = (props) => {
  return (
    <div className={classes.cardContainer}>
      <h3>{props.data.name}</h3>
      <img className={classes.petsImg} src={props.data.img} alt={props.data.name} />
    </div>
  );
};

export default Card;
