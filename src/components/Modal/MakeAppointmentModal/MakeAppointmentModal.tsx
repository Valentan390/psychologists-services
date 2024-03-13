import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import useModalHandler from "../../../hooks/useModalHandler";
import { toast } from "react-toastify";
import {
  StyledMakeContainerName,
  StyledMakeError,
  StyledMakeForm,
  StyledMakeFormButton,
  StyledMakeFormContainer,
  StyledMakeFormInput,
  StyledMakeFormTexterea,
  StyledMakeFoto,
  StyledMakeFotoName,
  StyledMakeFotoYour,
  StyledMakeLabel,
  StyledMakeName,
  StyledMakeText,
  StyledMakeTitle,
  StyledMakeWrapper,
} from "./MakeAppointmentModal.styled";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import SelectMeetingTime from "../../SelectMeetingTime/SelectMeetingTime.tsx";
import { schemaMakeAppointment } from "../../../helpers/validation.ts";
import { FormDataMakeAppointment } from "../../../helpers/InterfaceData.ts";

const MakeAppointmentModal = () => {
  const { makeAppointmentPsychologist, handleCloseModal } = useModalHandler();

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

  const onSubmit = handleSubmit((data) => {
    handleCloseModal();
    toast.success(
      `${data.userName} you have successfully made an appointment with the doctor for ${data.meetingTime}`
    );
  });

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
        <StyledMakeLabel>
          <StyledMakeFormInput
            $error={!!errors.userName}
            type="text"
            placeholder="Name"
            {...register("userName")}
          />
          <StyledMakeError>{errors.userName?.message}</StyledMakeError>
        </StyledMakeLabel>

        <StyledMakeFormContainer>
          <StyledMakeLabel $width="calc">
            <StyledMakeFormInput
              $props="tel"
              $error={!!errors.userPhone}
              type="tel"
              placeholder="+380"
              {...register("userPhone")}
            />
            <StyledMakeError>{errors.userPhone?.message}</StyledMakeError>
          </StyledMakeLabel>

          <Controller
            name="meetingTime"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <StyledMakeLabel $width="calc">
                <SelectMeetingTime {...field} $error={!!errors.meetingTime} />
                <StyledMakeError>{errors.meetingTime?.message}</StyledMakeError>
              </StyledMakeLabel>
            )}
          />
        </StyledMakeFormContainer>

        <StyledMakeLabel>
          <StyledMakeFormInput
            $error={!!errors.email}
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <StyledMakeError>{errors.email?.message}</StyledMakeError>
        </StyledMakeLabel>

        <StyledMakeLabel>
          <StyledMakeFormTexterea
            $error={!!errors.userComment}
            placeholder="Comment"
            {...register("userComment")}
          ></StyledMakeFormTexterea>
          <StyledMakeError>{errors.userComment?.message}</StyledMakeError>
        </StyledMakeLabel>

        <StyledMakeFormButton type="submit">Send</StyledMakeFormButton>
      </StyledMakeForm>
    </StyledMakeWrapper>
  );
};

export default MakeAppointmentModal;
