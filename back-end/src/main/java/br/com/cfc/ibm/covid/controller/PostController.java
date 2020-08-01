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

    @PutMapping("{id}/downvote")
    public Post downVote(@PathVariable Long id, @RequestBody String username) {
        return postService.downVote(id, username);
    }

    @PutMapping("{id}/upvote")
    public Post upVote(@PathVariable Long id, @RequestBody String username) {
        return postService.upVote(id, username);
    }

    @PutMapping("{id}/comment")
    public Post comment(@PathVariable Long id, @RequestBody String comment){
        System.out.println(comment);
        return postService.comment(id, comment);
    }


}
