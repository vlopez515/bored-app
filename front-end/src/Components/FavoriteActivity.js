import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


function FavoriteActivity({ activity, id }) {

return (
    <div className="flex justify-center">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <Link to={`/activity/fav/${id}`}>
      <h2 class="text-gray-900 text-xl leading-tight font-medium mb-2">{activity.name}</h2>
      </Link>
        <Link to={`/activity/${id}/edit`}><button><FontAwesomeIcon icon={faEdit}/></button>
        </Link>
      </div>
    </div>
  );
}

export default FavoriteActivity;