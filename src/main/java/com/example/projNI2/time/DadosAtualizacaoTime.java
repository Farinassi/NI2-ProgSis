package com.example.projNI2.time;

import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoTime(
        @NotNull
        Long id,
        String nome,
        String anofund,
        String cidade,
        String estado
) {

}
