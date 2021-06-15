import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import HealthHistory from './src/HealthHistory';

let themeColor = "#1f8e46";

const App = () => {
  return (
    <HealthHistory themeColor = {themeColor}/>
  );
};

export default App;
