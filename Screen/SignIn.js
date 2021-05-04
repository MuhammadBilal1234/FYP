import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Input, Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Home from "./Home";
import AdminScreen from "./Admin/AdminScreen";
import MainScreen from "./Department/MainScreen";

const SignIn = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const onSubmitHandler = async () => {
    // Login Log On This

    if (username === "admin" && password === "admin") {
      props.navigation.navigate("AdminScreen");
      return;
    }

    try {
      const res = await axios.post(
        `http://192.168.10.4:3000/user/signin/?name=${username}&password=${password}`
      );
      console.log(res);
      if (res.data.token) {
        await AsyncStorage.setItem("@token", res.data.token);
        if (res.data.searchUser.role === "Public") {
          props.navigation.navigate("Welcome");
        } else if (res.data.searchUser.role === "Department") {
          if (res.data.searchUser.permission) {
            props.navigation.navigate("MainScreen");
          } else {
            alert("Permission Denied");
          }
        }
      } else {
        alert("Invalid User");
      }
    } catch (err) {}
  };

  return (
    <View>
      <Text style={styles.heading}>Sign In To Your Account</Text>
      <View style={styles.container}>
        <Input
          label="Username"
          value={username}
          onChangeText={(text) => setusername(text)}
          style={styles.input}
        />
        <Input
          label="Password"
          value={password}
          onChangeText={(text) => setpassword(text)}
          style={styles.input}
        />

        <Button
          buttonStyle={styles.btn}
          mode="Solid"
          title=" Sign In!"
          titlestyle={{ color: "red" }}
          onPress={onSubmitHandler}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  btn: {
    marginLeft: 100,
    marginTop: 20,
    backgroundColor: "grey",
    width: 200,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
  },
  heading: {
    marginTop: 30,
    height: 50,
    fontSize: 28,
    paddingLeft: 60,
    paddingTop: 10,
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
