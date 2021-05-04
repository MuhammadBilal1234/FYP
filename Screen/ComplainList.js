import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ComplainStatus from "./ComplainStatus";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const ComplainList = () => {
  const renderItem = ({ item }) => <ComplainStatus data={item} />;
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const authToken = await AsyncStorage.getItem("@token");

      const res = await axios(
        `http://192.168.10.4:3000/user/usercomplain?token=${authToken}`
      );
      setData(res.data);
    };
    fetchData();
  }, []);
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.imageName}
      />
    </View>
  );
};

export default ComplainList;
