'use client'

import {useState} from 'react'
import './CardUser.css'
import Modal from '../utils/Modal'

const CardUser = ({paciente, pacientes, setPacientes}) => {

  const [showCard, setShowCard] = useState(true)
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
  const [nome, setNome] = useState(paciente.nome)
  const [email, setEmail] = useState(paciente.email)
  const [telefone, setTelefone] = useState(paciente.telefone)

  const handleDelete = async (idPaciente) => {
    const objPaciente = {
      id: idPaciente
    }
    const response = await fetch('http://localhost:3300/paciente',
      {
        cache: 'no-store',
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objPaciente) //tranforma um objeto em uma string json
      }
    )
    if(response.ok){
      const result = await response.json()
      if(result?.success){
        setShowCard(false)
      }
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newPaciente = {
      id: event.target.id.value,
      nome: event.target.nome.value,
      email: event.target.email.value,
      data_nasc: event.target.data_nasc.value,
      telefone: event.target.phone.value,
      sexo: event.target.sexo.value,
      cpf: event.target.cpf.value
    }
    const response = await fetch('http://localhost:3300/paciente',
    {
      cache: 'no-store',
      method: 'PUT',
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(newPaciente) //tranforma um objeto em uma string json
    }
    )
    if(response.ok){
      const result = await response.json()
      if(result?.success){
          // editar um usuário do array users
          const pacientesEdited = pacientes.map((paciente) => {
            if(paciente.id == newPaciente.id){
              return newPaciente
            } else {
              return paciente
            }
          })
          setPacientes(pacientesEdited) 
          setModalEditIsOpen(false)
      }
    }
  }

  return (
    <>
      {
      showCard ?
        <div className="card-user">
          <img src="https://avatars.githubusercontent.com/u/8683378?v=4" alt={paciente.nome} width="70px" height="70px" />
          <div>
              <h4>{paciente.nome}</h4>
              <p>{paciente.email}</p>
              <p>{paciente.telefone}</p>
              <p>
                <span className="delete" onClick={() => handleDelete(paciente.id)}>Excluir</span>
                <span onClick={() => setModalEditIsOpen(true)}>Editar</span>
              </p>
          </div>
        </div>
      : null
      }
      {/* <Modal isOpen={modalEditIsOpen} changeOpen={setModalEditIsOpen}>
        <h1>Editar</h1>
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={user.id} />
            Nome: <input type="text" name="name" value={name} onChange={(event) => {setName(event.target.value)}} /><br />
            Email: <input type="text" name="email" value={email} onChange={(event) => {setEmail(event.target.value)}} /><br />
            Pass: <input type="text" name="pass" value={pass} onChange={(event) => {setPass(event.target.value)}} /><br />
            Photo: <input type="text" name="avatar" value={avatar} onChange={(event) => {setAvatar(event.target.value)}} /><br />
            <br />
            <input type="submit" value="Editar" />
        </form>
      </Modal> */}
    </>
  )
}


export default CardUser