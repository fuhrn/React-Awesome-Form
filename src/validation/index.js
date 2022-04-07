// Opcion 1: Synchronous Validation Function
// export const validate = (values) => {
//   const errors = {};

//   if (!values.firstname) {
//     errors.firstname = "First name is required";
//   }

//   if (!values.surname) {
//     errors.surname = "Surname is required";
//   }

//   if (!values.username) {
//     errors.username = "Username is required";
//   } else if (values.username.length < 4) {
//     errors.username = "Username must be at least 4 characters long";
//   } else if (values.username.length > 10) {
//     errors.username = "Username is too long";
//   }

//   return errors;
// };


//Opcion 2 Synchronous Field level validation
export const required = (value) => (value ? undefined : "Value is required");

export const minLength = (value) =>
  value.length < 4 ? "Value must be at least 4 characters" : undefined;

export const maxLength = (value) =>
  value.length > 10 ? "Value is too long" : undefined;
