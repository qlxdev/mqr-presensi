import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import IconAvatar from "../assets/images/user-avatar.png";

const { width, height } = Dimensions.get("window");

const Profile = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("user", (error, result) => {
      if (result) {
        let user = JSON.parse(result);
        setData(user);
        console.log(user);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image style={{ marginTop: 10 }} source={IconAvatar} />
        <Text style={{ marginVertical: 20, fontSize: 18 }}>{data.nama}</Text>
      </View>

      <View
        style={[
          styles.row,
          {
            backgroundColor: "#425E9A",
            paddingHorizontal: 15,
            marginTop: 10,
            borderColor: "#425E9A",
            borderWidth: 1,
            marginHorizontal: 15,
            paddingVertical: 15,
            borderRadius: 10,
          },
        ]}
      >
        <View style={{ width: 100 }}>
          <Text style={{ color: "#fff" }}>NIP</Text>
          <Text style={{ color: "#fff" }}>Nama</Text>
          <Text style={{ color: "#fff" }}>TTL</Text>
          <Text style={{ color: "#fff" }}>Agama</Text>
          <Text style={{ color: "#fff" }}>Email</Text>
          <Text style={{ color: "#fff" }}>Phone</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#fff" }}>{data.nip}</Text>
          <Text style={{ color: "#fff" }}>{data.nama}</Text>
          <Text style={{ color: "#fff" }}>{data.ttl}</Text>
          <Text style={{ color: "#fff" }}>{data.agama}</Text>
          <Text style={{ color: "#fff" }}>{data.email}</Text>
          <Text style={{ color: "#fff" }}>{data.phone}</Text>
        </View>
      </View>

      {/* Navigasi */}
      <TouchableOpacity
        style={{
          marginHorizontal: 15,
          marginTop: 20,
          backgroundColor: "#cccc",
          paddingVertical: 20,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ fontSize: 16 }}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingTop: 10,
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
