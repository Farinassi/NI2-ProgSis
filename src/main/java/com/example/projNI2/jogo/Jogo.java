package com.example.projNI2.jogo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
@Table(name = "jogos")
@Entity(name = "jogo")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Jogo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String nomeB;
    private String golsA;
    private String golsB;

    public Long getId() {
        return id;
    }
    public String getNome() {
        return nome;
    }
    public String getNomeB() {
        return nomeB;
    }
    public String getGolsA() {
        return golsA;
    }
    public String getGolsB() {
        return golsB;
    }

    public Jogo(DadosJogo dados) {
        this.nome = dados.nome();
        this.nomeB = dados.nomeB();
        this.golsA = dados.golsA();
        this.golsB = dados.golsB();
    }

    public void atualizarInformacoes(DadosAtualizacaoJogo dados) {
        if (dados.nome() != null) {
            this.nome = dados.nome();
        }
        if (dados.nomeB() != null) {
            this.nomeB = dados.nomeB();
        }
        if (dados.golsA() != null) {
            this.golsA = dados.golsA();
        }
        if (dados.golsB() != null) {
            this.golsB = dados.golsB();
        }
    }
}
