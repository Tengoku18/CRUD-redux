import React from "react";
import { Formik, Form, Field } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editUser } from "./reducers/formSlice";
import { useNavigate } from "react-router-dom";

const EditForm = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();

  const currentUser = users.filter((user) => user.id === params.id);
  const { name, email, skills } = currentUser[0];

  const [data, setData] = useState({
    id: uuidv4(),
    name,
    email,
    skills,
  });

  const handleEdit = () => {
    dispatch(
      editUser({
        id: params.id,
        name: data.name,
        email: data.email,
        skills: data.skills,
      })
    );
    navigate("/");
  };

  return (
    <div className=" flex justify-center items-center mt-5">
      <div className="w-1/2">
        <Formik
          initialValues={users}
          onSubmit={(values, action) => {
            console.log("current values", values);
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <div className="flex flex-col">
                {" "}
                <label className="mb-2 text-base text-gray-800 font-semibold ">
                  {" "}
                  Name{" "}
                </label>
                <Field
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
                  name="name "
                  type="text"
                  placeholder="John Doe"
                  className="  border-black h-10 rounded-sm pl-2 bg-gray-200 px-3 py-2  outline-none"
                />
              </div>
              <br />
              <div className="flex flex-col">
                {" "}
                <label className="mb-2 text-base text-gray-800 font-semibold ">
                  {" "}
                  E-mail
                </label>
                <Field
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
                  name="email "
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="  border-black h-10 rounded-sm pl-2 bg-gray-200 px-3 py-2  outline-none"
                />
              </div>
              <br />
              <div className="flex flex-col">
                {" "}
                <label className="mb-2 text-base text-gray-800 font-semibold ">
                  {" "}
                  Skills
                </label>
                <Field
                  onChange={(e) => setData({ ...data, skills: e.target.value })}
                  value={data.skills}
                  name="skills "
                  type="text"
                  placeholder="coding, teaching ,playing ..."
                  className="  border-black h-10 rounded-sm pl-2 bg-gray-200 px-3 py-2  outline-none"
                />
              </div>
              <br />

              <button
                type="submit"
                onClick={handleEdit}
                className="bg-indigo-600 px-3 py-2 font-semibold text-md text-white rounded-md mt-4 hover:bg-indigo-700"
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditForm;
