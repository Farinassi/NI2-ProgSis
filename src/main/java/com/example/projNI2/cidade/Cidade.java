package com.example.projNI2.cidade;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
@Table(name = "cidades")
@Entity(name = "com/example/projNI2/pais")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Cidade {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String estado;
    private String pais;
    private String populacao;

    public Cidade(DadosCidade dados){
        this.nome = dados.nome();
        this.estado = dados.estado();
        this.pais = dados.pais();
        this.populacao = dados.populacao();
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEstado() {
        return estado;
    }

    public String getPais() {
        return pais;
    }

    public String getPopulacao() {
        return populacao;
    }

    public void atualizarInformacoes(DadosAtualizacaoCidade dados) {
        if (dados.nome() != null) {
            this.nome = dados.nome();
        }
        if (dados.estado() != null) {
            this.estado = dados.estado();
        }
        if (dados.pais() != null) {
            this.pais = dados.pais();
        }
        if (dados.populacao() != null) {
            this.populacao = dados.populacao();
        }
    }

}
