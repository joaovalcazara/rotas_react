import {Link} from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <header>
            <h2>Trabalhando com rotas</h2>

            <div className='menu'>
                <Link to="/">Home</Link> 
                <Link to="/sobre">Sobre</Link> 
                <Link to="/Contato">Contato</Link>  
            </div>
        </header>
    )
}

export default Header;