
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { Text, View } from 'react-native';

import NumberPlease from 'react-native-number-please';

export default function App() {

  const initialBirthday = { 'day':  16,'year': 1970, 'month':  4  };

  const [birthday, setBirtday] = useState(initialBirthday);

  const initialValues = {pizza: 0};
  const [pizzas, setPizzas] = useState(initialValues);
  const pizzaNumbers = [{ id: 'pizza', label: '🍕', min: 0, max: 99 }];

  const date = [
    { id: 'day', label: '', min: 0, max: 31 },
    { id: 'month', label: '', min: 0, max: 12 },
    { id: 'year', label: '', min: 1900, max: new Date().getFullYear()},
  ];

  useEffect(() => {
    console.log('🎂', birthday);
  }, [birthday]);



  return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>My birthday</Text>
      <NumberPlease
        pickers={date}
        values={birthday}
        onChange={(values) => setBirtday(values)}
      />

      <Text style={ {fontSize: 21}}>
        Your birthday is: {birthday.day}/{birthday.month}/{birthday.year}
      </Text>


      <NumberPlease
        pickers={pizzaNumbers}
        values={pizzas}
        onChange={(values) => setPizzas(values)}
      />

    </View>
  );
}


