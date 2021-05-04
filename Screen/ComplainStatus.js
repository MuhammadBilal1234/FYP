import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const ComplainStatus = ({ data }) => {
  return (
    <Card>
      <Card.Title>CELL PHONE COMPLAIN </Card.Title>
      <Card.Divider />
      <Card.Image
      //source={require(`C:/Users/hyperlink/Desktop/React Native/Muncipal-Watch API/uploads/${data.imageName}`)}
      ></Card.Image>
      <View>
        <Text style={{ marginBottom: 10 }}>{data.message}</Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: "green",
          }}
          title={data.status}
          onPress={() => navigation.navigate("SingleComplain")}
        />
      </View>
    </Card>
  );
};

export default ComplainStatus;
