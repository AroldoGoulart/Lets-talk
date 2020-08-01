package br.com.cfc.ibm.covid.service;

import br.com.cfc.ibm.covid.model.Post;
import br.com.cfc.ibm.covid.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> all() {
        return postRepository.findAllByOrderByIdDesc();
    }

    public Post byId(Long id) {
        return postRepository.findById(id).orElse(null);
    }

    public Post save(Post post) {
        return postRepository.save(post);
    }

    public Post post (Post post, String comment) {
        return post;
    }

    public Post downVote(Long id, String username) {
        var post = postRepository.findById(id).get();
        post.downVote();
        postRepository.save(post);
        return post;
    }

    public Post upVote(Long id, String username) {
        var post = postRepository.findById(id).get();
        post.upVote();
        postRepository.save(post);
        return post;
    }

    public Post comment(Long id, String comment) {
        var post = postRepository.findById(id).get();
        post.setNewComment(comment);
        postRepository.save(post);
        return post;
    }

}
