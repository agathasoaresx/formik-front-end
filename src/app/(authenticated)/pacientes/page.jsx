import Header from "@/components/layout/Header"
import ListMembers from "@/components/utils/ListMembers"

const Membros = async () => {
  return (
    <>
      <div className="flex flex-col mx-10">
        <ListMembers />
      </div>
    </>
  )
}

export default Membros