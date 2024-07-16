import React, { useState, useContext } from "react";
import { View, Text, Modal, SafeAreaView, Pressable } from "react-native";
import tw from "twrnc";
import { modalContext } from "../Shared/Context";
import { AntDesign } from '@expo/vector-icons';

function Filtermodal() {
  const { state, setModalVisibility } = useContext(modalContext);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={state}
      onRequestClose={() => {
        setModalVisibility(false);
      }}
    >
      <SafeAreaView
        style={[
          tw`justify-start items-center flex-1`,
          { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        ]}
      >
        <View style={tw`bg-white w-[300px] mt-[60px] p-[20px] rounded-xl`}>
          <Text style={tw`justify-center items-center text-3xl`}>
            Filter Modal
          </Text>
          <Pressable
            style={tw`absolute top-0 right-0 p-2`}
            onPress={() => setModalVisibility(false)}
          >
            <AntDesign name="closecircle" size={24} color="red" />
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default Filtermodal;
