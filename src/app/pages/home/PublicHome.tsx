import React from 'react';
import { Text, View } from 'react-native';
import GraficosBarras from '../../components/graficos/GraficoBarras';
import CardInfo, { CardStatico } from '../../components/cards/CardInfo';

export default function PublicHome() {

    return (
        <View>
            <Text>Tela de home publica!</Text>
            <GraficosBarras />
            <CardInfo />
            <CardStatico />
        </View>
    )
}