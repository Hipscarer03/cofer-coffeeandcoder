import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CODER_THEME, COFFEE_THEME } from "../constants/colorTheme";
import tw from "twrnc";
const Logo = () => {
  return (
    <View style={tw`relative flex bg-white items-center justify-center p-5`}>
      <Text
        style={tw`absolute right-5 text-10 text-[${COFFEE_THEME}] font-semibold  `}
        color={CODER_THEME}
      >
        Co
      </Text>
      <Text
        style={tw`absolute left-3 text-10 text-[${CODER_THEME}] font-semibold  `}
        color={COFFEE_THEME}
      >
        fer
      </Text>
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
});

export default Logo;
