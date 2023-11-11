package com.example.projNI2.time;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "times")
@Entity(name = "time")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Time {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private int anoFund;
    private String cidade;
    private String estado;


    public Time(DadosTime dados) {
        this.nome = dados.nome();
        this.anoFund = dados.anoFund();
        this.cidade = dados.cidade();
        this.estado = dados.estado();
    }
}
