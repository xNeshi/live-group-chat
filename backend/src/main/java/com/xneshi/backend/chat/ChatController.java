package com.xneshi.backend.chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
  public final ChatService chatService;

  public ChatController(ChatService chatService) {
    this.chatService = chatService;
  }

  @MessageMapping("/chat.sendMessage")
  @SendTo("/topic/public")
  public ChatMessage sendMessage(
      @Payload ChatMessage chatMessage
  ) {
    chatService.saveMessage(chatMessage);
    return chatMessage;
  }

  @MessageMapping("/chat.addUser")
  @SendTo("/topic/public")
  public ChatMessage addUser(
      @Payload ChatMessage chatMessage,
      SimpMessageHeaderAccessor headerAccessor
  ) {
    // Add username in web socket
    headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
    return chatMessage;
  }

}
