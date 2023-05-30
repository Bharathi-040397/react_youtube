  import { SELECT_VIDEO,SET_MODAL_STATUS } from "../constant";
  
  export const selectVideo = (video) => ({
    type: SELECT_VIDEO,
    payload: video,
  });

  export const setModalStatus = (video) => ({
    type: SET_MODAL_STATUS,
    payload: video,
  });
  