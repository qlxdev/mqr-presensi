import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Axios from "axios";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const Notification = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={[
          styles.row,
          {
            paddingHorizontal: 15,
            borderStyle: "solid",
            borderTopColor: "#ccc",
            borderTopWidth: 1,
            // marginHorizontal: 15,
          },
        ]}
      >
        <View
          style={{
            // backgroundColor: "#ddd",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            <Ionicons
              name="md-checkmark-circle"
              size={24}
              color="green"
              style={{ marginRight: 10 }}
            />
            <Text>Berhasil melakukan absensi pada 12 Juni 2022 7:30:00</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.row,
          {
            paddingHorizontal: 15,
            borderStyle: "solid",
            borderTopColor: "#ccc",
            borderTopWidth: 1,
            // marginHorizontal: 15,
          },
        ]}
      >
        <View
          style={{
            // backgroundColor: "#ddd",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            <Ionicons
              name="md-checkmark-circle"
              size={24}
              color="green"
              style={{ marginRight: 10 }}
            />
            <Text>Berhasil melakukan absensi pada 11 Juni 2022 7:30:00</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.row,
          {
            paddingHorizontal: 15,
            borderStyle: "solid",
            borderTopColor: "#ccc",
            borderTopWidth: 1,
            // marginHorizontal: 15,
          },
        ]}
      >
        <View
          style={{
            // backgroundColor: "#ddd",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            <Ionicons
              name="md-checkmark-circle"
              size={24}
              color="green"
              style={{ marginRight: 10 }}
            />
            <Text>Berhasil melakukan absensi pada 10 Juni 2022 7:30:00</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingTop: 0,
    height: height,
  },
  row: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "red",
    height: 100,
    width: 200,
  },
});
