```javascript
// FlatListSolution.js
import React, { useMemo } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const Item = React.memo(({ item }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  </View>
));

const data = useMemo(() => Array.from({ length: 1000 }).map((_, i) => ({ title: `Item ${i}` })), []);

const FlatListSolution = () => {
  const renderItem = ({ item }) => <Item item={item} key={item.title}/>;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

export default FlatListSolution;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
```