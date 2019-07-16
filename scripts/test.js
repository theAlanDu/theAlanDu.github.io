function notes_section()
{
    document.getElementById("notes-section").style.display = "block";
    document.getElementById("tennis-section").style.display = "none";
    document.getElementById("stories-section").style.display = "none";
}

function tennis_section()
{
    document.getElementById("notes-section").style.display = "none";
    document.getElementById("tennis-section").style.display = "block";
    document.getElementById("stories-section").style.display = "none";
}

function stories_section()
{
    document.getElementById("notes-section").style.display = "none";
    document.getElementById("tennis-section").style.display = "none";
    document.getElementById("stories-section").style.display = "block";
}