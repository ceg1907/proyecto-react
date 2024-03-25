import { Link } from 'react-router-dom';
import { CartWidget } from '../../components/cartWidget/CartWidget';
import { UserWidget } from '../../components/userWidget/UserWidget';
import { Navbar } from '../navbar/Navbar';
import './Header.css';

export const Header = () => {
  return (
    <>
      <header className='box-header'>
        <div>
          <Link to='/' className='logo'>
            art store
          </Link>
        </div>
        <Navbar />
        <div className='widget-header'>
          <Link to='/cart'>
            <CartWidget />
          </Link>
          <UserWidget />
        </div>
      </header>
    </>
  );
};
