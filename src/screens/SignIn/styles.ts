import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ImageLogo = styled.Image`
  width: 100%;
  height: 360px;
`
export const Content = styled.View`
  margin-top: -40px;
  padding-left: 50px;
  padding-right: 50px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.title700};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  line-height: 40px;
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title500};
  font-size: 15px;
  margin-bottom: 64px;
  line-height: 25px;
`
