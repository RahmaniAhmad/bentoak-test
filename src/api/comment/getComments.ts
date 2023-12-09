import axios from "axios";

export const getCommentsCount = async (postId: number) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.data.length;
};
