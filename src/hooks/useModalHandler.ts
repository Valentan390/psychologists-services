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

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(""));
  };

  const handleOpenModal = (modalContent: string) => {
    dispatch(setModalStatus(true));
    dispatch(setModalContent(modalContent));
  };

  return { handleOpenModal, handleCloseModal, modalStatus, modalContent };
};

export default useModalHandler;
