package com.example.projNI2.pais;

import com.example.projNI2.cidade.Cidade;

public record DadosListagemPais(
        Long id,
        String nome,
        String continente,
        String populacao
) {
    public DadosListagemPais(Pais pais){
        this(pais.getId(), pais.getNome(), pais.getContinente(), pais.getPopulacao());
    }
}
