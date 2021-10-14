INSERT INTO departments
  (name)
VALUES 
  ('PMO'),
  ('Engineering'),
  ('Sales'),
  ('Finances'),
  ('Legal'),
  ('Operations');

INSERT INTO roles
  (title,salary,departmentId)
VALUES
  ('Project Leader',90000.00,1),
  ('PMO Manager',120000.00,1),
  ('Paralegal',75000.00,5),
  ('Legal Lead',95000.00,5),
  ('Sr Sales Rep',75000.00,3),
  ('Sales Lead',110000.00,3),
  ('Jr Engineer',80000.00,2),
  ('Sr Engineer',102000.00,2),
  ('Engineer Lead',125000.00,2),
  ('Accountant',85000.00,4),
  ('Accountant CPA',98000.00,4),
  ('Tech Support',65000.00,6),
  ('Tech Support Lead',85000.00,6);



INSERT INTO employees
  (firstName, lastName, roleId, managerId)
VALUES
  ('Charlott','Maged',1,6),
  ('Cristal','Amoruso',1,6),
  ('Buck','Sabedra',1,6),
  ('Kathryne','Yoshina',1,6),
  ('Jazmin','Bathurst',1,6),
  ('Sherill','Brasuell',2,38),
  ('Laci','Gambino',3,10),
  ('Lyn','Ciani',3,10),
  ('Mozell','Frankovich',3,10),
  ('Rodolfo','Sciarretta',4,38),
  ('Dominga','Hartfield',5,18),
  ('Anton','Dalmau',5,18),
  ('Cristi','Zaker',5,18),
  ('Alfredo','Younie',5,18),
  ('Lu','Aveles',5,18),
  ('Sheryl','Ferrall',5,18),
  ('Mallory','Haslip',5,18),
  ('Duane','Mustin',6,38),
  ('Lino','Haigler',7,26),
  ('Fabian','Martincic',7,26),
  ('Malorie','Lyseski',8,26),
  ('Julie','Goodaker',8,26),
  ('Kyoko','Clarke',8,26),
  ('Deedra','Holder',8,26),
  ('Denise','Steier',8,26),
  ('Sueann','Larkan',9,38),
  ('Joya','Lyon',10,31),
  ('Genaro','Cashdollar',10,31),
  ('Tatum','Hurta',10,31),
  ('Mary','Shelsy',10,31),
  ('Francesco','Shurman',11,38),
  ('Modesto','Nian',12,37),
  ('Sammie','Konarski',12,37),
  ('Darline','Windover',12,37),
  ('Kelle','Mcgeady',12,37),
  ('Jina','Horton',12,37),
  ('Wilda','Vitagliano',13,38),
  ('Pinoccio','Geppetto',2,NULL);

