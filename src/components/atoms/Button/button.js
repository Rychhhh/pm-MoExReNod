import React from 'react'

 const Button = ({label,onclick, ...rest}) => {
  return (
    <div>
       <button onClick={onclick} {...rest}>{label}</button>
    </div>
  )
}

export default Button;