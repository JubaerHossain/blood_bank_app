import React, {useEffect} from 'react';
import {Text, Platform} from 'react-native';
import Navigator from './navigations/index';
import {Provider} from 'react-redux';
import store from './store/configure-store';

const App = () => {
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  });
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
