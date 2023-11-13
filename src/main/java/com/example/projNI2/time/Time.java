package com.example.projNI2.time;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
@Table(name = "times")
@Entity(name = "com/example/projNI2/jogo")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Time {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String anofund;
    private String cidade;
    private String estado;

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getAnofund() {
        return anofund;
    }

    public String getCidade() {
        return cidade;
    }

    public String getEstado() {
        return estado;
    }

    public Time(DadosTime dados) {
        this.nome = dados.nome();
        this.anofund = dados.anofund();
        this.cidade = dados.cidade();
        this.estado = dados.estado();
    }

    public void atualizarInformacoes(DadosAtualizacaoTime dados) {
        if (dados.nome() != null) {
            this.nome = dados.nome();
        }
        if (dados.anofund() != null) {
            this.anofund = dados.anofund();
        }
        if (dados.cidade() != null) {
            this.cidade = dados.cidade();
        }
        if (dados.estado() != null) {
            this.estado = dados.estado();
        }
    }
}
