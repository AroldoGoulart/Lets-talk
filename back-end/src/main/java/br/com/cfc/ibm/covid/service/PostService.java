package br.com.cfc.ibm.covid.service;

import br.com.cfc.ibm.covid.model.Post;
import br.com.cfc.ibm.covid.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> all() {
        return postRepository.findAll();
    }

    public Post byId(Long id) {
        return postRepository.findById(id).orElse(null);
    }

    public Post save(Post post) {
        return postRepository.save(post);
    }
}
