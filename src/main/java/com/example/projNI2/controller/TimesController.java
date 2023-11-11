package com.example.projNI2.controller;

import com.example.projNI2.time.DadosTime;
import com.example.projNI2.time.Time;
import com.example.projNI2.time.TimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/times")
public class TimesController {

    @Autowired
    private TimeRepository repository;
    @PostMapping
    public void insereTime(@RequestBody DadosTime dados){
        repository.save(new Time(dados));
    }
}
