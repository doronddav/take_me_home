import { Link } from 'react-router-dom';
import classes from './navbar.module.css'
import { useState } from 'react';


const NavBar = () => {
    const [isAdopt, setIsAdopt] = useState(false);
   const handleClickRout = () => {
    setIsAdopt((prevIsAdopt) => !prevIsAdopt);
    console.log('work', isAdopt);
  };
 return (
 <nav className={classes.navContaiber}>
    <section className={`${classes.routContainer} ${isAdopt ? classes.active : ''}`}>

       
             <Link to="/adopt" className={`${classes.adopt} ${classes.links}`} onClick={handleClickRout} >אימוץ</Link>
        
    </section>
    <div className={classes.logoContainer}>

         <Link  to="/">LOGO</Link>
    </div>
        <section className={`${classes.routContainer} ${isAdopt ? '' : classes.active}`}>

    

             <Link to="/custody" className={`${classes.custody} ${classes.links}`}  onClick={handleClickRout} >אומנה</Link>
        
         </section>
       
 </nav>
 );
};

export default NavBar;