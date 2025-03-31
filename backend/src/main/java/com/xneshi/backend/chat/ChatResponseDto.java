package com.xneshi.backend.chat;

import java.time.LocalDateTime;

public record ChatResponseDto(
    String content,
    String sender,
    LocalDateTime createdAt
) {
}
