package com.Grupo5.ProyectoIntegrador.controller;

import com.Grupo5.ProyectoIntegrador.service.CategoriaService;
import com.Grupo5.ProyectoIntegrador.service.ProductoService;
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
class ProductoControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    ProductoService productoService;
    @Test
    public void ProductoController() throws Exception{
        //testeamos metodo listar todos
        MvcResult respuesta = mockMvc.perform(MockMvcRequestBuilders.get("/productos").accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk()).andReturn();
        assertFalse(respuesta.getResponse().getContentAsString().isEmpty());

        //testeamos metodo get by id
        MvcResult respuesta1 = mockMvc.perform(MockMvcRequestBuilders.get("/productos/1"))
                .andDo(print()).andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.titulo").value("bmw"))
                .andReturn();

        assertEquals("application/json", respuesta1.getResponse().getContentType());

        //testeamos metodo para subir una categoria

        String payloadJson = "{\n" +
                "    \"titulo\": \"bmw\",\n" +
                "    \"descripcion\": \"auto genial\",\n" +
                "    \"ciudad\": {\"id\": \"1\"},\n" +
                "    \"categoria\": {\"id\": \"1\"},\n" +
                "    \"imagenes\": [],\n" +
                "    \"caracteristicas\": [],\n" +
                "    \"politicasProducto\": {\n" +
                "        \"normasTitulo\": \"normas\",\n" +
                "        \"normasDescripcion\": \"portarse bien\",\n" +
                "        \"seguridadTitulo\": \"seguridad\",\n" +
                "        \"seguridadDescripcion\": \"tener cuidado\",\n" +
                "        \"cancelacionTitulo\": \"cancelacion\",\n" +
                "        \"cancelacionDescripcion\": \"te va a devolver el dinero su p*ta madre\"\n" +
                "    }\n" +
                "}";

        ResultActions respuesta2 = mockMvc.perform(MockMvcRequestBuilders.post("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(payloadJson))
                .andDo(print()).andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.titulo").value("bmw"));

        //testeamos metodo para actualizar una categoria

        String payloadJson1 = "{\n" +
                "    \"id\": \"3\",\n" +
                "    \"titulo\": \"ford\",\n" +
                "    \"descripcion\": \"auto genial\",\n" +
                "    \"ciudad\": {\"id\": \"2\"},\n" +
                "    \"categoria\": {\"id\": \"2\"},\n" +
                "    \"imagenes\": [],\n" +
                "    \"caracteristicas\": [],\n" +
                "    \"politicasProducto\": {\n" +
                "        \"normasTitulo\": \"normas\",\n" +
                "        \"normasDescripcion\": \"portarse bien\",\n" +
                "        \"seguridadTitulo\": \"seguridad\",\n" +
                "        \"seguridadDescripcion\": \"tener cuidado\",\n" +
                "        \"cancelacionTitulo\": \"cancelacion\",\n" +
                "        \"cancelacionDescripcion\": \"te va a devolver el dinero su p*ta madre\"\n" +
                "    }\n" +
                "}";

        ResultActions respuesta3 = mockMvc.perform(MockMvcRequestBuilders.put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(payloadJson1))
                .andDo(print()).andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.titulo").value("ford"));

        //testeamos metodo para eliminar una categoria

        MvcResult respuesta4 = mockMvc.perform(MockMvcRequestBuilders.delete("/productos/1"))
                .andDo(print()).andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("text/plain;charset=UTF-8"))
                .andReturn();

        //testeamos metodo get by id
        MvcResult respuesta5 = mockMvc.perform(MockMvcRequestBuilders.get("/productos/filter?categoria=2").accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk()).andReturn();
        assertFalse(respuesta.getResponse().getContentAsString().isEmpty());
    }
}