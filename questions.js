const allQuestions = [
    {
        topic: "Set Theory",
        question: "According to the handout, a set is defined as a collection of what kind of objects?",
        options: [
            "Objects that are related by a formula.",
            "Distinct objects.",
            "Objects listed in a standard order.",
            "Any objects, regardless of duplication."
        ],
        answer: "Distinct objects.",
        explanation: "A set is defined as a collection of distinct objects. Collections with duplicates are called multisets."
    },
    {
        topic: "Set Theory",
        question: "What is the symbolic representation for the empty set?",
        options: [
            "$\{0\}$",
            "$\{\}$ or $\emptyset$",
            "$U$",
            "$S^c$"
        ],
        answer: "$\{\}$ or $\emptyset$",
        explanation: "The empty set, containing no objects, is written as a pair of curly braces with nothing inside $\{\}$ or by using the symbol $\emptyset$."
    },
    {
        topic: "Set Theory",
        question: "If $S=\{1, 2, 3\}$, which statement is true?",
        options: [
            "$4 \in S$",
            "$3 \notin S$",
            "$4 \notin S$",
            "$S = \{1, 1, 2, 3\}$"
        ],
        answer: "$4 \notin S$",
        explanation: "The symbol $\notin$ means 'is not a member of'. Since 4 is not listed in S, $4 \notin S$ is true."
    },
    {
        topic: "Set Theory",
        question: "What is the term for the size of a finite set, defined as the number of members it contains?",
        options: [
            "Set Order",
            "Power Set",
            "Cardinality",
            "Index"
        ],
        answer: "Cardinality",
        explanation: "The cardinality of a set is its size. For a finite set, it is the number of members it contains, written as $|S|$."
    },
    {
        topic: "Set Theory",
        question: "The intersection of two sets $S$ and $T$, written $S \cap T$, is defined using which Boolean or logical operation?",
        options: [
            "OR ($\lor$)",
            "NOT ($\neg$)",
            "AND ($\land$)",
            "IF AND ONLY IF ($\leftrightarrow$)"
        ],
        answer: "AND ($\land$)",
        explanation: "The intersection $S \cap T$ is defined as $\{x: (x \in S) \land (x \in T)\}$. The logical operation $\land$ (AND) is true only when both propositions are true."
    },
    {
        topic: "Set Theory",
        question: "If $A=\{a, b, c, d\}$ and $B=\{c, d, e, f\}$, what is the result of $A \cap B$?",
        options: [
            "$\{a, b, e, f\}$",
            "$\{a, b, c, d, e, f\}$",
            "$\{c, d\}$",
            "$\emptyset$"
        ],
        answer: "$\{c, d\}$",
        explanation: "The intersection of A and B is the collection of elements in both sets. The common elements are c and d."
    },
    {
        topic: "Set Theory",
        question: "If two sets $A$ and $B$ are such that $A \cap B = \emptyset$, they are said to be:",
        options: [
            "Universal sets",
            "Proper subsets",
            "Equal sets",
            "Disjoint sets"
        ],
        answer: "Disjoint sets",
        explanation: "If the intersection of A and B is the empty set ($\emptyset$), then A and B are defined as disjoint sets."
    },
    {
        topic: "Set Theory",
        question: "The union of two sets $S$ and $T$, written $S \cup T$, is defined using which symbolic logical equivalent?",
        options: [
            "$\land$",
            "$\lor$",
            "$\neg$",
            "$\rightarrow$"
        ]
        ,
        answer: "$\lor$",
        explanation: "The union $S \cup T$ is defined as $\{x: (x \in S) \lor (x \in T)\}$. The symbol $\lor$ (OR) is true if either proposition is true."
    },
    {
        topic: "Set Theory",
        question: "If $S=\{1, 2, 3\}$ and $T=\{1, 3, 5\}$, what is $S \cup T$?",
        options: [
            "$\{1, 3\}$",
            "$\{1, 2, 3, 5\}$",
            "$\emptyset$",
            "$\{2, 5\}$"
        ],
        answer: "$\{1, 2, 3, 5\}$",
        explanation: "The union of S and T is the collection of all objects that are in either set. The resulting set combines all unique elements: 1, 2, 3, and 5."
    },
    {
        topic: "Set Theory",
        question: "Which term describes 'the set of all possible objects' for a given collection of set theoretic computations?",
        options: [
            "The Power Set",
            "The Infinite Set",
            "The Universal Set",
            "The Cardinal Set"
        ],
        answer: "The Universal Set",
        explanation: "The universal set, commonly written $U$, is the set of all possible objects for a given collection of set theoretic computations."
    },
    {
        topic: "Set Theory",
        question: "The complement of a set $S$, written $S^c$, is defined as the collection of objects in the universal set that are NOT in $S$. Which Boolean operation is associated with this?",
        options: [
            "AND ($\land$)",
            "OR ($\lor$)",
            "NOT ($\neg$)",
            "Implies ($\rightarrow$)"
        ],
        answer: "NOT ($\neg$)",
        explanation: "The complementation operation is associated with the 'not' operation. $S^c = \{x: \neg(x \in S)\}$."
    },
    {
        topic: "Set Theory",
        question: "Given a universal set $U=\{1, 2, 3, 4, 5\}$ and $T=\{1, 3, 5\}$, what is the complement $T^c$?",
        options: [
            "$\{1, 3, 5\}$",
            "$\emptyset$",
            "$\{2, 4\}$",
            "$\{2, 3, 4, 5\}$"
        ],
        answer: "$\{2, 4\}$",
        explanation: "The complement $T^c$ consists of all elements in $U$ that are not in $T$. $U - T = \{2, 4\}$."
    },
    {
        topic: "Set Theory",
        question: "The difference of two sets $S$ and $T$, written $S-T$, is defined as $S \cap T^c$. What is the alternate curly brace notation for $S-T$?",
        options: [
            "$\{x: (x \in S) \lor (x \in T)\}$",
            "$\{x: (x \in S) \land (x \in T)\}$",
            "$\{x: (x \in S) \land (x \notin T)\}$",
            "$\{x: x \notin S \land x \notin T\}$"
        ],
        answer: "$\{x: (x \in S) \land (x \notin T)\}$",
        explanation: "The difference $S-T$ is the collection of objects in S that are not in T. This is formally written as $\{x: (x \in S) \land (x \notin T)\}$."
    },
    {
        topic: "Set Theory",
        question: "If $A=\{1, 2, 3, 4\}$ and $B=\{3, 4, 5, 6\}$, what is the set difference $A - B$?",
        options: [
            "$\{1, 2\}$",
            "$\{5, 6\}$",
            "$\{1, 2, 5, 6\}$",
            "$\{3, 4\}$"
        ],
        answer: "$\{1, 2\}$",
        explanation: "The set difference $A-B$ includes all elements in $A$ that are not in $B$. Elements 1 and 2 are in A but not in B."
    },
    {
        topic: "Set Theory",
        question: "The **symmetric difference** of two sets $S$ and $T$, $S \Delta T$, is the set of objects that are in one and only one of the sets. Which formula represents this?",
        options: [
            "$(S \cap T) \cup (T \cap S)$",
            "$(S \cup T) \cap (S \cap T)^c$",
            "$(S - T) \cap (T - S)$",
            "$(S - T) \cup (T - S)$"
        ],
        answer: "$(S - T) \cup (T - S)$",
        explanation: "The symmetric difference is written $S \Delta T$ and its definition in curly brace notation is $(S - T) \cup (T - S)$."
    },
    {
        topic: "Set Theory",
        question: "For two sets $S$ and $T$, we say $S$ is a **subset** of $T$ ($S \subseteq T$) if:",
        options: [
            "Every element of $T$ is also an element of $S$.",
            "Each element of $S$ is also an element of $T$.",
            "$S$ and $T$ are disjoint.",
            "$S$ and $T$ have at least one element in common."
        ],
        answer: "Each element of $S$ is also an element of $T$.",
        explanation: "In formal notation, $S \subseteq T$ if for all $x \in S$ we have $x \in T$."
    },
    {
        topic: "Set Theory",
        question: "The notation $S \subset T$ means that $S$ is a **proper subset** of $T$. This implies which additional condition besides $S \subseteq T$?",
        options: [
            "$S \cap T = \emptyset$",
            "$S = T$",
            "$S \ne T$",
            "$T \subseteq S$"
        ],
        answer: "$S \ne T$",
        explanation: "If $S \subseteq T$ and $S \ne T$, we write $S \subset T$ and say $S$ is a proper subset of $T$."
    },
    {
        topic: "Set Theory",
        question: "Proposition 2.1 states that two sets $A$ and $B$ are equal if and only if:",
        options: [
            "$A \cap B = \emptyset$",
            "$A \cup B = A$",
            "$A \subseteq B$ and $B \subseteq A$",
            "$A$ and $B$ have the same cardinality."
        ],
        answer: "$A \subseteq B$ and $B \subseteq A$",
        explanation: "Two sets are equal if and only if each is a subset of the other. In symbolic notation: $(A=B) \iff (A \subseteq B) \land (B \subseteq A)$."
    },
    {
        topic: "Set Theory Formula",
        question: "De Morgan's Laws state that the complement of the union of two sets is the intersection of their complements. Which formula represents this?",
        options: [
            "$(S \cap T)^c = S^c \cup T^c$",
            "$(S \cup T)^c = S^c \cap T^c$",
            "$(S^c)^c = S$",
            "$S \cup T = S \cap T$"
        ],
        answer: "$(S \cup T)^c = S^c \cap T^c$",
        explanation: "De Morgan's First Law is $(S \cup T)^c = S^c \cap T^c$."
    },
    {
        topic: "Set Theory Formula",
        question: "Which of the following represents the second of De Morgan's Laws?",
        options: [
            "$S \Delta T = (S - T) \cup (T - S)$",
            "$S - T = S \cap T^c$",
            "$(S \cap T)^c = S^c \cup T^c$",
            "$|S \cup T| = |S| + |T| - |S \cap T|$"
        ],
        answer: "$(S \cap T)^c = S^c \cup T^c$",
        explanation: "De Morgan's Second Law is $(S \cap T)^c = S^c \cup T^c$."
    },
    {
        topic: "Set Theory",
        question: "What is the name for the set of all subsets of a given set $S$?",
        options: [
            "Superset",
            "Universal Set",
            "Power Set",
            "Complement Set"
        ],
        answer: "Power Set",
        explanation: "The set of all subsets of a set $S$ is called the power set of $S$, denoted $\mathcal{P}(S)$."
    },
    {
        topic: "Set Theory Formula",
        question: "A set $S$ with $n$ elements has how many subsets?",
        options: [
            "$n$",
            "$2n$",
            "$n^2$",
            "$2^n$"
        ],
        answer: "$2^n$",
        explanation: "Proposition 2.3 states that a set $S$ with $n$ elements has $2^n$ subsets. The power set $\mathcal{P}(S)$ has size $2^n$."
    },
    {
        topic: "Set Theory",
        question: "What is the cardinality of the power set, $|\mathcal{P}(A)|$, if $A=\{a, b, c\}$?",
        options: [
            "3",
            "6",
            "8",
            "9"
        ],
        answer: "8",
        explanation: "The cardinality is $2^{|A|}$. Since $|A|=3$, the cardinality of the power set is $2^3=8$."
    },
    {
        topic: "Set Theory",
        question: "How many k-element subsets does the set $S=\{1, 2, 3, 4\}$ have for $k=2$?",
        options: [
            "4",
            "6",
            "8",
            "16"
        ],
        answer: "6",
        explanation: "This is a counting problem, typically solved using combinations $\binom{n}{k}$. For $S=\{a, b, c, d\}$ and $k=2$, the subsets are $\{a,b\}, \{a,c\}, \{a,d\}, \{b,c\}, \{b,d\}, \{c,d\}$, which is 6 subsets."
    },
    {
        topic: "Set Theory Formula",
        question: "The **Inclusion-Exclusion Principle** for two finite sets $S$ and $T$ is given by:",
        options: [
            "$|S \cup T| = |S| + |T| + |S \cap T|$",
            "$|S \cup T| = |S| + |T|$",
            "$|S \cup T| = |S| \times |T|$",
            "$|S \cup T| = |S| + |T| - |S \cap T|$"
        ],
        answer: "$|S \cup T| = |S| + |T| - |S \cap T|$",
        explanation: "This formula is stated in Problem 2.21, proving the relationship between the cardinality of the union, the individual sets, and their intersection."
    },
    {
        topic: "Set Theory Precedence",
        question: "In the absence of parentheses, which set operation is performed immediately *after* complementations?",
        options: [
            "Unions",
            "Intersections",
            "Tests of set membership",
            "Set differences"
        ],
        answer: "Intersections",
        explanation: "The operator precedence rules state: All complementations are computed next (iii). All intersections are done next (iv). All unions are performed next (v)."
    },
    {
        topic: "Set Theory Precedence",
        question: "Applying the operator precedence rules, the set operation $A \cup B \cap C^c$ is fully parenthesized as:",
        options: [
            "$(A \cup B) \cap C^c$",
            "$A \cup (B \cap C^c)$",
            "$(A \cup B \cap C)^c$",
            "$(A \cup (B \cap (C^c)))$"
        ],
        answer: "$(A \cup (B \cap (C^c)))$",
        explanation: "Following the order: 1. Parentheses (innermost C^c). 2. Complementation ($C^c$). 3. Intersection ($B \cap C^c$). 4. Union ($A \cup (B \cap C^c)$)."
    },
    {
        topic: "Set Theory Commutativity",
        question: "A binary operation $\odot$ is commutative if $x \odot y = y \odot x$. Which of the following set operations is NOT commutative?",
        options: [
            "Union ($\cup$)",
            "Intersection ($\cap$)",
            "Set Difference ($-$)",
            "Symmetric Difference ($\Delta$)"
        ],
        answer: "Set Difference ($-$)",
        explanation: "Set Difference ($S-T$) is non-commutative because $S-T \ne T-S$ in general. Union, Intersection, and Symmetric Difference are commutative (Problem 2.12)."
    },
    {
        topic: "Set Theory Identity",
        question: "What is the **Identity** element $i$ for the operation of **Set Union** ($S \cup i = S$)?",
        options: [
            "The Power Set",
            "The Universal Set ($U$)",
            "The Empty Set ($\emptyset$)",
            "The Complement of S ($S^c$)"
        ],
        answer: "The Empty Set ($\emptyset$)",
        explanation: "The identity for union is the empty set, because $S \cup \emptyset = S$ (Problem 2.13)."
    },
    {
        topic: "Set Theory Identity",
        question: "What is the **Identity** element $i$ for the operation of **Set Intersection** ($S \cap i = S$)?",
        options: [
            "The Power Set",
            "The Universal Set ($U$)",
            "The Empty Set ($\emptyset$)",
            "The Complement of S ($S^c$)"
        ],
        answer: "The Universal Set ($U$)",
        explanation: "The identity for intersection is the universal set, because $S \cap U = S$ (Problem 2.13)."
    },
    {
        topic: "Set Theory Associativity",
        question: "Which of the following identities proves that **Set Union** is associative?",
        options: [
            "$A \cup B = B \cup A$",
            "$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$",
            "$A \cup (B \cup C) = (A \cup B) \cup C$",
            "$A \cup \emptyset = A$"
        ],
        answer: "$A \cup (B \cup C) = (A \cup B) \cup C$",
        explanation: "Problem 2.15 asks to prove that $A \cup (B \cup C) = (A \cup B) \cup C$, which is the Associative Law for Union."
    },
    {
        topic: "Set Theory Associativity",
        question: "Which of the following identities proves that **Set Intersection** is associative?",
        options: [
            "$A \cap B = B \cap A$",
            "$A \cap (B \cap C) = (A \cap B) \cap C$",
            "$A \cup (B \cup C) = (A \cup B) \cup C$",
            "$A \cap U = A$"
        ],
        answer: "$A \cap (B \cap C) = (A \cap B) \cap C$",
        explanation: "Problem 2.16 asks to prove that $A \cap (B \cap C) = (A \cap B) \cap C$, which is the Associative Law for Intersection."
    },
    {
        topic: "Set Theory",
        question: "True or False: The empty set ($\emptyset$) is a subset of every set.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "The text explicitly states: 'The empty set is a subset of every set'."
    },
    {
        topic: "Set Theory",
        question: "True or False: $A \subseteq A$ is always true for any set A.",
        options: [
            "True",
            "False"
        ],
        answer: "True",
        explanation: "Every set is a subset of itself. This is noted in Example 2.9 and used in the proof of Proposition 2.1."
    },
    {
        topic: "Set Theory",
        question: "What is the relationship between the integers ($\mathbb{Z}$) and the set of natural numbers ($\mathbb{N}$)?",
        options: [
            "$\mathbb{Z}$ is a proper subset of $\mathbb{N}$.",
            "$\mathbb{N}$ is a proper subset of $\mathbb{Z}$.",
            "They are disjoint sets.",
            "They are equal sets."
        ],
        answer: "$\mathbb{N}$ is a proper subset of $\mathbb{Z}$.",
        explanation: "The integers ($\mathbb{Z}$) are whole numbers, positive and negative: $\{0, \pm1, \pm2, ...\}$. The natural numbers ($\mathbb{N}$) are the non-negative integers: $\{0, 1, 2, ...\}$. Thus, $\mathbb{N} \subset \mathbb{Z}$."
    },
    {
        topic: "Set Theory",
        question: "What is the minimum requirement to demonstrate that a mathematical statement is (mathematically) false?",
        options: [
            "A logical contradiction in the proof.",
            "A single counter-example.",
            "A disproof by induction.",
            "Showing the statement is only true 'most of the time'."
        ],
        answer: "A single counter-example.",
        explanation: "It is necessary to find only one counter-example to demonstrate a statement is (mathematically) false. This is a convention in mathematics."
    },
    {
        topic: "Set Theory",
        question: "Given $S = \{x : x \text{ is an even integer}\}$ and $T = \{x : x \text{ is an odd integer}\}$, what is $S \cap T$?",
        options: [
            "$S$",
            "$T$",
            "$\mathbb{Z}$ (All Integers)",
            "$\emptyset$"
        ],
        answer: "$\emptyset$",
        explanation: "An integer cannot be both even and odd simultaneously. Since there are no common elements, the sets are disjoint and their intersection is the empty set ($\emptyset$)."
    },
    {
        topic: "Set Theory",
        question: "The notation $S-T = \{x: x \in S \cap T^c\}$ demonstrates that the Set Difference operation can be created using which two fundamental operations?",
        options: [
            "Union and Complement",
            "Intersection and Union",
            "Intersection and Complement",
            "Union and Difference"
        ],
        answer: "Intersection and Complement",
        explanation: "The text notes: 'Notice how intersection and complementation can be used together to create the difference operation'."
    },
    {
        topic: "Set Theory",
        question: "The statement 'A if and only if B' is used to establish:",
        options: [
            "Set difference",
            "Logical equivalence",
            "Cardinality",
            "Commutativity"
        ],
        answer: "Logical equivalence",
        explanation: "The phrase 'if and only if' (iff) is used to establish logical equivalence, meaning A and B are different ways of saying the same thing."
    },
    {
        topic: "Set Theory",
        question: "The opening and closing curly braces,like in $\{2n: n \text{ is an integer}\}$, are used to denote a set, while the colon (:) in this notation means:",
        options: [
            "such that or where",
            "implies",
            "is not equal to",
            "is a proper subset of"
        ],
        answer: "such that or where",
        explanation: "The colon in curly brace notation says 'such that' or 'where', followed by conditions that explain or refine the membership."
    },
    {
        topic: "Set Theory",
        question: "If the universal set $U$ is the integers, then the compliment of the set of even integers is:",
        options: [
            "The natural numbers",
            "The prime numbers",
            "The odd integers",
            "The non-negative integers"
        ],
        answer: "The odd integers",
        explanation: "Example 2.6 states: 'Let the universal set be the integers. Then the compliment of the even integers is the odd integers'."
    }
];

// If you have your array of 200 questions (e.g., const otherQuestions = [...]), 
// you can combine them by replacing this array with:
// const allQuestions = [...otherQuestions, ...newQuestions];
