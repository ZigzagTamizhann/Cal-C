let display = document.getElementById('output-answer');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case '=':
                try
                {
                    display.innerText = eval(display.innerText);
                } 
                catch
                {
                    display.innerText = "Check Your Input"
                }
                break;

            case 'C':
                display.innerText = '';
                break;
        
            case '←':
                if (display.innerText)
                {
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
                
            case '√':
                display.innerText=Math.sqrt(display.innerText);
                break;

            case 'sin':
                display.innerText=Math.sin(display.innerText);
                break;

            case 'cos':
                display.innerText=Math.cos(display.innerText);
                break;

            case 'tan':
                display.innerText=Math.tan(display.innerText);
                break;

            default:
                display.innerText += e.target.innerText;
        }
    });
});