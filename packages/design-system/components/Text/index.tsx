import React from 'react'
import styled from 'styled-components'

const StyledText = styled.span`
  font-family: sans-serif
`;

export function Text({ tag, children, ...props}) {
  return (
    <StyledText as={tag} {...props}>
      {children}
    </StyledText>
  )
}
