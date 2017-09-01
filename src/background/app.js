var count = 0,
    tabId = 0,
    data  = {}; 

chrome.storage.sync.get((items) => {
    
    data = {
        timer   : parseInt(items['WORKOUT_TIMER']) || null,
        content : items['WORKOUT_CONTENT'] || null
    };
    
    console.log(data);

    if(data.timer) workoutCount();

});

chrome.storage.onChanged.addListener((changes, namespace) => {
    
    if(changes['WORKOUT_TIMER'])   data.timer = parseInt(changes['WORKOUT_TIMER'].newValue);
    if(changes['WORKOUT_CONTENT']) data.content = changes['WORKOUT_CONTENT'].newValue;
    
    count = 0;

});

function workoutCount(){

    setTimeout( () => {
        
        count !== data.timer ? count++ : ( ()=>{
            
            count = 0;            
            
            alert(data.content+'!!');

        })();

        console.log(count);

        workoutCount();

    }, 1000);

}
 