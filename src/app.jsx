import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/serarch_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  //비디오의 목록을 가져와 videos에 할당 setvideos에는 업데이트된 목록을 할당
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
