import styles from './Button.module.css'
import Router from 'next/router'
import axios from 'axios'

const serverURL = 'https://hcodelab-hamburgueria.herokuapp.com'

export default function Button(props) {
    
    const handleClik = async (e) => {

        switch (props.action) {

            case 'edit':
                Router.push(`/admin/contact/${props.id}`)
                break;
            case 'save':

                await  axios.put(`${serverURL}/admin/contato/${props.id}`, props.values)

                console.log('Salvando Alterações')
                break;
            case 'savePass':
                console.log('Alterando Senha')
                break;
            case 'changePhoto':
                console.log('Alterando a foto')
                break;

        }
    }

    if (props.action != "changePhoto"){
        return (
            <button className={styles.button} onClick={handleClik}>{props.children}</button>
        )
    } else {
        return (
            <input type='file' name='file' className={styles.button} />
        )
    }
    
}