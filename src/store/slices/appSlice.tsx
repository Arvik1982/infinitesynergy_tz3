import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/types";


const appSlice = createSlice({
  name: "app",
  initialState: {

    userData:{
      _id:'',
      name: '',
      surname: '',
      age: 0,
      email: '',
      department: '',
      company: '',
      jobTitle: ''
    },

    dataArray:[{
      _id:'',
      name: '',
      surname: '',
      age: 0,
      email: '',
      department: '',
      company: '',
      jobTitle: ''
    }]
  },
  reducers: {
    setUserData(state, action: PayloadAction<UserType>) {
      state.userData=action.payload
           
    },
    setDataArray(state, action: PayloadAction<Array<UserType>>) {
      [...state.dataArray]=action.payload
      
    },
  },
});

export const { setUserData, setDataArray } = appSlice.actions;

export default appSlice.reducer;
