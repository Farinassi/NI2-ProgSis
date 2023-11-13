package com.example.projNI2.controller;

import com.example.projNI2.pais.*;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/pais")
public class PaisController {
    private PaisRepository cidadeRepository;

    @Autowired
    private PaisRepository repository;

    @PostMapping
    @Transactional
    public void inserePais(@RequestBody @Valid DadosPais dados) {
        repository.save(new Pais(dados));
    }

    @GetMapping
    public Page<DadosListagemPais> listarTodos(Pageable paginacao) {
        return repository.findAll(paginacao).map(DadosListagemPais::new);
    }

    @GetMapping("/{id}")
    public Optional<Pais> listarCidadePorId(@PathVariable Long id) {
        return repository.findById(id);
    }

    @PutMapping
    @Transactional
    public void atualizarPais(@RequestBody @Valid DadosAtualizacaoPais dados) {
        var cidade = repository.getReferenceById(dados.id());
        cidade.atualizarInformacoes(dados);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void deletarCidade(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
