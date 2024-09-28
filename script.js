document.getElementById('questionsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = [
        event.target.q1.value,
        event.target.q2.value,
        event.target.q3.value,
        event.target.q4.value,
        event.target.q5.value,
        event.target.q6.value,
        event.target.q7.value,
        event.target.q8.value,
        event.target.q9.value,
        event.target.q10.value,
        event.target.q11.value,
        event.target.q12.value,
        event.target.q13.value,
        event.target.q14.value,
        event.target.q15.value,
        event.target.q16.value,
        event.target.q17.value,
        event.target.q18.value,
        event.target.q19.value,
        event.target.q20.value,
    ];

    let feedback = "Based on your responses:\n\n";

    // Check for mentions of "love" and "hate"
    if (answers.some(answer => answer.toLowerCase().includes("hate"))) {
        feedback += "It seems like you're carrying a lot of pain and struggle with self-acceptance. You may be dealing with unresolved emotions.\n";
    } else {
        feedback += "Your responses reflect that you try to practice self-acceptance and maintain a positive outlook.\n";
    }

    if (answers.some(answer => answer.toLowerCase().includes("love"))) {
        feedback += "You seem to deeply value love and connection, which shows your capacity for empathy and emotional connection.\n";
    } else {
        feedback += "Your responses suggest you may be avoiding love or feel disconnected from others.\n";
    }

    // Detect mentions of family
    if (answers.some(answer => answer.toLowerCase().includes("family"))) {
        feedback += "Family appears to play an important role in your life, whether positively or negatively. It shapes a lot of your experiences.\n";
    }

    // Detect mentions of God or faith
    if (answers.some(answer => answer.toLowerCase().includes("god") || answer.toLowerCase().includes("faith") || answer.toLowerCase().includes("religion"))) {
        feedback += "You seem to have a strong spiritual or religious belief that guides you through difficult times.\n";
    }

    // Detect fear of the future
    if (answers.some(answer => answer.toLowerCase().includes("fear") || answer.toLowerCase().includes("scared"))) {
        feedback += "You have concerns or fears about what the future holds, but acknowledging those fears shows courage.\n";
    }

    // Detect mentions of sadness or depression
    if (answers.some(answer => answer.toLowerCase().includes("sad") || answer.toLowerCase().includes("depressed") || answer.toLowerCase().includes("unhappy"))) {
        feedback += "Your responses suggest you're going through emotional pain or sadness. It's important to reach out for support when needed.\n";
    }

    feedback += "Thank you for sharing your thoughts. Remember, it’s okay to seek help and talk to someone if you're feeling overwhelmed. You have more strength than you know.";

    document.getElementById('feedback').innerText = feedback;
});
