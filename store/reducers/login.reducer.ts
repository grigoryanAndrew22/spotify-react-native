import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  access_token: '',
};

const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setAccessToken(state, { payload }) {
      state.access_token = payload;
    },
  },
});

export const { setAccessToken } = loginReducer.actions;
export default loginReducer.reducer;
