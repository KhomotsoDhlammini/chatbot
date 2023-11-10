function talk ()
{
    var know =
    {
        //key is the prompt recognised word from the user input.
        //value is the response you get from the chatbot.

        "Hello": "Hi there &128540",
        "Who are you": "My name is Chatty Betty",
        "what can you do for me": "Not much for now, just keeping you busy",
        "ok": "you welcome",
        "bye": "Goodbye chat later",
        "Tell me about yourself": "I am just a smallanyana chat bot, just keeping you busy with HTML, CSS and JavaScript"
    };

    var user = document.getElementById("userBox").value;
    document.getElementById('chatLog')
    .innerHTML = user + "<br>"; // Loops and renders a responseto to the chalog element

    if(user in know)
    {
        document.getElementById('chatLog').innerHTML = know[user]; + "<br>"
    }

    else
    {
        document.getElementById('chatLog').innerHTML = "Sorry I dont understand  <br>"
    }
}