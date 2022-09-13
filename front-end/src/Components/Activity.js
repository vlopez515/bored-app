import React from "react";
import { Link } from "react-router-dom";

function Activity({ activity }) {
  
  const isAccessible = () => {
    if (activity.accessibility < 0.5) {
      return "Not very accessible";
    } else if (activity.accessibility > 0.5 && activity.accessibility < 0.75) {
      return "Accessible";
    } else {
      return "Highly accessible";
    }
  }

  const isExpensive = () => {
    if (activity.price === 0) {
      return "Free!";
    }
    if (activity.price > 0 && activity.price < 0.25) {
      return "Very Affordable";
    }
    if (activity.price > 0.25 && activity.price < 0.75) {
      return "Affordable";
    } else {
      return "Expensive!";
    }
  }

  return (
    <div>
      <Link to={`/activity/${activity.key}`}>
        <h2>{activity.activity}</h2>
        <h4>Accessibility: {isAccessible(activity)}</h4>
        <h4>Type: {activity.type}</h4>
        <h4>Participants: {activity.participants}</h4>
        <h4>Price: {isExpensive(activity)}</h4>
      </Link>
    </div>
  );
}

export default Activity;
