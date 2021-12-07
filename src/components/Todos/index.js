import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "./../Navbar";
import "./style.css";

const Todos = () => {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  const getTodos = async (token) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/todos`,
        {
          name: todo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    // getTodos(state.token);
    //
  };

  const updateTodo = async (id) => {
    try {
      const { value: updatedTodo } = await Swal.fire({
        title: "Updated Todo",
        input: "text",
        inputPlaceholder: "Input the new todo",
        showCancelButton: true,
        confirmButtonColor: "#006d77",
        reverseButtons: true,
      });

      if (updatedTodo) {
        await axios.put(
          `${process.env.REACT_APP_BASE_URL}/todos/${id}`,
          {
            name: updatedTodo,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // getTodos(state.token);
        //
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // getTodos(state.token);
      //
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar page="Todos" />
      <div className="wrapper">
        {!token ? (
          <h1>
            You are not logeddin yet, so <Link to="/login">login</Link> or{" "}
            <Link to="/signup">signup</Link>
          </h1>
        ) : (
          <div className="ItemsCon">
            <div>
              <input
                className="addInput"
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new todo"
              />
              <button className="add" onClick={addTodo}>
                ADD
              </button>
            </div>
            {todos.length ? (
              <ul className="list">
                {todos.map((todo) => (
                  <div key={todo._id} className="listItem">
                    <li>{todo.name}</li>
                    <div>
                      <button
                        className="update"
                        onClick={() => updateTodo(todo._id)}
                      >
                        Update
                      </button>
                      <button
                        className="delete"
                        onClick={() => deleteTodo(todo._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <h2>You don't have any todos yet!!</h2>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Todos;
