import { useDispatch, useSelector } from "react-redux";
import { setModalContent, setModalStatus } from "../redux/modal/modalSlice";
import {
  selectModalContent,
  selectOpenModal,
} from "../redux/modal/modalSelectors";

const useModalHandler = () => {
  const dispatch = useDispatch();

  const modalStatus = useSelector(selectOpenModal);
  const modalContent = useSelector(selectModalContent);

  const handleCloseModal: () => void = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(""));
  };

  const handleOpenModal: (modalContent: string) => void = (modalContent) => {
    dispatch(setModalStatus(true));
    dispatch(setModalContent(modalContent));
  };

  return { handleOpenModal, handleCloseModal, modalStatus, modalContent };
};

export default useModalHandler;
