import {
    Routes,
    Route,
  } from "react-router-dom";
import App from "./App";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import ManageUser from "./components/Admin/Content/ManageUser";
import DashBoard from "./components/Admin/Content/DashBoard";
import Login from "./components/Auth/Login"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/Auth/Register";
import ListQuiz from "./components/User/ListQuiz";
import DetailQuiz from "./components/User/DetailQuiz";
import ManageQuiz from "./components/Admin/Content/Quiz/ManageQuiz";
import Questions from "./components/Admin/Content/Question/Questions";
import PrivateRoute from "./routes/PrivateRoute";
import react, { Suspense } from "react";

const NotFound = () => {
    return (
        <div class="container mt-3 alert alert-danger">
            404.Not Found Data with your current URL
        </div>
    )
}

const layout = (props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<App />}> 
                    <Route index element={<HomePage />}/>
                    <Route path="users" element={
                        <PrivateRoute >
                            <ListQuiz />
                        </PrivateRoute>
                    }/>
                </Route>
                <Route path="/quiz/:id" element={<DetailQuiz />}/>

                <Route path="/admins" element={
                    <PrivateRoute >
                        <Admin />
                    </PrivateRoute >
                }>
                    <Route index element={<DashBoard />}/>
                    <Route path="manage-users" element={<ManageUser />}/>
                    <Route path="manage-quizzes" element={<ManageQuiz />}/>
                    <Route path="manage-questions" element={<Questions />}/>
                </Route>

                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Suspense>
    )
}

export default layout;