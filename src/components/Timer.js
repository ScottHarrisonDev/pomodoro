import React from 'react';
import {Text} from "react-native";

export default function Timer({time}) {

    const formatTime = (currTime) => {
        const mins = getMins(currTime);
        const seconds = getSeconds(currTime);

        return `${pad(mins)}:${pad(seconds)}`;
    }

    const pad = (val) => {
        val = val + '';

        return val.length >= 2 ? val : new Array(2 - val.length + 1).join('0') + val;
    }

    const getMins = (currTime) => {
        return Math.floor(currTime / 60);
    }

    const getSeconds = (currTime) => {
        return currTime % 60;
    }

    return (
        <Text style={{fontSize:128}}>{formatTime(time)}</Text>
    );
}