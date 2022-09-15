import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Confetti from "react-confetti";

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
  const [confetti, setConfetti] = useState(false);

  let { key } = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}?key=${key}`)
      .then((response) => setActivity(response.data))
      .catch((e) => navigate(`/404`));
  }, [key, API, navigate]);

  const addActivity = (newActivity) => {
    axios
      // .post(`${backendAPI}/activities`, newActivity)
      .post("http://localhost:3003/activities/", newActivity)
      .then(
        () => {
          console.log("success");
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
    setConfetti(true);
  };

  return (
    <div class="grid place-items-center h-screen">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        {confetti ? <Confetti /> : null}
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{activity.activity}</div>
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
        <button
          class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={onClick}
        >
          Add To Favorites
        </button>
        
        <Link to={`/`}><button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Back</button></Link>
      </div>
    </div>
  );
}

export default ActivityDetails;
