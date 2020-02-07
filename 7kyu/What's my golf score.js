// I have the par value for each hole on a golf course and my stroke score on each hole. I have them stored as strings, because I wrote them down on a sheet of paper. Right now, I'm using those strings to calculate my golf score by hand: take the difference between my actual score and the par of the hole, and add up the results for all 18 holes.

// For example:

// If I took 7 shots on a hole where the par was 5, my score would be: 7 - 5 = 2
// If I got a hole-in-one where the par was 4, my score would be: 1 - 4 = -3.
// Doing all this math by hand is really hard! Can you help make my life easier?
// 
// 
// 
// 

function golfScoreCalculator(parList, scoreList){
    let parListarr = [...parList]
	return [...scoreList].reduce((total, item, index)=>total + ((+item) - parListarr[index]), 0);
}