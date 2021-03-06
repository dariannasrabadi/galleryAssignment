CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	image VARCHAR(255) NOT NULL,
	like_count INT DEFAULT 0,
	view_count INT DEFAULT 0,
	image_display BOOLEAN DEFAULT true,  
	text_display BOOLEAN DEFAULT false,
	description VARCHAR(255)
);

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	comment VARCHAR(255),
	image_id INT REFERENCES images,
	comment_status BOOLEAN DEFAULT true
);

INSERT INTO images (image, description)
VALUES ('assets/us.jpg', 'Me ∞ Christine, been together ever since college. The person I want to spend all my life with. The good, the bad and everything that comes with it.'), ('assets/usfamily.jpg', 'Family in the U.S., thanks for being here and helping me out throughout this new journey of mine.'), ('assets/dad.jpg', 'Dad as he was, one of the view pictures I have with him when he was still healthy. I do this to my nephew as well.'), ('assets/friends.jpg', 'Friends to family, grew up together since grade 3, after all the moments shared they are family to me.'), ('assets/niecenephew.jpg', 'Niece and Nephew, both lovable and cute. They can bring a smile to my face during times when I miss home the most.'), ('assets/mom.jpg', 'Mother, took care of the family on her own for more than 20 years. Will always love and respect her for everything she has done for the family.');

INSERT INTO comments (comment, image_id)
VALUES ('Awwww!', 1),('Water Fight!', 2),('Feels', 3),('Unrelated but Friends was a good show!', 4),('Cuties!', 5),('A Strong Woman!', 6);


