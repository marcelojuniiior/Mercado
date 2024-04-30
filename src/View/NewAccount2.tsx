import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import logo from "../Assets/logo2.png";

export default function NewAccount1({ navigation }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.main}
    >
      <SafeAreaView>
        <Image source={logo} style={style.titleImg}></Image>
        <View style={style.form}>
          <Text style={style.textAccount}>Criar uma nova conta</Text>
          <Text style={style.textAccountSub}>Passo 2/2</Text>
          <TextInput
            placeholder="Cep"
            style={style.input}
            autoCapitalize="words"
            value={cep}
            onChangeText={(text) => setCep(text)}
          />
          <TextInput style={style.input} placeholder="Endereço" />
          <TextInput style={style.input} placeholder="Bairro" />
          <TextInput style={style.input} placeholder="Cidade" />
          <TextInput style={style.input} placeholder="UF" />

          <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Criar conta</Text>
          </TouchableOpacity>

          <Text
            style={style.newAccount}
            onPress={() => navigation.navigate("login")}
          >
            Já tenho uma conta
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textAccount: {
    textAlign: "center",
    fontFamily: "Roboto_400Regular",
  },
  textAccountSub: {
    textAlign: "center",
    fontFamily: "Roboto_400Regular",
    fontSize: 13,
    color: "#8F8F8F",
    marginBottom: 30,
  },
  titleImg: {
    marginBottom: 90,
  },
  title: {
    width: 90,
    height: 90,
  },
  form: {
    alignItems: "stretch",
  },
  input: {
    marginBottom: 10,
    textAlign: "center",
    height: 44,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  inputIcon: {
    margin: 0,
    textAlign: "right",
  },
  button: {
    backgroundColor: "#64BA01",
    padding: 10,
    height: 44,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
  },
  newAccount: {
    marginTop: 60,
    textAlign: "center",
  },
});
