import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import type { Login } from '../types/login';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
});

const Login: React.FC = () => {
  const initialValues: Login = {
    email: '',
    password: '',
  };

  const onSubmit = (values: Login) => {
    console.log('Login submitted:', values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: '300px', margin: '0 auto' }}>
      <h2>Login</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">Email</label><br />
        <input
          id="email"
          type="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="password">Password</label><br />
        <input
          id="password"
          type="password"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
