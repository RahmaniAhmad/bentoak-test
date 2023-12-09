import axios from "axios";

export const getPosts = async () => {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.data;
    });
  return data;
};
