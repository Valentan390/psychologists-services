import * as yup from "yup";

const emailRegexp = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

const phoneRegexp = /^\d{3}-\d{3}-\d{2}-\d{2}$/;

export const schemaSignup = yup.object().shape({
  username: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  password: yup
    .string()
    .required("Field is required")
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters"),
});

export const schemaSignin = yup.object().shape({
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  password: yup
    .string()
    .required("Field is required")
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters"),
});

export const schemaMakeAppointment = yup.object().shape({
  userName: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  userPhone: yup
    .string()
    .required("Field is required")
    .matches(phoneRegexp, "Enter a correct phone"),
  meetingTime: yup.string().required("Field is required"),
  userComment: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(128, "Maximum 128 characters"),
});
