import React from 'react'
import './styles.scss'

interface Props {
    list?: JSX.Element[]
}

export const InfoPanel = (props: Props) => {
    const { list = [] } = props
    return (
        <div className='info-panel'>
            {list.map((item: JSX.Element, i: number) => {
                return (
                    <div className='info-panel__item' key={i}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}
