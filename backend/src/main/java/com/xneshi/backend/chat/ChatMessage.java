package com.xneshi.backend.chat;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatMessage {
  private String content;
  private String sender;
  private MesssageType type;
}
