package com.javaspring.online_quiz_application.controller;

import com.javaspring.online_quiz_application.model.Question;
import com.javaspring.online_quiz_application.service.IQuestionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/quizzes")
@RequiredArgsConstructor
public class QuestionController {

    private final IQuestionService questionService;

    @PostMapping("/create-new-question")
    public ResponseEntity<Question> createQuestion (@Valid @RequestBody Question question){
        Question createdQuestion = questionService.createQuestion(question);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdQuestion);

    }

    

}
