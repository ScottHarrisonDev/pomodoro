import React, {useState, useEffect}  from 'react';
import {Button, View, Text} from "react-native";
import Timer from "./components/Timer";

export default function TimerScreen({navigation}) {

    const maxTime = 1500; // Time (in seconds) we want the timer to count down from

    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(maxTime);

    useEffect(() => {
        if (running) {
            const interval = tick(time);
            return () => {
                clearInterval(interval);
            };
        }
    })

    const tick = (currTime) => {
        if (currTime === 0) {
            return 0;
        }
        return setInterval(() => setTime(currTime - 1), 1000);
    }

    const startTimer = () => {
        setRunning(true);
    }

    const stopTimer = () => {
        setRunning(false);
        resetTimer();
    }

    const resetTimer = () => {
        setTime(maxTime);
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <Timer time={time} />

            {! running &&
                <Button
                    title={"Start"}
                    onPress={startTimer}
                />
            }

            {running &&
                <Button
                    title={"Stop"}
                    onPress={stopTimer}
                />
            }

            {/*<Button*/}
            {/*    title="Options"*/}
            {/*    onPress={() => navigation.navigate('Options')}*/}
            {/*/>*/}
        </View>
    );
}