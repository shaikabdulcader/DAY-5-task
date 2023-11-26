//1. Using for loop

let resume = {
    "name": "Your Name",
    "contact": {
      "email": "your.email@example.com",
      "phone": "123-456-7890"
    },
    "summary": "Enthusiastic software engineer with a passion for problem-solving and creating efficient solutions.",
    "education": [
      {
        "degree": "BSc in Computer Science",
        "school": "University Name",
        "graduation_year": 2020
      }
    ],
    "experience": [
      {
        "title": "Software Engineer",
        "company": "ABC Tech",
        "location": "City, Country",
        "start_date": "Jan 2019",
        "end_date": "Present",
        "responsibilities": [
          "Developing software applications.",
          "Collaborating with teams on new features."
        ]
      }
    ],
    "skills": [
      "Languages: Java, Python",
      "Web: HTML, CSS, JavaScript",
      "Database: SQL",
      "Problem-solving"
    ]
  };
  
  // 1. Using a for loop 
  
  for (let i = 0; i < resume.skills.length; i++) {
    console.log('Skill:', resume.skills[i]);
  }
  
  

  
  
  

  