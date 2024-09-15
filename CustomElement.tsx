{\rtf1\ansi\ansicpg1252\cocoartf2819
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState \} from 'react'\
import \{ styled \} from '@wix/styled-components'\
\
const Container = styled.div`\
  font-family: Arial, sans-serif;\
  padding: 20px;\
  background-color: #f0f0f0;\
  border-radius: 8px;\
`\
\
const Title = styled.h2`\
  color: #4a4a4a;\
`\
\
const Button = styled.button`\
  background-color: #3899ec;\
  color: white;\
  border: none;\
  padding: 10px 20px;\
  border-radius: 4px;\
  cursor: pointer;\
  &:hover \{\
    background-color: #4eb7f5;\
  \}\
`\
\
export function CustomElement() \{\
  const [count, setCount] = useState(0)\
\
  return (\
    <Container>\
      <Title>This is a Custom Element</Title>\
      <p>You've clicked the button \{count\} times.</p>\
      <Button onClick=\{() => setCount(count + 1)\}>\
        Click me\
      </Button>\
    </Container>\
  )\
\}}