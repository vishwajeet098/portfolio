var txtArea=document.querySelector("#area");
var btns=document.querySelector("#btn");
var outputDiv=document.querySelector("#output");


function clickEventHandler(){
    var input =txtArea.value;
    if(input === "")
    {
        outputDiv.innerText ="please enter the year.";
    }
    else
    if(isNaN(input))
    {
        outputDiv.innerText ="Enter in specified format.";
    }
    else if(input%4===0)
    {
        outputDiv.innerText = input + " is a leap year.";
    }


    // else if(input%100===0)
    // {
    //     outputDiv.innerText ="You were born on a leap year";
    // }
    // else if(input%400===0)
    // {
    //     outputDiv.innerText ="You were born on a leap year";
    // }

    //the above commented lines may or may not be used


    else
    {
        outputDiv.innerText = input + " is not a leap year.";
    }
    // else
    // {
    //      checkLeap(input)
    // }

}

btn.addEventListener("click",clickEventHandler)




























// {
//     if(input % 400 === 0)
//     {
//         outPut.innerText="It is a leap year"

//     }
//     else if(input % 100 === 0)
//     {
//         outPut.innerText="It is a leap year"

//     }
//     else if(input % 4 === 0)
//     {
//         outPut.innerText="It is a leap year"

//     }
//     else
//     {
//         outPut.innerText="Its not a leap year"
//     }
// }
