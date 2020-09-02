import styled from 'styled-components/native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const ButtonTextWhite = styled.Text`
  position: absolute;
  left: ${deviceRespectedSize(23)}px;
  right: ${deviceRespectedSize(23)}px;
  top: ${deviceRespectedSize(14)}px;
  bottom: ${deviceRespectedSize(13)}px;

  font-family: CircularStd-Bold;
  font-size: ${deviceRespectedSize(18)}px;
  line-height: ${deviceRespectedSize(21)}px;
  text-align: center;
  letter-spacing: -0.15375px;

  color: #ffffff;
`;

export default ButtonTextWhite;
