import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: 'kure',
  userEmail: 'Kuretowe@abv.bg',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName
      state.userEmail = action.payload.userEmail
    },
    setUserLogOut: state => {
      state.userName = null
      state.userEmail = null
    }
  }
})

export const { setActiveUser, setUserLogOut } = userSlice.actions

export default userSlice.reducer