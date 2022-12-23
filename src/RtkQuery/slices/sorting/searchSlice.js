import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable no-param-reassign */
const searchSlice = createSlice({
  name: 'search',
  initialState: { search: [] },
  reducers: {
    getSearchResult: (state, action) => {
      state.search = action.payload;
    },
  },
});
/* eslint-enable no-param-reassign */

export const { getSearchResult } = searchSlice.actions;

export default searchSlice.reducer;
