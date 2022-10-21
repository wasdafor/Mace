
import * as fs from 'fs';
import './Config/config';

const file = fs.readFileSync('./Mace Program/Program.mace', 'utf8');
console.log(file);

enum Type {
  class,
  float,
  int,
  string,
  char,
  void,
  null,
  percent,
  bool,
  //When no type is needed
  none,
}

enum Expected {
  Identifier,
  DataType,
  CodeScope,
  ExpressionScope,
  ArrayScope,
  Expression,
  EndLine,
  Operator,
  ImportNameSpace,
  NameSpace,
}


class CurrentStatus {
  public constructor(currentIndex: number, expected: Expected[], currentCombinedString: string, expressionReturnType?: Type) {
    this.currentIndex = currentIndex;
    this.expected = expected;
    this.expressionReturnType = expressionReturnType ?? Type.none;
    this.currentCombinedString = currentCombinedString;
  }

  expressionReturnType: Type;
  expected: Expected[];
  currentIndex: number;
  currentCombinedString: string;
}

//Start at -1 one because the readNext adds 1 to the current index
readNext(new CurrentStatus(-1, [Expected.ImportNameSpace,Expected.NameSpace],''))

function readNext(CurrentStatus: CurrentStatus) {
  for (let i = CurrentStatus.currentIndex + 1; i < file.length; i++) {
    const character = file[i];

    //If part is any identifier or keyword
    if (startIdentifierChars.includes(character)) {

    }
    //If part is any string
    else if (stringOrCharQuotes.includes(character)) {

    }
    //If part is start of expression or [function, if, while, for, else if, switch] head
    else if (roundBrackets[0] === character) {

    }
    //If part is start of code scope or [map, set] defintion
    else if (crulyBrackets[0] === character) {

    }
    //If part is start of list indexing or list defintion or list slicing
    else if (squareBrackets[0] === character) {

    }
    //If part is start of defining generic or start of defining multiple return types
    else if (arrowBrackets[0] === character) {

    }
    //If part is an item seperator for [array, list, map, set, function parameters]
    else if (itemSeparator === character) {

    }
    //If part is start of operator
    else if (allOperatorChars.includes(character)) {

    }
    //If part is start of number
    else if (numbersChars.includes(character)) {

    }
    //If part is decimal separator or access operator
    else if (character === decimalSeparatorOrAccessOperator) {

    }
    else {
      //Incorrect character
    }
  }
}