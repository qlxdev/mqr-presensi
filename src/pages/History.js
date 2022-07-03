import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const History = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");
  const [token, setToken] = useState("");

  AsyncStorage.getItem("user", (error, result) => {
    if (result) {
      let user = JSON.parse(result);
      setNama(user.nama);
      setNip(user.nip);
      setToken(user.token);
    }
  });

  async function fetchData() {
    const API_URL = "https://yogaputrautama.my.id/api/qrcode/v1/absensi";
    const headers = {
      Authorization: token,
    };
    Axios.get(API_URL, { headers })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        Alert.alert(error);
      });
  }

  const RenderItem = ({ item }) => {
    if (item.status == 1) {
      return (
        <>
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
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "700" }}>{nama} / </Text>
                    <Text style={{ fontWeight: "100", color: "#555" }}>
                      {item.nip}
                    </Text>
                  </View>
                  <Text>{item.jam_masuk}</Text>
                </View>
                <View
                  style={{
                    width: 100,
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="md-checkmark-circle"
                    size={24}
                    color="green"
                    style={{ marginRight: 10 }}
                  />
                  <Text>Hadir</Text>
                </View>
              </View>
            </View>
          </View>
        </>
      );
    }

    if (item.status == 0) {
      return (
        <>
          <View
            style={[
              styles.row,
              {
                paddingHorizontal: 15,
                borderStyle: "solid",
                borderTopColor: "#ccc",
                borderTopWidth: 1,
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
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "700" }}>{nama} / </Text>
                    <Text style={{ fontWeight: "100", color: "#555" }}>
                      {item.nip}
                    </Text>
                  </View>
                  <Text>{item.jam_masuk}</Text>
                </View>
                <View
                  style={{
                    width: 100,
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="md-alert-circle"
                    size={24}
                    color="orange"
                    style={{ marginRight: 10 }}
                  />
                  <Text>Terlambat</Text>
                </View>
              </View>
            </View>
          </View>
        </>
      );
    }

    if (item.status == 2) {
      return (
        <>
          <View
            style={[
              styles.row,
              {
                paddingHorizontal: 15,
                borderStyle: "solid",
                borderTopColor: "#ccc",
                borderTopWidth: 1,
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
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "700" }}>{nama} / </Text>
                    <Text style={{ fontWeight: "100", color: "#555" }}>
                      {item.nip}
                    </Text>
                  </View>
                  <Text>{item.jam_masuk}</Text>
                </View>
                <View
                  style={{
                    width: 100,
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="md-close-circle"
                    size={24}
                    color="red"
                    style={{ marginRight: 10 }}
                  />
                  <Text>Absen</Text>
                </View>
              </View>
            </View>
          </View>
        </>
      );
    }
  };

  useEffect(() => {
    // LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }, index) => (
          <>
            <RenderItem item={item} key={index} />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default History;

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
