import React from "react"
import ModalStyles from "./ModalStyles.module.css"


const Modal = ({ id = "modal", onClose = () => { }, Children }) => {


  const closeblack = (e) => {
    if (e.target.id === id) onClose()
  }

  return <div id="modal" className={ModalStyles.modal} onClick={closeblack}>
    <div className="container1">
      <div className={ModalStyles.content}>{
        <form action="" method="post" className={ModalStyles.form}>
          <button className={ModalStyles.close} onClick={onClose}><img srcSet="download.png" /></button>
          <div className={ModalStyles.imgcontainer}>
            <img className={ModalStyles.avatar} srcSet="login.png" alt="Avatar" />
          </div>

          <div className={ModalStyles.container}>
            <label for="uname"><b>Nome do Usuario</b></label>
            <input className={ModalStyles.input} type="text" placeholder="Nome de Usuario" name="name" required />

            <label for="psw"><b>Senha</b></label>
            <input className={ModalStyles.input} type="password" placeholder="Digite a sua senha" name="password" required />

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