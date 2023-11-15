'use client'

import Header from "@/components/Header"
import Link from 'next/link'
import Chart from 'chart.js/auto'
import { useEffect } from "react"

const Overview = ({ title, value, path }) => {
  return (
    <>
      <Link href={`${path}`}>
        <div className="flex-start flex-col py-4 px-6 rounded-2xl border-zinc-100 bg-white shadow-md">
          <h4 className="text-sm mb-4 font-semibold">{title}</h4>
          <span className="text-3xl font-normal">R${value}</span>
        </div>
      </Link>
    </>
  )
}

const Dashboard = () => {

  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    new Chart(
      document.getElementById('1'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );
  })

  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    new Chart(
      document.getElementById('2'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );

    
  })

  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    new Chart(
      document.getElementById('3'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );

    
  })

  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    new Chart(
      document.getElementById('4'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );

    
  })

  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    new Chart(
      document.getElementById('5'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );

    
  })

  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    new Chart(
      document.getElementById('6'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );

    
  })

  return (
    <>
      <Header title="Dashboard" avatar="https://avatars.githubusercontent.com/u/102611166?s=70&v=4" />
      <div className="h-full">

        <div className="m-8">

          <div className="flex-start flex-col">
            <h2 className="mb-5 font-normal text-xl">Dashboards</h2>
            <h3 className="font-bold text-5xl mb-3">Overview</h3>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <Overview title="Saldo Atual" value="0,00" path="#" />
            <Overview title="Receitas" value="0,00" path="/tansacoes/receitas" />
            <Overview title="Despesas" value="0,00" path="/tansacoes/receitas" />
            <Overview title="Cartão de Crédito" value="0,00" path="#" />
          </div>

          <h3 className="text-3xl my-6 font-bold">Resultados</h3>

          <div className="grid grid-cols-3 gap-5">
            <div className="w-full rounded-md bg-white p-5"><canvas id="1"></canvas></div>
            <div className="w-full rounded-md bg-white p-5"><canvas id="2"></canvas></div>
            <div className="w-full rounded-md bg-white p-5"><canvas id="3"></canvas></div>
            <div className="w-full rounded-md bg-white p-5"><canvas id="4"></canvas></div>
            <div className="w-full rounded-md bg-white p-5"><canvas id="5"></canvas></div>
            <div className="w-full rounded-md bg-white p-5"><canvas id="6"></canvas></div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard