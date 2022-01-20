import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "react-bootstrap";
const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Z]+$/i, "must be only letters")
    .required("Must be atleast 6 characters"),
  lastName: yup
    .string()
    .matches(/^[A-Z]+$/i, "must be only letters")
    .required("letters only"),
  phoneNumber: yup
    .string()
    .matches(/[569]\d{7}$/g, "phone number should be valid Kuwaity number")
    .required("should be numbers"),
  email: yup.string().email("Invalid email format").required("Invalid email"),
  civilId: yup
    .string()
    .test("len", "Civil ID should be 12 numbers", (val) => val.length === 12)
    .required("Invalid civil ID"),
  grade: yup
    .number()
    .min(0)
    .max(100)
    .typeError("grade should be between 0 and 100")
    .required("Invalid grade"),
});
function UniversityForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = () => {
    console.log("hello world");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            First name: &nbsp;
            <input
              {...register("firstName")}
              type="text"
              placeholder="first name"
            />
            <p className="error">{errors.firstName?.message}</p>
          </label>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Last Name: &nbsp;
            <input
              {...register("lastName")}
              type="text"
              placeholder="last name"
            />
            <p className="error">{errors.lastName?.message}</p>
          </label>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Phone Number: &nbsp;
            <input
              {...register("phoneNumber")}
              type="text"
              placeholder="phone number"
            />
            <p className="error">{errors.phoneNumber?.message}</p>
          </label>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address: &nbsp;
            <input {...register("email")} type="text" placeholder="email" />
            <p className="error">{errors.email?.message}</p>
          </label>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Civil ID: &nbsp;
            <input
              {...register("civilId")}
              type="text"
              placeholder="civil id"
            />
            <p className="error">{errors.civilId?.message}</p>
          </label>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            High School Grade: &nbsp;
            <input
              {...register("grade")}
              type="text"
              placeholder="high school grade"
            />
            <p className="error">{errors.grade?.message}</p>
          </label>
        </div>

        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </Form>
    </div>
  );
}

export default UniversityForm;
