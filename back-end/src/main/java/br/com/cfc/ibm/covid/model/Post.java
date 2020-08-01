package br.com.cfc.ibm.covid.model;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;


@Entity
@Data
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String header;

    @Column(nullable = false)
    private String category;

    @Lob
    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Integer upVotes;

    @Column(nullable = false)
    private Integer downVotes;

    @CreationTimestamp
    private LocalDateTime created;

    @UpdateTimestamp
    private LocalDateTime updated;

    private ArrayList<String> comments;

    public void downVote() {
        this.downVotes += 1;
    }

    public void upVote() {
        this.upVotes += 1;
    }

    public void setNewComment(String comment) {
        this.comments.add(comment);
    }
}
