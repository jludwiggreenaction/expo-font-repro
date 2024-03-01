import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default function App() {
  const [showOtherText, setShowOtherText] = useState(false);

  useEffect(() => {
    (async () => {
      await sleep(15_000);
      setShowOtherText(true);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>This is some text.</Text>
      {showOtherText && <Text style={{ fontFamily: 'Roboto', fontSize: 20 }}>This is some text.</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
