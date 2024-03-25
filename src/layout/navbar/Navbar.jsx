import { CiSearch } from 'react-icons/ci';
import './Navbar.css';
import { Link } from 'react-router-dom';
import BasicMenu from '../../components/popover/Popover';
import '@fontsource/cormorant-garamond';

export const Navbar = () => {
  return (
    <nav>
      <ul className='bar'>
        <Link to='/' className='item-bar'>
          <li className='li-navBar'>inicio</li>
        </Link>
        <Link to='/allProducts' className='item-bar'>
          <li className='li-navBar'>shop</li>
        </Link>
        <li className='li-navBar'>
          <BasicMenu />
        </li>
        <Link className='item-bar'>
          <li className='li-navBar'>contacto</li>
        </Link>
        <li className='buscador'>
          <CiSearch
            size={'1.5rem'}
            style={{
              display: 'flex',
              justifyItems: 'center',
            }}
          />
        </li>
      </ul>
    </nav>
  );
};
