import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/fetchApi";

const VideoDetail = () => {
  const { id } = useParams();
  const { videoDetail, setVideoDetail } = useState(null);

  if (!videoDetail?.snippet) return "Loading...";
  const {
    snippet: { title, channelTitle, channelId },
    statistics: { views, likes },
  } = videoDetail;

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box>
          <ReactPlayer></ReactPlayer>
          <Typography variant="h5" color="#fff">
            {title}
          </Typography>
          <Typography color="#fff">{views}</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
