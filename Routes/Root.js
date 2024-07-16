import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import Profile from "../Components/Profile";
import Logo from "../Components/Logo";
import Filter from "../Components/Filter";
import CreateNoteScreen from "./CreateNote";
import Header from "../Components/CreateNote/Header";
import { modalContext } from "../Shared/Context";

const Stack = createNativeStackNavigator();

export default function RootScreen() {
  const [state, setModalVisibility] = useState(false);
  const [profileModalState, setprofileModalState] = useState(false);
  

  function receiveModalVisible(a) {
    // console.log(a);
    setModalVisibility(a);
  }

  function  receiveModalProfileVisible(a){
    setprofileModalState(a);
  }

  return (
    <modalContext.Provider value={{state, setModalVisibility, profileModalState, setprofileModalState}}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            
            headerTitle: (props) => <Logo {...props} />,
            headerLeft: (props) => <Profile Pressed={(prop) => receiveModalProfileVisible(prop)} {...props} />,
            headerRight: (props) => (
              <Filter
                sendModalVisible={(prop) => receiveModalVisible(prop)}
                {...props}
              />
            ),
          })}
        />

        <Stack.Screen
          name="Createnote"
          component={CreateNoteScreen}
          options={{ headerTitle: (props) => <Header /> }}
        />
      </Stack.Navigator>
    </modalContext.Provider>
  );
}
