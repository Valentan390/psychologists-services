import styled from "styled-components";
import image1x from "../../images/dasctop/image1.webp";
import image2x from "../../images/dasctop/image1@2x.webp";

export const StyledCompanyFotoDivWrapper = styled.div`
  min-width: 464px;
  min-height: 526px;
  border-radius: 10px;
  background-image: image-set(url(${image1x}) 1x, url(${image2x}) 2x);
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
`;

export const StyledcompanyFotoPGuestion = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  transform: rotate(-15deg);
  border-radius: 10px;
  background: var(--darkPurple);
  position: absolute;
  top: 185px;
  left: -33px;
`;

export const StyledCompanyFotoSvgGuestion = styled.svg`
  width: 10px;
  height: 17px;
  flex-shrink: 0;
  transform: rotate(15deg);
  fill: var(--silkWhite);
`;

export const StyledCompanyFotoPUsers = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48.173px;
  height: 48.173px;
  transform: rotate(15deg);
  flex-shrink: 0;
  background: var(--goldenRod);
  border-radius: 10px;
  transform: rotate(15deg);
  position: absolute;
  top: 38px;
  right: -38px;
`;

export const StyledCompanyFotoPUsersSvg = styled.svg`
  width: 19.836px;
  height: 19.836px;
  transform: rotate(-15deg);
  flex-shrink: 0;
  fill: var(--silkWhite);
`;

export const StyledCompanyFotoExperincedWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: start;
  align-items: center;
  border-radius: 20px;
  background: var(--mintGreen);
  padding: 32px;
  width: max-content;
  position: absolute;
  left: -101px;
  bottom: 75px;
`;

export const StyledCompanyFotoExperinceIcon = styled.p`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 13px;
  background: var(--silkWhite);
  padding: 12px;
`;

export const StyledCompanyFotoExperinceIconSvg = styled.svg`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  fill: var(--mintGreen);
`;

export const StyledCompanyFotoExperinced = styled.p`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: start;
  align-items: start;
  color: rgba(251, 251, 251, 0.5);
  font-size: 14px;
  font-weight: var(--regular);
  line-height: normal;
`;

export const StyledCompanyFotoExperincedSpan = styled.span`
  color: var(--silkWhite);
  font-size: 24px;
  font-weight: var(--bold);
  line-height: normal;
`;
