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
        topic:"Informal Logic",
        question: "If a conjunction $\phi \land \psi$ is false, which of the following MUST be true about the components?",
        options: [
            "Both $\phi$ and $\psi$ are false.",
            "At least one of $\phi$ or $\psi$ is false.",
            "$\phi$ is true and $\psi$ is false.",
            "The conjunction is a molecular formula."
        ],
        answer: "At least one of $\phi$ or $\psi$ is false.",
        explanation: "A conjunction is true if both of its conjuncts are true. [cite_start]Therefore, it is false if at least one of its conjuncts is false[cite: 10].",
    },
    {
        topic: "Informal Logic",
        question: "True or False: In First-Order Logic, a statement like 'every natural number is an integer' is no longer considered atomic.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "In first-order logic... we have additional logical connectives called quantifiers that can be used to construct 'every natural number is an integer' from smaller propositions. [cite_start]Therefore, it is not atomic in first-order logic[cite: 14].",
    },
    {
        topic: "Informal Logic",
        question: "In the context of the notes, when is the equivalence 'It is raining if and only if it is snowing' true if 'It is raining' is false and 'It is snowing' is false?",
        options: [
            "True, because they have the same truth value (both false).",
            "False, because both are false.",
            "False, because there is no logical connection.",
            "It is vacuously true."
        ],
        answer: "True, because they have the same truth value (both false).",
        [cite_start]explanation: "An equivalence is true if $\phi$ and $\psi$ have the same truth value (both false or both true)[cite: 14]. [cite_start]The example in the text shows this exact case: 'It is raining if and only if it is snowing' is true because both are false[cite: 14].",
    },
    // --- Chapter 3: Formal Syntax of Propositional Logic (40 Questions) ---
    {
        topic: "Formal Syntax",
        question: "By **syntax** in the context of Propositional Logic, what is generally understood?",
        options: [
            "The truth-value assignment of a formula.",
            "The set of rules for writing correctly.",
            "The translation from natural language to formal language.",
            "The proof system for deriving valid sequents."
        ],
        answer: "The set of rules for writing correctly.",
        [cite_start]explanation: "By syntax we generally understand a set of rules for writing correctly[cite: 17].",
    },
    {
        topic: "Formal Syntax",
        question: "What is an **alphabet** in computer science, as defined in the notes?",
        options: [
            "A finite set of variables.",
            "A set whose elements are used to make up words.",
            "A recursive set of symbols and connectives.",
            "The set of all possible well-formed formulae."
        ],
        answer: "A set whose elements are used to make up words.",
        explanation: "A set is called an alphabet in computer science if we use the elements of the set to make up words. [cite_start]The elements of an alphabet are called symbols[cite: 17].",
    },
    {
        topic: "Formal Syntax",
        question: "What is a **word** over an alphabet?",
        options: [
            "A single symbol from the alphabet.",
            "A finite set of symbols in the alphabet.",
            "A sequence of symbols in the alphabet.",
            "A sequence that forms a well-formed formula."
        ],
        answer: "A sequence of symbols in the alphabet.",
        [cite_start]explanation: "A word over an alphabet is a sequence of symbols in the alphabet[cite: 17].",
    },
    {
        topic: "Formal Syntax",
        question: "The alphabet of Propositional Logic ($\mathcal{L}$) is the union of which three categories of sets?",
        options: [
            "Propositional variables, quantifiers, and predicates.",
            "Logical connectives, truth values, and auxiliary symbols.",
            "Propositional variables, logical connectives, and auxiliary symbols.",
            "Atomic formulae, molecular formulae, and parentheses."
        ],
        answer: "Propositional variables, logical connectives, and auxiliary symbols.",
        [cite_start]explanation: "The alphabet of propositional logic ($\mathcal{L}$) is the union of the set of propositional variables ($\mathcal{A}$), the set of logical connectives ($\{\neg, \land, \lor\}$), and the set of auxiliary symbols ($\{(, )\}$)[cite: 18].",
    },
    {
        topic: "Formal Syntax",
        question: "The set of **propositional variables** ($\mathcal{A}$) in the alphabet of Propositional Logic is defined as:",
        options: [
            "Finite and containing only 'p' and 'q'.",
            "An infinite set that we fix from the very beginning.",
            "The set of all atomic propositions.",
            "The set of all capital English letters."
        ],
        answer: "An infinite set that we fix from the very beginning.",
        explanation: "The propositional variables $\mathcal{A} = \{p, q, r, p_0, q_1, . . [cite_start].\}$ is an infinite set that we fix from the very beginning[cite: 18].",
    },
    {
        topic: "Formal Syntax",
        question: "Which symbols form the set of **logical connectives** in the minimal alphabet of Propositional Logic?",
        options: [
            "$\{\neg, \land, \lor, \rightarrow, \leftrightarrow\}$",
            "$\{\neg, \land, \lor\}$",
            "$\{(, ), \rightarrow, \leftrightarrow\}$",
            "$\{\land, \lor, \rightarrow\}$"
        ],
        answer: "$\{\neg, \land, \lor\}$",
        [cite_start]explanation: "The set of logical connectives is $\{\neg, \land, \lor\}$[cite: 18].",
    },
    {
        topic: "Formal Syntax",
        question: "The set of propositional formulae ($\mathcal{PL}$) is the **smallest** set of words over $\mathcal{L}$ satisfying certain conditions. This is known as a(n):",
        options: [
            "Structural proof.",
            "Minimality constraint.",
            "Proof by contradiction.",
            "Unique readability theorem."
        ],
        answer: "Minimality constraint.",
        [cite_start]explanation: "Another important part of an inductive definition is the minimality constraint, which says that nothing other than what is provable by the base case(s) and the inductive case(s) belongs to the set[cite: 19].",
    },
    {
        topic: "Formal Syntax",
        question: "What is the **Base Case** in the inductive definition of Propositional Formulae ($\mathcal{PL}$)?",
        options: [
            "If $\phi \in \mathcal{PL}$, then $\neg \phi \in \mathcal{PL}$.",
            "Any propositional variable is in $\mathcal{PL}$.",
            "If $\phi_1, \phi_2 \in \mathcal{PL}$, then $(\phi_1 \land \phi_2) \in \mathcal{PL}$.",
            "The empty word $\epsilon$ is in $\mathcal{PL}$."
        ],
        answer: "Any propositional variable is in $\mathcal{PL}$.",
        [cite_start]explanation: "Base Case: Any propositional variable, seen as a 1-symbol word, is in $\mathcal{PL}$ (equivalently, $\mathcal{A} \subseteq \mathcal{PL}$)[cite: 18].",
    },
    {
        topic: "Formal Syntax",
        question: "Which of the following is an example of an **Inductive Step** in the definition of $\mathcal{PL}$?",
        options: [
            "If $\phi \in \mathcal{PL}$, then $(\phi \rightarrow \psi) \in \mathcal{PL}$.",
            "If $\phi \in \mathcal{PL}$, then $\neg \phi \in \mathcal{PL}$.",
            "If $p \in \mathcal{A}$, then $p \in \mathcal{PL}$.",
            "If $\phi$ is a word, then $\phi \in \mathcal{PL}$."
        ],
        answer: "If $\phi \in \mathcal{PL}$, then $\neg \phi \in \mathcal{PL}$.",
        explanation: "Inductive Step i. [cite_start]If $\phi \in \mathcal{PL}$, then $\neg \phi \in \mathcal{PL}$[cite: 19].",
    },
    {
        topic: "Formal Syntax",
        question: "Which of the following words is **NOT** a well-formed formula ($\mathcal{PL}$), based on the minimal inductive definition provided?",
        options: [
            "$\neg(p \lor q)$",
            "$(p \land q)$",
            "$q \land \neg p$",
            "$p$"
        ],
        answer: "$q \land \neg p$",
        [cite_start]explanation: "Examples of words not in PL include: $q \land \neg p$[cite: 19]. This is because binary connectives require parentheses around the resulting formula, i.e., it should be $(q \land \neg p)$ to be well-formed.",
    },
    {
        topic: "Formal Syntax",
        question: "A formula that consists of a single propositional variable is called a(n):",
        options: [
            "Molecular formula",
            "WFF",
            "Atomic formula",
            "Sequent"
        ],
        answer: "Atomic formula",
        [cite_start]explanation: "A formula that consists of a single propositional variable, such as $p$ or $q$, is called an atomic formula[cite: 20].",
    },
    {
        topic: "Formal Syntax",
        question: "The letter '$\mathcal{A}$' for the set of propositional variables stands for:",
        options: [
            "Alphabet",
            "Argument",
            "Atomic",
            "Auxiliary"
        ],
        answer: "Atomic",
        [cite_start]explanation: "This explains why the set $\mathcal{A}$ of propositional variables is called $\mathcal{A}$ ($\mathcal{A}$ stands for atomic)[cite: 20].",
    },
    {
        topic: "Formal Syntax",
        question: "How is the **main connective** of a molecular formula determined?",
        options: [
            "It is always the first connective in the formula.",
            "It is the connective with the highest precedence.",
            "It is given by the last inference in its construction tree.",
            "It is the connective that occurs most frequently."
        ],
        answer: "It is given by the last inference in its construction tree.",
        [cite_start]explanation: "Each molecular formula has a main connective, which is given by the last inference in its construction tree[cite: 20].",
    },
    {
        topic: "Formal Syntax",
        question: "What is the main connective of the formula $\neg(p \lor q)$?",
        options: [
            "$\lor$",
            "$\neg$",
            "$p$",
            "$"
        ],
        answer: "$\neg$",
        [cite_start]explanation: "The main connective of the formula $\neg(p \lor q)$ is $\neg$ (the negation), as it was the last operation (Inductive Case i) used in its construction[cite: 20].",
    },
    {
        topic: "Formal Syntax",
        question: "What is the main connective of the formula $(\neg p \lor q)$?",
        options: [
            "$\lor$",
            "$\neg$",
            "$p$",
            "$"
        ],
        answer: "$\lor$",
        [cite_start]explanation: "The main connective of the formula $(\neg p \lor q)$, is $\lor$ (the disjunction), as it was the last operation (Inductive Case iii) used in its construction[cite: 20].",
    },
    {
        topic: "Formal Syntax",
        question: "A formula whose main connective is $\land$ is called a:",
        options: [
            "Negation",
            "Disjunction",
            "Conjunction",
            "Equivalence"
        ],
        answer: "Conjunction",
        [cite_start]explanation: "We call formulae whose main connective is $\land$ conjunctions[cite: 20].",
    },
    {
        topic: "Formal Syntax",
        question: "A word belongs to $\mathcal{PL}$ if and only if there is a(n) $\_ \_ \_ \_ \_ \_ \_ \_ \_ \_$ for it.",
        options: [
            "Truth table.",
            "Formal proof.",
            "Construction tree.",
            "Boolean algebra."
        ],
        answer: "Construction tree.",
        [cite_start]explanation: "It is easy to see that a word belongs to $\mathcal{PL}$ iff there is a construction tree for it[cite: 20].",
    },
    {
        topic: "Formal Syntax",
        question: "In the context of the construction tree, what is a single line called, where below the line is the conclusion and above the line are the hypotheses?",
        options: [
            "A sequent",
            "An axiom",
            "An inference",
            "A literal"
        ],
        answer: "An inference",
        [cite_start]explanation: "Each line is called an inference; below each line is the conclusion of the inference and above the lines are the hypotheses[cite: 20].",
    },
    {
        topic: "Formal Syntax",
        question: "What property of the definition of formulae ensures that any propositional formula can be read unambiguously?",
        options: [
            "The Minimality Constraint",
            "Structural Induction",
            "The Unique Readability Theorem",
            "The Associativity Law"
        ],
        answer: "The Unique Readability Theorem",
        [cite_start]explanation: "The Unique Readability Theorem... essentially says that any propositional formula can be read unambiguously[cite: 22].",
    },
    {
        topic: "Formal Syntax",
        question: "What is the **meta-language** used in the lecture notes to communicate about the object of study?",
        options: [
            "Propositional Logic ($\mathcal{PL}$)",
            "English",
            "Mathematics",
            "The sans-serif blue font"
        ],
        answer: "English",
        [cite_start]explanation: "The object language is the language that we study ($\mathcal{PL}$), and the meta-language is the language that we use to perform the study (English)[cite: 22].",
    },
    {
        topic: "Formal Syntax",
        question: "The **object-language** in the course is:",
        options: [
            "First-Order Logic ($\mathcal{FOL}$)",
            "The set theory used for proofs.",
            "Natural language (English).",
            "The language of Propositional Logic ($\mathcal{PL}$)."
        ],
        answer: "The language of Propositional Logic ($\mathcal{PL}$).",
        [cite_start]explanation: "The object language is the language that we study ($\mathcal{PL}$)... The object language is the language that represents the object of our study (in our case, propositional logic)[cite: 22].",
    },
    {
        topic: "Formal Syntax",
        question: "True or False: The word $p + q$ is a well-formed formula in $\mathcal{PL}$.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        [cite_start]explanation: "The word $p + q$ is listed as an example of a word not in $\mathcal{PL}$ because the symbol $+$ is not in the alphabet $\mathcal{L}$[cite: 19].",
    },
    {
        topic: "Formal Syntax",
        question: "True or False: The word $p p$ is a well-formed formula in $\mathcal{PL}$.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "The word $p p$ is listed as an example of a word not in $\mathcal{PL}$. [cite_start]It is a sequence of symbols, but it does not follow the inductive rules (it is not a propositional variable, and none of the inductive steps apply)[cite: 19].",
    },
    {
        topic: "Formal Syntax",
        question: "Which of the following describes the correct typography convention for elements in the **object language**?",
        options: [
            "Regular black font.",
            "Written in sans-serif blue font.",
            "Written in bold, red font.",
            "Enclosed in double quotes."
        ],
        answer: "Written in sans-serif blue font.",
        [cite_start]explanation: "All elements in the object language are written in sans-serif blue font (for example, $(p \land q)$)[cite: 22].",
    },
    {
        topic: "Formal Syntax",
        question: "In the context of the formal definition, the word $p$ is an example of a word over $\mathcal{L}$ because:",
        options: [
            "It is a formula.",
            "It is a sequence of symbols in the alphabet.",
            "It is not ambiguous.",
            "It has a main connective."
        ],
        answer: "It is a sequence of symbols in the alphabet.",
        explanation: "Words, or strings, are simply sequences of symbols of the alphabet $\mathcal{L}$. [cite_start]'p' is a sequence of one symbol from the alphabet[cite: 18].",
    },
    {
        topic: "Formal Syntax",
        question: "If $\phi$ is a word, and $\phi$ is *not* a propositional variable, then for $\phi$ to be in $\mathcal{PL}$, it must satisfy one of the conditions of the:",
        options: [
            "Base Case.",
            "Minimality Constraint.",
            "Unique Readability Theorem.",
            "Inductive Step."
        ],
        answer: "Inductive Step.",
        [cite_start]explanation: "The definition of $\mathcal{PL}$ is structured by a Base Case (atomic) and Inductive Steps (molecular, built from smaller formulae)[cite: 18, 19].",
    },
    {
        topic: "Formal Syntax",
        question: "What would the fully parenthesized form of the non-well-formed word $\neg p \lor q$ need to be to avoid syntactic ambiguity (assuming negation has higher precedence than disjunction)?",
        options: [
            "$\neg(p \lor q)$",
            "$(\neg p \lor q)$",
            "$\neg (p) \lor q$",
            "$(p \lor \neg q)$"
        ],
        answer: "$(\neg p \lor q)$",
        explanation: "The discussion on Unique Readability shows that $\neg p \lor q$ is ambiguous. [cite_start]If negation has precedence, it is read as $(\neg p) \lor q$, but the formal definition requires parentheses around binary connectives, so the correct well-formed formula would be $(\neg p \lor q)$ (from $\phi_1=\neg p$ and $\phi_2=q$)[cite: 22, 19].",
    },
    {
        topic: "Formal Syntax",
        question: "The use of parentheses in $\mathcal{PL}$ is explicitly mandated to achieve what key property, as discussed in the context of avoiding natural language issues?",
        options: [
            "Computational efficiency.",
            "Semantic completeness.",
            "Syntactic precision (Unique Readability).",
            "The soundness of the logic."
        ],
        answer: "Syntactic precision (Unique Readability).",
        explanation: "Avoiding such syntactic ambiguities was the main reason why we left natural language and began studying formal logic. [cite_start]The formal syntax (including parentheses) ensures Unique Readability[cite: 22, 15].",
    },
    {
        topic: "Formal Syntax",
        question: "If a formula $\phi$ is constructed from $\phi_1$ and $\phi_2$ using the Inductive Step ii, the resulting formula is:",
        options: [
            "$\neg \phi_1$",
            "$(\phi_1 \lor \phi_2)$",
            "$(\phi_1 \land \phi_2)$",
            "$\phi_1 \rightarrow \phi_2$"
        ],
        answer: "$(\phi_1 \land \phi_2)$",
        explanation: "Inductive Step ii. [cite_start]If $\phi_1, \phi_2 \in \mathcal{PL}$, then $(\phi_1 \land \phi_2) \in \mathcal{PL}$ (conjunction)[cite: 19].",
    },
    {
        topic: "Formal Syntax",
        question: "In the construction proof for $\neg(p \lor q) \in \mathcal{PL}$, what is the final step/inference?",
        options: [
            "Base Case: $p \in \mathcal{PL}$.",
            "Inductive Case iii: $(p \lor q) \in \mathcal{PL}$.",
            "Inductive Case i: $\neg(p \lor q) \in \mathcal{PL}$.",
            "Inductive Case ii: $(\neg p \land \neg q) \in \mathcal{PL}$."
        ],
        answer: "Inductive Case i: $\neg(p \lor q) \in \mathcal{PL}$.",
        [cite_start]explanation: "The last step in the construction tree for $\neg(p \lor q)$ is applying the negation rule (Inductive Case i) to the subformula $(p \lor q)$[cite: 19].",
    },
    {
        topic: "Formal Syntax",
        question: "The minimum number of symbols required to form a well-formed formula in $\mathcal{PL}$ is:",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: "1",
        [cite_start]explanation: "The Base Case states that any propositional variable (e.g., $p$), seen as a 1-symbol word, is in $\mathcal{PL}$[cite: 18].",
    },
    {
        topic: "Formal Syntax",
        question: "In the alphabet $\mathcal{L}$, which category of symbols consists of the two characters '(',')'?",
        options: [
            "Propositional variables.",
            "Logical connectives.",
            "Auxiliary symbols.",
            "Truth values."
        ],
        answer: "Auxiliary symbols.",
        [cite_start]explanation: "$\{(, )\}$ is the set of auxiliary symbols; in our case, it consists of two symbols called brakets[cite: 18].",
    },
    {
        topic: "Formal Syntax",
        question: "Which of the following is considered an $\mathcal{L}$ **word** but is **not** a formula in $\mathcal{PL}$?",
        options: [
            "$p$",
            "$(p \lor q)$",
            "))p \lor \land$",
            "$\neg p$"
        ],
        answer: "))p \lor \land$",
        [cite_start]explanation: "))p \lor \land$ is a sequence of symbols from $\mathcal{L}$ (a word) but clearly does not satisfy the rules of the inductive definition of $\mathcal{PL}$[cite: 18, 19].",
    },
    {
        topic: "Formal Syntax",
        question: "What is the key difference between an **alphabet** and a **set** in this context?",
        options: [
            "An alphabet must be finite.",
            "The alphabet's elements must be ordered.",
            "There is no difference.",
            "The intention matters—what we plan on doing with the elements."
        ],
        answer: "The intention matters—what we plan on doing with the elements.",
        explanation: "What is the difference between an alphabet and a set? A priori, none. [cite_start]The intention matters – what we plan on doing with the elements of the set/alphabet[cite: 17].",
    },
    {
        topic: "Formal Syntax",
        question: "What is the general name for a definition that specifies a set using Base Cases and Inductive Cases, along with a minimality constraint?",
        options: [
            "A formal definition",
            "A recursive definition",
            "An axiomatic definition",
            "An inductive definition"
        ],
        answer: "An inductive definition",
        [cite_start]explanation: "The definition of the set $\mathcal{PL}$ is an example of an inductive definition... In inductive definitions of sets, there are usually some base cases... and some inductive cases[cite: 19].",
    },
    {
        topic: "Formal Syntax",
        question: "If a formula $\phi$ is a disjunction, its main connective is:",
        options: [
            "$\neg$",
            "$\land$",
            "$\lor$",
            "$\rightarrow$"
        ],
        answer: "$\lor$",
        [cite_start]explanation: "If the main connective of a formula is a $\lor$, it is a disjunction[cite: 20].",
    },
    {
        topic: "Formal Syntax",
        question: "If $\phi$ is the word $p$, $\psi$ is the word $q$, and $\chi$ is the word $r$, which of the following is a well-formed formula in $\mathcal{PL}$?",
        options: [
            "$(p \land (q \lor r))$",
            "$p \land q \lor r$",
            "$(\neg p \rightarrow \chi)$",
            "$\neg p \land q$"
        ],
        answer: "$(p \land (q \lor r))$",
        explanation: "The formula $(p \lor (q \land r))$ is listed as an example of an element in $\mathcal{PL}$. [cite_start]The formula $(p \land (q \lor r))$ follows the same required recursive structure and full parenthesization[cite: 19].",
    },
    {
        topic: "Formal Syntax",
        question: "Which term is used by some authors for well-formed formulae ($\mathcal{PL}$)?",
        options: [
            "Atomic formulae",
            "Molecular formulae",
            "wff (well-formed formula)",
            "Sequents"
        ],
        answer: "wff (well-formed formula)",
        [cite_start]explanation: "Some authors prefer to use the terminology wff, but we will simply use formula by default in these lecture notes[cite: 18].",
    },
    {
        topic: "Formal Syntax",
        question: "In the inductive definition of $\mathcal{PL}$, the constraint that the set must be the 'smallest' one satisfying the conditions is called the:",
        options: [
            "Minimality Constraint.",
            "Base Case.",
            "Inductive Hypothesis.",
            "Unique Readability."
        ],
        answer: "Minimality Constraint.",
        [cite_start]explanation: "Another important part of an inductive definition is the minimality constraint[cite: 19].",
    },
    {
        topic: "Formal Syntax",
        question: "What is the consequence of having a definition of $\mathcal{PL}$ that lacks Unique Readability, such as the fictive definition where parentheses are omitted around disjunctions?",
        options: [
            "The proof system becomes unsound.",
            "A formula could have two different construction trees (syntactic ambiguity).",
            "The formula becomes unsatisfiable.",
            "The set of propositional variables must be finite."
        ],
        answer: "A formula could have two different construction trees (syntactic ambiguity).",
        explanation: "With this alternative, fictive, definition of $\mathcal{PL}$, the word $\neg p \lor q$ has two different construction trees. [cite_start]Such an ambiguity would be very troubling, because we would not know if $\neg p \lor q$ is a disjunction or a negation[cite: 22].",
    },
    {
        topic: "Formal Syntax",
        question: "The notation $\neg \neg p_1$ is an example of which type of formula?",
        options: [
            "An atomic formula.",
            "A negation (whose subformula is also a negation).",
            "A conjunction.",
            "A predicate."
        ],
        answer: "A negation (whose subformula is also a negation).",
        [cite_start]explanation: "The formula $\neg \neg p_1$ is a well-formed formula where the main connective is $\neg$, making it a negation[cite: 19].",
    },
    {
        topic: "Formal Syntax",
        question: "True or False: The use of a sans-serif blue font for $(p \land q)$ is a convention of the object language.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        [cite_start]explanation: "To more easily differentiate between the two, we make the following convention: all elements in the object language are written in sans-serif blue font (for example, $(p \land q)$)[cite: 22].",
    },
    // --- Chapter 4: Functions Defined Recursively on PL (40 Questions) ---
    {
        topic: "Recursive Functions on PL",
        question: "What is the purpose of the **Abstract Syntax Tree (AST)** of a formula?",
        options: [
            "To assign truth values to the formula.",
            "To determine if the formula is valid.",
            "To eliminate ambiguities and formally represent the structure of a formula.",
            "To provide a physical model of the electronic circuit."
        ],
        answer: "To eliminate ambiguities and formally represent the structure of a formula.",
        [cite_start]explanation: "The Abstract Syntax Tree of a formula is a graph that represents the structure of the formula... The Abstract Syntax Tree eliminates ambiguities[cite: 26].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "In an AST, what do the **leaves** of the tree represent?",
        options: [
            "The logical connectives.",
            "The main connective of the formula.",
            "The parentheses.",
            "The propositional variables (atomic formulae)."
        ],
        answer: "The propositional variables (atomic formulae).",
        [cite_start]explanation: "The leaves of the tree are the atomic formulae[cite: 26].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "In an AST, what do the **internal nodes** of the tree represent?",
        options: [
            "The truth values.",
            "The logical connectives.",
            "The construction proofs.",
            "The assignment functions."
        ],
        answer: "The logical connectives.",
        [cite_start]explanation: "The internal nodes are the logical connectives[cite: 26].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "The function $\text{size}: \mathcal{PL} \rightarrow \mathbb{N}$ computes what property of the Abstract Syntax Tree?",
        options: [
            "The height of the tree.",
            "The number of nodes.",
            "The number of leaves.",
            "The number of connectives."
        ],
        answer: "The number of nodes.",
        [cite_start]explanation: "The function $\text{size}: \mathcal{PL} \rightarrow \mathbb{N}$, computes the size of the abstract syntax tree of a formula (i.e., the number of nodes)[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "Given a propositional variable $p \in \mathcal{A}$, what is the value of $\text{size}(p)$ according to its recursive definition?",
        options: [
            "0",
            "1",
            "2",
            "$\text{size}(\neg p)$"
        ],
        answer: "1",
        [cite_start]explanation: "In the recursive definition: $\text{size}(\phi) = 1$, if $\phi \in \mathcal{A}$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "If $\phi = \neg \phi_0$ and $\phi_0 \in \mathcal{PL}$, what is the recursive definition of $\text{size}(\phi)$?",
        options: [
            "$\text{size}(\phi_0)$",
            "$1 + \text{size}(\phi_0)$",
            "$1 + 2 \cdot \text{size}(\phi_0)$",
            "$2^{\text{size}(\phi_0)}$"
        ],
        answer: "$1 + \text{size}(\phi_0)$",
        [cite_start]explanation: "If $\phi = \neg \phi_0$, then $\text{size}(\phi) = 1 + \text{size}(\phi_0)$ (where the 1 is for the negation node)[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "If $\phi = (\phi_1 \land \phi_2)$ and $\phi_1, \phi_2 \in \mathcal{PL}$, what is the recursive definition of $\text{size}(\phi)$?",
        options: [
            "$\text{size}(\phi_1) \cdot \text{size}(\phi_2)$",
            "$1 + \text{size}(\phi_1) + \text{size}(\phi_2)$",
            "$\text{size}(\phi_1) + \text{size}(\phi_2)$",
            "$2 + \text{size}(\phi_1) + \text{size}(\phi_2)$"
        ],
        answer: "$1 + \text{size}(\phi_1) + \text{size}(\phi_2)$",
        [cite_start]explanation: "If $\phi = (\phi_1 \land \phi_2)$, then $\text{size}(\phi) = 1 + \text{size}(\phi_1) + \text{size}(\phi_2)$ (where the 1 is for the conjunction node, and the parentheses are ignored for size)[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "Compute the size of the formula $\neg p$ given that $\text{size}(p) = 1$.",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: "2",
        explanation: "The formula $\neg p$ is a negation of $p$. [cite_start]$\text{size}(\neg p) = 1 + \text{size}(p) = 1 + 1 = 2$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "Compute the size of the formula $(p \lor q)$, given $\text{size}(p)=1$ and $\text{size}(q)=1$.",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: "3",
        explanation: "The formula $(p \lor q)$ is a disjunction. [cite_start]$\text{size}((p \lor q)) = 1 + \text{size}(p) + \text{size}(q) = 1 + 1 + 1 = 3$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "The function $\text{prop}: \mathcal{PL} \rightarrow 2^{\mathcal{A}}$ computes what property of a formula $\phi$?",
        options: [
            "The set of all subformulae of $\phi$.",
            "The set of propositional variables occurring in $\phi$.",
            "The set of all logical connectives in $\phi$.",
            "The truth value of $\phi$."
        ],
        answer: "The set of propositional variables occurring in $\phi$.",
        [cite_start]explanation: "The function $\text{prop}: \mathcal{PL} \rightarrow 2^{\mathcal{A}}$, computes the set of propositional variables occurring in a formula[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "If $p \in \mathcal{A}$, what is the value of $\text{prop}(p)$ according to its recursive definition?",
        options: [
            "$\emptyset$",
            "$\{p\}$",
            "$\mathcal{A}$",
            "$\{p, \neg p\}$"
        ],
        answer: "$\{p\}$",
        [cite_start]explanation: "In the recursive definition: $\text{prop}(\phi) = \{\phi\}$, if $\phi \in \mathcal{A}$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "If $\phi = \neg \phi_0$, what is the recursive definition of $\text{prop}(\phi)$?",
        options: [
            "$\{\neg\} \cup \text{prop}(\phi_0)$",
            "$\text{prop}(\phi_0)$",
            "$\text{prop}(\phi_0)^c$",
            "$\emptyset$"
        ],
        answer: "$\text{prop}(\phi_0)$",
        [cite_start]explanation: "If $\phi = \neg \phi_0$, then $\text{prop}(\phi) = \text{prop}(\phi_0)$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "If $\phi = (\phi_1 \land \phi_2)$, what is the recursive definition of $\text{prop}(\phi)$?",
        options: [
            "$\text{prop}(\phi_1) \cap \text{prop}(\phi_2)$",
            "$\text{prop}(\phi_1) \cup \text{prop}(\phi_2)$",
            "$\text{prop}(\phi_1) \times \text{prop}(\phi_2)$",
            "$\{\land\} \cup \text{prop}(\phi_1)$"
        ],
        answer: "$\text{prop}(\phi_1) \cup \text{prop}(\phi_2)$",
        [cite_start]explanation: "If $\phi = (\phi_1 \land \phi_2)$, then $\text{prop}(\phi) = \text{prop}(\phi_1) \cup \text{prop}(\phi_2)$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "Compute the set of propositional variables in $\text{prop}(\neg(p \lor \neg q))$.",
        options: [
            "$\{p\}$",
            "$\{q\}$",
            "$\{p, q\}$",
            "$\{p, \neg q\}$"
        ],
        answer: "$\{p, q\}$",
        explanation: "The $\neg$ does not affect the set of variables, and $\lor$ combines the sets. [cite_start]$\text{prop}(\neg(p \lor \neg q)) = \text{prop}(p \lor \neg q) = \text{prop}(p) \cup \text{prop}(\neg q) = \{p\} \cup \{q\} = \{p, q\}$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "What is the principle used to prove properties of propositional formulae based on the inductive definition of $\mathcal{PL}$?",
        options: [
            "Mathematical Induction.",
            "Structural Induction.",
            "Proof by Contradiction.",
            "De Morgan's Laws."
        ],
        answer: "Structural Induction.",
        [cite_start]explanation: "Proofs by Structural Induction are used to prove properties of propositional formulae[cite: 29].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "A structural induction proof on $\mathcal{PL}$ must contain which of the following cases?",
        options: [
            "A Base Case for atomic formulae.",
            "An Inductive Hypothesis for subformulae.",
            "Inductive Steps for $\neg$, $\land$, and $\lor$.",
            "All of the above."
        ],
        answer: "All of the above.",
        [cite_start]explanation: "A structural induction proof follows the structure of the inductive definition of $\mathcal{PL}$: Base Case (atomic formulae) and Inductive Steps (negation, conjunction, disjunction), with the Inductive Hypothesis applying to the subformulae[cite: 29].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "What does the **Inductive Hypothesis** state in a proof by structural induction?",
        options: [
            "The property holds for the formula $\phi$.",
            "The property holds for the propositional variables.",
            "The property holds for all subformulae (e.g., $\phi_0, \phi_1, \phi_2$) of the formula $\phi$.",
            "The property leads to a contradiction."
        ],
        answer: "The property holds for all subformulae (e.g., $\phi_0, \phi_1, \phi_2$) of the formula $\phi$.",
        [cite_start]explanation: "The general template for structural induction requires proving the property for the Base Case, then assuming the Inductive Hypothesis (that the property holds for subformulae), and finally proving the Inductive Steps[cite: 29].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "If a function is defined using the three clauses of the inductive definition of $\mathcal{PL}$ (Base Case and Inductive Steps), the function is called:",
        options: [
            "An axiomatic function.",
            "A non-deterministic function.",
            "A recursively defined function.",
            "A constant function."
        ],
        answer: "A recursively defined function.",
        [cite_start]explanation: "The functions (like size and prop) are defined recursively on $\mathcal{PL}$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "Compute the size of the formula $((p \land q) \lor r)$, given $\text{size}(p)=1, \text{size}(q)=1, \text{size}(r)=1$.",
        options: [
            "4",
            "5",
            "6",
            "7"
        ],
        answer: "5",
        explanation: "$\phi_1 = (p \land q)$, $\phi_2 = r$. $\text{size}(\phi_1) = 1 + \text{size}(p) + \text{size}(q) = 1 + 1 + 1 = 3$. [cite_start]$\text{size}(\phi) = 1 + \text{size}(\phi_1) + \text{size}(\phi_2) = 1 + 3 + 1 = 5$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "The structure of the Abstract Syntax Tree (AST) is defined by the unique decomposition of the formula, which is guaranteed by which theorem?",
        options: [
            "The Replacement Theorem.",
            "The Unique Readability Theorem.",
            "De Morgan's Theorem.",
            "The Soundness Theorem."
        ],
        answer: "The Unique Readability Theorem.",
        [cite_start]explanation: "The structure of the Abstract Syntax Tree is well-defined only due to the Unique Readability Theorem[cite: 27].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "True or False: The Abstract Syntax Tree is a graphical representation of the formula's truth value.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        [cite_start]explanation: "The AST is a graphical representation of the formula's **structure**, not its truth value[cite: 26].",
    },
    {
        topic: "Recursive 
