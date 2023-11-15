import Button from "@/components/Button";
import Link from "next/link";
import '@/app/globals.css'

export default function Home() {
  return (
    <div className="">

      <nav className="flex justify-around mt-5">
        <div>
          <img src="../logo.svg" alt="Logo with Conic" />
        </div>

        <ul className="flex gap-14 pt-5">
          <li>lorem</li>
          <li>Koren lorem</li>
          <li>Dolor</li>
          <li>Dolor</li>
          <li>Dolor</li>
        </ul>

        <div className="flex gap-7 py-3">
          <Button
            className='border'
          >
            <Link href="/login">Entrar</Link>
          </Button>
          <Button
            className='bg-logo'
          >
            <Link href="/cadastro">Cadastrar-se</Link>
          </Button>
        </div>
      </nav>

      <section className="h-[400px] w-2/6 mt-40 ml-40">
        <div className="text-[25px] w-4/6">
          <p className="text-title  font-semibold">
            Korem ipsum dolor sit amet, consectetur adipiscing
            <span className="pl-4 font-bold">
              elit<span className="text-logo">.</span>
            </span>
            <span className="pl-4 font-bold">
              Nunc<span className="text-logo">.</span>
            </span>
          </p>

        </div>
        <p className="my-4 text-[20px] text-[#6B767E] ">
          Korem ipsum dolor sit amet, adipiscin
        </p>
        <Button
          className='text-white bg-title py-2'
        >
          lorem
        </Button>
      </section>

      <section className="bg-[#EAF2FB] h-auto flex flex-col text-center ">
        <div className="mt-10">
          <h2 className="text-[45px] text-title font-semibold mb-5">
            Korem ipsum & dolor sit amet 
          </h2>
          <h3 className="text-[22px] text-title px-20 mb-10">Korem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc. </h3>
            <div className="flex justify-around mb-20"> 
                <div className="h-[397px] bg-white w-[397px] shadow-md rounded-lg"></div>
                <div className="h-[397px] bg-white w-[397px] shadow-md rounded-lg"></div>
                <div className="h-[397px] bg-white w-[397px] shadow-md rounded-lg"></div>
            </div>
        </div>
      </section>

      <section className="bg-white p-40">
        <div className="bg-[#EAF2FB] h-auto rounded-xl p-20">
            <div className="">
              <h2 className="text-[45px] text-title font-semibold mb-5">Korem ipsum & dolor sit amet </h2>
              <div className="bg-white h-[400px] rounded-xl"></div>
            </div>
        </div>
      </section>
    </div>
  )
}
