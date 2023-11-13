package com.example.projNI2.cidade;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CidadeRepository extends JpaRepository<Cidade, Long> {
    List<Cidade> findByNomeIgnoreCaseContaining(String nome);
}
