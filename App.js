import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./Screen/SignIn";
import SignUp from "./Screen/SignUp";
import Home from "./Screen/Home";
import Welcome from "./Screen/Welcome";
import SignUpSup from "./Screen/SignUpSup";
import SignUpWork from "./Screen/SignUpWork";
import RegisterComplain from "./Screen/RegisterComplain";
import ComplainList from "./Screen/ComplainList";
import SingleComplain from "./Screen/SingleComplain";
import AdminScreen from "./Screen/Admin/AdminScreen";
import AddBranch from "./Screen/Admin/AddBranch";
import MainScreen from "./Screen/Department/MainScreen";

const AuthStack = createStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Home" component={Home} />
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerLeft: false }}
        />
        <AuthStack.Screen name="AdminScreen" component={AdminScreen} />
        <AuthStack.Screen name="AddBranch" component={AddBranch} />
        <AuthStack.Screen name="MainScreen" component={MainScreen} />
        <AuthStack.Screen
          name="RegisterComplain"
          component={RegisterComplain}
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "Sign Up Form",
            headerStyle: {
              backgroundColor: "grey",
            },
          }}
        />

        <AuthStack.Screen name="ComplainList" component={ComplainList} />
        <AuthStack.Screen name="SingleComplain" component={SingleComplain} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
