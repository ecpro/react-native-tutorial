import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';
import reducers from './reducers';
import LibraryList from './LibraryList';
import { Header } from './common';

// Provider tags can only have single child element
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText={'Tech Stack'} />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;

