import { useState } from 'react'
import { BiLink} from 'react-icons/bi'
import Menu from '../../components/Menu'
import { FaLink} from 'react-icons/fa'
import './home.css'
import LinkItem from '../../components/LinkItem'
import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';
export default function Home(){
  const[link, setLink] = useState('');
  const[showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink(){
  try{
      const response = await api.post('/shorten',{ 
        long_url: link 
      })
      setData(response.data);
      setShowModal(true)
      saveLink('@encurtaLink', response.data)
      setLink('')

  }catch{
    alert("Ops parece que algo deu errado!")
    setLink('')
  }
}
    return(
    <div className="container-home">
      <div className="Logo">
        <FaLink size={120} color= "#FFF"/>
        <h1>Encurta Links!!!</h1>
        <span>Cole seu link aqui para encurta-lo !</span>
        </div>
        <div className='area-input'>
            <div>
                <BiLink size={24} color="#FFF"/>
                <input placeholder='Cole o seu link aqui...'
                value={link}
                onChange={ (e) => setLink(e.target.value)} />
            </div>

            <button onClick={handleShortLink}>Encurtar Link</button>
        </div>
        <Menu/>
        {showModal && (
        <LinkItem
        closeModal={ () => setShowModal(false)}
        content={data}
        /> 
        )}
      </div>
    )
  }