CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    grade INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);