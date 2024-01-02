
@jhs512
jhs512 committed on May 19, 2022 
1 parent b3c213b
commit ee5d1ae
Showing 1 changed file with 28 additions and 0 deletions.
 28 changes: 28 additions & 0 deletions28  
db.sql
@@ -0,0 +1,28 @@
# DB 생성
DROP DATABASE IF EXISTS wise_saying;
CREATE DATABASE wise_saying;
USE wise_saying;

# 테이블 생성
CREATE TABLE wise_saying (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    reg_date DATETIME NOT NULL,
    content VARCHAR(200) NOT NULL,
    author VARCHAR(50) NOT NULL
);

# 데이터 생성
INSERT INTO wise_saying
SET reg_date = NOW(),
`content` = '나는 산적이다.',
author = '임꺽정';

INSERT INTO wise_saying
SET reg_date = NOW(),
`content` = '나는 의적이다.',
author = '홍길동';

INSERT INTO wise_saying
SET reg_date = NOW(),
`content` = '나는 조선의 국모다.',
author = '명성황후';