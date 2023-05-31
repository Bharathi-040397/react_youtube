import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import { setModalStatus,selectVideo } from "../../logic/action";
import { videos } from "../../utils/VideosData";
import "./style.css";


const VideoDetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const selectedVideo = useSelector((state) => state.selectedVideo);

  useEffect(()=>{
    if(selectedVideo === null){
      updateSelectedVideo()
    }
  },[id])

  const updateSelectedVideo = () =>{
    const tempSelectedVideo = videos?.find((video)=>video?.id === Number(id));
    dispatch(selectVideo(tempSelectedVideo));
  }

  const handlePlay = () => {
    navigate(-1);
    dispatch(setModalStatus(true));
  };

  if (!selectedVideo) {
    return <div className="details-container">
      <p>No video selected.</p>
      </div>;
  }

  return (
    <div className="video-details-page">
      <h1>Video Details</h1>
      <div className="underline"></div>
      {selectedVideo && (
        <div className="video-content">
          <h2>{selectedVideo.title}</h2>
          <div className="image-container">
            <img src={selectedVideo.thumbnail} alt={selectedVideo.title} className="image" />
            <div className="play-button" onClick={handlePlay} >
              <i className="fas fa-play"></i>
            </div>
          </div>
          <p>{selectedVideo.description}</p>
        </div>
      )}
    </div>
  );
};

export default VideoDetailsPage;
