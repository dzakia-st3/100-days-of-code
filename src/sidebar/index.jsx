import React from 'react';
import Modal from './modal';
import Sidebar from './sidebar';
import Home from './home';
import './style.css'

function SideBar() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default SideBar;