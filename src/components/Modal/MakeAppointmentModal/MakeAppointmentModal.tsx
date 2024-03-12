import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import useModalHandler from "../../../hooks/useModalHandler";
import {
  StyledMakeContainerName,
  StyledMakeForm,
  StyledMakeFormButton,
  StyledMakeFormContainer,
  StyledMakeFormInput,
  StyledMakeFormTexterea,
  StyledMakeFoto,
  StyledMakeFotoName,
  StyledMakeFotoYour,
  StyledMakeName,
  StyledMakeText,
  StyledMakeTitle,
  StyledMakeWrapper,
} from "./MakeAppointmentModal.styled";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import SelectMeetingTime from "../../SelectMeetingTime/SelectMeetingTime.tsx";
import { schemaMakeAppointment } from "../../../helpers/validation.ts";

interface FormDataMakeAppointment {
  userName: string;
  email: string;
  userPhone: string;
  meetingTime: string;
  userComment: string;
}

const MakeAppointmentModal = () => {
  const { makeAppointmentPsychologist } = useModalHandler();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    // reset,
  } = useForm<FormDataMakeAppointment>({
    mode: "onTouched",
    resolver: yupResolver(schemaMakeAppointment),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <StyledMakeWrapper>
      <ButtonClose />
      <StyledMakeTitle>
        Make an appointment with a psychologists
      </StyledMakeTitle>
      <StyledMakeText>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </StyledMakeText>
      <StyledMakeFotoName>
        <StyledMakeFoto
          src={makeAppointmentPsychologist.avatar_url}
          alt={makeAppointmentPsychologist.name}
        />
        <StyledMakeContainerName>
          <StyledMakeFotoYour>Your psychologists</StyledMakeFotoYour>
          <StyledMakeName>{makeAppointmentPsychologist.name}</StyledMakeName>
        </StyledMakeContainerName>
      </StyledMakeFotoName>

      <StyledMakeForm onSubmit={onSubmit}>
        <StyledMakeFormInput
          type="text"
          placeholder="Name"
          {...register("userName")}
        />
        <p>{errors.userName?.message}</p>

        <StyledMakeFormContainer>
          <StyledMakeFormInput
            $props="tel"
            type="tel"
            placeholder="+380"
            {...register("userPhone")}
          />
          <p>{errors.userPhone?.message}</p>

          {/* <StyledMakeFormInput props="tel" type="text" /> */}

          <Controller
            name="meetingTime"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <SelectMeetingTime {...field} />}
          />
          <p>{errors.meetingTime?.message}</p>

          {/* <SelectMeetingTime /> */}
        </StyledMakeFormContainer>

        <StyledMakeFormInput
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <StyledMakeFormTexterea
          //   name="userComment"
          id=""
          //   cols={30}
          //   rows={80}
          placeholder="Comment"
          {...register("userComment")}
        ></StyledMakeFormTexterea>
        <p>{errors.userComment?.message}</p>

        <StyledMakeFormButton type="submit">Send</StyledMakeFormButton>
      </StyledMakeForm>
    </StyledMakeWrapper>
  );
};

export default MakeAppointmentModal;
