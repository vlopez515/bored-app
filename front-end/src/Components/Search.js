import { useState } from "react";
import axios from "axios";
import Activity from "./Activity";

function Search() {
  const [activities, setActivities] = useState([]);
  const [buttonText, setButtonText] = useState('Click for activities')
  

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
    setButtonText('More Activities')
  }


  return (
    <div className="search">
      <form className="form" onSubmit={handleSubmit}>
        <button id="search-button" onClick={onClick}>{buttonText}</button>
      </form>
      
        <h2>
          {" "}
          <div className="Activity">
            {activities?.map((activity) => {
              return <Activity id={activity.id} activity={activity} />;
            })}
          </div>{" "}
        </h2>
      
    </div>
  );
}

export default Search;
