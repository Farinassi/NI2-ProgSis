package com.example.projNI2.controller;

import com.example.projNI2.jogo.*;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/jogos")
public class JogosController {

    private JogoRepository jogoRepository;

    @Autowired
    private JogoRepository repository;
    @PostMapping
    @Transactional
    public void insereJogo(@RequestBody @Valid DadosJogo dados){
        repository.save(new Jogo(dados));
    }

    @GetMapping
    public Page<DadosListagemJogos> listarTodos(Pageable paginacao){
        return repository.findAll(paginacao).map(DadosListagemJogos::new);
    }

    @GetMapping("/{id}")
    public Optional<Jogo> listarJogoPorId(@PathVariable Long id){
        return repository.findById(id);
    }

    @PutMapping
    @Transactional
    public void atualizarJogo(@RequestBody @Valid DadosAtualizacaoJogo dados){
        var time = repository.getReferenceById(dados.id());
        time.atualizarInformacoes(dados);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void deletarJogo(@PathVariable Long id){
        repository.deleteById(id);
    }

    @GetMapping("/pesquisa")
    public List<Jogo> mostrarJogoPeloTimeA(@RequestParam String nome){
        return repository.findByNomeIgnoreCaseContaining(nome);
    }


}
