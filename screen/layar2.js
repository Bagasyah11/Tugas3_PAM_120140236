import React from "react";
import { FlatList,TouchableOpacity,StyleSheet,Text,View} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const list = [
  {
    id: "1",
    pesawat: "Lampung Air",
    asalkota: "Lampung",
    tujuankota: "Palembang",
    waktuberangkat: "6 Nov 2022, 10:00",
    waktudatang: "7 Nov 2022, 09:00",
  },
  {
    id: "2",
    pesawat: "Garuda",
    asalkota: "Jambi",
    tujuankota: "Bengkulu",
    waktuberangkat: "6 Nov 2022, 10:00",
    waktudatang: "6 Nov 2022, 09:00",
  },
  {
    id: "3",
    pesawat: "Garuda",
    asalkota: "Jakarta",
    tujuankota: "Kalimantan",
    waktuberangkat: "6 Nov 2022, 10:00",
    waktudatang: "9 Nov 2022, 09:00",
  },
  {
    id: "4",
    pesawat: "Lion Air",
    asalkota: "Palembang",
    tujuankota: "Lampung",
    waktuberangkat: "6 Nov 2022, 10:00",
    waktudatang: "6 Nov 2022, 09:00",
  },
  {
    id: "5",
    pesawat: "Garuda",
    asalkota: "Yogyakarta",
    tujuankota: "Lampung",
    waktuberangkat: "6 Nov 2022, 10:00",
    waktudatang: "7 Nov 2022, 09:00",
  }
];
const Layar2 = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>
        {item.asalkota} - {item.tujuankota}
      </Text>
      <View style={styles.detailContainer}>
        <View style={styles.airlineContainer}>
          <FontAwesome name="plane" size={28} color="green" />
          <Text style={styles.pesawat}>{item.pesawat}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            <FontAwesome5 name="plane-departure" size={15} color="green" />
            {item.waktuberangkat}
          </Text>
          <Text style={styles.date}>
            <FontAwesome5 name="plane-arrival" size={15} color="green" />
            {item.waktudatang}
          </Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.pop()}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>TiketKu.id</Text>
          <Feather name="user" size={30} color="white" />
        </View>
        <Text style={styles.keterangan}>Hasil Pencarian Penerbangan</Text>
        <Text style={styles.keterangan}>(Tanggal Keberangkatan)</Text>
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.copyright}>
        Copyright Bagasyah Kusetyoutomo D - 120140236
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    marginTop: 20,
  },
  header: {
    width: "100%",
    backgroundColor: "green",
    padding: 20,
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontSize: 30,
  },iconContainer: {
    backgroundColor: "red",
  },
  dateContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    alignItems: "space-between",
  },
  airline: {
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  date: {
    color: "black",
  },
  keterangan: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "white",
    padding: 17,
    marginVertical: 7,
    marginHorizontal: 10,
    borderRadius: 5,
    flex: 1,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  airlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  copyright: {
    color: "white",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
  },
});

export default Layar2;
