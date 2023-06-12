import { StyleSheet } from 'react-native';
import Login from './Login/login';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Page() {
	return (
		<SafeAreaProvider style={styles.container}>
			<Login />
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 25,
	},
});
