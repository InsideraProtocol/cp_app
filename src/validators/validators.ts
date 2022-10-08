import * as Yup from 'yup';

export const validator = {
  email: (required = true) =>
    required
      ? Yup.string()
          .email('form.errors.invalidEmail')
          .required('form.errors.required')
      : Yup.string().email('form.errors.invalidEmail'),
  accessCode: () => Yup.string().required('form.errors.required'),
  string: (
    required: boolean = false,
    message: string = 'form.errors.required',
  ) => (required ? Yup.string().required(message) : Yup.string()),
  stringMaxLength: (maxLength: number) =>
    Yup.string().max(maxLength).required('form.errors.required'),
  true: (message: string) => Yup.bool().oneOf([true], message),
  date: () => Yup.date().required('form.error.required'),
  match: (field: string) =>
    Yup.string()
      .oneOf([Yup.ref(field), null], 'form.errors.match')
      .required('form.errors.required'),
  strength: () =>
    Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, 'form.errors.strength')
      .required('form.errors.required'),
};
