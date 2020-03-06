import React from 'react'
import './styles.scss'

interface Props {
    list?: JSX.Element[]
    marginBottom?: number
}

export const InfoPanel = (props: Props) => {
    const { list = [], marginBottom = 0 } = props
    return (
        <div className='info-panel' style={{ marginBottom }}>
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
