import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Search, Heart, Clock, Flame, Settings } from "lucide-react-native";
import Header from "../components/Header";
import tw from "twrnc";

const CoffeeScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Header />

      <View style={tw`flex-row items-center bg-gray-100 rounded-lg mx-4 px-3`}>
        <Search size={20} color="#999" style={tw`mr-2`} />
        <TextInput
          style={tw`flex-1 h-10`}
          placeholder="Search"
          placeholderTextColor="#999"
        />
      </View>

      <View style={tw`flex-row justify-between items-center px-4 my-4`}>
        <TouchableOpacity
          style={tw`flex-row items-center bg-gray-200 rounded-full py-1.5 px-3`}
        >
          <Heart size={16} color="#3B82F6" />
          <Text style={tw`ml-1 text-blue-500`}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row items-center bg-gray-200 rounded-full py-1.5 px-3`}
        >
          <Clock size={16} color="#3B82F6" />
          <Text style={tw`ml-1 text-blue-500`}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row items-center bg-gray-200 rounded-full py-1.5 px-3`}
        >
          <Flame size={16} color="#3B82F6" />
          <Text style={tw`ml-1 text-blue-500`}>Hot</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Settings size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={tw`flex-row flex-wrap justify-between p-4`}
      >
        {[1, 2].map((item) => (
          <View
            key={item}
            style={tw`w-[48%] bg-white rounded-lg p-3 mb-4 shadow`}
          >
            <Image
              source={{ uri: "https://v0.dev/placeholder.svg" }}
              style={tw`w-full h-30 rounded-lg mb-2`}
            />
            <Text style={tw`text-base font-bold mb-1`}>Tên đồ uống</Text>
            <Text style={tw`text-sm text-yellow-500 mb-1`}>5★</Text>
            <Text style={tw`text-xs text-gray-500 mb-1`}>
              Mô tả ngắn về đồ uống
            </Text>
            <Text style={tw`text-base font-bold mb-2`}>
              {item === 1 ? "35.000" : "45.000"}
            </Text>
            <TouchableOpacity
              style={tw`bg-blue-500 rounded py-1.5 items-center`}
            >
              <Text style={tw`text-white font-bold`}>Buy</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoffeeScreen;
