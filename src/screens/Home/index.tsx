import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import {styles} from './styles'

export default function Home() {

  function handleParticipantAdd() {
    console.log('teste')
  }

  return (
  <View style={styles.container}>

  <Text style={styles.eventName}>
    Nome do Time
  </Text>

  <Text style={styles.eventDate}>
    Quarta, 15 de Fevereiro de 2023
  </Text>

  <TextInput
   style={styles.input}
   placeholder="Nome do player"
   placeholderTextColor={'#6b6b6b'}
   />

  <TouchableOpacity style={styles.button} onPress={handleParticipantAdd()}>
    <Text style={styles.buttonText}>
      +
    </Text>
  </TouchableOpacity>

  </View>
  )
}