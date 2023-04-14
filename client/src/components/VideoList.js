import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideosAndComments } from "../modules/videoManager";
import VideoForm from "./VideoForm";
import SearchVideos from "./SearchVideos";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    getAllVideosAndComments().then(videos => setVideos(videos));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="container">
        <div className="row justify-content-center">
          <SearchVideos />
        </div>
        <div className="row justify-content-center">
            <VideoForm getVideos={getVideos} />
        </div>
      <div className="row justify-content-center">
        {videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;