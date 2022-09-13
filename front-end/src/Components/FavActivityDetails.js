import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function FavActivityDetails() {
    const [activity, setActivity] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();
    
    const backendAPI = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        axios
          .get(`${backendAPI}/activities/${id}`)
          .then((response) => setActivity(response.data))
          .catch((error) => navigate(`/404`));
      }, [id]);
 
      const deleteActivity = () => {
        axios
          .delete(`${backendAPI}/activities/${id}`)
          .then(() => {
            navigate(`/activities`);
          })
          .catch((c) => console.error("catch", c));
      };
      
      const handleDelete = () => {
        deleteActivity();
      };

  return (
    <div>
      <h2>Activity:{activity.name}</h2>
      <h4>Accessibility: {activity.accessibility} </h4>
      <h4>Type: {activity.type}</h4>
      <h4>Participants: {activity.participants}</h4>
      <h4>Price: {activity.price} </h4>
    <button onClick={handleDelete}>Remove from favorites</button>
    </div>
  )
}

export default FavActivityDetails