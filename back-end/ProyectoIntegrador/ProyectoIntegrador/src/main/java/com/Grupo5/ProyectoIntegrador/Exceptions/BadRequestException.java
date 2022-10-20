package com.Grupo5.ProyectoIntegrador.Exceptions;


public class BadRequestException extends Exception{
    public BadRequestException(String mensaje){

        super(mensaje);
    }
}
