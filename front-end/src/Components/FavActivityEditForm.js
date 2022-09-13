import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const backendAPI = process.env.REACT_APP_BACKEND_URL;

function FavActivityEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [activity, setActivity] = useState({
    name:'',
    type:'',
    participants: 0,
    price: 0,
    accessibility: 0,
    is_favorite: true
});

  useEffect(() => {
      axios
        .get(`${backendAPI}/activities/${id}`)
        .then((response) => setActivity(response.data))
        .catch((error) => navigate(`/404`));
    }, [backendAPI]);


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

  const handleTextChange = (event) => {
    setActivity({ ...activity, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateActivity(activity);
  };

  const updateActivity = () => {
    axios.put(`${backendAPI}/activities/${id}`, activity)
    .then(
      (res) => {
        setActivity(res.data);
        navigate(`/activities`);
      },
      (error) => console.error(error)
    );
  };

    return (
      <div className="Edit">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={activity.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Website"
            required
          />
          <label htmlFor="type">Type:</label>
          <input
            id="url"
            type="text"
            value={activity.type}
            onChange={handleTextChange}
          />
          <label htmlFor="participants">Participants:</label>
          <input
            id="participants"
            type="text"
            value={activity.participants}
            onChange={handleTextChange}
          />
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="text"
            value={activity.price}
            onChange={handleTextChange}
          />
          <br />
      <button type="submit">Submit Changes</button>
        </form>
        <Link to={`/activities`}>
          <button onClick={handleDelete}>Remove from favorites</button>
        </Link>
      </div>
    );
  }

  

export default FavActivityEditForm;
