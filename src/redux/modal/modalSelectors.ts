import { RootState } from "../stor";

export const selectOpenModal = (state: RootState) => state.modalInfo.openModal;
export const selectModalContent = (state: RootState) =>
  state.modalInfo.modalContent;
