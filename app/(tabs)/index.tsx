import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

// Lista de frases de sorte
const fortunes = [
  "A felicidade está dentro de você.",
  "Boas notícias virão até você.",
  "Seu sorriso ilumina o dia de alguém.",
  "Hoje é um dia perfeito para começar algo novo.",
  "Confie em si mesmo e terá sucesso.",
  "Grandes oportunidades estão à sua espera.",
  "Algo maravilhoso está prestes a acontecer.",
];

const App = () => {
  const [isCookieOpened, setIsCookieOpened] = useState(false);
  const [currentFortune, setCurrentFortune] = useState("");

  // Função para quebrar o biscoito e gerar uma frase aleatória
  const breakCookie = () => {
    setIsCookieOpened(true);
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setCurrentFortune(randomFortune);
  };

  // Função para resetar o biscoito
  const resetCookie = () => {
    setIsCookieOpened(false);
    setCurrentFortune("");
  };

  return (
    <View style={styles.container}>
      {/* Imagem do biscoito */}
      <TouchableOpacity onPress={isCookieOpened ? resetCookie : breakCookie}>
      <Image
          source={isCookieOpened ? require('./assets/Broken_Fortune.png') : require('./assets/biscoito.png')}
          style={styles.cookieImage}
        />
      </TouchableOpacity>
      <Text style={styles.fortuneText}>
        {isCookieOpened ? currentFortune : 'Toque no biscoito para quebrá-lo!'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eead2d',
  },
  cookieImage: {
    width: 200,
    height: 200,
  },
  fortuneText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
