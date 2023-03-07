import { useState, useEffect } from "react";
import axios from "axios";

export default function Consumo() {
    const [dados, setDados] = useState('');

    useEffect(() => {
        const buscaDados = async () => {
            const response = await axios.get('https://127.0.0.1:8080/');
            console.log(response);
            setDados(response);
        }

        buscaDados();
    }, []);
    return(
        <>
            <p>Hello World!</p>
        </>
    );
};