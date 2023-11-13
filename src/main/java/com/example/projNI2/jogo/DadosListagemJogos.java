package com.example.projNI2.jogo;

public record DadosListagemJogos(
        Long id,
        String nome,
        String nomeB,
        String golsA,
        String golsB
) {
    public DadosListagemJogos(Jogo jogo){
        this(jogo.getId(), jogo.getNome(), jogo.getNomeB(), jogo.getGolsA(), jogo.getGolsB());
    }
}
