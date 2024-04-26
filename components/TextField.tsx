import { Text } from 'react-native';
import styles from "../styles";
import React from 'react';

const TextField = (props: { children: string }) => (
    <Text style={styles.text}>{props.children}</Text>
);

export default TextField;