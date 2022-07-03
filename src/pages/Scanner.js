import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Axios from "axios";

export default function App({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    const API_URL = "https://yogaputrautama.my.id/api/qrcode/v1/presensi";
    Axios.post(API_URL, {
      qr_code: data,
    })
      .then((response) => {
        // if (response.data == "") {
        //   Alert.alert("NIP / Password salah!");
        // } else {
        //   try {
        //     AsyncStorage.setItem("user", JSON.stringify(response.data.data));
        //   } catch (error) {
        //     console.log(error);
        //   }
        //   navigation.navigate("Dashboard");
        // }
      })
      .catch(function (error) {
        Alert.alert(error);
      });

    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{
          padding: 200,
          borderRadius: 100,
          backgroundColor: "#000000",
          marginTop: 50,
        }}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
});
