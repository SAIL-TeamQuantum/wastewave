import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Wlogo.svg';

const DashboardHeaderAST = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'HOME', path: '/DashboardAST' },
    { label: 'SCHEDULE WASTE', path: '/ScheduleAST' },
    { label: 'PAY BILLS', path: '/pay-bills' },
    { label: 'CONTACT US', path: '/contact-us' },
  ];

  return (
    <div className='flex-container header-container'>
      <img src={Logo} alt="logo" />
      {menuItems.map((item) => (
        <h2
          key={item.path}
          className={location.pathname === item.path ? 'active' : ''}
          onClick={() => navigate(item.path)}
          style={{ cursor: 'pointer' }}
        >
          {item.label}
        </h2>
      ))}
      <button className='header-button'>ACCOUNT</button>
    </div>
  );
};

export default DashboardHeaderAST;
