import React, {useState} from 'react';
import Person from './Person/Person'
import './App.css';
import person from './Person/Person';

const App = (props) => {
  const [personState, setPersonState] = useState ({
    persons:[
      {name:'max',age:15},
      {name:'xyz', age:29},
      {name:'ascsd', age:32}
    ],
    otherstate:'some sattement',
    

  });
  
  const switchNameHandler = (newdata) =>{
    setPersonState({
      persons:[
        {name:newdata,age:5},
        {name:'xyzsidv', age:9},
        {name:'ascsdpppp', age:2}
      ]
    });
    console.log(personState);
  }

  const NameChangeHandler = (event)=>{
    setPersonState({
      persons:[
        {name:'max',age:5},
        {name:'xyzsidv', age:9},
        {name:event.target.value, age:2}
      ]
    });
  }

 

    return (
      <div className="App">
      <h1>my react app</h1>
      <div>
      <Person click ={() => switchNameHandler("first para")} name={personState.persons[0].name} age={personState.persons[0].age}/>   
      <Person click={switchNameHandler.bind(this,"second para clicked")} name={personState.persons[1].name} age={personState.persons[1].age}> hello there</Person>
      <Person changed={NameChangeHandler} name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
      <button  onClick={switchNameHandler.bind(this,"button clicked")}>CLICK TO CHANGE NAMES</button>
     
      
      </div>
    );
  
}

export default App;