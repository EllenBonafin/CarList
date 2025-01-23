import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  useNavigation,
  NavigationProp,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { fetchDetails } from "../../service/detailsService";
import { style } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sendAnswer } from "../../service/sendAnswer";

type RootStackParamList = {
  ChecklistDetails: { checklist: any };
};

type ChecklistDetailsRouteProp = RouteProp<
  RootStackParamList,
  "ChecklistDetails"
>;

const ChecklistDetails = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<ChecklistDetailsRouteProp>();
  const { checklist } = route.params;

  const [details, setDetails] = useState<{ days: string[] }>({ days: [] });

  useEffect(() => {
    const getChecklistDetails = async () => {
      console.log("checklist", checklist);

      const data = await fetchDetails(checklist.id);
      setDetails(data);
    };

    getChecklistDetails();
  }, [checklist]);

  const [answer, setAnswer] = useState("");
  const [observation, setObservation] = useState("");

  return (
    <View style={style.container}>
      {details && (
        <FlatList
          data={details}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={style.item}>{item}</Text>}
        />
      )}

      <FlatList
        data={checklist.question}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={style.container}>
            <Text style={style.label}>{item.question}</Text>

            <Text style={style.label}>Resposta:</Text>
            <TextInput
              style={style.input}
              value={answer}
              onChangeText={setAnswer}
            />

            <Text style={style.label}>Observação:</Text>
            <TextInput
              style={style.input}
              value={observation}
              onChangeText={setObservation}
            />

            <TouchableOpacity
              style={style.button}
              onPress={() =>
                sendAnswer({
                  question: item.question,
                  assetId: checklist.asset_id,
                  rightAnswer: item.answer,
                  checklistConfigId: checklist.id,
                  answer,
                  observation,
                })
              }
            >
              <Text style={style.buttonText}>Enviar Resposta</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ChecklistDetails;
