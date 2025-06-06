
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    profile: null,
    otherUsers: null 
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getMyProfile: (state, action) => {
      state.profile = action.payload;
    },
    // getOtherUser: (state, action) => {
    //   state.otherUsers = action.payload;
    // },
    getOtherUsers: (state, action) => { 
      state.otherUsers = action.payload;
    },
    followingUpdate: (state, action) => {
        if(state.user.following.includes(action.payload)){
            state.user.following = state.user.following.filter((itemId)=>{
                return itemId !== action.payload;
            })
        }else{
            // follow
            state.user.following.push(action.payload);
        }
    }
  }
});

export const {
  getUser,
  getMyProfile,
  getOtherUser,
  getOtherUsers,      
  followingUpdate
} = userSlice.actions;

export default userSlice.reducer;