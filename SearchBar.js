import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        <Feather
          name="search"
          size={17}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search Car"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <Entypo name="cross" size={17} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )}
      </View>
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 40,
    margin: 15,
    alignContent: "flex-start",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    direction: "ltr",
    width: "45%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    alignContent: "flex-start",
    width: "45%",
    backgroundColor: "#d9dbda",
    justifyContent: "flex-start",
    borderRadius: 35,
    direction: "ltr",
    alignItems: "flex-start",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    alignContent: "flex-start",
    width: "45%",
    backgroundColor: "#d9dbda",
    borderRadius: 35,
    alignItems: "flex-start",
    direction: "ltr",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 17,
    marginLeft: 20,
    width: "45%",
  },
});