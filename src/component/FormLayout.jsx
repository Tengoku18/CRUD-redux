import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/users/reducers/formSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const FormLayout = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = Yup.object({
    name: Yup.string().required("Requied"),
    email: Yup.string().email("Invalid Email").required("Required"),
    skills: Yup.string().required("Required"),
  });

  return (
    <div className=" flex justify-center items-center mt-5">
      <div className=" w-1/2 ">
        <Formik
          initialValues={{ name: "", email: "", skills: "" }}
          onSubmit={(values, actions) => {
            console.log(values);

            console.log(users);

            dispatch(
              addUser({
                id: uuidv4(),
                name: values.name,
                email: values.email,
                skills: values.skills,
              })
            );
            navigate("/");
          }}
          validationSchema={validate}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <div className="flex flex-col">
                <label className="mb-2 text-base text-gray-800 font-semibold ">
                  {" "}
                  Name{" "}
                </label>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                  className="  border-black h-10 rounded-sm pl-2 bg-gray-200 px-3 py-2  outline-none"
                />
                <ErrorMessage name="name" />
              </div>
              <br />

              <div className="flex flex-col">
                <label className="mb-2 text-base text-gray-800 font-semibold ">
                  {" "}
                  E-mail
                </label>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  name="email"
                  className="  border-black h-10 rounded-sm pl-2 bg-gray-200 px-3 py-2  outline-none"
                />
                <ErrorMessage name="email" />
              </div>
              <br />

              <div className="flex flex-col">
                <label className="mb-2 text-base text-gray-800 font-semibold ">
                  {" "}
                  Skills
                </label>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.skills}
                  name="skills"
                  className="  border-black h-10 rounded-sm pl-2 bg-gray-200 px-3 py-2  outline-none"
                />
                <ErrorMessage name="skills" />
              </div>

              <button
                type="submit"
                className="bg-indigo-600 px-3 py-2 font-semibold text-md text-white rounded-md mt-4 hover:bg-indigo-700"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormLayout;
