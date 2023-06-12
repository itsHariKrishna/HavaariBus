import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Modal,
	TouchableOpacity,
	TextInput,
	Image,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const NoteTakingPage = () => {
	const [data, setData] = useState([]);

	const [modalVisible, setModalVisible] = useState(false);
	const [busName, setBusName] = useState('');
	const [busRoute, setBusRoute] = useState('');
	const [busFare, setBusFare] = useState('');
	const [busTime, setBusTime] = useState('');
	const [id, setId] = useState(data.length + 1);
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleDateConfirm = (time) => {
		const formattedTime = time.toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
		});
		setBusTime(formattedTime);
		hideDatePicker();
	};

	const addEntry = () => {
		const newEntry = {
			id: id,
			busName: busName,
			busTime: busTime,
			busFare: busFare,
			busRoute: busRoute,
		};
		setData([...data, newEntry]);
		setId(id + 1);
		setModalVisible(false);
	};

	const removeItem = (itemId) => {
		setData(data.filter((entry) => entry.id !== itemId));
	};

	const TableHeader = () => (
		<View style={styles.row}>
			<View>
				<Text style={[styles.busName, styles.headerText]}>Bus Name</Text>
			</View>
			<View>
				<Text style={[styles.busRoute, styles.headerText]}>Bus Route</Text>
			</View>
			<View>
				<Text style={[styles.headerText]}>{`Bus Fare(₹)`}</Text>
			</View>
			<View>
				<Text style={[styles.busTime, styles.headerText]}>Bus Time</Text>
			</View>
		</View>
	);

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				style={styles.row}
				onLongPress={() => removeItem(item.id)}
			>
				<View>
					<Text style={styles.busName}>
						{item.busName.length > 10
							? item.busName.substring(0, 8) + '...'
							: item.busName}
					</Text>
				</View>
				<View>
					<Text style={styles.busRoute}>
						{item.busRoute.length > 10
							? item.busRoute.substring(0, 8) + '...'
							: item.busRoute}
					</Text>
				</View>
				<View>
					<Text style={styles.busFare}>{item.busFare}</Text>
				</View>
				<View>
					<Text style={styles.busTime}>{item.busTime}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaProvider style={styles.container}>
			<View style={[styles.header, { alignItems: 'flex-end' }]}>
				<TouchableOpacity onPress={() => setModalVisible(true)}>
					<Icon name="plus-circle" size={25} style={{ color: '#FFC368' }} />
				</TouchableOpacity>
			</View>

			<View style={styles.content}>
				<TableHeader />

				<FlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>

			<Modal visible={modalVisible} animationType="slide" keyboard={true}>
				<View style={styles.modalContainer}>
					<Text style={styles.modalTitle}>Add New Entry</Text>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							placeholder="Bus Name"
							onChangeText={(text) => setBusName(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder="Bus Route"
							onChangeText={(text) => setBusRoute(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder="Bus Fare"
							onChangeText={(text) => setBusFare(text)}
						/>
						<TouchableOpacity
							style={styles.datePickerButton}
							onPress={showDatePicker}
						>
							<Text style={styles.datePickerButtonText}>
								{busTime || 'Select Time'}
							</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity style={styles.addButton} onPress={addEntry}>
						<Text style={styles.addButtonText}>Add</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => setModalVisible(false)}>
						<Text style={styles.cancelButtonText}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</Modal>

			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode="time"
				onConfirm={handleDateConfirm}
				onCancel={hideDatePicker}
			/>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		paddingHorizontal: 20,
		paddingTop: 30,
		paddingBottom: 10,
	},
	content: {
		flex: 1,
		paddingHorizontal: 20,
		paddingBottom: 30,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#FFE5BE',
		padding: 10,
		backgroundColor: '#FFC368',
		borderRadius: 5,
	},
	busName: {
		fontSize: 16,
		fontWeight: 'normal',
		maxWidth: 100,
		textAlign: 'left',
	},
	busTime: {
		fontSize: 16,
		fontWeight: 'normal',
		textAlign: 'left',
	},
	busFare: {
		fontSize: 16,
		fontWeight: 'normal',
		textAlign: 'left',
	},
	busRoute: {
		fontSize: 16,
		fontWeight: 'normal',
		maxWidth: 100,
		textAlign: 'left',
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	inputContainer: {
		width: '90%',
		marginBottom: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		marginBottom: 10,
		borderRadius: 8,
	},
	addButton: {
		backgroundColor: '#008CBA',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
		marginBottom: 10,
	},
	addButtonText: {
		color: '#fff',
		fontSize: 18,
	},
	cancelButtonText: {
		color: '#008CBA',
		fontSize: 18,
	},
	headerText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#885200',
	},
	datePickerButton: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		marginBottom: 10,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	datePickerButtonText: {
		fontSize: 16,
		color: '#333',
	},
});

export default NoteTakingPage;
