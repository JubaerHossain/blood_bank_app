import styled from 'styled-components/native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const ButtonTextBlack = styled.Text`
  position: absolute;
  left: 0px;
  right: 0px;
  top: ${deviceRespectedSize(14)}px;
  bottom: ${deviceRespectedSize(13)}px;

  font-family: CircularStd-Book;
  font-size: ${deviceRespectedSize(18)}px;
  line-height: ${deviceRespectedSize(21)}px;
  text-align: center;
  letter-spacing: -0.15375px;

  color: #222222;
`;

export default ButtonTextBlack;
