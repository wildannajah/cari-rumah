import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Switch(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
        },
        thumb: {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
          boxShadow: theme.customShadows.z1,
        },
        track: {
          borderRadius: 26 / 2,
          opacity: 1,
          backgroundColor: theme.palette.grey[500],
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
        switchBase: {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: isLight ? '#65C466' : '#2ECA45',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          left: 0,
          right: 'auto',
          '&:not(:.Mui-checked)': {
            color: theme.palette.grey[isLight ? 100 : 300],
          },
          '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
            color: theme.palette.grey[isLight ? 400 : 600],
          },
          '&.Mui-disabled+.MuiSwitch-track': {
            opacity: 1,
            backgroundColor: `${theme.palette.action.disabledBackground} !important`,
          },
        },
      },
    },
  };
}
