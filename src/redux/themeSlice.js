import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: 'lightmode',
  list: [
    { id: 0, name: 'lightmode', title: 'Light Mode' },
    { id: 1, name: 'darkmode', title: 'Dark Mode' },
    { id: 2, name: 'neumode', title: 'Neu Mode' },
    { id: 3, name: 'starwarsmode', title: 'Star Wars Mode' },
  ],
};

const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
