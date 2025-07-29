import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography, Paper, Divider, IconButton } from '@mui/material';
import type { Login } from '../types/login';
import { GoogleLogin } from '@react-oauth/google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


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

  const handleGoogleLoginSuccess = (response: any) => {
    console.log('Google success:', response);
  };

  const handleGoogleLoginError = () => {
    console.error('Google login failed');
  };

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
        <Divider sx={{ my: 3 }}>or</Divider>
        <Box display="flex" justifyContent="center" gap={2}>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
            useOneTap={false}
          />
          <IconButton aria-label="facebook login" color="primary" disabled>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="twitter login" color="primary" disabled>
            <TwitterIcon />
          </IconButton>
        </Box>
      </form>
    </Paper>
  );
};

export default LoginForm;
