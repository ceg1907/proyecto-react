import { CiSearch } from 'react-icons/ci';
import './Navbar.css';
import { Link } from 'react-router-dom';
import BasicMenu from '../../components/popover/Popover';

export const Navbar = () => {
  return (
    <nav>
      <ul className='bar'>
        <Link to='/' className='item-bar'>
          <li>inicio</li>
        </Link>
        <Link to='/allProducts' className='item-bar'>
          <li>shop</li>
        </Link>
        <li>
          <BasicMenu />
        </li>
        <Link className='item-bar'>
          <li>contacto</li>
        </Link>
        <li className='buscador'>
          <CiSearch size={'1.3rem'} style={{ justifyItems: 'center' }} />
        </li>
      </ul>
    </nav>
  );
};
