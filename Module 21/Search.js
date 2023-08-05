const lyrics = 'Tumi bondu kala phakhi ami jano ki .Bosonto kal e tumay bolte pari ni ';

 const searchString = 'pHAkHi'
 
 
const doesExit = lyrics.toLocaleLowerCase().includes(searchString.toLowerCase());
// console.log(doesExit);


// ------------------------------------------------
// console.log(lyrics.indexOf('kala'));

if(lyrics.indexOf("kal") == -1){
    console.log('not found'); 
}
else{
    console.log('found');
}