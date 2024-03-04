import {
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

import { StyledModalContainerBackdrop } from "./ModalContainer.styled";
import { createPortal } from "react-dom";
import useModalHandler from "../../hooks/useModalHandler";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants } from "../../helpers/ComponentData";

const ModalContainer = ({ children }: { children: ReactNode }) => {
  const element = useMemo(() => document.createElement("div"), []);
  const modalRootElementRef = useRef<HTMLElement | null>(
    document.getElementById("ModalRoot")
  );

  const { handleCloseModal, modalStatus } = useModalHandler();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && modalStatus) {
        handleCloseModal();
      }
    },
    [modalStatus, handleCloseModal]
  );

  const handleBackdropClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    const currentModalRootElement = modalRootElementRef.current;
    if (!currentModalRootElement) return;

    if (modalStatus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    currentModalRootElement.appendChild(element);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (!currentModalRootElement) return;
      currentModalRootElement.removeChild(element);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [element, handleKeyDown, modalStatus]);

  return modalStatus
    ? createPortal(
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <StyledModalContainerBackdrop onClick={handleBackdropClick}>
              {children}
            </StyledModalContainerBackdrop>
          </motion.div>
        </AnimatePresence>,
        element
      )
    : null;
};

export default ModalContainer;
