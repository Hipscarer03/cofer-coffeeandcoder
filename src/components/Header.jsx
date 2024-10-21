import React from "react";
import { View, Switch, TouchableOpacity, SafeAreaView } from "react-native";
import Logo from "../components/Logo";
import { User } from "lucide-react-native";
import tw from "twrnc";

const Header = () => {
  return (
    <View style={tw`flex-1 bg-white mb-6`}>
      <View style={tw`flex-row justify-between items-center p-4`}>
        <Switch></Switch>
        <Logo />
        <TouchableOpacity>
          <User size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
