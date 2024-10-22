import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

const DrinkDetail = () => {
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`p-4`}>
        {/* Header */}
        <View style={tw`flex-row justify-between items-center mb-4`}>
          <View style={tw`flex-row items-center`}>
            <Ionicons name="cafe-outline" size={24} color="#3B82F6" />
            <View style={tw`w-8 h-4 bg-gray-200 rounded-full ml-2`}>
              <View style={tw`w-4 h-4 bg-blue-500 rounded-full`} />
            </View>
          </View>
          <Text style={tw`text-2xl font-bold text-blue-500`}>Cofer</Text>
          <Ionicons name="person-outline" size={24} color="#3B82F6" />
        </View>

        {/* Drink Image */}
        <Image
          source={{ uri: "https://example.com/coffee-image.jpg" }}
          style={tw`w-full h-48 rounded-lg mb-4`}
        />

        {/* Drink Details */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-xl font-bold`}>Tên đồ uống</Text>
          <Text style={tw`text-gray-500`}>mô tả mô tả mô tả mô tả</Text>
          <Text style={tw`text-xl font-bold mt-2`}>35.000</Text>
        </View>

        {/* Buy Button */}
        <TouchableOpacity style={tw`bg-blue-500 py-2 px-4 rounded-full mb-6`}>
          <Text style={tw`text-white text-center font-bold`}>Buy</Text>
        </TouchableOpacity>

        {/* Reviews */}
        {["John", "Susan"].map((name, index) => (
          <View key={name} style={tw`mb-4 border-b border-gray-200 pb-4`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Image
                source={{
                  uri: `https://example.com/${name.toLowerCase()}.jpg`,
                }}
                style={tw`w-10 h-10 rounded-full mr-2`}
              />
              <View>
                <Text style={tw`font-bold`}>{name}</Text>
                <View style={tw`flex-row`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Ionicons
                      key={star}
                      name="star"
                      size={16}
                      color="#FFD700"
                    />
                  ))}
                </View>
              </View>
            </View>
            <Text style={tw`text-gray-600`}>
              I recently attended a random connect session at a local themed
              cafe, and honestly, I wasn't sure what to expect. The idea of
              meeting complete strangers and diving into deep discussions felt
              both exciting and slightly intimidating. I grabbed my coffee,
              settled into the cozy corner, and waited for the session to begin.
              To my surprise, the conversation flowed effortlessly. We talked
              about everything from the latest AI trends to our career journeys
              and even shared tips on managing work-life balance in the tech
              world. It was refreshing to connect with like-minded people, and
              just through a simple cup of coffee.
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DrinkDetail;
