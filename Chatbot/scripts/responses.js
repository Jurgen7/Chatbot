function getBotResponse(input) {
    //rock paper scissors

    input = input.toLowerCase();

    if (input === "help" || input === "support") {
        return "How can I assist you today?";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses

    if (input == "hello" || input == "hi") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "bye") {
        return "Talk to you later!";
    } else if (input.includes('help') || input.includes('support')) {
        return "How can I assist you today?";
    }
    else {
        return "Try asking something else!";
    }

}