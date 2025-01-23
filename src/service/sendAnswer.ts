import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const sendAnswer = async ({
  observation,
  question,
  answer,
  assetId,
  rightAnswer,
  checklistConfigId,
}: {
  observation: string;
  question: string;
  answer: string;
  assetId: string;
  rightAnswer: string;
  checklistConfigId: string;
}) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      throw new Error("Token não encontrado");
    }

    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const driverId = decodedToken.driver_id;

    const response = await fetch(
      "https://driver-api-production.up.railway.app/checklist/answer/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          question,
          answer,
          asset_id: assetId,
          driver_id: driverId,
          right_answer: rightAnswer,
          answered_at: new Date().toISOString(),
          observation,
          checklist_config_id: checklistConfigId,
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || response.statusText);
    }

    Alert.alert("Sucesso", "Resposta registrada com sucesso!");
  } catch (error) {
    console.error("Erro ao registrar resposta:", error);
    Alert.alert(
      "Erro",
      "Erro ao registrar resposta. Tente novamente mais tarde.",
    );
  }
};
