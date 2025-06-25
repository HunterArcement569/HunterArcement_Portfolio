//class used to represent all the projects used for filtering and display
class Project
{
    //fields
    Name;
    Language;
    ProjectTypes;
    ProjectDescription;
    ProjectLink;

    constructor(ProjectName, ProjectLanguage, ProjectTypes, ProjectDescription, ProjectLink)
    {
        this.Name = ProjectName;
        this.Language = ProjectLanguage;
        this.ProjectTypes = ProjectTypes;
        this.ProjectDescription = ProjectDescription;
        this.ProjectLink = ProjectLink;
    }
}

//create a list of projects given their names, languages, types, descriptions, and links
var Projects =
    [
        new Project("GameHacker569 YouTube Website", "JavaScript",
            ["User Interfaces", "Web Development"],
             "",
            ""),

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
        //create the project header
        let header = document.createElement("h2");
        header.setAttribute("class", "ProjectHeader");
        header.setAttribute("id", filteredProjects[i].Name)
        header.textContent = filteredProjects[i].Name;

        //create the project description
        let description = document.createElement("p");
        description.setAttribute("class", "ProjectDescription");
        description.textContent = filteredProjects[i].ProjectDescription;

        //create the project link
        let link = document.createElement("a");
        link.setAttribute("class", "ProjectLink");
        link.setAttribute("href", filteredProjects[i].ProjectLink);
        link.textContent = "Link to the Project's YouTube Video";

        //create the line break(s)
        let lineBreak = document.createElement("br");

        //add all to the parent in order, with two line breaks
        parent.appendChild(header);
        parent.appendChild(description);
        parent.appendChild(link);
        parent.appendChild(lineBreak);
        parent.appendChild(lineBreak);
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
