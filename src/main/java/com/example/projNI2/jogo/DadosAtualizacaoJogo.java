package com.example.projNI2.jogo;

import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoJogo(
        @NotNull
        Long id,
        String nome,
        String nomeB,
        String golsA,
        String golsB
) {

}
