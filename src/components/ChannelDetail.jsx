import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/fetchApi";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setChannelVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh" sx={{ backgroundColor: "#000" }}>
      <Box>
        <div
          style={{
            height: "300px",
            background: "rgb(36,0,0)",
            background:
              "linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(121,9,15,1) 35%, rgba(255,0,31,1) 100%)",
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display={"flex"} p={2}>
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={channelVideos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
