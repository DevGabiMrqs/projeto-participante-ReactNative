import React, {useState} from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import {styles} from './styles'
import { Participant } from "../../components/Participant";
 

export default function Home() {

  const [participants, setParticipants] = useState(["Gabiroba Specter1"])


  function handleParticipantAdd() {
    if(participants.includes("Mershk")) {
      return Alert.alert("Jogador existente", "Já existe um jogador na lista com esse nome!")
    }

    setParticipants(prevState => [...prevState, 'Kurho'])
   
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o jogador ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não'
      }
    ]);
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
      data={participants}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Participant 
        key={item}
        name={item} 
        onRemove={() => handleParticipantRemove(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent= {() => (
        <Text style={styles.listEmptyText}>
        </Text>
      )}
    />
  </View>
  )
}

/*Eu tenho um array de participants, só tem a Gabiroba nele, quando eu clicar em adicionar, ele vai pular o IF pois
o Mershk não está incluído na lista*/







/*, "Sugiro kemeame", "Mershk", "Fry123", "Sinuca de corda", "Kuhro", "LeCalvão", "BNine", "Raelz", "Griffom", "Pimba Café", "YoneDale"*/