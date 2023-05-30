import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectVideo } from '../../logic/action';
import './style.css'

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleVideoClick = () => {
    dispatch(selectVideo(video));
    navigate(`/video/${video.id}`);
  };

  return (
  <div className="card" onClick={handleVideoClick}>
    <img className="card-image" src={video.thumbnail} alt={video.title} />
    <div className="card-content">
    <h3 className="card-title">{video.title}</h3>
  </div>
</div>

);
};

export default VideoCard;