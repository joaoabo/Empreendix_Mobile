import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './css/TituloEmpreendixStyles';
import LogoTitulo from '../logo/LogoTitulo';

export default function EmpreedixTitulo() {
    return (
        <View style={styles.corArea}>
            <View style={styles.containerTitulo}>
                <LogoTitulo />
                <Text style={styles.tituloLogo}>Empreendix</Text>
            </View>
        </View>
    )
};
