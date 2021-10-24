import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  //비디오의 목록을 가져와 videos에 할당 setvideos에는 업데이트된 목록을 할당
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA8AG2cl2JQ8a2Ag8GxLvxQc2vpB6jLr4Q",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
