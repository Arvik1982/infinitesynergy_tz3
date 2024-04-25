import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../store/slices/appSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
  reducer: {
    appRedux: appSlice,
  },
});
