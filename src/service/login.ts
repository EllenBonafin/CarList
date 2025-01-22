import AsyncStorage from '@react-native-async-storage/async-storage';

export const authenticate = async (email: string, password: string) => {
  try {
    console.log("Tentando autenticar com:", email, password);
    const response = await fetch("https://driver-api-production.up.railway.app/auth", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    console.log("Resposta da API:", response);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro na resposta da API:", errorData);
      throw new Error("Erro ao autenticar: " + (errorData.message || response.statusText));
    }

    const data = await response.json();
    console.log("Dados recebidos:", data);

    if (!data.access_token) {
      console.error("Resposta da API não contém token:", data);
      throw new Error("Token não encontrado na resposta da API");
    }

    // Armazenar o token no AsyncStorage
    await AsyncStorage.setItem('token', data.access_token);

    return data;
  } catch (error) {
    console.error("Erro ao autenticar:", error);
    throw error;
  }
};