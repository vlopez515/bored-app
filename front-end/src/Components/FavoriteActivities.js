import ActivityDetails from "./ActivityDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import FavoriteActivity from "./FavoriteActivity";

function FavoriteActivities() {
const [activities, setActivities] = useState([]);
const backendAPI = process.env.REACT_APP_BACKEND_URL;
let navigate = useNavigate();
    
useEffect(() => {
        axios
          .get(`${backendAPI}/activities`)
          .then((response) => setActivities(response.data))
          .catch((error) => navigate(`/404`));
      }, [backendAPI]);


return (
    <div>
        <h2>Activities</h2>
        <section className='recipes-shown'>
        {activities?.map(activity => {
            return <FavoriteActivity id={activity.id} activity={activity} />
        })}
        </section>
        </div>
  )
}

export default FavoriteActivities;