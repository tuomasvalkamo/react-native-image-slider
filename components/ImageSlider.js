import React, { useRef } from 'react'
import { View, FlatList, ImageBackground, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function ImageSlider(props) {

  const flatlistRef = useRef(null)

  // Check if index is valid
  const validateIndex = (curIndex, toIndex) => {
    return toIndex < 0 || toIndex >= props.data.length ? curIndex : toIndex
  }

  // Iterable item for Flatlist
  const renderItem = ({ item, index }) => (
    <View style={[{ width: props.width, height: props.height }, styles.listItemContainer]}>

      <ImageBackground
        source={{ uri: item }}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Pressable onPress={() => {
          flatlistRef.current.scrollToIndex({
            animated: true,
            index: validateIndex(index, index - 1),
            viewPosition: 0.5
          })
        }}>
          <View style={styles.navButton}>
            <Ionicons name="ios-arrow-back" size={24} color="black" />
          </View>
        </Pressable>

        <Pressable onPress={() => {
          flatlistRef.current.scrollToIndex({
            animated: true,
            index: validateIndex(index, index + 1),
            viewPosition: 0.5
          })
        }}>
          <View style={styles.navButton}>
            <Ionicons name="ios-arrow-forward" size={24} color="black" />
          </View>
        </Pressable>

      </ImageBackground>

    </View>
  )

  return (
    <View style={[{ width: props.width }, styles.container]}>
      <FlatList
        data={props.data}
        style={styles.list}
        horizontal={true}
        getItemLayout={(items, index) => (
          { length: props.width, offset: props.width * index, index }
        )}
        ref={flatlistRef}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // width defined in render function
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemContainer: {
    // width defined in render function
    // height defined in render function
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  }
})

export default ImageSlider
