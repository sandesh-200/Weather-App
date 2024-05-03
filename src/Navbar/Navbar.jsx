import React from 'react';
import { CgCodeClimate } from "react-icons/cg";
import './Navbar.css';
const Navbar = () => {
  return (
    <>
    <nav>
        <div className="logo p-3 text-2xl font-bold font-myfont1 flex text-white justify-center">
        <CgCodeClimate />ClimaView<CgCodeClimate />
        </div>
    </nav>
    </>
  )
}

export default Navbar
