async function getResult() {
    const prompt = document.getElementById('prompt').value.trim();
    if (!prompt) {
        alert('Please enter a prompt.');
        return;
    }

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            body: JSON.stringify({
                prompt: prompt,
                max_tokens: 150,
                model: "gpt-3.5-turbo-instruct"
            })
        });

        if (response.ok) {
            const data = await response.json();
            const generatedText = data.choices[0].text.trim();
            document.getElementById('Result').value = generatedText;
        } else {
            alert('Failed to generate text. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
}