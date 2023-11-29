import './Button.css'

const Button = ({variant, title}) => {
  return (
    <button className={variant}>{title}</button>
  )
}

export default Button