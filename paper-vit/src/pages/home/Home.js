import classes from './Home.module.css';
import { Link } from 'react-router-dom';

function Home(){

  const containerStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow:
      'rgba(0, 0, 0, 0.07) 0px 1px 2px, ' +
      'rgba(0, 0, 0, 0.07) 0px 2px 4px, ' +
      'rgba(0, 0, 0, 0.07) 0px 4px 8px, ' +
      'rgba(0, 0, 0, 0.07) 0px 8px 16px, ' +
      'rgba(0, 0, 0, 0.07) 0px 16px 32px, ' +
      'rgba(0, 0, 0, 0.07) 0px 32px 64px',
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
    textAlign: 'center', // Center align the text
    fontFamily: 'Roboto, sans-serif', // Apply Roboto font
    color: '#ccc', // Initial color
    transition: 'color 0.3s ease', // Smooth transition
  };

  const handleHover = () => {
    containerStyle.color = '#aaa'; // Light grey color on hover
  };

  const handleMouseLeave = () => {
    containerStyle.color = '#ccc'; // Revert to initial color
  };


    return (
    <div className="app">
    <header className="app-header">
      <h1>Paper VIT</h1>
    </header>


    <div className="button-container">
    <div
      style={containerStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}>
      Cat One
      </div>
    

      <Link to="/catone" className="button">
        <img src="catone.png" alt="Cat One" />
        <span>Cat One</span>
      </Link>
      <Link to="/cattwo" className="button">
        <img src="cattwo.png" alt="Cat Two" />
        <span>Cat Two</span>
      </Link>
      <Link to="/fat" className="button">
        <img src="fat.png" alt="Fat" />
        <span>Fat</span>
      </Link>
    </div>
    </div>
    );
}

export default Home;