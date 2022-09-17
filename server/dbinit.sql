CREATE TABLE tester (
  ID INT8 PRIMARY KEY NOT NULL,
  username STRING ,
  age INT8,
  occupation STRING,
  interests STRING
);

CREATE TABLE applicant (
    ID INT8 PRIMARY KEY NOT NULL,
    company_name STRING,
    title STRING,
    product_desc STRING,
    num_testers INT8,
    pay INT8,
    target_min_age INT8,
    target_occupation STRING,
    target_interests STRING,
    target_max_age INT8,
    tester_age INT8
);

-- company_name, title, product_desc, pay
SELECT * from applicant 
LEFT JOIN tester ON tester.ID = applicant.ID
WHERE
age >= target_min_age
AND company_name IS NOT NULL;