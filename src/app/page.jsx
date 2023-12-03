'use client'
import React from 'react'
import { League_Spartan } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react'




const league_Spartan = League_Spartan(
  {
    weight: '700',
    subsets: ['latin'],
  }
)

const inter = Inter(
  {
    weight: '600',
    subsets: ['latin']
  }
)

const currentDate = new Date().toLocaleDateString();
const dateFormated = currentDate.split('/').reverse().join('-');

const getFormatedDate = (currentDate) => {
  return currentDate.split('/').reverse().join('-');
}


const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required("Campo obrigatório"),
  date: Yup.date().max(getFormatedDate(new Date().toLocaleDateString())).required("Campo obrigatório"),
  phone: Yup.string().required("Insira um telefone").min(11, "Insira um número de telefone válido").max(11, "Insira um número de telefone válido"),
  cpf: Yup.string().required("Cpf é obrigatório").min(11, "Insira um cpf válido").max(11, "Insira um cpf válido"),
  sexo: Yup.string().required("Selecione uma opção")
});



const Cadastro = () => {

  const [pacientes, setPacientes] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newPaciente = {
      nome: event.target.nome.value,
      email: event.target.email.value,
      data_nasc: event.target.data_nasc.value,
      telefone: event.target.phone.value,
      sexo: event.target.sexo.value,
      cpf: event.target.cpf.value

    }
    const response = await fetch(
      'http://localhost:3300/paciente',
      {
        cache: 'no-store',
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPaciente) //tranforma um objeto em uma string json
      }
    )
    if (response.ok) {
      const result = await response.json()
      console.log(result)
      if (result?.sucess) {
        setPacientes([...pacientes, result.paciente])
      }
    }
  }

  return (
    <>

      <div class="flex justify-center items-center w-[1210px]">
        <div id="cadastro-card" class="flex flex-col h-auto w-[496px] justify-center">
          <div id="cadastro-title" class="h-14 ">
            <div className={league_Spartan.className}>
              <h2 class="font-sans text-3xl league_Spartan">Dados do paciente</h2>
            </div>
          </div>
          <div id="cadastro-body" class="w-auto">
            <Formik
              validationSchema={schema}
              initialValues={{ name: '', email: '', date: '', phone: '', cpf: '', sexo: '' }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form onSubmit={handleSubmit}>
                <div className='space-y-3'>
                  <Field type="name" name="nome" placeholder="Nome" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10 " />
                  <Field type="email" name="email" placeholder="E-mail" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                  <ErrorMessage name="email" component="div" />
                  <Field className=" border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" name="data_nasc" placeholder="date" type="date" />
                  <ErrorMessage component="span" name="date" />
                  <Field type="phone" name="phone" placeholder="Telefone" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                  <ErrorMessage component="span" name="phone" />
                  <Field type="cpf" name="cpf" placeholder="CPF" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                  <ErrorMessage component="span" name="cpf" />
                  
                  <div className='w-auto h-[80px] flex flex-row mt-[15px]'>
                    <label className='mt-[10px] text-neutral-600 px-2 font-sans text-base'>Feminino</label>
                      <Field type="radio" name="sexo" value="Feminino" class=" mr-[20px] border-2  h-[48px] border-gray-900 border-opacity-10" />
                    <label className='mt-[10px] text-neutral-600 px-2 font-sans text-base'>Masculino </label>
                      <Field type="radio" name="sexo" value="Masculino" class="border-2 h-[48px] rounded border-gray-900 border-opacity-10" />
                    <ErrorMessage component="span" name="sexo" />
                  </div>




                  <div id="input" class="pt-9">
                    <input type="submit" value="Salvar" className="rounded-md w-[496px] h-[45px] bg-lightGray font-sans text-[#979797] " />
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cadastro