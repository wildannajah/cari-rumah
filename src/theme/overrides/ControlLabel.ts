import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function ControlLabel(theme: Theme) {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          ...theme.typography.body2,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(1),
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          paddingLeft: '20px',
          color: theme.palette.text.disabled,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        shrink: {
          paddingLeft: '0',
        },
      },
    },
  };
}
