import styled from 'styled-components/native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

export const StartEndText = styled.Text`
  font-family: CircularStd-Book;
  font-size: ${deviceRespectedSize(16)}px;
  line-height: ${deviceRespectedSize(19)}px;
  letter-spacing: -0.036667px;

  color: #8e8e8e;
`;
export const StartEndSmallText = styled.Text`
  font-family: CircularStd;
  font-size: ${deviceRespectedSize(13)}px;
  line-height: ${deviceRespectedSize(15)}px;
  letter-spacing: -0.111042px;
  color: #767676;
`;
export const GreenStartEndSmallText = styled.Text`
  font-family: CircularStd-Book;
  font-size: ${deviceRespectedSize(13)}px;
  line-height: ${deviceRespectedSize(15)}px;
  letter-spacing: -0.111042px;

  color: #00a699;
`;
