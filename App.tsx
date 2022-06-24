import React from 'react';
import { Provider } from 'react-redux';
import { FirstComponent } from './FirstRenderedComponent';
import store from './store/store';
// import store from './store/store';

export default function App() {
	return (
		<Provider store={store}>
			<FirstComponent />
		</Provider>
	);
}

{
	/* {a === 'apikey123' ? (
  <SafeAreaProvider>
    <Navigation colorScheme={colorScheme} />
    <StatusBar />
  </SafeAreaProvider>
) : (
  <SafeAreaProvider>
    <TabOneScreen />
  </SafeAreaProvider>
)} */
}
