import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
  logo: {
    width: 28,
    height: 28,
  },
  logoText: {
    fontSize: 24,
    fontFamily: 'good-times',
    fontWeight: 'bold',
    marginLeft: 10,
    color: theme.colors.primary,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  greeting: {
    fontSize: 18,
    color: "#333",
  },
  boxInput: {
    marginTop: 10,
  },
  boxList: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
    cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  logoutButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
