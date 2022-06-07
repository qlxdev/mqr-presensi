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
} from "react-native";
import React from "react";
import Logo from "../assets/images/ion_finger-print-outline.png";

const { width, height } = Dimensions.get("window");

const Login = () => {
  const [nip, setNip] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
          onChangeText={setNip}
          placeholder="Masukkan NIP"
          value={nip}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Masukkan Password"
          underlineColorAndroid="transparent"
          keyboardType="visible-password"
        />

        <View style={{ height: 30 }} />

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.btnText}>Masuk ke Aplikasi</Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", marginTop: 60 }}>
          <Text>App v.1.1</Text>
        </View>
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
