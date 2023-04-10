# Website for Department of Computer Science and Engineering @ S.P.I.T.

## Steps to run the project locally:
- Open command prompt (or terminal) and change the current working directory to location where you want to clone the repository.
- Then type: **git clone {repo-name}** and press Enter.
- If the clone was successfully completed then a new sub directory may appear with the same name as the repository.
- In terminal, now change the currently directory to the new sub directory.
- Then type **npm install**. This installs all the dependencies required to run the project.
- To run the project, type **npm run start**.

## Regarding Data
> **Note :** Follow the same schema as used in the respective files. 
- About Department Data (src/metadata/aboutDeptData.js) 
  - Message From HOD (displayed in Home Page - src/pages/home.jsx)
    > **Note :** If you want multiple paragraphs to be displayed, then store each paragraph as a separate string in the array.
  - Important Links (displayed in Home Page - src/pages/home.jsx)
  - About The Department (displayed in About Us Page - src/pages/about us/abousus.jsx)
  - About Us Carousels (List of Images Names with extension) (displayed in About Us Page - src/pages/about us/aboutus.jsx) 
    > Carousel images stored in public/assets/carousel

- Academics Data (src/metadata/academicsData.js)
  - CSE-DS (displayed in Academics UG DS Page - src/pages/academics/dsAcademics.jsx)
    - Time Table
    - Syllabus
  - CSE-AIML (displayed in Academics UG AIML Page - src/pages/academics/AimlAcademics.jsx)
    - Time Table
    - Syllabus
  > **Note :** The links of documents that are hosted somewhere else can be directly added in link part. In case the document is to be hosted on this domain itself, add the required document in public/assets/documents and add the relative link in the link part (e.g. link: '/assets/document/documentName.pdf')

- Events Data (src/metadata/events.js)
  - Expert Talks (displayed in Expert Talks Page - src/pages/events/expertTalks.jsx)
  - Competitions (schema not present as no data available, to be displayed in Competitions Page - src/pages/events/competitions.jsx)
  - Workshops (schema not present as no data available, to be displayed in Workshops Page - src/pages/events/workshops.jsx)
  - Values Added Courses (schema not present as no data available, to be displayed in Value Added Courses Page - src/pages/events/valueAddedCourses.jsx)

- Faculty Data (src/metadata/facultyData.jsx)
  - CSE-AIML
    - Prof. Dayanand Ambawade
    - Prof. Sheetal Chaudhari
    - Prof. Renuka Pawar
    - Prof. Aparna Halbe
  - CSE-DS
    - Dr. Dhananjay Kalbande
    - Dr. Sujata S Kulkarni
    - Prof. Varsha Hole
    - Prof. Nikahat Mulla
  > **NOTE :** In case you want to add additonal data for a faculty, go to data in individual faculty object. Add the heading as key and the data to be displayed as the array of strings. 

## Regarding Images and Documents
- All images are stored in the public directory.
- All images regarding meta tags and manifest are stored directly inside the public directory.
- All other images to be used in the web pages are stored inside public &#8594; assets &#8594; {respective folders}.
- All **document** to be used in the webpages are stored in public &#8594; assets &#8594; documents.
