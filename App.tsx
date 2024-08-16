import { StyleSheet, View } from "react-native";
import { ShoppingList } from "./components/ShoppingList";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingList name="coffee" />
      <ShoppingList name="tea" />
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
