import styles from '../css/Common.module.css';

function Box(props){

    const handleShowButtonClick = (dataDir) => {
        window.open('https://namankhurpia.pythonanywhere.com/'+dataDir, '_blank'); 
      };


    return (

        <div className={styles.databoxes}>
          {props.data.map(item => (
            <div key={item.id} className={styles.databox}>
              <div className={styles.data}>
                <p> <strong> {item.course_name} </strong></p>
                <p className={styles.smallfont}>{item.course_code}</p>
                <p className={styles.smallfont}>{item.slot}</p>
                <p className={styles.smallfont}>{item.year}</p>
              </div>
              <button className={styles.showbutton} onClick={() => handleShowButtonClick(item.data_dir)} >VIEW</button>
            </div>
          ))}
        </div>
      

    );
}

export default Box;