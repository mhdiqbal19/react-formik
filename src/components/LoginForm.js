import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button } from "@chakra-ui/core";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="chakraInput"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="chakraInput"
              type="password"
              label="Password"
              name="password"
              mb={4}
            />

            <Button
              colorScheme="teal"
              variant="outline"
              size="md"
              type="submit"
              disabled={!formik.isValid}
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
