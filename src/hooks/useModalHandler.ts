import { useDispatch, useSelector } from "react-redux";
import {
  setModalContent,
  setModalStatus,
  setMakeAppointment,
} from "../redux/modal/modalSlice";
import {
  selectMakeAppointment,
  selectModalContent,
  selectOpenModal,
} from "../redux/modal/modalSelectors";

const useModalHandler = () => {
  const dispatch = useDispatch();

  const modalStatus = useSelector(selectOpenModal);
  const modalContent = useSelector(selectModalContent);
  const makeAppointmentPsychologist = useSelector(selectMakeAppointment);

  const handleCloseModal: () => void = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(""));
  };

  const handleOpenModal: (
    modalContent: string,
    psychologist?: { name: string; avatar_url: string }
  ) => void = (modalContent, psychologist) => {
    dispatch(setModalStatus(true));
    dispatch(setModalContent(modalContent));
    if (psychologist) {
      dispatch(setMakeAppointment(psychologist));
    }
  };

  return {
    handleOpenModal,
    handleCloseModal,
    modalStatus,
    modalContent,
    makeAppointmentPsychologist,
  };
};

export default useModalHandler;
