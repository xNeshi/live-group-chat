package com.xneshi.backend.config;

import com.xneshi.backend.chat.ChatMessage;
import com.xneshi.backend.chat.MesssageType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Component
@RequiredArgsConstructor
@Slf4j
public class WebSocketEventListener {
  private SimpMessageSendingOperations messagingTemplate;

  @EventListener
  public void handleWebSocketConnectListener(
      SessionDisconnectEvent event
  ) {
    StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
    String username = (String) headerAccessor.getSessionAttributes().get("username");
    if (username != null){
      log.info("User {} has been Disconnected", username);
      var chatMessage = ChatMessage.builder()
          .type(MesssageType.LEAVE)
          .sender(username)
          .build();
      messagingTemplate.convertAndSend("/topic/public", chatMessage);
    }
  }
}
