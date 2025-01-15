import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const addSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().min(2, "Too Cheap!").required("Required"),
  image: Yup.string().url("Must be url").required("Required"),
});

export default function Add() {
  const navigate = useNavigate();
  return (
    <div className="px-16 py-80 flex justify-center items-center">
      <Helmet>
        <title>Add page</title>
        <meta
          name="description"
          content="Add page"
        />
      </Helmet>
      <Formik
        initialValues={{
          title: "",
          price: "",
          image: "",
        }}
        validationSchema={addSchema}
        onSubmit={(values) => {
          axios
            .post("http://localhost:5000/products", values)
            .then(() => navigate("/"));
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col w-full sm:w-6/12 items-center justify-center gap-5">
            <Field
              name="title"
              className="border rounded p-2 w-full border-blue-500 text-xl "
              placeholder="Title..."
            />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <Field
              name="price"
              className="border rounded p-2 w-full border-blue-500 text-xl"
              placeholder="Price..."
            />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <Field
              name="image"
              className="border rounded p-2 w-full border-blue-500 text-xl"
              placeholder="Image..."
            />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 transition p-2 w-48 text-white rounded"
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
