import React from "react";
import "../static/Form1.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("enter your name"),
  password: yup.number().required("password must 5 letters").min(5),
});
export default function Form1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="App">
      <h1> react-form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>
            <label>username</label>
          </p>
          <p>
            <input
              className="input"
              name="username"
              type="text"
              {...register("username", { required: true })}
            />
          </p>
          <p className="messages"> {errors.username?.message} </p>
        </div>
        <div>
          <p>
            <label>password</label>
          </p>
          <p>
            <input
              className="input"
              name="password"
              type="password"
              {...register("password", { required: true })}
            />
          </p>
          <p className="messages"> {errors.password?.message} </p>
        </div>
        <button className="btn">submit</button>
      </form>
    </div>
  );
}
