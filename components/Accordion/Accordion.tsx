'use client';
import React from 'react'
import { Accordion as Accord, Text } from "@mantine/core";
import style from "./Accordion.module.scss";

type AccordionDataType = {
  label: string;
  description: string;
}

type AccordionProps = {
  data: AccordionDataType[];
}

const Accordion = ({ data }: AccordionProps) => {
  return (
    <Accord classNames={{ root: style.accordion}}>
    {data.map((item) => (
        <Accord.Item classNames={{ item: style.item }} key={item.label} value={item.label}>
            <Accord.Control classNames={{ control: style.control, chevron: style.chevron, label: style.label }}>{item.label}</Accord.Control>
            <Accord.Panel classNames={{ panel: style.panel }}>
              <Text size="lg">{item.description}</Text>
            </Accord.Panel>
        </Accord.Item>
    ))}
    </Accord>
  )
}

export default Accordion