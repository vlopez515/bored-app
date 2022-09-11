import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ActivityEditForm() {
  let { key } = useParams();
  let navigate = useNavigate();
  
  const [activity, setActivity] = useState({
    name:'',
    type:'',
    participants: 0,
    price: 0,
    accessibility: false,
    is_favorite: false
});
 

  useEffect(() => {
    axios.get(`${API}?key=${key}`).then(
      (response) => setActivity(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [key, navigate]);


  const deleteActivity = () => {
    axios
      .delete(`${API}?key=${key}`)
      .then(() => {
        navigate(`/activities`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteActivity();
  };


  return (
    <div className="Edit">
        {activity.activity}
      <Link to={`/activity/${key}`}>
        <button>Back</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ActivityEditForm;
