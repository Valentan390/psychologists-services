import styled from "styled-components";

export const StyledMakeWrapper = styled.div`
  width: 600px;
  //   max-height: 700px;
  border-radius: 30px;
  background: #fbfbfb;
  padding: 64px;
  position: relative;
  overflow-y: auto;
`;

export const StyledMakeTitle = styled.h3`
  color: var(--deepAnthracite);
  font-size: 40px;
  font-weight: var(--medium);
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const StyledMakeText = styled.p`
  color: rgba(25, 26, 21, 0.5);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.25;
  margin-bottom: 40px;
`;

export const StyledMakeFotoName = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin-bottom: 40px;
`;

export const StyledMakeFoto = styled.img`
  max-width: 44px;
  max-height: 44px;
  border-radius: 15px;
`;

export const StyledMakeFotoYour = styled.p`
  color: #8a8a89;
  font-size: 12px;
  font-weight: var(--medium);
  line-height: 1.33;
`;

export const StyledMakeName = styled.p`
  color: var(--deepAnthracite);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
`;

export const StyledMakeContainerName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: start;
  align-items: start;
  width: max-content;
`;

export const StyledMakeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: start;
  align-items: start;
  width: 100%;
`;

interface InputProps {
  $props?: string;
}

export const StyledMakeFormInput = styled.input<InputProps>`
  display: inline-flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  width: ${(props) => (props.$props ? "calc((100% - 8px) / 2)" : "100%")};
  // width: 100%
  color: var(--deepAnthracite);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.25;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::placeholder {
    color: var(--deepAnthracite);
    font-size: 16px;
    font-weight: var(--regular);
    line-height: 1.25;
  }
`;

export const StyledMakeFormTexterea = styled.textarea`
  display: inline-flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  color: var(--deepAnthracite);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.25;
  width: 100%;
  height: 116px;
  resize: none;

  &::placeholder {
    color: var(--deepAnthracite);
    font-size: 16px;
    font-weight: var(--regular);
    line-height: 1.25;
  }
`;

export const StyledMakeFormContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledMakeFormButton = styled.button`
  display: flex;
  width: 472px;
  padding: 24px 217px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: var(--mintGreen);
  color: var(--silkWhite);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.25px;
  letter-spacing: -0.16px;
  transition: var(--transition);

  &:hover {
    background: var(--seaGreen);
  }
`;
