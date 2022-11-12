import { Text, Checkbox, IconButton } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Tarefa } from "../model/tarefa";

interface Props {
  tarefa: Tarefa;
  onDelete: (id: string) => void;
  toggleDone: (id: string) => void;
}

export const TarefaItem = ({ tarefa, onDelete, toggleDone }: Props) => {
  const shouldStrike = tarefa.done ? "line-through" : "none";

  return (
    <View style={styles.container}>
      <Checkbox
        status={tarefa.done ? "checked" : "unchecked"}
        onPress={() => toggleDone(tarefa.id)}
      />

      <Text
        style={{
          textDecorationLine: shouldStrike,
          flexGrow: 2,
        }}
        variant="bodyMedium"
      >
        {tarefa.name}
      </Text>

      <IconButton icon="delete" onPress={() => onDelete(tarefa.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
