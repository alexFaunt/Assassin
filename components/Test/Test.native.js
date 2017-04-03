import React from 'react'
import styled from 'styled-components/native'

const StyledText = styled.Text`
  background-color: ${({ theme }) => theme.colors.secondary};
`
export default () => <StyledText>Test native</StyledText>
