import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";


function AllMeetups() {

  const [isloading, setisloading] = useState(true);
  const [loadedmeetups, setloadedmeetups] = useState([]);

  useEffect(() => {
    setisloading(true);

    fetch( 'https://react-test-app-8c79e-default-rtdb.firebaseio.com/meetups.json' ).then(response => {
      return response.json();
    }).then(data => {


      const meetups = [];
      for(const key in data)
      {
        const meetup = {
          id:key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setisloading(false);
      setloadedmeetups(meetups);
    });

  }, []);

   

    if(isloading){
      return <section><p>Loading...</p></section>;
    }
    else
    {
      return (<section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedmeetups}/>
    </section>
    );
    }
    

}
  
  export default AllMeetups;