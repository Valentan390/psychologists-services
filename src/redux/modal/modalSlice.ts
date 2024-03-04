import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalInitialStateInter } from "../../helpers/InterfaceData";

const modalInitialState: ModalInitialStateInter = {
  openModal: false,
  modalContent: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState: modalInitialState,
  reducers: {
    setModalStatus: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
    setModalContent: (state, action: PayloadAction<string>) => {
      state.modalContent = action.payload;
    },
  },
});

export const { setModalStatus, setModalContent } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
