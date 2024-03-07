import styled from "styled-components";

export const StyledWrapper = styled.li`
  display: flex;
  gap: 24px;
  justify-content: start;
  align-items: start;
  width: 100%;
  padding: 24px;
  border-radius: 24px;
  background: #fbfbfb;
`;

export const StyledContainerFoto = styled.div`
  position: relative;
  padding: 12px;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 2px solid rgba(84, 190, 150, 0.2);
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 15px;
`;

export const StyledSvgContainer = styled.p`
  position: absolute;
  top: 9px;
  right: 14px;
`;

// ================     =================

export const StyledContainerDescription = styled.div`
  width: 100%;
`;

export const StyledContainerPsychologist = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`;

export const StyledPsychologist = styled.p`
  color: #8a8a89;
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
`;

export const StyledContainerPrice = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledContainerRating = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledRating = styled.p`
  color: #191a15;
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
`;

export const StyledPriceSpan = styled.span`
  color: #38cd3e;
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
`;

export const StyledName = styled.p`
  color: #191a15;
  font-size: 24px;
  font-weight: var(--medium);
  line-height: 1;
  margin-bottom: 24px;
`;

export const StyledContainerDiv = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin-bottom: 8px;
`;

export const StyledContainerP = styled.p`
  color: #8a8a89;
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  background: #f3f3f3;
`;

export const StyledContainerSpan = styled.span`
  color: #191a15;
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
`;

export const StyledAbout = styled.p`
  color: rgba(25, 26, 21, 0.5);
  font-size: 16px;
  font-weight: var(--regular);
  line-height: 1.25;
  margin-top: 24px;
`;

export const StyledContainerHeart = styled.div`
  display: flex;
  gap: 28px;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledBuutonHeart = styled.button`
  width: 26px;
  height: 26px;
  padding: 0;
`;
