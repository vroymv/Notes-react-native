import React, {useContext} from 'react';
import { Modal, SafeAreaView, View, Text, Pressable } from 'react-native';
import { modalContext } from '../Shared/Context';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';



function Profilemodal() {
    const { profileModalState, setprofileModalState } = useContext(modalContext);
  return (
    <Modal
        visible={profileModalState}
        transparent={true}
        animationType="fade"
    >
        <SafeAreaView style={tw`flex-1 justify-start items-start`}>
            <View style={tw`bg-[#fff] mt-[40px] ml-[35px]  p-[40px] rounded-xl`}>
                <Text style={tw`text-3xl`}>Profile Modal</Text>
                <Pressable
                style={tw`absolute top-0 right-0 p-2`} 
                onPress={() => setprofileModalState(false)}
                >
                    <AntDesign name="closecircle" size={24} color="red" />
                </Pressable>
            </View>
        </SafeAreaView>
    </Modal>
  )
}

export default Profilemodal