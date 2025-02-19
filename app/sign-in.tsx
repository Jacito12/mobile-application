import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {
    console.log("Login with Google");
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Image source={images.onboarding} className="w-full h-4/6 mt-2" />
        <View className="px-10">
          <Text className="text-lg text-center uppercase font-rubik-semibold">
            Welcome to ReState
          </Text>
          <Text className="text-3xl text-center font-rubik-semibold mt-5">
            Let's Get Your Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-center font-rubik mt-6 text-lg">
            Login to ReState with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-lg rounded-full shadow-zinc-400 py-3 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
