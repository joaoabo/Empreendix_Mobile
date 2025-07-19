import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './css/TituloEmpreendixStyles';

export default function EmpreedixTitulo() {
    return (
        <View style={styles.corArea}>
            <View style={styles.containerTitulo}>
                <Text style={styles.tituloLogo}>Empreendix</Text>
            </View>
        </View>
    )
};
