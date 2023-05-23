import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import { postRobot } from "../api/requests";
import { Validation } from "../Validation/Schema";

const Add = () => {
  
  const navigate = useNavigate();
  const [robots, setRobots] = useState();
  const handleSubmit = async (values, actions) => {
    await postRobot(values);
    setRobots([...robots, values]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${values.title} posted successfully!`,
      showConfirmButton: false,
      timer: 1500,
    });

    actions.resetForm();

    navigate("/");
    // add olur home page a amma reset olumur !
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },
    validationSchema: Validation,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div
        style={{ padding: "10%", display: "flex", justifyContent: "center" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="enter image url"
            type="text"
            name="image"
            style={{ display: "block", width: "500px", marginBottom: "6%" }}
          />
          {formik.errors.image && formik.touched.image && (
            <span style={{ color: "red" }}>{formik.errors.image}</span>
          )}
          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="enter title"
            type="text"
            name="title"
            style={{ display: "block", width: "500px", marginBottom: "6%" }}
          />
          {formik.errors.title && formik.touched.title && (
            <span style={{ color: "red" }}>{formik.errors.title}</span>
          )}
          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
            placeholder="enter desc"
            type="text"
            name="desc"
            style={{ display: "block", width: "500px", marginBottom: "6%" }}
          />
          {formik.errors.desc && formik.touched.desc && (
            <span style={{ color: "red" }}>{formik.errors.desc}</span>
          )}

          <Button
            variant="contained"
            color="success"
            style={{ marginTop: "20px" }}
            disabled={Object.keys(formik.errors).length !== 0 ? true : false}
            type="submit"
          >
            Add
          </Button>
        </form>
      </div>
    </>
  );
};

export default Add;
