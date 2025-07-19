import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import Login from "../pages/login/Login";
import PublicHome from "../pages/home/PublicHome";
import EmpreedixTitulo from "../components/empreendix/EmpreendixTitulo";



const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <SafeAreaProvider>
            <Tab.Navigator
                screenOptions={{ headerTitle: () => <EmpreedixTitulo />, headerTitleAlign: 'center' }}
                initialRouteName='HomeAcesso'>
                <Tab.Screen
                    name="HomeAcesso"
                    component={PublicHome}
                    options={{
                        tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
                    }}
                />

                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                        tabBarIcon: ({ color, size }) => <Feather name='log-in' color={color} size={size} />
                    }}
                />
            </Tab.Navigator>
        </SafeAreaProvider>
    )
}
