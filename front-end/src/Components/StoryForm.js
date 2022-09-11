import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StoryForm(props) {
  let { id } = useParams();
  const { storyDetails } = props;

  const [story, setStory] = useState({
    user: "",
    title: "",
    content: "",
    img: "",
    activity_id: id,
  });

  const handleTextChange = (event) => {
    setStory({ ...story, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (storyDetails) {
      setStory(storyDetails);
    }
  }, [id, storyDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(story, id);
    if (storyDetails) {
      props.toggleView();
    }
    setStory({
      user: "",
      title: "",
      content: "",
      img: "",
      activity_id: id,
    });
  };
  return (
    <div className="Edit">
      {props.children}

      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Name:</label>
        <input
          id="user"
          value={story.user}
          type="text"
          onChange={handleTextChange}
          placeholder="Your Name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={story.title}
          onChange={handleTextChange}
        />
        <label htmlFor="content">Story:</label>
        <textarea
          id="content"
          type="text"
          name="content"
          value={story.content}
          onChange={handleTextChange}
        />
        <label htmlFor="img">Image:</label>
        <input
          id="img"
          type="url"
          pattern="http[s]*://.+"
          value={story.image}
          placeholder="https://"
          onChange={handleTextChange}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default StoryForm;
