import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { getUsersHelper, deleteUserHelper } from "./../../reducers/Dashboard";
import Navbar from "./../Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      token: state.Login.token,
      users: state.Dashboard.users,
    };
  });

  useEffect(() => {
    getUsers(state.token);
    // eslint-disable-next-line
  }, []);

  const getUsers = async (token) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getUsersHelper(res.data));
    } catch (error) {
      dispatch(getUsersHelper([]));
      console.log(error);
    }
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "#D11A2A",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#D11A2A",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}/users/${id}`, {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        });
        dispatch(deleteUserHelper(res.data.userId));
        Swal.fire({
          title: "Deleted!",
          text: "The user has been deleted",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#006d77",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#006d77",
        });
      }
    });
  };

  return (
    <>
      <Navbar page="Dashboard" />
      <div className="wrapper">
        {!state.token ? (
          <h1>
            You are not logeddin yet, so <Link to="/login">login</Link> or
            <Link to="/signup">signup</Link>
          </h1>
        ) : (
          <div className="ItemsCon">
            {state.users ? (
              <ul className="list">
                {state.users.map((user) => (
                  <div key={user._id} className="listItem">
                    <li>{user.email}</li>
                    <div>
                      <button
                        className="add"
                        onClick={() => navigate(`/users/${user._id}`)}
                      >
                        Show
                      </button>
                      <button
                        className="delete"
                        onClick={() => deleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <h2>There no users!!</h2>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
