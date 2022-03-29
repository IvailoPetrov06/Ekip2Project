import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Image} from 'react-native';
import CarList from './CarList';
import SearchBar from './SearchBar';

export default function App() {
  const image = { uri: "http://www.santoshtyres.com/wp-content/uploads/2019/08/car-tyre-banner.jpg" };
  const localimage = require("./assets/car-tyre-banner.jpg");
  return (
    <ImageBackground source={image} style={styles.container}>
      <CarList></CarList>
      <Image source={{
        width: 300,
        height: 200,
        uri: "https://g1-bg.cars.bg/2022-03-11_1/622b17f31528a7482a381022o.jpg"}}
         />
          <Text style={styles.setColor}>  Brand - BMW</Text>
          <Text style={styles.setColor}>                     Model -  X6 xDrive30d M</Text>
          <Text style={styles.setColor}>Year -  2021</Text>
          <Text style={styles.setColor}>           Price - 189,900 лв.</Text>
          <Image source={{
        width: 300,
        height: 200,
        uri: "https://g1-bg.cars.bg/2022-01-17_1/61e52296890ed801f07664f2o.jpg"}}
         />
         <Text style={styles.setColor}> Brand - Audi</Text>
          <Text style={styles.setColor}>            Model - RS7 Matrix</Text>
          <Text style={styles.setColor}>Year -  2016</Text>
          <Text style={styles.setColor}>          Price -  99,990 лв.</Text>
          <Image source={{
        width: 300,
        height: 200,
        uri: "https://g1-bg.cars.bg/2022-01-04_2/61d457d5b80837706805e273o.jpg"}}
         />
          <Text style={styles.setColor}>      Brand - Porsche</Text>
          <Text style={styles.setColor}>                          Model - Panamera GTS Bose</Text>
          <Text style={styles.setColor}>Year -  2019</Text>
          <Text style={styles.setColor}>           Price - 229,900 лв.</Text>
          <View style={styles.container} />
        <Image
        style={styles.logo}
        source={{
          uri: 'https://st2.depositphotos.com/2137365/5423/v/380/depositphotos_54238445-stock-illustration-silhouette-of-a-luxury-car.jpg?forcejpeg=true',
        }}
      />
      <SearchBar></SearchBar>
      <StatusBar style="auto" />
    <View/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
    height: 1180,
    SearchBar: {
    paddingLeft: 1000,
    Left: 400,
  },
},
logo: {
  flex: 1,
  paddingRight: 200,
  width: 66,
  height: 58,
  bottom: 980,
  left: 800,
},
  setColor: {
    color: `#d3d3d3`,
    fontSize: 15,
  }
});