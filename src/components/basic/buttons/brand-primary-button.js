import styled from 'styled-components/native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const BrandPrimaryButton = styled.TouchableOpacity`
  position: relative;
  height: ${deviceRespectedSize(50)}px;
  background: #00a699;
  border-radius: 6px;
`;

export default BrandPrimaryButton;
