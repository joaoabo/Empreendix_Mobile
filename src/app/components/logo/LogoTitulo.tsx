import React from "react";
import { Image, View } from "react-native";
import { styles } from "./css/Logostyles";

export default function LogoTitulo(){
    return(
        <View>
            <Image 
            source={require("../../../../assets/imagens/logots.png")} 
            style={styles.logoTitulo}
            resizeMode="contain" />
        </View>
    )
}

