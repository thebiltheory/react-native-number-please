import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import NumberPlease from 'react-native-number-please';

export default function App() {
  const initialBirthday = { day: 16, year: 1970, month: 4 };
  const [birthday, setBirtday] = React.useState(initialBirthday);

  const { day, month, year } = birthday;

  const date = [
    { id: 'day', label: '', min: 0, max: 31 },
    { id: 'month', label: '', min: 0, max: 12 },
    { id: 'year', label: '', min: 1900, max: new Date().getFullYear() },
  ];

  const calculateAge = () => {
    const ageDifMs = Date.now() - new Date(year, month, day).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <View style={styles.container}>
      <Text>When is your birthday?</Text>
      <NumberPlease
        pickers={date}
        values={birthday}
        onChange={(values) => setBirtday(values)}
      />
      <Text>You're {calculateAge()} years old</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
