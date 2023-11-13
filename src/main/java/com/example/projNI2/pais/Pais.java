package com.example.projNI2.pais;

import com.example.projNI2.cidade.DadosCidade;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
@Table(name = "paises")
@Entity(name = "pais")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Pais {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String continente;
    private String populacao;

    public Pais(DadosPais dados){
        this.nome = dados.nome();
        this.continente = dados.continente();
        this.populacao = dados.populacao();
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getContinente() {
        return continente;
    }

    public String getPopulacao() {
        return populacao;
    }

    public void atualizarInformacoes(DadosAtualizacaoPais dados) {
        if (dados.nome() != null) {
            this.nome = dados.nome();
        }
        if (dados.continente() != null) {
            this.continente = dados.continente();
        }
        if (dados.populacao() != null) {
            this.populacao = dados.populacao();
        }
    }
}
