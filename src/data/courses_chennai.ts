const data = [
  {
    "CODE": "BSTS102P",
    "TITLE": "Quantitative Skills Practice II",
    "TYPE": "SS",
    "CREDITS": 1.5,
    "SLOT": "D1+TD1",
    "FACULTY": "ETHNUS (APT)"
  },
  {
    "CODE": "BSTS302P",
    "TITLE": "Advanced Competitive Coding - II",
    "TYPE": "SS",
    "CREDITS": 1.5,
    "SLOT": "E1+TE1",
    "FACULTY": "ETHNUS (APT)"
  },
  {
    "CODE": "ISTS202P",
    "TITLE": "Quantitative Skills Practice II",
    "TYPE": "SS",
    "CREDITS": 1.5,
    "SLOT": "D1+TD1",
    "FACULTY": "ETHNUS (APT)"
  },
  {
    "CODE": "ISTS302P",
    "TITLE": "Advanced Competitive Coding - II",
    "TYPE": "SS",
    "CREDITS": 1.5,
    "SLOT": "B1+TB1",
    "FACULTY": "ETHNUS (APT)"
  },
  {
    "CODE": "MASTS501",
    "TITLE": "Qualitative and Quantitative Skills",
    "TYPE": "SS",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "ETHNUS (APT)"
  },
  {
    "CODE": "MASTS502",
    "TITLE": "Qualitative and Quantitative Skills",
    "TYPE": "SS",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "SIXPHRASE(APT)"
  },
  {
    "CODE": "MASTS505",
    "TITLE": "Professional Soft Skills",
    "TYPE": "SS",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "FACE (APT)"
  },
  {
    "CODE": "MASTS601",
    "TITLE": "Competitive Coding I",
    "TYPE": "SS",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "FACE (APT)"
  },
  {
    "CODE": "MASTS602",
    "TITLE": "Competitive Coding II",
    "TYPE": "SS",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "ETHNUS (APT)"
  },
  {
    "CODE": "PASTS501",
    "TITLE": "Qualitative and Quantitative Skills",
    "TYPE": "SS",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "FACE (APT)"
  },
  {
    "CODE": "PASTS602",
    "TITLE": "Competitive Coding II",
    "TYPE": "SS",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "ETHNUS (APT)"
  },
  {
    "CODE": "STS1012",
    "TITLE": "Introduction to Business Commun",
    "TYPE": "SS",
    "CREDITS": 1,
    "SLOT": "D1+TD1",
    "FACULTY": "FACE (APT)"
  },
  {
    "CODE": "STS2012",
    "TITLE": "Aptitude and Reasoning Skills",
    "TYPE": "SS",
    "CREDITS": 1,
    "SLOT": "D1+TD1",
    "FACULTY": "SIXPHRASE(APT)"
  },
  {
    "CODE": "STS3022",
    "TITLE": "Enhancing Problem Solving Skills",
    "TYPE": "SS",
    "CREDITS": 1,
    "SLOT": "B1+TB1",
    "FACULTY": "FACE (APT)"
  },
  {
    "CODE": "STS4022",
    "TITLE": "Preparation for Employment",
    "TYPE": "SS",
    "CREDITS": 1,
    "SLOT": "E1+TE1",
    "FACULTY": "ETHNUS (APT)"
  },
  {
    "CODE": "USTS102P",
    "TITLE": "Quantitative Skills",
    "TYPE": "SS",
    "CREDITS": 1.5,
    "SLOT": "F1+TF1",
    "FACULTY": "ETHNUS (APT)"
  },
  {
    "CODE": "USTS302P",
    "TITLE": "Advanced Competitive Coding-II",
    "TYPE": "SS",
    "CREDITS": 1.5,
    "SLOT": "D1+TD1",
    "FACULTY": "FACE (APT)"
  },
  {
    "CODE": "BACHY105",
    "TITLE": "Applied Chemistry",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "TANUSHREE CHOUDH"
  },
  {
    "CODE": "BACHY107",
    "TITLE": "Applied Chemistry for Electronics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "AROCKIASAMY"
  },
  {
    "CODE": "BAMAT201",
    "TITLE": "Complex Variables and Linear Alge",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C1+TC1+TCC1",
    "FACULTY": "BALAJI"
  },
  {
    "CODE": "BAMAT202",
    "TITLE": "Linear Algebra",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "SANDIP KUMAR DAS"
  },
  {
    "CODE": "BAMAT205",
    "TITLE": "Discrete Mathematics and Linear",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C1+TC1+TCC1",
    "FACULTY": "NATHIYA N"
  },
  {
    "CODE": "BAMAT206",
    "TITLE": "Linear Algebra and Integral Transf",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C1+TC1+TCC1",
    "FACULTY": "OM NAMHA SHIVAY"
  },
  {
    "CODE": "BAMAT207",
    "TITLE": "Probability and Statistics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "GAYATHRI M"
  },
  {
    "CODE": "BAMAT211",
    "TITLE": "Probability Theory and Statistical I",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "THANGARAJ M"
  },
  {
    "CODE": "BAPHY101",
    "TITLE": "Applied Physics for Engineers",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "SANJIT DAS"
  },
  {
    "CODE": "BAPHY103",
    "TITLE": "Physics and Mechanics for Engine",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "JUSTIN RAJ"
  },
  {
    "CODE": "BAPHY105",
    "TITLE": "Engineering Physics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "NAVAMATHAVAN R"
  },
  {
    "CODE": "BAPHY106",
    "TITLE": "Foundations of Quantum Mechan",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "R. D. EITHIRAJ"
  },
  {
    "CODE": "BAPHY109",
    "TITLE": "Physics of Materials in Textile and",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "MANIKANDAN N"
  },
  {
    "CODE": "BMAT102L",
    "TITLE": "Differential Equations and Transfo",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "SAURABH CHANDRA"
  },
  {
    "CODE": "BMAT201L",
    "TITLE": "Complex Variables and Linear Alge",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "ASHIS BERA"
  },
  {
    "CODE": "BMAT202L",
    "TITLE": "Probability and Statistics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E2+TE2",
    "FACULTY": "KARTHIK S"
  },
  {
    "CODE": "BMAT202P",
    "TITLE": "Probability and Statistics Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L15+L16",
    "FACULTY": "KARTHIK S"
  },
  {
    "CODE": "BMAT205L",
    "TITLE": "Discrete Mathematics and Graph",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C1+TC1+TCC1",
    "FACULTY": "PULAK KONAR"
  },
  {
    "CODE": "IACHY101",
    "TITLE": "Environmental Sciences",
    "TYPE": "OC",
    "CREDITS": 2,
    "SLOT": "NIL",
    "FACULTY": "ARULMANI S"
  },
  {
    "CODE": "IAMAT201",
    "TITLE": "Applied Linear Algebra",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "PRABHAKAR V"
  },
  {
    "CODE": "IAPHY101",
    "TITLE": "Engineering Physics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "G VINITHA"
  },
  {
    "CODE": "IMAT202L",
    "TITLE": "Probability and Statistics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "SOUMENDU ROY"
  },
  {
    "CODE": "IMAT202P",
    "TITLE": "Probability and Statistics Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L49+L50",
    "FACULTY": "SOUMENDU ROY"
  },
  {
    "CODE": "UBBH105L",
    "TITLE": "Calculus and Probability",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "KALYAN"
  },
  {
    "CODE": "UCHY101L",
    "TITLE": "Environmental Science",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "B1",
    "FACULTY": "SUNIT KUMAR"
  },
  {
    "CODE": "UECH108L",
    "TITLE": "Mathematics for Economics II",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "MUTHUNAGAI"
  },
  {
    "CODE": "UMAT102L",
    "TITLE": "Probability and Statistics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "PARTHIBAN V"
  },
  {
    "CODE": "BBIT415L",
    "TITLE": "Food, Nutrition and Health",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "SCOPE35"
  },
  {
    "CODE": "BACLE101",
    "TITLE": "Digital Surveying",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "KARTHIKEYAN K"
  },
  {
    "CODE": "BACLE103",
    "TITLE": "Mechanics of Solids",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "YAMINI SREEVALLI I"
  },
  {
    "CODE": "BACLE301",
    "TITLE": "Construction Materials and Techn",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "HELEN SANTHI M"
  },
  {
    "CODE": "BCLE205L",
    "TITLE": "Environmental Engineering",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "ANJALI GOPAKUMAR"
  },
  {
    "CODE": "BCLE205P",
    "TITLE": "Environmental Engineering Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L29+L30",
    "FACULTY": "ANJALI GOPAKUMAR"
  },
  {
    "CODE": "BCLE207L",
    "TITLE": "Soil Mechanics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "ARUN KUMAR A"
  },
  {
    "CODE": "BCLE207P",
    "TITLE": "Soil Mechanics Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "ARUN KUMAR A"
  },
  {
    "CODE": "BCLE208L",
    "TITLE": "Structural Analysis",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "KARTHIKEYAN K"
  },
  {
    "CODE": "BCLE213E",
    "TITLE": "Remote Sensing and GIS",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "A1",
    "FACULTY": "MOHAN K"
  },
  {
    "CODE": "BCLE214L",
    "TITLE": "Global Warming",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F2+TF2",
    "FACULTY": "ARUN KUMAR A"
  },
  {
    "CODE": "BCLE215L",
    "TITLE": "Waste Management",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E2+TE2",
    "FACULTY": "SABUMON P C"
  },
  {
    "CODE": "BCLE216L",
    "TITLE": "Water Resource Management",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G2+TG2",
    "FACULTY": "ELAVENIL S"
  },
  {
    "CODE": "BCLE302L",
    "TITLE": "Hydraulics and Hydraulic Machine",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "SARAVANAN K"
  },
  {
    "CODE": "BCLE302P",
    "TITLE": "Hydraulics and Hydraulic Machine",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L49+L50",
    "FACULTY": "SARAVANAN K"
  },
  {
    "CODE": "BCLE308L",
    "TITLE": "Design of Steel Structures",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "KARTHIYAINI S"
  },
  {
    "CODE": "BCLE308P",
    "TITLE": "Steel Structures Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L23+L24",
    "FACULTY": "KARTHIYAINI S"
  },
  {
    "CODE": "BCLE309L",
    "TITLE": "Estimating and Costing",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "C1",
    "FACULTY": "VASUGI V"
  },
  {
    "CODE": "BCLE310L",
    "TITLE": "Environmental Impact Assessmen",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "K PALANIVELU"
  },
  {
    "CODE": "BCLE401L",
    "TITLE": "Traffic Engineering",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "VENKADAVARAHAN"
  },
  {
    "CODE": "BCLE498J",
    "TITLE": "Project - II / Internship",
    "TYPE": "PJT",
    "CREDITS": 5,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "ICLE213E",
    "TITLE": "Remote Sensing and GIS",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "A1",
    "FACULTY": "CLAUDIA JEYA PUSHP"
  },
  {
    "CODE": "ICLE310L",
    "TITLE": "Environmental Impact Assessmen",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "CLAUDIA JEYA PUSHP"
  },
  {
    "CODE": "ICLE318L",
    "TITLE": "Construction Equipment Manage",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "SHANMUGA SUNDAR"
  },
  {
    "CODE": "ICLE320L",
    "TITLE": "Construction Economics and Finan",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C1+TC1+TCC1",
    "FACULTY": "VENKADAVARAHAN"
  },
  {
    "CODE": "ICLE321L",
    "TITLE": "Quality Control and Safety",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "SHANMUGA SUNDAR"
  },
  {
    "CODE": "ICLE401L",
    "TITLE": "Traffic Engineering",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "CLAUDIA JEYA PUSHP"
  },
  {
    "CODE": "ICLE404L",
    "TITLE": "Construction Personnel Managem",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "KARTHIYAINI S"
  },
  {
    "CODE": "ICLE499J",
    "TITLE": "Project II / Internship(one semest",
    "TYPE": "PJT",
    "CREDITS": 20,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "MASTE504",
    "TITLE": "Advanced Design of Steel Structur",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "VASUGI K"
  },
  {
    "CODE": "MASTE505",
    "TITLE": "Finite element analysis",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "YAMINI SREEVALLI I"
  },
  {
    "CODE": "MASTE602",
    "TITLE": "Advanced Concrete Materials and",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "SENTHILPANDIAN M"
  },
  {
    "CODE": "MASTE604",
    "TITLE": "Earthquake Resistant Design",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "HELEN SANTHI M"
  },
  {
    "CODE": "MASTE608",
    "TITLE": "Prefabricated Structures",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "ELAVENIL S"
  },
  {
    "CODE": "MSTE699J",
    "TITLE": "Internship II/ Dissertation II",
    "TYPE": "PJT",
    "CREDITS": 12,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "BACSE102",
    "TITLE": "Problem Solving Using Java",
    "TYPE": "LO",
    "CREDITS": 2,
    "SLOT": "L29+L30+L49+L50",
    "FACULTY": "RAJA M"
  },
  {
    "CODE": "BACSE103",
    "TITLE": "Computation Structures",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "CHRISTOPHER COLUM"
  },
  {
    "CODE": "BACSE104",
    "TITLE": "Structured and Object-Oriented P",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "RADHA R"
  },
  {
    "CODE": "BACSE105",
    "TITLE": "Data Structures and Algorithms",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "S JAHANGEER SIDIQ"
  },
  {
    "CODE": "BCSE203E",
    "TITLE": "Web Programming",
    "TYPE": "ETH",
    "CREDITS": 1,
    "SLOT": "TG1",
    "FACULTY": "BALRAJ E"
  },
  {
    "CODE": "BCSE204L",
    "TITLE": "Design and Analysis of Algorithms",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "KAJA MOHIDEEN A"
  },
  {
    "CODE": "BCSE204P",
    "TITLE": "Design and Analysis of Algorithms",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L23+L24",
    "FACULTY": "KAJA MOHIDEEN A"
  },
  {
    "CODE": "BCSE205L",
    "TITLE": "Computer Architecture and Organ",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "E INIYA NEHRU"
  },
  {
    "CODE": "BCSE206L",
    "TITLE": "Foundations of Data Science",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "VIGNESH U"
  },
  {
    "CODE": "BCSE208L",
    "TITLE": "Data Mining",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "F1",
    "FACULTY": "PARVATHI R"
  },
  {
    "CODE": "BCSE208P",
    "TITLE": "Data Mining Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L55+L56",
    "FACULTY": "PARVATHI R"
  },
  {
    "CODE": "BCSE209L",
    "TITLE": "Machine Learning",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "MAHESWARI N"
  },
  {
    "CODE": "BCSE209P",
    "TITLE": "Machine Learning Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L21+L22",
    "FACULTY": "MAHESWARI N"
  },
  {
    "CODE": "BCSE301L",
    "TITLE": "Software Engineering",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "BERIN SHALU S"
  },
  {
    "CODE": "BCSE301P",
    "TITLE": "Software Engineering Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "BERIN SHALU S"
  },
  {
    "CODE": "BCSE302L",
    "TITLE": "Database Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "GEETHA S"
  },
  {
    "CODE": "BCSE302P",
    "TITLE": "Database Systems Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L49+L50",
    "FACULTY": "GEETHA S"
  },
  {
    "CODE": "BCSE303L",
    "TITLE": "Operating Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "SHYAMALA L"
  },
  {
    "CODE": "BCSE303P",
    "TITLE": "Operating Systems Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L11+L12",
    "FACULTY": "SHYAMALA L"
  },
  {
    "CODE": "BCSE304L",
    "TITLE": "Theory of Computation",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "UMMITY SRINIVASA R"
  },
  {
    "CODE": "BCSE305L",
    "TITLE": "Embedded Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "MANIGANDAN M"
  },
  {
    "CODE": "BCSE306L",
    "TITLE": "Artificial Intelligence",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "POONKODI"
  },
  {
    "CODE": "BCSE307L",
    "TITLE": "Compiler Design",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "INDIRA B"
  },
  {
    "CODE": "BCSE307P",
    "TITLE": "Compiler Design Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L49+L50",
    "FACULTY": "INDIRA B"
  },
  {
    "CODE": "BCSE308L",
    "TITLE": "Computer Networks",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "SUBBULAKSHMI T"
  },
  {
    "CODE": "BCSE308P",
    "TITLE": "Computer Networks Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L55+L56",
    "FACULTY": "SUBBULAKSHMI T"
  },
  {
    "CODE": "BCSE309L",
    "TITLE": "Cryptography and Network Securi",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "BALASARASWATHI"
  },
  {
    "CODE": "BCSE309P",
    "TITLE": "Cryptography and Network Securi",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L49+L50",
    "FACULTY": "BALASARASWATHI"
  },
  {
    "CODE": "BCSE313L",
    "TITLE": "Fundamentals of Fog and Edge Co",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "RAJESH KUMAR"
  },
  {
    "CODE": "BCSE315L",
    "TITLE": "Wearable Computing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "ANITA X"
  },
  {
    "CODE": "BCSE316L",
    "TITLE": "Design of Smart Cities",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B2+TB2",
    "FACULTY": "MANIMEGALAI"
  },
  {
    "CODE": "BCSE332L",
    "TITLE": "Deep Learning",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "VIJAYARAJAN R"
  },
  {
    "CODE": "BCSE332P",
    "TITLE": "Deep Learning Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "VIJAYARAJAN R"
  },
  {
    "CODE": "BCSE334L",
    "TITLE": "Predictive Analytics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "NATHEZHTHA T"
  },
  {
    "CODE": "BCSE335L",
    "TITLE": "Healthcare Data Analytics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "A. K ILAVARASI"
  },
  {
    "CODE": "BCSE338L",
    "TITLE": "Fundamentals of Cyber Security",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "PRASAD M"
  },
  {
    "CODE": "BCSE338P",
    "TITLE": "Fundamentals of Cyber Security L",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "PRASAD M"
  },
  {
    "CODE": "BCSE401L",
    "TITLE": "Internet of Things",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "SUSEELA S"
  },
  {
    "CODE": "BCSE406L",
    "TITLE": "NoSQL Databases",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F2+TF2",
    "FACULTY": "SUGANESHWARI"
  },
  {
    "CODE": "BCSE409L",
    "TITLE": "Natural Language Processing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "NITISH KATAL"
  },
  {
    "CODE": "BCSE415L",
    "TITLE": "Human Computer Interaction",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "NEELANARAYANAN V"
  },
  {
    "CODE": "BCSE416L",
    "TITLE": "Game Programming",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "RATHNA"
  },
  {
    "CODE": "BCSE416P",
    "TITLE": "Game Programming Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L11+L12",
    "FACULTY": "RATHNA"
  },
  {
    "CODE": "BCSE417L",
    "TITLE": "Machine vision",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "SANTHI V"
  },
  {
    "CODE": "BCSE417P",
    "TITLE": "Machine Vision Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L1+L2",
    "FACULTY": "SANTHI V"
  },
  {
    "CODE": "BCSE418L",
    "TITLE": "Explainable Artificial Intelligence",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "VINOTHINI A"
  },
  {
    "CODE": "BCSE419L",
    "TITLE": "Speech and Language Processing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "JANAKI MEENA M"
  },
  {
    "CODE": "BCSE419P",
    "TITLE": "Speech and Language Processing l",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L11+L12",
    "FACULTY": "JANAKI MEENA M"
  },
  {
    "CODE": "BCSE420L",
    "TITLE": "Sensors, Actuators and Signal Con",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "F1",
    "FACULTY": "ASHIS"
  },
  {
    "CODE": "BCSE420P",
    "TITLE": "Sensors, Actuators and Signal Con",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "ASHIS"
  },
  {
    "CODE": "BCSE421L",
    "TITLE": "Robotics: Kinematics, Dynamics a",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "ARUNKUMAR"
  },
  {
    "CODE": "BCSE422L",
    "TITLE": "Robot Modeling and Simulation",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "GANALA SANTOSHI"
  },
  {
    "CODE": "BCSE422P",
    "TITLE": "Robot Modeling and Simulation La",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L43+L44",
    "FACULTY": "GANALA SANTOSHI"
  },
  {
    "CODE": "BCSE424L",
    "TITLE": "Machine Learning for Robotics",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "E1",
    "FACULTY": "HARINI S"
  },
  {
    "CODE": "BCSE424P",
    "TITLE": "Machine Learning for Robotics Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "HARINI S"
  },
  {
    "CODE": "BCSE425L",
    "TITLE": "Robotic Perception",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D2+TD2",
    "FACULTY": "UMESH K"
  },
  {
    "CODE": "BCSE425P",
    "TITLE": "Robotic Perception Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L23+L24",
    "FACULTY": "UMESH K"
  },
  {
    "CODE": "BCSE426L",
    "TITLE": "Robotic Process Automation",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "PAVITHRA S"
  },
  {
    "CODE": "BCSE426P",
    "TITLE": "Robotic Process Automation Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "PAVITHRA S"
  },
  {
    "CODE": "BCSE427L",
    "TITLE": "Cognitive Robotics",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "G2",
    "FACULTY": "SATHIAN D"
  },
  {
    "CODE": "BCSE427P",
    "TITLE": "Cognitive Robotics Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L5+L6",
    "FACULTY": "SATHIAN D"
  },
  {
    "CODE": "BCSE428L",
    "TITLE": "Autonomous Drones",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "D1",
    "FACULTY": "MARIA ANU"
  },
  {
    "CODE": "BCSE428P",
    "TITLE": "Autonomous Drones Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L23+L24",
    "FACULTY": "MARIA ANU"
  },
  {
    "CODE": "BCSE429L",
    "TITLE": "Cyber Physical Systems Design",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "D1",
    "FACULTY": "SUBITHA D"
  },
  {
    "CODE": "BCSE429P",
    "TITLE": "Cyber Physical System Design Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L45+L46",
    "FACULTY": "SUBITHA D"
  },
  {
    "CODE": "BCSE432E",
    "TITLE": "Reinforcement Learning",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "SUJATHA M"
  },
  {
    "CODE": "BCSE498J",
    "TITLE": "Project - II / Internship",
    "TYPE": "PJT",
    "CREDITS": 5,
    "SLOT": "NIL",
    "FACULTY": "PAT"
  },
  {
    "CODE": "CSE1908",
    "TITLE": "Capstone Project",
    "TYPE": "PJT",
    "CREDITS": 16,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "CSE3066",
    "TITLE": "Internet of Things",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "A1",
    "FACULTY": "HEMALATHA K"
  },
  {
    "CODE": "CSE3085",
    "TITLE": "Predictive Analytics with Case Stu",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "TAMILARASI K"
  },
  {
    "CODE": "CSE3087",
    "TITLE": "Information Retrieval and Organiz",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "C1",
    "FACULTY": "MALINI DEEPIKA"
  },
  {
    "CODE": "CSE3089",
    "TITLE": "Computer Vision",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "REENA ROY R"
  },
  {
    "CODE": "CSE3091",
    "TITLE": "Cloud Ecosystem",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "PREMANAND V"
  },
  {
    "CODE": "CSE3506",
    "TITLE": "Essentials of Data Analytics",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "C1",
    "FACULTY": "S.A.SAJIDHA"
  },
  {
    "CODE": "CSE4037",
    "TITLE": "Deep Learning",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "E1",
    "FACULTY": "PRAKASH P"
  },
  {
    "CODE": "CSE4067",
    "TITLE": "Bioinformatics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "SOFTYA SEBASTIAN"
  },
  {
    "CODE": "CSE4079",
    "TITLE": "DevOps",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "A1",
    "FACULTY": "SCOPE13"
  },
  {
    "CODE": "IACSE201",
    "TITLE": "Structured and Object-Oriented P",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "F1",
    "FACULTY": "JAYASUDHA M"
  },
  {
    "CODE": "IACSI101",
    "TITLE": "Data Structures and Algorithms",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "ARAVINDKUMAR S"
  },
  {
    "CODE": "IACSI202",
    "TITLE": "Digital Logic and Computer Design",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "S A AMUTHA JEEVAKU"
  },
  {
    "CODE": "IACSI205",
    "TITLE": "Operating System Fundamentals",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "NIVETHITHA V"
  },
  {
    "CODE": "IASWE101",
    "TITLE": "Digital Logic and Microprocessor",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "ASHA JERLIN M"
  },
  {
    "CODE": "IASWE102",
    "TITLE": "Software Engineering",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "RAJAKUMAR"
  },
  {
    "CODE": "IASWE202",
    "TITLE": "Data Structures and Algorithms",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "JAYARAM B"
  },
  {
    "CODE": "IBSA201L",
    "TITLE": "Programming for Data Science",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "A SHEIK ABDULLAH"
  },
  {
    "CODE": "IBSA201P",
    "TITLE": "Programming for Data Science Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L29+L30",
    "FACULTY": "A SHEIK ABDULLAH"
  },
  {
    "CODE": "IBSA202L",
    "TITLE": "Design and Analysis of Algorithms",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "RAJA M"
  },
  {
    "CODE": "IBSA204L",
    "TITLE": "Data Modelling using Spread Shee",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "VIGNESH U"
  },
  {
    "CODE": "IBSA204P",
    "TITLE": "Data Modelling using Spread Shee",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "VIGNESH U"
  },
  {
    "CODE": "IMAT207L",
    "TITLE": "Optimization Techniques",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "UMMITY SRINIVASA R"
  },
  {
    "CODE": "ISWE204L",
    "TITLE": "Operating Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "M. BRAVEEN"
  },
  {
    "CODE": "ISWE204P",
    "TITLE": "Operating Systems Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L43+L44",
    "FACULTY": "M. BRAVEEN"
  },
  {
    "CODE": "ISWE205L",
    "TITLE": "Computer Networks",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "ANITA CHRISTALINE J"
  },
  {
    "CODE": "ISWE205P",
    "TITLE": "Computer Networks Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "ANITA CHRISTALINE J"
  },
  {
    "CODE": "ISWE206L",
    "TITLE": "Web Technologies",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "SHARMILADEVI S"
  },
  {
    "CODE": "ISWE206P",
    "TITLE": "Web Technologies Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L55+L56",
    "FACULTY": "SHARMILADEVI S"
  },
  {
    "CODE": "ISWE207L",
    "TITLE": "Object Oriented and Analysis Desi",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "PRAKASH B"
  },
  {
    "CODE": "ISWE207P",
    "TITLE": "Object Oriented and Analysis Desi",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "PRAKASH B"
  },
  {
    "CODE": "ISWE209L",
    "TITLE": "Data Mining",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "KIRUTHIKA"
  },
  {
    "CODE": "ISWE301L",
    "TITLE": "Computer Architecture and Organ",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "AHADIT"
  },
  {
    "CODE": "ISWE307L",
    "TITLE": "Digital Image Processing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "SRIDHAR R"
  },
  {
    "CODE": "ISWE308L",
    "TITLE": "Soft Computing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "SHERLY A"
  },
  {
    "CODE": "ISWE309L",
    "TITLE": "Cloud Computing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "SUBBULAKSHMI P"
  },
  {
    "CODE": "ISWE310L",
    "TITLE": "Natural Language Processing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "ILAKIYASELVAN N"
  },
  {
    "CODE": "ISWE313L",
    "TITLE": "Advanced Java Programming",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "MANSOOR HUSSAIN"
  },
  {
    "CODE": "ISWE402L",
    "TITLE": "Software Metrics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "UMAMAHESWARI E"
  },
  {
    "CODE": "ISWE403L",
    "TITLE": "Software Configuration Managem",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "RAMA PRABHA"
  },
  {
    "CODE": "ISWE404L",
    "TITLE": "Design Patterns",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "PRAVEEN JOE I R"
  },
  {
    "CODE": "ISWE410L",
    "TITLE": "Machine Learning",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "PRIYADARSHINI J"
  },
  {
    "CODE": "ISWE410P",
    "TITLE": "Machine Learning Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L5+L6",
    "FACULTY": "PRIYADARSHINI J"
  },
  {
    "CODE": "ISWE417L",
    "TITLE": "Quantum Computing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "NAYEEMULLA KHAN"
  },
  {
    "CODE": "MACSE501",
    "TITLE": "Data Structures and Algorithm An",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "SCOPE23"
  },
  {
    "CODE": "MACSE505",
    "TITLE": "Deep Learning and Gen AI",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "SWEETLIN HEMALATH"
  },
  {
    "CODE": "MACSE506",
    "TITLE": "Distributed Data Processing",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "CSE FACULTY1"
  },
  {
    "CODE": "MACSE509",
    "TITLE": "Applied Deep Learning",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "SCOPE10"
  },
  {
    "CODE": "MACSE510",
    "TITLE": "Generative AI with Large Languag",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "PRAKASH P"
  },
  {
    "CODE": "MACSE513",
    "TITLE": "Computer Networks",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "KUMAR R"
  },
  {
    "CODE": "MACSE601",
    "TITLE": "Application Architecture and Depl",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "CSE FACULTY2"
  },
  {
    "CODE": "MACSE604",
    "TITLE": "Edge Intelligence",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "PRIYADARSHINI R"
  },
  {
    "CODE": "MACSE605",
    "TITLE": "Large Language Models",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "ANUSHA K"
  },
  {
    "CODE": "MACSE608",
    "TITLE": "Generative Adversarial Networks",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "SCOPE12"
  },
  {
    "CODE": "MACSE609",
    "TITLE": "Security for Data Science",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "SCOPE13"
  },
  {
    "CODE": "MACSE622",
    "TITLE": "Data Engineering and Visualization",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "SCOPE14"
  },
  {
    "CODE": "MACSE623",
    "TITLE": "Text and Speech Analytics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "PRIYADARSHINI J"
  },
  {
    "CODE": "MACSE624",
    "TITLE": "Big Data Frameworks and Technol",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "SUGANESHWARI"
  },
  {
    "CODE": "MACSE628",
    "TITLE": "Data Privacy and Security",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "MENAKA PUSHPA A"
  },
  {
    "CODE": "MACSE629",
    "TITLE": "Deep Learning and Reinforcement",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "SCOPE13"
  },
  {
    "CODE": "MACSE630",
    "TITLE": "Generative AI and Large Language",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "SCOPE14"
  },
  {
    "CODE": "MACSE634",
    "TITLE": "Responsible Artificial Intelligence",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "POONKODI"
  },
  {
    "CODE": "MACSE636",
    "TITLE": "Cybersecurity",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "SENDHIL R"
  },
  {
    "CODE": "MACSE638",
    "TITLE": "Software Engineering and Modeli",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "SATHYARAJASEKARAN"
  },
  {
    "CODE": "MACSE639",
    "TITLE": "DevOps",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "SUVIDHA RUPESH KU"
  },
  {
    "CODE": "MACSE640",
    "TITLE": "Full Stack Application and Develop",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "SANDHYA P"
  },
  {
    "CODE": "MACSE699",
    "TITLE": "Internship II/ Dissertation II",
    "TYPE": "PJT",
    "CREDITS": 10,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "MCSE602L",
    "TITLE": "Machine Learning",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "B2",
    "FACULTY": "SCOPE25"
  },
  {
    "CODE": "MCSE602P",
    "TITLE": "Machine Learning Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L45+L46",
    "FACULTY": "SCOPE25"
  },
  {
    "CODE": "MCSE699J",
    "TITLE": "Internship II/ Dissertation II",
    "TYPE": "PJT",
    "CREDITS": 12,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "MGT1062",
    "TITLE": "Big data computing for Business A",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "SIVA PRIYA M S"
  },
  {
    "CODE": "PAMCA502",
    "TITLE": "Java Programming",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "D JEYA MALA"
  },
  {
    "CODE": "PAMCA504",
    "TITLE": "Machine Learning",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "GRACELINE JASMINE"
  },
  {
    "CODE": "PAMCA506",
    "TITLE": "Full Stack Web Development",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "SANDHYA P"
  },
  {
    "CODE": "PAMCA601",
    "TITLE": "Cloud Computing",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A2+TA2+TAA2",
    "FACULTY": "POORNIMA S"
  },
  {
    "CODE": "PAMCA604",
    "TITLE": "Cybersecurity",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "SANKARI M"
  },
  {
    "CODE": "PAMCA605",
    "TITLE": "Deep Learning",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B2+TB2",
    "FACULTY": "SALEENA B"
  },
  {
    "CODE": "PAMCA606",
    "TITLE": "Generative AI",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "TAHIR MUJTABA"
  },
  {
    "CODE": "PMCA699J",
    "TITLE": "Internship II/ Dissertation II",
    "TYPE": "PJT",
    "CREDITS": 15,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "SWE1002",
    "TITLE": "Optimization Techniques",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "JANANI T"
  },
  {
    "CODE": "SWE1017",
    "TITLE": "Natural Language Processing",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "RAJARAJESWARI S"
  },
  {
    "CODE": "SWE1901",
    "TITLE": "Technical Answers for Real World",
    "TYPE": "ETH",
    "CREDITS": 1,
    "SLOT": "TCC1",
    "FACULTY": "M. PREMALATHA"
  },
  {
    "CODE": "SWE1904",
    "TITLE": "Capstone Project",
    "TYPE": "PJT",
    "CREDITS": 18,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "SWE2009",
    "TITLE": "Data Mining Techniques",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "NATHEZHTHA T"
  },
  {
    "CODE": "SWE2011",
    "TITLE": "Big Data Analytics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D2+TD2",
    "FACULTY": "SIVA PRIYA M S"
  },
  {
    "CODE": "SWE2017",
    "TITLE": "Parallel Programming",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "RENUKA DEVI"
  },
  {
    "CODE": "SWE2019",
    "TITLE": "Design Patterns",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "ILAKIYASELVAN N"
  },
  {
    "CODE": "SWE2024",
    "TITLE": "Software Reuse",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "RAMA PRABHA"
  },
  {
    "CODE": "SWE2025",
    "TITLE": "Personal Software Process",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "DHAVAKUMAR P"
  },
  {
    "CODE": "SWE2029",
    "TITLE": "Agile Development Process",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "GANESH N"
  },
  {
    "CODE": "SWE2030",
    "TITLE": "Reverse Engineering",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "GAYATHRI DEVI S"
  },
  {
    "CODE": "SWE4010",
    "TITLE": "Artificial Intelligence",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "C2+TC2",
    "FACULTY": "RABINDRA KUMAR SI"
  },
  {
    "CODE": "UCSC104L",
    "TITLE": "Data Structures and Algorithms",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "S. BHARATHI RAJA"
  },
  {
    "CODE": "UCSC104P",
    "TITLE": "Data Structures and Algorithms La",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L49+L50",
    "FACULTY": "S. BHARATHI RAJA"
  },
  {
    "CODE": "UCSC105L",
    "TITLE": "Object Oriented Programming",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "RUKMANI P"
  },
  {
    "CODE": "UCSC105P",
    "TITLE": "Object Oriented Programming Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L55+L56",
    "FACULTY": "RUKMANI P"
  },
  {
    "CODE": "UCSC202L",
    "TITLE": "Database Management Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "SANDHYA"
  },
  {
    "CODE": "UCSC202P",
    "TITLE": "Database Management Systems L",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L43+L44",
    "FACULTY": "SANDHYA"
  },
  {
    "CODE": "UCSC205L",
    "TITLE": "Web Development",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "MANIKANDAN P"
  },
  {
    "CODE": "UCSC205P",
    "TITLE": "Web Development Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L55+L56",
    "FACULTY": "MANIKANDAN P"
  },
  {
    "CODE": "UCSC225L",
    "TITLE": "Cyber Security",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "V. MUTHUMANIKAND"
  },
  {
    "CODE": "UCSC226L",
    "TITLE": "Animation and VFX",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "SATHIAN D"
  },
  {
    "CODE": "UCSC227E",
    "TITLE": "Python Programming",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "SCOPE6"
  },
  {
    "CODE": "UCSC231L",
    "TITLE": "Information Technology & Comm",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "LEKSHMI K"
  },
  {
    "CODE": "UCSC312L",
    "TITLE": "Machine Learning",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "ABDUL QUADIR MD"
  },
  {
    "CODE": "UCSC312P",
    "TITLE": "Machine Learning Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "ABDUL QUADIR MD"
  },
  {
    "CODE": "UCSC313L",
    "TITLE": "Image Processing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "MALATHI G"
  },
  {
    "CODE": "UCSC313P",
    "TITLE": "Image Processing Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "MALATHI G"
  },
  {
    "CODE": "UCSC317L",
    "TITLE": "Big Data Technologies",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "MONICA"
  },
  {
    "CODE": "UCSC317P",
    "TITLE": "Big Data Technologies Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "MONICA"
  },
  {
    "CODE": "UCSC318L",
    "TITLE": "Exploratory Data Analytics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "BHUVANESWARI"
  },
  {
    "CODE": "UCSC318P",
    "TITLE": "Exploratory Data Analytics Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L49+L50",
    "FACULTY": "BHUVANESWARI"
  },
  {
    "CODE": "UCSC398J",
    "TITLE": "Project",
    "TYPE": "PJT",
    "CREDITS": 4,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "BAEEE102",
    "TITLE": "Circuit Theory",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "MEENAKSHI J"
  },
  {
    "CODE": "BAEEE201",
    "TITLE": "Digital Electronics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F2+TF2",
    "FACULTY": "NITHYA VENKATESAN"
  },
  {
    "CODE": "BAEEE204",
    "TITLE": "Electromagnetic Field Theory",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "SENTHIL KUMAR R"
  },
  {
    "CODE": "BECS302L",
    "TITLE": "Digital Instrumentation",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "A1",
    "FACULTY": "KURUSEELAN S"
  },
  {
    "CODE": "BECS305E",
    "TITLE": "AI and ML for Electrical Systems",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "D1",
    "FACULTY": "SRI REVATHI B"
  },
  {
    "CODE": "BEEE102L",
    "TITLE": "Basic Electrical and Electronics En",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B2+TB2",
    "FACULTY": "ANANTHA KRISHNAN"
  },
  {
    "CODE": "BEEE102P",
    "TITLE": "Basic Electrical and Electronics En",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L11+L12",
    "FACULTY": "ANANTHA KRISHNAN"
  },
  {
    "CODE": "BEEE203L",
    "TITLE": "Circuit Theory",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "MEERA P S"
  },
  {
    "CODE": "BEEE208L",
    "TITLE": "Analog Electronics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "BALAMURUGAN P"
  },
  {
    "CODE": "BEEE208P",
    "TITLE": "Analog Electronics Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L55+L56",
    "FACULTY": "BALAMURUGAN P"
  },
  {
    "CODE": "BEEE211E",
    "TITLE": "VLSI Design",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "C2",
    "FACULTY": "VIJAYAPRIYA R"
  },
  {
    "CODE": "BEEE213L",
    "TITLE": "Embedded Systems Design",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "SUMATHI V"
  },
  {
    "CODE": "BEEE215L",
    "TITLE": "DC Machines and Transformers",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "G2",
    "FACULTY": "IYSWARYA ANNAPOO"
  },
  {
    "CODE": "BEEE215P",
    "TITLE": "DC Machines and Transformers La",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L1+L2",
    "FACULTY": "IYSWARYA ANNAPOO"
  },
  {
    "CODE": "BEEE301L",
    "TITLE": "Power Electronics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "M. PRABHAKAR"
  },
  {
    "CODE": "BEEE303L",
    "TITLE": "Control Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E2+TE2",
    "FACULTY": "MITHU SARKAR"
  },
  {
    "CODE": "BEEE303P",
    "TITLE": "Control Systems Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L5+L6",
    "FACULTY": "MITHU SARKAR"
  },
  {
    "CODE": "BEEE305L",
    "TITLE": "Measurements and Instrumentati",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "F1",
    "FACULTY": "PEER FATHIMA A"
  },
  {
    "CODE": "BEEE305P",
    "TITLE": "Measurements and Instrumentati",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "PEER FATHIMA A"
  },
  {
    "CODE": "BEEE306L",
    "TITLE": "Power Systems Analysis",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "SENTHIL KUMAR N"
  },
  {
    "CODE": "BEEE306P",
    "TITLE": "Power Systems Analysis Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L5+L6",
    "FACULTY": "SENTHIL KUMAR N"
  },
  {
    "CODE": "BEEE307L",
    "TITLE": "Electric Drives",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "NILANJAN TEWARI"
  },
  {
    "CODE": "BEEE307P",
    "TITLE": "Power Electronics and Drives Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "NILANJAN TEWARI"
  },
  {
    "CODE": "BEEE308L",
    "TITLE": "Communication Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D2+TD2",
    "FACULTY": "PRITAM"
  },
  {
    "CODE": "BEEE309L",
    "TITLE": "Microprocessors and Microcontro",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "PRITAM"
  },
  {
    "CODE": "BEEE309P",
    "TITLE": "Microprocessors and Microcontro",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L43+L44",
    "FACULTY": "PRITAM"
  },
  {
    "CODE": "BEEE312L",
    "TITLE": "AC Machines",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "D2",
    "FACULTY": "JYOTISMITA MISHRA"
  },
  {
    "CODE": "BEEE312P",
    "TITLE": "AC Machines Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L55+L56",
    "FACULTY": "JYOTISMITA MISHRA"
  },
  {
    "CODE": "BEEE314L",
    "TITLE": "Hybrid and Electric Vehicles",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "SREEDEVI V T"
  },
  {
    "CODE": "BEEE405L",
    "TITLE": "Renewable Energy Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "ARAVIND C K"
  },
  {
    "CODE": "BEEE409L",
    "TITLE": "Robotics and Control",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E2+TE2",
    "FACULTY": "SWETHA R KUMAR"
  },
  {
    "CODE": "BEEE410L",
    "TITLE": "Machine Learning",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "JAMUNA K"
  },
  {
    "CODE": "BEEE412L",
    "TITLE": "Sensors and Actuators",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "KIRUTHIKA"
  },
  {
    "CODE": "BEEE412P",
    "TITLE": "Sensors and Actuators Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L11+L12",
    "FACULTY": "MANIMARAN P"
  },
  {
    "CODE": "BEEE498J",
    "TITLE": "Project - II / Internship",
    "TYPE": "PJT",
    "CREDITS": 5,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "MAELM504",
    "TITLE": "Electric Motor Drives",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "INAYATHULLAAH ABD"
  },
  {
    "CODE": "MAELM601",
    "TITLE": "Artificial Intelligence for Electric M",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "HEMAMALINI"
  },
  {
    "CODE": "MAELM603",
    "TITLE": "Electric Energy Storage Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "BALAMURUGAN P"
  },
  {
    "CODE": "MAELM604",
    "TITLE": "Connected and Autonomous Vehi",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "NAWIN RA"
  },
  {
    "CODE": "MAELM607",
    "TITLE": "Automotive Functional Safety",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "LENIN N C"
  },
  {
    "CODE": "MELM699J",
    "TITLE": "Internship II/ Dissertation II",
    "TYPE": "PJT",
    "CREDITS": 12,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "BAECE102",
    "TITLE": "Digital Logic Design",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "SUBHASHINI N"
  },
  {
    "CODE": "BAECE103",
    "TITLE": "Network Theory",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "ANITH NELLERI"
  },
  {
    "CODE": "BAECE104",
    "TITLE": "Digital Logic and Computer Archit",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "PRATHIBA A"
  },
  {
    "CODE": "BAECE202",
    "TITLE": "Engineering Electromagnetics",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "USHA KIRAN KOMMU"
  },
  {
    "CODE": "BAEVD101",
    "TITLE": "Electronic Devices",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "TANMOY MAJUMDER"
  },
  {
    "CODE": "BAEVD102",
    "TITLE": "Digital System Design",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "GARGI RAINA"
  },
  {
    "CODE": "BAEVD204",
    "TITLE": "Signal Processing",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "MOHANAPRASAD K"
  },
  {
    "CODE": "BECE202L",
    "TITLE": "Signals and Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "AUGUSTA SOPHY BEU"
  },
  {
    "CODE": "BECE204L",
    "TITLE": "Microprocessors and Microcontro",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "BERLIN HENCY V"
  },
  {
    "CODE": "BECE204P",
    "TITLE": "Microprocessors and Microcontro",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L33+L34",
    "FACULTY": "BERLIN HENCY V"
  },
  {
    "CODE": "BECE206L",
    "TITLE": "Analog Circuits",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "RAJU PATEL"
  },
  {
    "CODE": "BECE206P",
    "TITLE": "Analog Circuits Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L43+L44",
    "FACULTY": "RAJU PATEL"
  },
  {
    "CODE": "BECE207L",
    "TITLE": "Random Processes",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "S SIVAKUMAR"
  },
  {
    "CODE": "BECE302L",
    "TITLE": "Control Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "SOUMYA RANJAN MA"
  },
  {
    "CODE": "BECE303L",
    "TITLE": "VLSI System Design",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "MANIKANDAN P"
  },
  {
    "CODE": "BECE303P",
    "TITLE": "VLSI System Design Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L55+L56",
    "FACULTY": "MANIKANDAN P"
  },
  {
    "CODE": "BECE304L",
    "TITLE": "Analog Communication Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "ILAVARASAN T"
  },
  {
    "CODE": "BECE304P",
    "TITLE": "Analog Communication Systems L",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "ILAVARASAN T"
  },
  {
    "CODE": "BECE309L",
    "TITLE": "Artificial Intelligence and Machine",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "PRAVEEN JARAUT"
  },
  {
    "CODE": "BECE310L",
    "TITLE": "Satellite Communications",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "AMIT KUMAR"
  },
  {
    "CODE": "BECE311L",
    "TITLE": "Radar Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "AMIT KUMAR"
  },
  {
    "CODE": "BECE317L",
    "TITLE": "Wireless and Mobile Communicat",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "RAMESH R"
  },
  {
    "CODE": "BECE317P",
    "TITLE": "Wireless and Mobile Communicat",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L23+L24",
    "FACULTY": "RAMESH R"
  },
  {
    "CODE": "BECE318L",
    "TITLE": "Optical Fiber Communications",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "SANGEETHA R G"
  },
  {
    "CODE": "BECE318P",
    "TITLE": "Optical Fiber Communications Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "SANGEETHA R G"
  },
  {
    "CODE": "BECE320E",
    "TITLE": "Embedded C Programming",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "SRIMATHI  R"
  },
  {
    "CODE": "BECE401L",
    "TITLE": "Computer Communications and N",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "JAYA VIGNESH T"
  },
  {
    "CODE": "BECE401P",
    "TITLE": "Computer Communications and N",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L11+L12",
    "FACULTY": "JAYA VIGNESH T"
  },
  {
    "CODE": "BECE411L",
    "TITLE": "Cryptography and Network Securi",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "VYDEKI D"
  },
  {
    "CODE": "BECE498J",
    "TITLE": "Project - II / Internship",
    "TYPE": "PJT",
    "CREDITS": 5,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "BECM301L",
    "TITLE": "Signal Processing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "UMAYAL C"
  },
  {
    "CODE": "BECM301P",
    "TITLE": "Signal Processing Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L29+L30",
    "FACULTY": "UMAYAL C"
  },
  {
    "CODE": "BECM302E",
    "TITLE": "Augmented and Virtual Reality",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "PRIYAADHARSHINI M"
  },
  {
    "CODE": "BECM498J",
    "TITLE": "Project - II / Internship",
    "TYPE": "PJT",
    "CREDITS": 5,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "BEVD204L",
    "TITLE": "Electronic Circuits",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "ANISHA NATARAJAN"
  },
  {
    "CODE": "BEVD204P",
    "TITLE": "Electronic Circuits Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "ANISHA NATARAJAN"
  },
  {
    "CODE": "BEVD205L",
    "TITLE": "Scripting Languages and Verificati",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "HARIHARAN"
  },
  {
    "CODE": "BEVD205P",
    "TITLE": "Scripting Languages and Verificati",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L23+L24",
    "FACULTY": "HARIHARAN"
  },
  {
    "CODE": "BEVD206L",
    "TITLE": "Semiconductor Device Modelling",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "E1",
    "FACULTY": "LAKSHMI B"
  },
  {
    "CODE": "BEVD206P",
    "TITLE": "Semiconductor Device Modelling",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L49+L50",
    "FACULTY": "LAKSHMI B"
  },
  {
    "CODE": "BEVD210L",
    "TITLE": "Quantum Technology for Electron",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "VELMATHI G"
  },
  {
    "CODE": "BEVD304L",
    "TITLE": "CMOS Analog IC Design",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "MD SADULLAH"
  },
  {
    "CODE": "BEVD304P",
    "TITLE": "CMOS Analog IC Design Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L5+L6",
    "FACULTY": "MD SADULLAH"
  },
  {
    "CODE": "BEVD305L",
    "TITLE": "VLSI Technology",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "RAVI SANKAR A"
  },
  {
    "CODE": "BEVD305P",
    "TITLE": "VLSI Technology Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L55+L56",
    "FACULTY": "RAVI SANKAR A"
  },
  {
    "CODE": "BEVD308L",
    "TITLE": "Low Power VLSI Design",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "ANITA ANGELINE"
  },
  {
    "CODE": "BEVD311L",
    "TITLE": "VLSI Digital Signal Processing Syste",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "REENA MONICA P"
  },
  {
    "CODE": "ECE3502",
    "TITLE": "IoT Domain Analyst",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "B1",
    "FACULTY": "KABILAN K"
  },
  {
    "CODE": "MAEDS504",
    "TITLE": "In-Vehicle Networking",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "HEMANTH C"
  },
  {
    "CODE": "MAEDS505",
    "TITLE": "Real Time Operating System",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "MANMOHAN SHARM"
  },
  {
    "CODE": "MAEDS602",
    "TITLE": "Advanced Digital Image Processin",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "ANNIS FATHIMA A"
  },
  {
    "CODE": "MAEDS606",
    "TITLE": "Intelligent IoT System Design and",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C1+TC1+TCC1",
    "FACULTY": "MANIMARAN P"
  },
  {
    "CODE": "MAVLD505",
    "TITLE": "ASIC Design",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "PRATHIBA A"
  },
  {
    "CODE": "MAVLD506",
    "TITLE": "VLSI Testing and Testability",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "C2+TC2",
    "FACULTY": "PAPANASAM E"
  },
  {
    "CODE": "MAVLD602",
    "TITLE": "Low Power IC Design",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "SASIPRIYA P"
  },
  {
    "CODE": "MAVLD603",
    "TITLE": "VLSI Verification Methodologies",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "SAKTHIVEL S M"
  },
  {
    "CODE": "MAVLD605",
    "TITLE": "System-on-Chip Design",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "ANANIAH DURAI S"
  },
  {
    "CODE": "MAVLD606",
    "TITLE": "VLSI Digital Signal Processing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E2+TE2",
    "FACULTY": "JEAN JENIFER NESAM"
  },
  {
    "CODE": "MAVLD608",
    "TITLE": "Advanced Computer Architecture",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "MOHAMMED AARIF K"
  },
  {
    "CODE": "BABMH101",
    "TITLE": "Electronic Systems",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "E MANIKANDAN"
  },
  {
    "CODE": "BAMEE101",
    "TITLE": "Manufacturing Processes",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "RAGHUKIRAN NADIM"
  },
  {
    "CODE": "BAMEE202",
    "TITLE": "Metallurgy and Mechanical Behav",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "SREEKANTH DONDAP"
  },
  {
    "CODE": "BAMEE205",
    "TITLE": "Engineering Innovation and Mode",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "A1",
    "FACULTY": "AYUB AHMED JANVEK"
  },
  {
    "CODE": "BMEE206P",
    "TITLE": "Machine Drawing Lab",
    "TYPE": "LO",
    "CREDITS": 2,
    "SLOT": "L39+L40+L49+L50",
    "FACULTY": "ANNAMALAI K"
  },
  {
    "CODE": "BMEE207L",
    "TITLE": "Kinematics and Dynamics of Mach",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "AWANI BHUSHAN"
  },
  {
    "CODE": "BMEE207P",
    "TITLE": "Kinematics and Dynamics of Mach",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "AWANI BHUSHAN"
  },
  {
    "CODE": "BMEE210L",
    "TITLE": "Mechatronics and Measurement S",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "DEIVANATHAN R"
  },
  {
    "CODE": "BMEE210P",
    "TITLE": "Mechatronics and Measurement S",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L29+L30",
    "FACULTY": "DEIVANATHAN R"
  },
  {
    "CODE": "BMEE212L",
    "TITLE": "Quality Control and Improvement",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B2+TB2",
    "FACULTY": "PONNUSAMY P"
  },
  {
    "CODE": "BMEE301L",
    "TITLE": "Design of Machine Elements",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C1+TC1+TCC1",
    "FACULTY": "CHRISTO MICHAEL T"
  },
  {
    "CODE": "BMEE302L",
    "TITLE": "Metal Casting and Welding",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "MANOJ KUMAR R"
  },
  {
    "CODE": "BMEE302P",
    "TITLE": "Metal Casting and Welding Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "MANOJ KUMAR R"
  },
  {
    "CODE": "BMEE303L",
    "TITLE": "Thermal Engineering Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "TAMIL SELVAN P"
  },
  {
    "CODE": "BMEE303P",
    "TITLE": "Thermal Engineering Systems Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L23+L24",
    "FACULTY": "TAMIL SELVAN P"
  },
  {
    "CODE": "BMEE306L",
    "TITLE": "Computer Aided Design and Finite",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "TAPAN KUMAR MAHA"
  },
  {
    "CODE": "BMEE306P",
    "TITLE": "Computer Aided Design and Finite",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "TAPAN KUMAR MAHA"
  },
  {
    "CODE": "BMEE308P",
    "TITLE": "Microcontrollers and Interfacing L",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L23+L24",
    "FACULTY": "N.GOBINATH"
  },
  {
    "CODE": "BMEE309L",
    "TITLE": "Lean Manufacturing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "JOHN RAJAN A"
  },
  {
    "CODE": "BMEE310L",
    "TITLE": "Supply Chain Management",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "AVADHESH KUMAR S"
  },
  {
    "CODE": "BMEE322L",
    "TITLE": "Engineering Failure Analysis",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "ANNAMALAI K"
  },
  {
    "CODE": "BMEE325L",
    "TITLE": "Internal Combustion Engines",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D2+TD2",
    "FACULTY": "FEROSKHAN M"
  },
  {
    "CODE": "BMEE327E",
    "TITLE": "Vehicle Dynamics",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "LENIN BABU M C"
  },
  {
    "CODE": "BMEE328E",
    "TITLE": "Hybrid and Electric Vehicles Techn",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "D1",
    "FACULTY": "VENUGOPAL T"
  },
  {
    "CODE": "BMEE330L",
    "TITLE": "Control Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "N.GOBINATH"
  },
  {
    "CODE": "BMEE402L",
    "TITLE": "Heat and Mass Transfer",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "MANAVALLA SREEKA"
  },
  {
    "CODE": "BMEE402P",
    "TITLE": "Heat and Mass Transfer Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "MANAVALLA SREEKA"
  },
  {
    "CODE": "BMEE404L",
    "TITLE": "Design of Transmission Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "KRISHANU GANGULY"
  },
  {
    "CODE": "BMEE407L",
    "TITLE": "Artificial Intelligence",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "DEVAPRAKASAM D"
  },
  {
    "CODE": "BMEE414L",
    "TITLE": "Vehicle Body and Aerodynamics E",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "VINAYAGAMURTHY G"
  },
  {
    "CODE": "BMEE418L",
    "TITLE": "Materials for Electric and Hybrid E",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "JEYANTHI S"
  },
  {
    "CODE": "BMEE498J",
    "TITLE": "Project - II / Internship",
    "TYPE": "PJT",
    "CREDITS": 5,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "BMHA203L",
    "TITLE": "Sensors and Instrumentation",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "ESWARAN M"
  },
  {
    "CODE": "BMHA203P",
    "TITLE": "Sensors and Instrumentation Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "ESWARAN M"
  },
  {
    "CODE": "BMHA204L",
    "TITLE": "Microprocessors and Microcontro",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "VIGNESWARAN T"
  },
  {
    "CODE": "BMHA204P",
    "TITLE": "Microprocessors and Microcontro",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "JAGANNATH M"
  },
  {
    "CODE": "BMHA302L",
    "TITLE": "Industrial Automation",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "ELANGO M"
  },
  {
    "CODE": "BMHA302P",
    "TITLE": "Industrial Automation Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L11+L12",
    "FACULTY": "ELANGO M"
  },
  {
    "CODE": "BMHA303L",
    "TITLE": "Industrial Robotics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D2+TD2",
    "FACULTY": "AROCKIA SELVAKUMA"
  },
  {
    "CODE": "BMHA303P",
    "TITLE": "Industrial Robotics Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L21+L22",
    "FACULTY": "AROCKIA SELVAKUMA"
  },
  {
    "CODE": "BMHA308L",
    "TITLE": "Machine Vision",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "SAKTHIVEL G"
  },
  {
    "CODE": "BMHA312L",
    "TITLE": "Control Systems",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "SARAVANAKUMAR D"
  },
  {
    "CODE": "BMHA313E",
    "TITLE": "Driver Assistance Systems and Aut",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "G2",
    "FACULTY": "G MURALIMOHAN"
  },
  {
    "CODE": "BMHA315L",
    "TITLE": "Augmented Reality and Haptics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "ESWARAN M"
  },
  {
    "CODE": "BMHA316L",
    "TITLE": "Machinery Condition Monitoring",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "SUGUMARAN"
  },
  {
    "CODE": "BMHA401L",
    "TITLE": "Computer Integrated Manufacturi",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "A1",
    "FACULTY": "GAJANAND GUPTA"
  },
  {
    "CODE": "BMHA401P",
    "TITLE": "Computer Integrated Manufacturi",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L11+L12",
    "FACULTY": "GAJANAND GUPTA"
  },
  {
    "CODE": "BMHA498J",
    "TITLE": "Project-II / Internship",
    "TYPE": "PJT",
    "CREDITS": 5,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "MACDM503",
    "TITLE": "Finite Element Methods and Appli",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "VENKATACHALAM G"
  },
  {
    "CODE": "MACDM504",
    "TITLE": "Integrated Manufacturing System",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "DR.PADMANABHAN R"
  },
  {
    "CODE": "MACDM506",
    "TITLE": "Artificial Intelligence for Design  a",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "MOHAN R"
  },
  {
    "CODE": "MACDM602",
    "TITLE": "Computational Fluid Dynamics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "SIVAKUMAR R"
  },
  {
    "CODE": "MACDM606",
    "TITLE": "Design Thinking and Product Deve",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "JANARDHAN REDDY"
  },
  {
    "CODE": "MAMHA505",
    "TITLE": "Industrial Automation",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "PRABHAKAR KUSHWA"
  },
  {
    "CODE": "MAMHA506",
    "TITLE": "Artificial Intelligence for Mechatro",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "MOGANA PRIYA C"
  },
  {
    "CODE": "MAMHA602",
    "TITLE": "Autotronics and Smart Mobility",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "JEGADEESHWARAN R"
  },
  {
    "CODE": "MAMHA608",
    "TITLE": "Smart Materials for Mechatronics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "PRADEEP N"
  },
  {
    "CODE": "MAMHA609",
    "TITLE": "Industrial Internet of Things",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "BONDA ATCHUTA GA"
  },
  {
    "CODE": "MCDM699J",
    "TITLE": "Internship II/ Dissertation II",
    "TYPE": "PJT",
    "CREDITS": 12,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "MMHA699J",
    "TITLE": "Internship II/ Dissertation II",
    "TYPE": "PJT",
    "CREDITS": 12,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "BAENG101",
    "TITLE": "Technical English Communication",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "MARZIYA BEGUM S"
  },
  {
    "CODE": "BAESP101",
    "TITLE": "Spanish Level I",
    "TYPE": "ETH",
    "CREDITS": 1,
    "SLOT": "TCC1",
    "FACULTY": "SAVARIAH XAVIER Y C"
  },
  {
    "CODE": "BAFRE101",
    "TITLE": "French Level I",
    "TYPE": "ETH",
    "CREDITS": 1,
    "SLOT": "TCC1",
    "FACULTY": "GOVINDARAJAN P"
  },
  {
    "CODE": "BAGER101",
    "TITLE": "German Level I",
    "TYPE": "ETH",
    "CREDITS": 1,
    "SLOT": "TCC1",
    "FACULTY": "JAMUNARANI M"
  },
  {
    "CODE": "BAHUM101",
    "TITLE": "India Studies",
    "TYPE": "OC",
    "CREDITS": 1,
    "SLOT": "NIL",
    "FACULTY": "TIWARI MAHALAXMI"
  },
  {
    "CODE": "BAJAP101",
    "TITLE": "Japanese Level I",
    "TYPE": "ETH",
    "CREDITS": 1,
    "SLOT": "TCC1",
    "FACULTY": "SUBHASHINI D"
  },
  {
    "CODE": "BESP101L",
    "TITLE": "Spanish I",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "B1",
    "FACULTY": "INL-SPANISH01"
  },
  {
    "CODE": "BFRE101L",
    "TITLE": "French I",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "B1",
    "FACULTY": "INL-FRENCH01"
  },
  {
    "CODE": "BGER101L",
    "TITLE": "German I",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "B1",
    "FACULTY": "INL-GERMAN01"
  },
  {
    "CODE": "BHUM101N",
    "TITLE": "Ethics and Values",
    "TYPE": "OC",
    "CREDITS": 2,
    "SLOT": "NIL",
    "FACULTY": "AJITH I"
  },
  {
    "CODE": "BHUM103L",
    "TITLE": "Micro Economics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "JAYARAJ R"
  },
  {
    "CODE": "BHUM104L",
    "TITLE": "Macro Economics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "SATHIS KUMAR G"
  },
  {
    "CODE": "BHUM106L",
    "TITLE": "PRINCIPLES OF SOCIOLOGY",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E2+TE2",
    "FACULTY": "SWATI"
  },
  {
    "CODE": "BHUM107L",
    "TITLE": "SUSTAINABILITY AND SOCIETY",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "SWATI"
  },
  {
    "CODE": "BHUM108L",
    "TITLE": "URBAN COMMUNITY DEVELOPME",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "VIJAYALAKSHMI V"
  },
  {
    "CODE": "BHUM109L",
    "TITLE": "SOCIAL WORK AND SUSTAINABILI",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "BINU SAHAYAM D"
  },
  {
    "CODE": "BHUM110L",
    "TITLE": "Cognitive Psychology",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "VIJAYABANU U"
  },
  {
    "CODE": "BHUM201L",
    "TITLE": "Mass Communication",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "VIJAYALAKSHMI V"
  },
  {
    "CODE": "BHUM202L",
    "TITLE": "Rural Development",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "BINU SAHAYAM D"
  },
  {
    "CODE": "BHUM203L",
    "TITLE": "Introduction to Psychology",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B2+TB2",
    "FACULTY": "MAHARISHI R"
  },
  {
    "CODE": "BHUM204L",
    "TITLE": "Industrial Psychology",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "MAHARISHI R"
  },
  {
    "CODE": "BHUM205L",
    "TITLE": "Development Economics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "SHALINA SUSAN MAT"
  },
  {
    "CODE": "BHUM206L",
    "TITLE": "International Economics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D2+TD2",
    "FACULTY": "RAJA RAJESWARI G"
  },
  {
    "CODE": "BHUM209L",
    "TITLE": "Game Theory",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "SHAHIN KHAN"
  },
  {
    "CODE": "BHUM211L",
    "TITLE": "Behavioral Economics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C2+TC2",
    "FACULTY": "MALLIKA SINHA"
  },
  {
    "CODE": "BHUM216L",
    "TITLE": "Indian Culture and Heritage",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E2+TE2",
    "FACULTY": "TARANG MAHAJAN"
  },
  {
    "CODE": "BHUM217L",
    "TITLE": "Contemporary India",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A2+TA2",
    "FACULTY": "ARUN KUMAR G"
  },
  {
    "CODE": "BHUM230L",
    "TITLE": "Health Humanities in Biotechnolo",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "MANALI KARMAKAR"
  },
  {
    "CODE": "BHUM232L",
    "TITLE": "Introduction to Sustainable Aging",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "MANALI KARMAKAR"
  },
  {
    "CODE": "BHUM233L",
    "TITLE": "Environmental Psychology",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "VIJAYABANU U"
  },
  {
    "CODE": "BHUM235E",
    "TITLE": "Psychology of Wellness",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "A2",
    "FACULTY": "MAHARISHI R"
  },
  {
    "CODE": "BJAP101L",
    "TITLE": "Japanese I",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "NEW FACULTY-2"
  },
  {
    "CODE": "BSSC101N",
    "TITLE": "Essence of Traditional Knowledge",
    "TYPE": "OC",
    "CREDITS": 2,
    "SLOT": "NIL",
    "FACULTY": "RAJASEKARAN V"
  },
  {
    "CODE": "BSSC102N",
    "TITLE": "Indian Constitution",
    "TYPE": "OC",
    "CREDITS": 2,
    "SLOT": "NIL",
    "FACULTY": "JAYA PRIYA S"
  },
  {
    "CODE": "ENG1012",
    "TITLE": "Communicative English",
    "TYPE": "LO",
    "CREDITS": 2,
    "SLOT": "L5+L6+L23+L24",
    "FACULTY": "PREETHA R"
  },
  {
    "CODE": "IHUM101N",
    "TITLE": "Ethics and Values",
    "TYPE": "OC",
    "CREDITS": 2,
    "SLOT": "NIL",
    "FACULTY": "AJITH I"
  },
  {
    "CODE": "IHUM105L",
    "TITLE": "Public Policy and Administration",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "ARUN KUMAR G"
  },
  {
    "CODE": "IHUM106L",
    "TITLE": "Principles of Sociology",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "ROOPESH O B"
  },
  {
    "CODE": "IHUM110L",
    "TITLE": "Cognitive Psychology",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A2+TA2",
    "FACULTY": "SUBASREE V"
  },
  {
    "CODE": "IHUM202L",
    "TITLE": "Rural Development",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A2+TA2",
    "FACULTY": "BINU SAHAYAM D"
  },
  {
    "CODE": "IHUM203L",
    "TITLE": "Introduction  to Psychology",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "SHEETAL NARAYAN M"
  },
  {
    "CODE": "IHUM211L",
    "TITLE": "Behavioral Economics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F2+TF2",
    "FACULTY": "MALLIKA SINHA"
  },
  {
    "CODE": "IHUM213L",
    "TITLE": "Corporate Social Responsibility",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A2+TA2",
    "FACULTY": "VITBS FACULTY3"
  },
  {
    "CODE": "IHUM214L",
    "TITLE": "Political  Science",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "JUSTIN JOSEPH"
  },
  {
    "CODE": "ISSC101N",
    "TITLE": "Essence of Traditional Knowledge",
    "TYPE": "OC",
    "CREDITS": 2,
    "SLOT": "NIL",
    "FACULTY": "VIJAYALAKSHMI V"
  },
  {
    "CODE": "ISSC102N",
    "TITLE": "Indian Constitution",
    "TYPE": "OC",
    "CREDITS": 2,
    "SLOT": "NIL",
    "FACULTY": "CHANDRIKA MEHTA"
  },
  {
    "CODE": "TAPS103L",
    "TITLE": "Cognitive Psychology",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "MAHARISHI R"
  },
  {
    "CODE": "TAPS103P",
    "TITLE": "Cognitive Psychology Practicum",
    "TYPE": "LO",
    "CREDITS": 2,
    "SLOT": "L11+L12+L23+L24",
    "FACULTY": "MAHARISHI R"
  },
  {
    "CODE": "TAPS104L",
    "TITLE": "Biological Psychology",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "SHEETAL NARAYAN M"
  },
  {
    "CODE": "TAPS104P",
    "TITLE": "Biological Psychology Practicum",
    "TYPE": "LO",
    "CREDITS": 2,
    "SLOT": "L15+L16+L29+L30",
    "FACULTY": "SHEETAL NARAYAN M"
  },
  {
    "CODE": "TAPS106L",
    "TITLE": "Work Place Psychology",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "MAYA RATHNASABAP"
  },
  {
    "CODE": "TAPS108E",
    "TITLE": "Emotional Intelligence",
    "TYPE": "ETH",
    "CREDITS": 1,
    "SLOT": "TBB1",
    "FACULTY": "SUBASREE V"
  },
  {
    "CODE": "TAPS203L",
    "TITLE": "Theories of Personality",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "SUBASREE V"
  },
  {
    "CODE": "TAPS203P",
    "TITLE": "Theories of Personality Practicum",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L23+L24",
    "FACULTY": "SUBASREE V"
  },
  {
    "CODE": "TAPS204L",
    "TITLE": "Child and Adolescent Psychology",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A2+TA2",
    "FACULTY": "VIJAYABANU U"
  },
  {
    "CODE": "TAPS204P",
    "TITLE": "Child and Adolescent Psychology P",
    "TYPE": "LO",
    "CREDITS": 2,
    "SLOT": "L5+L6+L21+L22",
    "FACULTY": "VIJAYABANU U"
  },
  {
    "CODE": "TAPS206E",
    "TITLE": "Positive Psychology",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "E1",
    "FACULTY": "MAHARISHI R"
  },
  {
    "CODE": "TAPS302L",
    "TITLE": "Abnormal Psychology",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "B1+TB1+TBB1",
    "FACULTY": "MAYA RATHNASABAP"
  },
  {
    "CODE": "TENG102L",
    "TITLE": "Technical English Communication",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "C1",
    "FACULTY": "RAJITHA K"
  },
  {
    "CODE": "TENG102P",
    "TITLE": "Technical English Communication",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "RAJITHA K"
  },
  {
    "CODE": "TGER101L",
    "TITLE": "German I",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "F1",
    "FACULTY": "INL-GERMAN02"
  },
  {
    "CODE": "UCCH102L",
    "TITLE": "Macro Economics",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "ALLI P"
  },
  {
    "CODE": "UCSC229E",
    "TITLE": "Structured Query Language (SQL)",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "SREEJA P S"
  },
  {
    "CODE": "UCSC232E",
    "TITLE": "Analytics with Excel",
    "TYPE": "ETH",
    "CREDITS": 1,
    "SLOT": "TF1",
    "FACULTY": "SHAHIN KHAN"
  },
  {
    "CODE": "UECH106L",
    "TITLE": "Microeconomics II",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "B1+TB1+TBB1",
    "FACULTY": "SHALINA SUSAN MAT"
  },
  {
    "CODE": "UECH107L",
    "TITLE": "Macroeconomics II",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "SATHIS KUMAR G"
  },
  {
    "CODE": "UECH109L",
    "TITLE": "Research Methodology",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E1+S11+TE1",
    "FACULTY": "ALLI P"
  },
  {
    "CODE": "UECH206E",
    "TITLE": "Applied Economic Research",
    "TYPE": "ETH",
    "CREDITS": 1,
    "SLOT": "TAA1",
    "FACULTY": "JAYARAJ R"
  },
  {
    "CODE": "UENG102L",
    "TITLE": "Technical English Communication",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "B1",
    "FACULTY": "SAMIK MALLA"
  },
  {
    "CODE": "UENG102P",
    "TITLE": "Technical English Communication",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L37+L38",
    "FACULTY": "SAMIK MALLA"
  },
  {
    "CODE": "UFRE102L",
    "TITLE": "French",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "THANI THAMIZHARAS"
  },
  {
    "CODE": "UGER101L",
    "TITLE": "German",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "INL-GERMAN01"
  },
  {
    "CODE": "UHUM106E",
    "TITLE": "Data Analysis and Visualization",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "C1",
    "FACULTY": "SCOPE9"
  },
  {
    "CODE": "UHUM108L",
    "TITLE": "Happiness and Well-being",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "JAISHREE KARTHIGA R"
  },
  {
    "CODE": "UHUM110L",
    "TITLE": "Ethics and Values",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "FRANCIS KULANDAI R"
  },
  {
    "CODE": "UTAM102L",
    "TITLE": "TAMIL",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "KANNADASAN V"
  },
  {
    "CODE": "BAFST102",
    "TITLE": "Raw Materials for Fashion",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "B1+TA2+TB1",
    "FACULTY": "SELVAKUMAR"
  },
  {
    "CODE": "BAFST201",
    "TITLE": "Fashion Illustration",
    "TYPE": "LO",
    "CREDITS": 4,
    "SLOT": "L1+L2+L23+L24+L31+L32+L",
    "FACULTY": "SAROJ K M"
  },
  {
    "CODE": "BAFST203",
    "TITLE": "Pattern Making and Garment Con",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "RATHINAMOORTHY R"
  },
  {
    "CODE": "BFST202L",
    "TITLE": "Yarn Manufacturing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "SELVAKUMAR"
  },
  {
    "CODE": "BFST202P",
    "TITLE": "Yarn Manufacturing Lab",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L23+L24",
    "FACULTY": "SELVAKUMAR"
  },
  {
    "CODE": "BFST203P",
    "TITLE": "Kid’s and Men’s Wear",
    "TYPE": "LO",
    "CREDITS": 4,
    "SLOT": "L1+L2+L29+L30+L49+L50+L",
    "FACULTY": "MAANVIZHI M"
  },
  {
    "CODE": "BFST207E",
    "TITLE": "Jewellery Designing and Manufact",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "N.GAYATHRI"
  },
  {
    "CODE": "BFST211L",
    "TITLE": "Fashion Merchandising and Marke",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A2+TA2",
    "FACULTY": "RATHINAMOORTHY R"
  },
  {
    "CODE": "BFST302P",
    "TITLE": "Digital Fashion and Apparel Desig",
    "TYPE": "LO",
    "CREDITS": 3,
    "SLOT": "L5+L6+L11+L12+L27+L28",
    "FACULTY": "RAJA BALASARASWAT"
  },
  {
    "CODE": "BFST305L",
    "TITLE": "Industrial Engineering in Apparel I",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E1+S11+TE1",
    "FACULTY": "MAANVIZHI M"
  },
  {
    "CODE": "BFST306L",
    "TITLE": "Quality Assurance in Apparel Indu",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "VASANTH KUMAR"
  },
  {
    "CODE": "BFST401L",
    "TITLE": "Textile Processing and Finishing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "RAJA BALASARASWAT"
  },
  {
    "CODE": "BFST401P",
    "TITLE": "Textile Processing and Finishing La",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L55+L56",
    "FACULTY": "RAJA BALASARASWAT"
  },
  {
    "CODE": "BFST402L",
    "TITLE": "Fabric Structure and Design Analy",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "PALANI RAJAN T"
  },
  {
    "CODE": "BFST402P",
    "TITLE": "Fabric Structure and Design Analy",
    "TYPE": "LO",
    "CREDITS": 1,
    "SLOT": "L31+L32",
    "FACULTY": "PALANI RAJAN T"
  },
  {
    "CODE": "BFST403P",
    "TITLE": "Computer Aided Garment Design",
    "TYPE": "LO",
    "CREDITS": 3,
    "SLOT": "L29+L30+L43+L44+L49+L50",
    "FACULTY": "S.VINUSOWNDARYA"
  },
  {
    "CODE": "BFST498J",
    "TITLE": "Project - II / Internship",
    "TYPE": "PJT",
    "CREDITS": 5,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "FSD1004",
    "TITLE": "Pattern making Fundamentals",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "C1",
    "FACULTY": "JESICA ROSHIMA"
  },
  {
    "CODE": "FSD1005",
    "TITLE": "Apparel Manufacturing",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "F2",
    "FACULTY": "VASANTH KUMAR"
  },
  {
    "CODE": "FSD2002",
    "TITLE": "Advanced Fashion Illustration",
    "TYPE": "LO",
    "CREDITS": 3,
    "SLOT": "L43+L44+L49+L50+L55+L56",
    "FACULTY": "SAROJ K M"
  },
  {
    "CODE": "FSD2003",
    "TITLE": "Childrens wear and Womens wear",
    "TYPE": "LO",
    "CREDITS": 4,
    "SLOT": "L23+L24+L31+L32+L43+L44",
    "FACULTY": "RAJESH KUMAR K"
  },
  {
    "CODE": "FSD2005",
    "TITLE": "Surface Ornamentation",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "BANUMATHY S"
  },
  {
    "CODE": "FSD2007",
    "TITLE": "Accessories Designing and Making",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "F1",
    "FACULTY": "S.VINUSOWNDARYA"
  },
  {
    "CODE": "FSD2009",
    "TITLE": "Fashion Concepts",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "BHUVANESHWARI"
  },
  {
    "CODE": "FSD2021",
    "TITLE": "Fashion forecasting and trend ana",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "RAJESH KUMAR K"
  },
  {
    "CODE": "FSD2023",
    "TITLE": "Fashion Photography and modelli",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "JESICA ROSHIMA"
  },
  {
    "CODE": "FSD2026",
    "TITLE": "Fashion Marketing and Managem",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "BANUMATHY S"
  },
  {
    "CODE": "FSD2033",
    "TITLE": "Sustainable and EcoFashion",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "APARNA GOVIND"
  },
  {
    "CODE": "FSD3005",
    "TITLE": "Textile and Apparel Testing",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "BHUVANESHWARI"
  },
  {
    "CODE": "MMA3099",
    "TITLE": "Capstone Project",
    "TYPE": "PJT",
    "CREDITS": 12,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "BHUM219L",
    "TITLE": "Principles of Accounting",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B2+TB2",
    "FACULTY": "VITBS FACULTY9"
  },
  {
    "CODE": "BHUM225L",
    "TITLE": "Personal Finance",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "SIVAKUMAR K"
  },
  {
    "CODE": "BMGT101L",
    "TITLE": "Principles of Management",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "RAJKUMAR MURUGE"
  },
  {
    "CODE": "BMGT102L",
    "TITLE": "Human Resource Management",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "MEKHALA"
  },
  {
    "CODE": "BMGT103L",
    "TITLE": "Organizational Behavior",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "CHITRA DEVI A"
  },
  {
    "CODE": "BMGT104L",
    "TITLE": "Marketing Management",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "UDAY KIRAN KOMMU"
  },
  {
    "CODE": "BMGT105L",
    "TITLE": "Consumer Behavior",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A2+TA2",
    "FACULTY": "ARSHIYA FATHIMA M"
  },
  {
    "CODE": "BMGT106L",
    "TITLE": "Digital Marketing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "SUDHEER MUHAMME"
  },
  {
    "CODE": "BMGT107L",
    "TITLE": "Business Analytics",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "VADIVEL S M"
  },
  {
    "CODE": "BMT1014",
    "TITLE": "Managing Personal Finance",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "B1",
    "FACULTY": "MANU JOSE"
  },
  {
    "CODE": "BMT1022",
    "TITLE": "Total Quality Management",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "A1",
    "FACULTY": "JOSEPH JEYA ANAND"
  },
  {
    "CODE": "BMT1035",
    "TITLE": "Strategic management",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "MEKHALA"
  },
  {
    "CODE": "BMT1040",
    "TITLE": "Workshop on Design Thinking",
    "TYPE": "PJT",
    "CREDITS": 1,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "BMT1041",
    "TITLE": "Workshop on Case development",
    "TYPE": "PJT",
    "CREDITS": 1,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "BMT1042",
    "TITLE": "Workshop on Phenomenology",
    "TYPE": "PJT",
    "CREDITS": 1,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "BMT2003",
    "TITLE": "Organizational Change and Develo",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A2+TA2",
    "FACULTY": "REKHAPRIYADHARSHI"
  },
  {
    "CODE": "BMT2006",
    "TITLE": "Services Marketing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C2+TC2",
    "FACULTY": "KISHORE THOMAS JO"
  },
  {
    "CODE": "BMT2020",
    "TITLE": "Financial Reporting",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "C1",
    "FACULTY": "VITBS FACULTY6"
  },
  {
    "CODE": "BMT2023",
    "TITLE": "Real World Business Solutions",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "ANURADHA A"
  },
  {
    "CODE": "BMT2024",
    "TITLE": "Negotiations and Decision Making",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "MEENAKSHI"
  },
  {
    "CODE": "BMT2025",
    "TITLE": "Computer Based Analysis",
    "TYPE": "LO",
    "CREDITS": 2,
    "SLOT": "L29+L30+L39+L40",
    "FACULTY": "SUDARSANAM S K"
  },
  {
    "CODE": "BMT3004",
    "TITLE": "Managing the Family Business",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "VIJAYAN L"
  },
  {
    "CODE": "BMT3007",
    "TITLE": "Strategic Business Leader",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "B2+TB2",
    "FACULTY": "BALAJI J"
  },
  {
    "CODE": "BMT3094",
    "TITLE": "Summer Internship",
    "TYPE": "PJT",
    "CREDITS": 2,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "BMT3095",
    "TITLE": "Summer Project",
    "TYPE": "PJT",
    "CREDITS": 6,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "IMGT106L",
    "TITLE": "Digital Marketing",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "VITBS FACULTY1"
  },
  {
    "CODE": "MGT1018",
    "TITLE": "Consumer Behaviour",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "NEW FACULTY - VITBS"
  },
  {
    "CODE": "MGT1058",
    "TITLE": "Business Analytics with Spread Sh",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "B1",
    "FACULTY": "ANBUMATHI R"
  },
  {
    "CODE": "MGT1063",
    "TITLE": "Financial management",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "RAVICHANDRAN K K"
  },
  {
    "CODE": "MGT3003",
    "TITLE": "Customer Relationship Managem",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "SUDHEER MUHAMME"
  },
  {
    "CODE": "MGT3004",
    "TITLE": "Digital and Social Media Marketin",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "THANGARAJA ARUMU"
  },
  {
    "CODE": "MGT3005",
    "TITLE": "Marketing Analytics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D1+TD1",
    "FACULTY": "PADMAVATHY C"
  },
  {
    "CODE": "MGT3006",
    "TITLE": "Neuro Marketing",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "ARSHIYA FATHIMA M"
  },
  {
    "CODE": "MGT3008",
    "TITLE": "HR Analytics",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "B2",
    "FACULTY": "SUMATHI G N"
  },
  {
    "CODE": "MGT3009",
    "TITLE": "Behavioural Analytics",
    "TYPE": "ETH",
    "CREDITS": 2,
    "SLOT": "B1",
    "FACULTY": "V RACHEL EVELYN"
  },
  {
    "CODE": "MGT3013",
    "TITLE": "Risk and Fraud Analytics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "VITBS FACULTY6"
  },
  {
    "CODE": "MGT3014",
    "TITLE": "Operations Analytics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "C1+TC1",
    "FACULTY": "BALAJI J"
  },
  {
    "CODE": "MGT3015",
    "TITLE": "Supply Chain Analytics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "JOSEPH JEYA ANAND"
  },
  {
    "CODE": "MGT4003",
    "TITLE": "Lean Six Sigma Principles",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "E2+TE2",
    "FACULTY": "STEPHAN THANGAIAH"
  },
  {
    "CODE": "UBBH106L",
    "TITLE": "Management Accounting",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E1+TB1+TE1",
    "FACULTY": "SHARON SOPHIA"
  },
  {
    "CODE": "UBBH107L",
    "TITLE": "Macro Economics",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "ALLI P"
  },
  {
    "CODE": "UBBH108L",
    "TITLE": "Management and Organizations",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "F1+S11+TF1",
    "FACULTY": "BHAVANI J"
  },
  {
    "CODE": "UBBH152L",
    "TITLE": "Quantitative Reasoning",
    "TYPE": "SS",
    "CREDITS": 1,
    "SLOT": "TDD1",
    "FACULTY": "SIXPHRASE(APT)"
  },
  {
    "CODE": "UBBH154L",
    "TITLE": "Trading Journey",
    "TYPE": "TH",
    "CREDITS": 1,
    "SLOT": "TA2",
    "FACULTY": "VITBS FACULTY6"
  },
  {
    "CODE": "UBBH206E",
    "TITLE": "Business Analytics & AI",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "A1+TA1",
    "FACULTY": "PADMAVATHY C"
  },
  {
    "CODE": "UBBH208L",
    "TITLE": "Managing People & Teams at Wor",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A2+B2",
    "FACULTY": "NISHA R"
  },
  {
    "CODE": "UBBH210L",
    "TITLE": "Venture Capital and Private Equity",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "BUVANESH"
  },
  {
    "CODE": "UBBH213L",
    "TITLE": "Brand Strategies",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "G1+S15+TG1",
    "FACULTY": "SAJU B"
  },
  {
    "CODE": "UBBH214L",
    "TITLE": "Digital and Social Media Marketin",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C2+D2",
    "FACULTY": "SUDHEER MUHAMME"
  },
  {
    "CODE": "UBBH217E",
    "TITLE": "Advanced Statistics for Data Scien",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B1+TB1",
    "FACULTY": "REEVES WESLEY J"
  },
  {
    "CODE": "UBBH218E",
    "TITLE": "Programming in Python",
    "TYPE": "ELA",
    "CREDITS": 1,
    "SLOT": "L25+L26",
    "FACULTY": "ANBUMATHI R"
  },
  {
    "CODE": "UCCA258L",
    "TITLE": "Insurance Management",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E1+S11+TE1",
    "FACULTY": "MANU JOSE"
  },
  {
    "CODE": "UCCA260L",
    "TITLE": "Forensics Accounting and Fraud In",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "B1+TB1+TBB1",
    "FACULTY": "VITBS FACULTY5"
  },
  {
    "CODE": "UCCA261L",
    "TITLE": "Investment Analysis and Portfolio",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "SHARON SOPHIA"
  },
  {
    "CODE": "UCCA264L",
    "TITLE": "Corporate Financial Reporting",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D1+TD1+TDD1",
    "FACULTY": "SHAIK SALEEM"
  },
  {
    "CODE": "UCCA265L",
    "TITLE": "Financial Technology",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A2+B2",
    "FACULTY": "MEENAKSHI"
  },
  {
    "CODE": "UCCA266L",
    "TITLE": "E-Commerce",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C2+D2",
    "FACULTY": "MEENAKSHI"
  },
  {
    "CODE": "UCCA359L",
    "TITLE": "Labour laws and Industrial Relatio",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "F1+S15+TF1",
    "FACULTY": "CHITRA DEVI A"
  },
  {
    "CODE": "UCCA360L",
    "TITLE": "Emotional Intelligence",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C2+TC2+TCC2",
    "FACULTY": "NISHA R"
  },
  {
    "CODE": "UCCA362L",
    "TITLE": "Operations Research Techniques",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C1+TC1+TCC1",
    "FACULTY": "STEPHAN THANGAIAH"
  },
  {
    "CODE": "UCCA364L",
    "TITLE": "Business Analytics",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E2+F2",
    "FACULTY": "ANBUMATHI R"
  },
  {
    "CODE": "UCCA498J",
    "TITLE": "Project",
    "TYPE": "PJT",
    "CREDITS": 6,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "UCCH107L",
    "TITLE": "Corporate Accounting",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C2+D2",
    "FACULTY": "SIVAKUMAR K"
  },
  {
    "CODE": "UCCH108L",
    "TITLE": "Banking Theory and Practices",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "MANU JOSE"
  },
  {
    "CODE": "UCCH202L",
    "TITLE": "Cost Accounting",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "G1+S11+TG1",
    "FACULTY": "WASI YAZDANI"
  },
  {
    "CODE": "UCCH205L",
    "TITLE": "Marketing Management",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E1+S11+TE1",
    "FACULTY": "UDAY KIRAN KOMMU"
  },
  {
    "CODE": "UCCH206L",
    "TITLE": "Investment Analysis and Portfolio",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "B1+TB1+TBB1",
    "FACULTY": "CHITRA DEVI N"
  },
  {
    "CODE": "UCCH207L",
    "TITLE": "Financial Markets and Institutions",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C2+D2",
    "FACULTY": "VITBS FACULTY7"
  },
  {
    "CODE": "UCCH208L",
    "TITLE": "Financial Statement Analysis and",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A1+TA1+TAA1",
    "FACULTY": "VITBS FACULTY6"
  },
  {
    "CODE": "UCCH209L",
    "TITLE": "Financial Forensics and Investigati",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A2+B2",
    "FACULTY": "VITBS FACULTY5"
  },
  {
    "CODE": "UCCH214L",
    "TITLE": "Auditing and Corporate Governan",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C1+TC1+TCC1",
    "FACULTY": "VITBS FACULTY4"
  },
  {
    "CODE": "UCCH307E",
    "TITLE": "Financial Econometrics",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "F1+TF1",
    "FACULTY": "SHAIK SALEEM"
  },
  {
    "CODE": "UCCH310L",
    "TITLE": "Sustainability Accounting and Inte",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "G1+S15+TG1",
    "FACULTY": "VITBS FACULTY5"
  },
  {
    "CODE": "UCSC214E",
    "TITLE": "Basic Data Visualization",
    "TYPE": "ETH",
    "CREDITS": 1,
    "SLOT": "TA2",
    "FACULTY": "SUMATHI G N"
  },
  {
    "CODE": "UECH211L",
    "TITLE": "Security Analysis and Portfolio Ma",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "B1+TB1+TBB1",
    "FACULTY": "BUVANESH"
  },
  {
    "CODE": "UECH212E",
    "TITLE": "Financial Modeling",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "G1+TG1",
    "FACULTY": "VITBS FACULTY9"
  },
  {
    "CODE": "UHUM102L",
    "TITLE": "Company Secretarial Practice",
    "TYPE": "TH",
    "CREDITS": 3,
    "SLOT": "E1+TE1",
    "FACULTY": "VITBS FACULTY9"
  },
  {
    "CODE": "ULAS108L",
    "TITLE": "Gender Studies",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E2+F2",
    "FACULTY": "DEVI MEENAKSHI"
  },
  {
    "CODE": "USSC101L",
    "TITLE": "Indian Constitution",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "G1",
    "FACULTY": "SELVI"
  },
  {
    "CODE": "TESP101L",
    "TITLE": "Spanish I",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "TCCC+TDDD",
    "FACULTY": "INL-SPANISH02"
  },
  {
    "CODE": "TFRE101L",
    "TITLE": "French I",
    "TYPE": "TH",
    "CREDITS": 2,
    "SLOT": "TCCC+TDDD",
    "FACULTY": "THANI THAMIZHARAS"
  },
  {
    "CODE": "LAW1112",
    "TITLE": "Dissertation",
    "TYPE": "PJT",
    "CREDITS": 10,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "LAW1115",
    "TITLE": "Moot Court and Internship",
    "TYPE": "PJT",
    "CREDITS": 4,
    "SLOT": "NIL",
    "FACULTY": "ACAD FACULTY"
  },
  {
    "CODE": "LAW4010",
    "TITLE": "Citizenship & Emigration Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "F+TF+TFF",
    "FACULTY": "KUMAR MUKUL CHO"
  },
  {
    "CODE": "LAW4019",
    "TITLE": "Law of the Sea",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A+TA+TAA",
    "FACULTY": "KAVI SHANKAR"
  },
  {
    "CODE": "LAW4044",
    "TITLE": "Insolvency & Bankruptcy",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A+TA+TAA",
    "FACULTY": "JAYENDRA KASTURE"
  },
  {
    "CODE": "LAW4052",
    "TITLE": "Equity and Trust",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "F+TF+TFF",
    "FACULTY": "LALITH KUMAR J"
  },
  {
    "CODE": "LAW4060",
    "TITLE": "Penology and Victimology",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A+TA+TAA",
    "FACULTY": "TANMAY ROY"
  },
  {
    "CODE": "LAW4062",
    "TITLE": "Women and Criminal Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "F+TF",
    "FACULTY": "AMBIKA R NAIR"
  },
  {
    "CODE": "LAW4066",
    "TITLE": "Financial and Systemic Fraud",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A+TA+TAA",
    "FACULTY": "K NIDHI MOHAN"
  },
  {
    "CODE": "LAW4070",
    "TITLE": "INTERNATIONAL TAXATION LAW",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "F+TF+TFF",
    "FACULTY": "SANTHOSH  V"
  },
  {
    "CODE": "TLAW104L",
    "TITLE": "Environmental Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A+TA+TAA",
    "FACULTY": "SHINSA P MATHEW"
  },
  {
    "CODE": "TLAW162L",
    "TITLE": "Principles of Modern Government",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E+TE+TEE",
    "FACULTY": "NEW FACULTY-2"
  },
  {
    "CODE": "TLAW163L",
    "TITLE": "Micro Economics",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "F+TF+TFF",
    "FACULTY": "ARUNA R"
  },
  {
    "CODE": "TLAW182L",
    "TITLE": "English for Lawyers",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A+TA+TAA",
    "FACULTY": "LUKE GERARD CHRIST"
  },
  {
    "CODE": "TLAW184L",
    "TITLE": "Financial Management",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C+TC+TCC",
    "FACULTY": "SHAIK SALEEM"
  },
  {
    "CODE": "TLAW188L",
    "TITLE": "Financial Accounting",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "F+TF+TFF",
    "FACULTY": "WASI YAZDANI"
  },
  {
    "CODE": "TLAW189L",
    "TITLE": "Managerial Economics",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E+TE+TEE",
    "FACULTY": "ARUNA R"
  },
  {
    "CODE": "TLAW201L",
    "TITLE": "Special Contracts",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C+TC+TCC",
    "FACULTY": "ESAKKI AMMAL K"
  },
  {
    "CODE": "TLAW202L",
    "TITLE": "Law of Crimes- I",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "B+TB",
    "FACULTY": "GANESAN K"
  },
  {
    "CODE": "TLAW206L",
    "TITLE": "Labour and Industrial Law I",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D+TD+TDD",
    "FACULTY": "VIJAYENDRA KUMAR"
  },
  {
    "CODE": "TLAW207L",
    "TITLE": "Jurisprudence",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D+TD+TDD",
    "FACULTY": "SHANTHI"
  },
  {
    "CODE": "TLAW261L",
    "TITLE": "Political Thought: Indian and West",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "B+TB+TBB",
    "FACULTY": "TARANG MAHAJAN"
  },
  {
    "CODE": "TLAW262L",
    "TITLE": "Public Finance Theory and Practic",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "B+TB+TBB",
    "FACULTY": "ARUNA R"
  },
  {
    "CODE": "TLAW263L",
    "TITLE": "Law and Social Transformation",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C+TC+TCC",
    "FACULTY": "NEW FACULTY LAW1"
  },
  {
    "CODE": "TLAW281L",
    "TITLE": "Operational Research",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E+TE+TEE",
    "FACULTY": "WAQAS NIAZI"
  },
  {
    "CODE": "TLAW284L",
    "TITLE": "Human Resource Management",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "B+TB+TBB",
    "FACULTY": "NISHA R"
  },
  {
    "CODE": "TLAW303L",
    "TITLE": "Family Law-II",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A+TA+TAA",
    "FACULTY": "KUMAR MUKUL CHO"
  },
  {
    "CODE": "TLAW305L",
    "TITLE": "Public International Law",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D+TD",
    "FACULTY": "PREMA E"
  },
  {
    "CODE": "TLAW306L",
    "TITLE": "Labour and Industrial Law II",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "F+TF+TFF",
    "FACULTY": "SHINSA P MATHEW"
  },
  {
    "CODE": "TLAW307L",
    "TITLE": "Property Law",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B+TB",
    "FACULTY": "VIJAYENDRA KUMAR"
  },
  {
    "CODE": "TLAW310L",
    "TITLE": "Professional Ethics and Profession",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "F+TF+TFF",
    "FACULTY": "NEW FACULTY LAW1"
  },
  {
    "CODE": "TLAW311L",
    "TITLE": "Intellectual Property Law",
    "TYPE": "ETH",
    "CREDITS": 4,
    "SLOT": "C+TC+TCC",
    "FACULTY": "RAJAVENKATESAN P R"
  },
  {
    "CODE": "TLAW404L",
    "TITLE": "Comparative Constitutional Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E+TE+TEE",
    "FACULTY": "K KAMBAN SOCRETES"
  },
  {
    "CODE": "TLAW407L",
    "TITLE": "Right to Information",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C+TC+TCC",
    "FACULTY": "NEWFACULTY"
  },
  {
    "CODE": "TLAW409L",
    "TITLE": "Media and Law",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B+TB",
    "FACULTY": "ARJUN SHAJI"
  },
  {
    "CODE": "TLAW412L",
    "TITLE": "Introduction to International Hum",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E+TE+TEE",
    "FACULTY": "S. ANANDHA KRISHNA"
  },
  {
    "CODE": "TLAW418L",
    "TITLE": "International Refugee Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C+TC+TCC",
    "FACULTY": "SEZOLU NYEKHA"
  },
  {
    "CODE": "TLAW420L",
    "TITLE": "Patenting of Life Forms",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E+TE+TEE",
    "FACULTY": "VIJAYA BHARATHI"
  },
  {
    "CODE": "TLAW423L",
    "TITLE": "IPR in Pharma Industry",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "B+TB+TBB",
    "FACULTY": "JISHNU J R"
  },
  {
    "CODE": "TLAW424L",
    "TITLE": "Banking Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E+TE+TEE",
    "FACULTY": "K NIDHI MOHAN"
  },
  {
    "CODE": "TLAW427L",
    "TITLE": "Insurance Law",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B+TB",
    "FACULTY": "NAVYA BENNY"
  },
  {
    "CODE": "TLAW430L",
    "TITLE": "Corporate Governance",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "B+TB",
    "FACULTY": "KESAVAMOORTHY R"
  },
  {
    "CODE": "TLAW431L",
    "TITLE": "Competition Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C+TC+TCC",
    "FACULTY": "DULUNG SENGUPTA"
  },
  {
    "CODE": "TLAW444L",
    "TITLE": "Technology and Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "C+TC+TCC",
    "FACULTY": "ADITYA"
  },
  {
    "CODE": "TLAW448L",
    "TITLE": "Indian Legal System",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "F+TF+TFF",
    "FACULTY": "SHANTHI"
  },
  {
    "CODE": "TLAW452L",
    "TITLE": "Election Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D+TD+TDD",
    "FACULTY": "NEW FACULTY LAW2"
  },
  {
    "CODE": "TLAW501L",
    "TITLE": "Sports Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E+TE+TEE",
    "FACULTY": "NIKHIL G"
  },
  {
    "CODE": "TLAW502L",
    "TITLE": "Women and Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E+TE+TEE",
    "FACULTY": "SWARLATA PANDEY"
  },
  {
    "CODE": "TLAW503L",
    "TITLE": "Gender, Caste and the Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A+TA+TAA",
    "FACULTY": "ASWATHY"
  },
  {
    "CODE": "TLAW504L",
    "TITLE": "Rural Governance",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A+TA+TAA",
    "FACULTY": "SAJI SIVAN S"
  },
  {
    "CODE": "TLAW505L",
    "TITLE": "Criminal Justice and Human Rights",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "A+TA",
    "FACULTY": "P C ABIRAMI"
  },
  {
    "CODE": "TLAW509L",
    "TITLE": "Scientific Evidence in Criminal Tria",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "A+TA+TAA",
    "FACULTY": "GANESAN K"
  },
  {
    "CODE": "TLAW517L",
    "TITLE": "Constitutional Interpretation and",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E+TE+TEE",
    "FACULTY": "NAVYA BENNY"
  },
  {
    "CODE": "TLAW519L",
    "TITLE": "Capital Markets and Securities La",
    "TYPE": "ETH",
    "CREDITS": 3,
    "SLOT": "D+TD",
    "FACULTY": "DULUNG SENGUPTA"
  },
  {
    "CODE": "TLAW520L",
    "TITLE": "International Commercial Arbitrat",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D+TD+TDD",
    "FACULTY": "P C ABIRAMI"
  },
  {
    "CODE": "TLAW522L",
    "TITLE": "Patent Drafting and Specification",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "D+TD+TDD",
    "FACULTY": "CHANDRIKA MEHTA"
  },
  {
    "CODE": "TLAW523L",
    "TITLE": "Cyber Law",
    "TYPE": "TH",
    "CREDITS": 4,
    "SLOT": "E+TE+TEE",
    "FACULTY": "BIJOY SHARMA"
  }
] as const;

export default data;
