package com.example.projNI2.pais;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaisRepository extends JpaRepository<Pais, Long> {
    List<Pais> findByNomeIgnoreCaseContaining(String nome);
}
