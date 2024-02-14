import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { godsName } from "../../utils/constant";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {godsName.map((god) => {
        return (
          <View>
            <View>
              <Image
                style={styles.img}
                source={{
                  uri: god.imageUrl,
                }}
              />
            </View>
            <View style={styles.godHeadContainer}>
              <Text style={styles.godHead}>{god.name}</Text>
            </View>
            {god.lyrics.map((lyric) => (
              <View>
                <Text style={styles.lyric}>{lyric}</Text>
              </View>
            ))}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  godHeadContainer: {
    marginVertical: 20,
  },
  godHead: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lyricContainer: {},
  lyric: {
    color: "red",
    fontWeight: "bold",
    paddingVertical: 8,
  },
  imgContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  img: {
    width: "auto",
    height: 300,
  },
});
