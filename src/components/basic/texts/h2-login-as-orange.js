import styled from 'styled-components/native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const H2LoginAsOrangeText = styled.Text`
  position: absolute;
  height: 40px;
  top: 40px;

  font-family: CircularStd;
  font-size: ${deviceRespectedSize(32)}px;
  line-height: ${deviceRespectedSize(40)}px;
  letter-spacing: -0.646667px;

  color: black;
`;

export default H2LoginAsOrangeText;
