package com.example.projNI2.jogo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JogoRepository extends JpaRepository<Jogo, Long> {
    List<Jogo> findByNomeIgnoreCaseContaining(String nome);
}
