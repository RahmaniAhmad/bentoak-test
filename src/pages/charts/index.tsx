import { useQuery } from "react-query";
import { getPosts } from "../../api/post";
import { IChartData, IPost } from "../../types";
import { useEffect, useState } from "react";
import { getCommentsCount } from "../../api/comment";
import { Grid } from "@mui/material";
import { LineChart, PieChart, RadarChart } from "./components";

export const Charts = () => {
  const [data, setData] = useState<Array<IChartData>>([]);
  const pushData = (newItem: IChartData) => {
    setData((prevData) => [...prevData, newItem]);
  };
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery(["posts"], () => getPosts());

  useEffect(() => {
    posts &&
      posts.map((post: IPost) =>
        getCommentsCount(post.id).then((commentsCount: number) => {
          const newItem: IChartData = {
            postTitle: post.title,
            //as the number of comments for each post is 5, I used a random value to see charts better
            commentsCount: Math.floor(Math.random() * 10) + 1, //commentsCount ?? 0,
          };
          pushData(newItem);
        })
      );
  }, [posts]);

  return (
    <>
      <Grid container spacing={4} pt={4}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LineChart data={data} />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <RadarChart data={data} />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <PieChart data={data} />
        </Grid>
      </Grid>
    </>
  );
};
