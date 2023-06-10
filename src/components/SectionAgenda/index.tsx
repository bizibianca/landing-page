import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

const SectionAgenda = ({ title, description }: SectionAboutProjectProps) => (
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: description }} />
  </Container>
)

export default SectionAgenda
