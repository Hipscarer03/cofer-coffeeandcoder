import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { CODER_THEME, COFFEE_THEME } from "../constants/colorTheme";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../components/Logo";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    if (name && email) {
      Alert.alert("Success", `Welcome, ${name}!`);
    } else {
      Alert.alert("Error", "Please fill out both fields.");
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.loginPrompt}>Already Registered? Log in here.</Text>
      <Text style={styles.label}>NAME</Text>
      <TextInput
        style={styles.input}
        placeholder="Hiep"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>EMAIL</Text>
      <TextInput
        style={styles.input}
        placeholder="hiep@gmail.com"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <LinearGradient
          colors={[CODER_THEME, COFFEE_THEME]}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3498db",
    marginBottom: 10,
  },
  loginPrompt: {
    color: "#888",
    marginBottom: 30,
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 10,
    color: "#444",
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    width: 300,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    color: "#333",
  },
  button: {
    width: "100%",
    marginTop: 10,
  },
  gradient: {
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    width: 300,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
