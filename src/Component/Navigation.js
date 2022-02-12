import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom';


export default function Navigation() {
  return <div className='nav text-uppercase'>
        <Link to="/" className='nav-link active' > Accueil </Link>
        <Link to="/addmovies" className='nav-link active' > Ajouter un Film </Link>
    </div>;
}
