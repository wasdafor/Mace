//SEE THE SYNTAX FILE FO EXPLANATION OF THE SYNTAX

//These are code elements that you can expect in code scope like namespace, class method, variable, Declaration 
enum CodeScopePartType {
    UsingStatement,
    SystemUsingStatement,
    NameSpace,
    NameSpaceField,
    NameSpaceMethod,
    NameSpaceEnum,
    NameSpaceInterface,
    NameSpaceClass,
    ClassField,
    ClassMethod,
    ClassConstructor,
    ClassDestructor,
    ClassFieldSet,
    ClassFieldGet,
    MethodField,
    MethodMethod,
    VariableAsignment,
    MethodCall,
    IfStatement,
    ElseIfStatement,
    ElseStatement,
    ForLoop,
    WhileLoop,
    TryStatement,
    CatchStatement,
    FinallyStatement,
    SwitchStatement,
    CaseStaetement,
    DefaultCaseStatement
}

//These keyword indicate how a varibale can be accesed in a given scope,
enum AccessModifier {
    public,
    private,
    protected,
    static,
}

//These keyword indicate how a varibale can be written or read,
enum TypeQualifier {
    const,
    readonly,
    writeonly,
    initialize,
}

enum NameSpaceKeyWord {
    using,
    system,
    as,
    namespace
}

//These are values that are not (yet) stored in variables like 340, "Test", 23.23
enum LiteralValue {
    String,
    Char,
    Boolean,
    Int,
    Float,
    Null,
    Percent,
    NamespacePath,
}

enum Seperator {
    //Commas (,) To separate argument parameters values...
    ItemSeparator,
    //Colons (:) To seperate key and value
    KeyAndValue,
    //Semicolons (;) To seperate code lines
    CodeLine
}

enum Identifier {
    Field,
    Method,
    Class,
    NameSpace,
    NameSpaceElement,
    Enum,
    InterFace,
}


type CodePart = AccessModifier | TypeQualifier | NameSpaceKeyWord | LiteralValue | Seperator | Identifier
type CodeSectionRequired = CodeSectionCodePartRequired | CodeSectionBranchRequired | CodeSectionListRequired | CodeSectionSeparatedListRequired
type CodeSectionOptional = CodeSectionCodePartOptional | CodeSectionBranchOptional | CodeSectionListOptional | CodeSectionSeparatedListOptional;
type CodeSection = CodeSectionRequired | CodeSectionOptional;

class CodeScopePart {
    constructor(codeScopePartType: CodeScopePartType, codeScopePartSections: CodeSection[]) {
        this.codeScopePartSections = codeScopePartSections;
        this.codeScopePartType = codeScopePartType;
    }

    codeScopePartType: CodeScopePartType;
    codeScopePartSections: CodeSection[];
}

//Base CodeSection class is used so you can easily detect is a field in required a list or a branch
enum CodeSectionType {
    Part,
    List,
    Branch,
    SeparatedList
}

class CodeSectionBase {
    constructor(isRequired: boolean,
        codeSectionType: CodeSectionType
    ) {
        this.isRequired = isRequired;
        this.codeSectionType = codeSectionType;
    }

    readonly isRequired: boolean
    readonly codeSectionType: CodeSectionType
}


class CodeSectionCodePartRequired extends CodeSectionBase {
    constructor(
        public readonly codePart: CodePart,
    ) {
        super(true, CodeSectionType.Part);
    }
}

class CodeSectionCodePartOptional extends CodeSectionBase {
    constructor(
        public readonly codePart: CodePart,
    ) {
        super(false, CodeSectionType.Part);
    }
}


class CodeSectionBranchRequired extends CodeSectionBase {
    constructor(
        public readonly codePart: CodePart,
        public readonly codeSection: CodeSection
    ) {
        super(true, CodeSectionType.Branch);
    }
}

class CodeSectionBranchOptional extends CodeSectionBase {
    constructor(
        public readonly codePart: CodePart,
        public readonly codeSection: CodeSection
    ) {
        super(false, CodeSectionType.Branch);
    }
}

class CodeSectionListRequired extends CodeSectionBase {
    constructor(
        public readonly codeSections: CodeSectionRequired[],
    ) {
        super(true, CodeSectionType.Part);
    }
}

class CodeSectionListOptional extends CodeSectionBase {
    constructor(
        public readonly codeSections: CodeSectionOptional[],
    ) {
        super(false, CodeSectionType.List);
    }
}

class CodeSectionSeparatedListRequired extends CodeSectionBase {
    constructor(
        public readonly seperator: Seperator,
        public readonly codePart: CodePart
    ) {
        super(true, CodeSectionType.SeparatedList);
    }
}

class CodeSectionSeparatedListOptional extends CodeSectionBase {
    constructor(
        public readonly seperator: Seperator,
        public readonly codeSection: CodeSection
    ) {
        super(false, CodeSectionType.SeparatedList);
    }
}

const codeScopeParts: CodeScopePart[] = [
    new CodeScopePart(
        CodeScopePartType.UsingStatement,
        [
            new CodeSectionCodePartRequired(NameSpaceKeyWord.using),
            new CodeSectionCodePartRequired(LiteralValue.NamespacePath),
            new CodeSectionSeparatedListOptional(
                Seperator.ItemSeparator,
                new CodeSectionBranchRequired(Identifier.NameSpaceElement,
                    new CodeSectionBranchOptional(NameSpaceKeyWord.as,
                        new CodeSectionCodePartRequired(Identifier.NameSpaceElement)
                    ),
                )
            ),
            new CodeSectionBranchOptional(NameSpaceKeyWord.as, new CodeSectionCodePartRequired(Identifier.NameSpace))
        ]
    )
];