import { StyleSheet } from 'react-native';
import { theme } from "../../global/theme";


export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: theme.colors.primary,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: theme.colors.lightGrey,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});