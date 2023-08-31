import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../css/Common.module.css';
import Box from '../components/Box';

function Fat () {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('https://namankhurpia.pythonanywhere.com/fat/')
      .then(response => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  }, []);




  return (
    <div>
    <header className={styles.header}>
    <h1 className={styles.heading}>Fat Papers</h1>
    <p className={styles.subheading}>Final Assessment Test </p>
    </header>
    <div className={styles.datacontainer}>
        
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>Oh no, 404!</p>}
      {!loading && !error && (

        <Box data={data}/>


      )}
    </div>

</div>
  );


};

export default Fat;
