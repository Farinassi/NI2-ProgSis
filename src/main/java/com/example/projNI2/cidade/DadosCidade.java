package com.example.projNI2.cidade;

import jakarta.validation.constraints.NotBlank;

public record DadosCidade(
        @NotBlank(message = "O campo não pode ser vazio")
        String nome,
        @NotBlank(message = "O campo não pode ser vazio")
        String estado,
        @NotBlank(message = "O campo não pode ser vazio")
        String pais,
        @NotBlank(message = "O campo não pode ser vazio")
        String populacao
) {
}
