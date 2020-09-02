import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export default StyleSheet.create({
  main_text: {
    height: 70,
    width: 219,
    marginTop: 28,
  },
  flex_row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pp: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginTop: 45,
  },
  hr: {
    borderBottomColor: 'rgb(235,235,235)',
    borderBottomWidth: 1,
    marginTop: 16,
    marginBottom: 16,
  },
  security_text: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 18,
    color: 'rgb(72,72,72)',
    letterSpacing: -0.3,
  },
  marginTop: {
    marginTop: 16,
  },
  marginTop8: {
    marginTop: 8,
  },
  container: {
    marginTop: 24,
    marginLeft: 21,
    marginRight: 23,
  },
  center: {
    alignItems: 'center',
  },
  edit_pp: {
    backgroundColor: 'rgb(255, 156, 121)',
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    marginTop: 31,
  },
  pp_text: {
    alignSelf: 'center',
    lineHeight: 29,
    fontSize: 20,
    fontFamily: 'CircularStd-Book',
    color: 'rgb(255, 255, 255)',
  },
  marginTop33: {
    marginTop: 33,
  },
  marginTop20: {
    marginTop: 20,
  },
  save_changes: {
    marginBottom: 64,
    marginTop: 18,
  },
});

export const BrandInformation = styled.Text`
  left: 6.9%;
  right: 6.9%;

  font-family: CircularStd-Book;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.33px;

  color: #222222;

  align-self: center;
  margin: 10px 0px;
`;
export const PostFirstOrder = styled.Text`
  margin-top: 16px;
  font-family: CircularStd;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: #484848;
`;

export const CongratulationParagraph = styled.Text`
  height: 65px;
  left: 0%;
  right: 12.33%;

  font-family: CircularStd;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.128125px;

  color: #484848;
  margin-top: 8px;
`;
export const ListItemText = styled.Text`
  height: 20px;
  left: 0%;
  right: 67.92%;

  font-family: CircularStd;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.33px;

  color: #222222;
`;
