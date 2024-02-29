import { FC } from "react";
import {
  StyledCompanyFotoDivWrapper,
  StyledCompanyFotoExperinceIcon,
  StyledCompanyFotoExperinced,
  StyledCompanyFotoExperincedSpan,
  StyledCompanyFotoExperincedWrapper,
  StyledCompanyFotoPUsers,
  StyledcompanyFotoPGuestion,
} from "./CompanyFoto.styled";
import Icon from "../Icon/Icon";

const CompanyFoto: FC = () => {
  return (
    <StyledCompanyFotoDivWrapper>
      <StyledcompanyFotoPGuestion>
        <Icon
          width="10px"
          height="17px"
          transform="rotate(15deg)"
          iconName="icon-fa6-solid_question"
        />
      </StyledcompanyFotoPGuestion>

      <StyledCompanyFotoPUsers>
        <Icon
          width="19.836px"
          height="19.836px"
          transform="rotate(-15deg)"
          iconName="icon-mdi_users"
        />
      </StyledCompanyFotoPUsers>

      <StyledCompanyFotoExperincedWrapper>
        <StyledCompanyFotoExperinceIcon>
          <Icon
            width="30px"
            height="30px"
            fill="var(--mintGreen)"
            iconName="icon-fe_check"
          />
        </StyledCompanyFotoExperinceIcon>

        <StyledCompanyFotoExperinced>
          Experienced psychologists{" "}
          <StyledCompanyFotoExperincedSpan>
            15,000
          </StyledCompanyFotoExperincedSpan>
        </StyledCompanyFotoExperinced>
      </StyledCompanyFotoExperincedWrapper>
    </StyledCompanyFotoDivWrapper>
  );
};

export default CompanyFoto;
