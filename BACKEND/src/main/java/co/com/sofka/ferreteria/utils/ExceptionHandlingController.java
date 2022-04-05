package co.com.sofka.ferreteria.utils;

import co.com.sofka.ferreteria.models.Inventario;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.support.ErrorMessage;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;
import com.google.gson.Gson;

@ControllerAdvice
public class ExceptionHandlingController {
    Gson gson = new Gson();

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorMessage> handleException(Exception e){
        return new ResponseEntity(e.getMessage(), HttpStatus.I_AM_A_TEAPOT);
    }

}
