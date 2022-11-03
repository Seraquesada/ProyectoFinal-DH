package com.Grupo5.ProyectoIntegrador.controller;

import com.Grupo5.ProyectoIntegrador.service.CategoriaService;
import com.Grupo5.ProyectoIntegrador.service.CiudadService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
class CiudadControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    CiudadService ciudadService;
    @Test
    public void CiudadTest() throws Exception{
        //testeamos metodo listar todos
        MvcResult respuesta = mockMvc.perform(MockMvcRequestBuilders.get("/ciudades").accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk()).andReturn();
        assertFalse(respuesta.getResponse().getContentAsString().isEmpty());
    }
}