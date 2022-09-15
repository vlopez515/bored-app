import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
        <div class="grid place-items-center h-screen">
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{activity.name}</div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Accessibility Rating (0.0 - 1.0): {activity.accessibility}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Type of Activity: {activity.type}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Participants: {activity.participants}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Price Rating (0.0 - 1.0): {activity.price}
                </span>
              </div>
            </div>
            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>Remove from favorites</button>
            <Link to={`/activities`}><button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Back</button></Link>
          </div>
        </div>
      );
    }
    

export default FavActivityDetails