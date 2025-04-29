import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      const loadTasks = async () => {
        const storedTasks = await AsyncStorage.getItem('TASKS');
        let taskList = storedTasks ? JSON.parse(storedTasks) : [];
        taskList.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        setTasks(taskList);
      };
      loadTasks();
    }, [])
  );

  const completeTask = async (index) => {
    const taskToComplete = tasks[index];
    let updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    const storedCompleted = await AsyncStorage.getItem('COMPLETED_TASKS');
    let completedTasks = storedCompleted ? JSON.parse(storedCompleted) : [];
    completedTasks.push(taskToComplete);
    await AsyncStorage.setItem('TASKS', JSON.stringify(updatedTasks));
    await AsyncStorage.setItem('COMPLETED_TASKS', JSON.stringify(completedTasks));
    setTasks(updatedTasks);
  };

  const deleteTask = async (index) => {
    Alert.alert('Delete Task', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          let updatedTasks = [...tasks];
          updatedTasks.splice(index, 1);
          await AsyncStorage.setItem('TASKS', JSON.stringify(updatedTasks));
          setTasks(updatedTasks);
        },
      },
    ]);
  };

  const editTask = (index) => {
    navigation.navigate('AddTask', { task: tasks[index], index });
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTaskItem = ({ item, index }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.navigate('TaskDetail', { task: item, index })}
      >
        <Text style={styles.taskTitle}>{item.name}</Text>
        <Text>{item.startDate} {item.startTime} → {item.endDate} {item.endTime}</Text>
      </TouchableOpacity>
      <View style={styles.buttons}>
        <Button title="✏️" onPress={() => editTask(index)} />
        <Button title="🗑️" onPress={() => deleteTask(index)} />
        <Button title="✅" onPress={() => completeTask(index)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search tasks..."
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTaskItem}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddTask')}
      >
        <Text style={styles.addButtonText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskTitle: { fontWeight: 'bold', fontSize: 16 },
  buttons: { flexDirection: 'row', gap: 5 },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#007AFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: { color: '#fff', fontSize: 30 },
});

export default HomeScreen;
