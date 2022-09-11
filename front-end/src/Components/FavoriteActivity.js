import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function FavoriteActivity({ activity, id }) {
let backendAPI = process.env.REACT_APP_BACKEND_URL;
let navigate = useNavigate();


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
    <div className="Activity">
      <td>
        <Link to={`/activity/${id}`}><h2>{activity.name}</h2></Link>
      </td>
      <button onClick={handleDelete}>Remove From Favorites</button>
    </div>
  );
}

export default FavoriteActivity;