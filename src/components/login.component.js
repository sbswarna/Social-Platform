import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Input from "./common/input.component";
import loginSchema from "../schema/login.schema";

const Login = (props) => {
    return (
        <div className="d-flex flex-wrap justify-content-center mt-5">
            <div className="card" style={{ width: " 25rem ", height: "auto" }}>
                <div className="card-body">
                <h5 className="d-flex flex-wrap justify-content-center">Login Form</h5>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            rememberCheckbox: false,
                        }}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            actions.setSubmitting(false);
                        }}
                        validationSchema={loginSchema}
                    >
                        {(formikprops) => {
                            return (
                                <Form onSubmit={formikprops.handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            Email Address
                                        </label>
                                        <Field
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                        />
                                        <div className="invalid-feedback d-block">
                                            <ErrorMessage name="email" />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="password"
                                            className="form-label"
                                        >
                                            Password
                                        </label>
                                        <Field
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                        />
                                        <div className="invalid-feedback d-block">
                                            <ErrorMessage name="password" />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3 form-check">
                                        <label
                                            className="form-check-label"
                                            htmlFor="rememberCheckbox"
                                        >
                                            Remember User?
                                        </label>
                                        <Field
                                            type="checkbox"
                                            className="form-check-input"
                                            id="rememberCheckbox"
                                            name="rememberCheckbox"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Login
                                    </button>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;
