import React from 'react'
import { CiUser } from "react-icons/ci";
import './UserWidget.css'

export default function UserWitget() {
  return (
    <div className='user-box'>
        <button>
            <CiUser size={'1.5rem'}/>
          <span>registrarse</span>
        </button>
    </div>
  )
}
