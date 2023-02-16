# React Native Number Please 🙏🏽

[![Build](https://circleci.com/gh/thebiltheory/react-native-number-please/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/thebiltheory/react-native-number-please) ![npm](https://img.shields.io/npm/v/react-native-number-please?color=%236820FE) ![npm](https://img.shields.io/npm/dm/react-native-number-please) ![NPM](https://img.shields.io/npm/l/react-native-number-please)

Generate react-native pickers with range numbers.

## Example

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://snack.expo.io/@thebiltheory/react-native-number-please)

<img src="https://i.ibb.co/0GkCZnz/ezgif-3-f565f85e890a.gif" alt="ezgif-3-f565f85e890a" width="300px" border="0">

### Installing

Add the package to your project

```bash
yarn add react-native-number-please

npm install -S react-native-number-please
```

## Usage

```javascript
import React from 'react';
import { View, Text } from 'react-native';

import NumberPlease from 'react-native-number-please';

const OrderPizza = () => {
  const initialValues = [{ id: 'pizza', value: 3 }];
  const [pizzas, setPizzas] = useState(initialValues);
  const pizzaNumbers = [{ id: 'pizza', label: '🍕', min: 0, max: 99 }];

  return (
    <View>
      <Text>I would like</Text>
      <NumberPlease
        pickers={pizzaNumbers}
        values={pizzas}
        onChange={(values) => setPizzas(values)}
      />
    </View>
  );
};
```

```javascript
import React from 'react';
import { View, Text } from 'react-native';

import NumberPlease from 'react-native-number-please';

const ItsYourBirthday = () => {
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
};
```

## Props

| Prop          | Required | Description                                                  | Default     |
| ------------- | -------- | ------------------------------------------------------------ | ----------- |
| `pickers`     | ✅       | Array of objects containing individal picker config          | `undefined` |
| `values`      | ✅       | Array of objects initial values for each picker in `IValues` | `undefined` |
| `onChange`    | ✅       | Callback for when an item is selected.                       | `undefined` |
| `pickerStyle` | Optional | Picker wrapper style object.                                 | `{}`        |
| `itemStyle`   | Optional | Picker item style object.                                    | `{}`        |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
