import React from 'react'
import style from "./Section.module.scss";

type SectionProps = {
    title: string,
    children: React.ReactNode,
    type: "primary" | "secondary"
};

const Section = ({ title, children, type }: SectionProps) => {
  return (
    <div className={type === "primary" ? style.sectionPrimary : style.sectionSecondary}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.childs}>{children}</div>
    </div>
  )
}

export default Section