// ============================================
// VVP CE Sem-4 Tutorials — Application Logic
// ============================================

// ---------- Configuration ----------
const GITHUB_USER = 'KevinSiddhpura';
const GITHUB_REPO = 'vvp-ce-sem-4-tuts';
const GITHUB_BRANCH = 'main';
const RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${GITHUB_BRANCH}`;
const GITHUB_BASE = `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/blob/${GITHUB_BRANCH}`;

// ---------- Course Data ----------
const SUBJECTS = [
  {
    id: 'ada',
    shortName: 'ADA',
    fullName: 'Analysis & Design of Algorithms',
    language: 'C',
    icon: 'fa-solid fa-chart-line',
    gradient: 'from-indigo-500 to-violet-500',
    colorClasses: {
      bg: 'bg-indigo-500/10',
      text: 'text-indigo-500',
      border: 'border-indigo-500/25',
      bar: 'bg-gradient-to-r from-indigo-500 to-violet-500',
      badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-300',
      number: 'bg-indigo-500/10 text-indigo-500',
    },
    labs: [
      {
        id: 'L-1', title: 'Basic Sorting Algorithms',
        files: [
          { name: 'bubbleSort.c', path: 'ADA/L-1/bubbleSort.c', desc: 'Sorts an array using bubble sort by repeatedly swapping adjacent elements if they are in wrong order.' },
          { name: 'insertionSort.c', path: 'ADA/L-1/insertionSort.c', desc: 'Sorts an array using insertion sort by building a sorted portion one element at a time.' },
          { name: 'selectionSort.c', path: 'ADA/L-1/selectionSort.c', desc: 'Sorts an array using selection sort by repeatedly finding the minimum element and placing it at the beginning.' },
        ]
      },
      {
        id: 'L-2', title: 'Searching Algorithms',
        files: [
          { name: 'binarySearch.c', path: 'ADA/L-2/binarySearch.c', desc: 'Performs binary search on a sorted array by repeatedly dividing the search interval in half.' },
          { name: 'linearSearch.c', path: 'ADA/L-2/linearSearch.c', desc: 'Performs linear search by sequentially checking each element until the target is found.' },
        ]
      },
      {
        id: 'L-3', title: 'Advanced Sorting Algorithms',
        files: [
          { name: 'mergeSort.c', path: 'ADA/L-3/mergeSort.c', desc: 'Sorts an array using merge sort with divide-and-conquer approach by recursively splitting and merging.' },
          { name: 'quickSort.c', path: 'ADA/L-3/quickSort.c', desc: 'Sorts an array using quick sort by partitioning around a pivot and recursively sorting subarrays.' },
        ]
      },
      {
        id: 'L-4', title: 'Greedy Method & Knapsack',
        files: [
          { name: 'activitySelection.c', path: 'ADA/L-4/activitySelection.c', desc: 'Solves the activity selection problem using greedy strategy with parallel arrays sorted by finish time.' },
          { name: 'activitySelection-struct.c', path: 'ADA/L-4/activitySelection-struct.c', desc: 'Solves the activity selection problem using a struct Activity array and greedy selection by earliest finish.' },
          { name: 'job.c', path: 'ADA/L-4/job.c', desc: 'Implements job sequencing with deadlines to maximize profit using greedy sorting by profit and slot assignment.' },
          { name: 'job-struct.c', path: 'ADA/L-4/job-struct.c', desc: 'Implements job sequencing with deadlines using struct Job, greedy profit ordering, and time-slot allocation.' },
          { name: 'kruskal-list.c', path: 'ADA/L-4/kruskal-list.c', desc: 'Builds an MST using Kruskal\'s algorithm from an edge-list representation with struct Edge and cycle checks.' },
          { name: 'kruskal-matrix.c', path: 'ADA/L-4/kruskal-matrix.c', desc: 'Converts an adjacency matrix to an edge list, then applies Kruskal\'s algorithm to print MST edges and total cost.' },
          { name: 'makeChange.c', path: 'ADA/L-4/makeChange.c', desc: 'Finds minimum coins for a given amount using greedy denomination selection (10, 5, 2, 1).' },
          { name: 'prims.c', path: 'ADA/L-4/prims.c', desc: 'Builds an MST using Prim\'s algorithm with key/visited arrays and prints selected edges with total cost.' },
          { name: 'zeroOne.c', path: 'ADA/L-4/zeroOne.c', desc: 'Solves 0/1 knapsack with dynamic programming using separate item, weight, and profit arrays.' },
          { name: 'zeroOne-struct.c', path: 'ADA/L-4/zeroOne-struct.c', desc: 'Solves 0/1 knapsack with dynamic programming using an array of struct Item.' },
        ]
      },
      {
        id: 'L-8', title: 'DP — Matrix Chain Multiplication',
        files: [
          { name: 'matrixChain.c', path: 'ADA/L-8/matrixChain.c', desc: 'Finds the minimum number of scalar multiplications needed to multiply a chain of matrices using dynamic programming.' },
        ]
      },
      {
        id: 'L-9', title: 'DP — Longest Common Subsequence',
        files: [
          { name: 'lcs.c', path: 'ADA/L-9/lcs.c', desc: 'Computes the length of the longest common subsequence between two strings using dynamic programming.' },
        ]
      },
    ],
    references: [
      { name: 'ADA.pdf', path: 'ADA/ADA.pdf', desc: 'Lab/reference document for the ADA course.' }
    ]
  },
  {
    id: 'oop',
    shortName: 'OOP',
    fullName: 'Object-Oriented Programming (Java)',
    language: 'Java',
    icon: 'fa-brands fa-java',
    gradient: 'from-cyan-500 to-teal-500',
    colorClasses: {
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-500',
      border: 'border-cyan-500/25',
      bar: 'bg-gradient-to-r from-cyan-500 to-teal-500',
      badge: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300',
      number: 'bg-cyan-500/10 text-cyan-500',
    },
    labs: [
      {
        id: 'L-1', title: 'Basic Programs',
        files: [
          { name: 'CharacterCheck.java', path: 'OOP/L-1/CharacterCheck.java', desc: 'Reads a character and determines whether it is a vowel or a consonant.' },
          { name: 'NumIncre.java', path: 'OOP/L-1/NumIncre.java', desc: 'Accepts a 5-digit number and increments each digit by 1 (9 wraps to 0).' },
          { name: 'PrimeCheck.java', path: 'OOP/L-1/PrimeCheck.java', desc: 'Reads an integer and checks whether it is a prime number using trial division.' },
          { name: 'TriangleArea.java', path: 'OOP/L-1/TriangleArea.java', desc: 'Takes three side lengths, validates the triangle, and computes area using Heron\'s formula.' },
        ]
      },
      {
        id: 'L-2', title: 'String Validation',
        files: [
          { name: 'AnagramCheck.java', path: 'OOP/L-2/AnagramCheck.java', desc: 'Strips spaces, sorts characters of two strings, and checks if they are anagrams.' },
          { name: 'EmailChecker.java', path: 'OOP/L-2/EmailChecker.java', desc: 'Validates an email address against a regex pattern and reports valid or invalid.' },
          { name: 'GtuEnrollCheck.java', path: 'OOP/L-2/GtuEnrollCheck.java', desc: 'Verifies a GTU enrollment number is exactly 12 characters long.' },
        ]
      },
      {
        id: 'L-3', title: 'Classes & Objects',
        files: [
          { name: 'EmployeeManager.java', path: 'OOP/L-3/EmployeeManager.java', desc: 'Defines an Employee class with name and salary; reads and displays employee data.' },
          { name: 'StudentManager.java', path: 'OOP/L-3/StudentManager.java', desc: 'Collects marks for 5 students, computes percentages, and sorts them in descending order using bubble sort.' },
          { name: 'TimeManager.java', path: 'OOP/L-3/TimeManager.java', desc: 'Defines a Time class; reads two time values and adds them with proper minute-to-hour carry.' },
        ]
      },
      {
        id: 'L-4', title: 'Inheritance & Polymorphism',
        files: [
          { name: 'EmployeeManager.java', path: 'OOP/L-4/EmployeeManager.java', desc: 'Demonstrates single inheritance — Manager extends Employee and overrides displayDetails().' },
          { name: 'PaymentManager.java', path: 'OOP/L-4/PaymentManager.java', desc: 'Demonstrates runtime polymorphism with CreditCardPayment and UPIPayment subclasses of Payment.' },
          { name: 'UniversityManager.java', path: 'OOP/L-4/UniversityManager.java', desc: 'Illustrates static and instance initializer blocks using a University class with a shared student counter.' },
          { name: 'VolumeCalc.java', path: 'OOP/L-4/VolumeCalc.java', desc: 'Demonstrates method overloading with three calculateVolume() variants for sphere, cube, and cuboid.' },
        ]
      },
      {
        id: 'L-5', title: 'Interfaces & Abstract Classes',
        files: [
          { name: 'Calc.java', path: 'OOP/L-5/Calc.java', desc: 'Reads two numbers and uses myutil.Stuff to demonstrate static and instance arithmetic methods.' },
          { name: 'InterestCalc.java', path: 'OOP/L-5/InterestCalc.java', desc: 'Defines an Interest interface implemented by SimpleInterest and CompoundInterest classes.' },
          { name: 'Shapes.java', path: 'OOP/L-5/Shapes.java', desc: 'Abstract Shape class with Triangle, Rectangle, and Circle subclasses that compute area.' },
          { name: 'myutil/Stuff.java', path: 'OOP/L-5/myutil/Stuff.java', desc: 'Utility class in the myutil package that provides arithmetic helpers through static and instance methods.' },
        ]
      },
      {
        id: 'L-6', title: 'Exception Handling',
        files: [
          { name: 'Cli.java', path: 'OOP/L-6/Cli.java', desc: 'Reads two command-line integers, performs division, and demonstrates try-catch-finally handling.' },
          { name: 'Throw_s.java', path: 'OOP/L-6/Throw_s.java', desc: 'Demonstrates custom exception throwing by validating age from command-line input.' },
        ]
      },
      {
        id: 'Tut', title: 'Practice Programs',
        files: [
          { name: 'B.java', path: 'OOP/Tut/B.java', desc: 'Demonstrates single inheritance where class B extends class A and calls both inherited and own methods.' },
          { name: 'Package.java', path: 'OOP/Tut/PkgExample/Package.java', desc: 'Imports com.Demo and demonstrates calling static and instance methods from another package.' },
          { name: 'Demo.java', path: 'OOP/Tut/PkgExample/com/Demo.java', desc: 'Defines class Demo inside package com with static and non-static greeting methods.' },
          { name: 'Student.java', path: 'OOP/Tut/Student.java', desc: 'Demonstrates constructor overloading using default and parameterized constructors.' },
        ]
      },
    ],
    references: [
      { name: 'OOP.pdf', path: 'OOP/OOP.pdf', desc: 'Lab/reference document for the OOP course.' },
      { name: 'OOP-Practicals.docx', path: 'OOP/OOP-Practicals.docx', desc: 'Additional practical/reference document.' },
    ]
  },
  {
    id: 'os',
    shortName: 'OS',
    fullName: 'Operating Systems (Shell Scripting)',
    language: 'Bash / C',
    icon: 'fa-solid fa-terminal',
    gradient: 'from-amber-500 to-orange-500',
    colorClasses: {
      bg: 'bg-amber-500/10',
      text: 'text-amber-500',
      border: 'border-amber-500/25',
      bar: 'bg-gradient-to-r from-amber-500 to-orange-500',
      badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-300',
      number: 'bg-amber-500/10 text-amber-500',
    },
    labs: [
      {
        id: 'L-2', title: 'Basic Arithmetic',
        files: [
          { name: '2.sh', path: 'OS/L-2/2.sh', desc: 'Computes the sum of all natural numbers up to N and N! (factorial) using a single for loop.' },
          { name: '3.sh', path: 'OS/L-2/3.sh', desc: 'Reads a number and checks primality by testing divisibility from 2 up to N.' },
        ]
      },
      {
        id: 'L-3', title: 'String & Digit Operations',
        files: [
          { name: '1.sh', path: 'OS/L-3/1.sh', desc: 'Reverses a string using rev and checks whether it is a palindrome.' },
          { name: '2.sh', path: 'OS/L-3/2.sh', desc: 'Calculates the sum of digits of a number by repeatedly extracting the last digit via modulo.' },
          { name: '3.sh', path: 'OS/L-3/3.sh', desc: 'Accepts numbers as command-line arguments and sorts them in descending order using bubble sort.' },
        ]
      },
      {
        id: 'L-4', title: 'Process Creation (C)',
        files: [
          { name: '1.c', path: 'OS/L-4/1.c', desc: 'Creates multiple child processes using fork() and prints child and parent process IDs.' },
          { name: '2.c', path: 'OS/L-4/2.c', desc: 'Creates child processes using fork(), prints process IDs, and performs child-specific work.' },
        ]
      },
      {
        id: 'L-7', title: 'Command-Line Argument Processing',
        files: [
          { name: '1.sh', path: 'OS/L-7/1.sh', desc: 'Accepts multiple numbers as arguments and computes their minimum, maximum, and average.' },
        ]
      },
      {
        id: 'L-8', title: 'File & Directory Listing',
        files: [
          { name: '2.sh', path: 'OS/L-8/2.sh', desc: 'Lists files in the current directory sorted by size in descending order.' },
          { name: '3.sh', path: 'OS/L-8/3.sh', desc: 'Lists files sorted by size and counts the total number of regular files in the directory.' },
        ]
      },
      {
        id: 'L-9', title: 'Directory Handling (C)',
        files: [
          { name: '1.c', path: 'OS/L-9/1.c', desc: 'Opens the current directory using opendir() and prints all non-hidden entries using readdir().' },
        ]
      },
      {
        id: 'L-10', title: 'File Manipulation',
        files: [
          { name: '1.sh', path: 'OS/L-10/1.sh', desc: 'Swaps the case (lower↔upper) of every letter in a file\'s content using tr.' },
          { name: '2.sh', path: 'OS/L-10/2.sh', desc: 'Finds all .txt files in the current directory and renames them to use the .doc extension.' },
          { name: '3.sh', path: 'OS/L-10/3.sh', desc: 'Creates f1.txt and f2.txt if missing, compares their content, and optionally deletes both files.' },
        ]
      },
    ],
    references: [
      { name: 'OS.pdf', path: 'OS/OS.pdf', desc: 'Lab/reference document for the OS course.' },
    ]
  },
];

// ---------- State ----------
let currentView = 'home';
let currentSubject = null;
let openAccordions = new Set();

// ---------- DOM Refs ----------
const $ = (id) => document.getElementById(id);
const navbar = $('navbar');
const navBrand = $('nav-brand');
const searchInput = $('search-input');
const searchClear = $('search-clear');
const themeToggle = $('theme-toggle');
const themeIcon = $('theme-icon');
const heroSection = $('hero-section');
const subjectsSection = $('subjects-section');
const terminalSection = $('terminal-section');
const contentSection = $('content-section');
const contentTitle = $('content-title');
const labList = $('lab-list');
const referenceSection = $('reference-section');
const referenceFiles = $('reference-files');
const backBtn = $('back-btn');
const searchSection = $('search-section');
const searchHeading = $('search-heading');
const searchResults = $('search-results');
const codeModal = $('code-modal');
const modalFilename = $('modal-filename');
const modalPath = $('modal-path');
const modalBody = $('modal-body');
const modalClose = $('modal-close');
const modalCopyBtn = $('modal-copy-btn');
const modalGithubLink = $('modal-github-link');
const copyToast = $('copy-toast');

// ---------- Init ----------
function init() {
  loadTheme();
  computeStats();
  renderSubjectCards();
  initParticles();
  initTerminal();
  bindEvents();
}

// ---------- Stats ----------
function computeStats() {
  let totalLabs = 0, totalFiles = 0;
  SUBJECTS.forEach(s => {
    totalLabs += s.labs.length;
    s.labs.forEach(l => totalFiles += l.files.length);
  });
  const labsEl = $('stat-labs');
  const filesEl = $('stat-files');
  if (labsEl) labsEl.textContent = totalLabs;
  if (filesEl) filesEl.textContent = totalFiles;
}

// ---------- Theme ----------
function loadTheme() {
  const saved = localStorage.getItem('vvp-theme') || 'dark';
  applyTheme(saved);
}

function applyTheme(theme) {
  const html = document.documentElement;
  if (theme === 'light') {
    html.classList.remove('dark');
    themeIcon.className = 'fa-solid fa-sun';
    $('hljs-theme-dark').disabled = true;
    $('hljs-theme-light').disabled = false;
  } else {
    html.classList.add('dark');
    themeIcon.className = 'fa-solid fa-moon';
    $('hljs-theme-dark').disabled = false;
    $('hljs-theme-light').disabled = true;
  }
  localStorage.setItem('vvp-theme', theme);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  // Spin icon animation
  themeToggle.classList.add('theme-spinning');
  setTimeout(() => themeToggle.classList.remove('theme-spinning'), 500);
  applyTheme(isDark ? 'light' : 'dark');
}

// ---------- Render Subject Cards ----------
function renderSubjectCards() {
  subjectsSection.innerHTML = SUBJECTS.map((s, idx) => {
    const fileCount = s.labs.reduce((sum, l) => sum + l.files.length, 0);
    const c = s.colorClasses;
    const delay = idx * 80;
    return `
      <div class="subject-card-wrap stagger-item group relative rounded-2xl p-6 sm:p-7 cursor-pointer overflow-hidden backdrop-blur-md
        bg-white/70 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06]
        hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-500/20 dark:hover:border-indigo-500/20
        hover:bg-white dark:hover:bg-white/[0.07]"
        data-subject="${s.id}" style="animation-delay: ${delay}ms">
        <div class="card-top-bar ${c.bar}"></div>
        <div class="flex items-start justify-between mb-4">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl ${c.bg} ${c.text}">
            <i class="${s.icon}"></i>
          </div>
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 transition-all duration-300 group-hover:text-slate-800 dark:group-hover:text-slate-100 group-hover:translate-x-1">
            <i class="fa-solid fa-arrow-right text-sm"></i>
          </div>
        </div>
        <h3 class="text-xl font-bold mb-1">${s.shortName}</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">${s.fullName}</p>
        <div class="flex flex-wrap gap-x-4 gap-y-1">
          <span class="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500"><i class="fa-solid fa-flask text-[10px]"></i> ${s.labs.length} Labs</span>
          <span class="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500"><i class="fa-solid fa-file-code text-[10px]"></i> ${fileCount} Programs</span>
          <span class="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500"><i class="fa-solid fa-code text-[10px]"></i> ${s.language}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ---------- Show Subject ----------
function showSubject(subjectId) {
  const subject = SUBJECTS.find(s => s.id === subjectId);
  if (!subject) return;
  currentSubject = subject;
  currentView = 'subject';
  openAccordions.clear();

  const c = subject.colorClasses;
  contentTitle.innerHTML = `${subject.fullName} <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider align-middle ml-2 ${c.badge}">${subject.shortName}</span>`;

  labList.innerHTML = subject.labs.map((lab, idx) => {
    const delay = idx * 60;
    const filesHTML = lab.files.map(file => `
      <div class="file-item flex items-center justify-between gap-3 px-3 sm:px-4 py-3 rounded-lg cursor-pointer
        hover:bg-black/[0.03] dark:hover:bg-white/[0.04] group/file"
        data-path="${file.path}" data-name="${file.name}">
        <div class="flex items-center gap-3 min-w-0 flex-1">
          <i class="fa-solid fa-file-code text-sm text-slate-400 dark:text-slate-500 flex-shrink-0"></i>
          <span class="font-mono text-sm font-medium truncate">${file.name}</span>
        </div>
        <span class="text-xs text-slate-400 dark:text-slate-500 text-right hidden md:block max-w-[50%] line-clamp-2 leading-snug">${file.desc}</span>
        <i class="fa-solid fa-chevron-right text-[10px] text-slate-300 dark:text-slate-600 group-hover/file:text-indigo-500 group-hover/file:translate-x-0.5 transition-all duration-150 flex-shrink-0"></i>
      </div>
    `).join('');

    return `
      <div class="lab-accordion stagger-item rounded-xl overflow-hidden border backdrop-blur-sm
        bg-white/70 dark:bg-white/[0.03] border-black/[0.06] dark:border-white/[0.06]
        hover:border-indigo-500/15 dark:hover:border-indigo-500/15"
        data-lab="${lab.id}" style="animation-delay: ${delay}ms">
        <div class="lab-accordion-header flex items-center justify-between px-4 sm:px-5 py-4 cursor-pointer select-none transition-colors duration-150
          hover:bg-black/[0.02] dark:hover:bg-white/[0.02]">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${c.number}">${lab.id}</div>
            <div>
              <h3 class="text-[15px] font-semibold">${lab.title}</h3>
              <span class="text-xs text-slate-400 dark:text-slate-500">${lab.files.length} program${lab.files.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
          <i class="fa-solid fa-chevron-down text-xs text-slate-400 dark:text-slate-500 accordion-chevron"></i>
        </div>
        <div class="accordion-body">
          <div class="px-3 sm:px-5 pb-4 flex flex-col gap-0.5">${filesHTML}</div>
        </div>
      </div>
    `;
  }).join('');

  // References
  if (subject.references?.length) {
    referenceFiles.innerHTML = subject.references.map(ref => `
      <a href="${RAW_BASE}/${ref.path}" target="_blank" rel="noopener"
        class="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium no-underline transition-all duration-150
        bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06]
        text-slate-500 dark:text-slate-400 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] hover:text-slate-800 dark:hover:text-slate-100 hover:border-indigo-500/20">
        <i class="fa-solid fa-file-pdf text-red-500"></i> ${ref.name}
      </a>
    `).join('');
    referenceSection.classList.remove('hidden');
  } else {
    referenceSection.classList.add('hidden');
  }

  // Switch views with smooth transition
  hide(heroSection, subjectsSection, terminalSection, searchSection);
  show(contentSection);
  contentSection.classList.add('view-fade-in');
  setTimeout(() => contentSection.classList.remove('view-fade-in'), 600);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- Show Home ----------
function showHome() {
  currentView = 'home';
  currentSubject = null;
  openAccordions.clear();
  searchInput.value = '';
  searchClear.classList.remove('clear-visible');

  hide(contentSection, searchSection);
  show(heroSection, subjectsSection, terminalSection);
  // Re-trigger stagger animations on cards
  subjectsSection.querySelectorAll('.stagger-item').forEach(el => {
    el.style.animation = 'none';
    el.offsetHeight; // force reflow
    el.style.animation = '';
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- Helpers ----------
function hide(...els) { els.forEach(el => el.classList.add('hidden')); }
function show(...els) { els.forEach(el => el.classList.remove('hidden')); }

// ---------- Accordion ----------
function toggleAccordion(el) {
  const id = el.dataset.lab;
  const body = el.querySelector('.accordion-body');
  const isOpen = el.classList.contains('accordion-open');

  if (isOpen) {
    // Closing: animate from current height to 0
    body.style.maxHeight = body.scrollHeight + 'px';
    // Force reflow so the browser registers the starting height
    body.offsetHeight;
    body.style.maxHeight = '0px';
    el.classList.remove('accordion-open');
    openAccordions.delete(id);
  } else {
    // Opening: animate from 0 to scrollHeight
    el.classList.add('accordion-open');
    body.style.maxHeight = body.scrollHeight + 'px';
    openAccordions.add(id);
    // After transition completes, remove inline max-height so content can resize naturally
    const onEnd = () => {
      if (el.classList.contains('accordion-open')) {
        body.style.maxHeight = 'none';
      }
      body.removeEventListener('transitionend', onEnd);
    };
    body.addEventListener('transitionend', onEnd);
  }
}

// ---------- Code Viewer ----------
let cachedCode = {};

async function openCodeViewer(filePath, fileName) {
  const lang = getLanguage(fileName);
  codeModal.classList.add('modal-visible');
  document.body.style.overflow = 'hidden';
  modalFilename.textContent = fileName;
  modalPath.textContent = filePath;
  modalGithubLink.href = `${GITHUB_BASE}/${filePath}`;
  modalBody.innerHTML = `
    <div class="flex items-center justify-center py-20 gap-3 text-slate-400 dark:text-slate-500 text-sm">
      <div class="w-5 h-5 border-2 border-slate-300 dark:border-slate-600 border-t-indigo-500 rounded-full animate-spin"></div>
      Loading source code...
    </div>`;

  try {
    let code = cachedCode[filePath];
    if (!code) {
      const res = await fetch(`${RAW_BASE}/${filePath}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      code = await res.text();
      cachedCode[filePath] = code;
    }
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    modalBody.innerHTML = `<pre class="m-0 p-5 text-sm leading-relaxed"><code class="language-${lang} font-mono">${escaped}</code></pre>`;
    hljs.highlightElement(modalBody.querySelector('code'));
  } catch (err) {
    modalBody.innerHTML = `<div class="py-10 text-center text-red-500 text-sm"><i class="fa-solid fa-triangle-exclamation"></i><br>Failed to load: ${err.message}</div>`;
  }
}

function closeCodeViewer() {
  codeModal.classList.remove('modal-visible');
  document.body.style.overflow = '';
}

function getLanguage(f) {
  if (f.endsWith('.c')) return 'c';
  if (f.endsWith('.java')) return 'java';
  if (f.endsWith('.sh')) return 'bash';
  return 'plaintext';
}

async function copyCode() {
  const codeEl = modalBody.querySelector('code');
  if (!codeEl) return;
  try {
    await navigator.clipboard.writeText(codeEl.textContent);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = codeEl.textContent;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
  copyToast.classList.add('toast-show');
  setTimeout(() => copyToast.classList.remove('toast-show'), 2000);
}

// ---------- Search ----------
function performSearch(query) {
  query = query.trim().toLowerCase();
  if (!query) { if (currentView === 'search') showHome(); return; }

  const results = [];
  SUBJECTS.forEach(subject => {
    subject.labs.forEach(lab => {
      lab.files.forEach(file => {
        const hay = `${file.name} ${file.desc} ${lab.title} ${subject.shortName} ${subject.fullName}`.toLowerCase();
        if (hay.includes(query)) results.push({ subject, lab, file });
      });
    });
  });

  currentView = 'search';
  hide(heroSection, subjectsSection, terminalSection, contentSection);
  show(searchSection);
  searchSection.classList.add('view-fade-in');
  setTimeout(() => searchSection.classList.remove('view-fade-in'), 600);

  searchHeading.innerHTML = results.length
    ? `Found <strong class="text-slate-900 dark:text-slate-100">${results.length}</strong> result${results.length !== 1 ? 's' : ''} for "<strong class="text-slate-900 dark:text-slate-100">${esc(query)}</strong>"`
    : '';

  if (!results.length) {
    searchResults.innerHTML = `
      <div class="text-center py-16 text-slate-400 dark:text-slate-500">
        <i class="fa-solid fa-magnifying-glass text-4xl mb-4 opacity-50 block"></i>
        <p class="text-base mb-1">No results for "${esc(query)}"</p>
        <span class="text-sm">Try a different search term</span>
      </div>`;
    return;
  }

  searchResults.innerHTML = results.map((r, idx) => {
    const c = r.subject.colorClasses;
    const delay = Math.min(idx * 40, 400);
    return `
      <div class="stagger-item flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 rounded-xl mb-2 cursor-pointer transition-all duration-150
        bg-white/70 dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06]
        hover:border-indigo-500/20 hover:bg-white dark:hover:bg-white/[0.06] hover:translate-x-1 group/sr"
        data-path="${r.file.path}" data-name="${r.file.name}" style="animation-delay: ${delay}ms">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex-shrink-0 ${c.badge}">${r.subject.shortName}</span>
        <span class="font-mono text-sm font-medium flex-shrink-0">${r.file.name}</span>
        <span class="text-xs text-slate-400 dark:text-slate-500 flex-1 truncate hidden sm:inline">${r.file.desc}</span>
        <i class="fa-solid fa-chevron-right text-[10px] text-slate-300 dark:text-slate-600 group-hover/sr:text-indigo-500 group-hover/sr:translate-x-1 transition-all flex-shrink-0"></i>
      </div>
    `;
  }).join('');
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ---------- Events ----------
function bindEvents() {
  themeToggle.addEventListener('click', toggleTheme);
  navBrand.addEventListener('click', e => { e.preventDefault(); showHome(); });
  backBtn.addEventListener('click', showHome);

  subjectsSection.addEventListener('click', e => {
    const card = e.target.closest('[data-subject]');
    if (card) showSubject(card.dataset.subject);
  });

  labList.addEventListener('click', e => {
    const header = e.target.closest('.lab-accordion-header');
    if (header) { toggleAccordion(header.closest('.lab-accordion')); return; }
    const fi = e.target.closest('.file-item');
    if (fi) openCodeViewer(fi.dataset.path, fi.dataset.name);
  });

  searchResults.addEventListener('click', e => {
    const item = e.target.closest('[data-path]');
    if (item) openCodeViewer(item.dataset.path, item.dataset.name);
  });

  modalClose.addEventListener('click', closeCodeViewer);
  codeModal.addEventListener('click', e => { if (e.target === codeModal) closeCodeViewer(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && codeModal.classList.contains('modal-visible')) closeCodeViewer(); });
  modalCopyBtn.addEventListener('click', copyCode);

  let searchTimer;
  searchInput.addEventListener('input', () => {
    const v = searchInput.value;
    searchClear.classList.toggle('clear-visible', v.length > 0);
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => performSearch(v), 250);
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.classList.remove('clear-visible');
    if (currentView === 'search') showHome();
    searchInput.focus();
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ---------- Particles ----------
function initParticles() {
  const canvas = $('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.min(50, Math.floor((canvas.width * canvas.height) / 22000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.25 + 0.08,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.classList.contains('dark');
    const rgb = isDark ? '255,255,255' : '0,0,0';

    particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb},${p.o})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${rgb},${0.035 * (1 - d / 110)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
}

// ---------- Terminal Animation ----------
function initTerminal() {
  const termLines = $('terminal-lines');
  const termTyped = $('terminal-typed');
  const promptLine = $('terminal-prompt-line');
  if (!termLines || !termTyped) return;

  // Each sequence: { command (with HTML), output lines (with HTML), pause after }
  const sequences = [
    {
      command: '<span class="term-command">gcc</span> <span class="term-file">bubbleSort.c</span> <span class="term-flag">-o</span> <span class="term-file">sort</span> <span class="term-command">&&</span> <span class="term-file">./sort</span>',
      plain: 'gcc bubbleSort.c -o sort && ./sort',
      output: [
        '<span class="term-output">Enter array size:</span> <span class="term-number">5</span>',
        '<span class="term-output">Enter elements:</span> <span class="term-number">64 34 25 12 22</span>',
        '<span class="term-success">Sorted: 12 22 25 34 64</span>',
      ]
    },
    {
      command: '<span class="term-command">javac</span> <span class="term-file">PrimeCheck.java</span> <span class="term-command">&&</span> <span class="term-command">java</span> <span class="term-file">PrimeCheck</span>',
      plain: 'javac PrimeCheck.java && java PrimeCheck',
      output: [
        '<span class="term-output">Enter a number:</span> <span class="term-number">17</span>',
        '<span class="term-success">17 is a prime number ✓</span>',
      ]
    },
    {
      command: '<span class="term-command">bash</span> <span class="term-file">palindrome.sh</span>',
      plain: 'bash palindrome.sh',
      output: [
        '<span class="term-output">Enter a string:</span> <span class="term-file">madam</span>',
        '<span class="term-success">"madam" is a palindrome ✓</span>',
      ]
    },
    {
      command: '<span class="term-command">gcc</span> <span class="term-file">lcs.c</span> <span class="term-flag">-o</span> <span class="term-file">lcs</span> <span class="term-command">&&</span> <span class="term-file">./lcs</span>',
      plain: 'gcc lcs.c -o lcs && ./lcs',
      output: [
        '<span class="term-output">String A:</span> <span class="term-file">ABCBDAB</span>',
        '<span class="term-output">String B:</span> <span class="term-file">BDCAB</span>',
        '<span class="term-success">LCS length: 4</span>',
      ]
    },
    {
      command: '<span class="term-command">javac</span> <span class="term-file">Shapes.java</span> <span class="term-command">&&</span> <span class="term-command">java</span> <span class="term-file">Shapes</span>',
      plain: 'javac Shapes.java && java Shapes',
      output: [
        '<span class="term-output">Circle radius:</span> <span class="term-number">7</span>',
        '<span class="term-success">Area = 153.94 sq units</span>',
      ]
    },
  ];

  let seqIdx = 0;
  let charIdx = 0;
  let isTyping = false;

  function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  async function runSequence() {
    while (true) {
      const seq = sequences[seqIdx % sequences.length];
      seqIdx++;

      // Type command character by character
      termTyped.textContent = '';
      const plainText = seq.plain;
      for (let i = 0; i < plainText.length; i++) {
        termTyped.textContent += plainText[i];
        // Vary speed: faster for common chars, slight pause on spaces
        const delay = plainText[i] === ' ' ? 80 : (30 + Math.random() * 50);
        await sleep(delay);
      }

      // "Execute" — small pause then show output
      await sleep(400);

      // Move the typed command into the history lines
      const cmdLine = document.createElement('div');
      cmdLine.innerHTML = `<span class="term-prompt mr-2 select-none">❯</span> ${seq.command}`;
      termLines.appendChild(cmdLine);
      termTyped.textContent = '';

      // Print output lines with stagger
      for (const line of seq.output) {
        await sleep(150);
        const outEl = document.createElement('div');
        outEl.className = 'ml-5';
        outEl.innerHTML = line;
        outEl.style.opacity = '0';
        outEl.style.transform = 'translateY(4px)';
        outEl.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        termLines.appendChild(outEl);
        // Trigger animation next frame
        requestAnimationFrame(() => {
          outEl.style.opacity = '1';
          outEl.style.transform = 'translateY(0)';
        });
      }

      // Pause before next command
      await sleep(2200);

      // After a few commands, clear old lines to prevent overflow (keep last 6)
      while (termLines.children.length > 6) {
        const first = termLines.firstChild;
        first.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        first.style.opacity = '0';
        first.style.transform = 'translateY(-6px)';
        await sleep(100);
        termLines.removeChild(first);
      }

      // Small gap
      await sleep(300);
    }
  }

  // Start after a delay so the page loads first
  setTimeout(() => runSequence(), 1800);
}

// ---------- Boot ----------
document.addEventListener('DOMContentLoaded', init);
