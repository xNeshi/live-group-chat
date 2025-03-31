package com.xneshi.backend.chat;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatMessage {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private Long id;
  private String content;
  private String sender;
  private MesssageType type;
  @CreationTimestamp
  @Column(updatable = false)
  private LocalDateTime createdAt;


}
