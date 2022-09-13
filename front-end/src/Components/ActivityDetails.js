import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Confetti from 'react-confetti'
// import useWindowSize from 'react-use/lib/useWindowSize'

function ActivityDetails() {
  const [activity, setActivity] = useState([]);
  const [favorite, setFavorite] = useState({
    name: "",
    type: "",
    participants: 0,
    price: 0,
    accessibility: "",
    is_favorite: false,
  });
  const [confetti, setConfetti] = useState(false)


  let { key } = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const backendAPI = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${API}?key=${key}`)
      .then((response) => setActivity(response.data))
      .catch((error) => navigate(`/404`));
  }, [key]);

  const addActivity = (newActivity) => {
    axios
      // .post(`${backendAPI}/activities`, newActivity)
      .post('http://localhost:3003/activities/', newActivity)
      .then(
        () => { console.log("success")
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    setFavorite({
      name: activity.activity,
      type: activity.type,
      participants: activity.participants,
      price: activity.price,
      accessibility: activity.accessibility,
      is_favorite: true,
    });
  }, [activity]);

  const onClick = () => {
    addActivity(favorite);
    setConfetti(true)
  };

 

  return (
    <div className="Activity">
      {confetti ? <Confetti /> : null}
      <h2>{activity.activity}</h2>
      <h4>Accessibility: {activity.accessibility} </h4>
      <h4>Type: {activity.type}</h4>
      <h4>Participants: {activity.participants}</h4>
      <h4>Price: {activity.price} </h4>
      <div>
        <button onClick={onClick}>Add To Favorites</button>
      </div>
      <div></div>
    </div>
  );
}

export default ActivityDetails;
