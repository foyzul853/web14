const db = document.getElementById("dbDiagram");

// Define tables (nodes)
const tables = [
    {name: "Home", link: "index.html", x: 50, y: 50},
    {name: "Students", link: "students.html", x: 250, y: 50},
    {name: "Teachers", link: "teachers.html", x: 450, y: 50},
    {name: "Courses", link: "courses.html", x: 250, y: 200},
    {name: "Math", link: "math.html", x: 100, y: 350},
    {name: "Science", link: "science.html", x: 250, y: 350},
    {name: "Languages", link: "languages.html", x: 400, y: 350},
    {name: "Blog", link: "blog.html", x: 50, y: 200},
    {name: "Contact", link: "contact.html", x: 450, y: 200}
];

// Draw nodes
tables.forEach(t => {
    const node = document.createElement("div");
    node.className = "table-node";
    node.style.left = t.x + "px";
    node.style.top = t.y + "px";
    node.textContent = t.name;
    node.onclick = () => window.location.href = t.link;
    db.appendChild(node);
});

// Draw relationships (lines)
function drawLine(x1, y1, x2, y2) {
    const line = document.createElement("div");
    line.className = "line";
    const length = Math.hypot(x2 - x1, y2 - y1);
    line.style.width = length + "px";
    line.style.transform = `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`;
    line.style.left = x1 + "px";
    line.style.top = y1 + "px";
    db.appendChild(line);
}

// Example many-to-many relationships
drawLine(250,50,250,200);  // Students ↔ Courses
drawLine(450,50,250,200);  // Teachers ↔ Courses
drawLine(250,200,100,350); // Courses ↔ Math
drawLine(250,200,250,350); // Courses ↔ Science
drawLine(250,200,400,350); // Courses ↔ Languages
drawLine(50,200,250,200);  // Blog ↔ Courses
drawLine(450,200,250,200); // Contact ↔ Courses
drawLine(50,50,250,50);    // Home ↔ Students
drawLine(50,50,450,50);    // Home ↔ Teachers
