import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalInitialStateInter } from "../../helpers/InterfaceData";

const modalInitialState: ModalInitialStateInter = {
  openModal: false,
  modalContent: "",
  makeAppointment: { name: "", avatar_url: "" },
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
    setMakeAppointment: (
      state,
      action: PayloadAction<{ name: string; avatar_url: string }>
    ) => {
      state.makeAppointment = action.payload;
    },
  },
});

export const { setModalStatus, setModalContent, setMakeAppointment } =
  modalSlice.actions;

export const modalReducer = modalSlice.reducer;
