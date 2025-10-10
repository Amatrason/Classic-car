"use client"
import React, { useState } from "react";
import './header.css';

import Hamburger from "./hamburger/hamburger";
import Navigation from "./navigation/Navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <header>
            <Hamburger isOpen={isOpen} toggle={toggle} />
            <Navigation isOpen={isOpen} toggle={toggle} />

        </header>
    )
}