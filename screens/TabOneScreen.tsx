import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { ResponseType, useAuthRequest } from 'expo-auth-session';
import axios from 'axios';
import { API_CONFIG } from '../constants/api';

export default function TabOneScreen() {
	const [token, setToken] = useState('');
	const [request, response, promptAsync] = useAuthRequest(
		{
			responseType: ResponseType.Token,
			clientId: API_CONFIG.clientId,
			scopes: [
				'user-read-currently-playing',
				'user-read-recently-played',
				'user-read-playback-state',
				'user-top-read',
				'user-modify-playback-state',
				'streaming',
				'user-read-email',
				'user-read-private',
			],
			usePKCE: false,
			redirectUri: 'exp://192.168.100.14:19000',
		},
		{
			authorizationEndpoint: 'https://accounts.spotify.com/authorize',
			tokenEndpoint: 'https://accounts.spotify.com/api/token',
		}
	);

	useEffect(() => {
		if (response?.type === 'success') {
			const { access_token } = response.params;
			setToken(access_token);
		}
	}, [response]);

	useEffect(() => {
		if (token) {
			axios('https://api.spotify.com/v1/me', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + token,
				},
			})
				.then(response => {
					console.log(response.data);
				})
				.catch(error => {
					console.log('error', error.message);
				});
		}
	});

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<StatusBar style='light' />
			<Button
				title='Login with Spotify'
				onPress={() => {
					promptAsync();
				}}
			/>
			<View style={{ height: 100 }} />
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
	},
});
