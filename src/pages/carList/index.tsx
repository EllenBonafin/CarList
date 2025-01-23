import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "../../components/Input";
import { fetchVehicles } from "../../service/vehicleService";
import { style } from "./styles";
import { useAuth } from "../../contexts/authContext";
import Logo from "../../assets/Logo.png";

type RootStackParamList = {
  Checklist: { tracker_id: number };
};

export default function CarList() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { logout } = useAuth();
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

  const renderItem = ({
    item,
  }: {
    item: {
      car_model: string;
      plate: string;
      driver_name: string;
      tracker_id: number;
    };
  }) => (
    <TouchableOpacity
    style={style.card}
    onPress={() =>
      navigation.navigate("Checklist", { tracker_id: item.tracker_id })
    }
  >
    <View style={style.cardContent}>
      <MaterialIcons name="directions-car" size={22} color="#1E90FF" />
      <View style={style.cardText}>
        <Text style={style.cardTitle}>{item.car_model}</Text>
        <Text style={style.cardSubtitle}>{item.plate}</Text>
        <Text style={style.cardSubtitle}>{item.driver_name}</Text>
      </View>
    </View>
  </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      <View style={style.header}>
      <View style={style.logoContainer}>
          <Image source={Logo} resizeMode="contain" style={style.logo} />
          <Text style={style.logoText}>Garage</Text>
        </View>
        <TouchableOpacity style={style.logoutButton} onPress={logout}>
          <Text style={style.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
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
