import { createSlice } from '@reduxjs/toolkit';

const resourcesSlice = createSlice({
  name: 'resources',
  initialState: [],
  reducers: {
    setResources(_state, action) {
      return action.payload;
    },
  },
});

export default resourcesSlice.reducer;

export const { setResources } = resourcesSlice.actions;

// selectors
export const selectResources = (state) => state.resources;
