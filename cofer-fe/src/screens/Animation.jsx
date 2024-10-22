import React, { useRef, useEffect } from "react";
import {
  Animated,
  Text,
  Easing,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import tw from "twrnc";

import { CODER_THEME, COFFEE_THEME } from "../constants/colorTheme";

const Logo = () => {
  // Animated values for text positions
  const coffeeText = useRef(new Animated.Value(-170)).current;
  const coderText = useRef(new Animated.Value(100)).current;

  // Start animations on component mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(coffeeText, {
        toValue: -130,
        duration: 3000,
        easing: Easing.bounce,
        useNativeDriver: false, // Layout properties don't support native driver
      }),
      Animated.timing(coderText, {
        toValue: -100,
        duration: 3000,
        easing: Easing.bounce,
        useNativeDriver: false,
      }),
    ]).start();
  }, [coffeeText, coderText]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View>
        <Animated.View style={[styles.coffeePosition, { left: coffeeText }]}>
          <Text style={[styles.sizeText, { color: "#4ac9ff" }]}>Coffee</Text>
        </Animated.View>

        <Animated.View style={[styles.coderPosition, { left: coderText }]}>
          <Text style={[styles.sizeText, { color: "#5271ff" }]}>Cod </Text>
          <Text style={[styles.sizeText, { color: "#5271ff" }]}>er </Text>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  coffeePosition: {
    position: "absolute",
    top: -30,
  },
  coderPosition: {
    display: "flex",
    position: "absolute",
    top: -30,
  },
  sizeText: {
    fontSize: 65,
    fontWeight: "900",
  },
});

export default Logo;
