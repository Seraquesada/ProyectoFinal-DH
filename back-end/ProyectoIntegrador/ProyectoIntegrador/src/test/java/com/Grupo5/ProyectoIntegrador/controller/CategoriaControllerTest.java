package com.Grupo5.ProyectoIntegrador.controller;

import com.Grupo5.ProyectoIntegrador.entity.Categoria;
import com.Grupo5.ProyectoIntegrador.service.CategoriaService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
class CategoriaControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    CategoriaService categoriaService;

    @Test
    public void categoriaControllerTest () throws Exception{
        Categoria categoria1 = new Categoria("economico", "muy economico", "www.imagen.com");
        Categoria categoria2 = new Categoria("premium", "muy premium", "www.imagen2.com");

        Categoria categoriaGuardar1 = categoriaService.guardar(categoria1);

        //testeamos metodo listar todos
        MvcResult respuesta = mockMvc.perform(MockMvcRequestBuilders.get("/categorias").accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk()).andReturn();
        assertFalse(respuesta.getResponse().getContentAsString().isEmpty());

        //testeamos metodo get by id
        MvcResult respuesta1 = mockMvc.perform(MockMvcRequestBuilders.get("/categorias/1"))
                .andDo(print()).andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.titulo").value("economico"))
                .andReturn();

        assertEquals("application/json", respuesta1.getResponse().getContentType());

        //testeamos metodo para subir una categoria

        String payloadJson = "{\"titulo\" : \"premium\", \"descripcion\" : \"muy premium\", \"urlImagen\" : \"www.imagen2.com\"}";

        ResultActions respuesta2 = mockMvc.perform(MockMvcRequestBuilders.post("/categorias")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(payloadJson))
                .andDo(print()).andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.descripcion").value("muy premium"));

        //testeamos metodo para actualizar un odontologo

        String payloadJson1 = "{\"id\" : \"2\", \"titulo\" : \"electrico\", \"descripcion\" : \"muy electrico\", \"urlImagen\" : \"www.imagen2.com\"}";

        ResultActions respuesta3 = mockMvc.perform(MockMvcRequestBuilders.put("/categorias")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(payloadJson1))
                .andDo(print()).andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.descripcion").value("muy electrico"));

        //testeamos metodo para eliminar un turno

        MvcResult respuesta4 = mockMvc.perform(MockMvcRequestBuilders.delete("/categorias/2"))
                .andDo(print()).andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("text/plain;charset=UTF-8"))
                .andReturn();
    }



}