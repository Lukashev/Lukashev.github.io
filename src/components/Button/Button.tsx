import React from 'react'
import './styles.scss'

interface Props {
    backgroundColor?: string
    borderRadius?: number
    border?: string
    children: JSX.Element | string
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
    border: 'none'
}

export default Button
