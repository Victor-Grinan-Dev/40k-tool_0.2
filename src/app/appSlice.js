import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    //base
    data: {
      faction: "",
      subfaction: "",
      units: [],
      armoury: {},
    },
    //general
    isLoading: true,
    search: "",
    error: "",
    message: "",
    darkMode: false,

    //army
    selectedUnit: undefined,
    army: [],

    //weapons Carrusell
    leftCont: null,
    centerCont: 0,
    rightCont: null,

    //indexCard'
    indexCard: {}, //this is the single page of a model
  },

  reducers: {
    //base
    setData(state, action) {
      state.data = action.payload;
    },

    //general
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    setDarkMode(state, action) {
      state.darkMode = action.payload;
    },

    //army
    addToArmy(state, action) {
      state.army.push(action.payload);
    },
    delFromArmy(state, action) {
      state.army = state.army.filter((item) => item !== action.payload);
    },
    setSelectedUnit(state, action) {
      state.selectedUnit = action.payload;
    },

    //weapons carrusell

    setLeft(state, action) {
      state.leftCont = action.payload;
    },
    setCenter(state, action) {
      state.leftCont = action.payload;
    },
    setRight(state, action) {
      state.leftCont = action.payload;
    },

    //indexCard
    setIndexCard(state, action) {
      state.indexCard = action.payload;
    },
  },
});

export const {
  //
  setData,

  //general
  setIsLoading,
  setSearch,
  setError,
  setMessage,
  setDarkMode,
  setImageUrl,

  //army
  addToArmy,
  delFromArmy,
  setSelectedUnit,

  //carrusell
  setLeft,
  setCenter,
  setRight,

  //indexCard
  setIndexCard,
} = appSlice.actions;

export default appSlice.reducer;
