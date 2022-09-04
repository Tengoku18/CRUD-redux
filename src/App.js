import { Routes, Route } from "react-router-dom";
import UserList from "./component/UserList";
import FormLayout from "./component/FormLayout";
import EditForm from "./features/users/EditForm";
// import NewFrorm from "./component/NewFrorm";
// import Sau from "./component/Sau";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-7xl pt-10 md-pt-32">
      <h1 className="text-center font-bold text-2xl  text-gray-700">
        {" "}
        CRUD Operation with Redux Toolkit
      </h1>

      <Routes>
        {/* <Route path="/" element={<Card />} /> */}
        <Route path="/" element={<UserList />} />

        <Route path="/add-user" element={<FormLayout />} />

        {/* <Route path="/add-user" element={<Adduser />} /> */}
        <Route path="/edit-user/:id" element={<EditForm />} />
        {/* <Route path="/edit-user/:id" element={<EditUser />} /> */}
      </Routes>
    </div>
  );
}

export default App;
