import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/image/logotopntech.png"
export default function navbar() {
  
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top" id='nav' style={{background:'white', padding:'15px 0'}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} alt="" style={{width:'150px'}}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#home">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#chef">DAILY SPACIALS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#about">ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#menu">OUR MENU</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#contact">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
