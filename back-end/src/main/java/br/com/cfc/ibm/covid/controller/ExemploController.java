package br.com.cfc.ibm.covid.controller;

import br.com.cfc.ibm.covid.service.ExemploService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@Api(tags = "Exemplo de API do Let's Talk", value = "Api para recuparar informações das postagens e comentários dos usuários")
@AllArgsConstructor
public class ExemploController {

    @Autowired
    ExemploService exemploService;

    @GetMapping(path = "/posts")
    @ApiOperation(value = "Buscar posts dos usuários")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Erro encontrado na operacao ou nos dados informados")
    })
    public ResponseEntity buscarPost() {
        return ResponseEntity.ok(exemploService.buscarExemplo());
    }

}
