import { Projects } from './ProjectData.js';

function CheckProjectType(project)
{
    const GameDev = document.getElementById("GameDevelopment");
    const WebDev = document.getElementById("WebDevelopment");
    const DesktopApp = document.getElementById("DesktopApplications");
    const Db = document.getElementById("DatabaseManagement");
    const UserInterface = document.getElementById("UserInterfaces");
    const Other = document.getElementById("Other");

    const filters = [GameDev, WebDev, DesktopApp, Db, UserInterface, Other];

    //if all checked or all unchecked → show everything
    if (filters.every(f => f.checked) || filters.every(f => !f.checked)) return true;

    return project.ProjectTypes.some(type =>
        (GameDev.checked && type === "Game Development") ||
        (WebDev.checked && type === "Web Development") ||
        (DesktopApp.checked && type === "Desktop Application") ||
        (Db.checked && type === "Databases") ||
        (UserInterface.checked && type === "User Interfaces") ||
        (Other.checked && type === "Other")
    );
}

function CheckProjectLanguage(project)
{
    const Python = document.getElementById("Python");
    const Java = document.getElementById("Java");
    const Cs = document.getElementById("C#");
    const Cpp = document.getElementById("C++");
    const C = document.getElementById("C");
    const Rust = document.getElementById("Rust");
    const Php = document.getElementById("Php");
    const Js = document.getElementById("JavaScript");
    const Unity = document.getElementById("Unity");

    const filters = [Python, Java, Cs, Cpp, C, Rust, Php, Js, Unity];

    if (filters.every(f => f.checked) || filters.every(f => !f.checked)) return true;

    return (
        (Python.checked && project.Language === "Python") ||
        (Java.checked && project.Language === "Java") ||
        (Cs.checked && project.Language === "C#") ||
        (Cpp.checked && project.Language === "C++") ||
        (C.checked && project.Language === "C") ||
        (Rust.checked && project.Language === "Rust") ||
        (Php.checked && project.Language === "Php") ||
        (Js.checked && project.Language === "JavaScript") ||
        (Unity.checked && project.Language === "Unity")
    );
}

export function FilterVideos()
{
    const filteredProjects = Projects.filter(p =>
        CheckProjectType(p) && CheckProjectLanguage(p)
    );

    const parent = document.getElementById("ContentSegments");
    parent.innerHTML = "";

    filteredProjects.forEach(project =>
    {
        const header = document.createElement("h2");
        header.className = "ProjectHeader";
        header.id = project.Name;
        header.textContent = project.Name;
        parent.appendChild(header);

        project.ProjectDescription.forEach(desc =>
        {
            const description = document.createElement("p");
            description.className = "ProjectDescription";
            description.textContent = desc;
            parent.appendChild(description);
        });

        const ytLink = document.createElement("a");
        ytLink.className = "ProjectLink";
        ytLink.href = project.ProjectLink;
        ytLink.target = "_blank";
        ytLink.textContent = "Link to the Project's YouTube Video";
        parent.appendChild(ytLink);

        parent.appendChild(document.createElement("br"));

        const siteLink = document.createElement("a");
        siteLink.className = "ProjectLink";
        siteLink.href = project.WebsiteLink;
        siteLink.target = "_blank";
        siteLink.textContent = "Link to the Project's Website Section";
        parent.appendChild(siteLink);

        parent.appendChild(document.createElement("br"));
        parent.appendChild(document.createElement("br"));
    });
}