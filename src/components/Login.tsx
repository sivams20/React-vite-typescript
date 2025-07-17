import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import type { Login } from '../types/login';


const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
});

const LoginForm: React.FC = () => {
  const initialValues: Login = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });

  return (
    <Paper elevation={3} sx={{ p: 10, maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>

      <form onSubmit={formik.handleSubmit} noValidate>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Box mt={2}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Login
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default LoginForm;
