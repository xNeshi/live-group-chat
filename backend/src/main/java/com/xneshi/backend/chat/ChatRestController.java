package com.xneshi.backend.chat;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ChatRestController {
  private final ChatService chatService;

  public ChatRestController(ChatService chatService) {
    this.chatService = chatService;
  }

  @GetMapping("/api/chats")
  public List<ChatResponseDto> getAllMessages() {
    return chatService.getAllMessages();
  }
}
