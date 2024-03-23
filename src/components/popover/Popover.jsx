import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import '../../layout/navbar/Navbar.css';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='box-collapse'>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='text'
        size='small'
        style={{
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          fontWeight: 'normal',
          textTransform: 'capitalize',
        }}
        color='inherit'>
        Categorias
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <Link to='/category/portraits'>
          <MenuItem onClick={handleClose}>Portraits</MenuItem>
        </Link>
        <Link to='/category/oil painting on glass'>
          <MenuItem onClick={handleClose}>oil painting on glass</MenuItem>
        </Link>
        <Link to='/category/details'>
          <MenuItem onClick={handleClose}>details</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
