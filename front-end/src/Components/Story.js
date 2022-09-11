import StoryForm from "./StoryForm";
import { useState } from "react";

function Story({ story, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="Story">
      <button onClick={toggleView}>Edit</button>
      {viewEditForm ? (
        <StoryForm
          handleSubmit={handleSubmit}
          userDetails={story}
          toggleView={toggleView}
        >
          <h5>this is the edit form</h5>
        </StoryForm>
      ) : (
        <div>
          <h4>
            {story.title} <span>{story.img}</span>
          </h4>
          <h5>{story.user}</h5>
          <p>{story.content}</p>
          <button onClick={() => handleDelete(story.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Story;
