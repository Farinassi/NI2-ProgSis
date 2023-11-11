package com.example.projNI2.time;

public record DadosListagemTimes(
        Long id,
        String nome,
        String anofund,
        String cidade,
        String estado
) {
    public DadosListagemTimes(Time time){
        this(time.getId(), time.getNome(), time.getAnofund(), time.getCidade(), time.getEstado());
    }
}
