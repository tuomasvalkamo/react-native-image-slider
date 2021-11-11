import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import ImageSlider from './components/ImageSlider';

export default function App() {

  const images = [
    'https://picsum.photos/400/600',
    'https://picsum.photos/300/500',
    'https://picsum.photos/350/550'
  ]

  return (
    <SafeAreaView style={styles.container}>
      <ImageSlider data={images} width={350} height={350} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
});
