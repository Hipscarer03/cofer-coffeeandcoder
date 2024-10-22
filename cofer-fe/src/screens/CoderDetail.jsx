import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

const CoderDetail = () => {
  return (
    <View style={tw`flex-1 bg-white p-5`}>
      <View style={tw`flex-row justify-between items-center mb-5`}>
        <Ionicons name="menu-outline" size={24} color="#4A90E2" />
        <Text style={tw`text-xl font-bold text-[#4A90E2]`}>Cofer</Text>
        <Ionicons name="notifications-outline" size={24} color="#4A90E2" />
      </View>

      <Image
        source={{ uri: "https://example.com/profile-image.jpg" }}
        style={tw`w-30 h-30 rounded-full self-center mb-5`}
      />

      <Text style={tw`text-2xl font-bold text-center`}>$Joe</Text>
      <Text style={tw`text-lg text-gray-500 text-center mb-2`}>25</Text>

      <Text style={tw`text-center mb-5 text-gray-700`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <View style={tw`flex-row justify-around mb-5`}>
        {["Matches", "Likes", "Views"].map((label, index) => (
          <View key={label} style={tw`items-center`}>
            <Text style={tw`text-lg font-bold`}>
              {["308", "12k", "1.2m"][index]}
            </Text>
            <Text style={tw`text-gray-500`}>{label}</Text>
          </View>
        ))}
      </View>

      <View style={tw`flex-row justify-between`}>
        <TouchableOpacity
          style={tw`flex-1 py-3 px-7 rounded-full bg-[#FF3B30] mr-2`}
        >
          <Text style={tw`text-white font-bold text-center`}>Pass</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-1 py-3 px-7 rounded-full bg-[#4CD964] ml-2`}
        >
          <Text style={tw`text-white font-bold text-center`}>Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoderDetail;
