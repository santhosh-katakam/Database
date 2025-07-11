const students = [
  {
    name: "Vani Pamaarthi",
    username: "t25rcbs00129",
    hallticket: "107243331",
    email: "vani.parnrthi@gmail.com",
    caste: "GENERAL",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Frontend": {
        joinDate: "2024-01-15",
        endDate: "2024-07-15",
        duration: "6 months",
        joinMonth: "January"
      }
    },
    courses: ["Frontend"]
  },
  {
    name: "Ramya Sampeta",
    username: "t25rcbs00127",
    hallticket: "7386585309",
    email: "s.ramyasampeta@gmail.com",
    caste: "GENERAL",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Frontend": {
        joinDate: "2024-01-10",
        endDate: "2024-07-10",
        duration: "6 months",
        joinMonth: "January"
      },
      "Backend": {
        joinDate: "2024-02-15",
        endDate: "2024-08-15",
        duration: "6 months",
        joinMonth: "February"
      }
    },
    courses: ["Frontend", "Backend"]
  },
  {
    name: "Pamarathi Jyoyhirmai",
    username: "t25rcbs00125",
    hallticket: "107223223",
    email: "pamarthijyothirmai@gmail.com",
    caste: "GENERAL",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Frontend": {
        joinDate: "2024-03-01",
        endDate: "2024-09-01",
        duration: "6 months",
        joinMonth: "March"
      }
    },
    courses: ["Frontend"]
  },
  {
    name: "Nagamani Bhukya",
    username: "t25rcbs0024",
    hallticket: "130124220",
    email: "grajkumar652@gmail.com",
    caste: "GENERAL",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Frontend": {
        joinDate: "2024-01-05",
        endDate: "2024-07-05",
        duration: "6 months",
        joinMonth: "January"
      }
    },
    courses: ["Frontend"]
  },
  {
    name: "Arjun Kumar",
    username: "t25rcbs00130",
    hallticket: "107243332",
    email: "arjun.kumar@gmail.com",
    caste: "OBC",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Frontend": {
        joinDate: "2024-02-01",
        endDate: "2024-08-01",
        duration: "6 months",
        joinMonth: "February"
      },
      "Data Science": {
        joinDate: "2024-03-01",
        endDate: "2024-09-01",
        duration: "6 months",
        joinMonth: "March"
      }
    },
    courses: ["Frontend", "Data Science"]
  },
  {
    name: "Priya Sharma",
    username: "t25rcbs00131",
    hallticket: "107243333",
    email: "priya.sharma@gmail.com",
    caste: "GENERAL",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Machine Learning": {
        joinDate: "2024-08-25",
        endDate: "2025-02-25",
        duration: "6 months",
        joinMonth: "August"
      }
    },
    courses: ["Machine Learning"]
  },
  {
    name: "Ravi Teja",
    username: "t25rcbs00132",
    hallticket: "107243334",
    email: "ravi.teja@gmail.com",
    caste: "SC",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Artificial Intelligence": {
        joinDate: "2024-09-10",
        endDate: "2025-03-10",
        duration: "6 months",
        joinMonth: "September"
      }
    },
    courses: ["Artificial Intelligence"]
  },
  {
    name: "Sneha Reddy",
    username: "t25rcbs00133",
    hallticket: "107243335",
    email: "sneha.reddy@gmail.com",
    caste: "GENERAL",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Frontend": {
        joinDate: "2024-01-30",
        endDate: "2024-07-30",
        duration: "6 months",
        joinMonth: "January"
      }
    },
    courses: ["Frontend"]
  },
  {
    name: "Kiran Reddy",
    username: "t25rcbs00134",
    hallticket: "107243336",
    email: "kiran.reddy@gmail.com",
    caste: "GENERAL",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Data Science": {
        joinDate: "2024-04-15",
        endDate: "2024-10-15",
        duration: "6 months",
        joinMonth: "April"
      }
    },
    courses: ["Data Science"]
  },
  {
    name: "Meera Patel",
    username: "t25rcbs00135",
    hallticket: "107243337",
    email: "meera.patel@gmail.com",
    caste: "GENERAL",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Mobile Development": {
        joinDate: "2024-05-01",
        endDate: "2024-11-01",
        duration: "6 months",
        joinMonth: "May"
      }
    },
    courses: ["Mobile Development"]
  },
  {
    name: "Rajesh Kumar",
    username: "t25rcbs00136",
    hallticket: "107243338",
    email: "rajesh.kumar@gmail.com",
    caste: "OBC",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Backend": {
        joinDate: "2024-06-10",
        endDate: "2024-12-10",
        duration: "6 months",
        joinMonth: "June"
      }
    },
    courses: ["Backend"]
  },
  {
    name: "Anita Singh",
    username: "t25rcbs00137",
    hallticket: "107243339",
    email: "anita.singh@gmail.com",
    caste: "GENERAL",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Frontend": {
        joinDate: "2024-07-05",
        endDate: "2025-01-05",
        duration: "6 months",
        joinMonth: "July"
      }
    },
    courses: ["Frontend"]
  },
  {
    name: "Deepak Sharma",
    username: "t25rcbs00140",
    hallticket: "107243340",
    email: "deepak.sharma@gmail.com",
    caste: "GENERAL",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "DevOps": {
        joinDate: "2024-10-01",
        endDate: "2025-04-01",
        duration: "6 months",
        joinMonth: "October"
      }
    },
    courses: ["DevOps"]
  },
  {
    name: "Kavya Reddy",
    username: "t25rcbs00141",
    hallticket: "107243341",
    email: "kavya.reddy@gmail.com",
    caste: "GENERAL",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Cybersecurity": {
        joinDate: "2024-11-15",
        endDate: "2025-05-15",
        duration: "6 months",
        joinMonth: "November"
      }
    },
    courses: ["Cybersecurity"]
  },
  {
    name: "Rohit Kumar",
    username: "t25rcbs00142",
    hallticket: "107243342",
    email: "rohit.kumar@gmail.com",
    caste: "OBC",
    branch: "BSC",
    image: "images/default-avatar.svg",
    courseDetails: {
      "Frontend": {
        joinDate: "2024-12-01",
        endDate: "2025-06-01",
        duration: "6 months",
        joinMonth: "December"
      }
    },
    courses: ["Frontend"]
  }
];

// Available courses
const courses = ["Frontend", "Backend", "Machine Learning", "Artificial Intelligence", "Data Science", "Mobile Development"];

// Current view state
let currentView = "all";
let currentCourse = null;
let currentPage = "home"; // home, course-months, monthly-students
let currentMonth = null;

// Months array
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Page management
function showPage(page) {
  // Hide all page content
  document.getElementById("home-page").style.display = "none";
  document.getElementById("course-months-page").style.display = "none";
  document.getElementById("course-students").style.display = "none";
  document.getElementById("monthly-students-page").style.display = "none";
  document.getElementById("add-student-page").style.display = "none";
  document.getElementById("edit-student-page").style.display = "none";

  // Show requested page
  if (page === "course-students") {
    document.getElementById("course-students").style.display = "block";
  } else {
    document.getElementById(page + "-page").style.display = "block";
  }
  currentPage = page;
}

function loadStudents(data) {
  const tbody = document.getElementById("student-table");
  tbody.innerHTML = "";

  data.forEach((student, index) => {
    const course = student.courses[0]; // Get the first course for display
    const courseDetail = student.courseDetails[course];
    const endDate = new Date(courseDetail.endDate).toLocaleDateString();

    // Create course badges for all enrolled courses
    const courseBadges = student.courses.map(courseName => {
      const courseClass = courseName.toLowerCase().replace(/\s+/g, '-');
      return `<span class="course-badge course-${courseClass}">${courseName}</span>`;
    }).join(' ');

    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.username}</td>
        <td class="hallticket-cell" onclick="showStudentDetails('${student.hallticket}')">${student.hallticket}</td>
        <td>${student.email}</td>
        <td>${courseBadges}</td>
        <td>${endDate}</td>
        <td>
          <button class="view-btn" onclick="showStudentDetails('${student.hallticket}')">👁️ View</button>
          <button class="edit-btn" onclick="editStudent('${student.hallticket}')">✏️ Edit</button>
          <button class="delete-btn" onclick="deleteStudent('${student.hallticket}')">🗑️ Delete</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });

  // Update total count
  document.getElementById("total-count").textContent = data.length;
}

function searchStudents() {
  const query = document.getElementById("search").value.toLowerCase().trim();

  if (!query) {
    loadStudents(students);
    return;
  }

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(query) ||
    s.username.toLowerCase().includes(query) ||
    s.hallticket.includes(query) ||
    s.email.toLowerCase().includes(query)
  );

  loadStudents(filtered);
}

function handleSearch() {
  const query = document.getElementById("search").value.toLowerCase().trim();

  // If it looks like a hall ticket number (contains only digits), search immediately
  if (query && /^\d+$/.test(query)) {
    searchStudents();
  }
}

function showAllStudents() {
  currentView = "all";
  currentCourse = null;
  currentPage = "home"; // Set current page
  showPage("home");

  // Update navigation
  document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
  document.querySelector('.filter-btn').classList.add('active');

  // Update page title
  document.getElementById("page-title").textContent = "Course Management System";
  document.getElementById("page-description").textContent = "View and manage students across all courses";

  // Clear search
  document.getElementById("search").value = "";

  loadStudents(students);
}

function showCourseStudents(courseName) {
  showPage("course-students");
  currentCourse = courseName;
  currentPage = "course-students"; // Set current page

  // Update navigation
  document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
  document.querySelector(`[onclick="showCourseStudents('${courseName}')"]`).classList.add('active');

  // Update page title
  document.getElementById("course-students-title").textContent = `${courseName} Students`;
  document.getElementById("course-students-description").textContent = `Students enrolled in ${courseName} course`;

  // Get students for this specific course
  const courseStudents = students.filter(student =>
    student.courses.includes(courseName)
  );

  // Update count
  document.getElementById("course-student-count").textContent = courseStudents.length;

  loadCourseStudents(courseStudents);
}

function loadCourseStudents(data) {
  const tbody = document.getElementById("course-student-table");
  tbody.innerHTML = "";

  data.forEach((student, index) => {
    const course = student.courses[0]; // Get the first course
    const courseDetail = student.courseDetails[course];
    const joinDate = new Date(courseDetail.joinDate).toLocaleDateString();
    const endDate = new Date(courseDetail.endDate).toLocaleDateString();

    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.username}</td>
        <td class="hallticket-cell" onclick="showStudentDetails('${student.hallticket}')">${student.hallticket}</td>
        <td>${student.email}</td>
        <td>${joinDate}</td>
        <td>${endDate}</td>
        <td>
          <button class="view-btn" onclick="showStudentDetails('${student.hallticket}')">👁️ View</button>
          <button class="edit-btn" onclick="editStudent('${student.hallticket}')">✏️ Edit</button>
          <button class="delete-btn" onclick="deleteStudent('${student.hallticket}')">🗑️ Delete</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function showCourseMonths() {
  showPage("course-months");
  currentCourse = "All";

  // Update navigation
  document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
  document.querySelector(`[onclick="showCourseMonths()"]`).classList.add('active');

  loadMonthsView();
}

function loadMonthsView() {
  const monthsContainer = document.getElementById("months-container");
  monthsContainer.innerHTML = "";

  months.forEach(month => {
    // Count students joining in this month for any course
    const monthStudents = students.filter(student => {
      const course = student.courses[0]; // Get the first course
      return student.courseDetails[course] &&
             student.courseDetails[course].joinMonth === month;
    });

    const monthCard = document.createElement("div");
    monthCard.className = "month-card";
    monthCard.onclick = () => showMonthStudents(month);

    monthCard.innerHTML = `
      <h3>${month}</h3>
      <div class="month-count">${monthStudents.length}</div>
      <p>Students Joining</p>
    `;

    monthsContainer.appendChild(monthCard);
  });
}

function showMonthStudents(month) {
  showPage("monthly-students");
  currentMonth = month;

  // Update page title
  document.getElementById("month-title").textContent = `Students Joining in ${month}`;
  document.getElementById("month-description").textContent = "All course students";

  // Get students joining in this month for any course
  const monthStudents = students.filter(student => {
    const course = student.courses[0]; // Get the first course
    return student.courseDetails[course] &&
           student.courseDetails[course].joinMonth === month;
  });

  // Update count
  document.getElementById("month-student-count").textContent = monthStudents.length;

  loadMonthlyStudents(monthStudents);
}

function loadMonthlyStudents(data) {
  const tbody = document.getElementById("monthly-student-table");
  tbody.innerHTML = "";

  data.forEach((student, index) => {
    const course = student.courses[0]; // Get the first course
    const courseDetail = student.courseDetails[course];
    const endDate = new Date(courseDetail.endDate).toLocaleDateString();

    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.username}</td>
        <td class="hallticket-cell" onclick="showStudentDetails('${student.hallticket}')">${student.hallticket}</td>
        <td>${student.email}</td>
        <td>${endDate}</td>
        <td>
          <button class="view-btn" onclick="showStudentDetails('${student.hallticket}')">👁️ View</button>
          <button class="edit-btn" onclick="editStudent('${student.hallticket}')">✏️ Edit</button>
          <button class="delete-btn" onclick="deleteStudent('${student.hallticket}')">🗑️ Delete</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

let studentToDelete = null;

function deleteStudent(hallticket) {
  // Find the student to delete
  const student = students.find(s => s.hallticket === hallticket);
  if (student) {
    studentToDelete = hallticket;
    document.getElementById("delete-student-name").textContent = student.name;
    document.getElementById("delete-modal").style.display = "block";
  }
}

function closeDeleteModal() {
  document.getElementById("delete-modal").style.display = "none";
  studentToDelete = null;
}

function confirmDelete() {
  if (studentToDelete) {
    // Find and remove student from array
    const studentIndex = students.findIndex(s => s.hallticket === studentToDelete);
    if (studentIndex > -1) {
      students.splice(studentIndex, 1);

      // Save to localStorage
      saveStudentsToStorage();

      // Update counts
      updateCourseCounts();

      // Refresh current view
      if (currentPage === "home") {
        loadStudents(students);
      } else if (currentPage === "monthly-students" && currentMonth) {
        showMonthStudents(currentMonth);
      } else if (currentPage === "course-months") {
        loadMonthsView();
      } else if (currentPage === "course-students" && currentCourse) {
        showCourseStudents(currentCourse);
      }

      // Close modal and show success message
      closeDeleteModal();
      alert('Student deleted successfully!');
    }
  }
}

function goBackToHome() {
  showPage("home");
  showAllStudents();
}



function showAddStudentForm() {
  showPage("add-student");

  // Clear form
  document.getElementById("add-student-form").reset();

  // Clear image preview
  document.getElementById("image-preview").style.display = "none";
}

function addNewStudent(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Get form values
  const name = formData.get('name');
  const username = formData.get('username');
  const hallticket = formData.get('hallticket');
  const email = formData.get('email');
  const caste = formData.get('caste');
  const branch = formData.get('branch');
  const course = formData.get('course');
  const joinMonth = formData.get('joinMonth');
  const joinDate = formData.get('joinDate');
  const imageFile = formData.get('image');

  // Check if hall ticket already exists
  if (students.find(s => s.hallticket === hallticket)) {
    alert('A student with this hall ticket number already exists!');
    return;
  }

  // Check if username already exists
  if (students.find(s => s.username === username)) {
    alert('A student with this username already exists!');
    return;
  }

  // Calculate end date (6 months from join date)
  const startDate = new Date(joinDate);
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 6);

  // Handle image file - convert to base64 for proper storage and display
  if (imageFile && imageFile.size > 0) {
    // Convert image to base64 data URL for proper storage and display
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageDataUrl = e.target.result;

      // Create new student object with base64 image
      const newStudent = {
        name: name,
        username: username,
        hallticket: hallticket,
        email: email,
        caste: caste,
        branch: branch,
        image: imageDataUrl,
        courseDetails: {
          [course]: {
            joinDate: joinDate,
            endDate: endDate.toISOString().split('T')[0],
            duration: "6 months",
            joinMonth: joinMonth
          }
        },
        courses: [course]
      };

      // Add to students array
      students.push(newStudent);

      // Save to localStorage
      saveStudentsToStorage();

      // Update counts
      updateCourseCounts();

      // Show success message
      alert("Student added successfully!");

      // Reset form and go back to home
      form.reset();
      document.getElementById("image-preview").style.display = "none";
      goBackToHome();

      // Refresh the student list
      loadStudents(students);
    };

    reader.readAsDataURL(imageFile);
  } else {
    // No image uploaded, use default
    const newStudent = {
      name: name,
      username: username,
      hallticket: hallticket,
      email: email,
      caste: caste,
      branch: branch,
      image: "images/default-avatar.svg",
      courseDetails: {
        [course]: {
          joinDate: joinDate,
          endDate: endDate.toISOString().split('T')[0],
          duration: "6 months",
          joinMonth: joinMonth
        }
      },
      courses: [course]
    };

    // Add to students array
    students.push(newStudent);

    // Save to localStorage
    saveStudentsToStorage();

    // Update counts
    updateCourseCounts();

    // Show success message
    alert("Student added successfully!");

    // Reset form and go back to home
    form.reset();
    document.getElementById("image-preview").style.display = "none";
    goBackToHome();

    // Refresh the student list
    loadStudents(students);
  }
}

function calculateDaysRemaining(endDate) {
  const today = new Date();
  const end = new Date(endDate);
  const diffTime = end - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function showStudentDetails(hallticket) {
  const student = students.find(s => s.hallticket === hallticket);
  if (!student) return;

  // Generate course cards for all enrolled courses
  const courseCards = student.courses.map(course => {
    const courseDetail = student.courseDetails[course];
    const daysRemaining = calculateDaysRemaining(courseDetail.endDate);
    const isExpired = daysRemaining < 0;
    const statusClass = isExpired ? 'expired' : daysRemaining <= 30 ? 'expiring-soon' : 'active';

    return `
      <div class="course-card ${statusClass}">
        <div class="course-header">
          <h3>${course}</h3>
          <span class="course-duration">${courseDetail.duration}</span>
        </div>
        <div class="course-dates">
          <div class="date-info">
            <label>Start Date:</label>
            <span>${new Date(courseDetail.joinDate).toLocaleDateString()}</span>
          </div>
          <div class="date-info">
            <label>End Date:</label>
            <span>${new Date(courseDetail.endDate).toLocaleDateString()}</span>
          </div>
        </div>
        <div class="expiry-info ${statusClass}">
          ${isExpired
            ? `<span class="expired-text">Course Expired ${Math.abs(daysRemaining)} days ago</span>`
            : daysRemaining <= 30
            ? `<span class="warning-text">⚠️ Expires in ${daysRemaining} days</span>`
            : `<span class="active-text">✅ ${daysRemaining} days remaining</span>`
          }
        </div>
      </div>
    `;
  }).join('');

  const idCardHTML = `
    <div class="student-id-card">
      <div class="id-card-header">
        <h2>Student ID Card</h2>
        <div class="institution-name">Tech Institute</div>
      </div>

      <div class="id-card-body">
        <div class="student-photo">
          <img src="${student.image}" alt="${student.name}" onerror="this.src='images/default-avatar.svg'" style="width: 150px; height: 150px; object-fit: cover;">
        </div>

        <div class="student-basic-info">
          <h3>${student.name}</h3>
          <div class="basic-details">
            <div class="detail-item">
              <label>Hall Ticket:</label>
              <span class="hall-ticket-number">${student.hallticket}</span>
            </div>
            <div class="detail-item">
              <label>Username:</label>
              <span>${student.username}</span>
            </div>
            <div class="detail-item">
              <label>Branch:</label>
              <span>${student.branch}</span>
            </div>
            <div class="detail-item">
              <label>Email:</label>
              <span>${student.email}</span>
            </div>

          </div>
        </div>
      </div>

      <div class="courses-section">
        <h4>Enrolled Courses</h4>
        <div class="course-cards-container">
          ${courseCards}
        </div>
      </div>
    </div>
  `;

  document.getElementById("student-id-card").innerHTML = idCardHTML;
  document.getElementById("student-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("student-modal").style.display = "none";
}



function previewImage(input) {
  const preview = document.getElementById("image-preview");
  const previewImg = document.getElementById("preview-img");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function(e) {
      previewImg.src = e.target.result;
      preview.style.display = "block";
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.style.display = "none";
  }
}

function previewEditImage(input) {
  const preview = document.getElementById("edit-image-preview");
  const previewImg = document.getElementById("edit-preview-img");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function(e) {
      previewImg.src = e.target.result;
      preview.style.display = "block";
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.style.display = "none";
  }
}

function updateCourseCounts() {
  // Update all students count
  document.getElementById("all-count").textContent = students.length;

  // Update course count (all students)
  document.getElementById("course-count").textContent = students.length;

  // Update individual course counts
  const courseCountMap = {};

  // Initialize counts
  courses.forEach(course => {
    courseCountMap[course] = 0;
  });

  // Count students per course
  students.forEach(student => {
    const course = student.courses[0]; // Get the first course
    if (courseCountMap.hasOwnProperty(course)) {
      courseCountMap[course]++;
    }
  });

  // Update UI counts for each course
  courses.forEach(course => {
    const count = courseCountMap[course] || 0;
    const elementId = course.toLowerCase().replace(/\s+/g, '-') + '-count';
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = count;
    }
  });
}

// Edit student functionality
let editingStudent = null;
let previousPage = null;

function editStudent(hallticket) {
  const student = students.find(s => s.hallticket === hallticket);
  if (!student) return;

  editingStudent = student;
  previousPage = currentPage;

  showPage("edit-student");

  // Populate form with student data
  document.getElementById("edit-student-name").value = student.name;
  document.getElementById("edit-student-username").value = student.username;
  document.getElementById("edit-student-hallticket").value = student.hallticket;
  document.getElementById("edit-student-email").value = student.email;
  document.getElementById("edit-student-caste").value = student.caste || "";
  document.getElementById("edit-student-branch").value = student.branch || "";

  // Clear all course checkboxes first
  document.querySelectorAll('input[name="courses"]').forEach(checkbox => {
    checkbox.checked = false;
  });

  // Check the courses the student is enrolled in
  student.courses.forEach(course => {
    const checkbox = document.querySelector(`input[name="courses"][value="${course}"]`);
    if (checkbox) {
      checkbox.checked = true;
    }
  });

  // Show current image if exists
  const preview = document.getElementById("edit-image-preview");
  const previewImg = document.getElementById("edit-preview-img");
  if (student.image && student.image !== "images/default-avatar.svg") {
    previewImg.src = student.image;
    preview.style.display = "block";
  } else {
    preview.style.display = "none";
  }
}

function goBackFromEdit() {
  if (previousPage === "course-students") {
    showCourseStudents(currentCourse);
  } else if (previousPage === "monthly-students") {
    showMonthStudents(currentMonth);
  } else {
    showAllStudents();
  }
}

function updateStudent(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  // Get form values
  const name = formData.get('name');
  const username = formData.get('username');
  const email = formData.get('email');
  const caste = formData.get('caste');
  const branch = formData.get('branch');
  const imageFile = formData.get('image');

  // Get selected courses
  const selectedCourses = [];
  document.querySelectorAll('input[name="courses"]:checked').forEach(checkbox => {
    selectedCourses.push(checkbox.value);
  });

  if (selectedCourses.length === 0) {
    alert("Please select at least one course.");
    return;
  }

  // Handle image file - convert to base64 if new image uploaded
  if (imageFile && imageFile.size > 0) {
    // Convert new image to base64 data URL
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageDataUrl = e.target.result;

      // Update student object with new image
      editingStudent.name = name;
      editingStudent.username = username;
      editingStudent.email = email;
      editingStudent.caste = caste;
      editingStudent.branch = branch;
      editingStudent.image = imageDataUrl;

      // Update courses and course details
      const newCourseDetails = {};
      selectedCourses.forEach(course => {
        if (editingStudent.courseDetails[course]) {
          // Keep existing course details
          newCourseDetails[course] = editingStudent.courseDetails[course];
        } else {
          // Add new course with current date
          const joinDate = new Date().toISOString().split('T')[0];
          const endDate = new Date();
          endDate.setMonth(endDate.getMonth() + 6);

          newCourseDetails[course] = {
            joinDate: joinDate,
            endDate: endDate.toISOString().split('T')[0],
            duration: "6 months",
            joinMonth: new Date().toLocaleString('default', { month: 'long' })
          };
        }
      });

      editingStudent.courseDetails = newCourseDetails;
      editingStudent.courses = selectedCourses;

      // Save to localStorage
      saveStudentsToStorage();

      // Update counts
      updateCourseCounts();

      // Show success message
      alert("Student updated successfully!");

      // Go back to previous page
      goBackFromEdit();
    };

    reader.readAsDataURL(imageFile);
  } else {
    // No new image, keep existing image and update other fields
    editingStudent.name = name;
    editingStudent.username = username;
    editingStudent.email = email;
    editingStudent.caste = caste;
    editingStudent.branch = branch;
    // Keep existing image: editingStudent.image = editingStudent.image;

    // Update courses and course details
    const newCourseDetails = {};
    selectedCourses.forEach(course => {
      if (editingStudent.courseDetails[course]) {
        // Keep existing course details
        newCourseDetails[course] = editingStudent.courseDetails[course];
      } else {
        // Add new course with current date
        const joinDate = new Date().toISOString().split('T')[0];
        const endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 6);

        newCourseDetails[course] = {
          joinDate: joinDate,
          endDate: endDate.toISOString().split('T')[0],
          duration: "6 months",
          joinMonth: new Date().toLocaleString('default', { month: 'long' })
        };
      }
    });

    editingStudent.courseDetails = newCourseDetails;
    editingStudent.courses = selectedCourses;

    // Save to localStorage
    saveStudentsToStorage();

    // Update counts
    updateCourseCounts();

    // Show success message
    alert("Student updated successfully!");

    // Go back to previous page
    goBackFromEdit();
  }
}

// Local Storage Functions
function saveStudentsToStorage() {
  localStorage.setItem('frontendStudents', JSON.stringify(students));
}

function loadStudentsFromStorage() {
  const savedStudents = localStorage.getItem('frontendStudents');
  if (savedStudents) {
    const parsedStudents = JSON.parse(savedStudents);
    // Replace the students array with saved data
    students.length = 0;
    students.push(...parsedStudents);
  }
}

// Close modal when clicking outside
window.onclick = function(event) {
  const studentModal = document.getElementById("student-modal");
  const deleteModal = document.getElementById("delete-modal");

  if (event.target === studentModal) {
    closeModal();
  }

  if (event.target === deleteModal) {
    closeDeleteModal();
  }
}

window.onload = () => {
  // Load students from localStorage first
  loadStudentsFromStorage();
  updateCourseCounts();
  loadStudents(students);
};
