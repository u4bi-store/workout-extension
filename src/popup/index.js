onload = () => { 

    const timer = document.getElementById('timer'),
          content  = document.getElementById('content'),
          save  = document.querySelector('button');

    console.log(timer, content, save);


    timer.focus();
    
    chrome.storage.sync.get((items) => {
        timer.value   = items['WORKOUT_TIMER'];
        content.value = items['WORKOUT_CONTENT'];

    });

    save.onclick = ()=>{
        
        if(!timer.value || timer.value === '0') return alert('invalid timer');
        if(!content.value) return alert('invalid content');

        localStorage.setItem('WORKOUT_TIMER', timer.value);
        localStorage.setItem('WORKOUT_CONTENT',  content.value);
        
        chrome.storage.sync.set({'WORKOUT_TIMER': timer.value });
        chrome.storage.sync.set({'WORKOUT_CONTENT': content.value });

    } 

}