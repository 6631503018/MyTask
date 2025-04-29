import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const CalendarScreen = ({ navigation }) => {
  const [items, setItems] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      const loadTasksToCalendar = async () => {
        try {
          const storedTasks = await AsyncStorage.getItem('TASKS');
          const taskList = storedTasks ? JSON.parse(storedTasks) : [];

          const newItems = {};
          const today = new Date();

          for (let i = -7; i < 30; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const key = date.toISOString().split('T')[0];
            newItems[key] = [];
          }

          taskList.forEach(task => {
            const start = new Date(task.startDate);
            const end = new Date(task.endDate);

            for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
              const key = d.toISOString().split('T')[0];
              if (!newItems[key]) newItems[key] = [];
              newItems[key].push({ ...task });
            }
          });

          setItems(newItems);
        } catch (e) {
          console.error('Failed to load calendar items:', e);
        }
      };

      loadTasksToCalendar();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        selected={new Date().toISOString().split('T')[0]}
        renderItem={(item) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TaskDetail', { task: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.startTime} - {item.endTime}</Text>
          </TouchableOpacity>
        )}
        renderEmptyDate={() => (
          <View style={styles.empty}>
            <Text>ไม่มีงานวันนี้</Text>
          </View>
        )}
        showOnlySelectedDayItems={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    marginRight: 10,
    marginTop: 17,
    borderRadius: 8,
    elevation: 2,
  },
  name: { fontWeight: 'bold' },
  time: { color: '#555' },
  empty: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginTop: 17,
    marginRight: 10,
  },
});

export default CalendarScreen;
