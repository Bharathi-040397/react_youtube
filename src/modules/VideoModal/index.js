import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { setModalStatus, selectVideo } from "../../logic/action";
import "./style.css";

const VideoModal = ({ video }) => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(setModalStatus(false));
    dispatch(selectVideo(null));
  };

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null; 

  return createPortal(
    <div className="video-modal">
      {video && (
        <div>
          <h3>{video.title}</h3>
          <button onClick={handleModalClose} className="close-button"></button>
          <div className="video-iframe-container">
            <iframe
              src={video.url}
              title={video.title}
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      )}
    </div>,
    modalRoot
  );
};

export default VideoModal;
