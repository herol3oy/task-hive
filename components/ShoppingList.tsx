import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";

type Prop = {
  name: string;
  isDone?: boolean;
};

export function ShoppingList({ name, isDone }: Prop) {
  const handleDelete = () => {
    Alert.alert(`Are you sure to delete ${name}?`, "This action is permanent", [
      {
        text: "Yes",
        onPress: () => console.log("Deleting..."),
        style: "destructive",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };
  return (
    <View
      style={[
        styles.itemContainer,
        isDone ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[styles.itemText, isDone ? styles.completedText : undefined]}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={[styles.button, isDone ? styles.completedButton : undefined]}
        onPress={handleDelete}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  completedContainer: {
    borderBlockColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  completedButton: {
    backgroundColor: theme.colorGrey,
  },
  button: {
    color: theme.colorWhite,
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  completedText: {
    textDecorationColor: theme.colorGrey,
    textDecorationLine: "line-through",
    color: theme.colorGrey,
  },
});
