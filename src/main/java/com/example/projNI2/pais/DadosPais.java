package com.example.projNI2.pais;

import jakarta.validation.constraints.NotBlank;

public record DadosPais(
        @NotBlank(message = "O campo não pode ser vazio")
        String nome,
        @NotBlank(message = "O campo não pode ser vazio")
        String continente,
        @NotBlank(message = "O campo não pode ser vazio")
        String populacao
) {
}
