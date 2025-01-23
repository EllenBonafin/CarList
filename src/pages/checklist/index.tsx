import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { fetchCheckList } from "../../service/checklistService";
import { style } from "./styles";

type RootStackParamList = {
  Checklist: undefined;
  ChecklistDetails: { checklist_id: string };
};

type ChecklistItem = {
  id: string;
  name: string;
  isActive: boolean;
  questions: { id: string; question: string; right_answer: string; has_observation: boolean }[];
  checklist_config: string;
};

const Checklist = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [checklists, setChecklists] = useState<ChecklistItem[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getChecklists = async () => {
      try {
        const data = await fetchCheckList();
        setChecklists(data);
      } catch (error) {
        setError("Erro ao buscar checklists. Tente novamente mais tarde.");
        console.log(error);
      }
    };

    getChecklists();
  }, []);

  const renderItem = ({ item }: { item: { id: string; name: string; isActive: boolean; question: { id: string; question: string; right_answer: string; has_observation: boolean }[] } }) => (
    <TouchableOpacity style={style.card} onPress={() => navigation.navigate('ChecklistDetails', { checklist: item })}>
      <Text style={style.cardTitle}>{item.name}</Text>
      <Text style={style.cardSubtitle}>Status: {item.isActive ? "Ativo" : "Inativo"}</Text>
      {item.question && item.question.length > 0 ? (
      item.question.map((q) => (
        <Text key={q.id} style={style.cardSubtitle}>- {q.question}</Text>
      ))
    ) : (
      <Text style={style.cardSubtitle}>Nenhuma pergunta disponível.</Text>
    )} 
      {/* <Text style={style.cardSubtitle}>Perguntas: {item.questions.map(q => q.question).join(', ')}</Text> */}
       {/* <Text style={style.cardSubtitle}>Tipo: {item.checklist_config}</Text> */}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={style.container}>
      {error ? (
        <Text style={style.error}>{error}</Text>
      ) : (
        <FlatList
          data={checklists}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingTop: 20 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Checklist;