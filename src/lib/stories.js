export let stories = [
    {
        id:"1", 
        message: "You find yourself in front of a computer. A program called Visual Studio Code is open.", 
        choices: [
            {id:"3", text:"Read it"},
            {id:"2", text:"Leave it"}
        ]
    },
    {
        id:"2",
        message: "You close the computer and leave.",
        choices: [
            {id:"1", text:"Restart"}
        ]
    },
    {
        id:"3",
        message: "The text on the screen says: \"//TODO: Center the div\". You see that you can create one of two types of files. What do you do?",
        choices: [
            {id:"4", text: "Make JS file"},
            {id:"5", text: "Make CSS file"},
            {id:"2", text: "Give up"}
        ]
    },
    {
        id:"4",
        message: "After another two hours of googling you still have not found an answer. Do you continue?",
        choices: [
            {id:"6", text:"Continue"},
            {id:"2", text:"Give up"}
        ]
    },
    {
        id:"5",
        message: "You create a CSS file and start thinking of how to center the div. What method do you use?",
        choices: [
            {id:"10", text:"Position"},
            {id:"11", text:"Flexbox"},
            {id:"12", text:"Margins"}
        ]
    },
    {
        id:"6",
        message: "After another two hours of googling you still have not found an answer. Do you continue?",
        choices: [
            {id:"4", text:"Continue"},
            {id:"2", text:"Give up"}
        ]
    },
    {
        id:"10",
        message: "You think to use position absolute and the div is now centered, but is it the best way to do it?",
        choices: [
            {id:"13", text:"Redo it"},
            {id:"100", text:"Ctrl + S"},
            {id:"2", text:"Leave it be"}
        ]
    },
    {
        id:"11",
        message: "You use display flex to center the div and It works, you should now be \
        happy with yourself as you didn't even have to google.",
        choices: [
            {id:"13", text:"Redo it"},
            {id:"100", text:"Ctrl + S"},
            {id:"2", text:"Leave it be"}
        ]
    },
    {
        id:"12",
        message: "You set the margin to 0 auto and the div magically appears in the middle of the browser, but are you sure this is the best way?",
        choices: [
            {id:"13", text:"Redo it"},
            {id:"100", text:"Ctrl + S"},
            {id:"2", text:"Leave it be"}
        ]
    },
    {
        id:"13",
        message: "You reverse your changes and think again about which method you should use to center the div.",
        choices: [
            {id:"10", text:"Position"},
            {id:"11", text:"Flexbox"},
            {id:"12", text:"Margins"}
        ]
    },
    {
        id:"100",
        message: "You successfully centered a div without googling. Well done.",
        choices: [
            {id:"1", text:"Replay"}
        ]
    }
]