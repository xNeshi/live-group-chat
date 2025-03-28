package com.xneshi.backend.chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.user.SimpUserRegistry;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
  private final SimpUserRegistry simpUserRegistry;

  public ChatController(SimpUserRegistry simpUserRegistry) {
    this.simpUserRegistry = simpUserRegistry;
  }

  @MessageMapping("/chat.sendMessage")
  @SendTo("/topic/public")
  public ChatMessage sendMessage(
      @Payload ChatMessage chatMessage
  ) {
    return chatMessage;
  }

  @MessageMapping("/chat.addUser")
  @SendTo("/topic/public")
  public ChatMessage addUser(
      @Payload ChatMessage chatMessage,
      SimpMessageHeaderAccessor headerAccessor
  ) {
    // Check if Username already exists
    if (simpUserRegistry.getUser(chatMessage.getSender()) != null) {
      throw new IllegalArgumentException("Sender already exists");
    }
    // Add username in web socket
    headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
    return chatMessage;
  }
}
