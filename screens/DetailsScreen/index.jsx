import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { godsName } from "../../utils/constant";
import BackgroundImage from "../../components/ImageBackground";

export default function DetailsScreen({ route }) {
  const { id } = route.params;

  const getData = () => {
    return godsName.filter((god) => god.id === id);
  };
  const image = require("../../assets/gradiant.jpg");
  return (
    <BackgroundImage source={image}>
      <SafeAreaView style={styles.detailsContainer}>
        <ScrollView>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {getData().map((god) => {
              return (
                <View key={god.id}>
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
        </ScrollView>
      </SafeAreaView>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginVertical: 20,
    padding: 20,
  },
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
