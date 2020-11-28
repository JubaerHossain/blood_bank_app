import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';

import WizardOne from './wizard-screen-one';
import WizardTwo from './wizard-screen-two';

const EditProfile = ({ navigation, onSubmit }) => {
  const dispatch = useDispatch();
  const [screen, setScreen] = useState(1);

  const next = values => {
    setScreen(2);
  };

  const previous = values => {
    setScreen(1);
  };

  const editProfileAction = values => {
      console.log(values);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {screen == 1 && <WizardOne navigation={navigation} onSubmit={next} />}
      {screen == 2 && <WizardTwo navigation={navigation} previous={previous} onSubmit={editProfileAction}/>}
    </>
  );
};

export default EditProfile;
