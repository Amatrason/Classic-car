"use client"
import Navigation from "./navigation/Navigation";
import Hamburger from "./hamburger/Hamburger";
import { useState } from "react";
import './header.css'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="header">

            <Hamburger toggle={toggle} />
            <Navigation isOpen={isOpen} toggle={toggle} />
        </header>
    )
}