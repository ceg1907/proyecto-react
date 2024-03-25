import { CiUser } from 'react-icons/ci';
import '../../layout/header/Header.css';

export function UserWidget() {
  return (
    <div className='user-box'>
      <section>
        <CiUser size={'1.5rem'} />
      </section>
      <p>registrarse</p>
    </div>
  );
}
