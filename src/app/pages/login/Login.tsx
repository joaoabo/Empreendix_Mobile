// src/screens/controleUsuario/Login.tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { styles } from './css/stylesLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');

  const handleNext = async () => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo 👋</Text>
      <Text style={styles.subtitle}>Digite seu Nome</Text>

      <TextInput
        label="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <Text style={styles.subtitle}>Digite seu e-mail para entrar</Text>
      <TextInput
        label="Seu e-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <Button
        mode="contained"
        style={styles.button}
        disabled={!email.includes('@')}
      >
        <Text>Próximo</Text>
      </Button>
    </View>
  )
}
