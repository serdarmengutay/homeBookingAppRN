import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../consts/colors'
import hotels from '../../consts/hotels'

const HomeScreen = ({ navigation }) => {
    const categories = ['All', 'Popular', 'Top Rated', 'Featured', 'Luxury']
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
