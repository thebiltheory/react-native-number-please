/* eslint-disable react-native/no-inline-styles */

import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Button, Platform } from 'react-native';
import { Text, View } from 'react-native';

import NumberPlease from 'react-native-number-please';

export default function App() {

  const initialBirthday = { 'day':  16,'year': 1970, 'month':  4  };

  const [birthday, setBirtday] = useState(initialBirthday);

  const birthdayRef = useRef();
  const birthMonthRef = useRef();
  const birthYearRef = useRef();

  const date = [
    { id: 'day', ref: birthdayRef,  label: '', min: 0, max: 31 },
    { id: 'month', ref: birthMonthRef, label: '', min: 0, max: 12 },
    { id: 'year', ref: birthYearRef, label: '', min: 1900, max: new Date().getFullYear() },
  ];

  useEffect(() => {
    console.log('🎂', birthday);
  }, [birthday]);


  return (
      <View style={{justifyContent: 'space-around', alignItems: 'center', flex: 1}}>
      <Text>My birthday</Text>
      <View style={{maxWidth: '80%'}}>
        <NumberPlease
          pickers={date}
          values={birthday}
          onChange={(values) => setBirtday(values)}
          itemStyle={{color: 'red'}}
          />
      </View>

      <Text style={ {fontSize: 21}}>
        Your birthday is: {birthday.day}/{birthday.month}/{birthday.year}
      </Text>

      {Platform.OS === 'android' &&  (
        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '80%'}}>
          <Button title="Open programmatically" onPress={() => birthdayRef?.current.focus()}/>
        </View>
      )}

    </View>
  );
}


