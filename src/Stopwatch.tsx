import React, {useState, useEffect} from 'react';
import {Paper} from "@mui/material";
import {Button} from "@mui/material";
import './style.css'
function Stopwatch() {
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);
    const [milliseconds, setMilliseconds] = useState(0);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (active) {
            intervalId = setInterval(() => {
                setMilliseconds(prevMilliseconds => prevMilliseconds + 10);
            }, 10);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [active]);

    useEffect(() => {
        if (milliseconds >= 1000) {
            setTime(prevTime => prevTime + 1);
            setMilliseconds(0);
        }
    }, [milliseconds]);

    const startStopwatch = () => {
        setActive(true);
    };

    const stopStopwatch = () => {
        setActive(false);
    };

    const resetStopwatch = () => {
        setTime(0);
        setMilliseconds(0);
    };

    return (
        <Paper className = "container" elevation={10}>
            <div className="item">{time}.{milliseconds.toString().padStart(3, '0')}</div>
            <Button onClick={startStopwatch} className="item" size='large'>Старт</Button>
            <Button onClick={stopStopwatch} className="item" size='large'>Стоп</Button>
            <Button onClick={resetStopwatch} className="item" size='large'>Сброс</Button>
        </Paper>
    );
}

export default Stopwatch;