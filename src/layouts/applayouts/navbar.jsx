import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  
    return (
        <>
            <nav class="navbar navbar-expand-lg" id='nav'>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/">HOME</Link>
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
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}
