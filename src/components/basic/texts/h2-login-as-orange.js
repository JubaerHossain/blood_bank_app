import styled from 'styled-components/native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const H2LoginAsOrangeText = styled.Text`
  position: absolute;
  height: 40px;
  left: 22px;
  top: 187px;

  font-family: CircularStd;
  font-size: ${deviceRespectedSize(32)}px;
  line-height: ${deviceRespectedSize(40)}px;
  letter-spacing: -0.646667px;

  color: #f22b55;
`;

export default H2LoginAsOrangeText;
