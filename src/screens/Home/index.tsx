import React from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList} from "react-native";
import {styles} from './styles'
import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = ["Gabiroba Specter1", "Sugiro kemeame", "Mershk", "Fry123", "Sinuca de corda", "Kuhro", "LeCalvão", "BNine", "Raelz", "Griffom", "Pimba Café", "YoneDale"];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o(a) jogador(a) ${name}`);
  }

  return (
  <View style={styles.container}>

  <Text style={styles.eventName}>
    Nome do Time
  </Text>

  <Text style={styles.eventDate}>
    Sexta, 17 de Fevereiro de 2023
  </Text>

    <View style={styles.form}>
  <TextInput
   style={styles.input}
   placeholder="Nome do player"
   placeholderTextColor={'#6b6b6b'}
  />

  <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
    <Text style={styles.buttonText}>
      +
    </Text>
  </TouchableOpacity>
    </View> 

    <FlatList 
      data={[]}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Participant 
        key={item}
        name={item} 
        onRemove={() => handleParticipantRemove("gab")}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent= {() => (
        <Text style={styles.listEmptyText}>
        Ninguém entrou no Time ainda? Adicione um player na sua lista.
        </Text>
      )}
    />
  </View>
  )
}