import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: 'lightmode',
  themeList: [
    { id: 0, name: 'lightmode' },
    { id: 1, name: 'darkmode' },
    { id: 2, name: 'neumode' },
    { id: 3, name: 'starwarsmode' },
  ],
};

const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      console.log(action);
      state.selected = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
