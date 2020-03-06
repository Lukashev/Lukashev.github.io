import React from 'react'

type FontFamily = 'Montserrat' | 'Proxima'
type TextDecoration = 'blink' | 'line-through' | 'overline' | 'underline' | 'none' | 'inherit'
interface Props {
    size?: number
    fontFamily?: FontFamily
    fontWeight?: number
    color?: string
    children: string | number | boolean
    textDecoration: TextDecoration
}

const Typography = (props: Props) => {
    const {
        size: fontSize,
        fontFamily,
        fontWeight,
        color,
        children,
        textDecoration
    } = props
    return (
        <span style={{ fontFamily, fontSize, color, fontWeight, textDecoration }}>
            {children}
        </span>
    )
}

Typography.defaultProps = {
    size: 12,
    fontFamily: 'Montserrat',
    fontWeight: 500,
    textDecoration: 'none',
    color: '#000000',
    children: ''
}

export default Typography
