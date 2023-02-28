import { useState, useEffect } from "react";
import axios from "axios";

export default function Consulta() {
    const [dados, setDados] = useState();
    
    useEffect(() => {
        const buscaDados = async () => {
            try {
                let response = await fetch("https://localhost:8080/read");
                setDados(response);
            } catch(error){
                console.log(error);
            }            
        };

        buscaDados();
    }, []);

    return(
        <div>
            <p>{dados}</p>
        </div>
    );
};