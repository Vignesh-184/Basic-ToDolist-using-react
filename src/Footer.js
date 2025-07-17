import React from "react";
import './App.css';
function Footer({length}) {
    return (
        <footer>{length} {length === 1 ? 'item' :'items'}</footer>
    ); 
}

export default Footer;