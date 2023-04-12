import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.boldHeader}>WorkoutLogger</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 40,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boldHeader: {
        fontWeight: 'bold',
        fontSize: 25
    }
})