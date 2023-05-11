import { SET_IMAGE } from "../types";

const data = {
  image: "",
};

const quillData = (state = data, action) => {
  const payload = action.payload;
  switch (action.type) {
    case SET_IMAGE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default quillData;
