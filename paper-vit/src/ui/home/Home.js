import React from 'react';
import { Link } from 'react-router-dom';
import catone from '../../res/catone.png';
import cattwo from '../../res/cattwo.png';
import fat from '../../res/fat.png';
import classes from './Home.module.css'; 
import bar from '../../res/bar.png';
import aboutus from '../../res/aboutus.png';

function Home() {
  return (
    <div className={classes.homeContainer}>

      <header className={classes.header}>
        <h1 className={classes.heading}>Paper VIT</h1>
        <p className={classes.subheading}>Question Paper Supplier App</p>
      </header>


      <div className={classes.buttonContainer}>

        <Link to="/catone" className={classes.customButton}>
          <img src={catone} alt="Cat One" />
        </Link>

        <Link to="/cattwo" className={classes.customButton}>
          <img src={cattwo} alt="Cat Two" />
        </Link>

        <Link to="/fat" className={classes.customButton}>
          <img src={fat} alt="Fat" />
        </Link>

        <Link to="/" className={classes.customButton}>
          <img src={bar} alt="Fat" />
        </Link>

        <Link to="/" className={classes.customButton}>
          <img src={aboutus} alt="Fat" />
        </Link>

      </div>


    </div>
  );
}

export default Home;
