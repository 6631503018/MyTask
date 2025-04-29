import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const TaskDetailScreen = ({ route, navigation }) => {
  const { task, index, from } = route.params;

  const goToEdit = () => {
    navigation.navigate('AddTask', { task, index });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{task.name}</Text>

      <Text style={styles.label}>รายละเอียด</Text>
      <Text style={styles.text}>{task.description || '-'}</Text>

      <Text style={styles.label}>สถานที่</Text>
      <Text style={styles.text}>{task.location || '-'}</Text>

      <Text style={styles.label}>วันที่เริ่มต้น</Text>
      <Text style={styles.text}>{task.startDate} เวลา {task.startTime}</Text>

      <Text style={styles.label}>วันที่สิ้นสุด</Text>
      <Text style={styles.text}>{task.endDate} เวลา {task.endTime}</Text>

      <View style={styles.buttons}>
        {from !== 'completed' && (
          <Button title="✏️ แก้ไข" onPress={goToEdit} />
        )}
        <Button title="🔙 กลับ" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  label: { fontWeight: 'bold', marginTop: 15 },
  text: { fontSize: 16, marginTop: 5 },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});

export default TaskDetailScreen;
