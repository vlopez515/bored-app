import { Link } from 'react-router-dom';


function FavoriteActivity({ activity, id }) {

return (
    <div className="Activity">
      <td>
      <Link to={`/activity/fav/${id}`}>
      <h2>{activity.name}</h2>
      </Link>
        <Link to={`/activity/${id}/edit`}><button>Edit</button></Link>
        
      </td>
    </div>
  );
}

export default FavoriteActivity;