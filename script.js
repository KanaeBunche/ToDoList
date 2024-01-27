function addItem() {
    let itemInput = document.getElementById("itemInput");
    let itemValue = itemInput.value.trim();

    if (itemValue !== "") {
        // Create a new list item element
        let newItem = document.createElement("li");

        // Create a checkbox for the new item
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.className = "taskCheckbox";
        newItem.appendChild(checkbox);

        // Create a label for the checkbox
        let label = document.createElement("label");
        label.textContent = itemValue;
        newItem.appendChild(label);

        // Create a delete button for the new item
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className ='deleteButton';
        deleteButton.addEventListener('click', function() {
            newItem.remove();
        });
        newItem.appendChild(deleteButton);

        // Append the new item to the list
        let itemList = document.getElementById("itemList");
        itemList.appendChild(newItem);

        // Clear the input box
        itemInput.value = "";
    } else {
        alert("Please enter a valid item.");
    }
}


// background 



