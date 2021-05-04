import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { Input, Button } from "react-native-elements";

import axios from "axios";

const SignUp = (props) => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [type, settype] = useState("Public");

  const submithandler = () => {
    console.log("object");
    axios
      .post(
        `http://192.168.10.4:3000/user/?name=${name}&password=${password}&role=${type}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Your Account</Text>

      <Input
        label="Name"
        value={name}
        onChangeText={(text) => setname(text)}
        style={styles.input}
      />

      <Input
        label="Password"
        value={password}
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(text) => setpassword(text)}
      />

      <View style={styles.mainrd}>
        <View style={styles.rd1}>
          <RadioButton
            value="Public"
            status={type === "Public" ? "checked" : "unchecked"}
            onPress={() => settype("Public")}
          />
          <Text> Public </Text>
        </View>
        <View style={styles.rd}>
          <RadioButton
            value="Department"
            status={type === "Department" ? "checked" : "unchecked"}
            onPress={() => settype("Department")}
          />
          <Text> Department </Text>
        </View>
      </View>

      <Button
        buttonStyle={styles.btn}
        mode="Solid"
        title=" Sign Up!"
        titlestyle={{ color: "red" }}
        onPress={submithandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  mainrd: {
    marginLeft: 150,
  },

  btn: {
    marginTop: 60,
    marginLeft: 100,
    backgroundColor: "grey",
    width: 200,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
  },
  heading: {
    height: 50,
    fontSize: 28,
    paddingLeft: 77,
    paddingTop: 10,
    marginTop: 19,
  },
  menuTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 25,
  },
  m1: {
    width: 205,
    height: 50,
    borderWidth: 1,
  },
  m2: {
    borderWidth: 1,
    height: 50,
    width: 209,
  },
  menuText: {
    textAlign: "center",
    fontSize: 20,
    paddingTop: 10,
  },
});

export default SignUp;
