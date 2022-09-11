import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Search() {
  const [activity, setActivity] = useState([]);
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`${API}`)
      .then((response) => setActivity(response.data))
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="search">
      <form className="form" onSubmit={handleSubmit}>
        <button id="search-button">Click for something to do!</button>
      </form>
      <Link to={`/activity/${activity.key}`}>
        <h2>
          {" "}
          <div className="Activity">
            <h2>{activity.activity}</h2>
            <td>
            </td>
          </div>{" "}
        </h2>
      </Link>
    </div>
  );
}

export default Search;
