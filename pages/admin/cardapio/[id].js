import { useRouter } from 'next/router'
import HeaderTitle from '../../../components/admin/HeaderTitle'
import Card from '../../../components/admin/Card'
import styles from '../../../components/admin/UserEdit.module.css'
import Button from '../../../components/admin/ButtonCardapio'
import Layout from '../../../components/admin/Layout'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import {useState} from 'react'

const cookies = new Cookies()
const token = cookies.get('token')
const config = {

    header: {Authorization: `Bearer ${token}`}
}

const serverURL = 'https://hcodelab-hamburgueria.herokuapp.com'

export default function Users(props) {

   

    const [values, setValues] = useState({name: props.user.name, description: props.user.description, price: props.user.price, 
                                          photo: props.user.photo
                                        })
    
    let [nameInput, setNameInput] = useState('')                                        
    let [newPassInput, setNewPassInput] = useState('')
    let [newPassword, setNewPassword] = useState('')
    let [confirPassword, setConfirmPassword] = useState('')
    let [photo, setPhoto] = useState('')

    const handleInputBlur = e => {

        const {name, value} = e.target
        setValues({...values, [name]:value})
        
        console.log(name, value)
    }

    const currentPass = async e => {
        e.preventDefault()
        let pass = e.target.value
        const values = { email: props.user.email, password: pass}
        let passValid = false
        let error = ""
        await axios.post(`${serverURL}/auths`, values)
        .then(
            res => passValid = true
        ).catch (
            err => {
                passValid = false
                error = err.message
            }
        )

        if (!passValid) {
            console.log("Senhas atual incorreta!")
            console.log(error)
            nameInput.focus()
            return
        }
    }

    const newPass = e => {
        newPassword = e.target.value
        console.log("newPassword: ",newPassword)
    }

    const confirmPass = e => {
        setConfirmPassword = e.target.value
        if (setConfirmPassword != newPassword) {
            alert('Senhas não conferem!')
            newPassInput.focus()
        }

        console.log("newpassword: ", newPassword)
        console.log("ConfirmPassword", setConfirmPassword)
    }

    return (
        <Layout>
                
            <HeaderTitle text="Editar Cardápio" /> {/* Esse código poderá ser adicionado depois, se desejar */}

            <section className={styles.cards}>

                <Card actions={<Button id={props.id} action="save" values={values}>Salvar</Button>} className={styles.card}>

                    <div className={styles.header}>

                        <h2>Cardápio</h2>

                        <button className="button-reset">
                            <svg id="Grupo_112" data-name="Grupo 112" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <g id="more_vert-black-18dp" transform="translate(4.017 4.05)">
                                    <path id="Caminho_236" data-name="Caminho 236" d="M0,0H24V24H0Z" fill="none"/>
                                    <path id="Caminho_237" data-name="Caminho 237" d="M12,8a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,8Zm0,2a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,16Z" fill="#666"/>
                                </g>
                                <rect id="Retângulo_73" data-name="Retângulo 73" width="32" height="32" fill="none"/>
                            </svg>
                        </button>

                    </div>
                    
                    <form className={`${styles['form-user-data']} ${styles.form}`}>

                        <input type="text" placeholder="Titulo" defaultValue={values.name} name="name" onBlur={handleInputBlur}/>

                        <input type="email" placeholder="Descrição" defaultValue={values.description} name="description" onBlur={handleInputBlur}/>

                        <input type="text" placeholder="Preço" defaultValue={values.price} name="price" onBlur={handleInputBlur}/>

                    </form>

                </Card>


                <Card actions={<Button>Escolher Foto</Button>}>

                    <div className={styles.header}>

                        <h2>Avatar</h2>

                    </div>

                    <img src="assets/images/user-photo.png" className={styles.avatar} />

                </Card>

            </section>

        </Layout>
    )

}

//Carregando info sobre o usuário
Users.getInitialProps = async ({query}) => {

    const {id} = query
    let user = []
    user = await axios.get(`${serverURL}/admin/cardapio/${id}`, config)
    return {
        "user": user.data,
        "id": id
    }

}
