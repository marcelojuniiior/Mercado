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
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import logo from "../Assets/logo2.png";

export default function NewAccount1({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [hidePass, setHidePass] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.main}
    >
      <SafeAreaView style={style.form}>
        <Image source={logo} style={style.titleImg}></Image>
        <View style={style.form}>
          <Text style={style.textAccount}>Acesse sua conta</Text>
          <TextInput
            placeholder="Email"
            style={style.input}
            autoCapitalize="words"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <View style={style.password}>
            <TextInput
              style={style.inputPassword}
              placeholder="Senha"
              secureTextEntry={hidePass}
              onChangeText={(text) => setSenha(text)}
            />
            <TouchableOpacity
              onPress={() => setHidePass(!hidePass)}
              style={style.inputIcon}
            >
              {hidePass ? (
                <AntDesign name="eye" size={20} color="black" />
              ) : (
                <AntDesign
                  style={style.inputIcon}
                  name="eyeo"
                  size={20}
                  color="black"
                />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate("newAccount2")}
          >
            <Text style={style.buttonText}>Proximo</Text>
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
  password: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 1,
    height: 44,
    borderColor: "#ddd",
    marginBottom: 30,
  },
  inputPassword: {
    width: "50%",
    textAlign: "center",
  },
  inputIcon: {
    margin: 0,
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
