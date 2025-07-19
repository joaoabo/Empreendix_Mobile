import React, { useEffect, useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../pages/splash/Splash';
import TabRoutes from './tab.routes';


const Stack = createNativeStackNavigator();

export default function Routes(){
    const [ showSplash, setShowSplash ] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false}}>
                    {showSplash ? (
                        <Stack.Screen name="Splash" component={SplashScreen} />
                    ) : (
                        <>
                        <Stack.Screen name="Tab" component={TabRoutes} />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}