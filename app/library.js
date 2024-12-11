import { View, Text, FlatList, StyleSheet } from 'react-native';

const sampleLibrary = [
  { id: '1', title: 'Math' },
  { id: '2', title: 'Science' },
  { id: '3', title: 'History' },
];

export default function Library() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>
      <FlatList
        data={sampleLibrary}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    elevation: 3,
    flex: 4
  },
  cardText: {
    fontSize: 18,
  },
});
