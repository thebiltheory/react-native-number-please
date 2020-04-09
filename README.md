[![Build](https://circleci.com/gh/thebiltheory/react-native-number-please.svg?style=shield)](https://app.circleci.com/pipelines/github/thebiltheory/react-native-number-please) ![NPM](https://img.shields.io/npm/l/react-native-number-please)

# React Native Number Please 🙏🏽

Generate react-native pickers with range numbers. 

## Example
<img src="https://i.ibb.co/0GkCZnz/ezgif-3-f565f85e890a.gif" alt="ezgif-3-f565f85e890a" width="300px" border="0">


### Installing

Add the package to your project

```bash
yarn add react-native-number-please

npm install -S react-native-number-please
```

## Usage

```javascript
import React from "react";
import { View, Text } from "react-native";

import NumberPlease from "react-native-number-please";

const OrderPizza = () => {
  const initialValues = [{ id: "pizza", value: 3 }];
  const [pizzas, setPizzas] = useState(initialValues);
  const pizzaNumbers = [{ id: "pizza", label: "🍕", min: 0, max: 99 }];

  return (
    <View>
      <Text>I would like</Text>
      <NumberPlease
        digits={pizzaNumbers}
        values={pizzas}
        onChange={(values) => setPizzas(values)}
      />
    </View>
  );
};
```

```javascript
import React from "react";
import { View, Text } from "react-native";

import NumberPlease from "react-native-number-please";

const ItsYourBirthday = () => {
  const initialBirthday = [
    { id: "day", value: 16 },
    { id: "month", value: 4 },
    { id: "year", value: 1970 },
  ];

  const [birthday, setBirtday] = useState(initialBirthday);

  const date = [
    { id: "day", label: "", min: 0, max: 31 },
    { id: "month", label: "", min: 0, max: 12 },
    { id: "year", label: "", min: 1900, max: new Date().getFullYear()
  },

  return (
    <View>
      <Text>My birthday</Text>
      <NumberPlease
        digits={date}
        values={birthday}
        onChange={(values) => setBirtday(values)}
      />
    </View>
  );
};
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details