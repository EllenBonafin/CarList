import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchDetails = async (checklistId: string) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await fetch(
      `https://driver-api-production.up.railway.app/protected/checklist/custom_option/${checklistId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.log("Erro ao buscar detalhes:", errorData);
      throw new Error(
        "Erro ao buscar detalhes: " + (errorData || response.statusText),
      );
    }

    const data = await response.text();

    if (!data) {
      throw new Error("Resposta vazia da API");
    }

    console.log("Detalhes data:", JSON.parse(data));
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao buscar Detalhes:", error);
    throw error;
  }
};
