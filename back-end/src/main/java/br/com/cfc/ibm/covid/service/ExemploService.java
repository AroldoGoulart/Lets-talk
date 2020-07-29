package br.com.cfc.ibm.covid.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class ExemploService {


    public String buscarExemplo() {
        return "Olá Mundo";
    }
}
