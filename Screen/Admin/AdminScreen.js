import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, FlatList, Button } from "react-native";
import axios from "axios";
import NewRequests from "./NewRequests";

const AdminScreen = (props) => {
  const renderItem = ({ item }) => <NewRequests data={item} />;
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`http://192.168.10.4:3000/user/newreq`);
      console.log(res.data);
      setdata(res.data);
    };
    fetchData();
  }, []);
  return (
    <ScrollView>
      <Text style={styles.Heading}>Add New Branch On Map</Text>
      <Button
        onPress={() => props.navigation.navigate("AddBranch")}
        title="Add Branch"
        color="#841584"
      />
      <Text style={styles.Heading}> New Requests </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Heading: {
    textAlign: "center",
    fontSize: 26,
    marginBottom: 20,
  },
});

export default AdminScreen;
