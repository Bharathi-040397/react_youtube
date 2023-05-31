import { useSelector } from "react-redux";
import VideoCard from "../VideoCard";
import VideoModal from "../VideoModal";
import "./style.css";

const Home = () => {
  const { videos, selectedVideo, modalOpen } = useSelector((state) => state);

  return (
    <>
      <div className="home-page">
        <h1>Video Listing</h1>
        <div className="underline"></div>
        <div className="video-list">
          {videos?.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
      {modalOpen && <VideoModal />}
    </>
  );
};

export default Home;
