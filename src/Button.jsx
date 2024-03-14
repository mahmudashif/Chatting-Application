import React from 'react'

const Button = ({className,style,children}) => {
  return (
    <button className={className} style={style}>{children}</button>
  )
}

export default Button