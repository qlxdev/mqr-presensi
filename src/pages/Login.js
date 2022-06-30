import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Alert,
} from "react-native";
import React from "react";
import Logo from "../assets/images/ion_finger-print-outline.png";
import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const [nip, setNip] = React.useState("195712101982111001");
  const [password, setPassword] = React.useState("19571");

  const doUserLogin = async function () {
    const API_URL = "https://muzayin.my.id/api/qrcode/v1/login";
    return Axios.post(API_URL, {
      username: nip,
      password: password,
    }).then((response) => {
      if (response.data == "") {
        Alert.alert("NIP / Password salah!");
      } else {
        try {
          AsyncStorage.setItem("user", JSON.stringify(response.data));
        } catch (error) {
          console.log(error);
        }
        navigation.navigate("Dashboard");
      }
    });
  };

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ height: 50 }} />
        <View
          style={{
            height: 100,
            alignItems: "center",
            marginVertical: 50,
          }}
        >
          <Image source={Logo} />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Masukkan NIP"
          value={nip}
          keyboardType="numeric"
          onChangeText={(text) => setNip(text)}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Masukkan Password"
          underlineColorAndroid="transparent"
          keyboardType="visible-password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={{ height: 30 }} />

        <TouchableOpacity style={styles.btnLogin} onPress={() => doUserLogin()}>
          <Text style={styles.btnText}>Masuk ke Aplikasi</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

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
    justifyContent: "center",
  },

  card: {
    backgroundColor: "red",
    height: 100,
    width: 200,
  },
  input: {
    height: 60,
    margin: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#F4F4F4",
  },
  bgRed: { backgroundColor: "red" },
  bgBlue: { backgroundColor: "blue" },
  txtWhite: { color: "#ffffff" },
  btnLogin: {
    backgroundColor: "#2742A0",
    marginHorizontal: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    height: 60,
    marginBottom: 60,
  },
  btnText: { color: "#ffffff", fontSize: 14, fontWeight: "bold" },
});

export default Login;
