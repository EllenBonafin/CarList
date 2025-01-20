import React, { useState } from "react";
import { authenticate } from "../../router/login";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/Logo.png";
import { MaterialIcons } from "@expo/vector-icons";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = async () => {
      console.log("Tentando autenticar com:", email, password);
      try {
        const { token } = await authenticate(email, password);
        console.log("Autenticação bem-sucedida, token:", token);
      } catch (error) {
        console.error(error);
        setError("Erro ao autenticar. Verifique suas credenciais.");
      }
    };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} resizeMode="contain" style={style.logo} />
        <Text style={style.text}>Welcome Back</Text>
      </View>
      <View style={style.boxCenter}>
        <Text style={style.labelInput}>Email:</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <MaterialIcons name="person" size={20} />
        </View>
        <Text style={style.labelInput}>Password:</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <MaterialIcons name="remove-red-eye" size={20} />
        </View>
      </View>
      <View style={style.boxBottom}>
        {error && <Text style={style.error}>{error}</Text>}
        <TouchableOpacity style={style.button} onPress={handleLogin}>
          <Text style={style.textButton}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
