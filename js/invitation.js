//Function to replace the content and show output area. Called from HTML.
function replaceContent() {
    // declaring the variables
    let myRecipientName;
    // Declaring the variable for the host name (Step 1)
    let myHostName;

    // setting the variable to the input field's id named recipientNameInput's value
    myRecipientName = document.getElementById("recipient-input").value

    // Reading the entry in the form field with the id host-input and storing it (Step 2)
    myHostName = document.getElementById("host-input").value

    // logging to devtools console
    console.log('Variable myRecipientName: ' + myRecipientName)
    // Logging the value in the variable for the host name (Step 3)
    console.log('Variable myHostName: ' + myHostName)

    // setting the HTML code in the span id recipientNamePlaceholder with the variable
    document.getElementById("recipient-placeholder").innerHTML = myRecipientName

    // Inserting the host's name into the span with the id host-placeholder (Step 4)
    document.getElementById("host-placeholder").innerHTML = myHostName

    // make output area visible by removing hidden class
    document.getElementById("outputArea").classList.remove("hidden")
}
