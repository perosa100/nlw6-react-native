import React from 'react'
import { StatusBar } from 'react-native'

import IllustratoionImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'

import * as S from './styles'

export function SignIn() {
  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.ImageLogo source={IllustratoionImg} resizeMode="stretch" />

      <S.Content>
        <S.Title>
          Conecte-se  {`\n`}
         e organize suas  {`\n`}
          joganinas
        </S.Title>

        <S.SubTitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </S.SubTitle>

        <ButtonIcon title="Entrar com Discord" />
      </S.Content>
    </S.Container>
  )
}
