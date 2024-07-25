import { TablerIcon } from '@tabler/icons-react'
import React from 'react'
import style from "./Card.module.scss";

interface CardProps { 
    icon: TablerIcon,
    title: string,
    description: string,
}

const Card = ({icon: Icon, title, description }: CardProps) => {
  return (
    <div className={style.cardContainer}>
        <div className={style.iconBox}>
            <Icon className={style.icon} size={36} />
        </div>
        <h4 className={style.title}>{title}</h4>
        <p className={style.description}>{description}</p>
    </div>
  )
}

export default Card