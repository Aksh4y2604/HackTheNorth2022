CREATE TABLE tester (
  ID INT8 PRIMARY KEY NOT NULL,
  name STRING ,
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
    target_age INT8,
    target_occupation STRING,
    target_interests STRING
);