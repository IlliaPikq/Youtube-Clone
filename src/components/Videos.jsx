import { Box, Stack } from "@mui/material";
import React from "react";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignContent="start"
      gap={2}
    >
      {videos.map((video, idx) => (
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
