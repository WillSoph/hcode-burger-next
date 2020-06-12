import React, { useState } from "react"
import ModalStyles from "./ModalStyles.module.css"

import Link from 'next/link'
import axios from 'axios'
import { Cookies } from 'react-cookie'

const Modal = ({ id = "modal", onClose = () => { }, Children }) => {


  const closeblack = (e) => {
    if (e.target.id === id) onClose()
  }

  const [values, setValues] = useState({ email: '', password: '' })
  const cookies = new Cookies();

  let [token, setToken] = useState(cookies.get('token') || null)


  const handleImputChange = e => {
    const { name, value } = e.target

    setValues({ ...values, [name]: value })
    console.log(name, value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    // axios.post('https://localhost:3333/auths', values).then( (res) => {
    axios.post('https://hcodelab-hamburgueria.herokuapp.com/auths', values).then((res) => {

      const tokenData = res.data.token
      cookies.set('token', tokenData)
      alert('Usuário Autorizado')
      window.location.href = ('/admin')

    }).catch(err => console.log("Erro de Acesso", err))

    //alert(`Erro de Acesso: ${err}`)
  }


  return <div id="modal" className={ModalStyles.modal} onClick={closeblack}>
    <div className="container1">
      <div className={ModalStyles.content}>{
        <form onSubmit={handleFormSubmit} className={ModalStyles.form}>
          {/* <button className={ModalStyles.close} onClick={onClose}><img srcSet="assets/images/cancel.png" /></button> */}
          <div className={ModalStyles.imgcontainer}>
            <img className={ModalStyles.avatar} srcSet="assets/images/lock.png" alt="Avatar" />
          </div>

          <div className={ModalStyles.container}>
            <label for="uname"><b>Nome do Usuario</b></label>
            <input className={ModalStyles.input} type="text" onChange={handleImputChange} onFocus={handleImputChange} placeholder="Nome de Usuario" name="email" required />

            <label for="psw"><b>Senha</b></label>
            <input className={ModalStyles.input} type="password" onChange={handleImputChange} onFocus={handleImputChange} placeholder="Digite a sua senha" name="password" required />

            <button className={ModalStyles.button} type="submit">Conecte-se</button>

          </div>

          <div className={ModalStyles.container}> <style jsx>{`background-color:#f1f1f1`} </style>
            <button className={ModalStyles.cancelbtn} type="button" onClick={onClose}>Cancelar</button>
            <span className={ModalStyles.psw}>Esqueceu a<a href="#"> Senha?</a></span>
          </div>
        </form>
      }</div>
    </div>
  </div>

}

export default Modal;