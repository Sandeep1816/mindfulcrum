import * as Yup from "yup"

export const appointmentSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
})