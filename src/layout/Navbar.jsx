import React from 'react'
import { CiSearch } from "react-icons/ci";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
      <ul className='bar'>
        <li>inicio</li>
        <li>fotografias</li>
        <li>contacto</li>
        <li className='buscador'>
          <CiSearch />
        </li>
      </ul>
    </nav>
  )
}