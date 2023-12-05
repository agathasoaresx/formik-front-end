'use client'

import { useState } from 'react'
import './CardUser.css'
import Modal from '../utils/Modal'
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import * as Yup from 'yup';
import { League_Spartan } from 'next/font/google'

const league_Spartan = League_Spartan(
  {
    weight: '700',
    subsets: ['latin'],
  }
)

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required("E-mail é obrigatório"),
  date: Yup.date().required("Campo obrigatório"),
  phone: Yup.string().required("Insira um telefone").min(8, "Telefone precisa ter no mínimo 8 números"),
  cpf: Yup.string().required("Cpf é obrigatório").min(11, "CPF precisa ter no mínimo 11 números")
});

const CardUser = ({ paciente, pacientes, setPacientes }) => {

  const [showCard, setShowCard] = useState(true)
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

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
    if (response.ok) {
      const result = await response.json()
      if (result?.success) {
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
    if (response.ok) {
      const result = await response.json()
      if (result?.success) {
        // editar um usuário do array users
        const pacientesEdited = pacientes.map((paciente) => {
          if (paciente.id == newPaciente.id) {
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
              <p>{paciente.sexo}</p>
              <p>{paciente.data_nasc}</p>
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
      <Modal isOpen={modalEditIsOpen} changeOpen={setModalEditIsOpen}>
        <h1 className={`font-sans text-3xl py-5 league_Spartan ${league_Spartan.className}`}>Editar</h1>
        <Formik
          validationSchema={schema}
          initialValues={{ nome: paciente.nome, email: paciente.email, data_nasc: paciente.data_nasc, phone: paciente.telefone, cpf: paciente.cpf, sexo: paciente.sexo }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {props => (
            <Form onSubmit={handleSubmit}>
              <div className='space-y-3'>
                <input type="hidden" name="id" value={paciente.id} />
                <Field name="nome" placeholder="Nome" onChange={props.handleChange} class="border-2 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10 " />
                <Field type="email" name="email" placeholder="E-mail" onChange={props.handleChange} class="border-2 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                <ErrorMessage name="email" component="div" />
                <Field type="date" name="data_nasc" placeholder="date" onChange={props.handleChange} className=" border-2 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                <ErrorMessage component="span" name="date" />
                <Field name="phone" placeholder="Telefone" onChange={props.handleChange} class="border-2 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                <ErrorMessage component="span" name="phone" />
                <Field type="cpf" name="cpf" placeholder="CPF" onChange={props.handleChange} class="border-2 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                <ErrorMessage component="span" name="cpf" />
                {/* <Field type="sex" name="sexo" placeholder="sexo" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" /> */}
                <div>
                  <label>
                    Feminino
                    <Field type="radio" name="sexo" value="Feminino" className="text-base text-[#A2A3A4] mx-2 border-gray-900 border-opacity-10" />
                  </label>
                  <label>
                    Masculino
                    <Field type="radio" name="sexo" value="Masculino" className="text-base text-[#A2A3A4] mx-2 border-gray-900 border-opacity-10" />
                  </label>
                  <ErrorMessage component="span" name="sexo" />
                </div>
                <div id="input" class="pt-9 flex justify-center">
                  <input type="submit" value="Salvar" className=" bg-sky-500 hover:bg-sky-700 cursor-pointer rounded-md w-[496px] h-[45px] font-sans font-bold text-zinc-50 " />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  )
}


export default CardUser