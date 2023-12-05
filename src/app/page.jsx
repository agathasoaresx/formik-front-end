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


// definição do schema sem precisar criar função de validação 
const schema = Yup.object().shape({ //define como objeto
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().required("Campo obrigatório").email("Email inválido"),
  date: Yup.date().required("Campo obrigatório"),
  phone: Yup.string().required("Insira um telefone").min(11, "Insira um número de telefone válido").max(11, "Insira um número de telefone válido"),
  cpf: Yup.string().required("Cpf é obrigatório").min(11, "Insira um cpf válido").max(11, "Insira um cpf válido"),
 
});



const Cadastro = () => {

  const [pacientes, setPacientes] = useState([])

  //
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
        alert("Paciente cadastrado com sucesso!")
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

            <Formik //componente que lida com os estados e cria o provider 
              validationSchema={schema} 
              initialValues={{ name: '', email: '', date: '', phone: '', cpf: '', sexo: '' }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form //componente que se conecta com a API do formik e lida com o submit 
              onSubmit={handleSubmit}> 

                <div className='space-y-3'>

                  <Field //componente que substitui o input - não é necessário passar os values e OnChange
                  type="name" name="nome" placeholder="Nome *" 
                  className="border-2 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10 " />
                  <ErrorMessage component="span" name="name" />

                  <Field type="email" name="email" placeholder="E-mail *"
                  className="border-2 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                  <ErrorMessage // componente que renderiza a mensagem de erro de um determinado campo se esse campo tiver sido visitado
                  name="email" component="div" />
                  
                  <Field name="data_nasc" placeholder="date" type="date"
                  className=" border-2 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10"  />
                  <ErrorMessage component="span" name="date" />
                  
                  <Field type="phone" name="phone" placeholder="Telefone *"
                  className="border-2 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                  <ErrorMessage component="span" name="phone" />
                  
                  <Field type="cpf" name="cpf" placeholder="CPF *"
                  className="border-2 px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                  <ErrorMessage component="span" name="cpf" />
                  
                  <div className='w-auto h-[80px] flex flex-row mt-[15px]'>
                    
                   <label className='mt-[10px] text-neutral-600 px-2 font-sans text-base'>Feminino</label>
                      <Field type="radio" name="sexo" value="Feminino"
                      className=" mr-[20px] border-2  h-[48px] border-gray-900 border-opacity-10" />
                    <label className='mt-[10px] text-neutral-600 px-2 font-sans text-base'>Masculino </label>
                      <Field type="radio" name="sexo" value="Masculino"
                      className="border-2 h-[48px] rounded border-gray-900 border-opacity-10 " />
                    <ErrorMessage component="span" name="sexo"/>

                  </div>


                  <div class="mt-[0px]">
                       <input type="submit" value="Salvar" className=" bg-sky-500 hover:bg-sky-700 cursor-pointer rounded-md w-[496px] h-[45px] font-sans font-bold text-zinc-50 " />

                     
                 </div>
              </div>
              </Form>
            
            </Formik>
            
            <div className='mt-[80px] ml-[250px]'>
                <a href='/pacientes'>
                          <button className="bg-indigo-500 hover:bg-indigo-700 cursor-pointer rounded-md w-[240px] h-[45px] font-sans font-bold text-zinc-50">Pacientes cadastrados</button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cadastro