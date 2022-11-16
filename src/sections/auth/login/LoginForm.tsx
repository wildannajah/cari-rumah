import * as Yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Link } from 'react-router-dom';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import FormProvider from '../../../components/hook-form/FormProvider';
import { RHFTextField } from '../../../components/hook-form';
import Iconify from '../../../components/Iconify';

type FormValuesProps = {
  email: string;
  password: string;
  afterSubmit?: string;
};

export default function LoginForm() {
  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
      // await login(data.email, data.password);
    } catch (error: any) {
      console.error(error);

      reset();

      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <RHFTextField name="email" label="Email Address" />
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify icon={showPassword ? 'bx:show' : 'bx:hide'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Sign In
        </LoadingButton>
        <Divider>Or</Divider>
        <Button variant="outlined" size="large" color="inherit">
          <Stack direction="row" spacing={1} alignItems="center">
            <img
              src="../assets/images/google.png"
              width="19px"
              height="19px"
              alt=""
            />
            <Typography variant="body1">Sign up with Google</Typography>
          </Stack>
        </Button>
        <Button variant="outlined" size="large" color="inherit">
          <Stack direction="row" spacing={1} alignItems="center">
            <img
              src="../assets/images/apple.png"
              width="19px"
              height="19px"
              alt=""
            />
            <Typography variant="body1">Sign up with Apple</Typography>
          </Stack>
        </Button>
        <Stack
          direction="row"
          spacing={1}
          display="flex"
          justifyContent="center"
        >
          <Typography>Don't have an account?</Typography>
          <Link to="/auth/register">
            <Typography
              variant="subtitle1"
              sx={{
                color: 'text.primary',
              }}
            >
              Register
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
