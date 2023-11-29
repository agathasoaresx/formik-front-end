'use client'

import {useState} from 'react'
import './CardUser.css'
import Modal from '../utils/Modal'

const CardUser = ({user, users, setUsers}) => {

  const [showCard, setShowCard] = useState(true)
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [pass, setPass] = useState(user.pass)
  const [avatar, setAvatar] = useState(user.avatar)

  const handleDelete = async (idUser) => {
    const objUser = {
      id: idUser
    }
    const response = await fetch('http://localhost:3300/user',
      {
        cache: 'no-store',
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objUser) //tranforma um objeto em uma string json
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
    const newUser = {
      id: event.target.id.value,
      name: event.target.name.value,
      email: event.target.email.value,
      pass: event.target.pass.value,
      avatar: event.target.avatar.value,
    }
    const response = await fetch('http://localhost:3300/user',
    {
      cache: 'no-store',
      method: 'PUT',
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser) //tranforma um objeto em uma string json
    }
    )
    if(response.ok){
      const result = await response.json()
      if(result?.success){
          // editar um usuário do array users
          const usersEdited = users.map((user) => {
            if(user.id == newUser.id){
              return newUser
            } else {
              return user
            }
          })
          setUsers(usersEdited) 
          setModalEditIsOpen(false)
      }
    }
  }

  return (
    <>
      {
      showCard ?
        <div className="card-user">
          <img src={user.avatar} alt={user.name} width="70px" height="70px" />
          <div>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
              <p>
                <span className="delete" onClick={() => handleDelete(user.id)}>Excluir</span>
                <span onClick={() => setModalEditIsOpen(true)}>Editar</span>
              </p>
          </div>
        </div>
      : null
      }
      <Modal isOpen={modalEditIsOpen} changeOpen={setModalEditIsOpen}>
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
      </Modal>
    </>
  )
}


export default CardUser