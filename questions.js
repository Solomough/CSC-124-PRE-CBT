const allQuestions = [
    // --- Chapter 1: Introduction (40 Questions) ---
    {
        topic: "Introduction",
        question: "If Arithmetic is the science that studies numbers and operations with numbers, what is the science that studies propositions and operations with propositions?",
        options: [
            "Philosophy",
            "Logic",
            "Set Theory",
            "Descriptive Complexity"
        ],
        answer: "Logic",
        [cite_start]explanation: "Logic is the science that studies propositions and operations with propositions[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "Since which decade has logic experienced its greatest development due to applications in Computer Science?",
        options: [
            "1920s",
            "1950s",
            "1980s",
            "2000s"
        ],
        answer: "1950s",
        [cite_start]explanation: "Logic has experienced its greatest development starting with the 1950s, because of its numerous applications in Computer Science[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "Which of the following is an example of an intimate correspondence of Propositional Logic with the internal organization of computers?",
        options: [
            "Modeling electronic circuits as formulae.",
            "The Zermelo-Fraenkel set theory (ZFC).",
            "Its canonical NP-complete problem status.",
            "Its applications in relational databases."
        ],
        answer: "Modeling electronic circuits as formulae.",
        [cite_start]explanation: "Propositional logic corresponds intimately to the internal organization of computers at an abstract level, in the sense that electronic circuits can be modeled as formulae in propositional logic[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "What is the canonical NP-complete problem mentioned in the context of Propositional Logic applications?",
        options: [
            "The Halting Problem",
            "The Satisfiability Problem (SAT)",
            "The Traveling Salesman Problem (TSP)",
            "The Compactness Theorem"
        ],
        answer: "The Satisfiability Problem (SAT)",
        [cite_start]explanation: "The satisfiability problem for propositional logic is especially important both from a theoretical viewpoint (being the canonical NP-complete problem) and from a practical viewpoint[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "First-order logic is primarily described as an extension of which other logic in the notes?",
        options: [
            "Modal logic",
            "Propositional logic",
            "Temporal logic",
            "Higher-order logic"
        ],
        answer: "Propositional logic",
        [cite_start]explanation: "First-order logic is an extension of propositional logic[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "Which first-order logic theory is stated as the basis for the math studied in high school?",
        options: [
            "Zermelo-Fraenkel set theory with the Axiom of Choice (ZFC)",
            "Peano Axioms (PA)",
            "Theory of Types",
            "Relational Calculus"
        ],
        answer: "Zermelo-Fraenkel set theory with the Axiom of Choice (ZFC)",
        [cite_start]explanation: "All of the math that you have studied in highschool is based on a so-called first-order logic theory called ZFC (the Zermelo-Fraenkel set theory, together with the Axiom of Choice)[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "In which fields of Computer Science do applications of first-order logic appear?",
        options: [
            "Computational geometry, machine learning, and cryptography.",
            "Descriptive complexity, relational databases, software and hardware verification.",
            "Programming languages, type theory, and formal grammars.",
            "Circuit design, combinatorics, and operating systems."
        ],
        answer: "Descriptive complexity, relational databases, software and hardware verification.",
        [cite_start]explanation: "In Computer Science, applications of first-order logic appear in the fields of descriptive complexity, relational databases, software and hardware verification, and others[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "Which two main types of logic will be studied in the course?",
        options: [
            "Higher-order logic and Temporal logic.",
            "Fuzzy logic and Intuitionistic logic.",
            "Propositional logic and First-order logic.",
            "Computational logic and Philosophical logic."
        ],
        answer: "Propositional logic and First-order logic.",
        [cite_start]explanation: "In this course, we will study at an introductory level propositional logic and first-order logic[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "What is the key takeaway from studying propositional logic, even though it is 'extremely simple'?",
        options: [
            "It is the only sensible logic in Computer Science.",
            "It directly proves the P=NP problem.",
            "The concepts and methods generalize to other more complex logics.",
            "It provides a complete model of human reasoning."
        ],
        answer: "The concepts and methods generalize to other more complex logics.",
        [cite_start]explanation: "Propositional logic is extremely simple, but the concepts that we study, the methods that we learn and the issues that we face in propositional logic generalize to other more complex logics[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "The applications of the Satisfiability Problem (SAT) include:",
        options: [
            "Program verification, circuit verification, combinatorial optimization.",
            "Financial modeling and stock prediction.",
            "Natural language processing and machine translation.",
            "Ethical reasoning in artificial intelligence."
        ],
        answer: "Program verification, circuit verification, combinatorial optimization.",
        [cite_start]explanation: "The satisfiability problem for propositional logic has applications in program verification, circuit verification, combinatorial optimization, and others[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "True or False: The theory of Propositional Logic includes the Compactness Theorem and Craig's Interpolation Theorem.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        [cite_start]explanation: "Propositional logic has a rich and mathematically interesting theory (examples: compactness theorem, Craig's interpolation theorem)[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "What is the primary difference in focus between Logic and Arithmetic, as stated in the notes?",
        options: [
            "Logic focuses on proofs; Arithmetic focuses on numbers.",
            "Logic focuses on propositions; Arithmetic focuses on numbers and operations.",
            "Logic focuses on computers; Arithmetic focuses on pure math.",
            "Logic focuses on sets; Arithmetic focuses on functions."
        ],
        answer: "Logic focuses on propositions; Arithmetic focuses on numbers and operations.",
        [cite_start]explanation: "If Arithmetic is the science that studies numbers and operations with numbers, then Logic is the science that studies propositions and operations with propositions[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "What is the core philosophical basis that Logic shares with other fields, according to the text?",
        options: [
            "It is the foundation of all mathematics.",
            "It sits at the intersection of philosophy, mathematics and computer science.",
            "It is the study of abstract concepts and theories.",
            "It deals with the fundamentals of type theory."
        ],
        answer: "It sits at the intersection of philosophy, mathematics and computer science.",
        [cite_start]explanation: "Logic sits at the intersection of philosophy, mathematics and computer science[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "Higher-order logics are mentioned to have applications in which area?",
        options: [
            "Relational databases.",
            "Fundamentals of mathematics, programming languages, type theory.",
            "Software and hardware verification.",
            "Combinatorial optimization."
        ],
        answer: "Fundamentals of mathematics, programming languages, type theory.",
        [cite_start]explanation: "Additionally, several other logics (for example, higher-order logics) have applications in programming languages, the fundamentals of mathematics, type theory, etc[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "The fact that the disjunction of two true sentences is true is an example of a concept in:",
        options: [
            "Arithmetic.",
            "Logic.",
            "Algebra.",
            "Geometry."
        ],
        answer: "Logic.",
        [cite_start]explanation: "For example, if in Arithmetic we notice that the sum of two even numbers is an even number, then in Logic we could notice that the disjunction of two true sentences is also true[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "What concept in propositional logic is highly relevant to computer science due to its NP-completeness?",
        options: [
            "Tautology",
            "Contingency",
            "Satisfiability",
            "Validity"
        ],
        answer: "Satisfiability",
        [cite_start]explanation: "The satisfiability problem for propositional logic has many applications in computer science[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "Propositional logic is primarily concerned with propositions connected by which logical connectives?",
        options: [
            "Existential quantifiers and universal quantifiers.",
            "And, or, and not.",
            "If-then and only if.",
            "All of the above."
        ],
        answer: "And, or, and not.",
        [cite_start]explanation: "Propositional logic is the logic of propositions, connected among themselves by logical connectives such as or, and and not[cite: 9].",
    },
    {
        topic: "Introduction",
        question: "What concept studied in propositional logic is essential for its use in modeling electronic circuits?",
        options: [
            "First-order quantification.",
            "The concept of truth values.",
            "The use of ZFC axioms.",
            "The concept of type theory."
        ],
        answer: "The concept of truth values.",
        explanation: "The connection to electronic circuits (logic gates) is fundamentally based on the concept of truth values (True/False or 1/0) of propositions (which is covered in Chapter 5 and hinted at in Chapter 1).",
    },
    {
        topic: "Introduction",
        question: "True or False: The concepts and issues faced in propositional logic do NOT generalize to more complex logics.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        [cite_start]explanation: "The concepts that we study, the methods that we learn and the issues that we face in propositional logic generalize to other more complex logics[cite: 8].",
    },
    {
        topic: "Introduction",
        question: "What is the main advantage of developing a **formal** language for logic, as opposed to using natural language?",
        options: [
            "It is easier to write algorithms.",
            "It eliminates all philosophical debate.",
            "It avoids imprecisions in the form of ambiguities.",
            "It makes the language sound and complete."
        ],
        answer: "It avoids imprecisions in the form of ambiguities.",
        [cite_start]explanation: "Symbolic logic (formal logic) has changed the game by introducing languages so precise that there is no risk of misunderstandings... Therefore we will design a formal language, the language of propositional logic, where no ambiguity can occur[cite: 15].",
    },
    {
        topic: "Introduction",
        question: "What is the formal definition of a **proposition**?",
        options: [
            "A statement that is complex and debatable.",
            "A statement that can be converted into a predicate.",
            "A statement that is either true or false.",
            "A statement that is a conjunction or a disjunction."
        ],
        answer: "A statement that is either true or false.",
        explanation: "A proposition is a statement that is either true or false. [cite_start]Propositions are sometimes called sentences[cite: 9].",
    },
    {
        topic: "Introduction",
        question: "Which of the following is NOT an example of a proposition, as per the text's criteria?",
        options: [
            "2 + 2 = 4.",
            "Is it raining?",
            "All natural numbers are integers.",
            "I wear a blue shirt."
        ],
        answer: "Is it raining?",
        [cite_start]explanation: "Is it raining? is not a proposition because it is a question, not a statement[cite: 10].",
    },
    {
        topic: "Introduction",
        question: "Why is the statement 'This sentence is false' NOT considered a proposition in the text?",
        options: [
            "It is an imperative.",
            "It is a predicate of X.",
            "It is not either true or false (it leads to a paradox).",
            "It is too complex to analyze."
        ],
        answer: "It is not either true or false (it leads to a paradox).",
        [cite_start]explanation: "The statement 'This sentence is false' is not a proposition, since it is not either true or false: if it were true, it would need to be false and vice-versa[cite: 10].",
    },
    {
        topic: "Introduction",
        question: "An **atomic proposition** is one that:",
        options: [
            "Is always true.",
            "Cannot be decomposed further into smaller propositions.",
            "Always relates two subjects.",
            "Must be simple and short."
        ],
        answer: "Cannot be decomposed further into smaller propositions.",
        [cite_start]explanation: "Some propositions are atomic, in that they cannot be decomposed further into smaller propositions[cite: 10].",
    },
    {
        topic: "Introduction",
        question: "In the proposition 'I play games often and I study very well', what is the resulting proposition called?",
        options: [
            "An implication",
            "A negation",
            "A disjunction",
            "A conjunction"
        ],
        answer: "A conjunction",
        [cite_start]explanation: "When two propositions $\phi$ and $\psi$ are joined by an and, the resulting proposition $\phi$ and $\psi$ is called a conjunction (the conjunction of $\phi$ and $\psi$)[cite: 10].",
    },
    {
        topic: "Introduction",
        question: "A conjunction is true if and only if:",
        options: [
            "At least one of its conjuncts is true.",
            "Both of its conjuncts are true.",
            "The first conjunct is true and the second is false.",
            "It uses the word 'but' instead of 'and'."
        ],
        answer: "Both of its conjuncts are true.",
        [cite_start]explanation: "A conjunction is true if both of its conjuncts are true[cite: 10].",
    },
    {
        topic: "Introduction",
        question: "What is the term for the two parts of a **disjunction**?",
        options: [
            "Disjuncts",
            "Conjoints",
            "Components",
            "Sequents"
        ],
        answer: "Disjuncts",
        [cite_start]explanation: "The two parts of the disjunction are called the disjuncts[cite: 11].",
    },
    {
        topic: "Introduction",
        question: "The standard interpretation of 'or' in mathematics, where a disjunction is true if at least one disjunct is true, is called:",
        options: [
            "Exclusive or",
            "Inclusive or",
            "Material disjunction",
            "Adversative disjunction"
        ],
        answer: "Inclusive or",
        explanation: "A disjunction is true if at least one of the disjuncts is true. [cite_start]This meaning of disjunctions is called the inclusive or[cite: 11].",
    },
    {
        topic: "Introduction",
        question: "What word in a natural language sentence is a sign of an **exclusive or**?",
        options: [
            "But",
            "If",
            "Either",
            "Neither"
        ],
        answer: "Either",
        [cite_start]explanation: "When you see either in a sentence, it is a sign that you are dealing with an exclusive or[cite: 11].",
    },
    {
        topic: "Introduction",
        question: "In the implication 'If $\phi$ then $\psi$', what is $\phi$ called?",
        options: [
            "The conclusion",
            "The consequent",
            "The antecedent",
            "The equivalence"
        ],
        answer: "The antecedent",
        [cite_start]explanation: "The proposition $\phi$ is called the antecedent and the proposition $\psi$ is called the conclusion (or consequent) of the implication[cite: 12].",
    },
    {
        topic: "Introduction",
        question: "An implication is false if and only if:",
        options: [
            "Both the antecedent and conclusion are false.",
            "The antecedent is false and the conclusion is true.",
            "The antecedent is true and the conclusion is false.",
            "Both the antecedent and conclusion are true."
        ],
        answer: "The antecedent is true and the conclusion is false.",
        [cite_start]explanation: "An implication is false if and only if the antecedent is true, but the conclusion is false[cite: 12].",
    },
    {
        topic: "Introduction",
        question: "An implication that is true because the antecedent is false is called:",
        options: [
            "Contingently true",
            "Logically true",
            "Vacuously true",
            "Trivially true"
        ],
        answer: "Vacuously true",
        [cite_start]explanation: "Implications that are true because the antecedent is false are called vacuously true[cite: 12].",
    },
    {
        topic: "Introduction",
        question: "The implication used in mathematics, where the truth value depends only on the truth values of its components, is called:",
        options: [
            "Causal implication",
            "Natural language implication",
            "Material implication (or truth functional implication)",
            "Strong implication"
        ],
        answer: "Material implication (or truth functional implication)",
        [cite_start]explanation: "This implication that we use in mathematics is called material implication or truth functional implication, because the truth value of the implication as a whole depends only on the truth values of the antecedent and the conclusion[cite: 12].",
    },
    {
        topic: "Introduction",
        question: "In the proposition 'I will pass Logic only if I study hard,' the antecedent is:",
        options: [
            "I study hard.",
            "I will pass Logic.",
            "I will not pass Logic.",
            "I will not study hard."
        ],
        answer: "I will pass Logic.",
        [cite_start]explanation: "In the proposition I will pass Logic only if I study hard (emphasis on only if ), the antecedent is I will pass Logic and the conclusion is I study hard[cite: 13].",
    },
    {
        topic: "Introduction",
        question: "The proposition 'It is not the case that $\phi$' is called the:",
        options: [
            "Conjunction of $\phi$.",
            "Equivalence of $\phi$.",
            "Negation of $\phi$.",
            "Disjunction of $\phi$."
        ],
        answer: "Negation of $\phi$.",
        [cite_start]explanation: "A proposition of the form it is not the case that $\phi$ (or simply not $\phi$) is the negation of $\phi$[cite: 13].",
    },
    {
        topic: "Introduction",
        question: "A proposition of the form '$\phi$ if and only if $\psi$' is called an equivalence or:",
        options: [
            "Reverse implication",
            "Double negation",
            "Double implication",
            "Conditional equivalence"
        ],
        answer: "Double implication",
        [cite_start]explanation: "A proposition of the form $\phi$ if and only if $\psi$ is called an equivalence or double implication[cite: 14].",
    },
    {
        topic: "Introduction",
        question: "An **equivalence** ($\phi$ if and only if $\psi$) is true if and only if:",
        options: [
            "$\phi$ is true.",
            "$\psi$ is true.",
            "$\phi$ and $\psi$ have the same truth value.",
            "$\phi$ and $\psi$ have opposite truth values."
        ],
        answer: "$\phi$ and $\psi$ have the same truth value.",
        [cite_start]explanation: "Such a proposition, as a whole, is true if $\phi$ and $\psi$ have the same truth value (both false or both true)[cite: 14].",
    },
    {
        topic: "Introduction",
        question: "What does the statement '$\phi$ only if $\psi$' mean, in terms of standard implication?",
        options: [
            "If $\psi$, then $\phi$.",
            "If $\phi$, then $\psi$.",
            "$\phi$ and $\psi$.",
            "$\phi$ or $\psi$."
        ],
        answer: "If $\phi$, then $\psi$.",
        [cite_start]explanation: "The proposition $\phi$ only if $\psi$ has the same meaning as if $\phi$, then $\psi$[cite: 14].",
    },
    {
        topic: "Introduction",
        question: "The words 'and', 'or', 'if-then', 'not', 'if-and-only-if' are collectively called:",
        options: [
            "Quantifiers",
            "Metaconnectives",
            "Predicates",
            "Logical connectives"
        ],
        answer: "Logical connectives",
        [cite_start]explanation: "The words and, or, if-then, not, only if, if-and-only-if (and other similar phrases) are called logical connectives[cite: 14].",
    },
    {
        topic: "Introduction",
        question: "In the context of the course, what is the meaning of the word **formal** in computer science and mathematics?",
        options: [
            "Strictly following rules of etiquette.",
            "Making things so precise that there is no possibility of misunderstanding.",
            "Restricting the number of possible outcomes.",
            "Relying entirely on computational proof."
        ],
        answer: "Making things so precise that there is no possibility of misunderstanding.",
        [cite_start]explanation: "In computer science (and in mathematics), formal is a good thing: it means making things so precise that there is no possibility of misunderstanding[cite: 15].",
    },
    // --- Chapter 2: Informal Propositional Logic (40 Questions) - Continuation of Informal ---
    {
        topic: "Informal Logic",
        question: "In the proposition 'It is raining outside, but I have an umbrella,' what is the logical connective, and what kind of proposition is it?",
        options: [
            "Connective: but; Type: Disjunction",
            "Connective: but; Type: Conjunction",
            "Connective: outside; Type: Atomic",
            "Connective: I have; Type: Implication"
        ],
        answer: "Connective: but; Type: Conjunction",
        [cite_start]explanation: "The proposition It is raining outside, but I have an umbrella is also a conjunction, using the adversative conjunction but[cite: 11].",
    },
    {
        topic: "Informal Logic",
        question: "If $\phi$ is the antecedent and $\psi$ is the conclusion, in which case is the material implication 'If $\phi$ then $\psi$' true?",
        options: [
            "Only when $\phi$ is true and $\psi$ is true.",
            "Only when $\phi$ is false and $\psi$ is false.",
            "Only when $\phi$ is true and $\psi$ is false.",
            "When $\phi$ is false, OR when $\psi$ is true."
        ],
        answer: "When $\phi$ is false, OR when $\psi$ is true.",
        explanation: "The implication 'if $\phi$ then $\psi$' is false only when $\phi$ is true and $\psi$ is false. [cite_start]It is true in all other three cases (false/false, false/true, true/true)[cite: 13].",
    },
    {
        topic: "Informal Logic",
        question: "Consider the proposition: 'I will pass Logic or I will drop school.' The most likely meaning, according to the notes, is equivalent to which implication?",
        options: [
            "If I pass Logic, then I will not drop school.",
            "If I do not pass Logic, then I will drop school.",
            "I will drop school only if I pass Logic.",
            "I will pass Logic if and only if I do not drop school."
        ],
        answer: "If I do not pass Logic, then I will drop school.",
        [cite_start]explanation: "The most likely meaning of 'I will pass Logic or I will drop school' is 'If I do not pass Logic, then I will drop school'[cite: 13].",
    },
    {
        topic: "Informal Logic",
        question: "In Propositional Logic, what must be true about the statement 'every natural number is an integer'?",
        options: [
            "It is a conjunction.",
            "It is a predicate of x.",
            "It is an atomic proposition.",
            "It is a complex formula involving quantifiers."
        ],
        answer: "It is an atomic proposition.",
        [cite_start]explanation: "The proposition 'every natural number is an integer' is an atomic proposition in propositional logic, even though it is not necessarily atomic in other logics like first-order logic[cite: 14].",
    },
    {
        topic: "Informal Logic",
        question: "Which of the following is considered a **proposition**?",
        options: [
            "Go fish!",
            "x is greater than 7.",
            "The number 7 is odd.",
            "$\pi$."
        ],
        answer: "The number 7 is odd.",
        explanation: "Go fish! (imperative) and $\pi$ (not a statement) and x is greater than 7 (predicate) are not propositions. [cite_start]'The number 7 is odd' is a statement that is either true or false[cite: 10, 14].",
    },
    {
        topic: "Informal Logic",
        question: "Ambiguities in natural language, such as 'John and Mary are married' having two meanings, are the reason for developing:",
        options: [
            "Predicate Logic.",
            "Higher-Order Logic.",
            "Symbolic/Formal Logic.",
            "Philosophical Logic."
        ],
        answer: "Symbolic/Formal Logic.",
        explanation: "Ambiguities impede the study of propositional logic. [cite_start]Therefore we will design a formal language... Symbolic logic (formal logic) has changed the game by introducing languages so precise that there is no risk of misunderstandings[cite: 15].",
    },
    {
        topic: "Informal Logic",
        question: "What is the logical equivalent of '$\phi$ if $\psi$'?",
        options: [
            "If $\psi$, then $\phi$.",
            "If $\phi$, then $\psi$.",
            "$\neg \phi$ or $\psi$.",
            "$\neg \psi$ or $\phi$."
        ],
        answer: "If $\psi$, then $\phi$.",
        [cite_start]explanation: "The proposition '$\phi$ if $\psi$' is the same as 'if $\psi$, then $\phi$'[cite: 14].",
    },
    {
        topic: "Informal Logic",
        question: "A conjunction using the exclusive 'or' is false if:",
        options: [
            "Both disjuncts are true.",
            "One disjunct is true and one is false.",
            "Both disjuncts are false.",
            "The statement is an equivalence."
        ],
        answer: "Both disjuncts are true.",
        [cite_start]explanation: "The exclusive or is false if both $\phi$ and $\psi$ are true, as demonstrated by the example: 'Either I program or I teach' (false because I do both)[cite: 11].",
    },
    {
        topic: "Informal Logic",
        question: "The negation of a proposition always takes which truth value compared to the original proposition?",
        options: [
            "The same truth value.",
            "The opposite truth value.",
            "The truth value of 'true'.",
            "The truth value of the antecedent."
        ],
        answer: "The opposite truth value.",
        [cite_start]explanation: "The negation of a proposition takes the opposite truth value[cite: 14].",
    },
    {
        topic: "Informal Logic",
        question: "True or False: The ambiguous proposition 'It is not true that John is tall and Jane is short' could be interpreted as 'John is not tall and Jane is short.'",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        [cite_start]explanation: "One meaning of the ambiguous proposition is: 'John is not tall and Jane is short'[cite: 15].",
    },
    {
        topic: "Informal Logic",
        question: "The two propositions 'If the Earth is flat, then $2+2=5$' and 'If the Earth is flat, then $2+2=4$' are both considered true because:",
        options: [
            "They are logically equivalent.",
            "They involve only math and science.",
            "The antecedent ('The Earth is flat') is false, making them vacuously true.",
            "They are part of a consistent set of formulae."
        ],
        answer: "The antecedent ('The Earth is flat') is false, making them vacuously true.",
        explanation: "In particular, we will take both the propositions ... to be true, because the antecedent is false. [cite_start]Implications that are true because the antecedent is false are called vacuously true[cite: 12].",
    },
    {
        topic: "Informal Logic",
        question: "A **disjunction** ($\phi \lor \psi$) is false only when:",
        options: [
            "Both $\phi$ and $\psi$ are false.",
            "Both $\phi$ and $\psi$ are true.",
            "$\phi$ is true and $\psi$ is false.",
            "The disjunction is exclusive."
        ],
        answer: "Both $\phi$ and $\psi$ are false.",
        [cite_start]explanation: "A disjunction ($\phi$ or $\psi$) is false when both $\phi$ and $\psi$ are false[cite: 11].",
    },
    {
        topic: "Informal Logic",
        question: "What is the **conclusion** (or consequent) of the implication: 'If I get a passing grade in Logic, I will buy everyone beer.'",
        options: [
            "I get a passing grade in Logic.",
            "I will buy everyone beer.",
            "I will not buy everyone beer.",
            "I do not get a passing grade in Logic."
        ],
        answer: "I will buy everyone beer.",
        [cite_start]explanation: "The antecedent is I get a passing grade in Logic. and the conclusion is I will buy everyone beer[cite: 12].",
    },
    {
        topic: "Informal Logic",
        question: "What distinguishes the use of implication in everyday life from its use in mathematics?",
        options: [
            "In mathematics, the implication is always false.",
            "Everyday life implications usually imply a cause-and-effect relation.",
            "Mathematics uses 'exclusive or' while natural language uses 'inclusive or'.",
            "Natural language implications are always considered atomic."
        ],
        answer: "Everyday life implications usually imply a cause-and-effect relation.",
        explanation: "In everyday life... we understand that there is a cause-and-effect relation between passing Logic and buying beer. [cite_start]This subtle cause-and-effect relation is not part of material implication[cite: 12].",
    },
    {
        topic: "Informal Logic",
        question: "The proposition '$\phi$ if and only if $\psi$' is semantically equivalent to the conjunction of which two implications?",
        options: [
            "The direct implication ($\phi$ only if $\psi$) and the negation ($\neg \phi$).",
            "The reverse implication ($\phi$ if $\psi$) and the direct implication ($\phi$ only if $\psi$).",
            "The direct implication ($\phi$ only if $\psi$) and the conclusion ($\psi$).",
            "The reverse implication ($\phi$ if $\psi$) and the antecedent ($\phi$)."
        ],
        answer: "The reverse implication ($\phi$ if $\psi$) and the direct implication ($\phi$ only if $\psi$).",
        [cite_start]explanation: "Equivalences are, semantically speaking, conjunctions of two implications: '$\phi$ if $\psi$' (reverse implication) AND '$\phi$ only if $\psi$' (direct implication)[cite: 14].",
    },
    {
        topic: "Informal Logic",
        question: "If a proposition is not atomic, what is it generally called?",
        options: [
            "First-order formula",
            "Quantified formula",
            "Molecular formula",
            "Predicate"
        ],
        answer: "Molecular formula",
        [cite_start]explanation: "The notes imply that a proposition that is not atomic is composed of smaller parts (molecular)[cite: 10].",
    },
    {
        topic: "Informal Logic",
        question: "Which of the following propositions is true if both 'It is raining' ($\phi$) and 'I have an umbrella' ($\psi$) are true, assuming the use of 'but' implies conjunction?",
        options: [
            "'It is raining' but 'I have an umbrella'.",
            "'It is raining' or 'I have an umbrella'.",
            "'If it is raining, then I have an umbrella'.",
            "All of the above."
        ],
        answer: "All of the above.",
        explanation: "If both $\phi$ and $\psi$ are true: Conjunction ($\phi \land \psi$) is true. Inclusive Disjunction ($\phi \lor \psi$) is true. [cite_start]Implication ($\phi \rightarrow \psi$) is true (True $\rightarrow$ True is True)[cite: 10, 11, 13].",
    },
    {
        topic: "Informal Logic",
        question: "What is the consequence of having syntactic ambiguities in the study of logic?",
        options: [
            "It forces the use of first-order logic.",
            "It complicates philosophical arguments.",
            "It leads to logical contradictions (paradoxes).",
            "It can get in the way of studying the laws of logic, like a wrong computation in engineering."
        ],
        answer: "It can get in the way of studying the laws of logic, like a wrong computation in engineering.",
        [cite_start]explanation: "In the study of the laws of logic, such ambiguities can get in the way, just like a wrong computation could impact the resistance of buildings or bridges in civil engineering[cite: 15].",
    },
    {
        topic: "Informal Logic",
        question: "True or False: The second disjunct in the sentence 'I will buy a laptop or a tablet' can be explicitly stated as 'I will buy a tablet.'",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "When we find the disjuncts, it helps to state them explicitly. [cite_start]The implicit part 'I will buy' is assumed for the second disjunct[cite: 11].",
    },
    {
        topic: "Informal Logic",
        question: "In the natural language implication 'If $A$, then $B$', if $A$ is false and $B$ is false, the implication is considered:",
        options: [
            "True",
            "False",
            "Undefined",
            "Contingent"
        ],
        answer: "True",
        [cite_start]explanation: "According to the truth table for material implication, false $\rightarrow$ false is true[cite: 13].",
    },
    {
        topic: "Informal Logic",
        question: "In the natural language implication 'If $A$, then $B$', if $A$ is false and $B$ is true, the implication is considered:",
        options: [
            "True",
            "False",
            "Undefined",
            "Contingent"
        ],
        answer: "True",
        [cite_start]explanation: "According to the truth table for material implication, false $\rightarrow$ true is true[cite: 13].",
    },
    {
        topic: "Informal Logic",
        question: "In the natural language implication 'If $A$, then $B$', if $A$ is true and $B$ is false, the implication is considered:",
        options: [
            "True",
            "False",
            "Undefined",
            "Contingent"
        ],
        answer: "False",
        [cite_start]explanation: "According to the truth table for material implication, true $\rightarrow$ false is false[cite: 13].",
    },
    {
        topic: "Informal Logic",
        question: "In the natural language implication 'If $A$, then $B$', if $A$ is true and $B$ is true, the implication is considered:",
        options: [
            "True",
            "False",
            "Undefined",
            "Contingent"
        ],
        answer: "True",
        [cite_start]explanation: "According to the truth table for material implication, true $\rightarrow$ true is true[cite: 13].",
    },
    {
        topic: "Informal Logic",
        question: "True or False: The truth value of a material implication depends on the meaning of the antecedent and conclusion themselves, and not just their truth values.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        [cite_start]explanation: "Material implication... depends only on the truth values of the antecedent and the conclusion, not on the antecedent and the conclusion itself[cite: 12].",
    },
    {
        topic: "Informal Logic",
        question: "In the context of Propositional Logic, the statement 'x is greater than 7' is not a proposition but a:",
        options: [
            "Conjunction",
            "Question",
            "Imperative",
            "Predicate of x"
        ],
        answer: "Predicate of x",
        [cite_start]explanation: "x is greater than 7 (we have here a predicate of x; once we set a value for x, the predicate becomes a proposition)[cite: 10].",
    },
    {
        topic: "Informal Logic",
        question: "Which of the following is an example of an ambiguous proposition in natural language?",
        options: [
            "The number 7 is odd if and only if 7 is a prime.",
            "I ate so much that I felt sick.",
            "I have neither a dress nor shoes.",
            "John and Mary are married."
        ],
        answer: "John and Mary are married.",
        [cite_start]explanation: "John and Mary are married (meaning 1: John and Mary are married to each other; meaning 2: John and Mary are married, but not necessarily to each other)[cite: 15].",
    },
    {
        topic: "Informal Logic",
        question: "If a conjunction $\phi \land \psi$ is false, which of the following MUST be true about the components?",
        options: [
            "Both $\phi$ and $\psi$ are false.",
            "At least one of $\phi$ or $\psi$ is false.",
            "$\phi$ is true and $\psi$ is false.",
