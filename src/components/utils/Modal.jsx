import "./Modal.css"

const Modal = ({children, isOpen, changeOpen}) => {
  
    if(!isOpen) return (<></>)

    return (
    <div className="modal">
        <main>
            {children}
            <br /><br />
            <button onClick={() => changeOpen(false)}>Cancelar</button>
        </main>
    </div>
  )
}

export default Modal