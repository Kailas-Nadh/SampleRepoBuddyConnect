let count=0;
let score=0;
function calculateScore(option){
    if (count == 0 && option == 3) {
        score++;
    } 
    else if (count == 1 && option == 1) {
        score++;
    } 
    else if (count == 2 && option == 2) {
        score++;
    }

    loadQuestion();
}

function loadQuestion(){
    if(count==0){
        document.getElementById('question-1').innerHTML="Who is the PM of India.?";
        document.getElementById('option-1').innerHTML="Narendra Modi";
        document.getElementById('option-2').innerHTML="Suraj Bhai";
        document.getElementById('option-3').innerHTML="Megha Programmer";
        document.getElementById('option-4').innerHTML="Rahul Team Lead";
        count++;
    }
    else if(count==1){
        document.getElementById('question-1').innerHTML="Who is the CM of Kerala.?";
        document.getElementById('option-1').innerHTML="Emna Elizabeth";
        document.getElementById('option-2').innerHTML="Pinarayi Vijayan";
        document.getElementById('option-3').innerHTML="Revathy";
        document.getElementById('option-4').innerHTML="Devipriya";
        count++;
    }
    else if(count==2){
        document.getElementById('question-1').innerHTML="It's owari da";
        document.getElementById('option-1').innerHTML="Your score is";
        document.getElementById('option-2').innerHTML=score;
        document.getElementById('option-3').innerHTML="";
        document.getElementById('option-4').innerHTML="";
        count++;
    }      
}

