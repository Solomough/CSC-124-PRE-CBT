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
        topic: "Recursive Functions on PL",
        question: "In the AST, which node represents the **main connective** of the entire formula?",
        options: [
            "The root of the tree.",
            "The leftmost leaf.",
            "The parent of the leaves.",
            "The rightmost node."
        ],
        answer: "The root of the tree.",
        [cite_start]explanation: "The internal nodes are the logical connectives, and the root is the main connective of the formula[cite: 26, 20].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "If a function is defined recursively on a formula $\phi = \neg \phi_0$, the function value for $\phi$ depends on:",
        options: [
            "The values of the function for $\phi_0$ only.",
            "The values of the function for all other formulae in $\mathcal{PL}$.",
            "The truth values of $\phi$.",
            "The size of $\phi$."
        ],
        answer: "The values of the function for $\phi_0$ only.",
        explanation: "The recursive definition relies on the function's value for the immediate subformula(e). [cite_start]For negation, this is $\phi_0$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "If a proof by structural induction requires proving the property for the Base Case $p$, where $p \in \mathcal{A}$, what must be true about the property?",
        options: [
            "The property must be related to the size of $p$.",
            "The property must hold for all atomic formulae.",
            "The property must be related to the number of connectives.",
            "The property must be provable by contradiction."
        ],
        answer: "The property must hold for all atomic formulae.",
        [cite_start]explanation: "The first step of structural induction is proving the property for all $\phi \in \mathcal{A}$[cite: 29].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "In the formal definition of the function $\text{prop}(\phi)$, the output set $2^{\mathcal{A}}$ represents:",
        options: [
            "The set of all propositional variables.",
            "The power set of $\mathcal{A}$ (the set of all subsets of $\mathcal{A}$).",
            "The natural numbers.",
            "The set of all subformulae of $\phi$."
        ],
        answer: "The power set of $\mathcal{A}$ (the set of all subsets of $\mathcal{A}$).",
        [cite_start]explanation: "The set $2^{\mathcal{A}}$ denotes the power set of $\mathcal{A}$ (the set of all subsets of $\mathcal{A}$), meaning $\text{prop}(\phi)$ is a set of propositional variables[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "What is the size of the formula $\neg (p \land q)$?",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        answer: "4",
        [cite_start]explanation: "$\text{size}(\neg (p \land q)) = 1 + \text{size}(p \land q) = 1 + (1 + \text{size}(p) + \text{size}(q)) = 1 + (1 + 1 + 1) = 4$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "True or False: The construction tree notation and the Abstract Syntax Tree notation are two entirely different concepts.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        [cite_start]explanation: "The construction tree (Chapter 3) and the Abstract Syntax Tree (Chapter 4) are closely related ways to represent the derivation/structure of a formula[cite: 20, 26].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "The concept of an AST is generally important in computer science because it is the internal representation of what structure?",
        options: [
            "An electronic circuit.",
            "A source program in a compiler.",
            "A database schema.",
            "A formal proof."
        ],
        answer: "A source program in a compiler.",
        [cite_start]explanation: "ASTs are a fundamental concept in computer science (e.g., as the internal representation of a source program in a compiler)[cite: 26].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "A property $P$ of a formula $\phi$ is shown by structural induction. In the Inductive Step for $\phi = (\phi_1 \lor \phi_2)$, what is the goal?",
        options: [
            "To prove $P(\phi)$ from the assumption of $P(\phi_1 \lor \phi_2)$.",
            "To prove $P(\phi)$ from the assumption of $P(\phi_1)$ and $P(\phi_2)$.",
            "To prove $P(\phi_1)$ and $P(\phi_2)$ from the assumption of $P(\phi)$.",
            "To prove the Base Case for $\phi_1$ and $\phi_2$."
        ],
        answer: "To prove $P(\phi)$ from the assumption of $P(\phi_1)$ and $P(\phi_2)$.",
        [cite_start]explanation: "The Inductive Step requires showing that the property holds for the formula $\phi$ using the Inductive Hypothesis (which assumes the property holds for its subformulae, $\phi_1$ and $\phi_2$)[cite: 29].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "If a formula $\phi$ has $\text{prop}(\phi) = \{p, q, r\}$, what can be concluded about the formula?",
        options: [
            "It is a conjunction of $p, q,$ and $r$.",
            "It is an atomic formula.",
            "It contains the propositional variables $p$, $q$, and $r$.",
            "It is semantically equivalent to $p \land q \land r$."
        ],
        answer: "It contains the propositional variables $p$, $q$, and $r$.",
        [cite_start]explanation: "The $\text{prop}$ function computes the set of propositional variables occurring in a formula[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "Which type of mathematical proof is essential for demonstrating properties of sets defined by an inductive process, like $\mathcal{PL}$?",
        options: [
            "Proof by contradiction.",
            "Proof by structural induction.",
            "Proof by total ordering.",
            "Proof by enumeration."
        ],
        answer: "Proof by structural induction.",
        [cite_start]explanation: "Structural Induction is the principle used to prove properties of propositional formulae, which is an inductively defined set[cite: 29].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "What is the smallest possible size of a molecular formula in $\mathcal{PL}$?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: "2",
        explanation: "Molecular formulae are formed by the Inductive Steps. The simplest is a negation, e.g., $\neg p$. [cite_start]$\text{size}(\neg p) = 1 + \text{size}(p) = 2$[cite: 20, 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "What does the $\land$ node in the AST of the formula $(p \land q)$ connect?",
        options: [
            "It connects $p$ to $q$.",
            "It connects the subformulae $p$ and $q$.",
            "It connects the truth values of $p$ and $q$.",
            "It connects the formula to the root."
        ],
        answer: "It connects the subformulae $p$ and $q$.",
        [cite_start]explanation: "The binary connective node connects its two immediate subformulae (children)[cite: 26].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "If $\phi$ is a molecular formula, what is always true about its size?",
        options: [
            "$\text{size}(\phi) = 1$",
            "$\text{size}(\phi) > 1$",
            "$\text{size}(\phi) \le 1$",
            "$\text{size}(\phi) = 3$"
        ],
        answer: "$\text{size}(\phi) > 1$",
        [cite_start]explanation: "Atomic formulae have size 1. Molecular formulae are built using the Inductive Steps, increasing the size beyond 1 (minimum size is 2 for $\neg p$)[cite: 20, 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "What is the set $\text{prop}(\neg \neg p)$?",
        options: [
            "$\{p\}$",
            "$\emptyset$",
            "$\{\neg, p\}$",
            "$\{\neg \neg p\}$"
        ],
        answer: "$\{p\}$",
        explanation: "The $\text{prop}$ function ignores negations. [cite_start]$\text{prop}(\neg \neg p) = \text{prop}(\neg p) = \text{prop}(p) = \{p\}$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "What would the $\rightarrow$ symbol represent in an extended AST for a logic that includes material implication?",
        options: [
            "An atomic formula.",
            "A leaf node.",
            "An internal node (connective).",
            "A size function."
        ],
        answer: "An internal node (connective).",
        [cite_start]explanation: "Logical connectives are represented by the internal nodes in the AST[cite: 26].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "If $\text{size}(\phi) = 3$ and $\phi$ is a molecular formula, $\phi$ must be which of the following forms?",
        options: [
            "$\neg \neg p$",
            "$(p \lor q)$",
            "$(p \land p)$",
            "All of the above."
        ],
        answer: "All of the above.",
        explanation: "$\text{size}(\neg \neg p) = 1 + \text{size}(\neg p) = 1 + 2 = 3$. $\text{size}((p \lor q)) = 1 + 1 + 1 = 3$. $\text{size}((p \land p)) = 1 + 1 + 1 = 3$. [cite_start]Any binary connective applied to two atomic formulae results in a size of 3[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "True or False: The domain of the recursive functions $\text{size}$ and $\text{prop}$ is the set of words over $\mathcal{L}$ that are NOT in $\mathcal{PL}$.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        [cite_start]explanation: "The domain of these functions is the set of propositional formulae: $\text{size}: \mathcal{PL} \rightarrow \mathbb{N}$ and $\text{prop}: \mathcal{PL} \rightarrow 2^{\mathcal{A}}$[cite: 28].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "The structure of the Abstract Syntax Tree ensures that the formula is interpreted according to the rules of:",
        options: [
            "The object language ($\mathcal{PL}$).",
            "The meta-language (English).",
            "The truth assignment $\tau$.",
            "Boolean algebra."
        ],
        answer: "The object language ($\mathcal{PL}$).",
        [cite_start]explanation: "The AST formally represents the structure dictated by the rules of the object language $\mathcal{PL}$ (the inductive definition)[cite: 26, 18].",
    },
    {
        topic: "Recursive Functions on PL",
        question: "In the AST for $\neg (p \land q)$, the $\neg$ is the root, and its child is the $\land$ node. What are the children of the $\land$ node?",
        options: [
            "The root and the formula.",
            "The parentheses.",
            "The leaves $p$ and $q$.",
            "The formula itself."
        ],
        answer: "The leaves $p$ and $q$.",
        [cite_start]explanation: "The $\land$ node is the main connective of the subformula $(p \land q)$, and its children are the atomic formulae (leaves) $p$ and $q$[cite: 26].",
    },
    // --- Chapter 5: Semantics of Propositional Logic (40 Questions) ---
    {
        topic: "Semantics of PL",
        question: "A function $\tau: \mathcal{A} \rightarrow \mathbb{B}$ from the set of propositional variables to the set of Boolean truth values $\mathbb{B} = \{0, 1\}$ is called a(n):",
        options: [
            "Logical consequence.",
            "Satisfiability check.",
            "Boolean algebra.",
            "Truth assignment."
        ],
        answer: "Truth assignment.",
        [cite_start]explanation: "A truth assignment $\tau$ is a function $\tau: \mathcal{A} \rightarrow \mathbb{B}$, where $\mathbb{B} = \{0, 1\}$ (or $\{T, F\}$)[cite: 33].",
    },
    {
        topic: "Semantics of PL",
        question: "The truth value of a formula $\phi$ in an assignment $\tau$, denoted $\hat{\tau}(\phi)$, is computed recursively based on the laws of:",
        options: [
            "Set Theory.",
            "Boolean Algebra.",
            "First-Order Logic.",
            "Structural Induction."
        ],
        answer: "Boolean Algebra.",
        [cite_start]explanation: "The computation of $\hat{\tau}(\phi)$ relies on the operations defined in Boolean Algebra, where $1$ is true and $0$ is false[cite: 33].",
    },
    {
        topic: "Semantics of PL",
        question: "If $\phi$ is a propositional variable $p \in \mathcal{A}$, what is the value of $\hat{\tau}(\phi)$?",
        options: [
            "1",
            "0",
            "$\tau(p)$",
            "$\neg \tau(p)$"
        ],
        answer: "$\tau(p)$",
        [cite_start]explanation: "If $\phi$ is a propositional variable $p \in \mathcal{A}$, then $\hat{\tau}(\phi) = \tau(p)$[cite: 34].",
    },
    {
        topic: "Semantics of PL",
        question: "If $\phi = \neg \phi_0$, the truth value $\hat{\tau}(\phi)$ is computed as:",
        options: [
            "$\hat{\tau}(\phi_0)$",
            "$1 - \hat{\tau}(\phi_0)$",
            "$\hat{\tau}(\phi_0) \cdot \hat{\tau}(\phi_0)$",
            "$\hat{\tau}(\phi_0) + \hat{\tau}(\phi_0)$"
        ],
        answer: "$1 - \hat{\tau}(\phi_0)$",
        [cite_start]explanation: "The truth value of a negation $\neg \phi_0$ is the opposite of $\phi_0$'s truth value: $\hat{\tau}(\neg \phi_0) = 1 - \hat{\tau}(\phi_0)$[cite: 34].",
    },
    {
        topic: "Semantics of PL",
        question: "If $\phi = (\phi_1 \land \phi_2)$, the truth value $\hat{\tau}(\phi)$ (conjunction) is computed as:",
        options: [
            "$\hat{\tau}(\phi_1) \cdot \hat{\tau}(\phi_2)$",
            "$\hat{\tau}(\phi_1) + \hat{\tau}(\phi_2)$",
            "$1 - (\hat{\tau}(\phi_1) \cdot \hat{\tau}(\phi_2))$",
            "$\min(\hat{\tau}(\phi_1), \hat{\tau}(\phi_2))$"
        ],
        answer: "$\hat{\tau}(\phi_1) \cdot \hat{\tau}(\phi_2)$",
        [cite_start]explanation: "For conjunction, the truth value is the product (multiplication) of the component truth values, representing the Boolean AND operation: $\hat{\tau}(\phi_1 \land \phi_2) = \hat{\tau}(\phi_1) \cdot \hat{\tau}(\phi_2)$[cite: 34].",
    },
    {
        topic: "Semantics of PL",
        question: "If $\phi = (\phi_1 \lor \phi_2)$, the truth value $\hat{\tau}(\phi)$ (disjunction) is computed as:",
        options: [
            "$\hat{\tau}(\phi_1) \cdot \hat{\tau}(\phi_2)$",
            "$\hat{\tau}(\phi_1) + \hat{\tau}(\phi_2)$",
            "$1 - ((1 - \hat{\tau}(\phi_1)) \cdot (1 - \hat{\tau}(\phi_2)))$",
            "$\hat{\tau}(\phi_1) + \hat{\tau}(\phi_2) - (\hat{\tau}(\phi_1) \cdot \hat{\tau}(\phi_2))$"
        ],
        answer: "$1 - ((1 - \hat{\tau}(\phi_1)) \cdot (1 - \hat{\tau}(\phi_2)))$",
        [cite_start]explanation: "The truth value for disjunction is defined as: $\hat{\tau}(\phi_1 \lor \phi_2) = 1 - ((1 - \hat{\tau}(\phi_1)) \cdot (1 - \hat{\tau}(\phi_2)))$[cite: 34]. (Note: This is equivalent to $1$ if either is $1$, and $0$ only if both are $0$).",
    },
    {
        topic: "Semantics of PL",
        question: "We say that an assignment $\tau$ is a **model** of a formula $\phi$, written $\tau \models \phi$, if and only if:",
        options: [
            "$\hat{\tau}(\phi) = 0$.",
            "$\hat{\tau}(\phi) = 1$.",
            "$\phi$ is a propositional variable.",
            "$\phi$ is a valid formula."
        ],
        answer: "$\hat{\tau}(\phi) = 1$.",
        [cite_start]explanation: "We write $\tau \models \phi$ (and we read: $\tau$ is a model of the formula $\phi$; or: $\tau$ satisfies $\phi$) iff $\hat{\tau}(\phi) = 1$[cite: 36].",
    },
    {
        topic: "Semantics of PL",
        question: "A formula $\phi$ is **satisfiable** if, by definition:",
        options: [
            "It is true in every possible assignment.",
            "It is false in every possible assignment.",
            "There exists at least one assignment $\tau$ such that $\tau \models \phi$.",
            "It is logically equivalent to $\neg \phi$."
        ],
        answer: "There exists at least one assignment $\tau$ such that $\tau \models \phi$.",
        [cite_start]explanation: "A formula $\phi$ is satisfiable if, by definition, there exists at least an assignment $\tau$ such that $\tau \models \phi$ (i.e., if there exists at least a model of $\phi$)[cite: 36].",
    },
    {
        topic: "Semantics of PL",
        question: "A formula $\phi$ that is true in every possible assignment is called a **valid formula** or a(n):",
        options: [
            "Contradiction.",
            "Satisfiable formula.",
            "Tautology.",
            "Inconsistent formula."
        ],
        answer: "Tautology.",
        explanation: "A formula $\phi$ is valid if it is true in every possible assignment. [cite_start]Valid formulae are also called tautologies[cite: 37].",
    },
    {
        topic: "Semantics of PL",
        question: "A formula $\phi$ that is neither a tautology nor a contradiction is called a(n):",
        options: [
            "Consistent formula.",
            "Contingent formula.",
            "Equivalent formula.",
            "Logical consequence."
        ],
        answer: "Contingent formula.",
        [cite_start]explanation: "A formula $\phi$ is contingent if it is neither a tautology nor a contradiction[cite: 37].",
    },
    {
        topic: "Semantics of PL",
        question: "Two formulae $\phi_1$ and $\phi_2$ are **semantically equivalent**, written $\phi_1 \equiv \phi_2$, if:",
        options: [
            "They have the same Abstract Syntax Tree.",
            "They have the same truth value in every assignment.",
            "$\phi_1 \models \phi_2$ but $\phi_2 \not\models \phi_1$.",
            "They are both satisfiable."
        ],
        answer: "They have the same truth value in every assignment.",
        [cite_start]explanation: "Two formulae $\phi_1$ and $\phi_2$ are equivalent, written $\phi_1 \equiv \phi_2$, if they have the same truth value in every assignment[cite: 37].",
    },
    {
        topic: "Semantics of PL",
        question: "We say that $\phi$ is a **semantical consequence** of a set of formulae $\Gamma$, written $\Gamma \models \phi$, if:",
        options: [
            "$\Gamma \cup \{\phi\}$ is consistent.",
            "Every model of $\Gamma$ is also a model of $\phi$.",
            "Every model of $\phi$ is also a model of $\Gamma$.",
            "$\phi$ is logically equivalent to a formula in $\Gamma$."
        ],
        answer: "Every model of $\Gamma$ is also a model of $\phi$.",
        [cite_start]explanation: "A formula $\phi$ is a semantical consequence of a set of formulae $\Gamma$ (written $\Gamma \models \phi$) if every model of $\Gamma$ is also a model of $\phi$[cite: 38].",
    },
    {
        topic: "Semantics of PL",
        question: "If $\phi$ is a contradiction, which of the following is true?",
        options: [
            "$\phi$ is satisfiable.",
            "$\neg \phi$ is a contradiction.",
            "$\phi$ is valid.",
            "$\phi$ is not satisfiable."
        ],
        answer: "$\phi$ is not satisfiable.",
        [cite_start]explanation: "A contradiction is a formula that is false in every possible assignment, meaning it has no model, and is therefore not satisfiable[cite: 37, 36].",
    },
    {
        topic: "Semantics of PL",
        question: "A set of formulae $\Gamma$ is **consistent** if, by definition:",
        options: [
            "There exists at least one assignment $\tau$ such that $\tau \models \psi$ for all $\psi \in \Gamma$.",
            "It is a set of valid formulae.",
            "It is a set of satisfiable formulae.",
            "It is not a logical consequence of the empty set."
        ],
        answer: "There exists at least one assignment $\tau$ such that $\tau \models \psi$ for all $\psi \in \Gamma$.",
        [cite_start]explanation: "A set of formulae $\Gamma$ is consistent if there exists at least one assignment $\tau$ that is a model of all formulae in $\Gamma$ (i.e., for all $\psi \in \Gamma$, $\tau \models \psi$)[cite: 39].",
    },
    {
        topic: "Semantics of PL",
        question: "The generalized relation between implications and logical consequence states that $\phi_1, \ldots, \phi_n \models \phi$ if and only if which formula is valid?",
        options: [
            "$(\phi_1 \lor \ldots \lor \phi_n) \rightarrow \phi$",
            "$(\phi_1 \land \ldots \land \phi_n) \rightarrow \phi$",
            "$\phi \rightarrow (\phi_1 \land \ldots \land \phi_n)$",
            "$\phi_1 \leftrightarrow \ldots \leftrightarrow \phi_n$"
        ],
        answer: "$(\phi_1 \land \ldots \land \phi_n) \rightarrow \phi$",
        explanation: "Theorem 77 states that $\phi_1, \ldots, \phi_n \models \phi$ if and only if the formula $((( \phi_1 \land \phi_2) \land \ldots) \land \phi_n) \rightarrow \phi$ is valid. [cite_start]This simplifies to $(\phi_1 \land \ldots \land \phi_n) \rightarrow \phi$[cite: 46].",
    },
    {
        topic: "Semantics of PL",
        question: "The relation between double implication and semantic equivalence states that $\phi_1 \equiv \phi_2$ if and only if which formula is valid?",
        options: [
            "$\phi_1 \rightarrow \phi_2$",
            "$\phi_1 \leftrightarrow \phi_2$",
            "$\phi_1 \land \phi_2$",
            "$\phi_1 \lor \phi_2$"
        ],
        answer: "$\phi_1 \leftrightarrow \phi_2$",
        [cite_start]explanation: "Theorem 78 states that $\phi_1 \equiv \phi_2$ if and only if the formula $(\phi_1 \leftrightarrow \phi_2)$ is valid[cite: 46].",
    },
    {
        topic: "Semantics of PL",
        question: "Given an assignment $\tau$ where $\tau(p)=1$ and $\tau(q)=0$, what is the truth value of the formula $(p \land q)$?",
        options: [
            "1",
            "0",
            "Undefined",
            "Contingent"
        ],
        answer: "0",
        [cite_start]explanation: "$\hat{\tau}(p \land q) = \hat{\tau}(p) \cdot \hat{\tau}(q) = 1 \cdot 0 = 0$[cite: 34].",
    },
    {
        topic: "Semantics of PL",
        question: "Given an assignment $\tau$ where $\tau(p)=1$ and $\tau(q)=0$, what is the truth value of the formula $\neg(p \land q)$?",
        options: [
            "1",
            "0",
            "Undefined",
            "Contingent"
        ],
        answer: "1",
        [cite_start]explanation: "$\hat{\tau}(\neg(p \land q)) = 1 - \hat{\tau}(p \land q) = 1 - (1 \cdot 0) = 1 - 0 = 1$[cite: 34].",
    },
    {
        topic: "Semantics of PL",
        question: "Which of the following formulae is a **contradiction**?",
        options: [
            "$(p \lor \neg p)$",
            "$(p \land p)$",
            "$(p \land \neg p)$",
            "$\neg \neg p$"
        ],
        answer: "$p \land \neg p$",
        [cite_start]explanation: "$p \land \neg p$ is false in every assignment, making it a contradiction[cite: 41].",
    },
    {
        topic: "Semantics of PL",
        question: "The formula $(p \lor \neg p)$ is an example of a:",
        options: [
            "Contradiction.",
            "Contingent formula.",
            "Valid formula (Tautology).",
            "Unsatisfiable formula."
        ],
        answer: "Valid formula (Tautology).",
        [cite_start]explanation: "$p \lor \neg p$ is true in every assignment (Law of Excluded Middle), making it a valid formula[cite: 41].",
    },
    {
        topic: "Semantics of PL",
        question: "If a formula $\phi$ is valid, then $\neg \phi$ must be:",
        options: [
            "Contingent.",
            "Satisfiable.",
            "A tautology.",
            "A contradiction."
        ],
        answer: "A contradiction.",
        [cite_start]explanation: "If $\phi$ is true in all assignments, $\neg \phi$ must be false in all assignments, making it a contradiction[cite: 37].",
    },
    {
        topic: "Semantics of PL",
        question: "To show that $\Gamma \not\models \phi$ (i.e., $\phi$ is **not** a logical consequence of $\Gamma$), what is sufficient to find?",
        options: [
            "A proof that $\phi$ is unsatisfiable.",
            "An assignment that is a model of $\phi$ but not of $\Gamma$.",
            "An assignment that is a model of $\Gamma$ but not of $\phi$.",
            "A proof that $\Gamma$ is consistent."
        ],
        answer: "An assignment that is a model of $\Gamma$ but not of $\phi$.",
        [cite_start]explanation: "To show an 'unconsequence', it is sufficient to find a model of the premises $\Gamma$ that is not a model of the conclusion $\phi$[cite: 38].",
    },
    {
        topic: "Semantics of PL",
        question: "What is the key application of semantic equivalence in computer science mentioned in the notes?",
        options: [
            "Determining if two programs have the same behavior.",
            "Calculating the size of the Abstract Syntax Tree.",
            "Establishing the consistency of a set of clauses.",
            "Proving the Unique Readability Theorem."
        ],
        answer: "Determining if two programs have the same behavior.",
        [cite_start]explanation: "The example (Example 56) uses semantic equivalence ($\equiv$) to check if two formulae (representing two programs) have the same behavior[cite: 41].",
    },
    {
        topic: "Semantics of PL",
        question: "A set of formulae $\Gamma$ that is **not** consistent is called:",
        options: [
            "Valid.",
            "Contingent.",
            "Inconsistent.",
            "Unsatisfiable."
        ],
        answer: "Inconsistent.",
        [cite_start]explanation: "A set of formulae $\Gamma$ is inconsistent if it is not consistent[cite: 39].",
    },
    {
        topic: "Semantics of PL",
        question: "True or False: If a formula $\phi$ is satisfiable, it must also be valid.",
        options: [
            "True",
            "False"
        ],
        answer: "False",
        explanation: "A contingent formula is satisfiable (true in at least one assignment) but not valid (false in at least one assignment). [cite_start]Example: $p$ is satisfiable but not valid[cite: 36, 37].",
    },
    {
        topic: "Semantics of PL",
        question: "What is the truth value of the nullary logical connective **$\bot$** (bottom/falsehood) in any assignment $\tau$?",
        options: [
            "1",
            "0",
            "The truth value of $p$.",
            "Undefined"
        ],
        answer: "0",
        explanation: "$\bot$ is a nullary logical connective (it has arity 0)... The semantics of $\bot$ is that it is false in any assignment. [cite_start]In other words, $\bot$ is a contradiction[cite: 60].",
    },
    {
        topic: "Semantics of PL",
        question: "If a set of formulae $\Gamma$ is inconsistent, what is the intersection of all its models?",
        options: [
            "The universal set $\mathcal{A}$.",
            "The empty set $\emptyset$.",
            "The set of all valid formulae.",
            "The set of all contingent formulae."
        ],
        answer: "The empty set $\emptyset$.",
        [cite_start]explanation: "An inconsistent set has no models (no assignment $\tau$ satisfies all its formulae), so the set of its models is the empty set[cite: 39].",
    },
    {
        topic: "Semantics of PL",
        question: "What does the notation $\models \phi$ represent?",
        options: [
            "$\phi$ is satisfiable.",
            "$\phi$ is a logical consequence of $\neg \phi$.",
            "$\phi$ is a logical consequence of the empty set (i.e., $\phi$ is valid).",
            "$\phi$ is a contradiction."
        ],
        answer: "$\phi$ is a logical consequence of the empty set (i.e., $\phi$ is valid).",
        explanation: "When $n=0$, the notation $\Gamma \models \phi$ allows us to write $\models \phi$ instead of $\{\} \models \phi$. [cite_start]This is consistent with the notation for validity[cite: 38].",
    },
    {
        topic: "Semantics of PL",
        question: "If $\phi$ is a valid formula, how many assignments $\tau$ satisfy $\phi$?",
        options: [
            "None.",
            "Exactly one.",
            "All possible assignments.",
            "At least one, but not all."
        ],
        answer: "All possible assignments.",
        [cite_start]explanation: "A formula $\phi$ is valid if it is true in every possible assignment[cite: 37].",
    },
    {
        topic: "Semantics of PL",
        question: "Which formula is an example of a **contingent formula**?",
        options: [
            "$(p \lor \neg p)$",
            "$(p \land \neg p)$",
            "$(p \land q)$",
            "$(p \rightarrow p)$"
        ],
        answer: "$(p \land q)$",
        explanation: "The formula $(p \land q)$ is true when $p=1, q=1$ and false when $p=0, q=0$. [cite_start]It is neither always true (valid) nor always false (contradiction), so it is contingent[cite: 37].",
    },
    {
        topic: "Semantics of PL",
        question: "What is the truth value of the formula $\neg \neg q$ in a truth assignment $\tau$ where $\tau(q)=0$?",
        options: [
            "1",
            "0",
            "Undefined",
            "Contingent"
        ],
        answer: "0",
        explanation: "$\hat{\tau}(\neg \neg q) = 1 - \hat{\tau}(\neg q) = 1 - (1 - \hat{\tau}(q)) = \hat{\tau}(q)$. [cite_start]Since $\hat{\tau}(q) = \tau(q) = 0$, the final truth value is 0[cite: 35].",
    },
    {
        topic: "Semantics of PL",
        question: "If $\phi_1 \equiv \phi_2$, what does this imply about their logical consequences?",
        options: [
            "$\phi_1 \models \phi_2$ but $\phi_2 \not\models \phi_1$.",
            "$\phi_1 \models \phi_2$ and $\phi_2 \models \phi_1$.",
            "$\phi_1$ is satisfiable and $\phi_2$ is not.",
            "$\phi_1$ and $\phi_2$ must be contingent."
        ],
        answer: "$\phi_1 \models \phi_2$ and $\phi_2 \models \phi_1$.",
        [cite_start]explanation: "Semantic equivalence means they have the same truth value in every assignment, which is equivalent to saying each is a logical consequence of the other ($\phi_1 \equiv \phi_2$ iff $\phi_1 \leftrightarrow \phi_2$ is valid, and $\phi_1 \leftrightarrow \phi_2$ is valid iff $\phi_1 \models \phi_2$ and $\phi_2 \models \phi_1$)[cite: 37, 46].",
    },
    {
        topic: "Semantics of PL",
        question: "To establish a logical consequence $\phi_1, \ldots, \phi_n \models \phi$, one can prove the validity of the formula:",
        options: [
            "$\phi \rightarrow (\phi_1 \land \ldots \land \phi_n)$",
            "$\phi_1 \land \ldots \land \phi_n$",
            "$(\phi_1 \land \ldots \land \phi_n) \rightarrow \phi$",
            "$\phi \land \neg (\phi_1 \land \ldots \land \phi_n)$"
        ],
        answer: "$(\phi_1 \land \ldots \land \phi_n) \rightarrow \phi$",
        [cite_start]explanation: "Theorem 77 states that $\phi_1, \ldots, \phi_n \models \phi$ if and only if $(\phi_1 \land \ldots \land \phi_n) \rightarrow \phi$ is valid[cite: 46].",
    },
    {
        topic: "Semantics of PL",
        question: "True or False: If $\phi$ is satisfiable, the set $\{\phi\}$ is consistent.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "A formula $\phi$ is satisfiable if it has at least one model. A set $\{\phi\}$ is consistent if there is at least one assignment $\tau$ that is a model of all formulae in the set. [cite_start]Thus, if $\phi$ is satisfiable, $\{\phi\}$ is consistent[cite: 36, 39].",
    },
    {
        topic: "Semantics of PL",
        question: "What is the purpose of **translating propositions from English into PL**?",
        options: [
            "To prove the completeness of the logic.",
            "To simplify the language for a general audience.",
            "Clarifying meaning by eliminating possible syntactical ambiguities.",
            "Establishing the identity of the atomic propositions."
        ],
        answer: "Clarifying meaning by eliminating possible syntactical ambiguities.",
        [cite_start]explanation: "The purpose of this modeling could be: clarifying the meaning of a proposition by eliminating possible syntactical ambiguities, checking whether the proposition is valid, etc[cite: 47].",
    },
    {
        topic: "Semantics of PL",
        question: "What is the first step when translating an English proposition into $\mathcal{PL}$?",
        options: [
            "Identify the logical connectives and their order.",
            "Identify the main connective.",
            "Identifying the atomic propositions and associating propositional variables to them.",
            "Determining the truth value of the English proposition."
        ],
        answer: "Identifying the atomic propositions and associating propositional variables to them.",
        [cite_start]explanation: "The first step is to identify the atomic propositions and associating propositional variables to them[cite: 47].",
    },
    {
        topic: "Semantics of PL",
        question: "In the translation process, which of the following is true regarding connectives and atomic propositions?",
        options: [
            "Connectives must be part of the atomic propositions.",
            "The word 'if' must be included in the atomic proposition.",
            "The connectives themselves are not part of the atomic propositions.",
            "Only one propositional variable can be used for a translation."
        ],
        answer: "The connectives themselves are not part of the atomic propositions.",
        explanation: "Pay attention! The connectives themselves are not part of the atomic propositions. [cite_start]For example, the third atomic proposition is not if the subject is interesting[cite: 48].",
    },
    {
        topic: "Semantics of PL",
        question: "If a formula is a conjunction of several formulae, what is the value of $\hat{\tau}$ for that conjunction if only one component is $\hat{\tau}$-false?",
        options: [
            "1",
            "0",
            "Contingent",
            "Undefined"
        ],
        answer: "0",
        explanation: "Conjunction is defined as $\hat{\tau}(\phi_1 \land \phi_2) = \hat{\tau}(\phi_1) \cdot \hat{\tau}(\phi_2)$. [cite_start]If any component is 0 (false), the entire product is 0 (false)[cite: 34].",
    },
    {
        topic: "Semantics of PL",
        question: "What is the term for the function that computes the truth value of a formula $\phi$ in an assignment $\tau$?",
        options: [
            "The interpretation $\tau$.",
            "The size function.",
            "The extended truth assignment $\hat{\tau}$.",
            "The Boolean function $\mathbb{B}$."
        ],
        answer: "The extended truth assignment $\hat{\tau}$.",
        [cite_start]explanation: "The truth value of a formula in an assignment is denoted $\hat{\tau}(\phi)$, which is the extension of the truth assignment $\tau$[cite: 34].",
    },
    {
        topic: "Semantics of PL",
        question: "If a proposition occurs several times, even if using different words, what must be done to ensure an accurate translation?",
        options: [
            "Associate a new propositional variable to each occurrence.",
            "Ignore all but the first occurrence.",
            "Associate the same propositional variable to all occurrences.",
            "Use a different logical connective for each occurrence."
        ],
        answer: "Associate the same propositional variable to all occurrences.",
        [cite_start]explanation: "For an accurate translation, if a proposition occurs several times (even if it does not use exactly the same words), we should associate to all of its occurences the same propositional variable[cite: 48].",
    },
    {
        topic: "Semantics of PL",
        question: "The formula $(p \land \neg q) \lor q$ is satisfiable. What does this mean about the set $\{(p \land \neg q) \lor q\}$?",
        options: [
            "It is inconsistent.",
            "It is contingent.",
            "It is consistent.",
            "It is valid."
        ],
        answer: "It is consistent.",
        explanation: "If a formula is satisfiable, there is an assignment that makes it true. [cite_start]An assignment that makes a formula true is a model for the set containing only that formula, making the set consistent[cite: 36, 39].",
    },
    {
        topic: "Semantics of PL",
        question: "Given $\Gamma = \{p, \neg p\}$, is $\Gamma$ consistent?",
        options: [
            "Yes, because both $p$ and $\neg p$ are satisfiable individually.",
            "No, because there is no assignment $\tau$ that is a model for both $p$ and $\neg p$.",
            "Yes, because the set has a finite number of formulae.",
            "No, because the set contains only one propositional variable."
        ],
        answer: "No, because there is no assignment $\tau$ that is a model for both $p$ and $\neg p$.",
        explanation: "A set is consistent if there is a model for all its formulae. [cite_start]There is no assignment that makes $p$ true and $\neg p$ true simultaneously, so the set is inconsistent[cite: 39].",
    },
    {
        topic: "Semantics of PL",
        question: "If an assignment $\tau$ is not a model of a formula $\phi$, it is written as:",
        options: [
            "$\tau \in \phi$",
            "$\tau \models \phi$",
            "$\tau \not\models \phi$",
            "$\hat{\tau}(\phi) = 1$"
        ],
        answer: "$\tau \not\models \phi$",
        [cite_start]explanation: "We write $\tau \not\models \phi$ (and we read: $\tau$ is not a model of the formula $\phi$; or: $\tau$ does not satisfy $\phi$) iff $\hat{\tau}(\phi) = 0$[cite: 36].",
    },
    {
        topic: "Semantics of PL",
        question: "If $\phi_1 \equiv \phi_2$, then $\neg \phi_1$ is equivalent to:",
        options: [
            "$\phi_2$",
            "$\neg \phi_2$",
            "$\phi_1 \land \phi_2$",
            "$\phi_1 \lor \phi_2$"
        ],
        answer: "$\neg \phi_2$",
        [cite_start]explanation: "If two formulae are equivalent, their negations must also be equivalent, as they will have the same truth value in every assignment[cite: 37].",
    },
];

// NOTE: This array contains 200 questions (40 for each of the first five chapters of Logic for Computer Science).
The 200 questions for the Logic for Computer Science handout are ready, structured into chapters and topics.

Please provide the 40 Set Theory questions (Handout 1) now, and I will combine all 240 questions into the complete questions.js f
