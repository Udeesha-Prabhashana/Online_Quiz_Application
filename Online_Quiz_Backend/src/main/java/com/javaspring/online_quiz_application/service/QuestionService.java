package com.javaspring.online_quiz_application.service;

import com.javaspring.online_quiz_application.model.Question;

import java.util.List;
import java.util.Optional;

public class QuestionService implements IQuestionService {

    @Override
    public Question createQuestion(Question question) {
        return null;
    }

    @Override
    public List<Question> getAllQuestions() {
        return null;
    }

    @Override
    public Optional<Question> getQuestionById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<String> getAllSubjects() {
        return null;
    }

    @Override
    public Question updateQuestion(Long id, Question question) {
        return null;
    }

    @Override
    public void deleteQuestion(Long id) {

    }

    @Override
    public List<Question> getQuestionForUser(Integer numOfQuestions, String subject) {
        return null;
    }
}
