package com.xneshi.backend.chat;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ChatService {
  private final ChatRepository chatRepository;
  private final ChatMapper chatMapper;

  public ChatService(ChatRepository chatRepository, ChatMapper chatMapper) {
    this.chatRepository = chatRepository;
    this.chatMapper = chatMapper;
  }

  public void saveMessage(ChatMessage chatMessage) {
    chatRepository.save(chatMessage);
  }

  public List<ChatResponseDto> getAllMessages() {
    return chatRepository.findAll()
        .stream()
        .map(chatMapper::toChatMessageDto)
        .collect(Collectors.toList());
  }
}
