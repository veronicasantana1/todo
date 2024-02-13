import React from "react";
import styles from './Inputs.module.css'
import soma from '../imagens/soma.svg'
function Inputs(){
    return(
    <div className={styles.newtask}>
        <input 
          type="text"
         placeholder="Nova Tarefa..."
        />
        <img src={soma}/>
    </div>
   )
}

export default Inputs