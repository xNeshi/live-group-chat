package com.xneshi.backend.chat;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatMessage {
  private String content;
  private String sender;
  private MesssageType type;
  private LocalDateTime timestamp;
}
