import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Input } from "../../components/Input";
import { fetchVehicles } from "../../service/vehicleService";
import { style } from "./styles";

type RootStackParamList = {
  Checklist: { tracker_id: number };
  // other routes can be added here
};

export default function CarList() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getVehicles = async () => {
      try {
        const data = await fetchVehicles();
        setVehicles(data);
      } catch (error) {
        setError("Erro ao buscar veículos. Tente novamente mais tarde.");
      }
    };

    getVehicles();
  }, []);
  const renderItem = ({ item }: { item: { car_model: string; plate: string; driver_name: string; tracker_id: number } }) => (
    <TouchableOpacity style={style.card} onPress={() => navigation.navigate('Checklist', { tracker_id: item.tracker_id })}>
      <Text style={style.cardTitle}>{item.car_model}</Text>
      <Text style={style.cardSubtitle}>{item.plate}</Text>
      <Text style={style.cardSubtitle}>{item.driver_name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <View style={style.header}>
        <Text style={style.greeting}>Bom dia, <Text style={{ fontWeight: 'bold' }}>Caio E.</Text></Text>
        <View style={style.boxInput}>
          <Input
            IconLeft={MaterialIcons}
            iconLeftName="search"
            //onChangeText={(t) => filter(t)}
          />
        </View>
      </View>
      <View style={style.boxList}>
        {error ? (
          <Text style={style.error}>{error}</Text>
        ) : (
          <FlatList
            data={vehicles}
            style={{ marginTop: 40, paddingHorizontal: 30 }}
            keyExtractor={(item) => item.tracker_id.toString()}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
}