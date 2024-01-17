package com.javaspring.online_quiz_application.service;

import com.javaspring.online_quiz_application.model.Question;

import java.util.List;
import java.util.Optional;

public interface IQuestionService {

    Question createQuestion(Question question);

    List<Question> getAllQuestions();

    Optional<Question> getQuestionById(Long id);

    List<String> getAllSubjects();

    Question updateQuestion(Long id, Question question);

    void deleteQuestion(Long id);

    List<Question> getQuestionForUser(Integer numOfQuestions, String subject);

}

