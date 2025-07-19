import React from "react";
import { Image, View } from "react-native";
import { styles } from "./css/Logostyles";

export default function Logo(){
    return(
        <View>
            <Image source={require("../../../../assets/imagens/logots.png")} style={styles.logoHome}/>
        </View>
    )
}

