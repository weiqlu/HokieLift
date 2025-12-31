package dev.weiqlu.hokielift.hokielift_backend.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class test {

    @GetMapping("/")
    public String server() {
        return "server";
    }
}
 