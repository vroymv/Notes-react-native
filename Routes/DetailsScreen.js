import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import tw from "twrnc";

export default function DetailsScreen({ route, navigation }) {
    // const { userId, userName } = route.params;
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        <Text>Details Screen</Text>
        <Text>
          {/* Received Data: {userId}, {userName} */}
        </Text>
        <Button title="Go To Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Manual Back Btn" onPress={() => navigation.goBack()} />
        <StatusBar style="auto" />
      </View>
    );
  }