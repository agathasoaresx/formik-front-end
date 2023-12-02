'use client'

import { useState, useEffect } from "react"
import CardUser from "@/components/cards/CardUser"
import Modal from "@/components/utils/Modal"
import { League_Spartan } from 'next/font/google'

const league_Spartan = League_Spartan(
    {
      weight: '700',
      subsets: ['latin'],
    }
  )

const ListMembers = () => {

    const [users, setUsers] = useState([])
    const [modalSignInIsOpen, setModalSignInIsOpen] = useState(false)

    useEffect(() => {
        const getMembers = async () => {
            const response = await fetch('http://localhost:3300/paciente/list', { cache: 'no-store' })
            const data = await response.json()
            setUsers(data)
        }
        getMembers()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            pass: event.target.pass.value,
            avatar: event.target.avatar.value
        }
        const response = await fetch(
            'http://localhost:3300/user',
            {
                cache: 'no-store',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser) //tranforma um objeto em uma string json
            }
        )
        if (response.ok) {
            const result = await response.json()
            console.log(result)
            if (result?.sucess) {
                setUsers([...users, result.user])
                setModalSignInIsOpen(false)
            }
        }
    }

    return (
        <>

            <h1 className={`font-sans text-3xl py-5 league_Spartan ${league_Spartan.className}`}>Pacientes</h1>
            {
                users.map((user) => { //map - usado para percorrer array. Não dá pra usar map em objeto.
                    return (
                        <CardUser key={user.id} paciente={user} pacientes={users} setPacientes={setUsers} /> //forma do react identificar os cards. Diferenciar um card do outro
                    )
                })
            }
            <button className="bg-[#051cdfe] rounded-md"><a href="/">Voltar</a></button>
            <Modal isOpen={modalSignInIsOpen} changeOpen={setModalSignInIsOpen}>
                <h1>Cadastros</h1>
                <form onSubmit={handleSubmit}>
                    Nome:<input type="text" name="name" /><br />
                    Email: <input type="text" name="email" /><br />
                    Pass: <input type="text" name="pass" /><br />
                    Foto: <input type="text" name="avatar" /><br />
                    <input type="submit" value="Cadastrar" />
                </form>
            </Modal>

        </>
    )
}

export default ListMembers