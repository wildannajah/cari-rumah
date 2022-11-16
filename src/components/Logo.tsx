// import Iconify from '../../components/Iconify';
import { useLocation, useNavigate } from 'react-router-dom';
import Image from './Image';
import useResponsive from '../hooks/useResponsive';

export default function Logo() {
  // const logo =
  const isMobile = useResponsive('down', 'sm');
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const navigate = useNavigate();
  const handleClickLogo = () => navigate('/');
  return isHome ? (
    <Image
      src="assets/images/logo-light.png"
      sx={{ width: isMobile ? 250 : 300, margin: 'auto', cursor: 'pointer' }}
      onClick={handleClickLogo}
    />
  ) : (
    <Image
      src="../assets/images/logo-dark.png"
      sx={{ width: isMobile ? 200 : 200, cursor: 'pointer' }}
      onClick={handleClickLogo}
    />
  );
}
