import {SELECT_VIDEO,SET_MODAL_STATUS} from '../constant'
import { videos } from '../../utils/VideosData';

const initialState = {
  videos,
  selectedVideo: null,
  modalOpen: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return {
        ...state,
        selectedVideo: action.payload,
      };
    case SET_MODAL_STATUS:
      return {
        ...state,
        modalOpen: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
