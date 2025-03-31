package com.xneshi.backend.chat;

import org.springframework.stereotype.Service;

@Service
public class ChatMapper {
  public ChatResponseDto toChatMessageDto(ChatMessage chatMessage){
    return new ChatResponseDto(
        chatMessage.getContent(),
        chatMessage.getSender(),
        chatMessage.getCreatedAt()
    );
  }
}
