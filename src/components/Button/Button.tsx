import React from 'react'
import './styles.scss'

interface Props {
    backgroundColor?: string
    borderRadius?: number
    border?: string
    children: JSX.Element | string
    width?: number | string
}

const Button = (props: Props) => {
    const { children } = props
    return (
        <button className='button' style={props}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    backgroundColor: 'transparent',
    borderRadius: 4,
    border: 'none',
    width: '100%'
}

export default Button
