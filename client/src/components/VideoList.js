import React, { useEffect, useState } from "react";
import Video from "./Video";
import { getAllVideosAndComments } from "../modules/videoManager";
import SearchVideos from "./SearchVideos";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    getAllVideosAndComments().then((videos) => setVideos(videos));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <SearchVideos setVideos={setVideos} getVideos={getVideos} />
      </div>
      <div className="row justify-content-center">
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
