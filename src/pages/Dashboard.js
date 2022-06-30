import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import UserAvatar from "../assets/images/user-avatar.png";

const { width, height } = Dimensions.get("window");

const Dashboard = () => {
  // set data
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");

  AsyncStorage.getItem("user", (error, result) => {
    if (result) {
      let user = JSON.parse(result);
      setNama(user.nama);
      setNip(user.nip);
    }
  });

  // async function fetchData() {
  //   try {
  //     const json = AsyncStorage.getItem("token");
  //     console.log(json);
  //   } catch (error) {
  //     setError(error.response.data);
  //     alert(error.toString());
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(data);

  return (
    <>
      <ScrollView style={styles.container}>
        {/* header */}
        <View
          style={[
            styles.row,
            {
              paddingHorizontal: 15,
              alignItems: "center",
            },
          ]}
        >
          <View
            style={{
              flex: 1,
              height: 70,
              justifyContent: "center",
            }}
          >
            <View>
              <View style={styles.row}>
                <Text style={{ color: "#606060", fontSize: 18 }}>Hai, </Text>
                <Text
                  style={{ color: "#606060", fontWeight: "bold", fontSize: 18 }}
                >
                  {nama}
                </Text>
              </View>
              <Text style={{ fontSize: 12, color: "#C4C4C4" }}>{nip}</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#425E9A",
              width: 50,
              height: 50,
              borderRadius: 50,
            }}
          >
            <Image source={UserAvatar} style={{ height: 50, width: 50 }} />
          </View>
        </View>
        {/* end header */}

        {/* card info */}
        <View style={[styles.row, { paddingHorizontal: 15, marginTop: 20 }]}>
          <View
            style={{
              backgroundColor: "#425E9A",
              flex: 1,
              borderRadius: 10,
            }}
          >
            <View style={[styles.row, { alignItems: "center" }]}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 100,
                }}
              >
                <Text style={{ fontSize: 14, color: "#fff" }}>Jam Masuk</Text>
                <Text
                  style={{ fontSize: 30, fontWeight: "bold", color: "#fff" }}
                >
                  07:00
                </Text>
              </View>
              <View style={{ height: 80, width: 1, backgroundColor: "#fff" }} />
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 100,
                }}
              >
                <Text style={{ fontSize: 14, color: "#fff" }}>Jam Pulang</Text>
                <Text
                  style={{ fontSize: 30, fontWeight: "bold", color: "#fff" }}
                >
                  16:00
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* end card info */}
        {/* card History */}

        <Text
          style={{
            marginVertical: 20,
            marginHorizontal: 15,
            fontSize: 18,
            fontWeight: "bold",
            color: "#606060",
          }}
        >
          Riwayat
        </Text>
        <View style={[styles.row, { paddingHorizontal: 15 }]}>
          <View style={{ backgroundColor: "red", height: 100, flex: 1 }}></View>
        </View>
        {/* End card History */}
      </ScrollView>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingTop: 50,
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
