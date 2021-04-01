import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

import db from "../config";
import firebase from "firebase";

export default class SignUpLogin extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        return Alert.alert("Access To Mainframe Granted");
      })
      .catch((error) => {
        var errorr = error.code;
        var errorMessage = error.errorMessage;
        return Alert.alert(errorMessage);
      });
  };

  SignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then((response) => {
        return Alert.alert("User Created");
      })
      .catch(function (error) {
        var errorr = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.loginBox}
          placeholder={"Email Id"}
          keyboardType="email-address"
          onChangeText={(text) => {
            this.setState({
              username: text,
            });
          }}
        />
        <TextInput
          style={styles.loginBox}
          placeholder={"Password"}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        />

        <TouchableOpacity
          style={[styles.button, { marginBottom: 10 }]}
          onPress={() => {
            this.login(this.state.username, this.state.password);
          }}
        >
          <Text style={{ color: "#ff5722", fontSize: 18, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.SignUp(this.state.username, this.state.password);
          }}
        >
          <Text style={{ color: "#ff5722", fontSize: 18, fontWeight: "bold" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ff9800",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10,
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#ff8a65",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
})