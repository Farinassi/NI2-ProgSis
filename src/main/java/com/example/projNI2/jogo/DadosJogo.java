package com.example.projNI2.jogo;

import jakarta.validation.constraints.NotBlank;

public record DadosJogo(
        @NotBlank(message = "O campo não pode ser vazio")
        String nome,
        @NotBlank(message = "O campo não pode ser vazio")
        String nomeB,
        @NotBlank(message = "O campo não pode ser vazio")
        String golsA,
        @NotBlank(message = "O campo não pode ser vazio")
        String golsB
) {
}
