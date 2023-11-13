package com.example.projNI2.cidade;

import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoCidade(
        @NotNull
        Long id,
        String nome,
        String estado,
        String pais,
        String populacao
)
{
}
