import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchVehicles = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await fetch(
      "https://driver-api-production.up.railway.app/protected/driver/plates",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        "Erro ao buscar veículos: " +
          (errorData.message || response.statusText),
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar veículos:", error);
    throw error;
  }
};
