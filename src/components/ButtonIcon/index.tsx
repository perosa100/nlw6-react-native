import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import DiscordImg from '../../assets/discord.png'

import * as S from './styles'

type ButtonIconProps = {
  title: string
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({ title }) => {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <S.IconImage source={DiscordImg} />
      </S.IconWrapper>

      <S.IconWrapperText>{title}</S.IconWrapperText>
    </S.Wrapper>
  )
}
