import React from "react";
import {
  UserCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../features/users/reducers/formSlice";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log("from card component", id);
    dispatch(deleteUser({ id }));
  };

  return (
    <div>
      <Link to="/add-user">
        <button
          type="submit"
          className="px-3 py-2 rounded-md bg-indigo-600 text-semibold text-white mb-5"
        >
          Add user{" "}
        </button>
      </Link>

      <div>
        {users.length > 0 ? (
          <div className="grid  grid-flow-row grid-cols-3 gap-y-3 px-5">
            {" "}
            {users.map((user) => (
              <div
                key={user.id}
                className="flex flex-col w-96 bg-gray-200  px-3 py-5 rounded-md "
              >
                <div className="flex mb-5 ">
                  <UserCircleIcon className="h-12 w-12 mt-2 mr-1" />
                  <div className="flex flex-col pt-1">
                    <span>
                      <h1 className="text-2xl font-bold text-gray-750 font-mono ">
                        {" "}
                        {user.name}
                      </h1>
                    </span>
                    <span>
                      <h3 className="text-gray-600 text-xs font-semibold  ">
                        {user.email}
                      </h3>
                    </span>
                  </div>
                </div>
                <div>
                  <p className="pl-5 font-bold font-mono">{user.skills}</p>
                </div>
                <div className="w-full mt-2">
                  <div className="float-right mr-5 flex flex-row">
                    <Link to={`edit-user/${user.id} `}>
                      <button
                        type="submit"
                        className="font-mono flex bg-indigo-600 px-5 py-2 text-white font-semibold rounded-md mr-2 hover:bg-indigo-700 "
                      >
                        <PencilIcon className="h-3.5 w-4.5 mt-1.5 mr-1.5" />
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      type="submit"
                      className="font-mono flex bg-red-600 px-5 py-2 text-white font-semibold rounded-md hover:bg-red-700"
                    >
                      <TrashIcon className="h-4 w-4 mr-1 mt-1" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
        ) : (
          <div>
            {" "}
            <h3 className="font-bold text-center text-xl font-sans">
              No Users
            </h3>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
