package com.example.projNI2.cidade;

public record DadosListagemCidades(
        Long id,
        String nome,
        String estado,
        String pais,
        String populacao
) {
    public DadosListagemCidades(Cidade cidade){
        this(cidade.getId(), cidade.getNome(), cidade.getEstado(), cidade.getPais(), cidade.getPopulacao());
    }
}
