import './menu.css';
import {BsYoutube, BsInstagram} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href="https://www.youtube.com/channel/UC1BaD5l6jTFr_HH_yRO6-2g">
                <BsYoutube color='#FFF' size={24} />
            </a>
            <a className='social' href="https://www.instagram.com/rafa_perez_educ/">
                <BsInstagram color='#FFF' size={24} />
            </a>
            <Link className='menu-item' to="/links">
                Meus Links
            </Link>
        </div>
    )
}