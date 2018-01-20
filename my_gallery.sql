CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	image VARCHAR(255) NOT NULL,
	like_count INT DEFAULT 0
);

INSERT INTO images (image)
VALUES ('http://www.fmwconcepts.com/misc_tests/caption_test/1tmp_6840.gif
'), ('http://www.fmwconcepts.com/misc_tests/caption_test/1tmp_6840.gif
'), ('http://www.fmwconcepts.com/misc_tests/caption_test/1tmp_6840.gif
'), ('http://www.fmwconcepts.com/misc_tests/caption_test/1tmp_6840.gif
'), ('http://www.fmwconcepts.com/misc_tests/caption_test/1tmp_6840.gif
'), ('http://www.fmwconcepts.com/misc_tests/caption_test/1tmp_6840.gif
')