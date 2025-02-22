const messageInput = document.getElementById('user-message');
const mymessage = document.getElementById('mymessage');
const chatcontainer = document.querySelector('.chatbox-container');
const chatbody = document.querySelector(".chat-body");
const gobtn = document.getElementById('go');
const usertext = document.querySelector('.outgoing-chat');
const API_KEY = "AIzaSyDH5NponFKZOc5NmbGPK2_GXKnJQoPpt6w";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

gobtn.addEventListener("click", function () {
    const usermessage = messageInput.value.trim();
    if (usermessage) {
        handleoutgoingmessage(usermessage);
        messageInput.value = "";
    }
});

messageInput.addEventListener("keydown", function enter(event) {
    const usermessage = messageInput.value.trim();
    if (event.key === "Enter" && usermessage) {
        handleoutgoingmessage(usermessage);
        messageInput.value = "";
    }
});


const handleoutgoingmessage = (usermessage) => {
    const outgoing = createmessageelement(usermessage, "outgoing-chat");
    chatbody.appendChild(outgoing);
    chatbody.scrollTo({top:chatbody.scrollHeight,behavior:"smooth"});

    setTimeout(() => {
        const botThinking = createBotThinking();
        chatbody.appendChild(botThinking);
        chatbody.scrollTo({top:chatbody.scrollHeight,behavior:"smooth"});

        generatebotresponse(usermessage, botThinking);

    }, 600)

}
const generatebotresponse = async (usermessage, botThinking) => {
    const options = {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: usermessage }]
            }]
        })
    }
    try {
        const response = await fetch(API_URL, options);
        const data = await response.json();
        if (!response.ok) throw new error(data.error.message);
        const botresponsetext = data.candidates[0].content.parts[0].text.trim();
        botThinking.textContent = "👍🏼";
        botThinking.classList.remove("bot-thinking");
        botThinking.classList.add("incoming-chat");
        botThinking.textContent = "👍🏼" + botresponsetext;

    }
    catch (error) {
        console.error(error);
        botThinking.textContent = " 👎🏼 Sorry, something went wrong. Please try again.";
        botThinking.classList.remove("bot-thinking");
        botThinking.classList.add("incoming-chat-error","incoming-chat");


    }
}
const createmessageelement = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add(classes);
    div.textContent = content;
    return div;
}
const createBotThinking = () => {
    const botthinkingdiv = document.createElement("div");
    botthinkingdiv.classList.add("bot-thinking");

    const emoji = document.createElement("h6");
    emoji.textContent = "👍🏼";
    botthinkingdiv.appendChild(emoji);

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        botthinkingdiv.appendChild(dot);
    }

    return botthinkingdiv;
};
