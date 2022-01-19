


function continueTheGame() {
	const choice = prompt('רוצה לשחק ? (y/n)');

	if (choice === 'y') {
		return true;
	} else {
		return false;
	}
}


function Hot_or_cold(){


let Continue = continueTheGame()

const pc = Math.floor(Math.random() * 20);
let user = parseInt(prompt('מ 0 עד 20 הכנס מספר '))

while(Continue){

   if(pc>user){

       alert (' מדי נמוך' )
    
       }else  alert('מדי גבוה' ) 
 
     if(pc===user)  {  alert ('מצאת את המספר== כל הכבודדדדדד' );
     break
} 
   

       user = parseInt(prompt('נסה שוב'))
   
}

    

     }Hot_or_cold()
