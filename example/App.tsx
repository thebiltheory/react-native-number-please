import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import NumberPlease from 'react-native-number-please';

export default function App() {
  const pizzaAmount = [{ id: 'pizza', label: '🍕', min: 0, max: 99 }];
  const initialValues = { id: 'pizza', pizza: 3 };
  const [pizzas, setPizzas] = React.useState(initialValues);

  const initialBirthday = { day: 16, year: 1970, month: 4 };
  const [birthday, setBirtday] = React.useState(initialBirthday);

  const { day, month, year } = birthday;

  const datePickers = [
    { id: 'dayy', label: '', min: 0, max: 31 },
    { id: 'month', label: '', min: 0, max: 12 },
    { id: 'year', label: '', min: 1900, max: new Date().getFullYear() },
  ];

  console.log(birthday);

  const calculateAge = () => {
    const ageDifMs = Date.now() - new Date(year, month, day).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>When is your birthday?</Text>
        <NumberPlease
          pickers={datePickers}
          values={birthday}
          onChange={(values) => setBirtday(values)}
        />
        <View style={styles.boxed}>
          <Text>You're {calculateAge()} years old</Text>
        </View>
      </View>
      <View>
        <Text>I would like</Text>
        <NumberPlease
          pickers={pizzaAmount}
          values={pizzas}
          onChange={(values) => setPizzas(values)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  boxed: {
    borderWidth: 1,
    width: '100%',
    padding: 16,
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
