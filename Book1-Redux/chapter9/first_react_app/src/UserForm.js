import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getDatabase, ref, push, get, update } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";

// class UserForm extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Any place in your app!</h1>
//         <Formik
//           initialValues={{ email: "", password: "" }}
//           validate={(values) => {
//             let errors = {};
//             if (!values.email) {
//               errors.email = "Required";
//             } else if (
//               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//             ) {
//               errors.email = "Invalid email address";
//             } else if (values.email.length < 10) {
//               errors.email = "Email address too short";
//             }
//             if (!values.password) {
//               errors.password = "Required";
//             } else if (values.password.length < 8) {
//               errors.password = "Password too short";
//             }
//             return errors;
//           }}
//           onSubmit={(values, { setSubmitting }) => {
//             setTimeout(() => {
//               alert(JSON.stringify(values, null, 2));
//               setSubmitting(false);
//             }, 400);
//           }}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               <Field type="email" name="email" placeholder="email" />
//               <span style={{ color: "red", fontWeight: "bold" }}>
//                 <ErrorMessage name="email" component="div" />
//               </span>

//               <Field type="password" name="password" placeholder="password" />
//               <span style={{ color: "red", fontWeight: "bold" }}>
//                 <ErrorMessage name="password" component="div" />
//               </span>
//               <button type="submit" disabled={isSubmitting}>
//                 Submit
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     );
//   }
// }

function UserForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // replaces this.props.match.params.id
  const title = id ? "Edit User" : "New User"; // replaces the if(this.id) logic

  const [initialValues, setInitialValues] = useState({
    username: "",
    email: "",
  });

  // replaces componentDidMount
  useEffect(() => {
    if (id) {
      const db = getDatabase();
      const dbRef = ref(db, "/" + id);

      get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
          setInitialValues({
            username: snapshot.val().username,
            email: snapshot.val().email,
          });
        }
      });
    }
  }, [id]);

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{ initialValues }}
        validate={(values) => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (values.email.length < 10) {
            errors.email = "Email address too short";
          }

          if (!values.username) {
            errors.username = "Required";
          } else if (values.username.length < 3) {
            errors.username = "username too short";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const db = getDatabase();

            if (id) {
              const dbRef = ref(db, "/" + id);
              update(dbRef, {
                username: values.username,
                email: values.email,
              }).then(() => {
                navigate("/");
                setSubmitting(false);
              });
            } else {
              const dbRef = ref(db, "/");
              push(dbRef, {
                username: values.username,
                email: values.email,
              }).then(() => {
                navigate("/");
                setSubmitting(false);
              });
            }
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1>{title}</h1>
            <Field type="email" name="email" placeholder="email" />
            <span style={{ color: "red", fontWeight: "bold" }}>
              <ErrorMessage name="email" component="div" />
            </span>
            <Field type="text" name="username" placeholder="username" />
            <span style={{ color: "red", fontWeight: "bold" }}>
              <ErrorMessage name="username" component="div" />
            </span>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserForm;

// Purpose
// A form component in React that allows users to create or edit user records stored in Firebase Realtime Database, using Formik for form handling.

// Core Functionality

// Uses useParams() from React Router to get the user id from the URL.

// Uses useState() to store form values.

// Uses useEffect() to fetch existing user data when editing.

// Form Handling

// Formik manages form state and validation.

// Validates:

// Email required, valid format, minimum length.

// Username required, minimum length of 3.

// Database Actions

// If id exists → updates an existing user (update).

// If id does not exist → creates a new user (push).

// Navigation
// After submission, useNavigate() redirects back to the home page.

// Output
// Displays a form for entering or editing a username and email, with validation messages and a submit button.
