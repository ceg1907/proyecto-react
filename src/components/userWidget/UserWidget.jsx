import { CiUser } from 'react-icons/ci';
import './UserWidget.css';

export function UserWidget() {
  return (
    <div className='user-box'>
      <button className='user-button'>
        <CiUser size={'1.5rem'} />
        <span>registrarse</span>
      </button>
    </div>
  );
}
