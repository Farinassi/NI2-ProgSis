package com.example.projNI2.controller;

import com.example.projNI2.time.*;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/times")
public class TimesController {

    private TimeRepository timeRepository;

    @Autowired
    private TimeRepository repository;
    @PostMapping
    @Transactional
    public void insereTime(@RequestBody @Valid DadosTime dados){
        repository.save(new Time(dados));
    }

    @GetMapping
    public Page<DadosListagemTimes> listarTodos(Pageable paginacao){
        return repository.findAll(paginacao).map(DadosListagemTimes::new);
    }

    @GetMapping("/{id}")
    public Optional<Time> listarTimePorId(@PathVariable Long id){
        return repository.findById(id);
    }

    @PutMapping
    @Transactional
    public void atualizarTime(@RequestBody @Valid DadosAtualizacaoTime dados){
        var time = repository.getReferenceById(dados.id());
        time.atualizarInformacoes(dados);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void deletarTime(@PathVariable Long id){
        repository.deleteById(id);
    }

    @GetMapping("/pesquisa")
    public List<Time> mostrarTime(@RequestParam String nome){
        return repository.findByNomeIgnoreCaseContaining(nome);
    }
}
