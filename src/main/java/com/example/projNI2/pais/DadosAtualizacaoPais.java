package com.example.projNI2.pais;

import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoPais(
        @NotNull
        Long id,
        String nome,
        String continente,
        String populacao
)
{
}
