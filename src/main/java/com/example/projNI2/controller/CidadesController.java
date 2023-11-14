package com.example.projNI2.controller;

import com.example.projNI2.cidade.*;
import com.example.projNI2.time.Time;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cidades")
public class CidadesController {

    private CidadeRepository cidadeRepository;

    @Autowired
    private CidadeRepository repository;

    @PostMapping
    @Transactional
    public void insereCidade(@RequestBody @Valid DadosCidade dados) {
        repository.save(new Cidade(dados));
    }

    @GetMapping
    public Page<DadosListagemCidades> listarTodas(Pageable paginacao) {
        return repository.findAll(paginacao).map(DadosListagemCidades::new);
    }

    @GetMapping("/{id}")
    public Optional<Cidade> listarCidadePorId(@PathVariable Long id) {
        return repository.findById(id);
    }

    @PutMapping
    @Transactional
    public void atualizarCidade(@RequestBody @Valid DadosAtualizacaoCidade dados) {
        var cidade = repository.getReferenceById(dados.id());
        cidade.atualizarInformacoes(dados);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void deletarCidade(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @GetMapping("/pesquisa")
    public List<Cidade> mostrarCidade(@RequestParam String nome){
        return repository.findByNomeIgnoreCaseContaining(nome);
    }

}
