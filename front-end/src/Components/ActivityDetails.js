import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Stories from "./Stories"

function ActivityDetails() {
  const [favorite, setFavorite] = useState({
    name: "",
    type: "",
    participants: 0,
    price: 0,
    accessibility: false,
    is_favorite: false,
  });
  
  let { key } = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const backendAPI = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${API}?key=${key}`)
      .then((response) => setFavorite(response.data))
      .catch((error) => navigate(`/404`));
  }, [key]);

  const newActivity = (newActivity) => {
    axios
      .post(`${backendAPI}/activities`, newActivity)
      .then(() => console.log('success'))
      .catch((err) => console.log(err));
  };


  // useEffect(() => {
  //   setFavorite({
  //     name: activity.activity,
  //     type: activity.type,
  //     participants: activity.participants,
  //     price: activity.price,
  //     accessibility: activity.accessibility,
  //     is_favorite: true,
  //   });
  // }, [activity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    newActivity(favorite);
    alert("Added to Favorites")
    console.log(favorite);
  };

  return (
    <div className="Activity">
      <h2>{favorite.activity}</h2>
      <h2>{favorite.type}</h2>
      <div>
        <Link to={`/activity/${key}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={handleSubmit}>Add To Favorites</button>
       </div>
       <Stories />
       </div>
  );
}

export default ActivityDetails;
