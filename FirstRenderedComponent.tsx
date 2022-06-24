import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Navigation } from './navigation';
import { LoginScreen } from './screens/LoginScreen';
import { setAccessToken } from './store/reducers/login.reducer';

export const FirstComponent = () => {
	const dispatch = useDispatch();
	const access_token = useSelector((state: any) => state.login.access_token);
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();
	const [a, setA] = useState('');

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem('api_key');
			if (typeof value === 'string') {
				if (access_token === '') {
					dispatch(setAccessToken(value));
				}
				setA(value);
			}
		} catch (e) {}
	};

	useEffect(() => {
		getData();
	}, [access_token]);

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				{a === '' ? (
					<LoginScreen />
				) : (
					<SafeAreaProvider>
						<Navigation colorScheme={colorScheme} />
						<StatusBar />
					</SafeAreaProvider>
				)}
			</SafeAreaProvider>
		);
	}
};

// remove from asyncstorage-

// const remove = async () => {
//   try {
//     await AsyncStorage.removeItem('api_key');
//     return true;
//   } catch (e) {}
// };
