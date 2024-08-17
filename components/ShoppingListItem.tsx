import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../theme";

type Prop = {
  name: string;
  isDone?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};

export function ShoppingListItem({
  name,
  isDone,
  onDelete,
  onToggleComplete,
}: Prop) {
  const handleDelete = () => {
    Alert.alert(`Are you sure to delete ${name}?`, "This action is permanent", [
      {
        text: "Yes",
        onPress: () => onDelete(),
        style: "destructive",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };
  return (
    <Pressable
      style={[
        styles.itemContainer,
        isDone ? styles.completedContainer : undefined,
      ]}
      onPress={onToggleComplete}
    >
      <View style={styles.row}>
        <Entypo
          name={isDone ? "check" : "circle"}
          size={24}
          color={isDone ? theme.colorGrey : theme.colorCerulean}
        />
        <Text
          numberOfLines={1}
          style={[styles.itemText, isDone ? styles.completedText : undefined]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={handleDelete} activeOpacity={0.5}>
        <AntDesign
          name="closecircle"
          size={24}
          color={isDone ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  completedContainer: {
    borderBlockColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
    backgroundColor: theme.colorLightGrey,
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
    flex: 1,
  },
  completedText: {
    textDecorationColor: theme.colorGrey,
    textDecorationLine: "line-through",
    color: theme.colorGrey,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    flex: 1,
  },
});
