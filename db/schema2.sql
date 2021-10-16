ALTER TABLE employees ADD
  CONSTRAINT fk_manager
    FOREIGN KEY (managerId)
    REFERENCES employees(id)
    ON DELETE SET NULL;
