# React Native Number Please

[![Build](https://circleci.com/gh/thebiltheory/react-native-number-please.svg?style=shield)](https://app.circleci.com/pipelines/github/thebiltheory/react-native-number-please) ![MIT License](https://img.shields.io/github/license/thebiltheory/react-native-number-please/LICENSE) 


Generate react-native pickers with range numbers.

## Install

```bash
yarn add react-native-number-please
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
