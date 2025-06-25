//class used to represent all the projects used for filtering and display
class Project
{
    //fields
    Name;
    Language;
    ProjectTypes;
    ProjectDescription;
    ProjectLink;
    WebsiteLink;

    constructor(ProjectName, ProjectLanguage, ProjectTypes, ProjectDescription, ProjectLink, WebsiteLink)
    {
        this.Name = ProjectName;
        this.Language = ProjectLanguage;
        this.ProjectTypes = ProjectTypes;
        this.ProjectDescription = ProjectDescription;
        this.ProjectLink = ProjectLink;
        this.WebsiteLink = WebsiteLink;
    }
}

//create a list of projects given their names, languages, types, descriptions, and links
var Projects =
    [
        new Project("GameHacker569 YouTube Website", "JavaScript",
            ["User Interfaces", "Web Development"],
            [""],
            "https://youtu.be/ft0qs8eZj6U", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Other%20Languages/OtherLanguagesHome.html#GameHacker569Website"),
        new Project("Chess", "Unity",
            ["Game Development"],
            [""],
            "https://youtu.be/lhjauQM_j7E", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Unity/UnityHome.html#UnityChess"),
        new Project("Custom MIPS Assembler", "Python",
            ["Other"],
            [""],
            "https://youtu.be/97EkooneuHE", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Python/PythonHome.html#CustomMIPSAssembler"),
        new Project("Car Dealership DBMS (WPF)", "C#",
            ["User Interfaces", "Desktop Application", "Databases"],
            [""],
            "https://youtu.be/VBJjLyopTgY", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/C%23/C%23Home.html#WinFormsAndWPF_1"),
        new Project("Songs DBMS (WinForms)", "C#",
            ["User Interfaces", "Desktop Application", "Databases"],
            [""],
            "https://youtu.be/xbZQ6AfgK7I", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/C%23/C%23Home.html#WinFormsAndWPF_1"),
        new Project("File Sharing DBMS Server", "C#",
            ["Databases", "Other"],
            [""],
            "https://youtu.be/_qEhEJIJNeY", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/C%23/C%23Home.html#FileSharingDBMS"),
        new Project("Car DBMS", "C",
            ["Databases"],
            [""],
            "https://youtu.be/BUxjYq0Hpp4", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Other%20Languages/OtherLanguagesHome.html#CDBMS"),
        new Project("Random 3D Maze", "Unity",
            ["User Interfaces", "Game Development"],
            [""],
            "https://youtu.be/cvvRWUAtGp4", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Unity/UnityHome.html#Random3DMaze"),
        new Project("Music DBMS", "Rust",
            ["Databases"],
            [""],
            "https://youtu.be/wX6tKnwgP6k", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Other%20Languages/OtherLanguagesHome.html#RustDBMS"),
        new Project("Zombies High Rounds DBMS", "C++",
            ["Databases"],
            [""],
            "https://youtu.be/MLtVwfP8uxc", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Other%20Languages/OtherLanguagesHome.html#CppDBMS"),
        new Project("Fridge DBMS", "Java",
            ["Databases"],
            [""],
            "https://youtu.be/K56Pb6cO57w", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Java/JavaHome.html#JavaDBMS"),
        new Project("Birthday DBMS", "Php",
            ["Databases"],
            [""],
            "https://youtu.be/1NYKDFjn0Fg", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Other%20Languages/OtherLanguagesHome.html#PhpDBMS"),
        new Project("Overwatch Map Win Percent DBMS", "Python",
            ["Databases"],
            [""],
            "https://youtu.be/VB0ceEV0jlg", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Python/PythonHome.html#PythonDBMS"),
        new Project("Matrices Desktop Application", "C#",
            ["User Interfaces", "Desktop Application", "Databases", "Web Development"],
            [""],
            "https://youtu.be/daUhRFX1eaE", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/C%23/C%23Home.html#MatrixWebsite"),
        new Project("Matrix & Vector Classes", "Java",
            ["Other"],
            [""],
            "https://youtu.be/4bBsRv6o_ag", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Java/JavaHome.html#MatrixClass"),
        new Project("Monopoly", "Python",
            ["User Interfaces", "Game Development"],
            "",
            "https://youtu.be/aQzKW3lHo80", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Python/PythonHome.html#MonopolyWithPython"),
        new Project("Battleship", "Python",
            ["User Interfaces", "Game Development"],
            [""],
            "https://youtu.be/98RD77UyLVU", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Python/PythonHome.html#BattleshipWithPython"),
        new Project("Chess", "Python",
            ["User Interfaces", "Game Development"],
            [""],
            "https://youtu.be/7r0CUCYXgy4", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Python/PythonHome.html#PythonChess"),
        new Project("Matchmaking DBMS", "JavaScript",
            ["User Interfaces", "Web Development", "Databases"],
            [""],
            "https://youtu.be/DW95kXc1Y0E", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Other%20Languages/OtherLanguagesHome.html#MatchMakingInJavaScript")
    ];

//function to swap the videos, called when the filter button is pressed
function FilterVideos()
{
    //based on the filter options, loop through the Projects list and create a list of projects to be displayed
    let filteredProjects= [];
    for(let i = 0; i < Projects.length; i++)
    {
        if(CheckProjectType(Projects[i]) && CheckProjectLanguage(Projects[i])) filteredProjects.push(Projects[i]);
    }

    //get the parent for the projects, also clear its children
    const parent = document.getElementById("ContentSegments");
    while (parent.firstChild) parent.removeChild(parent.firstChild);


    //display each of the projects in the filtered list
    for(let i = 0; i < filteredProjects.length; i++)
    {
        //create the line break(s)
        let lineBreak = document.createElement("br");

        //create the project header
        let header = document.createElement("h2");
        header.setAttribute("class", "ProjectHeader");
        header.setAttribute("id", filteredProjects[i].Name)
        header.textContent = filteredProjects[i].Name;
        parent.appendChild(header);

        //create the project description
        for(let j = 0; j < filteredProjects[i].ProjectDescription.length; j++)
        {
            let description = document.createElement("p");
            description.setAttribute("class", "ProjectDescription");
            description.textContent = filteredProjects[i].ProjectDescription;
            parent.appendChild(description);
            parent.appendChild(lineBreak);
            parent.appendChild(lineBreak);
        }

        //create the project link
        let link = document.createElement("a");
        link.setAttribute("class", "ProjectLink");
        link.setAttribute("href", filteredProjects[i].ProjectLink);
        link.setAttribute("target", "_blank");
        link.textContent = "Link to the Project's YouTube Video";
        parent.appendChild(link);
        parent.appendChild(lineBreak);

        //create the website link
        let weblink = document.createElement("a");
        weblink.setAttribute("class", "ProjectLink");
        weblink.setAttribute("href", filteredProjects[i].WebsiteLink);
        link.setAttribute("target", "_blank");
        weblink.textContent = "Link to the Project's Website Section";
        parent.appendChild(weblink);
    }
}

//checker function for the project type
function CheckProjectType(project)
{
    //get all checkboxes for the type filters
    const GameDev  = document.getElementById("GameDevelopment");
    const WebDev  = document.getElementById("WebDevelopment");
    const DesktopApp  = document.getElementById("DesktopApplications");
    const Db  = document.getElementById("DatabaseManagement");
    const UserInferface  = document.getElementById("UserInterfaces");
    const Other  = document.getElementById("Other");

    //if they are all either checked or unchecked, return true
    if(GameDev.checked && WebDev.checked && DesktopApp.checked &&
        Db.checked && UserInferface.checked && Other.checked ||
        !GameDev.checked && !WebDev.checked && !DesktopApp.checked
        && !Db.checked && !UserInferface.checked && !Other.checked) return true;

    //otherwise, see if any of the project types correspond to a filter
    for(let i = 0; i < project.ProjectTypes.length; i++)
    {
        if(GameDev.checked && project.ProjectTypes[i] === "Game Development") return true;
        else if(WebDev.checked && project.ProjectTypes[i] === "Web Development") return true;
        else if(DesktopApp.checked && project.ProjectTypes[i] === "Desktop Application") return true;
        else if(Db.checked && project.ProjectTypes[i] === "Databases") return true;
        else if(UserInferface.checked && project.ProjectTypes[i] === "User Interfaces") return true;
        else if(Other.checked && project.ProjectTypes[i] === "Other") return true;
    }
    return false;
}

//checker function for the project language
function CheckProjectLanguage(project)
{
    //get all checkboxes for the language filters
    const Python  = document.getElementById("Python");
    const Java  = document.getElementById("Java");
    const Cs  = document.getElementById("C#");
    const Cpp  = document.getElementById("C++");
    const C  = document.getElementById("C");
    const Rust  = document.getElementById("Rust");
    const Php  = document.getElementById("Php");
    const Js  = document.getElementById("JavaScript");
    const Unity  = document.getElementById("Unity");

    //if they are all either checked or unchecked, return true
    if(Python.checked && Java.checked && Cs.checked && Cpp.checked && C.checked
        && Rust.checked && Php.checked && Js.checked && Unity.checked ||
        !Python.checked && !Java.checked && !Cs.checked && !Cpp.checked && !C.checked
        && !Rust.checked && !Php.checked && !Js.checked && !Unity.checked) return true;

    //otherwise, see if the language is in the filter
    if(Python.checked && project.Language === "Python") return true;
    else if(Java.checked && project.Language === "Java") return true;
    else if(Cs.checked && project.Language === "C#") return true;
    else if(Cpp.checked && project.Language === "C++") return true;
    else if(C.checked && project.Language === "C") return true;
    else if(Rust.checked && project.Language === "Rust") return true;
    else if(Php.checked && project.Language === "Php") return true;
    else if(Js.checked && project.Language === "JavaScript") return true;
    else if(Unity.checked && project.Language === "Unity") return true;
    return false;
}
