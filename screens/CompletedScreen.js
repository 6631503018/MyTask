import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const CompletedScreen = ({ navigation }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const loadCompleted = async () => {
        const stored = await AsyncStorage.getItem('COMPLETED_TASKS');
        let list = stored ? JSON.parse(stored) : [];
        list.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        setCompletedTasks(list);
      };
      loadCompleted();
    }, [])
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => navigation.navigate('TaskDetail', { task: item, from: 'completed' })}
    >
      <Text style={styles.taskTitle}>{item.name}</Text>
      <Text>{item.startDate} {item.startTime} → {item.endDate} {item.endTime}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Tasks</Text>
      <FlatList data={completedTasks} keyExtractor={(item, index) => index.toString()} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  taskItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskTitle: { fontWeight: 'bold', fontSize: 16 },
});

export default CompletedScreen;
