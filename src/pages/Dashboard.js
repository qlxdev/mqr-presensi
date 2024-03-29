import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
  LogBox,
} from "react-native";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";

import IconNotif from "../assets/images/notification.png";
import IconHome from "../assets/images/home.png";
import IconScan from "../assets/images/scan.png";
import IconProfile from "../assets/images/profile.png";

const { width, height } = Dimensions.get("window");

const Dashboard = ({ navigation }) => {
  // set data
  const [error, setError] = useState(false);
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
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        Alert.alert(error);
      });
  }

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    fetchData();
  }, []);

  // console.log(data);

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

  if (loading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

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
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
            style={{
              // backgroundColor: "#425E9A",
              width: 50,
              height: 50,
              borderRadius: 50,
            }}
          >
            <Image source={IconNotif} style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
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
                  15:00
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* end card info */}
        {/* card History */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#606060",
            }}
          >
            Riwayat
          </Text>

          <Text onPress={() => navigation.navigate("History")}>Lihat >></Text>
        </View>
        {/* Item */}
        <FlatList
          data={data}
          keyExtractor={(item, index) => `key-${index}`}
          renderItem={({ item }) => (
            <>
              <RenderItem item={item} />
            </>
          )}
        />
        {/* end item */}

        <View style={{ height: 50 }} />
        {/* End card History */}
      </ScrollView>

      <View
        style={{
          height: 60,
          width: "100%",
          backgroundColor: "#fff",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Dashboard")}
          style={{ flex: 1, alignItems: "center" }}
        >
          <Image source={IconHome} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Scanner")}
          style={{ flex: 1, alignItems: "center" }}
        >
          <Image source={IconScan} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={{ flex: 1, alignItems: "center" }}
        >
          <Image source={IconProfile} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
      </View>
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
