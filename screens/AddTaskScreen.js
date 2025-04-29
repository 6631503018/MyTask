import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTaskScreen = ({ navigation, route }) => {
  const isEdit = route.params?.task !== undefined;
  const taskIndex = route.params?.index;
  const existingTask = route.params?.task;

  const [taskName, setTaskName] = useState(existingTask?.name || '');
  const [description, setDescription] = useState(existingTask?.description || '');
  const [location, setLocation] = useState(existingTask?.location || '');
  const [startDate, setStartDate] = useState(existingTask ? new Date(existingTask.startDate) : new Date());
  const [endDate, setEndDate] = useState(existingTask ? new Date(existingTask.endDate) : new Date());
  const [startTime, setStartTime] = useState(existingTask ? new Date(`${existingTask.startDate}T${existingTask.startTime}`) : new Date());
  const [endTime, setEndTime] = useState(existingTask ? new Date(`${existingTask.endDate}T${existingTask.endTime}`) : new Date());
  const [showPicker, setShowPicker] = useState({ field: null, show: false });

  const onChange = (event, selectedDate) => {
    if (!selectedDate) return;
    const field = showPicker.field;
    if (field === 'startDate') setStartDate(selectedDate);
    if (field === 'endDate') setEndDate(selectedDate);
    if (field === 'startTime') setStartTime(selectedDate);
    if (field === 'endTime') setEndTime(selectedDate);
    setShowPicker({ field: null, show: false });
  };

  const saveTask = async () => {
    const newTask = {
      name: taskName,
      description,
      location,
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      startTime: startTime.toTimeString().slice(0, 5),
      endTime: endTime.toTimeString().slice(0, 5),
    };

    const storedTasks = await AsyncStorage.getItem('TASKS');
    let tasks = storedTasks ? JSON.parse(storedTasks) : [];

    if (isEdit) {
      tasks[taskIndex] = newTask;
    } else {
      tasks.push(newTask);
    }

    await AsyncStorage.setItem('TASKS', JSON.stringify(tasks));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ชื่อ Task</Text>
      <TextInput style={styles.input} value={taskName} onChangeText={setTaskName} placeholder="Task Name" />

      <Text style={styles.label}>รายละเอียด</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Description" multiline />

      <Text style={styles.label}>สถานที่</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} placeholder="Location" />

      <Text style={styles.label}>วันเริ่มต้น</Text>
      <Button title={startDate.toDateString()} onPress={() => setShowPicker({ field: 'startDate', show: true })} />

      <Text style={styles.label}>วันสิ้นสุด</Text>
      <Button title={endDate.toDateString()} onPress={() => setShowPicker({ field: 'endDate', show: true })} />

      <Text style={styles.label}>เวลาเริ่มต้น</Text>
      <Button title={startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} onPress={() => setShowPicker({ field: 'startTime', show: true })} />

      <Text style={styles.label}>เวลาสิ้นสุด</Text>
      <Button title={endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} onPress={() => setShowPicker({ field: 'endTime', show: true })} />

      <Button title={isEdit ? '✏️ Update Task' : '💾 Save Task'} onPress={saveTask} />

      {showPicker.show && (
        <DateTimePicker
          value={new Date()}
          mode={showPicker.field.includes('Time') ? 'time' : 'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { marginTop: 16, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
});

export default AddTaskScreen;
