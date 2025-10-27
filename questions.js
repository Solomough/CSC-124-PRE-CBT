/* ** IMPORTANT NOTE: **
    These are SIMULATED questions to make the CBT operational quickly.
    You MUST replace the content of this array with the 240 actual questions 
    from your handouts before deploying. The structure must remain the same:
    {
        topic: "Set Theory" or "Logic Chapter X",
        question: "...",
        options: ["...", "...", "...", "..."],
        answer: "Correct Option Text", 
        explanation: "Summary of why this answer is correct..."
    }
*/

const allQuestions = [
    // --- SET THEORY (Handout 1) - 40 Questions ---
    // (Simulated Q1-Q40)
    {
        topic: "Set Theory",
        question: "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, what is $A \cap B$?",
        options: ["{1, 2, 5, 6}", "{3, 4}", "{1, 2, 3, 4, 5, 6}", "$\emptyset$"],
        answer: "{3, 4}",
        explanation: "The intersection ($A \cap B$) includes elements common to both sets. Both sets share 3 and 4."
    },
    {
        topic: "Set Theory",
        question: "What is the cardinality of the power set of a set A where $|A| = 3$?",
        options: ["3", "6", "8", "9"],
        answer: "8",
        explanation: "The cardinality of the power set of A is $2^{|A|}$. If $|A|=3$, then $2^3 = 8$."
    },
    // ... Add 38 more Set Theory questions here (Q3-Q40) ...
    {
        topic: "Set Theory",
        question: "Which formula represents De Morgan's Law for sets?",
        options: ["$(A \cup B)^c = A^c \cap B^c$", "$(A \cap B) = A^c \cup B^c$", "$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$", "$A \oplus B = (A \setminus B) \cup (B \setminus A)$"],
        answer: "$(A \cup B)^c = A^c \cap B^c$",
        explanation: "De Morgan's First Law states that the complement of the union of two sets is the intersection of their complements."
    },
    
    // --- LOGIC FOR COMPUTER SCIENCE (Chapter 1) - 40 Questions ---
    // (Simulated Q41-Q80)
    {
        topic: "Logic Chapter 1: Introduction",
        question: "A statement that is always true, regardless of the truth values of its components, is called a:",
        options: ["Contradiction", "Contingency", "Tautology", "Atomic proposition"],
        answer: "Tautology",
        explanation: "A Tautology is a compound statement that is true for every possible assignment of truth values to its propositional variables."
    },
    {
        topic: "Logic Chapter 1: Introduction",
        question: "What is the symbolic representation of 'p implies q'?",
        options: ["$p \land q$", "$p \lor q$", "$p \rightarrow q$", "$p \leftrightarrow q$"],
        answer: "$p \rightarrow q$",
        explanation: "The conditional statement 'p implies q' is symbolized by the arrow notation $\rightarrow$."
    },
    // ... Add 38 more Logic Chapter 1 questions here (Q43-Q80) ...
    {
        topic: "Logic Chapter 1: Introduction",
        question: "Which logical operator is analogous to set union?",
        options: ["Conjunction ($\land$)", "Disjunction ($\lor$)", "Negation ($\neg$)", "Implication ($\rightarrow$)"],
        answer: "Disjunction ($\lor$)",
        explanation: "Disjunction ($\lor$) means 'OR' and is equivalent to the set Union ($ \cup$)."
    },

    // --- LOGIC FOR COMPUTER SCIENCE (Chapter 2) - 40 Questions ---
    // (Simulated Q81-Q120)
    {
        topic: "Logic Chapter 2: Propositional Equivalences",
        question: "The distributive law for propositional logic states: $p \land (q \lor r) \equiv$?",
        options: ["$(p \land q) \lor (p \land r)$", "$(p \lor q) \land (p \lor r)$", "$p \land (q \land r)$", "$p \lor (q \lor r)$"],
        answer: "$(p \land q) \lor (p \land r)$",
        explanation: "This is the first form of the Distributive Law, where conjunction distributes over disjunction."
    },
    // ... Add 39 more Logic Chapter 2 questions here (Q82-Q120) ...
    
    // --- LOGIC FOR COMPUTER SCIENCE (Chapter 3) - 40 Questions ---
    // (Simulated Q121-Q160)
    {
        topic: "Logic Chapter 3: Normal Forms",
        question: "What is the acronym for Disjunctive Normal Form?",
        options: ["CNF", "DNF", "PDA", "TLA"],
        answer: "DNF",
        explanation: "DNF stands for Disjunctive Normal Form, where a formula is a disjunction of conjunctive clauses."
    },
    // ... Add 39 more Logic Chapter 3 questions here (Q122-Q160) ...

    // --- LOGIC FOR COMPUTER SCIENCE (Chapter 4) - 40 Questions ---
    // (Simulated Q161-Q200)
    {
        topic: "Logic Chapter 4: Rules of Inference",
        question: "The Rule of Inference 'Modus Ponens' is based on which tautology?",
        options: ["$((p \rightarrow q) \land \neg q) \rightarrow \neg p$", "$((p \rightarrow q) \land p) \rightarrow q$", "$((p \lor q) \land \neg p) \rightarrow q$", "$((p \land q) \rightarrow p)$"],
        answer: "$((p \rightarrow q) \land p) \rightarrow q$",
        explanation: "Modus Ponens means 'the way that affirms by affirming': If $p \rightarrow q$ is true, and $p$ is true, then $q$ must be true."
    },
    // ... Add 39 more Logic Chapter 4 questions here (Q162-Q200) ...

    // --- LOGIC FOR COMPUTER SCIENCE (Chapter 5) - 40 Questions ---
    // (Simulated Q201-Q240)
    {
        topic: "Logic Chapter 5: Predicate Logic",
        question: "The symbol $\forall$ is known as the:",
        options: ["Existential Quantifier", "Universal Quantifier", "Conjunctive Operator", "Negation Operator"],
        answer: "Universal Quantifier",
        explanation: "The Universal Quantifier ($\forall$) reads as 'for all' or 'for every' and is used in Predicate Logic."
    },
    {
        topic: "Logic Chapter 5: Predicate Logic",
        question: "Which of the following is NOT a proposition?",
        options: ["It is raining.", "What is your name?", "The sun is a star.", "$2+2=4$"],
        answer: "What is your name?",
        explanation: "A proposition must be a declarative sentence that is either true or false. A question is not a proposition."
    },
    // ... Add 38 more Logic Chapter 5 questions here (Q203-Q240) ...
    {
        topic: "Logic Chapter 5: Predicate Logic",
        question: "If P(x) is 'x > 3', what is the truth value of $\exists x P(x)$ in the domain of all integers?",
        options: ["True", "False", "Undefined", "Depends on x"],
        answer: "True",
        explanation: "The existential quantifier ($\exists$) means 'there exists'. Since integers like 4, 5, etc., are greater than 3, the statement is true."
    }
];

// Verify the count (Should be 240)
console.log("Total simulated questions available:", allQuestions.length);
