import axios from "axios";
import UserStory from "./Story";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StoryForm from "./StoryForm";
import Story from "./Story";

function Stories(props) {
  
  const backendAPI = process.env.REACT_APP_BACKEND_URL;
  const [stories, setStories] = useState([]);
  let { id } = useParams();

  const handleAdd = (newStory) => {
    axios
      .post(`${backendAPI}/activities/${id}/stories`, newStory)
      .then(
        (response) => {
          setStories([response.data, ...stories]);
        },
        (err) => console.error(err)
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (storyId) => {
    axios
      .delete(`${backendAPI}/activities/${id}/stories/${storyId}`)
      .then(
        (response) => {
          const copyStoryArray = [...stories];
          const indexDeletedStory = copyStoryArray.findIndex((story) => {
            return story.id === id;
          });
          copyStoryArray.splice(indexDeletedStory, 1);
          setStories(copyStoryArray);
        },
        (error) => console.log(error)
      )
      .catch((err) => console.log(err));
  };

  const handleEdit = (updatedStory) => {
    axios
      .put(`${backendAPI}/activities/${id}/stories/${updatedStory.id}`, updatedStory)
      .then((response) => {
        const copyStoryArray = [...stories];
        const indexUpdatedStory = copyStoryArray.findIndex((story) => {
          return story.id === updatedStory.id;
        });
        copyStoryArray[indexUpdatedStory] = response.data;
        setStories(copyStoryArray);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get(`${backendAPI}/activities/${id}/stories`).then((response) => {
      console.log(response.data);
      setStories(response.data);
    });
  }, [id, backendAPI]);
  return (
    <section className="Stories">
      <StoryForm handleSubmit={handleAdd}>
        <h4>Enter new Story</h4>
      </StoryForm>
      {stories.map((story) => (
        <Story
          key={story.id}
          story={story}
          handleDelete={handleDelete}
          handleSubmit={handleEdit}
        />
      ))}
    </section>
  );
}

export default Stories;