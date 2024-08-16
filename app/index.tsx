import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { ShoppingList } from "../components/ShoppingList";
import { theme } from "../theme";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingList name="tea" />
      <ShoppingList name="coffee" isDone />
      <ShoppingList name="beer" isDone />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});
