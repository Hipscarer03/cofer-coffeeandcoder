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
import Header from "../components/Header";
import { Search, User, Heart, Clock, Flame } from "lucide-react-native";
import tw from "twrnc";

const CoderScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Header />

      <View
        style={tw`flex-row items-center bg-gray-100 rounded-lg mx-4 px-3 mb-4`}
      >
        <TextInput
          style={tw`flex-1 h-10`}
          placeholder="Search"
          placeholderTextColor="#999"
        />
        <Search size={20} color="#999" />
      </View>

      <View style={tw`flex-row justify-between items-center px-4 mb-4`}>
        <TouchableOpacity
          style={tw`flex-row items-center bg-blue-100 rounded-full py-1.5 px-3`}
        >
          <Heart size={16} color="#3B82F6" />
          <Text style={tw`ml-1 text-blue-500`}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row items-center bg-blue-100 rounded-full py-1.5 px-3`}
        >
          <Clock size={16} color="#3B82F6" />
          <Text style={tw`ml-1 text-blue-500`}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row items-center bg-blue-100 rounded-full py-1.5 px-3`}
        >
          <Flame size={16} color="#3B82F6" />
          <Text style={tw`ml-1 text-blue-500`}>Hot</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Text style={tw`text-lg font-bold px-4 mb-2`}>Profile</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`px-4 mb-4`}
        >
          {[
            {
              name: "Susan",
              description: "3+ years of experience",
              image: "https://v0.dev/placeholder.svg",
            },
            {
              name: "Alan",
              description: "Community 7 years of experience",
              image: "https://v0.dev/placeholder.svg",
            },
          ].map((profile, index) => (
            <View
              key={index}
              style={tw`w-40 bg-white rounded-lg p-3 mr-4 shadow`}
            >
              <Image
                source={{ uri: profile.image }}
                style={tw`w-full h-32 rounded-lg mb-2`}
              />
              <Text style={tw`text-base font-bold mb-1`}>{profile.name}</Text>
              <Text style={tw`text-xs text-gray-500 mb-2`}>
                {profile.description}
              </Text>
              <TouchableOpacity
                style={tw`bg-blue-500 rounded py-1.5 items-center`}
              >
                <Text style={tw`text-white font-bold`}>Connect</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <Text style={tw`text-lg font-bold px-4 mb-2`}>Confession</Text>
        <View style={tw`bg-white mx-4 rounded-lg p-4 shadow`}>
          <View style={tw`flex-row items-center mb-2`}>
            <Image
              source={{ uri: "https://v0.dev/placeholder.svg" }}
              style={tw`w-10 h-10 rounded-full mr-2`}
            />
            <View>
              <Text style={tw`font-bold`}>Susan</Text>
              <Text style={tw`text-yellow-500`}>5★</Text>
            </View>
          </View>
          <Text style={tw`text-sm`}>
            I recently embarked on a coffee-centric adventure at a local "latte
            art" class, and honestly, I wasn't prepared for the rollercoaster of
            emotions that followed. As someone who can barely draw a stick
            figure, I approached the delicate art of milk-pouring with all the
            grace of a caffeinated elephant. My first attempt looked less like a
            heart and more like a blob that had given up on life. The barista's
            encouraging smile couldn't mask their barely-concealed laughter...
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoderScreen;
