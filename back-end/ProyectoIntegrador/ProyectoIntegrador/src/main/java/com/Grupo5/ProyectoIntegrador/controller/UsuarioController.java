package com.Grupo5.ProyectoIntegrador.controller;
import com.Grupo5.ProyectoIntegrador.Exceptions.AlreadyExistException;
import com.Grupo5.ProyectoIntegrador.Security.JWTUtil;
import com.Grupo5.ProyectoIntegrador.entity.*;
import com.Grupo5.ProyectoIntegrador.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin
public class UsuarioController {
    private final UsuarioService usuarioService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JWTUtil jwtUtil;


    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        }catch (BadCredentialsException e) {
            throw new Exception("Incorrect", e);
        }
        final Usuario userDetails = usuarioService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse((jwt)));
    }


    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }
    @PostMapping
    public ResponseEntity<Usuario> registrarUsuario(@RequestBody Usuario usuario) throws AlreadyExistException {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String passHash = passwordEncoder.encode(usuario.getPassword());
        List<Reserva> reservas = new ArrayList<>();
        usuario.setPassword(passHash);
        usuario.setUsuarioRol(RolUsuario.ROLE_USER);
        usuario.setReservas(reservas);
        ResponseEntity<Usuario> respuesta;
        respuesta=ResponseEntity.ok(usuarioService.guardar(usuario));
        return respuesta;
    }
}
