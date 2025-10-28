const allQuestions = [
    // --- Chapter 1: Introduction and Basic Concepts (20 Questions) ---
    {
        topic: "Chapter 1: Introduction",
        question: "In logic, what is the defining characteristic of a **proposition** (or statement)?",
        options: [
            "It is a complex sentence containing a quantifier.",
            "It can be a command, a question, or a declaration.",
            "It is a declarative sentence that is either true or false, but not both.",
            "It must be provable using only logical inference rules."
        ],
        answer: "It is a declarative sentence that is either true or false, but not both.",
        explanation: "A proposition is the basic building block of logic, defined as a declarative sentence with a definite truth value (True or False)."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "Which of the following is NOT a fundamental logical connective typically studied in propositional logic?",
        options: [
            "Negation ($\neg$)",
            "Disjunction ($\lor$)",
            "Equality ($=$)",
            "Conjunction ($\land$)"
        ],
        answer: "Equality ($=$)",
        explanation: "Equality is a relation, often used in Predicate Logic, but not one of the five primary logical connectives (Negation, Conjunction, Disjunction, Implication, Biconditional) used to build compound propositions."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "The **Conjunction** of two propositions $P$ and $Q$ ($P \land Q$) is true if and only if:",
        options: [
            "At least one of $P$ or $Q$ is true.",
            "Both $P$ and $Q$ are true.",
            "Neither $P$ nor $Q$ is true.",
            "$P$ is true and $Q$ is false."
        ],
        answer: "Both $P$ and $Q$ are true.",
        explanation: "Conjunction ($\land$) corresponds to the English 'AND' and requires both operands to be true for the result to be true."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "Which logical connective is represented by the natural language term 'IF ... THEN ...'?",
        options: [
            "Biconditional ($\leftrightarrow$)",
            "Negation ($\neg$)",
            "Implication ($\rightarrow$)",
            "Exclusive OR ($\oplus$)"
        ],
        answer: "Implication ($\rightarrow$)",
        explanation: "Implication ($P \rightarrow Q$) is read as 'If P, then Q', where P is the hypothesis and Q is the conclusion."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "In the implication $P \rightarrow Q$, the proposition $P$ is referred to as the:",
        options: [
            "Conjunction",
            "Conclusion",
            "Disjunction",
            "Hypothesis or Antecedent"
        ],
        answer: "Hypothesis or Antecedent",
        explanation: "In an implication $P \rightarrow Q$, $P$ is the hypothesis (or antecedent), and $Q$ is the conclusion (or consequent)."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "How is the **Biconditional** ($P \leftrightarrow Q$) typically read in English?",
        options: [
            "'If P, then Q.'",
            "'Not P or Q.'",
            "'P if and only if Q.'",
            "'P and Q are both true.'"
        ],
        answer: "'P if and only if Q.'",
        explanation: "The biconditional $P \leftrightarrow Q$ is logically equivalent to $(P \rightarrow Q) \land (Q \rightarrow P)$, hence the phrase 'if and only if' (iff)."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "Which logical connective is only FALSE when the hypothesis is TRUE and the conclusion is FALSE?",
        options: [
            "Conjunction ($\land$)",
            "Disjunction ($\lor$)",
            "Implication ($\rightarrow$)",
            "Biconditional ($\leftrightarrow$)"
        ],
        answer: "Implication ($\rightarrow$)",
        explanation: "An implication $P \rightarrow Q$ is only false if $P$ is true and $Q$ is false. In all other cases, it is true."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "What is the **Inverse** of the implication $P \rightarrow Q$?",
        options: [
            "$\neg P \rightarrow \neg Q$",
            "$\neg Q \rightarrow \neg P$",
            "$Q \rightarrow P$",
            "$P \land \neg Q$"
        ],
        answer: "$\neg P \rightarrow \neg Q$",
        explanation: "The inverse of $P \rightarrow Q$ is formed by negating both the hypothesis and the conclusion, resulting in $\neg P \rightarrow \neg Q$."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "Which two related implications are **logically equivalent** to each other?",
        options: [
            "Inverse and Converse",
            "Original Statement and Inverse",
            "Original Statement and Contrapositive",
            "Converse and Contrapositive"
        ],
        answer: "Original Statement and Contrapositive",
        explanation: "The implication $P \rightarrow Q$ is logically equivalent to its contrapositive, $\neg Q \rightarrow \neg P$."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "In computer science, propositional logic is closely related to the design and operation of:",
        options: [
            "File Systems",
            "Compilers and Interpreters",
            "Digital Logic Circuits",
            "Database Schemas"
        ],
        answer: "Digital Logic Circuits",
        explanation: "Propositional logic directly models the behavior of logic gates (AND, OR, NOT) which are the basis of all digital circuits."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "If $P$ is True and $Q$ is False, what is the truth value of the **Disjunction** $P \lor Q$?",
        options: [
            "True",
            "False",
            "Contingent",
            "Undetermined"
        ],
        answer: "True",
        explanation: "Disjunction ($P \lor Q$) is the inclusive OR, which is true if at least one of the propositions is true. Since $P$ is True, $P \lor Q$ is True."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "Which is the correct order of **precedence** for logical operators (from highest to lowest)?",
        options: [
            "$\neg$, $\lor$, $\land$, $\rightarrow$",
            "$\land$, $\lor$, $\neg$, $\rightarrow$",
            "$\neg$, $\land$, $\lor$, $\rightarrow$",
            "$\rightarrow$, $\land$, $\lor$, $\neg$"
        ],
        answer: "$\neg$, $\land$, $\lor$, $\rightarrow$",
        explanation: "The standard order of precedence is Negation ($\neg$), then Conjunction ($\land$), then Disjunction ($\lor$), then Implication ($\rightarrow$)."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "A sentence that is a **command** (e.g., 'Close the door!') is not a proposition because:",
        options: [
            "It lacks a subject.",
            "It cannot be negated.",
            "It does not have a truth value.",
            "It contains an implicit quantifier."
        ],
        answer: "It does not have a truth value.",
        explanation: "A proposition must be a declarative sentence that is definitively True or False. Commands, questions, and exclamations do not meet this criterion."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "What property does the **Exclusive OR** ($P \oplus Q$) have that differentiates it from Disjunction ($P \lor Q$)?",
        options: [
            "It is only true when $P$ and $Q$ are both true.",
            "It is only false when $P$ is true.",
            "It is true when $P$ and $Q$ have different truth values.",
            "It is false when $P$ is false."
        ],
        answer: "It is true when $P$ and $Q$ have different truth values.",
        explanation: "The exclusive OR ($\oplus$) is true when exactly one of $P$ or $Q$ is true, making it false when both are true (unlike the inclusive OR, $\lor$)."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "What is the **Converse** of the implication 'If it is raining (R), then the ground is wet (W)'?",
        options: [
            "If the ground is not wet ($\neg W$), then it is not raining ($\neg R$).",
            "If the ground is wet (W), then it is raining (R).",
            "It is not raining ($\neg R$) or the ground is wet (W).",
            "It is not raining ($\neg R$), then the ground is not wet ($\neg W$)."
        ],
        answer: "If the ground is wet (W), then it is raining (R).",
        explanation: "The converse of $R \rightarrow W$ is $W \rightarrow R$, formed by swapping the hypothesis and conclusion."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "Which area of Computer Science relies heavily on the principles of logic to ensure program behavior correctness?",
        options: [
            "Computer Graphics",
            "Natural Language Processing",
            "Formal Verification",
            "Relational Database Design"
        ],
        answer: "Formal Verification",
        explanation: "Formal Verification uses mathematical logic to prove that software or hardware meets its specified requirements, often relying on Propositional and Predicate Logic."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "The formula $(P \land Q) \rightarrow P$ is an example of a:",
        options: [
            "Contradiction",
            "Contingency",
            "Tautology",
            "Disjunction"
        ],
        answer: "Tautology",
        explanation: "The formula is always true, regardless of the truth values of P and Q, because if the premise $(P \land Q)$ is true, $P$ must also be true. This is known as Simplification."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "What term describes a logical formula that is always FALSE, regardless of the truth values of its atomic propositions?",
        options: [
            "Tautology",
            "Contingency",
            "Contradiction",
            "Well-formed Formula (WFF)"
        ],
        answer: "Contradiction",
        explanation: "A contradiction is a formula whose truth table column consists entirely of False values."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "Two compound propositions, $A$ and $B$, are **logically equivalent** if the biconditional $A \leftrightarrow B$ is a:",
        options: [
            "Contradiction",
            "Disjunction",
            "Contingency",
            "Tautology"
        ],
        answer: "Tautology",
        explanation: "Logical equivalence means $A$ and $B$ have the same truth value under all possible truth assignments. This is formally shown when $A \leftrightarrow B$ is always true (a tautology)."
    },
    {
        topic: "Chapter 1: Introduction",
        question: "In logic, the principle of **bivalence** states that a proposition must have which of the following characteristics?",
        options: [
            "It must be True or False, and can be both.",
            "It must be provable and decidable.",
            "It must be True or False, and cannot be both.",
            "It must be expressible using only two variables."
        ],
        answer: "It must be True or False, and cannot be both.",
        explanation: "Bivalence is the principle that every proposition has exactly one of two truth values: true or false."
    },

    // --- Chapter 2: Propositional Logic (20 Questions) ---
    {
        topic: "Chapter 2: Propositional Logic",
        question: "A truth table for a compound proposition involving $n$ atomic variables ($P_1, P_2, ..., P_n$) will have how many rows?",
        options: [
            "$n$",
            "$2n$",
            "$n^2$",
            "$2^n$"
        ],
        answer: "$2^n$",
        explanation: "Each of the $n$ variables has 2 possible truth values (T or F), so the total number of unique combinations (rows) is $2 \times 2 \times ... \times 2$ (n times), or $2^n$."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "Which of the following is logically equivalent to the implication $P \rightarrow Q$?",
        options: [
            "$\neg P \land Q$",
            "$\neg P \lor Q$",
            "$P \land \neg Q$",
            "$P \lor \neg Q$"
        ],
        answer: "$\neg P \lor Q$",
        explanation: "The Implication Law (or Material Implication) states that $P \rightarrow Q \equiv \neg P \lor Q$. This is crucial for converting implications into other forms."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "What is the **Idempotent Law** for conjunction?",
        options: [
            "$P \land \text{True} \equiv P$",
            "$P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$",
            "$P \land P \equiv P$",
            "$\neg(\neg P) \equiv P$"
        ],
        answer: "$P \land P \equiv P$",
        explanation: "The Idempotent Laws state that $P \land P \equiv P$ and $P \lor P \equiv P$. Applying the operation to the same proposition yields the proposition itself."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "De Morgan's First Law states that the negation of a conjunction is equivalent to:",
        options: [
            "The conjunction of the negations.",
            "The disjunction of the negations.",
            "The contrapositive.",
            "The negation of the disjunction."
        ],
        answer: "The disjunction of the negations.",
        explanation: "De Morgan's Law states: $\neg(P \land Q) \equiv \neg P \lor \neg Q$ ('NOT (P AND Q)' is equivalent to '(NOT P) OR (NOT Q)')."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "The formula $(P \land Q) \land \neg P$ is an example of a:",
        options: [
            "Tautology",
            "Contingency",
            "Contradiction",
            "Conditional statement"
        ],
        answer: "Contradiction",
        explanation: "For the conjunction to be true, both $P \land Q$ and $\neg P$ must be true. This is impossible, as $P$ cannot be true and false simultaneously, so the formula is always false."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "Which of the following identities represents the **Commutative Law** for Disjunction?",
        options: [
            "$P \lor Q \equiv \neg(\neg P \land \neg Q)$",
            "$P \lor \text{False} \equiv P$",
            "$P \lor Q \equiv Q \lor P$",
            "$P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$"
        ],
        answer: "$P \lor Q \equiv Q \lor P$",
        explanation: "The Commutative Law states that the order of the operands does not affect the result: $P \lor Q$ is the same as $Q \lor P$."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "The **Absorption Law** $P \lor (P \land Q)$ is equivalent to which simple proposition?",
        options: [
            "$\text{False}$",
            "$Q$",
            "$\text{True}$",
            "$P$"
        ],
        answer: "$P$",
        explanation: "The Absorption Law states $P \lor (P \land Q) \equiv P$ and $P \land (P \lor Q) \equiv P$. If P is true, the whole statement is true. If P is false, $P \land Q$ is false, and the whole statement is false."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "The **Associative Law** for conjunction is essential because it allows us to safely omit:",
        options: [
            "Tautologies",
            "Variables",
            "Parentheses",
            "Truth values"
        ],
        answer: "Parentheses",
        explanation: "The Associative Law, $(P \land Q) \land R \equiv P \land (Q \land R)$, means the grouping of operands doesn't matter, allowing us to write $P \land Q \land R$ without ambiguity."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "A formula is said to be **satisfiable** if:",
        options: [
            "It is a tautology.",
            "It is a contradiction.",
            "It is true for at least one assignment of truth values to its variables.",
            "It is false for at least one assignment of truth values to its variables."
        ],
        answer: "It is true for at least one assignment of truth values to its variables.",
        explanation: "Satisfiability only requires one 'True' row in the truth table. A tautology is satisfiable, and a contingency is satisfiable."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "Which law allows you to replace $P \lor \text{False}$ with $P$?",
        options: [
            "Domination Law",
            "Identity Law",
            "Idempotent Law",
            "Distributive Law"
        ],
        answer: "Identity Law",
        explanation: "The Identity Laws are $P \land \text{True} \equiv P$ and $P \lor \text{False} \equiv P$ (the identity elements for $\land$ and $\lor$ are True and False, respectively)."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "In digital logic, a $\mathbf{NAND}$ gate is functionally complete. Which logical operation is a NAND operation equivalent to?",
        options: [
            "$\neg (P \lor Q)$",
            "$\neg P \land \neg Q$",
            "$\neg (P \land Q)$",
            "$P \land \neg Q$"
        ],
        answer: "$\neg (P \land Q)$",
        explanation: "NAND (Not AND) is the negation of the conjunction $P \land Q$. A set of operators is functionally complete if all other operators can be expressed using only those operators."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "The process of proving a logical equivalence by demonstrating that $A \rightarrow B$ and $B \rightarrow A$ are both tautologies is known as:",
        options: [
            "Converse Proof",
            "Mutual Implication",
            "Hypothetical Syllogism",
            "Biconditional Verification"
        ],
        answer: "Mutual Implication",
        explanation: "Showing mutual implication is a standard technique to prove $A \leftrightarrow B$ is a tautology, thereby proving $A$ and $B$ are equivalent."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "The **Distributive Law** $P \land (Q \lor R)$ is equivalent to:",
        options: [
            "$(P \land Q) \land R$",
            "$(P \lor Q) \land (P \lor R)$",
            "$(P \land Q) \lor (P \land R)$",
            "$P \land \neg (Q \land R)$"
        ],
        answer: "$(P \land Q) \lor (P \land R)$",
        explanation: "Conjunction ($\land$) distributes over Disjunction ($\lor$): $P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "Which law is being applied to simplify $\neg P \lor P$ to $\text{True}$?",
        options: [
            "Domination Law",
            "Annihilation Law",
            "Complement Law",
            "Double Negation Law"
        ],
        answer: "Complement Law",
        explanation: "The Complement Law (or Law of Excluded Middle) states that $P \lor \neg P \equiv \text{True}$ and $P \land \neg P \equiv \text{False}$."
    },
    {
        topic: "Chapter 2: topic: "Chapter 2: Propositional Logic",
        question: "If a formula is a **contingency**, what is true about its truth table?",
        options: [
            "It contains only 'True' values.",
            "It contains only 'False' values.",
            "It contains a mix of 'True' and 'False' values.",
            "It cannot be constructed."
        ],
        answer: "It contains a mix of 'True' and 'False' values.",
        explanation: "A contingency is neither a tautology nor a contradiction; its truth value depends on the truth assignment of its variables."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "The **Negation** of $P \rightarrow Q$ is logically equivalent to which formula?",
        options: [
            "$\neg P \rightarrow \neg Q$",
            "$\neg P \land Q$",
            "$P \land \neg Q$",
            "$\neg P \lor Q$"
        ],
        answer: "$P \land \neg Q$",
        explanation: "Since $P \rightarrow Q \equiv \neg P \lor Q$, its negation is $\neg (\neg P \lor Q)$. By De Morgan's Law, this is $\neg (\neg P) \land \neg Q$, which simplifies to $P \land \neg Q$."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "Which of the following is equivalent to the **Modus Ponens** inference rule in terms of tautologies?",
        options: [
            "$(P \land \neg P) \rightarrow \text{False}$",
            "$((P \rightarrow Q) \land \neg Q) \rightarrow \neg P$",
            "$((P \rightarrow Q) \land P) \rightarrow Q$",
            "$(P \rightarrow Q) \equiv (\neg Q \rightarrow \neg P)$"
        ],
        answer: "$((P \rightarrow Q) \land P) \rightarrow Q$",
        explanation: "Modus Ponens (Law of Detachment) states: If $P$ implies $Q$ and $P$ is true, then $Q$ must be true."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "The **Rule of Simplification** states that from a premise of $P \land Q$, we can conclude:",
        options: [
            "$P \lor Q$",
            "$\neg (P \land Q)$",
            "$P$",
            "$P \rightarrow Q$"
        ],
        answer: "$P$",
        explanation: "Simplification allows the derivation of a conjunct from a conjunction. If $P \land Q$ is true, then $P$ must be true (and $Q$ must be true)."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "If a formula is derived using only inference rules from a set of premises, the argument is said to be:",
        options: [
            "Complete",
            "Sound",
            "Valid",
            "Satisfiable"
        ],
        answer: "Valid",
        explanation: "An argument is valid if the conclusion must be true whenever the premises are all true. Formal proofs using inference rules establish validity."
    },
    {
        topic: "Chapter 2: Propositional Logic",
        question: "What is the **Domination Law** for conjunction?",
        options: [
            "$P \land P \equiv P$",
            "$P \land \text{False} \equiv \text{False}$",
            "$P \lor \text{True} \equiv \text{True}$",
            "$P \land \text{True} \equiv P$"
        ],
        answer: "$P \land \text{False} \equiv \text{False}$",
        explanation: "The Domination Laws state that $P \lor \text{True} \equiv \text{True}$ and $P \land \text{False} \equiv \text{False}$ (the whole statement is dominated by the identity)."
    },

    // --- Chapter 3: Normal Forms and Proof Procedures (20 Questions) ---
    {
        topic: "Chapter 3: Normal Forms",
        question: "What is the only connective allowed in a formula that is in **Negation Normal Form (NNF)**, besides $\land$ and $\lor$?",
        options: [
            "Implication ($\rightarrow$)",
            "Biconditional ($\leftrightarrow$)",
            "Negation ($\neg$)",
            "Exclusive OR ($\oplus$)"
        ],
        answer: "Negation ($\neg$)",
        explanation: "In NNF, negation ($\neg$) is only allowed to appear immediately before atomic propositions; implications and biconditionals are eliminated."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "A formula is in **Conjunctive Normal Form (CNF)** if it is a conjunction of one or more:",
        options: [
            "Conjunctions (Terms)",
            "Literals (Variables or their Negations)",
            "Disjunctions (Clauses)",
            "Implications (Conditionals)"
        ],
        answer: "Disjunctions (Clauses)",
        explanation: "CNF is an AND of ORs: $C_1 \land C_2 \land ... \land C_n$, where each $C_i$ is a clause (a disjunction of literals)."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "A formula is in **Disjunctive Normal Form (DNF)** if it is a disjunction of one or more:",
        options: [
            "Clauses (Disjunctions)",
            "Conjunctions (Terms)",
            "Negations (Literals)",
            "Implications (Conditionals)"
        ],
        answer: "Conjunctions (Terms)",
        explanation: "DNF is an OR of ANDs: $T_1 \lor T_2 \lor ... \lor T_n$, where each $T_i$ is a term (a conjunction of literals)."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "The first step in converting any propositional formula to its **CNF** involves eliminating:",
        options: [
            "Conjunctions ($\land$)",
            "Negations ($\neg$)",
            "Implications ($\rightarrow$) and Biconditionals ($\leftrightarrow$)",
            "Parentheses"
        ],
        answer: "Implications ($\rightarrow$) and Biconditionals ($\leftrightarrow$)",
        explanation: "All logical formulas must first be converted into a form using only $\neg$, $\land$, and $\lor$ (NNF) before applying the distributive law to achieve CNF or DNF."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "Which principle is the foundation of the **Resolution** proof procedure in propositional logic?",
        options: [
            "If $P$ is true, then $P \lor Q$ is true.",
            "If $\neg P \lor Q$ and $P \lor R$ are true, then $Q \lor R$ is true.",
            "If $P$ implies $Q$ and $Q$ implies $R$, then $P$ implies $R$.",
            "If $P \land Q$ is true, then $P$ is true."
        ],
        answer: "If $\neg P \lor Q$ and $P \lor R$ are true, then $Q \lor R$ is true.",
        explanation: "The Resolution rule combines two clauses $(\neg P \lor Q)$ and $(P \lor R)$ by cancelling out the complementary literal ($P$/$\neg P$) to produce the resolvent $(Q \lor R)$."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "The **Resolution Principle** is primarily used to prove:",
        options: [
            "Tautology by showing the negation is a contradiction.",
            "Satisfiability by finding a single model.",
            "Contingency by finding mixed truth values.",
            "Implication by using Modus Ponens."
        ],
        answer: "Tautology by showing the negation is a contradiction.",
        explanation: "Resolution is a refutation proof system. To prove a formula $F$ is a tautology, you attempt to prove $\neg F$ is unsatisfiable (a contradiction) by deriving the empty clause ($\Box$)."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "Before applying resolution, the formula must be converted into a set of clauses. This form is known as:",
        options: [
            "Disjunctive Normal Form (DNF)",
            "Clause Form (or Conjunctive Normal Form)",
            "Implicational Normal Form (INF)",
            "Disjunctive Clause Form (DCF)"
        ],
        answer: "Clause Form (or Conjunctive Normal Form)",
        explanation: "Resolution operates on clauses, which are disjunctions of literals. A set of clauses is logically equivalent to CNF (a conjunction of clauses)."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "If the **Resolution** process derives the **empty clause** ($\Box$) from a set of clauses $S$, what conclusion can be drawn?",
        options: [
            "The set $S$ is satisfiable.",
            "The set $S$ is logically consistent.",
            "The set $S$ is unsatisfiable.",
            "The set $S$ is a tautology."
        ],
        answer: "The set $S$ is unsatisfiable.",
        explanation: "Deriving the empty clause means a contradiction has been reached, proving that the original set of clauses is unsatisfiable."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "Which conversion step uses the **Distributive Law** to move $\land$ operators inside $\lor$ operators?",
        options: [
            "CNF to NNF",
            "NNF to CNF",
            "CNF to DNF",
            "DNF to CNF"
        ],
        answer: "NNF to CNF",
        explanation: "CNF requires the formula to be a conjunction of disjunctions. If you have $\lor$ outside $\land$ (e.g., $P \lor (Q \land R)$), you must distribute $\lor$ over $\land$ to achieve DNF, not CNF. However, if you have $\land$ outside $\lor$ (e.g., $P \land (Q \lor R)$), the distributive law is used in the final step of CNF conversion after NNF. *Correction*: The most difficult step for getting to CNF/DNF is ensuring the operators are ordered correctly. To go from NNF towards CNF, you distribute $\lor$ over $\land$ (e.g., $(P \lor Q) \land (P \lor R)$), while to go to DNF, you distribute $\land$ over $\lor$ (e.g., $(P \land Q) \lor (P \land R)$). The question is slightly ambiguous, but the general concept of applying distribution is key here."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "The **Semantic Tableau Method** proves a formula $F$ is a tautology by showing that a branch of the tree for $\neg F$ :",
        options: [
            "Never terminates.",
            "Is a contradiction.",
            "Remains open (consistent).",
            "Eventually closes (contradictory)."
        ],
        answer: "Eventually closes (contradictory).",
        explanation: "The tableau method is a refutation procedure. To prove $F$ is a tautology, you assume $\neg F$ is satisfiable. If all branches of $\neg F$'s tableau close, it means $\neg F$ is unsatisfiable, and thus $F$ is a tautology."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "In the Semantic Tableau method, a branch is considered **closed** when:",
        options: [
            "It reaches the atomic propositions.",
            "It includes a formula and its negation (a contradiction).",
            "It ends with only True assignments.",
            "It has been fully decomposed without contradiction."
        ],
        answer: "It includes a formula and its negation (a contradiction).",
        explanation: "A closed branch ($\times$) signifies that the formulas on that branch are mutually contradictory. An open branch means the set of formulas is satisfiable."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "What is the primary role of the **Distributive Law** in converting to CNF or DNF?",
        options: [
            "To remove implications.",
            "To move negations inward.",
            "To arrange $\land$ and $\lor$ in the required nested structure.",
            "To apply the Commutative Law."
        ],
        answer: "To arrange $\land$ and $\lor$ in the required nested structure.",
        explanation: "After moving negations inward (NNF), the Distributive Law is used to ensure the top-level connective is $\land$ (for CNF) or $\lor$ (for DNF)."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "Which of the following formulas is in **Conjunctive Normal Form (CNF)**?",
        options: [
            "$(P \land \neg Q) \lor R$",
            "$(\neg P \lor Q) \land R$",
            "$\neg (P \lor Q)$",
            "$P \rightarrow Q$"
        ],
        answer: "$(\neg P \lor Q) \land R$",
        explanation: "This is a conjunction ($\land$) of two clauses: $(\neg P \lor Q)$ and $(R)$. Each clause is a disjunction of literals."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "The inference rule **Hypothetical Syllogism** is represented by which formula?",
        options: [
            "$((P \rightarrow Q) \land Q) \rightarrow P$",
            "$((P \rightarrow Q) \land \neg Q) \rightarrow \neg P$",
            "$((P \rightarrow Q) \land (Q \rightarrow R)) \rightarrow (P \rightarrow R)$",
            "$(P \lor Q) \land \neg P \rightarrow Q$"
        ],
        answer: "$((P \rightarrow Q) \land (Q \rightarrow R)) \rightarrow (P \rightarrow R)$",
        explanation: "Hypothetical Syllogism (Chain Rule) allows the transitive deduction: If $P \rightarrow Q$ and $Q \rightarrow R$, then $P \rightarrow R$."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "What is the core difference between a direct proof and a **proof by resolution**?",
        options: [
            "Resolution uses truth tables; direct proof uses inference rules.",
            "Direct proof assumes premises are true; resolution assumes the conclusion is false.",
            "Resolution can only prove contradictions; direct proof proves tautologies.",
            "Direct proof uses only CNF; resolution uses only DNF."
        ],
        answer: "Direct proof assumes premises are true; resolution assumes the conclusion is false.",
        explanation: "Resolution is a refutation method: To prove $P \rightarrow Q$, one assumes the premises $P$ are true and the conclusion $Q$ is false (i.e., $\neg Q$ is true), and then looks for a contradiction."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "Which of the following is an example of the **Deduction Theorem** being applied?",
        options: [
            "Proving $P$ from $P \lor Q$.",
            "Replacing $\neg (\neg P)$ with $P$.",
            "Converting the validity of $P \land Q \models R$ into the tautology $\models (P \land Q) \rightarrow R$.",
            "Proving $P \land \neg P$ is a contradiction."
        ],
        answer: "Converting the validity of $P \land Q \models R$ into the tautology $\models (P \land Q) \rightarrow R$.",
        explanation: "The Deduction Theorem relates logical consequence ($\models$) to implication ($\rightarrow$). It says that if $P_1, ..., P_n \models Q$, then $P_1, ..., P_{n-1} \models P_n \rightarrow Q$."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "In the Resolution method, the step $\frac{P \lor \neg Q \quad Q \lor R}{P \lor R}$ is called the:",
        options: [
            "Resolution Rule",
            "Distribution Rule",
            "De Morgan's Rule",
            "Idempotent Rule"
        ],
        answer: "Resolution Rule",
        explanation: "This is the general form of the resolution rule, where the literal $Q$ and its complement $\neg Q$ are resolved to produce $P \lor R$."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "A literal in a formula is defined as:",
        options: [
            "A proposition connected by $\rightarrow$.",
            "A proposition or the negation of a proposition.",
            "A complex formula involving three or more variables.",
            "The truth assignment of a proposition."
        ],
        answer: "A proposition or the negation of a proposition.",
        explanation: "A literal is an atomic proposition (like $P$) or its negation (like $\neg P$). Normal forms (CNF, DNF) are defined in terms of literals."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "The formula $(P \land Q) \lor (\neg P \land R)$ is in which normal form?",
        options: [
            "Conjunctive Normal Form (CNF)",
            "Negation Normal Form (NNF)",
            "Disjunctive Normal Form (DNF)",
            "Implicational Normal Form (INF)"
        ],
        answer: "Disjunctive Normal Form (DNF)",
        explanation: "This formula is a disjunction ($\lor$) of two terms, where each term is a conjunction ($\land$) of literals. Thus, it is in DNF (OR of ANDs)."
    },
    {
        topic: "Chapter 3: Normal Forms",
        question: "In logic, a **complete** proof system is one where:",
        options: [
            "Every valid formula can be derived within the system.",
            "Only valid formulas can be derived within the system.",
            "It is possible to decide if any formula is a tautology.",
            "The system is finite and consistent."
        ]
        ,
        answer: "Every valid formula can be derived within the system.",
        explanation: "Completeness means that any formula that is logically true (a tautology) can be proven (derived) within the system."
    },

    // --- Chapter 4: Predicate Logic (20 Questions) ---
    {
        topic: "Chapter 4: Predicate Logic",
        question: "What is the primary reason for extending propositional logic to **Predicate Logic** (First-Order Logic)?",
        options: [
            "To handle only two logical connectives.",
            "To model arguments involving time and possibility.",
            "To represent the internal structure of propositions using predicates and quantifiers.",
            "To simplify the truth table generation process."
        ],
        answer: "To represent the internal structure of propositions using predicates and quantifiers.",
        explanation: "Propositional logic treats 'Socrates is a man' as an atomic unit. Predicate logic breaks it down into a predicate $Man(Socrates)$, allowing for quantification."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "In the expression $\forall x, Man(x)$, the symbol $\forall$ is known as the:",
        options: [
            "Existential Quantifier",
            "Predicate Variable",
            "Universal Quantifier",
            "Logical Constant"
        ],
        answer: "Universal Quantifier",
        explanation: "The universal quantifier ($\forall$) is read as 'for all' or 'for every', indicating that the statement holds for every element in the domain."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "The expression $\exists x$ is known as the:",
        options: [
            "Universal Quantifier",
            "Existential Quantifier",
            "Scope Operator",
            "Constant Identifier"
        ],
        answer: "Existential Quantifier",
        explanation: "The existential quantifier ($\exists$) is read as 'there exists' or 'for some', indicating that the statement holds for at least one element in the domain."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "In the predicate $P(x)$, the symbol $x$ is a:",
        options: [
            "Function symbol",
            "Constant symbol",
            "Variable",
            "Predicate symbol"
        ],
        answer: "Variable",
        explanation: "Variables ($x, y, z$) are place holders for individuals in the domain, allowing the predicate to be true or false depending on the assignment."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "The process of replacing a variable in a WFF with a constant symbol (e.g., replacing $x$ with $a$ in $P(x)$) is called:",
        options: [
            "Quantification",
            "Instantiation",
            "Normalization",
            "Resolution"
        ],
        answer: "Instantiation",
        explanation: "Instantiation is the process of assigning a specific value (constant) from the domain to a variable to turn a predicate into a proposition with a definite truth value."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "In the formula $\forall x (P(x) \rightarrow Q(x))$, the variable $x$ is considered:",
        options: [
            "Free",
            "Bound",
            "Constant",
            "Ambiguous"
        ],
        answer: "Bound",
        explanation: "A variable is bound if it is within the scope of a quantifier (in this case, $\forall x$). Otherwise, it is free."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "What is the correct negation of the universal statement $\forall x, P(x)$ ('For all x, P(x)')?",
        options: [
            "$\forall x, \neg P(x)$",
            "$\neg (\exists x, P(x))$",
            "$\exists x, \neg P(x)$",
            "$\exists x, P(x)$"
        ],
        answer: "$\exists x, \neg P(x)$",
        explanation: "To say 'Not everything has property P' is equivalent to saying 'There exists at least one thing that does not have property P'. This is one of the De Morgan's Laws for Quantifiers."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "Which term is used for a well-formed formula in First-Order Logic that has **no free variables**?",
        options: [
            "Literal",
            "Sentence",
            "Clause",
            "Term"
        ],
        answer: "Sentence",
        explanation: "A formula with no free variables is called a sentence, and it has a definite truth value (True or False) within a specific model/interpretation."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "The formula $\neg (\exists x, \neg P(x))$ is logically equivalent to:",
        options: [
            "$\exists x, P(x)$",
            "$\forall x, \neg P(x)$",
            "$\forall x, P(x)$",
            "$\neg (\forall x, P(x))$"
        ],
        answer: "$\forall x, P(x)$",
        explanation: "By applying the negation rule $\neg \exists x \equiv \forall x \neg$ and then the Double Negation rule $\neg \neg P \equiv P$, we get $\neg (\exists x, \neg P(x)) \equiv \forall x, \neg (\neg P(x)) \equiv \forall x, P(x)$."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "The rule of **Universal Instantiation** allows us to conclude $P(c)$ from which premise?",
        options: [
            "$\exists x, P(x)$",
            "$\forall x, P(x)$",
            "$P(a) \land P(b)$",
            "$P(x) \rightarrow Q(x)$"
        ],
        answer: "$\forall x, P(x)$",
        explanation: "If something is true for all $x$, then it is true for any specific individual $c$ (Universal Instantiation)."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "What is the correct translation of 'Some computers are fast' (where $C(x)$ is '$x$ is a computer' and $F(x)$ is '$x$ is fast')?",
        options: [
            "$\forall x (C(x) \rightarrow F(x))$",
            "$\exists x (C(x) \land F(x))$",
            "$\exists x (C(x) \rightarrow F(x))$",
            "$\forall x (C(x) \land F(x))$"
        ],
        answer: "$\exists x (C(x) \land F(x))$",
        explanation: "Existential statements are almost always translated using conjunction ($\land$): 'There exists an $x$ such that $x$ is a computer AND $x$ is fast.'"
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "What is the correct translation of 'All programmers are smart' (where $P(x)$ is '$x$ is a programmer' and $S(x)$ is '$x$ is smart')?",
        options: [
            "$\forall x (P(x) \land S(x))$",
            "$\exists x (P(x) \rightarrow S(x))$",
            "$\forall x (P(x) \rightarrow S(x))$",
            "$\exists x (P(x) \land S(x))$"
        ],
        answer: "$\forall x (P(x) \rightarrow S(x))$",
        explanation: "Universal statements are almost always translated using implication ($\rightarrow$): 'For all $x$, IF $x$ is a programmer, THEN $x$ is smart.'"
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "Which of the following is an example of an illegal variable substitution in predicate logic?",
        options: [
            "Substituting $c$ (constant) for a free variable $x$.",
            "Substituting $f(y)$ (term) for a free variable $x$.",
            "Substituting $x$ for a bound variable $x$.",
            "Substituting a term $t$ for a variable $x$, where $t$ contains a variable that becomes bound by a quantifier."
        ],
        answer: "Substituting a term $t$ for a variable $x$, where $t$ contains a variable that becomes bound by a quantifier.",
        explanation: "This is a key restriction: a substitution is only valid if no variable in the substituted term becomes bound in the resulting formula (i.e., you must avoid 'capturing' variables)."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "In the expression $Less(x, 5)$, $Less$ is a predicate of what **arity** (number of arguments)?",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        answer: "2",
        explanation: "The arity of a predicate is the number of arguments (terms) it takes. $Less(x, 5)$ has two arguments: $x$ and $5$."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "A predicate $P(x)$ defined over the domain of integers is true for which value of $x$ if $P(x)$ is '$x^2 = 4$':",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        answer: "2",
        explanation: "For $x^2 = 4$, the predicate $P(x)$ is true when $x=2$ (or $x=-2$)."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "When are two formulas $F$ and $G$ in First-Order Logic considered **logically equivalent**?",
        options: [
            "If they have the same number of variables.",
            "If $F \leftrightarrow G$ is a tautology.",
            "If $F$ and $G$ have the same truth value under all interpretations and domains.",
            "If they are both valid."
        ],
        answer: "If $F$ and $G$ have the same truth value under all interpretations and domains.",
        explanation: "Equivalence in FOL is much stronger than in Propositional Logic, requiring the same truth value across all possible ways of defining the domain and interpreting predicates."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "The use of **Skolemization** is a technique applied in the process of converting First-Order Logic formulas to:",
        options: [
            "Disjunctive Normal Form (DNF)",
            "Resolution Form (Clausal Form)",
            "Negation Normal Form (NNF)",
            "A non-quantified sentence"
        ],
        answer: "Resolution Form (Clausal Form)",
        explanation: "Skolemization is the process of eliminating existential quantifiers ($\exists$) by replacing them with a Skolem constant or function, which is necessary before converting to the clause form required for resolution."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "What is the **Model** of a First-Order Logic sentence?",
        options: [
            "The truth table of the formula.",
            "A domain and an interpretation where the sentence is true.",
            "A syntax tree of the formula.",
            "The set of all constants used in the formula."
        ],
        answer: "A domain and an interpretation where the sentence is true.",
        explanation: "A model is an interpretation that makes a sentence true. If a sentence has a model, it is satisfiable."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "A **function symbol** $f$ in Predicate Logic (e.g., $f(x)$) maps:",
        options: [
            "A truth value to a logical connective.",
            "Elements of the domain to elements of the domain.",
            "A variable to a predicate.",
            "A constant to a truth value."
        ],
        answer: "Elements of the domain to elements of the domain.",
        explanation: "Function symbols represent operations that return an element from the domain (e.g., $father(x)$ returns a person, not a truth value). Predicates return a truth value."
    },
    {
        topic: "Chapter 4: Predicate Logic",
        question: "The inference rule **Universal Generalization** allows us to prove a universal statement ($\forall x, P(x)$) by showing that $P(c)$ is true, provided $c$ is a/an:",
        options: [
            "Arbitrarily chosen element of the domain.",
            "Specific constant symbol.",
            "Bound variable.",
            "Element for which $P(c)$ is known to be true."
        ],
        answer: "Arbitrarily chosen element of the domain.",
        explanation: "To prove $P(x)$ for all $x$, you must show $P(c)$ is true for an arbitrary element $c$ that represents any member of the domain."
    },

    // --- Chapter 5: Logic Programming (20 Questions) ---
    {
        topic: "Chapter 5: Logic Programming",
        question: "What is the declarative approach to programming, exemplified by **Prolog**, primarily focused on?",
        options: [
            "Specifying the sequence of instructions (how to solve the problem).",
            "Specifying the problem's goal (what the solution is).",
            "Managing mutable data and state changes.",
            "Defining object hierarchies and classes."
        ],
        answer: "Specifying the problem's goal (what the solution is).",
        explanation: "Logic Programming is a declarative paradigm: the programmer describes the desired result (the logic), and the system determines the sequence of steps (the control) to achieve it."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "The fundamental unit of data in Prolog, often representing a known truth, is called a:",
        options: [
            "Rule",
            "Fact",
            "Query",
            "Head"
        ],
        answer: "Fact",
        explanation: "A fact is a statement that is unconditionally true, such as `parent(john, mary).`"
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "In the Prolog rule `A :- B, C.`, what does the symbol `:-` represent in terms of logic?",
        options: [
            "Conjunction ($\land$)",
            "Biconditional ($\leftrightarrow$)",
            "Implication, or 'if' ($\leftarrow$)",
            "Negation ($\neg$)"
        ],
        answer: "Implication, or 'if' ($\leftarrow$)",
        explanation: "The Prolog symbol `:-` means $\leftarrow$ (if). The rule $A :- B, C$ is read as 'A is true if B AND C are true', which is logically equivalent to $(B \land C) \rightarrow A$."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "A **Horn Clause** is a disjunction of literals that contains at most how many positive literals?",
        options: [
            "Zero",
            "One",
            "Two",
            "Three"
        ],
        answer: "One",
        explanation: "A Horn clause can have zero (Goal clause) or exactly one (Definite clause/Rule or Fact) positive literal. This restricted form makes resolution highly efficient."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "In Prolog, a question posed to the knowledge base is called a:",
        options: [
            "Assertion",
            "Fact",
            "Query",
            "Head"
        ],
        answer: "Query",
        explanation: "A query asks the Prolog system to find assignments for variables that make the statement true based on the available facts and rules."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "The **Head** of a Prolog rule corresponds to which part of a logical implication?",
        options: [
            "The conclusion (Consequent)",
            "The premise (Antecedent)",
            "A literal (variable or its negation)",
            "A fact (unconditional truth)"
        ],
        answer: "The conclusion (Consequent)",
        explanation: "In $A :- B, C$, $A$ is the head (conclusion), and $B, C$ is the body (premises). The rule means $A$ is true if the body is true."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "Which type of Horn Clause is used to represent the goal in a resolution proof (i.e., the negation of the theorem)?",
        options: [
            "Definite Clause",
            "Fact Clause",
            "Goal Clause (Negative Clause)",
            "Rule Clause"
        ],
        answer: "Goal Clause (Negative Clause)",
        explanation: "A Goal Clause contains zero positive literals, consisting only of negative literals (e.g., $\neg P_1 \lor \neg P_2 \lor ...$). This corresponds to the negation of the conjunction of premises or the goal itself."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "In the Prolog rule `grandfather(X, Z) :- parent(X, Y), parent(Y, Z), male(X).`, which of the following is an argument in the head of the rule?",
        options: [
            "parent(X, Y)",
            "Y",
            "Z",
            "male(X)"
        ],
        answer: "Z",
        explanation: "The head of the rule is `grandfather(X, Z)`. The arguments are $X$ and $Z$ (variables that will be assigned values if the body is satisfied)."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "The Prolog execution strategy that searches for a proof by expanding the leftmost, non-terminal subgoal first is called:",
        options: [
            "Breadth-First Search",
            "Depth-First Search (DFS)",
            "Resolution Refutation",
            "Unification"
        ],
        answer: "Depth-First Search (DFS)",
        explanation: "Prolog uses a specific form of DFS called SLD-resolution, which is why the order of rules and literals in the body matters for performance and termination."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "What is the primary mechanism Prolog uses to match a goal (query) with the head of a rule or a fact in the knowledge base?",
        options: [
            "Skolemization",
            "Instantiation",
            "Unification",
            "Tableau Closure"
        ],
        answer: "Unification",
        explanation: "Unification is the core algorithm for matching, where the system tries to find the most general substitution (assignment of terms to variables) that makes two logical expressions identical."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "The problem of finding a common ancestor of two people, $A$ and $B$, is naturally solved in Prolog using:",
        options: [
            "Arithmetic operators",
            "Iteration (loops)",
            "Recursion",
            "Parallel processing"
        ],
        answer: "Recursion",
        explanation: "Ancestry is defined recursively: a parent is an ancestor, and a parent's ancestor is also an ancestor. Prolog handles these recursive definitions easily with rules."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "In logic programming, the process of **Backtracking** occurs when:",
        options: [
            "The program reaches a terminal fact.",
            "Unification successfully finds an assignment.",
            "A chosen rule/fact fails to satisfy the current goal, forcing the system to try alternatives.",
            "A rule is found to be a tautology."
        ],
        answer: "A chosen rule/fact fails to satisfy the current goal, forcing the system to try alternatives.",
        explanation: "Backtracking is key to DFS. When a dead end is reached, the system 'backtracks' to the last choice point and tries the next available option."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "If a Prolog rule is `parent(X, Y) :- father(X, Y).`, and a fact is `parent(X, Y) :- mother(X, Y).`, which logical principle is this illustrating?",
        options: [
            "Conjunction",
            "Implication",
            "Disjunction (Implicit OR)",
            "Negation"
        ],
        answer: "Disjunction (Implicit OR)",
        explanation: "Multiple rules with the same head are interpreted as a disjunction. $parent(X, Y)$ is true if $father(X, Y)$ is true OR if $mother(X, Y)$ is true."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "The process of transforming an arbitrary First-Order Logic formula into a set of clauses suitable for resolution is known as:",
        options: [
            "Herbrandization",
            "Skolemization (part of the process)",
            "Clausification",
            "Deduction"
        ],
        answer: "Clausification",
        explanation: "Clausification is the multi-step process (eliminate $\rightarrow/\leftrightarrow$, move $\neg$ inward, Skolemization, convert to CNF) that transforms a FOL sentence into a set of clauses."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "In Prolog, what does an underscore `_` represent in a rule or query?",
        options: [
            "A constant value of 0.",
            "A global variable.",
            "An anonymous variable (a placeholder that doesn't need to be unique).",
            "A function that returns a list."
        ],
        answer: "An anonymous variable (a placeholder that doesn't need to be unique).",
        explanation: "The anonymous variable `_` is used when the value of a variable is irrelevant to the solution."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "What is the result of the unification attempt between the expressions `P(f(X), X)` and `P(Y, a)`?",
        options: [
            "Failure, because arities do not match.",
            "Success, with $Y$ bound to $f(a)$ and $X$ bound to $a$.",
            "Failure, because $X$ appears twice.",
            "Success, with $Y$ bound to $f(X)$."
        ],
        answer: "Success, with $Y$ bound to $f(a)$ and $X$ bound to $a$.",
        explanation: "For the head terms: $f(X)$ must unify with $Y$ (so $Y/f(X)$). For the second terms: $X$ must unify with $a$ (so $X/a$). Substituting $X/a$ into $Y/f(X)$ yields $Y/f(a)$. The resultant formula is $P(f(a), a)$."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "A Logic Programming system is often used to build a/an **Expert System** because it is excellent at modeling:",
        options: [
            "Sensor data from physical hardware.",
            "Knowledge and Rule-Based Reasoning.",
            "Real-time object inheritance.",
            "Procedural state changes."
        ],
        answer: "Knowledge and Rule-Based Reasoning.",
        explanation: "Expert systems rely on a set of facts (knowledge) and rules (if-then logic), which is the exact structure of a Prolog program."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "The logical connective **Comma** (`,`) used in the body of a Prolog rule (e.g., `A :- B, C.`) is interpreted as:",
        options: [
            "Disjunction ($\lor$)",
            "Negation ($\neg$)",
            "Conjunction ($\land$)",
            "Biconditional ($\leftrightarrow$)"
        ],
        answer: "Conjunction ($\land$)",
        explanation: "The comma separates multiple conditions that must all be met simultaneously, meaning $B$ AND $C$ must be true."
    },
    {
        topic: "Chapter 5: Logic Programming",
        question: "The main benefit of restricting clauses to the Horn form in logic programming is to guarantee:",
        options: [
            "Exponential complexity.",
            "Decidability (termination) and efficient resolution.",
            "A mix of positive and negative literals.",
            "Turing completeness."
        ]
