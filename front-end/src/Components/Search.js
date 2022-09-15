import { useState } from "react";
import axios from "axios";
import Activity from "./Activity";

function Search() {
  const [activities, setActivities] = useState([]);
  const [buttonText, setButtonText] = useState("Click for activities");

  const API = process.env.REACT_APP_API_URL;

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const reqOne = axios.get(`${API}`);
    const reqTwo = axios.get(`${API}`);
    const reqThree = axios.get(`${API}`);
    const reqFour = axios.get(`${API}`);
    const reqFive = axios.get(`${API}`);
    const reqSix = axios.get(`${API}`);
    axios.all([reqOne, reqTwo, reqThree, reqFour, reqFive, reqSix]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data;
        const responseTwo = responses[1].data;
        const responseThree = responses[2].data;
        const responseFour = responses[3].data;
        const responseFive = responses[4].data;
        const responseSix = responses[5].data;
        const collectedResponses = [
          responseOne,
          responseTwo,
          responseThree,
          responseFour,
          responseFive,
          responseSix,
        ];
        setActivities(collectedResponses);
      })
    );
  };

  const onClick = () => {
    setButtonText("More Activities");
  };

  return (
    <div className="search">
      <div className="flex items-center justify-center">
        <form className="form" onSubmit={handleSubmit}>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={onClick}
          >
            {buttonText}
          </button>
        </form>
      </div>
      <h2>
        {" "}
        <br />
        <br />
        <div className="grid grid-cols-3 gap-3">
          {activities?.map((activity) => {
            return <Activity id={activity.id} activity={activity} />;
          })}
        </div>{" "}
      </h2>
    </div>
  );
}

export default Search;
