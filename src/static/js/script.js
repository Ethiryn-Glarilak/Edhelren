
document.addEventListener('click', (event) => {
    // copy secret word to clipboard
    if (event.target.matches('.secret_word_description, .secret_word_content')) {
        // Get the secret word
        const secret_word_content = document.querySelector('.secret_word_content');
        const secret_word = secret_word_content.innerText;

        // Copy to clipboard
        navigator.clipboard.writeText(secret_word);
        console.log('Secret word copied to clipboard');

        // Change text to 'Copied!' for 1 second
        secret_word_content.innerText = 'Copied!';
        setTimeout(() => {
            secret_word_content.innerText = 'Copy';
            setTimeout(() => {
                secret_word_content.innerText = secret_word;
            }, 1000);
        }, 1000);

    // call telephone number
    } else if (event.target.matches('.telephone_image')) {
        // Get the telephone number
        const telephone_number = document.querySelector('.telephone_number');
        const telephone_number_text = telephone_number.innerText;

        // Call the telephone number
        window.open(`tel:${telephone_number_text}`, '_self');
        console.log('Telephone number called');

    // copy telephone number to clipboard
    } else if (event.target.matches('.telephone_number')) {
        // Get the telephone number
        const telephone_number = document.querySelector('.telephone_number');
        const telephone_number_text = telephone_number.innerText;

        // Copy to clipboard
        navigator.clipboard.writeText(telephone_number_text);
        console.log('Telephone number copied to clipboard');

        // Change text to 'Copied!' for 1 second
        telephone_number.innerText = 'Copied!';
        setTimeout(() => {
            telephone_number.innerText = 'Copy';
            setTimeout(() => {
                telephone_number.innerText = telephone_number_text;
            }, 1000);
        }, 1000);

    } else {
        console.log('other click');
    }
});
