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
      <div class="grid place-items-center h-screen">
        <form class="w-full max-w-sm" onSubmit={handleSubmit}>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
              Activity Name
            </label>
          </div>
          <div class="md:w-2/3"> 
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
          id="name" 
          value={activity.name}
          type="text"
          onChange={handleTextChange}
          required
          />
          <p class="text-blue-500 text-xs italic">Please fill out this field.</p>
          </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="type">
            Type 
          </label>
          </div>
          <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
           id="type" 
           value={activity.type}
          type="text"
          onChange={handleTextChange}
          />
          </div>
          </div>
          <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="participants">
            Participants
          </label>
          </div>
          <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="participants"
            type="text"
            value={activity.participants}
            onChange={handleTextChange}
          />
          </div>
          </div>
          <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="accessibility">
            Accessibility Rating 
          </label>
          </div>
          <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="participants"
            type="text"
            value={activity.accessibility}
            onChange={handleTextChange}
          />
          <p class="text-blue-500 text-xs italic">Rating from 0.00 - 1.00</p>
          </div>
          </div>
          <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="price">
            Price Rating 
          </label>
          </div>
          <div class="md:w-2/3">
          <input 
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="price"
            type="decimal"
            min='0.00'
            max='1.00'
            value={activity.price}
            onChange={handleTextChange}
          />
          <p class="text-blue-500 text-xs italic">Rating from 0.00 - 1.00</p>
          </div>
          </div>
          <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Submit Changes
            </button>
          </div>
        </div>
         <br />
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
        <Link to={`/activities`}>
          <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>Remove from favorites</button>
        </Link>
        </div>
        </div>
          <br />
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
        <Link to={`/activities`}><button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Back</button></Link>
        </div>
        </div>
        </form>
      </div>
    );
  }

  

export default FavActivityEditForm;
