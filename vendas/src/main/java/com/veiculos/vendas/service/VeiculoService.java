package com.veiculos.vendas.service;

import com.veiculos.vendas.model.Veiculo;
import com.veiculos.vendas.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository repo;

    public List<Veiculo> listar() {
        return repo.findAll();
    }

    public Veiculo salvar(Veiculo veiculo) {
        System.out.println(veiculo.toString());
        return repo.save(veiculo);
    }

    public void deletar(Long id) {
        repo.deleteById(id);
    }
}
