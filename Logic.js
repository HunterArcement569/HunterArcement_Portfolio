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
            ["As my first web development project, I created a dedicated website for my YouTube channel, GameHacker569, using HTML, CSS, and limited JavaScript. The site serves as a centralized hub for showcasing my content, providing visitors with easy access to my latest videos, channel information, and contact links. I focused on building a clean and responsive layout to ensure a consistent user experience across both desktop and mobile devices.", "The project emphasized fundamental web development principles, including semantic HTML structure and modular CSS for styling. Basic JavaScript functionality was implemented to enhance interactivity, such as dynamic content display. This experience helped me build a solid foundation in front-end development and paved the way for developing my portfolio (this website)."],
            "https://youtu.be/ft0qs8eZj6U", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Other%20Languages/OtherLanguagesHome.html#GameHacker569Website"),
        new Project("Chess", "Unity",
            ["Game Development"],
            ["This Unity-based chess project was a significant step in my game development journey, combining core gameplay mechanics with an introductory implementation of artificial intelligence. I developed a custom chess AI using a combination of the minimax algorithm and a basic genetic algorithm to simulate strategic decision-making. While the AI is not highly optimized, the process provided valuable insight into algorithmic thinking and foundational AI concepts.", "In addition to gameplay, this project marked my first experience working with JSON for saving and loading player data, which has since become a standard part of my development workflow. I implemented persistent data storage to track game history, settings, and user preferences, greatly enhancing the overall user experience. This project deepened my understanding of game state management, data serialization, and the integration of backend systems within Unity."],
            "https://youtu.be/lhjauQM_j7E", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Unity/UnityHome.html#UnityChess"),
        new Project("Custom MIPS Assembler", "Python",
            ["Other"],
            ["This project involved the development of a custom MIPS assembler built in Python, designed to parse and execute .asm files directly within the Python environment. The assembler supports a range of standard MIPS instructions, translating assembly code into executable operations with simulated output. This project helped solidify my understanding of low-level computing concepts, instruction sets, and the architecture of assembly languages.", "A unique feature of this assembler is its custom-built database extension, which enables simple database operations—such as storing, retrieving, and modifying values—using custom assembly syntax. While specific to this project, integrating database functionality into an assembly language environment was a rewarding technical challenge that pushed me to think creatively about extending instruction sets and handling abstract data operations at a low level."],
            "https://youtu.be/97EkooneuHE", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Python/PythonHome.html#CustomMIPSAssembler"),
        new Project("Car Dealership DBMS (WPF)", "C#",
            ["User Interfaces", "Desktop Application", "Databases"],
            ["This personal project was a car dealership management desktop application developed using Windows Presentation Foundation (WPF), marking my first experience with the technology. The application was designed to simulate a real-world dealership system, including features such as vehicle inventory management, customer tracking, and sales processing. It emphasized building a clean, responsive user interface and introduced me to the MVVM (Model-View-ViewModel) design pattern commonly used in WPF applications.", "On the back end, I integrated a relational database to store and manage data related to vehicles, customers, and transactions. This involved writing SQL queries and establishing database connections within the application to ensure data persistence and integrity. The project deepened my understanding of data binding, UI/UX in desktop environments, and full-stack architecture in a Windows application context."],
            "https://youtu.be/VBJjLyopTgY", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/C%23/C%23Home.html#WinFormsAndWPF_1"),
        new Project("Songs DBMS (WinForms)", "C#",
            ["User Interfaces", "Desktop Application", "Databases"],
            ["This project was a simple Song Database Management System (DBMS) viewer developed using Windows Forms (WinForms), representing my first and only experience with the technology. The application allowed users to view, search, and interact with a collection of songs stored in a backend database. It featured a basic but functional interface for navigating song metadata such as titles, artists, genres, and durations.", "Through this project, I gained practical experience in building data-driven desktop applications and working with CRUD operations in a graphical interface. It also reinforced core concepts of database integration, form-based UI design, and handling user input. While I ultimately moved on to other technologies, this project was an important step in learning how to quickly prototype and connect front-end interfaces with persistent data storage."],
            "https://youtu.be/xbZQ6AfgK7I", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/C%23/C%23Home.html#WinFormsAndWPF_1"),
        new Project("File Sharing DBMS Server", "C#",
            ["Databases", "Other"],
            ["This C# project was a custom-built file sharing system featuring a client-server architecture, designed to facilitate the transfer of messages, files, and directories over a TCP connection. The application was divided into two main components: a server that handled incoming requests and managed data exchange, and a client that allowed users to send and receive content. The system supported not only individual file transfers but also shallow directory sharing (first-level files only), enabling practical testing of structured data transmission.", "This project provided valuable experience in socket programming, multithreading for handling concurrent connections, and basic networking principles. I also incorporated a lightweight database layer to log and manage file transfer history, user actions, and message data. Developing this system deepened my understanding of low-level communication protocols, serialization, and designing robust client-server interactions within the .NET framework."],
            "https://youtu.be/_qEhEJIJNeY", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/C%23/C%23Home.html#FileSharingDBMS"),
        new Project("Car DBMS", "C",
            ["Databases"],
            ["This project was a simple Car Database Management System developed in C, marking one of my first experiences both with the C programming language and with integrating a database—specifically SQLite—into an application. The system was designed to manage records related to vehicles, including make, model, year, and pricing information. It featured basic command-line interaction for adding, retrieving, updating, and deleting entries from the database.", "Working on this project gave me hands-on experience with low-level programming concepts, such as memory management, file I/O, and string manipulation, while also introducing me to the structure and syntax of SQL within a C-based environment. It laid a strong foundation for my future projects involving data persistence and helped me develop a deeper appreciation for how database systems can be integrated into lightweight applications using minimal overhead."],
            "https://youtu.be/BUxjYq0Hpp4", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Other%20Languages/OtherLanguagesHome.html#CDBMS"),
        new Project("Random 3D Maze", "Unity",
            ["User Interfaces", "Game Development"],
            ["This project was a small-scale 3D speedrunning game developed in Unity, featuring procedurally generated mazes designed to challenge players to complete levels as quickly as possible. Due to memory and performance constraints, the scope was intentionally kept compact, but the project marked a major milestone as my first full 3D Unity game. It introduced me to essential 3D development concepts such as modeling, lighting, animations, particle effects, and audio integration.", "Building this game helped transition my Unity skills from 2D to 3D, allowing me to experiment with spatial design, camera controls, and performance optimization in a three-dimensional environment. I also implemented a simple timer and leaderboard mechanic to support the speedrunning concept, further deepening my understanding of game loop logic and user feedback systems. This project laid the groundwork for more advanced 3D game development in my future work."],
            "https://youtu.be/cvvRWUAtGp4", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Unity/UnityHome.html#Random3DMaze"),
        new Project("Music DBMS", "Rust",
            ["Databases"],
            ["This project involved developing a Song Database Management System using Rust, marking one of my early experiences with both the Rust programming language and the SQLite database. The application was designed to efficiently store, query, and manage song metadata such as titles, artists, albums, and genres. Through a command-line interface, users could perform CRUD operations and search the database with ease.", "Working on this project strengthened my understanding of Rust’s ownership model, memory safety features, and error handling, while also providing practical experience integrating SQLite for data persistence. This combination of technologies allowed me to explore low-level system programming alongside high-level database management, resulting in a robust and performant application. The project solidified my confidence in learning new programming languages rapidly for real-world software development tasks involving persistent storage."],
            "https://youtu.be/wX6tKnwgP6k", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Other%20Languages/OtherLanguagesHome.html#RustDBMS"),
        new Project("Zombies High Rounds DBMS", "C++",
            ["Databases"],
            ["This project was a Call of Duty Zombies high-round tracking Database Management System built using C++. The system allowed users to record, update, and view high-round achievements across different maps and players, with persistent data stored in a structured format. It featured a command-line interface for basic interaction and emphasized data organization and retrieval efficiency.", "As one of my early C++ projects, this experience challenged me to work with pointers, memory management, and manual data handling—areas where I had limited prior experience. Despite my ongoing learning curve with the language, the project provided a valuable opportunity to build a complete, functional application in C++ while reinforcing key programming concepts such as data structures, file I/O, and object-oriented design. It also underscored the importance of careful resource management in lower-level development."],
            "https://youtu.be/MLtVwfP8uxc", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Other%20Languages/OtherLanguagesHome.html#CppDBMS"),
        new Project("Fridge DBMS", "Java",
            ["Databases"],
            ["This project was a refrigerator inventory Database Management System developed in Java, designed to track and manage food items stored in a virtual fridge. Users could add, remove, update, and search for items based on attributes such as name and quantity. The system featured a simple console-based interface and used file-based or lightweight database storage to persist data across sessions.", "While Java is not my primary development language, I’m comfortable working with it, and this project allowed me to reinforce my understanding of object-oriented design, exception handling, and modular code structure. Building this DBMS helped me practice effective data modeling and storage strategies while applying core Java features in a practical, real-world-inspired application."],
            "https://youtu.be/K56Pb6cO57w", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Java/JavaHome.html#JavaDBMS"),
        new Project("Birthday DBMS", "Php",
            ["Databases"],
            ["This project was a Birthday Database Management System developed using PHP, and it was one of the first few applications I built with the language. The system allowed users to add, edit, and view birthdays, storing relevant information such as names, dates, and notes in a backend database. The web-based interface provided a simple and accessible way to manage upcoming birthdays."],
            "https://youtu.be/1NYKDFjn0Fg", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Other%20Languages/OtherLanguagesHome.html#PhpDBMS"),
        new Project("Overwatch Map Win Percent DBMS", "Python",
            ["Databases"],
            ["This project was an Overwatch Map Win Percentage Database Management System developed in Python, and it marked my first practical use of databases in a full Python application outside of a test environment. The system was designed to track and analyze win percentages across different Overwatch maps, storing match data such as map name and match outcome. It featured a command-line interface for entering and querying data, with the goal of identifying performance trends over time.", "Working on this project helped me gain hands-on experience integrating databases—likely using SQLite—with Python, and introduced me to essential concepts like SQL queries, data persistence, and input validation. It also gave me a clearer understanding of how to structure small-scale analytical tools, and reinforced Python’s strengths in rapid development and readability. This project laid an important foundation for future data-driven applications in my portfolio."],
            "https://youtu.be/VB0ceEV0jlg", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Python/PythonHome.html#PythonDBMS"),
        new Project("Matrices Desktop Application", "C#",
            ["User Interfaces", "Desktop Application", "Databases", "Web Development"],
            ["This project was a web-based matrix calculator developed using Blazor, featuring a wide range of linear algebra functionalities such as row-reducing matrices to RREF, calculating determinants, performing matrix multiplication, and computing inverses. A database backend was used to support specific features such as storing user-submitted matrices, session history, or saved results—though with my current skillset, a more lightweight approach could now be used.", "As one of my earlier Blazor projects, it gave me valuable experience with full-stack web development using C#, combining client-side interactivity with server-side data handling. It also deepened my understanding of both front-end logic in a component-based architecture and backend integration through database operations. This project reinforced my skills in applying mathematical logic programmatically and solidified my grasp of Blazor as a modern, scalable web framework."],
            "https://youtu.be/daUhRFX1eaE", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/C%23/C%23Home.html#MatrixWebsite"),
        new Project("Matrix & Vector Classes", "Java",
            ["Other"],
            ["This project was a standalone Java class designed to perform a comprehensive set of matrix operations, including row reduction to RREF, determinant calculation, matrix inversion, multiplication, and more. It served primarily as a developer-focused utility rather than a user-facing application, and provided a flexible codebase for experimenting with linear algebra algorithms. The class was later adapted into the backend logic for a full-featured Blazor web application.", "As a self-directed exploration, this project allowed me to deepen my understanding of numerical computation, algorithm design, and Java's object-oriented capabilities. It also served as an important stepping stone in transitioning mathematical logic into reusable, modular code—a skill that proved valuable when porting the functionality to C# for use in a more complete application. This early project helped establish my confidence in building algorithmic tools from the ground up."],
            "https://youtu.be/4bBsRv6o_ag", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Java/JavaHome.html#MatrixClass"),
        new Project("Monopoly", "Python",
            ["User Interfaces", "Game Development"],
            ["This project was a recreation of the board game Monopoly developed in Python, with a strong focus on implementing core game logic from scratch. The game utilized Python’s built-in Turtle graphics library for the user interface, avoiding external frameworks like Pygame. The entire gameplay experience—from player turns and property management to chance/community chest cards and rent calculations—was driven by custom logic and state management.", "By building this game without relying on advanced graphics libraries, I gained a deeper understanding of rendering basic UI components manually and managing game state transitions. It also challenged me to write clean, modular code for complex mechanics such as turn order, property transactions, jail rules, and win conditions. This project was a great exercise in balancing graphical constraints with gameplay functionality, and it reinforced core Python skills such as object-oriented programming, control flow, and event handling."],
            "https://youtu.be/aQzKW3lHo80", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Python/PythonHome.html#MonopolyWithPython"),
        new Project("Battleship", "Python",
            ["User Interfaces", "Game Development"],
            ["This project was a recreation of the classic board game Battleship, developed entirely in Python using the built-in Turtle graphics library for the user interface. The game's logic—covering ship placement, turn-based attacks, hit detection, and win conditions—was implemented from the ground up without relying on external libraries like Pygame. The focus was on building a fully functional and interactive game experience using only native Python tools.", "The project provided a valuable opportunity to explore grid-based logic, coordinate handling, and basic UI rendering with Turtle. It also reinforced key programming concepts such as modular design, input validation, and game state management. By creating both the visual and logical components from scratch, I gained hands-on experience in bridging low-level graphics with interactive gameplay mechanics in a resource-limited environment."],
            "https://youtu.be/98RD77UyLVU", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Python/PythonHome.html#BattleshipWithPython"),
        new Project("Chess", "Python",
            ["User Interfaces", "Game Development"],
            ["This project was a full recreation of the game Chess developed in Python, using the Turtle graphics library to handle all visual components without relying on external frameworks like Pygame. All core mechanics—including piece movement, capturing, turn-taking, and rule enforcement (such as castling, en passant, and promotion)—were implemented from scratch through custom logic and object-oriented design.", "Building the game entirely with raw Python and Turtle graphics provided a deep learning experience in state management, board representation, and rule-based logic. The project emphasized careful attention to detail, especially around move validation and special-case scenarios, and showcased how complex gameplay systems can be constructed with minimal tooling. It was a significant exercise in both algorithmic thinking and creating responsive, interactive UIs using only the Python standard library."],
            "https://youtu.be/7r0CUCYXgy4", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Python/PythonHome.html#PythonChess"),
        new Project("Matchmaking DBMS", "JavaScript",
            ["User Interfaces", "Web Development", "Databases"],
            ["This project was a matchmaking Database Management System developed as a console application in JavaScript using Node.js, with SQLite serving as the backend database. As one of my first ventures into JavaScript development, the integration of SQLite presented a significant learning curve—finding suitable tutorials and resources took months of dedicated research and experimentation.", "The application focused on core matchmaking logic such as managing user profiles, storing preferences, and generating match suggestions based purely on backend data operations and command-line interactions. This experience strengthened my understanding of asynchronous programming in JavaScript, database queries, and data management without relying on any graphical user interface. It was a valuable exercise in building functional, logic-driven software in a minimalistic environment."],
            "https://youtu.be/DW95kXc1Y0E", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Other%20Languages/OtherLanguagesHome.html#MatchMakingInJavaScript"),
        new Project("Flappy Bird Recreation V2.0", "Unity",
            ["User Interfaces", "Game Development"],
            ["This project was a way for me to prove how far I've come in my game development journey. In my first project, I struggled with colliders and physics objects. There were no sound effects, settings, or even a main title screen. The visual assets kept their png backgrounds leading to the project seeming less complete and unpolished. With this project I remedied all of those concerns, breathing much needed life and polish to the project. I am very happy of how it turned out, and I only gave it a week and a half of development!"],
            "https://youtu.be/Oq42c0kP3RY?si=PXH6cuqTAPPOXU0g", "https://hunterarcement569.github.io/GameHacker569_Website/Programming/Unity/UnityHome.html#FlappyBird2"),
        new Project("Electric Marimba Company -- Spring Boot", "Java",
            ["User Interfaces", "Web Development", "Databases"],
            ["This project was a way for me to learn a new server/web development framework -- Spring Boot. This is a Java-based framework very similar to Django from Python as well as WPF and Blazor from C#. I also learned about Docker containing/imaging/distributing."],
            "https://www.youtube.com/embed/ZSsaJQfseMw?si=2HOQ3NGEuNBRTM51")
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
            description.textContent = filteredProjects[i].ProjectDescription[j];
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
        weblink.setAttribute("target", "_blank");
        weblink.textContent = "Link to the Project's Website Section";
        parent.appendChild(weblink);

        parent.appendChild(lineBreak);
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
