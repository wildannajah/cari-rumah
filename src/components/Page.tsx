import { Helmet } from 'react-helmet-async';
import { forwardRef, ReactNode } from 'react';
// @mui
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}
const Page = forwardRef<HTMLDivElement, Props>(
  ({ children, title = '', meta, ...other }, ref) => (
    <>
      <Helmet>
        <title>{`${title} | Wildan`}</title>
        {meta}
      </Helmet>

      <Box ref={ref} {...other} sx={{ minHeight: '100vh' }}>
        {children}
      </Box>
    </>
  )
);

export default Page;
