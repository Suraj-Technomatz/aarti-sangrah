import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { godsName } from "../../utils";

export default function HomeScreen({ navigation }) {
  const onHandlePress = (id) => {
    navigation.navigate("आरती", {
      id,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {godsName.map((godN) => (
        <View key={godN?.id}>
          <TouchableOpacity
            onPress={() => onHandlePress(godN?.id)}
            style={styles.containerForList}
          >
            <View>
              <Image
                style={styles.img}
                source={{
                  uri: godN.imageUrl,
                }}
              />
            </View>
            <View>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, marginLeft: 10 }}
              >
                {godN.name}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  containerForList: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  img: {
    width: 50,
    height: 50,
  },
});
