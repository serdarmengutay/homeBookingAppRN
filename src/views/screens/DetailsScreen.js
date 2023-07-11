import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import COLORS from "../../consts/colors";
import hotels from "../../consts/hotels";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsScreen = ({ navigation, route }) => {
  const item = route.params;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 20,
      }}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground source={item.image} style={styles.headerImage}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
          <Icon name="bookmark-border" color={COLORS.white} size={28} />
        </View>
      </ImageBackground>
      <View>
        <View style={styles.iconContainer}>
          <Icon name="place" color={COLORS.white} size={28} />
        </View>
        <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: COLORS.dark }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: COLORS.grey,
              marginTop: 5,
            }}
          >
            {item.location}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flexDirection: "row" }}>
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.grey} />
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: COLORS.dark,
                  marginLeft: 5,
                }}
              >
                4.0
              </Text>
            </View>
            <Text style={{ fontSize: 13, color: COLORS.grey }}>
              365 reviews
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ lineHeight: 20, color: COLORS.grey }}>
              {item.details}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: COLORS.dark }}
          >
            Price per night
          </Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: COLORS.grey,
                marginLeft: 5,
              }}
            >
              ${item.price}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: COLORS.grey,
                marginLeft: 5,
              }}
            >
              + breakfast
            </Text>
          </View>
        </View>
        <View
        style={styles.btn}
        >
          <Text style={{fontSize: 16, fontWeight: 'bold', color: COLORS.white}}>Book Now</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
  },
  header: {
    marginTop: 70,
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  iconContainer: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: COLORS.primary,
    right: 20,
    top: -30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  priceTag: {
    height: 40,
    alignItems: "center",
    paddingLeft: 20,
    marginLeft: 40,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
  },
  btn: {
    height: 55,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  }
});

export default DetailsScreen;
