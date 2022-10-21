//This file will contain variables that wil be used to determin the syntax of the mace programming language

/* KEYWORDS */

//This keyword is used to import other namespaces at he top of the file
const importNameSpace = 'using';

//This is used to define a namespace scope
const namespaceScope = 'namespace';

//Type qualifiers
const typeQualifiers = ['const', 'readonly', 'writeonly'];

//Acces modifiers
const accessModifiers = ['public', 'private', 'protected'];

//Get and set
const properties = ['get', 'set']


/* IDENTIFIERS */

//These are al the numbers you can use when defining a number
const numbersChars = '0123456789';

//These are the first letter that you can use in any identifier [class, function, variable, enum] name
const startIdentifierChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
//This first character of a identifier can not be a number because the compiler can in that case mistake an identifier with a number
//That is the reason i am combining the number chars and firstIdentifier chars
const afterStartIdentifierChars = startIdentifierChars + numbersChars


/* STRINGS OR CHARS */

//These are valid quotes to use for a [string, char]
const stringOrCharQuotes = '\'"';


/* BRACKETS */

const roundBrackets = '()';
const crulyBrackets = '{}';
const squareBrackets = '[]';
const arrowBrackets = '<>';


/* ITEM SEPARATORS */

//Item separator for [array, list, map, set, function parameters]
const itemSeparator = ',';


/* DECIMAL SEPARATORS OR ACCESS OPERATOR */

const decimalSeparatorOrAccessOperator = '.';


/* OPERATORS */

const booleanOperators = ['&&', '||', '!'];
const assignmentOperators = ['=', '+=', '-+', '*=', '/=', '%=', '^='];
const shortAssignmentOperators = ['++', '--'];
const arithmeticOperators = ['+', '-', '*', '/', '%', '^'];
const comperisionOperators = ['==', '!=', '>', '>=', '&<', '&<=', '&==', '&!=', '&>', '&>=', '&<', '&<=', '|==', '|!=', '|>', '|>=', '|<', '|<='];
//All unique characters that are used in any operator
const allOperatorChars = Array.from(new Set(booleanOperators.join('') + assignmentOperators.join('') + shortAssignmentOperators.join('') + arithmeticOperators.join('') + comperisionOperators.join(''))).join('');
  