import React,  {useState} from "react";
import './Header.css'


const Header = () =>{
const [clicado,setClicado] = useState(false);

const Click = () =>{
setClicado(true)
}

    return(
        <div className='Header'>
        <p>Organização</p>
        <div className={`Task ${clicado ? 'clicado' : ''}`} onClick={Click}>
        <p className={`Text ${clicado ? 'clicado' : ''}`} onClick={Click}>Tarefas</p>
        </div>
        </div>
    )
}

export default Header