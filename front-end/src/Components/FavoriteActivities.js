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
        <h2 class=" text-center font-medium leading-tight text-5xl mt-0 mb-2 text-gray-500 ">Favorite Activities</h2>
        <section className="grid grid-cols-3 gap-3">
        {activities?.map(activity => {
            return <FavoriteActivity id={activity.id} activity={activity} />
        })}
        </section>
        </div>
  )
}

export default FavoriteActivities;