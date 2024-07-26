if (document.readyState === "loading")
{
    document.addEventListener("DOMContentLoaded", Ready);
}
else
{
    Ready();
}

function Ready()
{
    var textElements = document.getElementsByClassName("textElement");
    console.log(textElements);

    for(var i = 0; i < textElements.length; i++)
    {
        var textElement = textElements[i];
        textElement.addEventListener("click", DisplaySelector);
    }
}

function DisplaySelector(event)
{
    var clickedTextElement = event.target;

    var descriptions = document.getElementsByClassName("description");

    switch(clickedTextElement.id)
    {
        case "textElement1":
            DisplayDescription(descriptions[0], descriptions[1], descriptions[2], i = 1);
            break;

        case "textElement2":
            DisplayDescription(descriptions[0], descriptions[1], descriptions[2], i = 2);
            break;

        case "textElement3":
            DisplayDescription(descriptions[0], descriptions[1], descriptions[2], i = 3);
            break;
    }
}

function DisplayDescription(desc1, desc2, desc3, i)
{
    if(i == 1)
    {
        desc1.style.display = "block";
        desc2.style.display = "none";
        desc3.style.display = "none";
    }
    else if(i == 2)
    {
        desc1.style.display = "none";
        desc2.style.display = "block";
        desc3.style.display = "none";
    }
    else if(i == 3)
    {
        desc1.style.display = "none";
        desc2.style.display = "none";
        desc3.style.display = "block";
    }
}