app.factory( 'reviewFactory', function(){

	let maxStars = 5;

	let reviewGroups = [
		[
			{ 
				reviewer: 'Andrew S.',
				stars: 5,
				date: new Date(2017, 1, 22), // note date months start at 0 - Jan
				paragraphs: [
					"I started taking piano lessons in my late 20s and cycled through a few teachers in the city before finding Sheldon. Sheldon's teaching style is perfect for me, and he's got everything I'd want in a teacher.",
					"He provides a strong focus on piano fundamentals, with constant reminders throughout our practices to help build a foundation on which to learn. The lessons are structured and follow a clear road map to progress. He teaches good practice form so I can take what I've learned in my lessons and solidify my understanding/improve, instead of blindly fumbling through my practice time like I had in the past. We focus on both what I want to learn song-wise, and how to improve so I can learn to play songs I'd like to in the future. Not to mention he's very patient, kind and enjoyable to be around.",
					"I'd highly recommend Sheldon to anyone wanting to learn piano."
				] 
			}
		],
		[
			{ 
				reviewer: 'Chris G.',
				stars: 5,
				date: new Date(2015, 9, 11),
				paragraphs: [
					"I came to Sheldon one year ago having the desire to learn piano despite being in my mid 30s. I had some anxiety about learning such a complicated new skill as an adult, but I have to say it's working out extremely well. From the very beginning, Sheldon was warm and encouraging and sure to capitalize on the skills I have as an adult to learn the types of things I wanted to learn. Thanks to Sheldon's breadth of knowledge and ability, there doesn't seem to be any direction I could want to go in that he couldn't take me. Currently, for me, this means getting a full dose of music theory along with the piano skills because this is what I want; not only to be able to play piano, but to also understand how music works.",
					"In the beginning, of course, the things we were working on were what I would call 'simplified beginner music', After only one year though, we've largely moved beyond that into stuff that's sufficiently complicated that it doesn't sound like beginner music and is extremely satisfying to play. Members of my family are very impressed with what I can already do, which to me, is amazing and speaks volumes about how good Sheldon is.",
					"If you're considering taking on piano lessons, no matter what your age and skill level, I highly recommend Sheldon. He'll be able to form the lessons around the skills you already have to take you in the direction you want to go."
					
				] 
			}
		],
		[
			{ 
				reviewer: 'Deborah J.',
				stars: 5,
				date: new Date(2015, 5, 28),
				paragraphs: [
					'Although I have not used Sheldon as a piano teacher I did hire him to conduct some meditation exercises for staff at my non-profit office. He did an excellent job. He was prepared, thoughtful, and engaging. The staff loved it. Sheldon is professional and trustworthy in my experience.'
				] 
			},
			{ 
				reviewer: 'Anderson E.',
				stars: 5,
				date: new Date(2016, 6, 12), 
				paragraphs: [
					"I've taken piano lessons with Sheldon for a few months now.  My experience with piano was very slight (lessons as a child, remaining interest), and I'm in my 30s now.  I practice at home on an Alesis V49 MIDI controller, and enjoy the time I get to spend on Sheldon's actual piano.  Sheldon makes you feel comfortable right away and really stresses the fundamentals, approach, tempo, and language of the keys... but he customizes his exercises assuming you have something specific that you want to take away.  Really glad I chose Sheldon, and I do not plan to stop taking regular lessons any time soon.  GREAT TEACHER!"
				] 
			}
		],
		[
			{ 
				reviewer: 'R.B.',
				stars: 5,
				date: new Date(2015, 0, 15),
				paragraphs: [
					"I took piano lessons with Sheldon for a year and highly recommend him as a teacher. From the beginning, he was friendly, encouraging, and eager to meet me where I was in terms of my ability, needs, and interests. I came to Sheldon as an adult beginner who works nine-to-five. He made it possible for me to attend lessons during my lunch break and make steady progress at my own pace. Under his tutelage, I made progress in my understanding of music theory (a desire I expressed to Sheldon early on) as well as fundamentals of piano technique and musicianship. The lessons I took with Sheldon have served me extremely well and been a source of pleasure as well as musical advancement."
				] 
			},
			{ 
				reviewer: 'Roger B.',
				stars: 4,
				date: new Date(2014, 0, 7), 
				paragraphs: [
					"While other teachers open up a piano book and take lessons from it, Sheldon is all about finding out what you want to learn and using that as well, as the basics to get the most out of you and your piano playing.  I thought it was a daunting task but I finally have been able to create songs and understand theory.  Sheldon makes lessons fun and not a chore. That's important.  Highly recommended!!"
				] 
			}
		],
		[
			{ 
				reviewer: 'Matt Z.',
				stars: 5,
				date: new Date(2013, 7, 12), 
				paragraphs: [
					"Not a piano player, never played the piano seriously before (outside chopsticks), and went to Sheldon to learn a new song for a \"special project\". He worked with me very patiently to learn the song (along with some theory along the way) and while we never finished the work (personal life changes, NOT related to Sheldon), I intend to go back to finish the job at a later date."
				] 
			},
			{ 
				reviewer: 'Neko I.',
				stars: 5,
				date: new Date(2013, 7, 9),
				paragraphs: [
					"I saw his advertisement for lessons and decided to give it a try...and I am so happy that I did!  I have taken lessons for some years and I have been looking for a teacher who is nice, good at playing, can teach any style and plays the way I like.  He is all of that.  I know the last one is subjective but I was lucky to find it!  Sheldon is a unique teacher and pianist...his teaching style is a lot more relaxed and free-flowing than what I have known, and his playing is so different, which you will know if you hear his  compositions!  I recommend him if you are looking for a fun class!"
				] 
			}
		],
		[ //9
			{
				reviewer: 'Alan H.',
				stars: 5,
				date: new Date(2013, 3, 10), 
				paragraphs: [
					"Sheldon is an amazing piano teacher! I came to him having never played the piano before, and wanting to learn the basics, and gradually build up to play play classic songs that I'd always wanted to play, like Billy Joel and The Beatles.",
					"Sheldon is incredibly patient whilst being focused and instructive. He takes detailed notes for himself after every lesson to help with your growth, never gets down on you if you don't do your homework since he realizes people have busy lives and other distractions, and has a depth of knowledge that can answer any question and get you even more excited about learning an instrument.",
					"He's honestly one of the best teachers I've ever had, and I used to look forward to my class every week as the highlight of my week. I only stopped getting lessons from him because I moved overseas.",
					"If you have an interest in learning piano, I would highly recommend Sheldon as a piano teacher. I can't imagine there would be anyone better around."
				] 
			}
		],
		[
			{
				reviewer: 'M. M.',
				stars: 5,
				date: new Date(2012, 3, 29), 
				paragraphs: [
					"Sheldon has really helped me get to the next level with piano.  I took classical lessons as a kid, but had never really learned the structure of how to play and improvise on my own.  Sheldon focuses on the fundamentals, which are critical.  But then he shows you how those fundamentals can be the basis for improvising in different styles.  In just a few weeks he has gotten me improvising with jazz, latin jazz, blues, and rock themes.",
					"A great thing about the lessons is that Sheldon is strict with respect to fundamentals like tempo, but never makes you feel bad when you are off.  He catches everything and gently reminds you so that you start to hear your own playing better.  Also, each lesson he introduces something new to keep it interesting.",
					"Sheldon is a good spirit and the lessons are a happy time.  He also mixes in a little dose of Eastern philosophy with his teaching so that you see how playing the piano can be part of tuning in to the moment."
				] 
			}
		],
		[
			{ 
				reviewer: 'Colleen N.',
				stars: 5,
				date: new Date(2012, 1, 12), 
				paragraphs: [
					"Sheldon is a patient, wise teacher who has helped me finally learn piano at 40.",
					"I'd always wanted to learn and am grateful to have found a teacher who understands an adult beginner: he mixes the fundamentals like scales and chords with songs I know and love, and blends skill building with discussion of the overall theory and context of music. When I get frustrated, he's excellent at helping me figure out where I'm stumbling so I can work through it.",
					"I wasn't sure about lessons in the home of a guy I'd never met, but immediately felt it was the perfect set up. It makes lessons more welcoming and warm.",
					"I'm coming up on two years with Sheldon and wholeheartedly endorse him if you're someone like me who always wanted to play and never did. There's no time like the present."
				] 
			}
		],
		[
			{ 
				reviewer: 'Adriana L.',
				stars: 5,
				date: new Date(2009, 1, 23), 
				paragraphs: [
					"Of the four piano teachers I've had in my life, Sheldon is by far the best. I found him on Craig's List and for a while I was paying him with homemade pies.",
					"He is not the kind to brag about himself, but over time information leaks out -- he toured with Blues Traveler and the Spin Doctors, he played in an Allman Brothers cover band, he has a degree from music college, he's been teaching for 30 years, and he's a kung fu master. Everything he teaches has a holistic approach, on the theory that you can't produce good music if your body and mind aren't in harmony. This is great if you're a ball of stress like I am. He's a rigorous teacher, but he's also low-key; I told him up front there will be weeks when I can't practice, and I've never felt guilty at a lesson when this has happened.",
					"Sheldon never assigns anything that doesn't have a \"higher purpose\". After I mastered some Hanon drills and the basic scales, he started busting out these crazy improvisational exercises he created that use those drills as a starting point. He will never ask you to memorize from a worksheet or a theory book. ",
					"Overall, Sheldon is an amazing teacher and an interesting person. If you're interested in picking up the piano, or returning to it after a break (like I did), you should check him out!"
				] 
			}
		]
	];

	function getCountingArray(upTo){
		let a = [];

		for(let i = 1; i <= upTo; i++ ){
			a.push(i);
		}

		return a;
	}

	function getArrayOfMaxStarsIndexNums(){
		return getCountingArray(maxStars);
	}

	function getArrayOfReviewGroupIndexNums(){
		return getCountingArray(reviewGroups.length);
	}


	return {
		reviewGroups: reviewGroups,
		getArrayOfMaxStarsIndexNums: getArrayOfMaxStarsIndexNums,
		getArrayOfReviewGroupIndexNums: getArrayOfReviewGroupIndexNums
	}
});