function display(id,value)
{
    document.getElementById(id).style.display = value;
}
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

function nav_toggle()
{
    display("nav_toggle","none");
    display("nav_exit","block");
    setTimeout(display,50,"shade","flex");
    setTimeout(display,100,"link_1","block");
    setTimeout(display,150,"link_2","block");
    document.getElementsByClassName("footer").style.position = "absolute";
    document.getElementsByClassName("footer").style.bottom = "0";
}
function nav_exit()
{
    display("nav_toggle","block");
    display("nav_exit","none");
    setTimeout(display,50,"link_2","none")
    setTimeout(display,100,"link_1","none");
    setTimeout(display,150,"shade","none");

}