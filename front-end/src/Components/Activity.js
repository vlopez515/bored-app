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
  };

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
  };

  return (
    <div>
      <Link to={`/activity/${activity.key}`}>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{activity.activity}</div>
            <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{isAccessible(activity)}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Participants: {activity.participants}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{isExpensive(activity)}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Activity;
