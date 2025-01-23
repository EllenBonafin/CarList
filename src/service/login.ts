import AsyncStorage from "@react-native-async-storage/async-storage";

export const authenticate = async (email: string, password: string) => {
  try {
    console.log("Tentando autenticar com:", email, password);
    const response = await fetch(
      "https://driver-api-production.up.railway.app/auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro na resposta da API:", errorData);
      throw new Error(
        "Erro ao autenticar: " + (errorData.message || response.statusText),
      );
    }

    const data = await response.json();

    if (!data.access_token) {
      console.error("Resposta da API não contém token:", data);
      throw new Error("Token não encontrado na resposta da API");
    }

    console.log("Autenticado com sucesso:", data.access_token);

    return data.access_token;
  } catch (error) {
    console.error("Erro ao autenticar:", error);
    throw error;
  }
};
