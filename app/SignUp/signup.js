import React, { useState } from 'react';
import userDetails from '../userDetails';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Login = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<SafeAreaProvider style={styles.container}>
			<Text style={styles.heading}>SignUp</Text>
			<View style={styles.secondContainer}>
				<TextInput
					style={styles.input}
					placeholder="Username"
					value={username}
					onChangeText={setUsername}
				/>

				<TextInput
					style={styles.input}
					placeholder="e-mail"
					value={email}
					onChangeText={setEmail}
				/>

				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry={true}
					value={password}
					onChangeText={setPassword}
				/>
				<Link href="../Login/login" asChild>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>SignUp</Text>
					</TouchableOpacity>
				</Link>
			</View>

			<Link href={'../Login/login'} asChild>
				<TouchableOpacity>
					<Text style={styles.signInText}>
						Already got an account?{' '}
						<Text style={styles.signInLink}>Sign-In.</Text>
					</Text>
				</TouchableOpacity>
			</Link>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
	secondContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 50,
	},
	heading: {
		fontSize: 64,
		fontWeight: 'bold',
		color: userDetails[0].coloPalette['midnight-green'],
		marginTop: 30,
	},
	input: {
		width: 300,
		height: 50,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	button: {
		width: 150,
		height: 50,
		backgroundColor: '#FFC368',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	signInText: {
		fontSize: 16,
		color: userDetails[0].coloPalette['midnight-green'],
		paddingBottom: 15,
	},
	signInLink: {
		color: '#FFC368',
		fontWeight: 'bold',
	},
});

export default Login;
