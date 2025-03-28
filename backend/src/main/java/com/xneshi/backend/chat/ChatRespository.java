package com.xneshi.backend.chat;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRespository extends JpaRepository<ChatMessage, Long> {
}
