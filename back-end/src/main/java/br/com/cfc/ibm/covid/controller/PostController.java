package br.com.cfc.ibm.covid.controller;

import br.com.cfc.ibm.covid.model.Post;
import br.com.cfc.ibm.covid.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("post")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public List<Post> all(){
        return postService.all();
    }

    @GetMapping("{id}")
    public Post byId(@PathVariable Long id){
        return postService.byId(id);
    }

    @PostMapping()
    public Post save(@RequestBody Post post) {
        return postService.save(post);
    }
}
