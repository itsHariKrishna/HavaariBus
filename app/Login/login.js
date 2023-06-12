import React, { useState } from 'react';
import userDetails from '../userDetails';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<SafeAreaProvider style={styles.container}>
			<Text style={styles.heading}>Hop In</Text>
			<View style={styles.secondContainer}>
				<TextInput
					style={styles.input}
					placeholder="Username"
					value={username}
					onChangeText={setUsername}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry={true}
					value={password}
					onChangeText={setPassword}
				/>
				<Link href="../NoteTakingPage" asChild>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableOpacity>
				</Link>
			</View>

			<Link href={'../SignUp/signup'} asChild>
				<TouchableOpacity>
					<Text style={styles.signUpText}>
						No account? <Text style={styles.signUpLink}>SignUp.</Text>
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
	signUpText: {
		fontSize: 16,
		color: userDetails[0].coloPalette['midnight-green'],
		paddingBottom: 15,
	},
	signUpLink: {
		color: '#FFC368',
		fontWeight: 'bold',
	},
});

export default Login;
