import React from "react";
import { Text, View } from "react-native";
import Video from 'react-native-video';
import { styles } from "./css/stylesSplash";

export default function SplashScreen() {

    return (
        <View style={styles.container}>
            <Text>Tela esta aqui!</Text>
            <Video
                source={require('../../../../assets/video/SplashEmpreendix.mp4')}
                style={styles.video}
                resizeMode="cover"
                muted={false}
                repeat={false}
                controls={false}
                ignoreSilentSwitch="obey"
            />
        </View>
    )
}