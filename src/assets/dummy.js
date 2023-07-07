import {
	cardDK,
	cardLuigi,
	cardMario,
	cardPeach,
	cardBrowser,
	bgMario,
	bgPeach,
	bgLuigi,
	bgDK,
	bgBrowser,
	bgLargeLuigi,
	bgLargeDK,
	bgLargePeach,
	bgLargeMario,
	bgLargeBowser,
} from "./images";

export const championsData = [
	{
		img: cardBrowser,
		name: "Bowser",
		bg: bgBrowser,
		nickName: "Koopa",
		description: `It is a fictional species known as "Koopa". Bowser is the main antagonist of the franchise and is the king of the Koopas, a species of anthropomorphic turtles with spiny shells. Throughout the games, Bowser appears as a large reptile with green skin, horns and sharp claws. He is known for kidnapping Princess Peach and challenging Mario and his friends on numerous occasions.`,
		bgLarge: bgLargeBowser,
	},
	{
		img: cardPeach,
		name: "Peach",
		bg: bgPeach,
		nickName: "Princess Toadstool",
		description:
			"Princess Peach, also known as Princess Toadstool. She is the princess of the Mushroom Kingdom and a key figure in the Mario games. Peach is portrayed as a kind and charismatic princess, with blonde hair and wears a pink dress with fuchsia accents. Bowser often attempts to kidnap her, leading Mario to embark on adventures to rescue her. Peach is also known for her special ability to float in the air for short periods of time, which gives her an advantage in some games.",
		bgLarge: bgLargePeach,
	},
	{
		img: cardLuigi,
		name: "Luigi",
		bg: bgLuigi,
		nickName: "Luigi",
		description: `Luigi is Mario's younger brother and is often depicted as a companion and ally in adventures. Luigi is recognized by his appearance similar to Mario's, with the difference being that he wears a green shirt instead of a red one. Throughout the games, Luigi is noted for his more shy and nervous personality compared to his brother. Although he is often overshadowed by Mario, Luigi has had his own games, such as "Luigi's Mansion," where he ventures through a haunted mansion to rescue Mario. Luigi is loved by fans of the series and has become a popular character in his own right.`,
		bgLarge: bgLargeLuigi,
	},
	{
		img: cardMario,
		name: "Mario",
		bg: bgMario,
		nickName: "Mario Bross",
		description: `Mario is the main character has become one of the most recognizable and beloved characters in the history of video games. He is a friendly and energetic-looking Italian plumber with a mustache, red hat and blue overalls.
        Mario embarks on various adventures to rescue Princess Peach and fight his nemesis, Bowser. He is known for his ability to jump and break blocks, as well as for obtaining special powers by collecting items such as the superstar, the fire flower or the mushroom that allows him to grow in size. In addition to the main platform games, Mario has also ventured into other genres such as racing, sports and party games.`,
		bgLarge: bgLargeMario,
	},
	{
		img: cardDK,
		name: "Donkey Kong",
		bg: bgDK,
		nickName: "THE NINE-TAILED FOX",
		role: "MAGE",
		difficulty: "MODERATE",
		description: `Donkey Kong first debuted in 1981 and has been an integral part of video game history ever since. Donkey Kong is an anthropomorphic gorilla, and his appearance has evolved over the years.
            In the original Donkey Kong game, he was the antagonist and would kidnap Jumpman's girlfriend (who later became Mario), throwing barrels and obstacles to stop him. However, over time, Donkey Kong became a hero in his own series of games.
            The Donkey Kong character has been featured in numerous games, including "Donkey Kong Country" and "Donkey Kong 64".He has also appeared in games in the Mario series, such as the Mario Kart and Mario Party titles.Donkey Kong is known for his strength and love of bananas.`,
		bgLarge: bgLargeDK,
	},
];
