import { React, useState } from "react";
import { Image,TextInput,StyleSheet,TouchableOpacity,Text,View} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Layar1 = ({ navigation }) => {
const [departure, setDeparture] = useState("");
const [destination, setDestination] = useState("");
const [date, setDate] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={30} color="white" />
        <Text style={styles.title}>TiketKu.id</Text>
        <Feather name="user" size={30} color="white" />
      </View>
      <View style={styles.UIContainer}>
        <Text>Lokasi Keberangkatan</Text>
        <View style={styles.textInputContainer}>
          {<Image
              style={styles.icon}
              source={require("../assets/image1.png")}
            />
          }<TextInput
            style={styles.input}
            onChangeText={setDeparture}
            value={departure}
            placeholder="Masukkan Lokasi Keberangkatan"
            selectTextOnFocus={false}
          />
        </View>
        <Text>Lokasi Tujuan</Text>
        <View style={styles.textInputContainer}>
          {<Image
              style={styles.icon}
              source={require("../assets/image2.png")}
            />
          }<TextInput
            style={styles.input}
            onChangeText={setDestination}
            value={destination}
            placeholder="Masukkan Lokasi Tujuan"
          />
        </View>
        <Text>Tanggal Keberangkatan</Text>
        <View style={styles.textInputContainer}>
          <MaterialIcons name="date-range" size={24} color="green" />
          <TextInput
            style={styles.input}
            onChangeText={setDate}
            value={date}
            placeholder="Masukkan Tanggal Keberangkatan"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Main Screen")}>
          <Text style={styles.button}>Cari</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.copyright}>
          copyright Bagasyah Kusetyoutomo D - 120140236
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    paddingHorizontal: 110,
    borderRadius: 5,
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "orangered",
    padding: 10,
    borderWidth: 1,
    borderColor: "orangered",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    
  },
  footer: {
    marginTop: 230,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingLeft: 10,
    borderWidth: 1,
    marginBottom: 7,
    marginTop: 5,
    borderRadius: 3,
    borderColor: "black",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 30,
    justifyContent: "space-between",
  },
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    height: 50,
    width: "100%",
    padding: 10,
    borderRadius: 3,
  },
  title: {
    color: "white",
    fontSize: 35,
  },
  UIContainer: {
    backgroundColor: "white",
    margin: "auto",
    width: "80%",
    padding: 20,
    borderRadius: 10,
  },
  copyright: {
    color: "white",
  },
});
export default Layar1;
