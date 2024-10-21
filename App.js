import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Animation from "./src/screens/Animation";
import LoginSreen from "./src/screens/Login";
import CoffeeScreen from "./src/screens/CoffeeScreen";
import CoderScreen from "./src/screens/CoderScreen";
import CoderDetail from "./src/screens/CoderDetail";
import DrinkDetail from "./src/screens/DrinkDetail";

export default function App() {
  return (
    <View style={styles.container}>
      <DrinkDetail />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // backgroundColor: linear - gradient("#4ac9ff", "#5271ff"),
    alignItems: "center",
    justifyContent: "center",
  },
});
