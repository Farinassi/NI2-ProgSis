package com.example.projNI2.time;

import jakarta.validation.constraints.NotBlank;

public record DadosTime(
        @NotBlank(message = "O campo não pode ser vazio")
        String nome,
        @NotBlank(message = "O campo não pode ser vazio")
        String anofund,
        @NotBlank(message = "O campo não pode ser vazio")
        String cidade,
        @NotBlank(message = "O campo não pode ser vazio")
        String estado
) {
}
