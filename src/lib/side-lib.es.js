var Ql = Object.defineProperty;
var Xl = Object.getPrototypeOf;
var Zl = Reflect.get;
var dr = (g) => {
  throw TypeError(g);
};
var Yl = (g, i, e) => i in g ? Ql(g, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : g[i] = e;
var l = (g, i, e) => Yl(g, typeof i != "symbol" ? i + "" : i, e), ni = (g, i, e) => i.has(g) || dr("Cannot " + e);
var c = (g, i, e) => (ni(g, i, "read from private field"), e ? e.call(g) : i.get(g)), I = (g, i, e) => i.has(g) ? dr("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(g) : i.set(g, e), y = (g, i, e, n) => (ni(g, i, "write to private field"), n ? n.call(g, e) : i.set(g, e), e), m = (g, i, e) => (ni(g, i, "access private method"), e);
var Os = (g, i, e, n) => ({
  set _(s) {
    y(g, i, s, e);
  },
  get _() {
    return c(g, i, n);
  }
}), si = (g, i, e) => Zl(Xl(g), e, i);
class Ln {
  constructor(i) {
    this.name = i;
  }
}
const C = class C extends Ln {
  /**
   * Returns the Character representation of an ascii code.
   * @param {Number} code The ascii code of a character
   * @returns {Character} The instance of Character that represents the ascii code.
   */
  static getCategory(i) {
    return i >= 65 && i <= 90 || i >= 97 && i <= 122 ? C.Letter : i >= 48 && i <= 57 ? C.Digit : i === 46 ? C.Decimal : i === 95 ? C.Underscore : i === 32 ? C.Space : i === 9 ? C.Tab : i === 10 || i === 13 ? C.NewLine : i === 40 ? C.OpenParentheses : i === 41 ? C.CloseParentheses : i === 123 ? C.OpenCurlyBrace : i === 125 ? C.CloseCurlyBrace : i === 91 ? C.OpenSquareBracket : i === 93 ? C.CloseSquareBracket : i === 44 ? C.Comma : i === 58 ? C.Colon : i === 59 ? C.Semicolon : i === 43 ? C.Plus : i === 45 ? C.Minus : i === 42 ? C.Asterisk : i === 37 ? C.Modulo : i === 61 ? C.Equals : i === 60 ? C.LessThan : i === 62 ? C.GreaterThan : i === 33 ? C.Exclamation : i === 47 ? C.ForwardSlash : i === 92 ? C.BackSlash : i === 35 ? C.Hash : i === 39 ? C.SingleQuote : i === 34 ? C.DoubleQuote : C.Unknown;
  }
  /**
   * Checks if this is a single or double quote.
   * @returns {Boolean} True if this Character is a quote, false otherwise.
   */
  isQuote() {
    return this === C.SingleQuote || this === C.DoubleQuote;
  }
};
/**
 * (Static) An uppercase or lowercase letter.
 */
l(C, "Letter", new C("letter")), /**
 * (Static) A single digit, 0-9
 */
l(C, "Digit", new C("digit")), /**
 * (Static) A decimal point (or period / fullstop / dot)
 */
l(C, "Decimal", new C("decimal")), /**
 * (Static) An underscore, _
 */
l(C, "Underscore", new C("underscore")), /**
 * (Static) A space
 */
l(C, "Space", new C("space")), /**
 * (Static) A tab character, \t
 */
l(C, "Tab", new C("tab")), /**
 * (Static) A newline character, \n or \r
 */
l(C, "NewLine", new C("newline")), /**
 * (Static) An opening parenthesis, (
 */
l(C, "OpenParentheses", new C("openParentheses")), /**
 * (Static) A closing parenthesis, )
 */
l(C, "CloseParentheses", new C("closeParentheses")), /**
 * (Static) An openint curly brace, {
 */
l(C, "OpenCurlyBrace", new C("openCurlyBrace")), /**
 * (Static) A closing curly brace, }
 */
l(C, "CloseCurlyBrace", new C("closeCurlyBrace")), /**
 * (Static) An opening square bracket, [
 */
l(C, "OpenSquareBracket", new C("openSquareBracket")), /**
 * (Static) A closing square bracket, ]
 */
l(C, "CloseSquareBracket", new C("closeSquareBracket")), /** (Static) A comma. */
l(C, "Comma", new C("comma")), /** (Static) A colon, : */
l(C, "Colon", new C("colon")), /** (Static) A semicolon, ; */
l(C, "Semicolon", new C("semicolon")), /** (Static) A plus sign, + */
l(C, "Plus", new C("plus")), /** (Static) A minus sign, - */
l(C, "Minus", new C("minus")), /** (Static) An asterisk, * */
l(C, "Asterisk", new C("asterisk")), /** (Static) The modulo operator, % */
l(C, "Modulo", new C("modulo")), /** (Static) An equals sign, = */
l(C, "Equals", new C("equals")), /** (Static) The less than symbol, < */
l(C, "LessThan", new C("lessThan")), /** (Static) The greater than symbol, > */
l(C, "GreaterThan", new C("greaterThan")), /** (Static) An exclamation mark, ! */
l(C, "Exclamation", new C("exclamation")), /** (Static) A forward slash, / */
l(C, "ForwardSlash", new C("forwardSlash")), /** (Static) A back slash, \ */
l(C, "BackSlash", new C("backSlash")), /** (Static) The hash symbol, # */
l(C, "Hash", new C("hash")), /** (Static) A single quote mark, ' */
l(C, "SingleQuote", new C("singleQuote")), /** (Static) A double quote mark, " */
l(C, "DoubleQuote", new C("doubleQuote")), /** (Static) Any other character not described. */
l(C, "Unknown", new C("unknown"));
let V = C;
const B = class B extends Ln {
};
l(B, "BlockDefinitions", new B("BlockDefinitions")), l(B, "LogicalOperators", new B("LogicalOperators")), l(B, "Types", new B("Types")), l(B, "MathsOperators", new B("MathsOperators")), l(B, "ComparisonOperators", new B("ComparisonOperators")), l(B, "OtherKeywords", new B("OtherKeywords")), l(B, "BuiltInFunctions", new B("BuiltInFunctions")), l(B, "BuiltInMethods", new B("BuiltInMethods")), l(B, "OtherMethods", new B("OtherMethods")), l(B, "Identifiers", new B("Identifiers")), l(B, "MagicMethods", new B("MagicMethods")), l(B, "SpecialVariables", new B("SpecialVariables")), l(B, "Properties", new B("Properties")), l(B, "BuiltInExceptions", new B("BuiltInExceptions")), l(B, "Literals", new B("Literals")), l(B, "CompoundTypes", new B("CompoundTypes")), l(B, "Other", new B("Other")), l(B, "Comment", new B("Comment")), l(B, "Unknown", new B("Unknown")), l(B, "BuiltInModules", new B("BuiltInModules")), l(B, "ModuleFunctions", new B("ModuleFunctions")), l(B, "ModuleProperties", new B("ModuleProperties")), l(B, "ClassAttributes", new B("ClassAttributes")), l(B, "ImportedEntities", new B("ImportedEntities")), l(B, "TypeHint", new B("TypeHint")), // Refactor: multipart expressions
l(B, "FunctionCall", new B("FunctionCall")), l(B, "MethodCall", new B("MethodCall")), l(B, "ExceptionCall", new B("ExceptionCall")), l(B, "BlockDefinitionStatement", new B("BlockDefinitionStatement")), l(B, "Group", new B("Group")), l(B, "MultipartValue", new B("MultipartValue")), l(B, "Assignment", new B("Assigment")), l(B, "KeywordStatement", new B("KeywordStatement"));
let a = B;
const r = class r extends Ln {
};
// Block definitions - all in lookup
l(r, "ClassDefinition", new r("class")), l(r, "FunctionDefinition", new r("def")), l(r, "ElifDefinition", new r("elif")), l(r, "ElseDefinition", new r("else")), l(r, "ExceptDefinition", new r("except")), l(r, "FinallyDefinition", new r("finally")), l(r, "ForDefinition", new r("for")), l(r, "IfDefinition", new r("if")), l(r, "LambdaDefinition", new r("lambda")), l(r, "TryDefinition", new r("try")), l(r, "WhileDefinition", new r("while")), l(r, "DocumentDefinition", new r("document")), // for identifying document level scope
l(r, "ListComprehension", new r("listComprehension")), // for identifying list comp scope (loop variables)
// Logical operators - all in lookup
l(r, "AndOperator", new r("and")), l(r, "NotOperator", new r("not")), l(r, "OrOperator", new r("or")), // Types - all in lookup
l(r, "FalseType", new r("False")), l(r, "NoneType", new r("None")), l(r, "TrueType", new r("True")), // Other keywords - all in lookup
l(r, "AsKeyword", new r("AsKeyword")), l(r, "AssertKeyword", new r("AssertKeyword")), l(r, "BreakKeyword", new r("BreakKeyword")), l(r, "ContinueKeyword", new r("continue")), l(r, "DelKeyword", new r("del")), l(r, "FromKeyword", new r("from")), l(r, "ImportKeyword", new r("import")), l(r, "InKeyword", new r("in")), l(r, "IsKeyword", new r("is")), l(r, "NotInKeyword", new r("not in")), l(r, "IsNotKeyword", new r("is not")), l(r, "PassKeyword", new r("pass")), l(r, "RaiseKeyword", new r("raise")), l(r, "ReturnKeyword", new r("return")), l(r, "WithKeyword", new r("with")), l(r, "YieldKeyword", new r("yield")), l(r, "GlobalKeyword", new r("global")), // Operators - all in lookup
l(r, "AddOperator", new r("+")), l(r, "SubtractOperator", new r("-")), l(r, "MultiplyOperator", new r("*")), l(r, "DivideOperator", new r("/")), l(r, "ModulusOperator", new r("%")), l(r, "ExponentOperator", new r("**")), l(r, "IntDivideOperator", new r("//")), l(r, "AssignmentOperator", new r("=")), l(r, "IncrementOperator", new r("+=")), l(r, "DecrementOperator", new r("-=")), l(r, "MultiplyAssignOperator", new r("*=")), l(r, "DivideAssignOperator", new r("/=")), l(r, "RemainderAssignOperator", new r("%=")), l(r, "IntDivideAssignOperator", new r("//=")), l(r, "ExponentAssignOperator", new r("**=")), l(r, "EqualOperator", new r("==")), l(r, "NotEqualOperator", new r("!=")), l(r, "GreaterThanOperator", new r(">")), l(r, "LessThanOperator", new r("<")), l(r, "GreaterThanOrEqualOperator", new r(">=")), l(r, "LessThanOrEqualOperator", new r("<=")), l(r, "TypeHintReturn", new r("->")), // Built-in functions (selected) - all in lookup
l(r, "AbsFunction", new r("abs")), l(r, "AllFunction", new r("all")), l(r, "AnyFunction", new r("any")), l(r, "AsciiFunction", new r("ascii")), l(r, "AssertFunction", new r("assert")), l(r, "BinFunction", new r("bin")), l(r, "BoolFunction", new r("bool")), l(r, "CallableFunction", new r("callable")), l(r, "ChrFunction", new r("chr")), l(r, "DictFunction", new r("dict")), l(r, "DivModFunction", new r("divmod")), l(r, "EnumerateFunction", new r("enumerate")), l(r, "EvalFunction", new r("eval")), l(r, "ExecFunction", new r("exec")), l(r, "ExitFunction", new r("exit")), l(r, "FilterFunction", new r("filter")), l(r, "FloatFunction", new r("float")), l(r, "FormatFunction", new r("format")), l(r, "GetAttrFunction", new r("getattr")), l(r, "GlobalsFunction", new r("globals")), l(r, "HasAttrFunction", new r("hasattr")), l(r, "InputFunction", new r("input")), l(r, "IntFunction", new r("int")), l(r, "IsInstanceFunction", new r("isinstance")), l(r, "LenFunction", new r("len")), l(r, "ListFunction", new r("list")), l(r, "MapFunction", new r("map")), l(r, "MaxFunction", new r("max")), l(r, "MinFunction", new r("min")), l(r, "OpenFunction", new r("open")), l(r, "OrdFunction", new r("ord")), l(r, "PowFunction", new r("pow")), l(r, "PrintFunction", new r("print")), l(r, "QuitFunction", new r("quit")), l(r, "RangeFunction", new r("range")), l(r, "ReversedFunction", new r("reversed")), l(r, "RoundFunction", new r("round")), l(r, "SetFunction", new r("set")), l(r, "SortedFunction", new r("sorted")), l(r, "StrFunction", new r("str")), l(r, "SumFunction", new r("sum")), l(r, "TupleFunction", new r("tuple")), l(r, "TypeFunction", new r("type")), l(r, "ZipFunction", new r("zip")), // Built-in String methods - all in lookup
l(r, "Capitalize", new r("capitalize")), l(r, "Casefold", new r("casefold")), l(r, "Center", new r("center")), l(r, "Count", new r("count")), l(r, "Encode", new r("encode")), l(r, "EndsWith", new r("endswith")), l(r, "ExpandTabs", new r("expandtabs")), l(r, "Find", new r("find")), l(r, "Format", new r("format")), l(r, "FormatMap", new r("format_map")), l(r, "Index", new r("index")), l(r, "IsAlnum", new r("isalnum")), l(r, "IsAlpha", new r("isalpha")), l(r, "IsAscii", new r("isascii")), l(r, "IsDecimal", new r("isdecimal")), l(r, "IsDigit", new r("isdigit")), l(r, "IsIdentifier", new r("isidentifier")), l(r, "IsLower", new r("islower")), l(r, "IsNumeric", new r("isnumeric")), l(r, "IsPrintable", new r("isprintable")), l(r, "IsSpace", new r("isspace")), l(r, "IsTitle", new r("istitle")), l(r, "IsUpper", new r("isupper")), l(r, "Join", new r("join")), l(r, "LJust", new r("ljust")), l(r, "Lower", new r("lower")), l(r, "LStrip", new r("lstrip")), l(r, "MakeTrans", new r("maketrans")), l(r, "Partition", new r("partition")), l(r, "Replace", new r("replace")), l(r, "RFind", new r("rfind")), l(r, "RIndex", new r("rindex")), l(r, "RJust", new r("rjust")), l(r, "RPartition", new r("rpartition")), l(r, "RSplit", new r("rsplit")), l(r, "RStrip", new r("rstrip")), l(r, "Split", new r("split")), l(r, "SplitLines", new r("splitlines")), l(r, "StartsWith", new r("startswith")), l(r, "Strip", new r("strip")), l(r, "SwapCase", new r("swapcase")), l(r, "Title", new r("title")), l(r, "Translate", new r("translate")), l(r, "Upper", new r("upper")), l(r, "ZFill", new r("zfill")), // Built-in list methods - all in lookup 
l(r, "Append", new r("append")), l(r, "Clear", new r("clear")), l(r, "Copy", new r("copy")), l(r, "Extend", new r("extend")), l(r, "Insert", new r("insert")), l(r, "Pop", new r("pop")), l(r, "Remove", new r("remove")), l(r, "Reverse", new r("reverse")), l(r, "Sort", new r("sort")), // Built-in dictionary methods - all in lookup
l(r, "FromKeys", new r("fromkeys")), l(r, "Get", new r("get")), l(r, "Items", new r("items")), l(r, "Keys", new r("keys")), l(r, "PopItem", new r("popitem")), l(r, "SetDefault", new r("setdefault")), l(r, "Update", new r("update")), l(r, "Values", new r("values")), // Built-in set methods - all in lookup
l(r, "Add", new r("add")), l(r, "Difference", new r("difference")), l(r, "DifferenceUpdate", new r("difference_update")), l(r, "Discard", new r("discard")), l(r, "Intersection", new r("intersection")), l(r, "IntersectionUpdate", new r("intersection_update")), l(r, "IsDisjoint", new r("isdisjoint")), l(r, "IsSubset", new r("issubset")), l(r, "IsSuperset", new r("issuperset")), l(r, "SymmetricDifference", new r("symmetric_difference")), l(r, "SymmetricDifferenceUpdate", new r("symmetric_difference_update")), l(r, "Union", new r("union")), // Built-in file methods - all in lookup
l(r, "Close", new r("close")), l(r, "Detach", new r("detach")), l(r, "FileNo", new r("fileno")), l(r, "Flush", new r("flush")), l(r, "IsAtty", new r("isatty")), l(r, "Read", new r("read")), l(r, "Readable", new r("readable")), l(r, "ReadLine", new r("readline")), l(r, "ReadLines", new r("readlines")), l(r, "Seek", new r("seek")), l(r, "Seekable", new r("seekable")), l(r, "Tell", new r("tell")), l(r, "Truncate", new r("truncate")), l(r, "Writable", new r("writable")), l(r, "Write", new r("write")), l(r, "WriteLines", new r("writelines")), // Magic methods - all in lookup
l(r, "Main", new r("__main__")), l(r, "Cmp", new r("__cmp__")), l(r, "Eq", new r("__eq__")), l(r, "Ne", new r("__ne__")), l(r, "Lt", new r("__lt__")), l(r, "Gt", new r("__gt__")), l(r, "Le", new r("__le__")), l(r, "Ge", new r("__ge__")), l(r, "Str", new r("__str__")), l(r, "SpecialContains", new r("__contains__")), l(r, "SpecialLen", new r("__len__")), // Special variables - all in lookup
l(r, "Name", new r("__name__")), l(r, "Self", new r("__self__")), l(r, "Doc", new r("__doc__")), l(r, "GetAttrVariable", new r("__getattr__")), l(r, "SetAttrVariable", new r("__setattr__")), l(r, "ClassVariable", new r("__class__")), l(r, "R", new r("r")), l(r, "F", new r("f")), l(r, "Sep", new r("sep")), // optional param in print
l(r, "End", new r("end")), // optional param in print
// Punctuation - all in lookup
l(r, "Dot", new r(".")), l(r, "OpenParenthesis", new r("(")), l(r, "CloseParenthesis", new r(")")), l(r, "OpenSquareBracket", new r("[")), l(r, "CloseSquareBracket", new r("]")), l(r, "OpenBrace", new r("{")), l(r, "CloseBrace", new r("}")), l(r, "Comma", new r(",")), l(r, "Colon", new r(":")), l(r, "SingleQuote", new r("'")), l(r, "DoubleQuote", new r('"')), l(r, "MultiLineCommentDelimiter", new r("'''")), // Rest - not in lookup
l(r, "ImportAll", new r("import all (*)")), l(r, "NamedImport", new r("named import")), // Built-in exceptions - one category to cover all
l(r, "ExceptionName", new r("exceptionName")), // Identifiers, literals, and comments - not in lookup
l(r, "VariableName", new r("variableName")), l(r, "FunctionName", new r("functionName")), l(r, "MethodName", new r("methodName")), l(r, "ClassName", new r("className")), l(r, "PropertyName", new r("propertyName")), l(r, "ModuleName", new r("moduleName")), l(r, "IntLiteral", new r("intLiteral")), l(r, "StringLiteral", new r("stringLiteral")), l(r, "ContinuationLine", new r("continuationLine")), l(r, "Separator", new r("separator")), l(r, "FloatLiteral", new r("floatLiteral")), l(r, "SingleLineComment", new r("singleLineComment")), l(r, "MultiLineComment", new r("multilineComment")), l(r, "TypeHint", new r("typeHint")), l(r, "StrType", new r("strType")), l(r, "IntType", new r("intType")), l(r, "FloatType", new r("floatType")), l(r, "BoolType", new r("boolType")), l(r, "ListType", new r("listType")), l(r, "SetType", new r("setType")), l(r, "DictType", new r("dictType")), l(r, "TupleType", new r("tupleType")), // Values of complex data types and related - not in lookup
l(r, "ListDefinition", new r("listDefinition")), l(r, "TupleDefinition", new r("tupleDefinition")), l(r, "SetDefinition", new r("setDefinition")), l(r, "DictDefinition", new r("dictDefinition")), l(r, "IndexKey", new r("indexKey")), // i.e. index or key access of list / tuple / dict
l(r, "Slice", new r("slice")), l(r, "Unknown", new r("unknown")), // Modules
l(r, "RandomModule", new r("randomModule")), l(r, "MathModule", new r("mathModule")), l(r, "StringModule", new r("stringModule")), l(r, "ReModule", new r("reModule")), l(r, "Pattern", new r("Pattern")), l(r, "Match", new r("Match")), l(r, "Sys", new r("sys")), // Random module methods
l(r, "Seed", new r("seed")), l(r, "GetState", new r("getstate")), l(r, "SetState", new r("setstate")), l(r, "GetRandBits", new r("getrandbits")), l(r, "RandRange", new r("randrange")), l(r, "RandInt", new r("randint")), l(r, "Choice", new r("choice")), l(r, "Choices", new r("choices")), l(r, "Shuffle", new r("shuffle")), l(r, "Sample", new r("sample")), l(r, "RandomMethod", new r("random")), l(r, "Uniform", new r("uniform")), l(r, "Triangular", new r("triangular")), l(r, "BetaVariate", new r("betavariate")), l(r, "ExpoVariate", new r("expovariate")), l(r, "GammaVariate", new r("gammavariate")), l(r, "Gauss", new r("gauss")), l(r, "LogNormVariate", new r("lognormvariate")), l(r, "NormalVariate", new r("normalvariate")), l(r, "VonMisesVariate", new r("vonmisesvariate")), l(r, "ParetoVariate", new r("paretovariate")), l(r, "WeibullVariate", new r("weibullvariate")), // math module methods - compound expression value node
l(r, "Acos", new r("acos")), // float
l(r, "Acosh", new r("acosh")), // float
l(r, "Asin", new r("asin")), // float
l(r, "Asinh", new r("asinh")), // float
l(r, "Atan", new r("atan")), // float
l(r, "Atan2", new r("atan2")), // float
l(r, "Atanh", new r("atanh")), // float
l(r, "Ceil", new r("ceil")), // int
l(r, "Comb", new r("comb")), // int
l(r, "CopySign", new r("copysign")), // float
l(r, "Cos", new r("cos")), // float
l(r, "Cosh", new r("cosh")), // float
l(r, "Degrees", new r("degrees")), // float
l(r, "Dist", new r("dist")), // float
l(r, "Erf", new r("erf")), // float
l(r, "Erfc", new r("erfc")), // float
l(r, "Exp", new r("exp")), // float
l(r, "Expm1", new r("expm1")), // float
l(r, "Fabs", new r("fabs")), // float
l(r, "Factorial", new r("factorial")), // int
l(r, "Floor", new r("floor")), // int
l(r, "Fmod", new r("fmod")), // float
l(r, "Frexp", new r("frexp")), // tuple
l(r, "Fsum", new r("fsum")), // float
l(r, "Gamma", new r("gamma")), // float
l(r, "Gcd", new r("gcd")), // int
l(r, "Hypot", new r("hypot")), // float
l(r, "IsClose", new r("isclose")), // bool
l(r, "IsFinite", new r("isfinite")), // bool
l(r, "IsInf", new r("isinf")), // bool
l(r, "IsNaN", new r("isnan")), // bool
l(r, "ISqrt", new r("isqrt")), // int
l(r, "Ldexp", new r("ldexp")), // float
l(r, "LGamma", new r("lgamma")), // float
l(r, "Log", new r("log")), // float
l(r, "Log10", new r("log10")), // float
l(r, "Log1P", new r("log1p")), // float
l(r, "Log2", new r("log2")), // float
l(r, "Perm", new r("perm")), // int
l(r, "Pow", new r("pow")), // float
l(r, "Prod", new r("prod")), // number
l(r, "Radians", new r("radians")), // float
l(r, "Remainder", new r("remainder")), // remainder
l(r, "Sin", new r("sin")), // float
l(r, "Sinh", new r("sinh")), // float
l(r, "Sqrt", new r("sqrt")), // float
l(r, "Tan", new r("tan")), // float
l(r, "Tanh", new r("tanh")), // float
l(r, "Trunc", new r("trunc")), // int
l(r, "E", new r("e")), // float
l(r, "Inf", new r("inf")), // float
l(r, "Nan", new r("nan")), // float
l(r, "Pi", new r("pi")), // float
l(r, "Tau", new r("tau")), // float
// String module entities
l(r, "AsciiLetters", new r("ascii_letters")), // string prop
l(r, "AsciiLowercase", new r("ascii_lowercase")), // string prop
l(r, "AsciiUppercase", new r("ascii_uppercase")), // string prop
l(r, "Digits", new r("digits")), // string prop
l(r, "Hexdigits", new r("hexdigits")), // string prop
l(r, "Octdigits", new r("octdigits")), // string prop
l(r, "Punctuation", new r("punctuation")), // string prop
l(r, "Printable", new r("printable")), // string prop
l(r, "Whitespace", new r("whitespace")), // string prop
l(r, "Formatter", new r("Formatter")), // Unknown (Formatter object), function
l(r, "Template", new r("Template")), // Unknown (Template object)
l(r, "Capwords", new r("capwords")), // string functions
// Re module entities
l(r, "ReA", new r("A")), // unknown (RegexFlag)
l(r, "ReASCII", new r("ASCII")), // unknown
l(r, "ReDebug", new r("DEBUG")), // unknown
l(r, "ReI", new r("I")), // unknown
l(r, "ReIGNORECASE", new r("IGNORECASE")), // unknown
l(r, "ReL", new r("L")), // unknown
l(r, "ReLOCALE", new r("LOCALE")), // unknown
l(r, "ReM", new r("M")), // unknown
l(r, "ReMULTILINE", new r("MULTILINE")), // unknown
l(r, "ReS", new r("S")), // unknown
l(r, "ReDOTALL", new r("DOTALL")), // unknown
l(r, "ReX", new r("X")), // unknown
l(r, "ReVERBOSE", new r("VERBOSE")), // unknown
l(r, "Compile", new r("compile")), // re.Pattern
l(r, "Search", new r("search")), // unknown (Match or None)
l(r, "Match", new r("match")), // unknown (Match or None)
l(r, "FullMatch", new r("fullmatch")), // unknown
// Include existing Split as valid method
l(r, "FindAll", new r("findall")), // list
l(r, "FindIter", new r("finditer")), // unknown
l(r, "Sub", new r("sub")), // string
l(r, "SubN", new r("subn")), // tuple
l(r, "Escape", new r("escape")), // string
l(r, "Purge", new r("purge")), // None
// Sys module entities
l(r, "AddAuditHook", new r("addaudithook")), // none, function
l(r, "Audit", new r("audit")), // none, function
l(r, "CallTracing", new r("call_tracing")), // unknown function
l(r, "ClearTypeCache", new r("_clear_type_cache")), // none function
l(r, "CurrentFrames", new r("_current_frames")), // dict function
l(r, "CurrentExceptions", new r("_current_exceptions")), // dict function
l(r, "BreakpointHook", new r("breakpointhook")), // none function
l(r, "DebugMallocStats", new r("_debugmallocstats")), // none function
l(r, "DisplayHook", new r("displayhook")), // non function
l(r, "ExceptHook", new r("excepthook")), // none function
l(r, "ExcInfo", new r("exc_info")), // tuple function
l(r, "SysExit", new r("exit")), // none, function
l(r, "GetAllocatedBlocks", new r("getallocatedblocks")), // int function
l(r, "GetAndroidApiLevel", new r("getandroidapilevel")), // int function
l(r, "GetDefaultEncoding", new r("getdefaultencoding")), // string function
l(r, "GetDLOpenFlags", new r("getdlopenflags")), // int function
l(r, "GetFileSystemEncoding", new r("getfilesystemencoding")), // string function
l(r, "GetFileSystemEncodeErrors", new r("getfilesystemencodeerrors")), // string function
l(r, "GetRefCount", new r("getrefcount")), // int function
l(r, "GetRecursionLimit", new r("getrecursionlimit")), // int function
l(r, "GetSizeOf", new r("getsizeof")), // int function
l(r, "GetSwitchInterval", new r("getswitchinterval")), // float function
l(r, "GetFrame", new r("_getframe")), // unknown function
l(r, "GetProfile", new r("getprofile")), // none function
l(r, "GetTrace", new r("gettrace")), // none function
l(r, "GetWindowsVersion", new r("getwindowsversion")), // tuple function
l(r, "GetAsyncGenHooks", new r("get_asyncgen_hooks")), // unknown function
l(r, "GetCoroutineOriginTrackingDepth", new r("get_coroutine_origin_tracking_depth")), // int function
l(r, "Intern", new r("intern")), // unknown function
l(r, "IsFinalizing", new r("is_finalizing")), // bool function
l(r, "SetDLOpenFlags", new r("setdlopenflags")), // none function
l(r, "SetProfile", new r("setprofile")), // unknown function
l(r, "SetRecursionLimit", new r("setrecursionlimit")), // none function
l(r, "SetSwitchInterval", new r("setswitchinterval")), // none function
l(r, "SetTrace", new r("settrace")), // none function
l(r, "SetAsyncgenHooks", new r("set_asyncgen_hooks")), // none function
l(r, "EnableLegacyWindowsFSEncoding", new r("_enablelegacywindowsfsencoding")), // none function
l(r, "ABIFlags", new r("abiflags")), // string, prop
l(r, "Argv", new r("argv")), // list, prop
l(r, "BaseExecPrefix", new r("base_exec_prefix")), // string, prop
l(r, "BasePrefix", new r("base_prefix")), // string prop
l(r, "ByteOrder", new r("byte_order")), // string prop
l(r, "BuiltInModuleNames", new r("built_in_module_names")), // tuple prop
l(r, "Copyright", new r("copyright")), // string prop
l(r, "DllHandle", new r("dllhandle")), // int prop
l(r, "DontWriteBytecode", new r("dont_write_bytecode")), // bool prop
l(r, "PycachePrefix", new r("pycache_prefix")), // unknown prop
l(r, "ExecPrefix", new r("exec_prefix")), // string prop
l(r, "Executable", new r("executable")), // string prop
l(r, "Flags", new r("flags")), // unknown prop
l(r, "FloatInfo", new r("float_info")), // unknown prop
l(r, "FloatReprStyle", new r("float_repr_style")), // string prop
l(r, "HashInfo", new r("hash_info")), // unknown prop
l(r, "HexVersion", new r("hexversion")), // int prop
l(r, "Implementation", new r("implementation")), // unknown prop
l(r, "IntInfo", new r("int_info")), // unknown prop
l(r, "LastType", new r("last_type")), // unknown prop
l(r, "LastValue", new r("last_value")), // unknown prop
l(r, "LastTraceback", new r("last_traceback")), // unknown prop
l(r, "MaxSize", new r("maxsize")), // int prop
l(r, "MaxUnicode", new r("maxunicode")), // int prop
l(r, "MetaPath", new r("meta_path")), // list prop
l(r, "Modules", new r("modules")), // dict prop
l(r, "OrigArgv", new r("orig_argv")), // list prop
l(r, "Path", new r("path")), // list prop
l(r, "PathHooks", new r("path_hooks")), // list prop
l(r, "PathImporterCache", new r("path_importer_cache")), // dict prop
l(r, "Platform", new r("platform")), // string prop
l(r, "Prefix", new r("prefix")), // string prop
l(r, "PS1", new r("ps1")), // string prop
l(r, "PS2", new r("ps2")), // string prop
l(r, "StdIn", new r("stdin")), // unknown prop
l(r, "StdOut", new r("stdout")), // unknown prop
l(r, "StdErr", new r("stderr")), // unknown prop
l(r, "StdLibModuleNames", new r("stdlib_module_names")), // unknown prop
l(r, "ThreadInfo", new r("thread_info")), // unknown prop
l(r, "TracebackLimit", new r("tracebacklimit")), // int prop
l(r, "Version", new r("version")), // string prop
l(r, "ApiVersion", new r("api_version")), // int prop
l(r, "VersionInfo", new r("version_info")), // tuple prop
l(r, "WarnOptions", new r("warnoptions")), // list prop
l(r, "WinVer", new r("winver")), // int prop
l(r, "XOptions", new r("_xoptions")), // dict prop
// Refactor: Multipart expressions
// Calls
l(r, "UserDefinedFunctionCall", new r("UserDefinedFunctionCall")), l(r, "BuiltInFunctionCall", new r("BuiltInFunctionCall")), l(r, "UserDefinedMethodCall", new r("UserDefinedMethodCall")), l(r, "BuiltInMethodCall", new r("BuiltInMethodCall")), l(r, "ExceptionCall", new r("ExceptionCall")), // Block definitions
l(r, "FunctionDefinitionStatement", new r("FunctionDefinitionStatement")), l(r, "MethodDefinitionStatement", new r("MethodDefinitionStatement")), l(r, "ForDefinitionStatement", new r("ForDefinitionStatement")), l(r, "ExceptDefinitionStatement", new r("ExceptDefinitionStatement")), l(r, "ClassDefinitionStatement", new r("ClassDefinitionStatement")), l(r, "LambdaDefinitionStatement", new r("LambdaDefinitionStatement")), l(r, "IfDefinitionStatement", new r("IfDefinitionStatement")), l(r, "ElifDefinitionStatement", new r("ElifDefinitionStatement")), l(r, "ElseDefinitionStatement", new r("ElseDefinitionStatement")), l(r, "WhileDefinitionStatement", new r("WhileDefinitionStatement")), l(r, "TryDefinitionStatement", new r("TryDefinitionStatement")), l(r, "FinallyDefinitionStatement", new r("FinallyDefinitionStatement")), l(r, "TernaryStatement", new r("TernaryStatement")), l(r, "WithDefinitionStatement", new r("WithStatment")), // Group
l(r, "GroupStatement", new r("GroupStatement")), // Other multipart 
l(r, "FString", new r("FString")), // Multipart values
l(r, "SubscriptedExpression", new r("SubscriptedExpression")), l(r, "CalculatedExpression", new r("CalculatedExpression")), l(r, "ComparisonExpression", new r("ComparisonExpression")), l(r, "BooleanExpression", new r("BooleanExpression")), l(r, "IteratorExpression", new r("IteratorExpression")), l(r, "CombinedStringLiteral", new r("CombinedStringLiteral")), l(r, "ReturnStatement", new r("ReturnStatement")), l(r, "PropertyCallExpression", new r("PropertyCallExpression")), // Assignments
l(r, "AssignmentStatement", new r("AssignmentStatement")), l(r, "ChangeStatement", new r("ChangeStatement")), // Statements beginning with keyword
l(r, "ImportStatement", new r("ImportStatement")), l(r, "AssertStatement", new r("AssertStatement")), l(r, "GlobalStatement", new r("GlobalStatement")), l(r, "ThrowStatement", new r("ThrowStatement"));
let t = r;
const A = class A extends Ln {
  constructor(i, e = !1, n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map()) {
    super(i), this.isCustom = e, this.attributes = n, this.methods = s;
  }
  static createCustomType(i) {
    return A[i] = new A(i, !0), A[i];
  }
  toJSON() {
    return {
      name: this.name,
      attributes: Array.from(this.attributes.values()).map((i) => i.toJSON()),
      methods: Array.from(this.methods.values()).map((i) => i.toJSON())
    };
  }
};
l(A, "Int", new A("int")), l(A, "Float", new A("float")), l(A, "Number", new A("number (int or float)")), l(A, "String", new A("string")), l(A, "Bool", new A("bool")), l(A, "List", new A("list")), l(A, "Set", new A("set")), l(A, "Tuple", new A("tuple")), l(A, "Dict", new A("dictionary")), l(A, "File", new A("file")), l(A, "Function", new A("function")), l(A, "Class", new A("class")), // Reserved for unknown classes
l(A, "None", new A("none")), l(A, "Exception", new A("exception")), l(A, "Unknown", new A("unknown data type")), l(A, "NA", new A("N/A")), // For entities that don't have a type e.g. maths operators
l(A, "NotParsed", new A("not parsed")), // Default starting type
l(A, "Invalid", new A("invalid")), // Reserved for cases where an operation would result in a TypeError e.g. string / int
l(A, "Undefined", new A("undefined")), // Reserved for cases where a variable is used before it is declared
// Built in modules
l(A, "Random", new A("random")), l(A, "Math", new A("math")), l(A, "StringModule", new A("string module")), l(A, "Re", new A("re")), l(A, "Pattern", new A("Pattern")), l(A, "Match", new A("Match")), l(A, "Sys", new A("sys"));
let d = A;
const k = class k extends Ln {
  /**
   * Creates a new MisconceptionInfo
   * @param {String} name The unique name of the misconception
   * @param {String} desc The description of the misconception
   */
  constructor(e, n) {
    super(e);
    // Not implemented
    /*static FunctionCallMustBeAssigned = new MisconceptionType("FunctionMustBeAssigned", 
                                                              "Calls to functions that do not return are assigned to variables. There may be a misunderstanding of the syntax of calling functions or a belief that all functions return something.");
    static VariablesNeedParentheses = new MisconceptionType("VariablesNeedParentheses", 
                                                            "An unknown function is called that has a name matching a known variable. There may be a misunderstanding of the syntax of using variables.");
    TODO:
    static NumericInputAssignedNumericType = new MisconceptionType("NumericInputAssignedNumericType", 
                                                                   "A TypeError occurs when a mathematical operation is performed on a String returned by input(). There may be an assumption that input strings containing only numbers are automatically converted to numeric types.");
    static ResultOfAllExpressionsIsSaved = new MisconceptionType("ResultOfAllExpressionsIsSaved", 
                                                                 "A statement (excluding single function / method calls) returns a value but it is not saved or passed. There may be an assumption that the program will remember all calculated values.");
    static CalculationModifiesVariables = new MisconceptionType("CalculationModifiesVariables", 
                                                                "A calculation is performed but the result is not saved or passed. There may be an assumption that performing a calculation modifies the variable or values involved. E.g. x + 1 updates the value of x."); 
    static FunctionCallSavesReturnValue = new MisconceptionType("FunctionCallSavesReturnValue", 
                                                                "A function that returns a value is called but the returned value is not saved or passed. There may be an assumption that that the program automatically remembers the results of a function call, or that the function modifies any arguments that are passed to it.");
    static CaughtExceptionMustBeRaised = new MisconceptionType("CaughtExceptionMustBeRaised", 
                                                               "A named exception is caught then immediately raised in the except block of a try-except. The programmer may be unsure of the purpose of catching an exception or strategies for handling anticipated exceptions from a design point of view.");
    static VariableMustHavePlaceholderValue = new MisconceptionType("VariableMustHavePlaceholderValue", 
                                                                    "A variable is assigned with a literal value then immediately overwritten with the result of calculation or another operation. This may be a simple oversight or a possible misunderstanding of the process and syntax of creating a variable.");
    TODO: 
    static DoubleEqualsAssigns = new MisconceptionType("DoubleEqualsAssigns", 
                                                       "The double equals operator is used in a standalone statement i.e. outside of a conditional, not saved to a variable. This could be a simple typo but it may also indicate confusion between double and single equals operators.");
    */
    /**
     * @type {String}
     */
    l(this, "description");
    this.description = n;
  }
};
// Progmiscon
l(k, "AssignCompares", new k(
  "AssignCompares",
  "A single equals is used where a boolean expression is expected, e.g. in a conditional statement. This may be a typo or confusion between single and double equals operators."
)), // progmiscon
l(k, "ColonAssigns", new k(
  "ColonAssigns",
  "A colon is used between a variable name and a value. This may be a typo."
)), l(k, "CompareMultipleValuesWithOr", new k(
  "CompareMultipleValuesWithOr",
  "A boolean expression has the form a == some_value or other_value, where other_value is non-boolean. There is likely a misunderstanding of the syntax of comparing multiple values."
)), // Done
// Progmiscon
l(k, "ComparisonWithBoolLiteral", new k(
  "ComparisonWithBoolLiteral",
  'A boolean expression contains "== True" or "== False". The programmer may believe that explicitly checking equality is always necessary in a boolean expression.'
)), // Done
// TODO: Progmiscon ConditionalIsSequence (symptom needed)
// Progmiscon
l(k, "DeferredReturn", new k(
  "DeferredReturn",
  "Code follows a return statement in a function. The programmer may not realise that a return statement causes the function to exit immediately."
)), // Done
// Gama PB.5
l(k, "ForLoopVarIsLocal", new k(
  "ForLoopVarIsLocal",
  "An iterating variable in a for loop overwrites a variable declared before the loop and the value is different from the overwritten value, or the values cannot be determined. This potential misconception is similar to IteratorInitialisedOutsideLoop."
)), l(k, "FunctionCallsNoParentheses", new k(
  "FunctionCallsNoParentheses",
  "An undefined variable has the same name as a function. There may be a misunderstanding about how to call a function. Caution: functions in Python are first class objects, so it is possible that use of the function name without parentheses is intended and there is no misconception."
)), l(k, "FunctionCallsUseSquareBrackets", new k(
  "FunctionCallsUseSquareBrackets",
  "The name of a function is called followed by square brackets rather than parentheses. The programmer may not be aware of when to use which type of bracket."
)), // Done - only in one file
l(k, "IterationRequiresTwoLoops", new k(
  "IterationRequiresTwoLoops",
  "A while loop with an integer loop variable contains a nested for loop. The while loop variable is only modified in the nested for loop and is used to count items in the variable iterated in the for loop. The two nested loops could be replaced with a single for loop using enumerate() or range()."
)), l(k, "IteratorInitialisedOutsideLoop", new k(
  "TargetInitialisedOutsideLoop",
  "The target variable in a for loop is initialised before the loop with the same value. The programmer may not know that the iterating variable is initialised in the for loop definition."
)), // Gama et al PA.3, PB.1, PB.3
l(k, "LocalVariablesAreGlobal", new k(
  "LocalVariablesAreGlobal",
  "An undefined variable in document scope has the same name as a variable with function scope. This may indicate a misunderstanding of variable scope."
)), // Gama et al PD.1
l(k, "LoopCounter", new k(
  "LoopCounter",
  "A for loop target variable is modified in the loop and the modified variable is not used. This may indicate confusion over how loops use loop variables."
)), // Progmiscon
l(k, "MapToBooleanWithIf", new k(
  "MapToBooleanWithIf",
  "A conditional statement checks a boolean expression only to return or assign a value that matches the value of the boolean expression. The programmer may not realise that a boolean expression can be assigned or returned directly."
)), // Done
// Progmiscon
l(k, "MapToBooleanWithTernaryOperator", new k(
  "MapToBooleanWithTernaryOperator",
  "A ternary checks a boolean expression only to return or assign a value that matches the value of the boolean expression. The programmer may not realise that a boolean expression can be assigned or returned directly."
)), // Done
l(k, "NoKeyword", new k(
  "NoKeyword",
  "A block definition keyword (e.g. def, if, while) is missing where one is expected. The programmer may not realise that the keyword is required."
)), // Progmiscon
l(k, "NoReservedWords", new k(
  "NoReservedWords",
  "Any string that meets naming character constraints can be used as an identifier (name of a variable, function, method, or class)."
)), //Gama et al PA.1 - Paramater value set by external source
l(k, "ParameterMustBeAssignedInFunction", new k(
  "ParameterMustBeAssignedInFunction",
  "A user defined function has named parameter but the parameter value is overwritten in the function before it is used e.g. by prompting for command line input. This indicates potential misconceptions about the purpose or use of function parameters."
)), // Progmiscon
l(k, "ParenthesesOnlyIfArgument", new k(
  "ParenthesesOnlyIfArgument",
  "An undefined variable has the same name as a user-defined function with no arguments. There may be a misunderstanding of the syntax of function calls."
)), // Needs testing (no occurrences in dataset)
l(k, "PrintSameAsReturn", new k(
  "PrintSameAsReturn",
  "A call to a function that prints but does not return (including the print() function) is assigned or passed, or a call to a function that prints before returning a value is not assigned or passed. There may be confusion about printing a value versus returning a value."
)), // Done
// Progmiscon 
l(k, "ReturnCall", new k(
  "ReturnCall",
  "Function return values are surrounded by parentheses. There may be a belief that return needs to be called like a function."
)), // TODO
l(k, "ReturnWaitsForLoop", new k(
  "ReturnWaitsForLoop",
  "A return statement in a loop causes the loop to consistently exit on the first iteration. Typically due to a missing if statement, there may be an expectation that the loop implicitly knows when to return and when to continue."
)), // Progmiscon
l(k, "SequentialIfsAreExclusive", new k(
  "ConditionalIsSequence",
  "If statements with very similar conditional statements appear in a sequence. There may be a belief that subsequent if statements will only execute if the previous condition does not. The programmer may not be aware of the efficiency drawbacks of using sequential if statements where a multiway conditional would be more appropriate."
)), l(k, "StringMethodsModifyTheString", new k(
  "StringMethodsModifyTheString",
  "A string method is called but the result is not saved or passed. There may be an assumption that string methods mutate the string."
)), l(k, "TypeConversionModifiesArgument", new k(
  "TypeConversionModifiesArgument",
  "A type conversion function (e.g. int(), float()) is called but the return value is not saved or used."
)), l(k, "TypeMustBeSpecified", new k(
  "TypeMustBeSpecified",
  "A value that is guaranteed to have a particular data type is passed to a type conversion function that returns the same data type. In the case of literals, there may be a belief that type must be specified as in strongly typed languages. In other cases, there may be a misunderstanding or lack of confidence in how Python dynamically determines type."
)), // Done
l(k, "UnusedReturn", new k("UnusedReturn", "The result of a call to a function / method that returns a value is not used in some way.")), // Gama et al PG.4
l(k, "WhileSameAsIf", new k(
  "WhileSameAsIf",
  "A while loop does not modify any of its loop variables and may also always exit during the first iteration. Where this behaviour is intentional, the while definition would be better replaced with an if statement. Where the loop does not exit, there is a risk of an infinite loop."
));
let P = k;
const D = class D extends Ln {
  constructor(e, n) {
    super(e);
    l(this, "description");
    this.description = n;
  }
};
// Error
l(D, "AssignmentInBoolean", new D("AssignmentInBoolean", "An assignment operator is used in a Boolean expression. This could be a typo or an indication of confusion about = and ==.")), // Error
l(D, "AssignmentInReturn", new D("AssignmentInReturn", "A variable is assigned in a return statement.")), // ???
l(D, "AssignedNone", new D("AssignedNoReturn", "A function or method that does not return a value is assigned to a variable, passed as an argument, or used in some way. Commonly seen with the print() function.")), // RiskFactor
l(D, "CompareBoolLiteral", new D("CompareBoolLiteral", "A Boolean expression is compared to a Boolean literal. Although this is not an error, it may indicate a misconception about Boolean values.")), // Error
l(D, "DefinitionFollowedByReservedWord", new D("DefinitionFollowedByReservedWord", "A definition keyword (def or class) is followed by a reserved word, suggesting the intention to define a function or class with the same name as a reserved word.")), // Error
l(D, "DoubleComparisonOperators", new D("DoubleComparisonOperators", "Two comparison operators are used side by side. This may be due to an extra space e.g. <= is written as < =.")), // RiskFactor
l(D, "ForLoopIteratorModified", new D("ForLoopTargetModified", "A for loop target variable is modified in the loop and the modified value is not used.")), // RiskFactor
l(D, "FunctionPrints", new D("FunctionPrints", "A user-defined function contains print statements. This is not an issue unless AssignedNoReturn is also present and print is used in place of return statements.")), // ???
l(D, "InfiniteLoop", new D("InfiniteLoop", "A while loop does not exit.")), // ???
l(D, "LoopReturn", new D("LoopEarlyExit", "A return or break statement causes a loop to always exit on the first iteration.")), // RiskFactor
l(D, "LoopVarModifiedInChildLoop", new D("WhileLoopVarModifiedInChildLoop", "A while loop variable is modified in a nested for or while loop.")), // ???
l(D, "LoopVarNotModified", new D("WhileLoopVarNotModified", "None of the variables used in a while loop definition are modified in the body of the while loop. If the while loop contains a nested loop, only usages of the variable in the outer loop are checked.")), // RiskFactor TO IMPLEMENT
//static MixesSpacesAndTabs = new SymptomType("MixesSpacesAndTabs", "Indentation is created using a mix of tabs and spaces.");
// ???
l(D, "NaturalLanguageBoolean", new D("NaturalLanguageBoolean", `A Boolean expression uses syntax that makes sense in spoken English but may produce unexpected results or even and error in Python. The most common form is checking if a particular expression is equal to one of a range of values using "or <non_boolean>" e.g., "day == 'sat' or 'sun'".`)), // RiskFactor
l(D, "OneLineConditional", new D("OneLineConditional", "A conditional that could be re-written as one line. Although this is not an error, it may indicate a misconception about Boolean values.")), // Error
l(D, "OutOfPlaceBooleanOperator", new D("OutOfPlaceOperatorsInBoolean", "A comparison or logical operator is used in an unexpected place in a conditional expression.")), // RiskFactor
l(D, "OverwrittenVariable", new D("VariableOverwrite", "A variable's value is initialised or changed then overwritten without being used.")), // ???
l(D, "RedundantException", new D("RedundantException", "A specific exception is caught then immediately raised. Suggests confusion about how to work with exceptions.")), // Error
l(D, "ReservedWordAssigned", new D("ReservedWordAssigned", "A reserved word is followed by the assignment operator, suggesting an intention to create a variable with the same name as a reserved word.")), // RiskFactor
l(D, "ReturnInParentheses", new D("ReturnInParentheses", "The return keyword is followed by a value or compound expression in parentheses. May suggest a belief that returned values must be encapsulated in parentheses.")), // RiskFactor
l(D, "SequentialIfs", new D("SequentialIfs", "Multiple if statements appear in sequence with no other code between the if blocks. If statements that contain a return or break at the top level are not included. Depending on the contents of the boolean expressions and each block, it may indicate a misconception about how conditionals are evaluated.")), // Error
l(D, "SubscriptedNonSubscriptable", new D("SubscriptedNonSubscriptable", "Square brackets follow a variable name that does not have a subscriptable type (i.e. is not a string, list, tuple, or dictionary)")), // ???
l(D, "TernaryReturnsBool", new D("TernaryReturnsBool", "A ternary returns a boolean. Although this is not an error, it may indicate a misconception about Boolean values.")), // Error
l(D, "TypeErrorInvalid", new D("InvalidCalculation", "A calculation that produces a TypeError e.g. string + int.")), // RiskFactor
l(D, "TypeUnnecessary", new D("UnnecessaryTypeConversion", "A value that has a guaranteed data type is passed to a type conversion function that produces the same data type. Also captures strings converted to lists.")), // Error
l(D, "UndefinedVariable", new D("UndefinedVariable", "A variable that was not declared is called. Depending on context, may be due to sloppiness (e.g. a typo) or may suggest misconception about variable scope, function parameters, or how to call functions.")), // Error
l(D, "UnexpectedColon", new D("UnexpectedColon", "A colon is found where it is not expected, indicating either a typo or a misunderstanding of syntax.")), // Error
l(D, "UnknownFunction", new D("UnknownFunction", "A function that is not defined in the file or built in to Python is called. Could be a typo or a misunderstanding about variables.")), // Error
l(D, "UnknownMethod", new D("UnknownMethod", "An unknown method, or a method that is not valid is called on a value with known data type.")), // ???
l(D, "UnreachableExhaustiveConditional", new D("UnreachableCode.exhaustiveConditional", "Code that is unreachable because it follows a conditional with an else branch in which all branches return.")), // ???
l(D, "UnreachableExit", new D("UnreachableCode.exitKeyword", "Code that is unreachable because it follows a <code>return</code> or <code>break</code> statement. This might indicate a misconception about how those keywords affect the flow of control.")), // ???
l(D, "UnreachableInfiniteLoop", new D("UnreachableCode.infiniteLoop", 'Code that is unreachable because it follows a loop created using "while True" that never exits.')), // ??? Gama et al PA.5 - Function return value not handled by caller function
l(D, "UnusedReturn", new D("UnusedReturn", "The result of a call to a function / method that returns a value is not used in some way.")), // RiskFactor
l(D, "UnusedValue", new D("UnusedValue", "A value (either a single variable or a compound expression) is created but not assigned to a variable, passed as a function argument, or used in some other way.")), // RiskFactor
l(D, "UnusedVariable", new D("UnusedVariable", "A variable is not used after initialisation. May be an oversight but could potentially indicate misconceptions about variables.")), // RiskFactor
l(D, "VariableWithSameNameAsFunction", new D("VariableWithSameNameAsFunction", "A variable has the same name as a function.")), // RiskFactor
l(D, "WhileLoopVarAssignedIntLiteral", new D(
  "WhileLoopVarAssignedIntLiteral",
  "A while loop counter variable is assigned an int value rather than incremented or decremented. The variable is not modified elsewhere in the loop."
)), // Error
l(D, "WrongArgNumber", new D("WrongArgNumber", "A user-defined function is called with the wrong number of arguments.")), // RiskFactor
l(D, "WhileTrue", new D("WhileTrue", "A while loop is defined to iterate forever. This is a valid approach but may be a contributor to misconceptions when combined with other symptoms."));
let b = D;
const Vn = "userDefinedFunction", _l = "userDefinedVariable", vn = "builtInFunction", oi = "valueReturned", ai = "valueAssigned", ec = "True", Ir = "return", tc = "string", nc = "list", sc = "literal", br = "functionCall", ic = "variable", yr = "compoundTypeDefinition", Fr = "compoundExpression", hr = "booleanExpression", nr = "forLoopVariable", rc = "forLoopTargetReplacesIterable", sr = "assignment", ir = "same", Nr = "different", Ms = "unknown", de = "empty", oc = "orNonBoolean", ac = "andOr", lc = "topLevel", cc = "allBranchesOfExhaustiveConditional", Tr = "functionArgument", uc = "calculation", dc = "comparison";
function Q(g, i) {
  this.entity = g, this.category = i;
}
function Ys(g) {
  switch (g) {
    case t.TrueType:
    case t.FalseType:
      return d.Bool;
    case t.NoneType:
      return d.None;
    case t.StrType:
    case t.IntType:
    case t.FloatType:
    case t.BoolType:
    case t.ListType:
    case t.SetType:
    case t.DictType:
    case t.TupleType:
      return d.Class;
    case t.Name:
    case t.Doc:
    case t.Sep:
    case t.End:
      return d.String;
    case t.IntLiteral:
      return d.Int;
    case t.FloatLiteral:
      return d.Float;
    case t.StringLiteral:
      return d.String;
    case t.ListDefinition:
      return d.List;
    case t.TupleDefinition:
      return d.Tuple;
    case t.SetDefinition:
      return d.Set;
    case t.DictDefinition:
      return d.Dict;
    case t.RandomModule:
      return d.Random;
    case t.MathModule:
      return d.Math;
    case t.StringModule:
      return d.StringModule;
    case t.ReModule:
      return d.Re;
    case t.Pattern:
      return d.Pattern;
    case t.Match:
      return d.Match;
    case t.Sys:
      return d.Sys;
    default:
      return d.Unknown;
  }
}
function Kt(g) {
  if (g.length === 0)
    return d.Undefined;
  if (g.length === 1)
    return g[0];
  {
    const i = new Set(g);
    if (i.size === 1)
      return g[0];
    for (let e of i)
      if (e !== d.Int && e !== d.Float && e !== d.Number)
        return d.Unknown;
    return d.Number;
  }
}
function _s(g) {
  return (/* @__PURE__ */ new Set([d.String, d.List, d.Dict, d.Tuple, d.Unknown, d.NotParsed])).has(g);
}
function oe(g, i = !1) {
  if (g.length === 0)
    return "";
  let e = g[0].getTextValue();
  const n = i ? g[0].getIndexOnLine() : 0;
  for (let s = 0; s < n; s++)
    e = " " + e;
  for (let s = 1; s < g.length; s++) {
    let o = g[s].getDocumentStartIndex() - g[s - 1].getDocumentEndIndex() - 1;
    for (let u = g[s - 1].getEndLineNumber(); u < g[s].getStartLineNumber(); u++)
      e += `
`, o--;
    for (let u = 0; u < o; u++)
      e += " ";
    e += g[s].getTextValue();
  }
  return e;
}
function xs(g) {
  const i = [];
  for (const e of g) {
    const n = e.getExpressions();
    i.push(...n);
  }
  return i;
}
function Hn(g, i) {
  for (let e of g)
    if (e.is(i))
      return !0;
  return !1;
}
function zt(g) {
  return g.getExpressionsOfKind(t.ReturnKeyword).length > 0 || g.getExpressionsOfKind(t.BreakKeyword).length > 0 || g.getExpressionsOfKind(t.ExitFunction).length > 0 || g.getExpressionsOfKind(t.SysExit).length > 0 || g.getExpressionsOfKind(t.QuitFunction).length > 0;
}
function Qt(g, i) {
  for (let e = 0; e < g.length; e++)
    if (g[e].is(i))
      return e;
  return -1;
}
function hc(g) {
  return (/* @__PURE__ */ new Set(["str", "int", "float", "bool", "str", "list", "set", "dict"])).has(g);
}
function qt(g) {
  return g.isOneOf([t.UserDefinedFunctionCall, t.BuiltInFunctionCall, t.UserDefinedMethodCall, t.BuiltInMethodCall]) && g.getDataType() === d.None;
}
function rr(g, i, e) {
  if (!fc(i, e))
    return !1;
  let n = 0, s = 0;
  for (let o of g)
    o.is(i) ? n++ : o.is(e) && s++;
  return n > 0 && n === s;
}
function fc(g, i) {
  return g === t.OpenParenthesis ? i === t.CloseParenthesis : g === t.OpenBrace ? i === t.CloseBrace : g === t.OpenSquareBracket ? i === t.CloseSquareBracket : !1;
}
function Cr(g) {
  return g === t.OpenBrace || g === t.OpenParenthesis || g === t.OpenSquareBracket;
}
function gc(g) {
  return g === t.CloseBrace || g === t.CloseParenthesis || g === t.CloseSquareBracket;
}
function pc(g) {
  if (!Cr(g))
    throw new Error(`${g} is not a valid open bracket.`);
  return g === t.OpenBrace ? t.CloseBrace : g === t.OpenParenthesis ? t.CloseParenthesis : t.CloseSquareBracket;
}
const f = (g, i) => ({ entity: g, category: i }), We = (g) => {
  switch (g) {
    // RESERVED
    case "class":
      return f(t.ClassDefinition, a.BlockDefinitions);
    // RESERVED
    case "def":
      return f(t.FunctionDefinition, a.BlockDefinitions);
    // RESERVED
    case "elif":
      return f(t.ElifDefinition, a.BlockDefinitions);
    // RESERVED
    case "else":
      return f(t.ElseDefinition, a.BlockDefinitions);
    // RESERVED
    case "except":
      return f(t.ExceptDefinition, a.BlockDefinitions);
    // RESERVED
    case "finally":
      return f(t.FinallyDefinition, a.BlockDefinitions);
    // RESERVED
    case "for":
      return f(t.ForDefinition, a.BlockDefinitions);
    // RESERVED
    case "if":
      return f(t.IfDefinition, a.BlockDefinitions);
    // RESERVED
    case "lambda":
      return f(t.LambdaDefinition, a.BlockDefinitions);
    // RESERVED
    case "try":
      return f(t.TryDefinition, a.BlockDefinitions);
    // RESERVED
    case "while":
      return f(t.WhileDefinition, a.BlockDefinitions);
    // RESERVED
    case "with":
      return f(t.WithKeyword, a.BlockDefinitions);
    // RESERVED
    case "and":
      return f(t.AndOperator, a.LogicalOperators);
    // RESERVED
    case "not":
      return f(t.NotOperator, a.LogicalOperators);
    // RESERVED
    case "or":
      return f(t.OrOperator, a.LogicalOperators);
    // RESERVED
    case "False":
      return f(t.FalseType, a.Types);
    // RESERVED
    case "None":
      return f(t.NoneType, a.Types);
    // RESERVED
    case "True":
      return f(t.TrueType, a.Types);
    // RESERVED
    case "as":
      return f(t.AsKeyword, a.OtherKeywords);
    // RESERVED
    case "global":
      return f(t.GlobalKeyword, a.OtherKeywords);
    // RESERVED
    case "assert":
      return f(t.AssertKeyword, a.OtherKeywords);
    // RESERVED
    case "break":
      return f(t.BreakKeyword, a.OtherKeywords);
    // RESERVED
    case "continue":
      return f(t.ContinueKeyword, a.OtherKeywords);
    // RESERVED
    case "del":
      return f(t.DelKeyword, a.OtherKeywords);
    // RESERVED
    case "from":
      return f(t.FromKeyword, a.OtherKeywords);
    // RESERVED
    case "import":
      return f(t.ImportKeyword, a.OtherKeywords);
    // RESERVED
    case "in":
      return f(t.InKeyword, a.ComparisonOperators);
    //ExpressionCategory.OtherKeywords);
    // RESERVED
    case "is":
      return f(t.IsKeyword, a.ComparisonOperators);
    //ExpressionCategory.OtherKeywords);
    // RESERVED
    case "pass":
      return f(t.PassKeyword, a.OtherKeywords);
    // RESERVED
    case "raise":
      return f(t.RaiseKeyword, a.OtherKeywords);
    // RESERVED
    case "return":
      return f(t.ReturnKeyword, a.OtherKeywords);
    // RESERVED
    case "yield":
      return f(t.YieldKeyword, a.OtherKeywords);
    case "r":
      return f(t.R, a.OtherKeywords);
    case "f":
      return f(t.F, a.OtherKeywords);
    case "+":
      return f(t.AddOperator, a.MathsOperators);
    case "-":
      return f(t.SubtractOperator, a.MathsOperators);
    case "*":
      return f(t.MultiplyOperator, a.MathsOperators);
    case "/":
      return f(t.DivideOperator, a.MathsOperators);
    case "%":
      return f(t.ModulusOperator, a.MathsOperators);
    case "**":
      return f(t.ExponentOperator, a.MathsOperators);
    case "//":
      return f(t.IntDivideOperator, a.MathsOperators);
    case "=":
      return f(t.AssignmentOperator, a.MathsOperators);
    case "+=":
      return f(t.IncrementOperator, a.MathsOperators);
    case "-=":
      return f(t.DecrementOperator, a.MathsOperators);
    case "*=":
      return f(t.MultiplyAssignOperator, a.MathsOperators);
    case "/=":
      return f(t.DivideAssignOperator, a.MathsOperators);
    case "%=":
      return f(t.RemainderAssignOperator, a.MathsOperators);
    case "//=":
      return f(t.IntDivideAssignOperator, a.MathsOperators);
    case "**=":
      return f(t.ExponentAssignOperator, a.MathsOperators);
    case "==":
      return f(t.EqualOperator, a.ComparisonOperators);
    case "!=":
      return f(t.NotEqualOperator, a.ComparisonOperators);
    case ">":
      return f(t.GreaterThanOperator, a.ComparisonOperators);
    case "<":
      return f(t.LessThanOperator, a.ComparisonOperators);
    case ">=":
      return f(t.GreaterThanOrEqualOperator, a.ComparisonOperators);
    case "<=":
      return f(t.LessThanOrEqualOperator, a.ComparisonOperators);
    case "->":
      return f(t.TypeHintReturn, a.TypeHint);
    case "abs":
      return f(t.AbsFunction, a.BuiltInFunctions);
    case "all":
      return f(t.AllFunction, a.BuiltInFunctions);
    case "any":
      return f(t.AnyFunction, a.BuiltInFunctions);
    case "ascii":
      return f(t.AsciiFunction, a.BuiltInFunctions);
    case "bin":
      return f(t.BinFunction, a.BuiltInFunctions);
    case "bool":
      return f(t.BoolFunction, a.BuiltInFunctions);
    case "callable":
      return f(t.CallableFunction, a.BuiltInFunctions);
    case "chr":
      return f(t.ChrFunction, a.BuiltInFunctions);
    case "dict":
      return f(t.DictDefinition, a.BuiltInFunctions);
    case "divmod":
      return f(t.DivModFunction, a.BuiltInFunctions);
    case "enumerate":
      return f(t.EnumerateFunction, a.BuiltInFunctions);
    case "eval":
      return f(t.EvalFunction, a.BuiltInFunctions);
    case "exec":
      return f(t.ExecFunction, a.BuiltInFunctions);
    case "exit":
      return f(t.ExitFunction, a.BuiltInFunctions);
    case "filter":
      return f(t.FilterFunction, a.BuiltInFunctions);
    case "float":
      return f(t.FloatFunction, a.BuiltInFunctions);
    case "getattr":
      return f(t.GetAttrFunction, a.BuiltInFunctions);
    case "globals":
      return f(t.GlobalsFunction, a.BuiltInFunctions);
    case "hasattr":
      return f(t.HasAttrFunction, a.BuiltInFunctions);
    case "input":
      return f(t.InputFunction, a.BuiltInFunctions);
    case "int":
      return f(t.IntFunction, a.BuiltInFunctions);
    case "isinstance":
      return f(t.IsInstanceFunction, a.BuiltInFunctions);
    case "len":
      return f(t.LenFunction, a.BuiltInFunctions);
    case "list":
      return f(t.ListFunction, a.BuiltInFunctions);
    case "map":
      return f(t.MapFunction, a.BuiltInFunctions);
    case "max":
      return f(t.MaxFunction, a.BuiltInFunctions);
    case "min":
      return f(t.MinFunction, a.BuiltInFunctions);
    case "open":
      return f(t.OpenFunction, a.BuiltInFunctions);
    case "ord":
      return f(t.OrdFunction, a.BuiltInFunctions);
    case "pow":
      return f(t.PowFunction, a.BuiltInFunctions);
    case "print":
      return f(t.PrintFunction, a.BuiltInFunctions);
    case "quit":
      return f(t.QuitFunction, a.BuiltInFunctions);
    case "range":
      return f(t.RangeFunction, a.BuiltInFunctions);
    case "reversed":
      return f(t.ReversedFunction, a.BuiltInFunctions);
    case "round":
      return f(t.RoundFunction, a.BuiltInFunctions);
    case "set":
      return f(t.SetFunction, a.BuiltInFunctions);
    case "sorted":
      return f(t.SortedFunction, a.BuiltInFunctions);
    case "str":
      return f(t.StrFunction, a.BuiltInFunctions);
    case "sum":
      return f(t.SumFunction, a.BuiltInFunctions);
    case "tuple":
      return f(t.TupleFunction, a.BuiltInFunctions);
    case "type":
      return f(t.TypeFunction, a.BuiltInFunctions);
    case "zip":
      return f(t.ZipFunction, a.BuiltInFunctions);
    case "__main__":
      return f(t.Main, a.MagicMethods);
    case "__cmp__":
      return f(t.Cmp, a.MagicMethods);
    case "__eq__":
      return f(t.Eq, a.MagicMethods);
    case "__ne__":
      return f(t.Ne, a.MagicMethods);
    case "__lt__":
      return f(t.Lt, a.MagicMethods);
    case "__gt__":
      return f(t.Gt, a.MagicMethods);
    case "__le__":
      return f(t.Le, a.MagicMethods);
    case "__ge__":
      return f(t.Ge, a.MagicMethods);
    case "__str__":
      return f(t.Str, a.MagicMethods);
    case "__getattr__":
      return f(t.GetAttrVariable, a.MagicMethods);
    case "__setattr__":
      return f(t.SetAttrVariable, a.MagicMethods);
    case "__contains__":
      return f(t.SpecialContains, a.MagicMethods);
    case "__len__":
      return f(t.SpecialLen, a.MagicMethods);
    case "__name__":
      return f(t.Name, a.SpecialVariables);
    case "__self__":
      return f(t.Self, a.SpecialVariables);
    case "__doc__":
      return f(t.Doc, a.SpecialVariables);
    case "__class__":
      return f(t.ClassVariable, a.SpecialVariables);
    case "sep":
      return f(t.Sep, a.SpecialVariables);
    case "end":
      return f(t.End, a.SpecialVariables);
    case "ArtithmeticError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "AssertionError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "AttributeError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "BlockingIOError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "BrokenPipeError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "BufferError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "ChildProcessError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "ConnectionAbortedError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "ConnectionError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "ConnectionRefusedError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "ConnectionResetError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "Exception":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "EOFError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "EnvironmentError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "FileExistsError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "FileNotFoundError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "FloatingPointError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "GeneratorExit":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "ImportError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "IndentationError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "IndexError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "InterruptedError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "IOError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "IsADirectoryError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "KeyError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "KeyboardInterrupt":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "LookupError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "MemoryError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "ModuleNotFoundError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "NameError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "NotADirectoryError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "NotImplementedError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "OSError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "OverflowError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "PermissionError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "ProcessLookupError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "RecursionError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "ReferenceError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "RuntimeError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "StopIteration":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "SyntaxError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "TabError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "TimeoutError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "SystemError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "SystemExit":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "TypeError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "UnboundLocalError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "UnicodeError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "UnicodeEncodeError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "UnicodeDecodeError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "UnicodeTranslateError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "ValueError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "Warning":
      return f(t.ExceptionName, a.BuiltInExceptions);
    case "ZeroDivisionError":
      return f(t.ExceptionName, a.BuiltInExceptions);
    // String methods
    case "capitalize":
      return f(t.Capitalize, a.BuiltInMethods);
    case "casefold":
      return f(t.Casefold, a.BuiltInMethods);
    case "center":
      return f(t.Center, a.BuiltInMethods);
    case "count":
      return f(t.Count, a.BuiltInMethods);
    // also a list, tuple method
    case "encode":
      return f(t.Encode, a.BuiltInMethods);
    case "endswith":
      return f(t.EndsWith, a.BuiltInMethods);
    case "expandtabs":
      return f(t.ExpandTabs, a.BuiltInMethods);
    case "find":
      return f(t.Find, a.BuiltInMethods);
    case "format":
      return f(t.Format, a.BuiltInMethods);
    case "format_map":
      return f(t.FormatMap, a.BuiltInMethods);
    case "index":
      return f(t.Index, a.BuiltInMethods);
    // also a list, tuple method
    case "isalnum":
      return f(t.IsAlnum, a.BuiltInMethods);
    case "isalpha":
      return f(t.IsAlpha, a.BuiltInMethods);
    case "isascii":
      return f(t.IsAscii, a.BuiltInMethods);
    case "isdecimal":
      return f(t.IsDecimal, a.BuiltInMethods);
    case "isdigit":
      return f(t.IsDigit, a.BuiltInMethods);
    case "isidentifier":
      return f(t.IsIdentifier, a.BuiltInMethods);
    case "islower":
      return f(t.IsLower, a.BuiltInMethods);
    case "isnumeric":
      return f(t.IsNumeric, a.BuiltInMethods);
    case "isprintable":
      return f(t.IsPrintable, a.BuiltInMethods);
    case "isspace":
      return f(t.IsSpace, a.BuiltInMethods);
    case "istitle":
      return f(t.IsTitle, a.BuiltInMethods);
    case "isupper":
      return f(t.IsUpper, a.BuiltInMethods);
    case "join":
      return f(t.Join, a.BuiltInMethods);
    case "ljust":
      return f(t.LJust, a.BuiltInMethods);
    case "lower":
      return f(t.Lower, a.BuiltInMethods);
    case "lstrip":
      return f(t.LStrip, a.BuiltInMethods);
    case "maketrans":
      return f(t.MakeTrans, a.BuiltInMethods);
    case "partition":
      return f(t.Partition, a.BuiltInMethods);
    case "replace":
      return f(t.Replace, a.BuiltInMethods);
    case "rfind":
      return f(t.RFind, a.BuiltInMethods);
    case "rindex":
      return f(t.RIndex, a.BuiltInMethods);
    case "rjust":
      return f(t.RJust, a.BuiltInMethods);
    case "rpartition":
      return f(t.RPartition, a.BuiltInMethods);
    case "rsplit":
      return f(t.RSplit, a.BuiltInMethods);
    case "rstrip":
      return f(t.RStrip, a.BuiltInMethods);
    case "split":
      return f(t.Split, a.BuiltInMethods);
    case "splitlines":
      return f(t.SplitLines, a.BuiltInMethods);
    case "startswith":
      return f(t.StartsWith, a.BuiltInMethods);
    case "strip":
      return f(t.Strip, a.BuiltInMethods);
    case "swapcase":
      return f(t.SwapCase, a.BuiltInMethods);
    case "title":
      return f(t.Title, a.BuiltInMethods);
    case "translate":
      return f(t.Translate, a.BuiltInMethods);
    case "upper":
      return f(t.Upper, a.BuiltInMethods);
    case "zfill":
      return f(t.ZFill, a.BuiltInMethods);
    // Built-in list methods
    case "append":
      return f(t.Append, a.BuiltInMethods);
    case "clear":
      return f(t.Clear, a.BuiltInMethods);
    // also dictionary, set
    case "copy":
      return f(t.Copy, a.BuiltInMethods);
    // also dictionary, set
    case "extend":
      return f(t.Extend, a.BuiltInMethods);
    case "insert":
      return f(t.Insert, a.BuiltInMethods);
    case "pop":
      return f(t.Pop, a.BuiltInMethods);
    // also dictionary, set
    case "remove":
      return f(t.Remove, a.BuiltInMethods);
    // also set
    case "reverse":
      return f(t.Reverse, a.BuiltInMethods);
    case "sort":
      return f(t.Sort, a.BuiltInMethods);
    // Built-in dictionary methods
    case "fromkeys":
      return f(t.FromKeys, a.BuiltInMethods);
    case "get":
      return f(t.Get, a.BuiltInMethods);
    case "items":
      return f(t.Items, a.BuiltInMethods);
    case "keys":
      return f(t.Keys, a.BuiltInMethods);
    case "popitem":
      return f(t.PopItem, a.BuiltInMethods);
    case "setdefault":
      return f(t.SetDefault, a.BuiltInMethods);
    case "update":
      return f(t.Update, a.BuiltInMethods);
    // also set
    case "values":
      return f(t.Values, a.BuiltInMethods);
    // Built-in set methods
    case "add":
      return f(t.Add, a.BuiltInMethods);
    case "difference":
      return f(t.Difference, a.BuiltInMethods);
    case "difference_update":
      return f(t.DifferenceUpdate, a.BuiltInMethods);
    case "discard":
      return f(t.Discard, a.BuiltInMethods);
    case "intersection":
      return f(t.Intersection, a.BuiltInMethods);
    case "intersection_update":
      return f(t.IntersectionUpdate, a.BuiltInMethods);
    case "isdisjoint":
      return f(t.IsDisjoint, a.BuiltInMethods);
    case "issubset":
      return f(t.IsSubset, a.BuiltInMethods);
    case "issuperset":
      return f(t.IsSuperset, a.BuiltInMethods);
    case "symmetric_difference":
      return f(t.SymmetricDifference, a.BuiltInMethods);
    case "symmetric_difference_update":
      return f(t.SymmetricDifferenceUpdate, a.BuiltInMethods);
    case "union":
      return f(t.Union, a.BuiltInMethods);
    // Built-in file methods
    case "close":
      return f(t.Close, a.BuiltInMethods);
    case "detach":
      return f(t.Detach, a.BuiltInMethods);
    case "fileno":
      return f(t.FileNo, a.BuiltInMethods);
    case "flush":
      return f(t.Flush, a.BuiltInMethods);
    case "isatty":
      return f(t.IsAtty, a.BuiltInMethods);
    case "read":
      return f(t.Read, a.BuiltInMethods);
    case "readable":
      return f(t.Readable, a.BuiltInMethods);
    case "readline":
      return f(t.ReadLine, a.BuiltInMethods);
    case "readlines":
      return f(t.ReadLines, a.BuiltInMethods);
    case "seek":
      return f(t.Seek, a.BuiltInMethods);
    case "seekable":
      return f(t.Seekable, a.BuiltInMethods);
    case "tell":
      return f(t.Tell, a.BuiltInMethods);
    case "truncate":
      return f(t.Truncate, a.BuiltInMethods);
    case "writable":
      return f(t.Writable, a.BuiltInMethods);
    case "write":
      return f(t.Write, a.BuiltInMethods);
    case "writelines":
      return f(t.WriteLines, a.BuiltInMethods);
    case "(":
      return f(t.OpenParenthesis, a.Other);
    case ")":
      return f(t.CloseParenthesis, a.Other);
    case "[":
      return f(t.OpenSquareBracket, a.Other);
    case "]":
      return f(t.CloseSquareBracket, a.Other);
    case "{":
      return f(t.OpenBrace, a.Other);
    case "}":
      return f(t.CloseBrace, a.Other);
    case ",":
      return f(t.Comma, a.Other);
    case ":":
      return f(t.Colon, a.Other);
    case ".":
      return f(t.Dot, a.Other);
    case "\\":
      return f(t.ContinuationLine, a.Other);
    case ";":
      return f(t.Separator, a.Other);
    case "'":
      return f(t.SingleQuote, a.Other);
    case '"':
      return f(t.DoubleQuote, a.Other);
    // Built in modules
    case "random":
      return f(t.RandomModule, a.BuiltInModules);
    case "math":
      return f(t.MathModule, a.BuiltInModules);
    case "string":
      return f(t.StringModule, a.BuiltInModules);
    case "re":
      return f(t.ReModule, a.BuiltInModules);
    case "sys":
      return f(t.Sys, a.BuiltInModules);
    // random module methods
    case "seed":
      return f(t.Seed, a.ModuleFunctions);
    case "getstate":
      return f(t.GetState, a.ModuleFunctions);
    case "setstate":
      return f(t.SetState, a.ModuleFunctions);
    case "getrandbits":
      return f(t.GetRandBits, a.ModuleFunctions);
    case "randrange":
      return f(t.RandRange, a.ModuleFunctions);
    case "randint":
      return f(t.RandInt, a.ModuleFunctions);
    case "choice":
      return f(t.Choice, a.ModuleFunctions);
    case "choices":
      return f(t.Choices, a.ModuleFunctions);
    case "shuffle":
      return f(t.Shuffle, a.ModuleFunctions);
    case "sample":
      return f(t.Sample, a.ModuleFunctions);
    case "uniform":
      return f(t.Uniform, a.ModuleFunctions);
    case "triangular":
      return f(t.Triangular, a.ModuleFunctions);
    case "betavariate":
      return f(t.BetaVariate, a.ModuleFunctions);
    case "expovariate":
      return f(t.ExpoVariate, a.ModuleFunctions);
    case "gammavariate":
      return f(t.GammaVariate, a.ModuleFunctions);
    case "gauss":
      return f(t.Gauss, a.ModuleFunctions);
    case "lognormvariate":
      return f(t.LogNormVariate, a.ModuleFunctions);
    case "normalvariate":
      return f(t.NormalVariate, a.ModuleFunctions);
    case "vonmisesvariate":
      return f(t.VonMisesVariate, a.ModuleFunctions);
    case "paretovariate":
      return f(t.ParetoVariate, a.ModuleFunctions);
    case "weibullvariate":
      return f(t.WeibullVariate, a.ModuleFunctions);
    // maths module methods
    case "acos":
      return f(t.Acos, a.ModuleFunctions);
    case "acosh":
      return f(t.Acosh, a.ModuleFunctions);
    case "asin":
      return f(t.Asin, a.ModuleFunctions);
    case "asinh":
      return f(t.Asinh, a.ModuleFunctions);
    case "atan":
      return f(t.Atan, a.ModuleFunctions);
    case "atan2":
      return f(t.Atan2, a.ModuleFunctions);
    case "atanh":
      return f(t.Atanh, a.ModuleFunctions);
    case "ceil":
      return f(t.Ceil, a.ModuleFunctions);
    case "comb":
      return f(t.Comb, a.ModuleFunctions);
    case "copysign":
      return f(t.Copysign, a.ModuleFunctions);
    case "cos":
      return f(t.Cos, a.ModuleFunctions);
    case "cosh":
      return f(t.Cosh, a.ModuleFunctions);
    case "degrees":
      return f(t.Degrees, a.ModuleFunctions);
    case "dist":
      return f(t.Dist, a.ModuleFunctions);
    case "erf":
      return f(t.Erf, a.ModuleFunctions);
    case "erfc":
      return f(t.Erfc, a.ModuleFunctions);
    case "exp":
      return f(t.Exp, a.ModuleFunctions);
    case "expm1":
      return f(t.Expm1, a.ModuleFunctions);
    case "fabs":
      return f(t.Fabs, a.ModuleFunctions);
    case "factorial":
      return f(t.Factorial, a.ModuleFunctions);
    case "floor":
      return f(t.Floor, a.ModuleFunctions);
    case "fmod":
      return f(t.Fmod, a.ModuleFunctions);
    case "frexp":
      return f(t.Frexp, a.ModuleFunctions);
    case "fsum":
      return f(t.Fsum, a.ModuleFunctions);
    case "gamma":
      return f(t.Gamma, a.ModuleFunctions);
    case "gcd":
      return f(t.Gcd, a.ModuleFunctions);
    case "hypot":
      return f(t.Hypot, a.ModuleFunctions);
    case "isclose":
      return f(t.IsClose, a.ModuleFunctions);
    case "isfinite":
      return f(t.IsFinite, a.ModuleFunctions);
    case "isinf":
      return f(t.IsInf, a.ModuleFunctions);
    case "isnan":
      return f(t.IsNaN, a.ModuleFunctions);
    case "isqrt":
      return f(t.ISqrt, a.ModuleFunctions);
    case "ldexp":
      return f(t.Ldexp, a.ModuleFunctions);
    case "lgamma":
      return f(t.LGamma, a.ModuleFunctions);
    case "log":
      return f(t.Log, a.ModuleFunctions);
    case "log10":
      return f(t.Log10, a.ModuleFunctions);
    case "log1p":
      return f(t.Log1P, a.ModuleFunctions);
    case "log2":
      return f(t.Log2, a.ModuleFunctions);
    case "perm":
      return f(t.Perm, a.ModuleFunctions);
    case "pow":
      return f(t.Pow, a.ModuleFunctions);
    case "prod":
      return f(t.Prod, a.ModuleFunctions);
    case "radians":
      return f(t.Radians, a.ModuleFunctions);
    case "remainder":
      return f(t.Remainder, a.ModuleFunctions);
    case "sin":
      return f(t.Sin, a.ModuleFunctions);
    case "sinh":
      return f(t.Sinh, a.ModuleFunctions);
    case "sqrt":
      return f(t.Sqrt, a.ModuleFunctions);
    case "tan":
      return f(t.Tan, a.ModuleFunctions);
    case "tanh":
      return f(t.Tanh, a.ModuleFunctions);
    case "trun":
      return f(t.Trunc, a.ModuleFunctions);
    case "e":
      return f(t.E, a.ModuleProperties);
    case "inf":
      return f(t.Inf, a.ModuleProperties);
    case "nan":
      return f(t.Nan, a.ModuleProperties);
    case "pi":
      return f(t.Pi, a.ModuleProperties);
    case "tau":
      return f(t.Tau, a.ModuleProperties);
    // String module entities
    case "ascii_letters":
      return f(t.AsciiLetters, a.ModuleProperties);
    case "ascii_lowercase":
      return f(t.AsciiLowercase, a.ModuleProperties);
    case "ascii_uppercase":
      return f(t.AsciiUppercase, a.ModuleProperties);
    case "digits":
      return f(t.Digits, a.ModuleProperties);
    case "hexdigits":
      return f(t.Hexdigits, a.ModuleProperties);
    case "octdigits":
      return f(t.Octdigits, a.ModuleProperties);
    case "punctuation":
      return f(t.Punctuation, a.ModuleProperties);
    case "printable":
      return f(t.Printable, a.ModuleProperties);
    case "whitespace":
      return f(t.Whitespace, a.ModuleProperties);
    case "Formatter":
      return f(t.Formatter, a.ModuleFunctions);
    case "Template":
      return f(t.Template, a.ModuleFunctions);
    case "capwords":
      return f(t.Capwords, a.ModuleFunctions);
    // Regular expression
    case "Pattern":
      return f(t.Pattern, a.Types);
    case "Match":
      return f(t.Match, a.Types);
    case "A":
      return f(t.ReA, a.ModuleProperties);
    case "ASCII":
      return f(t.ReASCII, a.ModuleProperties);
    case "DEBUG":
      return f(t.ReDebug, a.ModuleProperties);
    case "I":
      return f(t.ReI, a.ModuleProperties);
    case "IGNORECASE":
      return f(t.ReIGNORECASE, a.ModuleProperties);
    case "L":
      return f(t.ReL, a.ModuleProperties);
    case "LOCALE":
      return f(t.ReLOCALE, a.ModuleProperties);
    case "M":
      return f(t.ReM, a.ModuleProperties);
    case "MULTILINE":
      return f(t.ReMULTILINE, a.ModuleProperties);
    case "S":
      return f(t.ReS, a.ModuleProperties);
    case "DOTALL":
      return f(t.ReDOTALL, a.ModuleProperties);
    case "X":
      return f(t.ReX, a.ModuleProperties);
    case "VERBOSE":
      return f(t.ReVERBOSE, a.ModuleProperties);
    case "compile":
      return f(t.Compile, a.ModuleFunctions);
    case "search":
      return f(t.Search, a.ModuleFunctions);
    case "match":
      return f(t.Match, a.ModuleFunctions);
    case "fullmatch":
      return f(t.FullMatch, a.ModuleFunctions);
    case "findall":
      return f(t.FindAll, a.ModuleFunctions);
    case "finditer":
      return f(t.FindIter, a.ModuleFunctions);
    case "sub":
      return f(t.Sub, a.ModuleFunctions);
    case "subn":
      return f(t.SubN, a.ModuleFunctions);
    case "escape":
      return f(t.Escape, a.ModuleFunctions);
    case "purge":
      return f(t.Purge, a.ModuleFunctions);
    // Sys module entities
    case "addaudithook":
      return f(t.AddAuditHook, a.ModuleFunctions);
    // none, function
    case "audit":
      return f(t.Audit, a.ModuleFunctions);
    // none, function
    case "call_tracing":
      return f(t.CallTracing, a.ModuleFunctions);
    // unknown function
    case "_clear_type_cache":
      return f(t.ClearTypeCache, a.ModuleFunctions);
    // none function
    case "_current_frames":
      return f(t.CurrentFrames, a.ModuleFunctions);
    // dict function
    case "_current_exceptions":
      return f(t.CurrentExceptions, a.ModuleFunctions);
    // dict function
    case "breakpointhook":
      return f(t.BreakpointHook, a.ModuleFunctions);
    // none function
    case "_debugmallocstats":
      return f(t.DebugMallocStats, a.ModuleFunctions);
    // none function
    case "displayhook":
      return f(t.DisplayHook, a.ModuleFunctions);
    // non function
    case "excepthook":
      return f(t.ExceptHook, a.ModuleFunctions);
    // none function
    case "exc_info":
      return f(t.ExcInfo, a.ModuleFunctions);
    // tuple function
    // duplicates built in function of same name
    //case "exit": return keywordMap(ExpressionEntity.Exit, ExpressionEntity.ModuleFunctions); // none, function
    case "getallocatedblocks":
      return f(t.GetAllocatedBlocks, a.ModuleFunctions);
    // int function
    case "getandroidapilevel":
      return f(t.GetAndroidApiLevel, a.ModuleFunctions);
    // int function
    case "getdefaultencoding":
      return f(t.GetDefaultEncoding, a.ModuleFunctions);
    // string function
    case "getdlopenflags":
      return f(t.GetDLOpenFlags, a.ModuleFunctions);
    // int function
    case "getfilesystemencoding":
      return f(t.GetFileSystemEncoding, a.ModuleFunctions);
    // string function
    case "getfilesystemencodeerrors":
      return f(t.GetFileSystemEncodeErrors, a.ModuleFunctions);
    // string function
    case "getrefcount":
      return f(t.GetRefCount, a.ModuleFunctions);
    // int function
    case "getrecursionlimit":
      return f(t.GetRecursionLimit, a.ModuleFunctions);
    // int function
    case "getsizeof":
      return f(t.GetSizeOf, a.ModuleFunctions);
    // int function
    case "getswitchinterval":
      return f(t.GetSwitchInterval, a.ModuleFunctions);
    // float function
    case "_getframe":
      return f(t.GetFrame, a.ModuleFunctions);
    // unknown function
    case "getprofile":
      return f(t.GetProfile, a.ModuleFunctions);
    // none function
    case "gettrace":
      return f(t.GetTrace, a.ModuleFunctions);
    // none function
    case "getwindowsversion":
      return f(t.GetWindowsVersion, a.ModuleFunctions);
    // tuple function
    case "get_asyncgen_hooks":
      return f(t.GetAsyncGenHooks, a.ModuleFunctions);
    // unknown function
    case "get_coroutine_origin_tracking_depth":
      return f(t.GetCoroutineOriginTrackingDepth, a.ModuleFunctions);
    // int function
    case "intern":
      return f(t.Intern, a.ModuleFunctions);
    // unknown function
    case "is_finalizing":
      return f(t.IsFinalizing, a.ModuleFunctions);
    // bool function
    case "setdlopenflags":
      return f(t.SetDLOpenFlags, a.ModuleFunctions);
    // none function
    case "setprofile":
      return f(t.SetProfile, a.ModuleFunctions);
    // unknown function
    case "setrecursionlimit":
      return f(t.SetRecursionLimit, a.ModuleFunctions);
    // none function
    case "setswitchinterval":
      return f(t.SetSwitchInterval, a.ModuleFunctions);
    // none function
    case "settrace":
      return f(t.SetTrace, a.ModuleFunctions);
    // none function
    case "set_asyncgen_hooks":
      return f(t.SetAsyncgenHooks, a.ModuleFunctions);
    // none function
    case "_enablelegacywindowsfsencoding":
      return f(t.EnableLegacyWindowsFSEncoding, a.ModuleFunctions);
    // none function
    case "abiflags":
      return f(t.ABIFlags, a.ModuleProperties);
    // string, prop
    case "argv":
      return f(t.Argv, a.ModuleProperties);
    // list, prop
    case "base_exec_prefix":
      return f(t.BaseExecPrefix, a.ModuleProperties);
    // string, prop
    case "base_prefix":
      return f(t.BasePrefix, a.ModuleProperties);
    // string prop
    case "byte_order":
      return f(t.ByteOrder, a.ModuleProperties);
    // string prop
    case "built_in_module_names":
      return f(t.BuiltInModuleNames, a.ModuleProperties);
    // tuple prop
    case "copyright":
      return f(t.Copyright, a.ModuleProperties);
    // string prop
    case "dllhandle":
      return f(t.DllHandle, a.ModuleProperties);
    // int prop
    case "dont_write_bytecode":
      return f(t.DontWriteBytecode, a.ModuleProperties);
    // bool prop
    case "pycache_prefix":
      return f(t.PycachePrefix, a.ModuleProperties);
    // unknown prop
    case "exec_prefix":
      return f(t.ExecPrefix, a.ModuleProperties);
    // string prop
    case "executable":
      return f(t.Executable, a.ModuleProperties);
    // string prop
    case "flags":
      return f(t.Flags, a.ModuleProperties);
    // unknown prop
    case "float_info":
      return f(t.FloatInfo, a.ModuleProperties);
    // unknown prop
    case "float_repr_style":
      return f(t.FloatReprStyle, a.ModuleProperties);
    // string prop
    case "hash_info":
      return f(t.HashInfo, a.ModuleProperties);
    // unknown prop
    case "hexversion":
      return f(t.HexVersion, a.ModuleProperties);
    // int prop
    case "implementation":
      return f(t.Implementation, a.ModuleProperties);
    // unknown prop
    case "int_info":
      return f(t.IntInfo, a.ModuleProperties);
    // unknown prop
    case "last_type":
      return f(t.LastType, a.ModuleProperties);
    // unknown prop
    case "last_value":
      return f(t.LastValue, a.ModuleProperties);
    // unknown prop
    case "last_traceback":
      return f(t.LastTraceback, a.ModuleProperties);
    // unknown prop
    case "maxsize":
      return f(t.MaxSize, a.ModuleProperties);
    // int prop
    case "maxunicode":
      return f(t.MaxUnicode, a.ModuleProperties);
    // int prop
    case "meta_path":
      return f(t.MetaPath, a.ModuleProperties);
    // list prop
    case "modules":
      return f(t.Modules, a.ModuleProperties);
    // dict prop
    case "orig_argv":
      return f(t.OrigArgv, a.ModuleProperties);
    // list prop
    case "path":
      return f(t.Path, a.ModuleProperties);
    // list prop
    case "path_hooks":
      return f(t.PathHooks, a.ModuleProperties);
    // list prop
    case "path_importer_cache":
      return f(t.PathImporterCache, a.ModuleProperties);
    // dict prop
    case "platform":
      return f(t.Platform, a.ModuleProperties);
    // string prop
    case "prefix":
      return f(t.Prefix, a.ModuleProperties);
    // string prop
    case "ps1":
      return f(t.PS1, a.ModuleProperties);
    // string prop
    case "ps2":
      return f(t.PS2, a.ModuleProperties);
    // string prop
    case "stdin":
      return f(t.StdIn, a.ModuleProperties);
    // unknown prop
    case "stdout":
      return f(t.StdOut, a.ModuleProperties);
    // unknown prop
    case "stderr":
      return f(t.StdErr, a.ModuleProperties);
    // unknown prop
    case "stdlib_module_names":
      return f(t.StdLibModuleNames, a.ModuleProperties);
    // unknown prop
    case "thread_info":
      return f(t.ThreadInfo, a.ModuleProperties);
    // unknown prop
    case "tracebacklimit":
      return f(t.TracebackLimit, a.ModuleProperties);
    // int prop
    case "version":
      return f(t.Version, a.ModuleProperties);
    // string prop
    case "api_version":
      return f(t.ApiVersion, a.ModuleProperties);
    // int prop
    case "version_info":
      return f(t.VersionInfo, a.ModuleProperties);
    // tuple prop
    case "warnoptions":
      return f(t.WarnOptions, a.ModuleProperties);
    // list prop
    case "winver":
      return f(t.WinVer, a.ModuleProperties);
    // int prop
    case "_xoptions":
      return f(t.XOptions, a.ModuleProperties);
    // dict prop
    default:
      return f(t.Unknown, a.Unknown);
  }
}, fr = (g) => {
  switch (g) {
    case "str":
      return f(t.StrType, a.Types);
    case "int":
      return f(t.IntType, a.Types);
    case "float":
      return f(t.FloatType, a.Types);
    case "bool":
      return f(t.BoolType, a.Types);
    case "list":
      return f(t.ListType, a.Types);
    case "set":
      return f(t.SetType, a.Types);
    case "dict":
      return f(t.DictType, a.Types);
    case "tuple":
      return f(t.TupleType, a.Types);
    default:
      return f(t.Unknown, a.Unknown);
  }
}, Wt = /* @__PURE__ */ new Map([
  [t.AbsFunction, d.Number],
  // float, int
  [t.AllFunction, d.Bool],
  // boolean
  [t.AnyFunction, d.Bool],
  // boolean
  [t.AsciiFunction, d.String],
  // string
  [t.AssertFunction, d.None],
  [t.BinFunction, d.String],
  // string
  [t.BoolFunction, d.Bool],
  // boolean
  [t.CallableFunction, d.Bool],
  // boolean
  [t.ChrFunction, d.String],
  // string
  [t.DictFunction, d.Dict],
  // dictionary
  [t.DivModFunction, d.Tuple],
  // is a tuple but don't know if assigned as is or broken down
  [t.EnumerateFunction, d.Tuple],
  // unknown
  [t.EvalFunction, d.Unknown],
  [t.ExecFunction, d.None],
  [t.ExitFunction, d.None],
  [t.FilterFunction, d.Unknown],
  // unknown
  [t.FloatFunction, d.Float],
  // float
  [t.GetAttrFunction, d.Unknown],
  // unknown
  [t.GlobalsFunction, d.Dict],
  // dictionary
  [t.HasAttrFunction, d.Bool],
  // boolean
  [t.InputFunction, d.String],
  // string
  [t.IntFunction, d.Int],
  // int
  [t.IsInstanceFunction, d.Bool],
  // boolean
  [t.LenFunction, d.Int],
  // int
  [t.ListFunction, d.List],
  // list
  [t.MapFunction, d.Unknown],
  // unknown
  [t.MaxFunction, d.Number],
  // float, int
  [t.MinFunction, d.Number],
  // float, int
  [t.OpenFunction, d.File],
  // file
  [t.OrdFunction, d.Int],
  // int
  [t.PowFunction, d.Number],
  // float, int
  [t.PrintFunction, d.None],
  [t.QuitFunction, d.None],
  [t.RangeFunction, d.Unknown],
  // int (usually)
  [t.ReversedFunction, d.Unknown],
  // an iterable
  [t.RoundFunction, d.Float],
  // float
  [t.SetFunction, d.Set],
  // set
  [t.SortedFunction, d.List],
  [t.StrFunction, d.String],
  // string
  [t.SumFunction, d.Number],
  // float, int
  [t.TupleFunction, d.Tuple],
  // tuple
  [t.TypeFunction, d.Class],
  // class
  [t.Capitalize, d.String],
  // string
  [t.Casefold, d.String],
  // string
  [t.Center, d.String],
  // string
  [t.Count, d.Int],
  // int
  [t.Encode, d.String],
  // string
  [t.EndsWith, d.Bool],
  // boolean
  [t.ExpandTabs, d.String],
  // string
  [t.Find, d.Int],
  // int
  [t.Format, d.String],
  // string
  [t.FormatFunction, d.String],
  // string
  [t.Index, d.Int],
  // int
  [t.IsAlnum, d.Bool],
  // boolean
  [t.IsAlpha, d.Bool],
  // boolean
  [t.IsAscii, d.Bool],
  // boolean
  [t.IsDecimal, d.Bool],
  // boolean
  [t.IsDigit, d.Bool],
  // boolean
  [t.IsIdentifier, d.Bool],
  // boolean
  [t.IsLower, d.Bool],
  // boolean
  [t.IsNumeric, d.Bool],
  // boolean
  [t.IsPrintable, d.Bool],
  // boolean
  [t.IsSpace, d.Bool],
  // boolean
  [t.IsTitle, d.Bool],
  // boolean
  [t.IsUpper, d.Bool],
  // boolean
  [t.Join, d.String],
  // string
  [t.LJust, d.String],
  // string
  [t.Lower, d.String],
  // string
  [t.LStrip, d.String],
  // string
  [t.MakeTrans, d.Dict],
  // dictionary
  [t.Partition, d.Tuple],
  // tuple
  [t.Replace, d.String],
  // string
  [t.RFind, d.Int],
  // int
  [t.RIndex, d.Int],
  // int
  [t.RJust, d.String],
  // string
  [t.RPartition, d.Tuple],
  // tuple
  [t.RSplit, d.List],
  // list
  [t.RStrip, d.String],
  // string
  [t.Split, d.List],
  // list
  [t.SplitLines, d.List],
  // list
  [t.StartsWith, d.Bool],
  // boolean
  [t.Strip, d.String],
  // string
  [t.SwapCase, d.String],
  // string
  [t.Title, d.String],
  // string
  [t.Translate, d.String],
  [t.Upper, d.String],
  // string
  [t.ZFill, d.String],
  // string
  [t.Append, d.None],
  // none
  [t.Clear, d.None],
  [t.Copy, d.Unknown],
  // list, dictionary, set
  [t.Extend, d.None],
  [t.Insert, d.None],
  [t.Pop, d.Unknown],
  // list, dictionary, set
  [t.Remove, d.None],
  [t.Reverse, d.None],
  [t.Sort, d.None],
  [t.FromKeys, d.Dict],
  // dictionary
  [t.Get, d.Unknown],
  // unknown
  [t.Items, d.List],
  // list
  [t.Keys, d.Unknown],
  // unknown
  [t.PopItem, d.None],
  [t.SetDefault, d.Unknown],
  // unknown
  [t.Update, d.None],
  [t.Values, d.Unknown],
  // unknown
  [t.Add, d.None],
  [t.Difference, d.Set],
  // set
  [t.DifferenceUpdate, d.None],
  [t.Discard, d.None],
  [t.Intersection, d.Set],
  // set
  [t.IntersectionUpdate, d.None],
  [t.IsDisjoint, d.Bool],
  // boolean
  [t.IsSubset, d.Bool],
  // boolean
  [t.IsSuperset, d.Bool],
  // boolean
  [t.SymmetricDifference, d.Set],
  // set
  [t.SymmetricDifferenceUpdate, d.None],
  [t.Union, d.Set],
  // set
  [t.Close, d.None],
  [t.FileNo, d.Int],
  // int
  [t.Flush, d.None],
  [t.IsAtty, d.Bool],
  // boolean
  [t.Read, d.String],
  // unknown
  [t.Readable, d.Bool],
  // boolean
  [t.ReadLine, d.String],
  // string
  [t.ReadLines, d.List],
  // list
  [t.Seek, d.None],
  [t.Seekable, d.Bool],
  // boolean
  [t.Tell, d.Unknown],
  // unknown
  [t.Truncate, d.None],
  [t.Writable, d.Bool],
  // boolean
  [t.Write, d.None],
  [t.WriteLines, d.None],
  [t.Main, d.None],
  [t.Cmp, d.Int],
  [t.Eq, d.Bool],
  [t.Ne, d.Bool],
  [t.Lt, d.Bool],
  [t.Gt, d.Bool],
  [t.Le, d.Bool],
  [t.Ge, d.Bool],
  [t.Str, d.String],
  [t.SpecialContains, d.Bool],
  [t.SpecialLen, d.Int],
  [t.ZipFunction, d.Unknown],
  [t.Seed, d.None],
  // no return
  [t.GetState, d.Unknown],
  // unknown
  [t.SetState, d.None],
  // none
  [t.GetRandBits, d.Int],
  // int
  [t.RandRange, d.Int],
  // int
  [t.RandInt, d.Int],
  // int
  [t.Choice, d.Unknown],
  // unknown
  [t.Choices, d.List],
  // list
  [t.Shuffle, d.Shuffle],
  // none
  [t.Sample, d.List],
  // list
  [t.RandomMethod, d.Float],
  // float
  [t.Uniform, d.Float],
  // float
  [t.Triangular, d.Float],
  // float
  [t.BetaVariate, d.Float],
  // float
  [t.ExpoVariate, d.Float],
  // float
  [t.GammaVariate, d.Float],
  // float
  [t.Gauss, d.Float],
  // float
  [t.LogNormVariate, d.Float],
  // float
  [t.NormalVariate, d.Float],
  // float
  [t.VonMisesVariate, d.Float],
  // float
  [t.ParetoVariate, d.Float],
  // float
  [t.WeibullVariate, d.Float],
  // float
  [t.Acos, d.Float],
  // float
  [t.Acosh, d.Float],
  // float
  [t.Asin, d.Float],
  // float
  [t.Asinh, d.Float],
  // float
  [t.Atan, d.Float],
  // float
  [t.Atan2, d.Float],
  // float
  [t.Atanh, d.Float],
  // float
  [t.Ceil, d.Int],
  // int
  [t.Comb, d.Int],
  // int
  [t.CopySign, d.Float],
  // float
  [t.Cos, d.Float],
  // float
  [t.Cosh, d.Float],
  // float
  [t.Degrees, d.Float],
  // float
  [t.Dist, d.Float],
  // float
  [t.Erf, d.Float],
  // float
  [t.Erfc, d.Float],
  // float
  [t.Exp, d.Float],
  // float
  [t.Expm1, d.Float],
  // float
  [t.Fabs, d.Float],
  // float
  [t.Factorial, d.Int],
  // float
  [t.Floor, d.Int],
  // int
  [t.Fmod, d.Float],
  // float
  [t.Frexp, d.Tuple],
  // float
  [t.Fsum, d.Float],
  // float
  [t.Gamma, d.Float],
  // float
  [t.Gcd, d.Int],
  // float
  [t.Hypot, d.Float],
  // float
  [t.IsClose, d.Bool],
  // bool
  [t.IsFinite, d.Bool],
  // bool
  [t.IsInf, d.Bool],
  // bool
  [t.IsNaN, d.Bool],
  // bool
  [t.ISqrt, d.Int],
  // float
  [t.Ldexp, d.Float],
  // float
  [t.LGamma, d.Float],
  // float
  [t.Log, d.Float],
  // float
  [t.Log10, d.Float],
  // float
  [t.Log1P, d.Float],
  // float
  [t.Log2, d.Float],
  // float
  [t.Perm, d.Int],
  // int
  [t.Pow, d.Float],
  // float
  [t.Prod, d.Float],
  // float
  [t.Radians, d.Float],
  // float
  [t.Remainder, d.Float],
  // float
  [t.Sin, d.Float],
  // float
  [t.Sinh, d.Float],
  // float
  [t.Sqrt, d.Float],
  // float
  [t.Tan, d.Float],
  // float
  [t.Tanh, d.Float],
  // float
  [t.Trunc, d.Int],
  // int
  [t.E, d.Float],
  [t.Inf, d.Float],
  [t.Nan, d.Float],
  [t.Pi, d.Float],
  [t.Tau, d.Float],
  // String entities
  [t.AsciiLetters, d.String],
  [t.AsciiLowercase, d.String],
  [t.AsciiUppercase, d.String],
  [t.Digits, d.String],
  [t.Hexdigits, d.String],
  [t.Octdigits, d.String],
  [t.Punctuation, d.String],
  [t.Printable, d.String],
  [t.Whitespace, d.String],
  [t.Formatter, d.String],
  [t.Template, d.String],
  [t.Capwords, d.String],
  // Re module entities
  [t.ReA, d.Unknown],
  [t.ReASCII, d.Unknown],
  [t.ReDebug, d.Unknown],
  [t.ReI, d.Unknown],
  [t.ReIGNORECASE, d.Unknown],
  [t.ReL, d.Unknown],
  [t.ReLOCALE, d.Unknown],
  [t.ReM, d.Unknown],
  [t.ReMULTILINE, d.Unknown],
  [t.ReS, d.Unknown],
  [t.ReDOTALL, d.Unknown],
  [t.ReX, d.Unknown],
  [t.ReVERBOSE, d.Unknown],
  [t.Compile, d.Pattern],
  [t.Search, d.Unknown],
  [t.Match, d.Unknown],
  [t.FullMatch, d.Unknown],
  [t.FindAll, d.List],
  [t.FindIter, d.Unknown],
  [t.Sub, d.String],
  [t.SubN, d.Tuple],
  [t.Escape, d.String],
  [t.Purge, d.None],
  // Sys module entities
  [t.AddAuditHook, d.None],
  // none, function
  [t.Audit, d.None],
  // none, function
  [t.CallTracing, d.Unknown],
  // unknown function
  [t.ClearTypeCache, d.None],
  // none function
  [t.CurrentFrames, d.Dict],
  // dict function
  [t.CurrentExceptions, d.Dict],
  // dict function
  [t.BreakpointHook, d.None],
  // none function
  [t.DebugMallocStats, d.None],
  // none function
  [t.DisplayHook, d.None],
  // non function
  [t.ExceptHook, d.None],
  // none function
  [t.ExcInfo, d.Tuple],
  // tuple function
  [t.SysExit, d.None],
  // none, function
  [t.GetAllocatedBlocks, d.Int],
  // int function
  [t.GetAndroidApiLevel, d.Int],
  // int function
  [t.GetDefaultEncoding, d.String],
  // string function
  [t.GetDLOpenFlags, d.Int],
  // int function
  [t.GetFileSystemEncoding, d.String],
  // string function
  [t.GetFileSystemEncodeErrors, d.String],
  // string function
  [t.GetRefCount, d.Int],
  // int function
  [t.GetRecursionLimit, d.Int],
  // int function
  [t.GetSizeOf, d.Int],
  // int function
  [t.GetSwitchInterval, d.Float],
  // float function
  [t.GetFrame, d.Unknown],
  // unknown function
  [t.GetProfile, d.None],
  // none function
  [t.GetTrace, d.None],
  // none function
  [t.GetWindowsVersion, d.Tuple],
  // tuple function
  [t.GetAsyncGenHooks, d.Unknown],
  // unknown function
  [t.GetCoroutineOriginTrackingDepth, d.Int],
  // int function
  [t.Intern, d.Unknown],
  // unknown function
  [t.IsFinalizing, d.Bool],
  // bool function
  [t.SetDLOpenFlags, d.None],
  // none function
  [t.SetProfile, d.Unknown],
  // unknown function
  [t.SetRecursionLimit, d.None],
  // none function
  [t.SetSwitchInterval, d.None],
  // none function
  [t.SetTrace, d.None],
  // none function
  [t.SetAsyncgenHooks, d.None],
  // none function
  [t.EnableLegacyWindowsFSEncoding, d.None],
  // none function
  [t.ABIFlags, d.String],
  // string, prop
  [t.Argv, d.List],
  // list, prop
  [t.BaseExecPrefix, d.String],
  // string, prop
  [t.BasePrefix, d.String],
  // string prop
  [t.ByteOrder, d.String],
  // string prop
  [t.BuiltInModuleNames, d.Tuple],
  // tuple prop
  [t.Copyright, d.String],
  // string prop
  [t.DllHandle, d.Int],
  // int prop
  [t.DontWriteBytecode, d.Bool],
  // bool prop
  [t.PycachePrefix, d.Unknown],
  // unknown prop
  [t.ExecPrefix, d.String],
  // string prop
  [t.Executable, d.String],
  // string prop
  [t.Flags, d.Unknown],
  // unknown prop
  [t.FloatInfo, d.Unknown],
  // unknown prop
  [t.FloatReprStyle, d.String],
  // string prop
  [t.HashInfo, d.Unknown],
  // unknown prop
  [t.HexVersion, d.Int],
  // int prop
  [t.Implementation, d.Unknown],
  // unknown prop
  [t.IntInfo, d.Unknown],
  // unknown prop
  [t.LastType, d.Unknown],
  // unknown prop
  [t.LastValue, d.Unknown],
  // unknown prop
  [t.LastTraceback, d.Unknown],
  // unknown prop
  [t.MaxSize, d.Int],
  // int prop
  [t.MaxUnicode, d.Int],
  // int prop
  [t.MetaPath, d.List],
  // list prop
  [t.Modules, d.Dict],
  // dict prop
  [t.OrigArgv, d.List],
  // list prop
  [t.Path, d.List],
  // list prop
  [t.PathHooks, d.List],
  // list prop
  [t.PathImporterCache, d.Dict],
  // dict prop
  [t.Platform, d.String],
  // string prop
  [t.Prefix, d.String],
  // string prop
  [t.PS1, d.String],
  // string prop
  [t.PS2, d.String],
  // string prop
  [t.StdIn, d.Unknown],
  // unknown prop
  [t.StdOut, d.Unknown],
  // unknown prop
  [t.StdErr, d.Unknown],
  // unknown prop
  [t.StdLibModuleNames, d.Unknown],
  // unknown prop
  [t.ThreadInfo, d.Unknown],
  // unknown prop
  [t.TracebackLimit, d.Unknown],
  // int prop
  [t.Version, d.String],
  // string prop
  [t.ApiVersion, d.Int],
  // int prop
  [t.VersionInfo, d.Tuple],
  // tuple prop
  [t.WarnOptions, d.List],
  // list prop
  [t.WinVer, d.Int],
  // int prop
  [t.XOptions, d.Dict]
  // dict prop
]), mc = /* @__PURE__ */ new Set([
  t.Add,
  t.Append,
  t.Clear,
  t.DifferenceUpdate,
  t.Discard,
  t.Extend,
  t.Insert,
  t.IntersectionUpdate,
  t.Pop,
  t.PopItem,
  t.Remove,
  t.Reverse,
  t.SetDefault,
  t.Sort,
  t.SymmetricDifferenceUpdate,
  t.Update
]), Or = /* @__PURE__ */ new Set([
  t.Capitalize,
  t.Casefold,
  t.Center,
  t.Encode,
  t.ExpandTabs,
  t.Format,
  t.FormatMap,
  t.LJust,
  t.Lower,
  t.LStrip,
  t.Replace,
  t.RJust,
  t.RStrip,
  t.Strip,
  t.SwapCase,
  t.Title,
  t.Translate,
  t.Upper,
  t.ZFill
]), gr = /* @__PURE__ */ new Map([
  // random module
  [t.Seed, t.RandomModule],
  [t.GetState, t.RandomModule],
  [t.SetState, t.RandomModule],
  [t.GetRandBits, t.RandomModule],
  [t.RandRange, t.RandomModule],
  [t.RandInt, t.RandomModule],
  [t.Choice, t.RandomModule],
  [t.Choices, t.RandomModule],
  [t.Shuffle, t.RandomModule],
  [t.Sample, t.RandomModule],
  [t.RandomMethod, t.RandomModule],
  [t.Uniform, t.RandomModule],
  [t.Triangular, t.RandomModule],
  [t.BetaVariate, t.RandomModule],
  [t.ExpoVariate, t.RandomModule],
  [t.GammaVariate, t.RandomModule],
  [t.Gauss, t.RandomModule],
  [t.LogNormVariate, t.RandomModule],
  [t.NormalVariate, t.RandomModule],
  [t.VonMisesVariate, t.RandomModule],
  [t.ParetoVariate, t.RandomModule],
  [t.WeibullVariate, t.RandomModule],
  // Math module
  [t.Acos, t.MathModule],
  [t.Acosh, t.MathModule],
  [t.Asin, t.MathModule],
  [t.Asinh, t.MathModule],
  [t.Atan, t.MathModule],
  [t.Atan2, t.MathModule],
  [t.Atanh, t.MathModule],
  [t.Ceil, t.MathModule],
  [t.Comb, t.MathModule],
  [t.CopySign, t.MathModule],
  [t.Cos, t.MathModule],
  [t.Cosh, t.MathModule],
  [t.Degrees, t.MathModule],
  [t.Dist, t.MathModule],
  [t.Erf, t.MathModule],
  [t.Erfc, t.MathModule],
  [t.Exp, t.MathModule],
  [t.Expm1, t.MathModule],
  [t.Fabs, t.MathModule],
  [t.Factorial, t.MathModule],
  [t.Floor, t.MathModule],
  [t.Fmod, t.MathModule],
  [t.Frexp, t.MathModule],
  [t.Fsum, t.MathModule],
  [t.Gamma, t.MathModule],
  [t.Gcd, t.MathModule],
  [t.Hypot, t.MathModule],
  [t.IsClose, t.MathModule],
  [t.IsFinite, t.MathModule],
  [t.IsInf, t.MathModule],
  [t.IsNaN, t.MathModule],
  [t.ISqrt, t.MathModule],
  [t.Ldexp, t.MathModule],
  [t.LGamma, t.MathModule],
  [t.Log, t.MathModule],
  [t.Log10, t.MathModule],
  [t.Log1P, t.MathModule],
  [t.Log2, t.MathModule],
  [t.Perm, t.MathModule],
  [t.Pow, t.MathModule],
  [t.Prod, t.MathModule],
  [t.Radians, t.MathModule],
  [t.Remainder, t.MathModule],
  [t.Sin, t.MathModule],
  [t.Sinh, t.MathModule],
  [t.Sqrt, t.MathModule],
  [t.Tan, t.MathModule],
  [t.Tanh, t.MathModule],
  [t.Trunc, t.MathModule],
  [t.E, t.MathModule],
  [t.Inf, t.MathModule],
  [t.Nan, t.MathModule],
  [t.Pi, t.MathModule],
  [t.Tau, t.MathModule],
  // String module entities
  [t.AsciiLetters, t.StringModule],
  [t.AsciiLowercase, t.StringModule],
  [t.AsciiUppercase, t.StringModule],
  [t.Digits, t.StringModule],
  [t.Hexdigits, t.StringModule],
  [t.Octdigits, t.StringModule],
  [t.Punctuation, t.StringModule],
  [t.Printable, t.StringModule],
  [t.Whitespace, t.StringModule],
  [t.Formatter, t.StringModule],
  [t.Template, t.StringModule],
  [t.Capwords, t.StringModule],
  // Re module entities
  [t.Pattern, t.ReModule],
  [t.Match, t.ReModule],
  [t.ReA, t.ReModule],
  [t.ReASCII, t.ReModule],
  [t.ReDebug, t.ReModule],
  [t.ReI, t.ReModule],
  [t.ReIGNORECASE, t.ReModule],
  [t.ReL, t.ReModule],
  [t.ReLOCALE, t.ReModule],
  [t.ReM, t.ReModule],
  [t.ReMULTILINE, t.ReModule],
  [t.ReS, t.ReModule],
  [t.ReDOTALL, t.ReModule],
  [t.ReX, t.ReModule],
  [t.ReVERBOSE, t.ReModule],
  [t.Compile, t.ReModule],
  [t.Search, t.ReModule],
  [t.Match, t.ReModule],
  [t.FullMatch, t.ReModule],
  [t.FindAll, t.ReModule],
  [t.FindIter, t.ReModule],
  [t.Sub, t.ReModule],
  [t.SubN, t.ReModule],
  [t.Escape, t.ReModule],
  [t.Purge, t.ReModule],
  [t.Split, t.ReModule],
  // Sys module
  [t.AddAuditHook, t.Sys],
  // none, function
  [t.Audit, t.Sys],
  // none, function
  [t.CallTracing, t.Sys],
  // unknown function
  [t.ClearTypeCache, t.Sys],
  // none function
  [t.CurrentFrames, t.Sys],
  // dict function
  [t.CurrentExceptions, t.Sys],
  // dict function
  [t.BreakpointHook, t.Sys],
  // none function
  [t.DebugMallocStats, t.Sys],
  // none function
  [t.DisplayHook, t.Sys],
  // non function
  [t.ExceptHook, t.Sys],
  // none function
  [t.ExcInfo, t.Sys],
  // tuple function
  [t.SysExit, t.Sys],
  // none, function
  [t.GetAllocatedBlocks, t.Sys],
  // int function
  [t.GetAndroidApiLevel, t.Sys],
  // int function
  [t.GetDefaultEncoding, t.Sys],
  // string function
  [t.GetDLOpenFlags, t.Sys],
  // int function
  [t.GetFileSystemEncoding, t.Sys],
  // string function
  [t.GetFileSystemEncodeErrors, t.Sys],
  // string function
  [t.GetRefCount, t.Sys],
  // int function
  [t.GetRecursionLimit, t.Sys],
  // int function
  [t.GetSizeOf, t.Sys],
  // int function
  [t.GetSwitchInterval, t.Sys],
  // float function
  [t.GetFrame, t.Sys],
  // unknown function
  [t.GetProfile, t.Sys],
  // none function
  [t.GetTrace, t.Sys],
  // none function
  [t.GetWindowsVersion, t.Sys],
  // tuple function
  [t.GetAsyncGenHooks, t.Sys],
  // unknown function
  [t.GetCoroutineOriginTrackingDepth, t.Sys],
  // int function
  [t.Intern, t.Sys],
  // unknown function
  [t.IsFinalizing, t.Sys],
  // bool function
  [t.SetDLOpenFlags, t.Sys],
  // none function
  [t.SetProfile, t.Sys],
  // unknown function
  [t.SetRecursionLimit, t.Sys],
  // none function
  [t.SetSwitchInterval, t.Sys],
  // none function
  [t.SetTrace, t.Sys],
  // none function
  [t.SetAsyncgenHooks, t.Sys],
  // none function
  [t.EnableLegacyWindowsFSEncoding, t.Sys],
  // none function
  [t.ABIFlags, t.Sys],
  // string, prop
  [t.Argv, t.Sys],
  // list, prop
  [t.BaseExecPrefix, t.Sys],
  // string, prop
  [t.BasePrefix, t.Sys],
  // string prop
  [t.ByteOrder, t.Sys],
  // string prop
  [t.BuiltInModuleNames, t.Sys],
  // tuple prop
  [t.Copyright, t.Sys],
  // string prop
  [t.DllHandle, t.Sys],
  // int prop
  [t.DontWriteBytecode, t.Sys],
  // bool prop
  [t.PycachePrefix, t.Sys],
  // unknown prop
  [t.ExecPrefix, t.Sys],
  // string prop
  [t.Executable, t.Sys],
  // string prop
  [t.Flags, t.Sys],
  // unknown prop
  [t.FloatInfo, t.Sys],
  // unknown prop
  [t.FloatReprStyle, t.Sys],
  // string prop
  [t.HashInfo, t.Sys],
  // unknown prop
  [t.HexVersion, t.Sys],
  // int prop
  [t.Implementation, t.Sys],
  // unknown prop
  [t.IntInfo, t.Sys],
  // unknown prop
  [t.LastType, t.Sys],
  // unknown prop
  [t.LastValue, t.Sys],
  // unknown prop
  [t.LastTraceback, t.Sys],
  // unknown prop
  [t.MaxSize, t.Sys],
  // int prop
  [t.MaxUnicode, t.Sys],
  // int prop
  [t.MetaPath, t.Sys],
  // list prop
  [t.Modules, t.Sys],
  // dict prop
  [t.OrigArgv, t.Sys],
  // list prop
  [t.Path, t.Sys],
  // list prop
  [t.PathHooks, t.Sys],
  // list prop
  [t.PathImporterCache, t.Sys],
  // dict prop
  [t.Platform, t.Sys],
  // string prop
  [t.Prefix, t.Sys],
  // string prop
  [t.PS1, t.Sys],
  // string prop
  [t.PS2, t.Sys],
  // string prop
  [t.StdIn, t.Sys],
  // unknown prop
  [t.StdOut, t.Sys],
  // unknown prop
  [t.StdErr, t.Sys],
  // unknown prop
  [t.StdLibModuleNames, t.Sys],
  // unknown prop
  [t.ThreadInfo, t.Sys],
  // unknown prop
  [t.TracebackLimit, t.Sys],
  // int prop
  [t.Version, t.Sys],
  // string prop
  [t.ApiVersion, t.Sys],
  // int prop
  [t.VersionInfo, t.Sys],
  // tuple prop
  [t.WarnOptions, t.Sys],
  // list prop
  [t.WinVer, t.Sys],
  // int prop
  [t.XOptions, t.Sys]
  // dict prop
]), ii = {
  assert: { entity: t.AssertFunction, category: a.BuiltInFunctions },
  random: { entity: t.RandomMethod, category: a.BuiltInMethods },
  exit: { entity: t.SysExit, category: a.ModuleFunctions }
}, li = /* @__PURE__ */ new Map([
  [d.String, /* @__PURE__ */ new Set([
    t.Capitalize,
    t.Casefold,
    t.Center,
    t.Count,
    t.Encode,
    t.ExpandTabs,
    t.Find,
    t.Format,
    t.Index,
    t.IsAlnum,
    t.IsAlpha,
    t.IsAscii,
    t.IsDecimal,
    t.IsDigit,
    t.IsIdentifier,
    t.IsLower,
    t.IsNumeric,
    t.IsPrintable,
    t.IsSpace,
    t.IsTitle,
    t.IsUpper,
    t.Join,
    t.LJust,
    t.Lower,
    t.LStrip,
    t.MakeTrans,
    t.Partition,
    t.Replace,
    t.RFind,
    t.RIndex,
    t.RJust,
    t.RPartition,
    t.RSplit,
    t.RStrip,
    t.Split,
    t.SplitLines,
    t.StartsWith,
    t.Strip,
    t.SwapCase,
    t.Title,
    t.Translate,
    t.Upper,
    t.ZFill
  ])],
  [d.List, /* @__PURE__ */ new Set([
    t.Append,
    t.Clear,
    t.Copy,
    t.Count,
    t.Extend,
    t.Index,
    t.Insert,
    t.Pop,
    t.Remove,
    t.Reverse,
    t.Sort,
    a.MagicMethods
  ])],
  [d.Tuple, /* @__PURE__ */ new Set([t.Count, t.Index])],
  [d.Set, /* @__PURE__ */ new Set([
    t.Add,
    t.Clear,
    t.Copy,
    t.Difference,
    t.DifferenceUpdate,
    t.Discard,
    t.Intersection,
    t.IntersectionUpdate,
    t.IsDisjoint,
    t.IsSubset,
    t.IsSuperset,
    t.Pop,
    t.Remove,
    t.SymmetricDifference,
    t.SymmetricDifferenceUpdate,
    t.Union,
    t.Update
  ])],
  [d.Dict, /* @__PURE__ */ new Set([
    t.Clear,
    t.Copy,
    t.FromKeys,
    t.Get,
    t.Items,
    t.Keys,
    t.Pop,
    t.PopItem,
    t.SetDefault,
    t.Update,
    t.Values
  ])],
  [d.File, /* @__PURE__ */ new Set([
    t.Close,
    t.FileNo,
    t.Flush,
    t.IsAtty,
    t.Read,
    t.Readable,
    t.ReadLine,
    t.ReadLines,
    t.Seek,
    t.Seekable,
    t.Tell,
    t.Truncate,
    t.Writable,
    t.Write,
    t.WriteLines
  ])],
  [d.Random, /* @__PURE__ */ new Set([
    t.Seed,
    t.GetState,
    t.SetState,
    t.GetRandBits,
    t.RandRange,
    t.RandInt,
    t.Choice,
    t.Choices,
    t.Shuffle,
    t.Sample,
    t.RandomMethod,
    t.Uniform,
    t.Triangular,
    t.BetaVariate,
    t.ExpoVariate,
    t.GammaVariate,
    t.Gauss,
    t.LogNormVariate,
    t.NormalVariate,
    t.VonMisesVariate,
    t.ParetoVariate,
    t.WeibullVariate,
    a.MagicMethods
  ])],
  [d.Math, /* @__PURE__ */ new Set([
    t.Acos,
    t.Acosh,
    t.Asin,
    t.Asinh,
    t.Atan,
    t.Atan2,
    t.Atanh,
    t.Ceil,
    t.Comb,
    t.CopySign,
    t.Cos,
    t.Cosh,
    t.Degrees,
    t.Dist,
    t.Erf,
    t.Erfc,
    t.Exp,
    t.Expm1,
    t.Fabs,
    t.Factorial,
    t.Floor,
    t.Fmod,
    t.Frexp,
    t.Fsum,
    t.Gamma,
    t.Gcd,
    t.Hypot,
    t.IsClose,
    t.IsFinite,
    t.IsInf,
    t.IsNaN,
    t.ISqrt,
    t.Ldexp,
    t.LGamma,
    t.Log,
    t.Log10,
    t.Log1P,
    t.Log2,
    t.Perm,
    t.Pow,
    t.Prod,
    t.Radians,
    t.Remainder,
    t.Sin,
    t.Sinh,
    t.Sqrt,
    t.Tan,
    t.Tanh,
    t.Trunc
  ])],
  [d.StringModule, /* @__PURE__ */ new Set([
    t.Formatter,
    t.Template,
    t.Capwords
  ])],
  [d.Re, /* @__PURE__ */ new Set([
    t.Compile,
    t.Search,
    t.Match,
    t.FullMatch,
    t.FindAll,
    t.FindIter,
    t.Sub,
    t.SubN,
    t.Escape,
    t.Purge,
    t.Split
  ])],
  [d.Sys, /* @__PURE__ */ new Set([
    t.AddAuditHook,
    t.Audit,
    t.CallTracing,
    t.ClearTypeCache,
    t.CurrentFrames,
    t.CurrentExceptions,
    t.BreakpointHook,
    t.DebugMallocStats,
    t.DisplayHook,
    t.ExceptHook,
    t.ExcInfo,
    t.SysExit,
    t.GetAllocatedBlocks,
    t.GetAndroidApiLevel,
    t.GetDefaultEncoding,
    t.GetDLOpenFlags,
    t.GetFileSystemEncoding,
    t.GetFileSystemEncodeErrors,
    t.GetRefCount,
    t.GetRecursionLimit,
    t.GetSizeOf,
    t.GetSwitchInterval,
    t.GetFrame,
    t.GetProfile,
    t.GetTrace,
    t.GetWindowsVersion,
    t.GetAsyncGenHooks,
    t.GetCoroutineOriginTrackingDepth,
    t.Intern,
    t.IsFinalizing,
    t.SetDLOpenFlags,
    t.SetProfile,
    t.SetRecursionLimit,
    t.SetSwitchInterval,
    t.SetTrace,
    t.SetAsyncgenHooks,
    t.EnableLegacyWindowsFSEncoding
  ])]
]);
var Mt, xt, Dt, Bt, At, Xt, Zt;
class H {
  /**
   * Creates a new Symptom
   * @param {String} id The string id for the symptom
   * @param {Number} lineNum The document line number
   * @param {String} blockId The id of the block containing the symptom
   * @param {Number} docIndex The index in the raw text of the document
   * @param {Number} lineIndex The index in the raw text of the line
   * @param {String} affectedText The text affected by the symptom
   * @param {Object} additionalInfo An optional object containing more information about the symptom
   */
  constructor(i, e, n, s, o, u = "", h = {}) {
    /** @type {String} */
    I(this, Mt);
    // The logging ID of the symptom
    /** @type {Number} */
    I(this, xt);
    // The document line number
    /** @type {Number} */
    I(this, Dt);
    // index in full document raw text
    /** @type {Number} */
    I(this, Bt);
    // index in the raw text of the given line
    /** @type {String} */
    I(this, At);
    // The text to highlight
    /** @type {Object} */
    I(this, Xt);
    // Properties vary by symptom
    /** @type {String} */
    I(this, Zt);
    y(this, Mt, i), y(this, xt, e), y(this, Zt, n), y(this, Dt, s), y(this, Bt, o), y(this, At, u), y(this, Xt, h);
  }
  /**
   * Gets the ID of the symptom
   * @returns {String} The symptom ID
   */
  getID() {
    return c(this, Mt);
  }
  /**
   * Gets the document line number
   * @returns {Number} The document line number
   */
  getLineNumber() {
    return c(this, xt);
  }
  getBlock() {
    return c(this, Zt);
  }
  /**
   * Gets the index of the symptom in the document's raw text
   * @returns {Number} The document index of the problem
   */
  getDocIndex() {
    return c(this, Dt);
  }
  /**
   * Gets the index of the symptom in the line's raw text
   * @returns {Number} The line index of the problem
   */
  getLineIndex() {
    return c(this, Bt);
  }
  /**
   * Gets the affected text
   * @returns {String} The affected text
   */
  getAffectedText() {
    return c(this, At);
  }
  /**
   * Gets the additional information for this symptom
   * @returns {Object} An object containing more information about this symptom
   */
  getAdditionalInfo() {
    return c(this, Xt);
  }
  /**
   * Creates a String representation of the symptom
   * @returns {String} A String representation of the symptom
   */
  toString() {
    return `{line: ${c(this, xt)}, type: ${c(this, Mt)}, text: ${c(this, At)}, docIndex: ${c(this, Dt)}, lineIndex: ${c(this, Bt)}, additionalInfo: ${c(this, Xt)}`;
  }
  /**
   * Creates a JSON-friendly representation of the symptom
   * @returns {Object} A JSON-friendly representation of the symptom
   */
  toJSON() {
    return {
      line: c(this, xt),
      type: c(this, Mt),
      text: c(this, At),
      block: c(this, Zt),
      docIndex: c(this, Dt),
      lineIndex: c(this, Bt)
    };
  }
}
Mt = new WeakMap(), xt = new WeakMap(), Dt = new WeakMap(), Bt = new WeakMap(), At = new WeakMap(), Xt = new WeakMap(), Zt = new WeakMap();
class wc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("parentText") && (i.parentText = e.parentText), i;
  }
}
class Sc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    if (e.hasOwnProperty("expression")) {
      let n = e.expression.getCategory().name;
      e.expression.getEntity() === t.VariableName ? n = _l : e.expression.is(t.UserDefinedFunctionCall) ? n = Vn : e.expression.is(t.BuiltInFunctionCall) && (n = vn), i.expressionNoValue = {
        type: n,
        value: e.expression.getTextValue()
      };
    }
    return e.hasOwnProperty("usage") && (i.usage = e.usage), e.hasOwnProperty("target") && (i.target = e.target), i;
  }
}
class Ic extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("assignedVariables") && (i.assignedVariables = e.assignedVariables), i;
  }
}
class bc extends H {
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("boolValue") && (i.boolValue = e.boolValue), e.hasOwnProperty("operator") && (i.operator = e.operator), e.hasOwnProperty("boolLiteral") && (i.boolLiteral = e.boolLiteral), e.hasOwnProperty("usedIn") && (i.usedIn = e.usedIn), i;
  }
}
class yc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("definitionType") && (i.boolValue = e.definitionType), e.hasOwnProperty("reservedWord") && (i.reservedWord = e.reservedWord), i;
  }
}
class Fc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("definitionText") && (i.definitionText = e.definitionText), e.hasOwnProperty("loopVarTypeAtDefinition") && (i.loopVarTypeAtDefinition = e.loopVarTypeAtDefinition), e.hasOwnProperty("modificationText") && (i.modificationText = e.modificationText), i;
  }
}
class Nc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("printLines") && (i.printLines = e.printLines), e.hasOwnProperty("functionReturns") && (i.functionReturns = e.functionReturns), i;
  }
}
class Tc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("loopType") && (i.loopType = e.loopType), e.hasOwnProperty("exitLevel") && (i.exitLevel = e.exitLevel), e.hasOwnProperty("exitTypes") && (i.exitTypes = e.exitTypes), i;
  }
}
class Cc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("modifiedIn") && (i.modifiedIn = e.modifiedIn), i;
  }
}
class Oc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("unmodifiedVars") && (i.unmodifiedVars = e.unmodifiedVars), e.hasOwnProperty("loopText") && (i.loopText = e.loopText), i;
  }
}
class Mc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("form") && (i.form = e.form), e.hasOwnProperty("leftSideType") && (i.leftSideType = e.leftSideType.name), e.hasOwnProperty("leftSideText") && (i.leftSideText = e.leftSideText), e.hasOwnProperty("leftSideEntity") && (i.leftSideEntity = e.leftSideEntity.name), e.hasOwnProperty("operator") && (i.operator = e.operator), e.hasOwnProperty("rightSideType") && (i.rightSideType = e.rightSideType.name), e.hasOwnProperty("rightSideText") && (i.rightSideText = e.rightSideText), e.hasOwnProperty("rightSideEntity") && (i.rightSideEntity = e.rightSideEntity.name), e.hasOwnProperty("parentText") && (i.parentText = e.parentText), e.hasOwnProperty("parentEntity") && (i.parentEntity = e.parentEntity.name), e.hasOwnProperty("completeBooleanExpression") && (i.completeBooleanExpression = e.completeBooleanExpression), i;
  }
}
class xc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("form") && (i.form = e.form), e.hasOwnProperty("variableAssigned") && (i.variableAssigned = e.variableAssigned), e.hasOwnProperty("condition") && (i.condition = e.condition), i;
  }
}
class Dc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("isParameter") && (i.isParameter = e.isParameter), e.hasOwnProperty("prevUsageIsDefinition") && (i.prevUsageIsDefinition = e.prevUsageIsDefinition), e.hasOwnProperty("overwriteType") && (i.overwriteType = e.overwriteType), e.hasOwnProperty("overwriteValue") && (i.overwriteValue = e.overwriteValue), e.hasOwnProperty("overwrittenVar") && (i.overwrittenVar = e.overwrittenVar), e.hasOwnProperty("functionBlock") && (i.functionBlock = e.functionBlock), e.hasOwnProperty("usageText") && (i.usageText = e.usageText), i;
  }
}
class Bc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("contents") && (i.contents = e.contents), e.hasOwnProperty("textInParentheses") && (i.textInParentheses = e.textInParentheses), i;
  }
}
class Ac extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("branchMatches") && (i.branchMatches = e.branchMatches), i;
  }
}
class kc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("isUndefined") && (i.isUndefined = e.isUndefined), e.hasOwnProperty("subscriptedType") && (i.subscriptedType = e.subscriptedType.name), e.hasOwnProperty("varName") && (i.varName = e.varName), i;
  }
}
class Pc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("boolValue") && (i.boolValue = e.boolValue), e.hasOwnProperty("boolLiteralIfTrue") && (i.boolLiteralIfTrue = e.boolLiteralIfTrue), e.hasOwnProperty("boolLiteralIfFalse") && (i.boolLiteralIfFalse = e.boolLiteralIfFalse), e.hasOwnProperty("parentText") && (i.parentText = e.parentText), e.hasOwnProperty("parentEntity") && (i.parentEntity = e.parentEntity), i;
  }
}
class Lc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("parts") && (i.parts = e.parts), i;
  }
}
class Vc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("convertedValue") && (i.convertedValue = e.convertedValue), e.hasOwnProperty("argType") && (i.argType = e.argType), e.hasOwnProperty("convertedType") && (i.convertedType = e.convertedType), i;
  }
}
class vc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("variable") && (i.variable = e.variable.toJSON()), e.hasOwnProperty("localVariables") && (i.localVariables = e.localVariables), i;
  }
}
class Rc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("before") && (i.before = e.before), e.hasOwnProperty("after") && (i.after = e.after), i;
  }
}
class Uc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("objectType") && (i.objectType = e.objectType), i;
  }
}
class Ec extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("exitKeyword") && (i.exitKeyword = e.exitKeyword), i;
  }
}
class Gc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("infiniteLoopLine") && (i.infiniteLoopLine = e.infiniteLoopLine), i;
  }
}
class $c extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    if (e.hasOwnProperty("expression")) {
      let n = e.expression.getCategory().name;
      e.expression.getEntity() === t.FunctionName ? n = Vn : e.expression.getCategory() === a.BuiltInFunctions && (n = vn), i.unusedFunc = {
        type: n,
        value: e.expression.getTextValue(),
        returnType: e.expression.getDataType().name.replace(" (int or float)", "")
      };
    }
    return i;
  }
}
class Jc extends H {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("funcType") && (i.funcType = e.funcType), e.hasOwnProperty("numArgsExpected") && (i.numArgsExpected = e.numArgsExpected), e.hasOwnProperty("varIsParameter") && (i.varIsParameter = e.varIsParameter), i;
  }
}
class Kc extends H {
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("expectedMinArgs") && (i.expectedMinArgs = e.expectedMinArgs), e.hasOwnProperty("expectedMaxArgs") && (i.expectedMinArgs = e.expectedMaxArgs), e.hasOwnProperty("receivedArgs") && (i.receivedArgs = e.receivedArgs), i;
  }
}
class x {
  /**
   * Factory method to create a new Symptom object that occurs in a single statement
   * @param {SymptomType} type The type of symptom
   * @param {ExpressionNode[]} expressions The expressions in the statement
   * @param {Number} startIndex The index of the expression that the Symptom starts with
   * @param {Number} endIndex The index of the expression that the Symptom ends with (inclusive)
   * @param {Object} additionalInfo An Object literal containing any additional information about the Symptom
   * @param {String} block Optional. The block id.
   * @param {boolean} includeIndents Optional. Whether or not to include the first expression indent in the affected text. Default = false
   * @returns {Symptom}
   */
  static createStatementSymptom(i, e, n, s, o = {}, u = "", h = !1) {
    const p = e[n].getStartLineNumber(), w = u === "" ? e[n].getBlockId() : u, S = e[n].getDocumentStartIndex(), F = e[n].getIndexOnLine(), N = oe(e.slice(n, s + 1), h);
    switch (i) {
      case b.AssignmentInBoolean:
        return new wc(i.name, p, w, S, F, N, o);
      case b.AssignedNone:
        return new Sc(i.name, p, w, S, F, N, o);
      case b.AssignmentInReturn:
        return new Ic(i.name, p, w, S, F, N, o);
      case b.CompareBoolLiteral:
        return new bc(i.name, p, w, S, F, N, o);
      case b.DefinitionFollowedByReservedWord:
        return new yc(i.name, p, w, S, F, N, o);
      case b.FunctionPrints:
        return new Nc(i.name, p, w, S, F, N, o);
      case b.ForLoopIteratorModified:
        return new Fc(i.name, p, w, S, F, N, o);
      case b.LoopReturn:
        return new Tc(i.name, p, w, S, F, N, o);
      case b.LoopVarModifiedInChildLoop:
        return new Cc(i.name, p, w, S, F, N, o);
      case b.LoopVarNotModified:
        return new Oc(i.name, p, w, S, F, N, o);
      case b.NaturalLanguageBoolean:
        return new Mc(i.name, p, w, S, F, N, o);
      case b.OneLineConditional:
        return new xc(i.name, p, w, S, F, N, o);
      case b.OverwrittenVariable:
        return new Dc(i.name, p, w, S, F, N, o);
      case b.ReturnInParentheses:
        return new Bc(i.name, p, w, S, F, N, o);
      case b.SequentialIfs:
        return new Ac(i.name, p, w, S, F, N, o);
      case b.SubscriptedNonSubscriptable:
        return new kc(i.name, p, w, S, F, N, o);
      case b.TernaryReturnsBool:
        return new Pc(i.name, p, w, S, F, N, o);
      case b.TypeErrorInvalid:
        return new Lc(i.name, p, w, S, F, N, o);
      case b.TypeUnnecessary:
        return new Vc(i.name, p, w, S, F, N, o);
      case b.UndefinedVariable:
        return new vc(i.name, p, w, S, F, N, o);
      case b.UnexpectedColon:
        return new Rc(i.name, p, w, S, F, N, o);
      case b.UnknownMethod:
        return new Uc(i.name, p, w, S, F, N, o);
      case b.UnreachableExit:
        return new Ec(i.name, p, w, S, F, N, o);
      case b.UnreachableInfiniteLoop:
        return new Gc(i.name, p, w, S, F, N, o);
      case b.UnusedReturn:
        return new $c(i.name, p, w, S, F, N, o);
      case b.VariableWithSameNameAsFunction:
        return new Jc(i.name, p, w, S, F, N, o);
      case b.WrongArgNumber:
        return new Kc(i.name, p, w, S, F, N, o);
      default:
        return new H(i.name, p, w, S, F, N, o);
    }
  }
  static checkBooleanCompare(i) {
    const e = i.getParent();
    e !== void 0 && (e.is(t.AssignmentStatement) || e.isOneOf([
      t.BooleanExpression,
      t.UserDefinedFunctionCall,
      t.BuiltInFunctionCall,
      t.IfDefinitionStatement,
      t.ElifDefinitionStatement,
      t.WhileDefinitionStatement,
      t.ReturnStatement,
      t.AssertStatement,
      t.ComparisonExpression,
      t.GroupStatement,
      t.TernaryStatement,
      t.BuiltInMethodCall,
      t.UserDefinedMethodCall
    ]));
  }
}
l(x, "symptoms", []), l(x, "constructs", []), l(x, "text", "");
var Yt, _t;
class ei {
  constructor() {
    /** @type {Array<Function: Symptom[]>} */
    I(this, Yt, []);
    /** @type {Array<Function: Construct[]>} */
    I(this, _t, []);
  }
  /**
   * Runs each symptom rule function, if applicable. Any symptoms found should be added to the SymptomFinder
   */
  checkRules(i) {
    for (const e of c(this, Yt))
      x.symptoms.push(...e(i));
  }
  /**
   * Runs each construct rule function. Any constructs found are added to the SymptomFinder
   * @param {SymptomMonitor} obj 
   */
  checkForConstructs(i) {
    for (const e of c(this, _t))
      x.constructs.push(...e(i));
  }
  /**
   * Adds a rule function to the this object.
   * @param {Function: Symptom[]} ruleFunc A function that returns an array of Symptom objects
   */
  addRule(i) {
    c(this, Yt).push(i);
  }
  /**
   * Adds a construct rule function to this object.
   * @param {Function: Construct[]} ruleFunc A function that returns an array of Construct objects
   */
  addConstructRule(i) {
    c(this, _t).push(i);
  }
  /**
   * Adds multiple rule functions to this object.
   * @param {Array<Function: Symptom[]>} rules An array of functions, each of which returns an array of Symptom objects
   */
  addRules(i) {
    c(this, Yt).push(...i);
  }
  /**
   * Adds multiple rule functions to this object.
   * @param {Array<Function: Construct[]>} rules An array of functions, each of which returns an array of Construct objects
   */
  addConstructRules(i) {
    c(this, _t).push(...i);
  }
}
Yt = new WeakMap(), _t = new WeakMap();
class Ps extends ei {
  constructor() {
    super();
    // WEIRD ERROR: This variable was originally private, but the debugger seems to crash if there is a private attribute with type Set() or Map()
    l(this, "observers");
    this.observers = /* @__PURE__ */ new Set();
  }
  /**
   * Adds an observer to this object's list of observers.
   * @param {TypeChangeObserverNotifier} observer An observer of this object
   * @param {DataType} dataType The DataType of the observer
   */
  addObserver(e, n = void 0) {
    this.observers.add(e), e instanceof Ps && n !== void 0 && e.typeUpdateReceived(n);
  }
  getObservers() {
    return this.observers;
  }
  /**
   * Removes the observer if found.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
   * @param {TypeChangeObserverNotifier} observer 
   */
  removeObserver(e) {
    this.observers.delete(e);
  }
  /**
   * Notify all observers of this object's DataType
   * @param {DataType} dataType The new DataType of this object
   */
  sendUpdate(e) {
    for (let n of this.observers)
      n instanceof Ps && n.typeUpdateReceived(e);
  }
  /**
   * Handles a DataType update notification from an object this object is observing.
   * @param {DataType} dataType The new DataType of the object sending the update.
   * @abstract
   */
  typeUpdateReceived(e) {
  }
}
var kt, Pe, at, tt, en, zn, Qn, Ae, Mr, ci, xr, Dr, Br;
class pr extends ei {
  /**
   * Creates a new VariableInfo object
   * @param {UsageInfo} firstUsage The first time the new variable or attribute is encountered
   * @param {Statement} containingStatement The statment that contains firstExpression
   * @param {StatementBlock} definedInBlock The Block that the containingStatement belongs to
   */
  constructor(e, n, s) {
    super();
    I(this, Ae);
    /** @type {String} */
    I(this, kt);
    // The variable name
    /** @type {UsageInfo[]} */
    I(this, Pe, []);
    /** @type {StatementBlock} */
    I(this, at);
    /** @type {ScopeBlock} */
    I(this, tt);
    /** @type {Boolean} */
    I(this, en, !1);
    /** @type {ScopeBlock[]} */
    I(this, zn, []);
    /** @type {VariableInfo[]} */
    I(this, Qn, []);
    if (!e.getVariable().isOneOf([t.VariableName, t.PropertyName]))
      throw new Error("First expression of variable is not a variable.");
    y(this, kt, e.getVariable().getTextValue()), c(this, Pe).push(e);
    const o = n.getExpressions();
    o.length > 0 && o[0].is(t.FunctionDefinitionStatement) && y(this, en, !0), y(this, at, s), y(this, tt, s.getScope()), this.addRules([m(this, Ae, Br), m(this, Ae, xr)]);
  }
  /**
   * Gets the name of the variable
   * @returns {String}
   */
  getName() {
    return c(this, kt);
  }
  /**
   * Gets the usages of the variable.
   * @returns {UsageInfo[]}
   */
  getUsages() {
    return c(this, Pe);
  }
  /**
   * Adds multiple usages to the usages array
   * @param {UsageInfo[]} usages 
   */
  addUsages(e) {
    for (let n of e)
      this.addUsage(n);
  }
  insertUsages(e) {
    const n = [...c(this, Pe)];
    y(this, Pe, e), this.addUsages(n);
  }
  /**
   * Adds a single usage to the usages array
   * @param {UsageInfo} usage 
   */
  addUsage(e) {
    const n = e.getVariable();
    if (c(this, Pe).length > 0) {
      let s = c(this, Pe).length - 1, o = !1;
      const u = /* @__PURE__ */ new Set(), h = [];
      for (; s >= 0 && !o; ) {
        const p = c(this, Pe)[s], w = p.getVariable();
        if (p.isInConditionalDefinition()) {
          const S = p.getBodyOfConditional();
          if (u.has(S)) {
            s--;
            continue;
          }
        }
        if (e.isInSameBlock(p) || p.isInParentBlock(e) || m(this, Ae, Mr).call(this, w, n))
          n.addLastUsage(w), o = !0;
        else if (!e.isInAlternateBranch(p) && !u.has(p.getBlock())) {
          n.addLastUsage(w);
          const S = p.getBlock();
          u.add(S), S.isBranchBlock() && S.isBranchOfConditional() && (S.getBlockEntity() === t.ElseDefinition || S.getBlockEntity() === t.ExceptDefinition ? h.push(/* @__PURE__ */ new Set([...S.getSiblingConditionalBranches()])) : S.isBranchOfExhaustiveConditional() && (o = m(this, Ae, ci).call(this, S, e.getBlock(), h, u)));
        }
        s--;
      }
      if (!o && !n.isAssignedOrChanged()) {
        const p = new Tn("Undefined Variable", t.VariableName, a.Identifiers, -1, -1, -1);
        p.setDataType(d.Undefined), n.addLastUsage(p);
      }
    }
    n.isProxy() || c(this, Pe).push(e);
  }
  checkAndAdjustUndefined() {
    const e = this.getUsages();
    e[0].getVariable().isProxy() && (e[0].getVariable().setDataType(d.Undefined), e.shift());
  }
  /**
   * Gets the statement block this variable was defined in
   * @returns {StatementBlock}
   */
  getDefinedInBlock() {
    return c(this, at);
  }
  /**
   * Sets the block this variable was defined in
   * @param {StatementBlock} block 
   */
  setDefinedInBlock(e) {
    y(this, at, e), e.isScopeBlock() || y(this, tt, e.getScope());
  }
  /**
   * Checks if this is the same variable as the provided variable info
   * @param {VariableInfo} vInfo 
   * @returns {Boolean}
   */
  isSameVariable(e) {
    return c(this, kt) === e.getName() && c(this, at).getId() === e.getDefinedInBlock().getId() && c(this, tt).hasChild(e.getScope() || e.getScope().hasChild(c(this, tt)));
  }
  /**
   * Gets the scope of the variable
   * @returns {ScopeBlock}
   */
  getScope() {
    return c(this, tt);
  }
  /**
   * Checks if the variable is a parameter
   * @returns {Boolean}
   */
  isParameter() {
    return c(this, en);
  }
  /**
   * Gets child scope blocks that contain usages of this variable
   * @returns {ScopeBlock[]}
   */
  getChildScopesWithUsages() {
    return c(this, zn);
  }
  /**
   * DROP Adds a ScopeBlock that is a child of the current scope that also uses the variable.
   * @param {ScopeBlock} scope 
   */
  addChildScopeWithUsages(e) {
    c(this, zn).push(e);
  }
  /**
   * Adds a variable from a nested scope e.g. a function
   * @param {VariableInfo} vInfo 
   */
  addChildScopeVariable(e) {
    c(this, Qn).push(e);
  }
  /**
   * Gets information about usages of the variable in nested scopes
   * @returns {VariableInfo[]}
   */
  getChildScopeVariables() {
    return c(this, Qn);
  }
  /**
   * Creates a JSON representation of the variable.
   * @returns {Object} A JSON (or JSON-friendly) representation of the Variable.
   */
  toJSON() {
    return {
      name: c(this, kt),
      definitionBlock: c(this, at).getId(),
      scopeBlock: c(this, tt).getId(),
      isParameter: c(this, en),
      usages: c(this, Pe).map((e) => e.toJSON())
      //.concat(childScopeUsages)
    };
  }
}
kt = new WeakMap(), Pe = new WeakMap(), at = new WeakMap(), tt = new WeakMap(), en = new WeakMap(), zn = new WeakMap(), Qn = new WeakMap(), Ae = new WeakSet(), /**
 * Checks of the usages are the same attribute in the same class
 * @param {VariableExpression | PropertyExpression} usageVar1 
 * @param {VariableExpression | PropertyExpression} usageVar2 
 * @returns {boolean}
 */
Mr = function(e, n) {
  return e.is(t.VariableName) || n.is(t.VariableName) ? !1 : e.getOwnerType().name === n.getOwnerType().name;
}, /**
 * 
 * @param {BranchBlock} lastUsageBlock 
 * @param {StatementBlock} targetBlock
 * @param {Set<BranchBlock>[]} openExhaustiveConditionals 
 * @param {Set<StatementBlock} usageBlocksAdded
 * @returns {Boolean} True if
 */
ci = function(e, n, s, o) {
  for (const u of s)
    if (u.has(e) && (u.delete(e), u.size === 0)) {
      if (e.getParentBlock().hasChild(n))
        return !0;
      o.add(e.getParentBlock());
      const h = e.getParentBlock();
      if (h.isBranchBlock()) {
        if (h.getBlockEntity() === t.ElseDefinition || h.getBlockEntity() === t.ExceptDefinition)
          s.push(/* @__PURE__ */ new Set([...h.getSiblingConditionalBranches()]));
        else if (h.isBranchOfExhaustiveConditional())
          return m(this, Ae, ci).call(this, h, n, s, o);
      }
    }
  return !1;
}, /**
 * 
 * @param {VariableInfo} varInfo 
 * @returns {Symptom[]}
 */
xr = function(e) {
  var o;
  const n = [], s = e.getUsages();
  if (s.length === 1) {
    const h = s[0].getVariable(), p = h.getParent() && h.getParent().is(t.MethodDefinitionStatement) && h.getParent().getClassVar().getTextValue() === h.getTextValue();
    s.length === 1 && h.isAssignedOrChanged() && !p && !m(o = e, Ae, Dr).call(o, h) && h.getDataType() !== d.Undefined && n.push(x.createStatementSymptom(b.UnusedVariable, [s[0].getVariable()], 0, 0));
  }
  return n;
}, /**
 * Helper method. Checks if this variable is a named argument in a function / method call.
 * @param {VariableExpression} usageVar 
 * @returns {Boolean}
 */
Dr = function(e) {
  if (e.getParent() === void 0)
    return !1;
  if (e.getParent().is(t.AssignmentStatement)) {
    const n = e.getParent().getParent();
    return n === void 0 ? !1 : n.isOneOf([a.FunctionCall, a.MethodCall]);
  }
  return !1;
}, /**
 * 
 * @param {VariableInfo} varInfo 
 * @returns {Symptom[]}
 */
Br = function(e) {
  const n = [], s = e.getUsages();
  let o;
  for (const u of s)
    if (!u.isPrecededByGlobal()) {
      o = u;
      break;
    }
  return o !== void 0 && s.length > 0 && o.getVariable().getDataType() === d.Undefined && (n.push(x.createStatementSymptom(b.UndefinedVariable, [o.getVariable()], 0, 0, {
    variable: e
  })), We(o.getVariable().getTextValue()).category === a.BuiltInFunctions && n.push(x.createStatementSymptom(
    b.VariableWithSameNameAsFunction,
    [o.getVariable()],
    0,
    0,
    {
      funcType: vn,
      varIsParameter: o.getVariable().isParameter()
    }
  ))), n;
};
var lt, ye, tn, Xn, bt, Ar, Ds;
class mr {
  /**
   * 
   * @param {VariableExpression} varExpression 
   * @param {StatementBlock} block 
   */
  constructor(i, e, n = !1) {
    I(this, bt);
    /** @type {VariableExpression} */
    I(this, lt);
    /** @type {StatementBlock} */
    I(this, ye);
    /** @type {Boolean} */
    I(this, tn, !1);
    /** @type {Boolean} */
    I(this, Xn);
    y(this, lt, i), y(this, Xn, n);
    const s = e.getStatements();
    e.isBranchBlock() && e.getBlockEntity() !== t.ForDefinition && e.getBlockEntity() !== t.WhileDefinition && s.length > 0 ? s[0].getDefinitionStatement().containsExpression(i) ? (y(this, ye, e.getParentBlock()), y(this, tn, !0)) : y(this, ye, e) : (y(this, ye, e), s.length > 0 && s[s.length - 1].isBlockStatement() && s[s.length - 1].containsExpression(i) && y(this, tn, !0));
  }
  getVariable() {
    return c(this, lt);
  }
  getBlock() {
    return c(this, ye);
  }
  isInConditionalDefinition() {
    return c(this, tn);
  }
  getBodyOfConditional() {
    const i = c(this, ye).getChildBlocks(), e = this.getVariable().getStartLineNumber();
    for (const n of i)
      if (n.isBranchBlock() && n.isBranchOfConditional() && n.getStatements()[0].getLineNumbers().has(e))
        return n;
    return c(this, ye);
  }
  /**
   * Checks if this usage is in the same block as another usage.
   * @param {UsageInfo} otherUsageInfo 
   * @returns {Boolean}
   */
  isInSameBlock(i) {
    return c(this, ye) === i.getBlock();
  }
  /**
   * Checks if this usage is in a block that is a parent of the block containing
   * other usage. If the usages are in the same block, this method will return false.
   * @param {UsageInfo} otherUsageInfo 
   * @returns {Boolean} 
   */
  isInParentBlock(i) {
    return !this.isInSameBlock(i) && c(this, ye).hasChild(i.getBlock());
  }
  /**
   * Checks if this usage is in an alternate branch to the other usage i.e. only one
   * of the two usages can execute.
   * @param {UsageInfo} otherUsageInfo 
   * @returns 
   */
  isInAlternateBranch(i) {
    if (c(this, ye).getBlockEntity() === t.ExceptDefinition && i.getBlock().getBlockEntity() === t.TryDefinition && c(this, ye).getParentBlock() === i.getBlock().getParentBlock())
      return !1;
    const e = this.isInConditionalDefinition(), n = i.isInConditionalDefinition();
    let s = c(this, ye);
    e && !n && (s = this.getBodyOfConditional());
    let o = m(this, bt, Ds).call(this, s);
    const u = m(this, bt, Ds).call(this, i.getBlock());
    return o !== void 0 && u !== void 0 ? m(this, bt, Ar).call(this, o, u, i.getBlock()) : o !== void 0 && u === void 0 || o === void 0 && u !== void 0 ? !1 : !s.hasChild(i.getBlock()) && !i.getBlock().hasChild(s);
  }
  isPrecededByGlobal() {
    return c(this, Xn);
  }
  /**
   * Gets a JSON representation of this UsageInfo.
   * @returns {Object} Returns a JSON (or JSON-friendly) object that represents this VariableUsage.
   */
  toJSON() {
    return {
      line: c(this, lt).getStartLineNumber(),
      docIndex: c(this, lt).getDocumentStartIndex(),
      type: c(this, lt).getDataType().name
    };
  }
}
lt = new WeakMap(), ye = new WeakMap(), tn = new WeakMap(), Xn = new WeakMap(), bt = new WeakSet(), Ar = function(i, e, n) {
  for (; i !== void 0 && e !== void 0 && i !== e; ) {
    const s = i.getSiblingConditionalBranches();
    for (let o of s)
      if (o.hasChild(n))
        return !0;
    i = m(this, bt, Ds).call(this, i.getParentBlock());
  }
  return !1;
}, /**
 * 
 * @param {StatementBlock | undefined} block 
 * @returns {BranchBlock | undefined}
 */
Ds = function(i) {
  return i !== void 0 && i.isBranchBlock() && i.isBranchOfConditional() ? i : i.getNearestParentOfAny([t.IfDefinition, t.ElifDefinition, t.ElseDefinition]);
};
var Zn, Yn, nn, nt, Pt;
class Wc {
  // Flag that indicates if all module identifiers were directly imported using *
  /**
   * Creates a new Module
   * @param {String} name The original name of the module.
   * @param {ExpressionEntity} entity The ExpressionEntity that describes the module
   * @param {String} alias The alias given to the module at import, if applicable.
   */
  constructor(i, e, n = i) {
    /** @type {String} */
    I(this, Zn);
    // The original module name e.g. math
    /** @type {ExpressionEntity} */
    I(this, Yn);
    // The expression entity of the module e.g. if it is a known module, it will be ExpressionEntity.MathModule
    /** @type {String} */
    I(this, nn);
    // The local name given to the module e.g. import math as m > alias = m
    /** @type {Map<String, Object>}*/
    I(this, nt);
    // An map of objects returned by the directImport function. The key is the identifier
    /** @type {boolean} */
    I(this, Pt);
    y(this, Zn, i), y(this, Yn, e), y(this, nn, n), y(this, nt, /* @__PURE__ */ new Map()), y(this, Pt, !1);
  }
  /**
   * Gets the module's original name.
   * @returns {String} The module name.
   */
  getName() {
    return c(this, Zn);
  }
  /**
   * Gets the module's ExpressionEntity.
   * @returns {ExpressionEntity} The ExpressionEntity that describes the module.
   */
  getEntity() {
    return c(this, Yn);
  }
  /**
   * Gets the module alias.
   * @returns {String} Gets the module alias, which may be the same as the name.
   */
  getAlias() {
    return c(this, nn);
  }
  /**
   * Sets the module alias.
   * @param {String} alias The new alias of the module.
   */
  setAlias(i) {
    y(this, nn, i);
  }
  /**
   * Adds a direct import.
   * @param {String} name The name of the direct import
   * @param {Object} directImport An object representing the import.
   */
  addDirectImport(i, e) {
    c(this, nt).set(i, e);
  }
  /**
   * Checks if the module has a direct import by the given name.
   * @param {String} name The name to look for
   * @returns {Boolean} True if the module has a matching direct import, false others.
   */
  hasDirectImport(i) {
    return c(this, nt).has(i);
  }
  /**
   * Gets the direct import with the given name
   * @param {String} name The name of the import.
   * @returns {Object | undefined} The object associated with the name, or undefined if the name does not exist.
   */
  getDirectImport(i) {
    return c(this, nt).get(i);
  }
  /**
   * Gets the direct imports for this module
   * @returns {Map<String, Object>}
   */
  getDirectImports() {
    return c(this, nt);
  }
  /**
   * Sets the importAll flag.
   */
  setImportAll() {
    y(this, Pt, !0);
  }
  /**
   * Checks if all identifiers of the module were imported.
   * @returns {Boolean} True if the import all asterisk was used, false otherwise.
   */
  didImportAll() {
    return c(this, Pt);
  }
  /**
   * Checks if the module has at least one direct import.
   * @returns {Boolean} True if the module has direct imports, false otherwise.
   */
  hasDirectImports() {
    return c(this, Pt) || c(this, nt).size > 0;
  }
}
Zn = new WeakMap(), Yn = new WeakMap(), nn = new WeakMap(), nt = new WeakMap(), Pt = new WeakMap();
const qc = (g, i) => ({
  entity: g,
  category: i
});
var sn, ct, ut;
class kr {
  constructor(i) {
    /** @type {String} */
    I(this, sn);
    /** @type {Number} */
    I(this, ct, 0);
    /** @type {Number} */
    I(this, ut, 0);
    y(this, sn, i);
    for (let e = 0; e < i.length; e++)
      i.charAt(e) === "	" ? Os(this, ut)._++ : Os(this, ct)._++;
  }
  /**
   * Gets the raw text of the indentation
   * @returns {String}
   */
  getText() {
    return c(this, sn);
  }
  /**
   * Gets the number of spaces in the indentation
   * @returns {Number}
   */
  getSpaceCount() {
    return c(this, ct);
  }
  /**
   * Gets the number of tabs in the indentation
   * @returns {Number}
   */
  getTabCount() {
    return c(this, ut);
  }
  /**
   * Checks whether this indentation is empty (length of 0)
   * @returns {Boolean}
   */
  noIndentation() {
    return c(this, sn).length === 0;
  }
  /**
   * Checks whether this indentation is made up of only spaces.
   * @returns {Boolean}
   */
  isAllSpaces() {
    return c(this, ct) > 0 && c(this, ut) === 0;
  }
  /**
   * Checks whether this indentation is made up of only tabs.
   * @returns {Boolean}
   */
  isAllTabs() {
    return c(this, ut) > 0 && c(this, ct) === 0;
  }
  /**
   * Checks whether this indentation mixes tabs and spaces
   * @returns {Boolean}
   */
  isMixed() {
    return c(this, ut) > 0 && c(this, ct) > 0;
  }
}
sn = new WeakMap(), ct = new WeakMap(), ut = new WeakMap();
var Le, dt, ie, _n, q, J, Lr, Vr, vr, Rr, ui, di, hi, Ur, fi, gi, pi, Rn;
class Pr extends ei {
  /**
   * Creates a new StatementBlock representing a block of Python code
   * @param {ExpressionEntity} blockEntity The entity that defines this block e.g. document, if, for
   * @param {Block} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Number} indentation The size of the indentation of the definition line, in spaces
   */
  constructor(e = t.DocumentDefinition, n = void 0, s = 0) {
    super();
    I(this, J);
    /** @type {ExpressionEntity} */
    I(this, Le);
    // The ExpressionEntity that represents the type of Block e.g. a function defintion
    /** @type {StatementBlock | undefined} */
    I(this, dt);
    // The parent of the current Block. This will either be another Block or undefined if this is the document root.
    /** @type {StatementBlock[]} */
    I(this, ie);
    // A list of child blocks. This list only includes immediate children. Nested children will be stored as the children of the relevant child node.
    /** @type {Number}  */
    I(this, _n);
    // The number of spaces of indentation of the first line in the Block (the definition line in most cases).
    /** @type {Statement[]} */
    I(this, q);
    y(this, Le, e), y(this, dt, n), y(this, ie, []), y(this, _n, s), y(this, q, []), this.addRules([
      m(this, J, Ur),
      m(this, J, Rr),
      m(this, J, vr),
      m(this, J, Lr)
    ]);
  }
  /**
   * Get the entity of this block.
   * @returns {ExpressionEntity} The ExpressionEntity that describes the type of this Block.
   */
  getBlockEntity() {
    return c(this, Le);
  }
  /**
   * Gets the ID of the Block, a unique String made up of the document starting line of the block and
   * the expression entity
   * @returns {String} A unique String identifier for this Block.
   */
  getId() {
    return `${c(this, Le) === t.DocumentDefinition ? 0 : c(this, q).length > 0 ? c(this, q)[0].getFirstLineNumber() : -1}-${c(this, Le).name}`;
  }
  /**
   * Gets the parent block of this Block.
   * @returns {StatementBlock | undefined} Either the Block that is the parent node of this one or undefined if this is the root Block representing the whole document.
   */
  getParentBlock() {
    return c(this, dt);
  }
  /**
   * Sets the parent block of the current block. Should only be used internally by the addChildBlock method.
   * @param {StatementBlock | undefined} block The new parent Block of this Block, or undefined if it is the root Block.
   */
  setParentBlock(e) {
    y(this, dt, e);
  }
  getRootBlock() {
    return c(this, dt) === void 0 ? this : c(this, dt).getRootBlock();
  }
  /**
   * Gets this Block's children.
   * @returns {StatementBlock[]} An array of containing all immediate children of this Block
   */
  getChildBlocks() {
    return c(this, ie);
  }
  /**
   * Gets all child blocks (including this block) that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {StatementBlock[]}
   */
  getChildBlocksOfKind(e) {
    let n = [];
    for (const s of c(this, ie))
      n = n.concat(s.getChildBlocksOfKind(e));
    return c(this, Le) === e && n.push(this), n;
  }
  /**
   * Adds a Block to this Block's children.
   * @param {StatementBlock} block The Block to add.
   */
  addChildBlock(e) {
    c(this, ie).push(e), e.setParentBlock(this);
  }
  /**
   * Checks if this block is the child of a particular type of parent block
   * @param {ExpressionEntity} entity 
   * @returns {Boolean} True if any parent block is the given entity
   */
  hasParentOfEntity(e) {
    return this.stepsToParentBlockOfEntity(e) >= 0;
  }
  /**
   * Gets the number of steps from this Block to the nearest parent with the given entity. If this block
   * has the given entity, the number of steps is 0. The immediate parent is 1 step. If no method has the
   * given entity, this method returns -1.
   * @param {ExpressionEntity} entity 
   * @returns {Number} The number of steps from this Block to the nearest parent with the given entity.
   */
  stepsToParentBlockOfEntity(e) {
    if (c(this, Le) === e) return 0;
    let n = this.getParentBlock(), s = 1;
    for (; n !== void 0; ) {
      if (n.getBlockEntity() === e) return s;
      n = n.getParentBlock(), s++;
    }
    return -1;
  }
  /**
   * Gets the nearest parent Block that has any of the given ExpressionEntities. This Block will be 
   * returned if it matches any of the entities. If no matching parent is found, the return is
   * undefined.
   * @param {ExpressionEntity[]} entities 
   * @returns {StatementBlock | undefined} The nearest matching parent Block or undefined if no match is found.
   */
  getNearestParentOfAny(e) {
    if (e.includes(c(this, Le))) return this;
    let n = this.getParentBlock();
    for (; n !== void 0; ) {
      if (e.includes(n.getBlockEntity())) return n;
      n = n.getParentBlock();
    }
  }
  /**
   * Finds the parent of this block that is an immediate child of parent block i.e. 
   * parent block and the returned block have the same parent
   * @param {StatementBlock | undefined} parentBlock 
   * @returns {StatementBlock | undefined}
   */
  getNearestParentChildOf(e) {
    if (this === e || !e.hasChild(this))
      return;
    let n = this.getParentBlock();
    for (; n !== void 0 && n.getParentBlock() !== e; )
      n = n.getParentBlock();
    return n;
  }
  /**
   * Gets the indentation of this block, determined by the definition line.
   * @returns {Number} The indentation of the block definition line (number of spaces)
   */
  getIndentation() {
    return c(this, _n);
  }
  /**
   * Gets the start line number of the block.
   * @returns {Number} The zero-based document line number of the Block definition.
   */
  getStartLine() {
    return c(this, Le) === t.DocumentDefinition ? 0 : c(this, q).length > 0 ? c(this, q)[0].getFirstLineNumber() : -1;
  }
  /**
   * Checks whether this is a scope block
   * @returns {Boolean}
   */
  isScopeBlock() {
    return !1;
  }
  /**
   * Checks whether this is a branch block
   * @returns {Boolean}
   */
  isBranchBlock() {
    return !1;
  }
  /**
   * Gets the scope of this block of code. NOTE: Classes are not currently supported.
   * @returns {ScopeBlock} If this block is a document or function defintion, return this 
   * block. Otherwise, search the parent block to find the nearest parent function or document. 
   * @throws Throws an error if no scope is found
   */
  getScope() {
    if (this.isScopeBlock())
      return this;
    let e = this.getParentBlock();
    for (; e !== void 0 && !e.isScopeBlock(); )
      e = e.getParentBlock();
    if (e !== void 0) return e;
    throw new Error("Could not find a scope block...block structure must be incorrect");
  }
  /**
   * Adds a statement to the block
   * @param {Statement} statement 
   */
  addStatement(e) {
    c(this, q).push(e);
    for (const n of e.getExpressions())
      n.setBlockId(this.getId()), n.setScopeId(this.getScope().getId());
    $.makeGraphConnections(c(this, q));
  }
  /**
   * Gets the last statement in the block
   * @returns {Statement}
   * @throws Throws an error if the block has no statements.
   */
  getLastStatement() {
    if (c(this, q).length === 0)
      throw new Error("No statements in the block. Could not get the last statement.");
    return c(this, q)[c(this, q).length - 1];
  }
  /**
   * Replaces the last statement in the block with the new statement
   * @param {Statement} statement 
   * @throws Throws an error if there are no statements in the block.
   */
  replaceLastStatement(e) {
    if (c(this, q).length === 0)
      throw new Error("No statements in block. Cannot replace last statement.");
    c(this, q)[c(this, q).length - 1] = e;
  }
  /**
   * When the last statement is a BlockStatement, adds the statement to the BlockStatement
   * @param {Statement} statement 
   * @throws Throws an error if the last statement is not a BlockStatement
   */
  updateLastStatement(e) {
    const n = this.getLastStatement();
    if (!n.isBlockStatement())
      throw new Error("The last statement is not a block statement.");
    for (const s of e.getExpressions())
      s.setBlockId(this.getId()), s.setScopeId(this.getScope().getId());
    n.addStatement(e);
  }
  /**
   * Gets the Statements in this block. Will not include statements in scoped children but will
   * include statements in child branches.
   * @returns {Statement[]}
   */
  getStatements() {
    return c(this, q);
  }
  /**
   * Tests if this block is the same as or a parent of childBlock.
   * @param {StatementBlock} childBlock A Block to check
   * @returns {Boolean} Returns true if this Block is the same as or a parent of childBlock
   */
  hasChild(e) {
    if (this === e) return !0;
    {
      let n = e.getParentBlock();
      for (; n !== void 0; ) {
        if (n === this)
          return !0;
        n = n.getParentBlock();
      }
      return !1;
    }
  }
  /**
   * Searches this block and its children for the given line number. If the line number is
   * in the block, the most specific block is returned. If the line number is not in the
   * block, return undefined.
   * @param {Number} lineNum The document line number to search for
   * @returns {StatementBlock | undefined}
   */
  getBlockContainingLineNumber(e) {
    if (c(this, q).length === 0 && console.log("stop"), !(c(this, q)[0].getFirstLineNumber() > e || this.getLastStatement().getLastLineNumber() < e)) {
      for (let n of c(this, ie))
        if (n.getBlockContainingLineNumber() !== void 0)
          return n;
      return this;
    }
  }
  /**
   * Gets the last statement to be executed in a block. This will either be a return,
   * a break, or the last statement if the block has no exit. Blocks with multiple 
   * branches will have multiple last statements, hence the return type of array.
   * @returns {Statement[]}
   */
  getLastExecutedStatements() {
    let e = [];
    for (let n of c(this, ie))
      n.isScopeBlock() || (e = e.concat(n.getLastExecutedStatements()));
    for (let n = 0; n < c(this, q).length; n++)
      if (!c(this, q)[n].isBlockStatement()) {
        if (n === c(this, q).length - 1)
          e.push(c(this, q)[n]);
        else if (!c(this, q)[n].isBlank() && c(this, q)[n].getFirstExpression().isOneOf([t.ReturnStatement, t.BreakKeyword])) {
          e.push(c(this, q)[n]);
          break;
        }
      }
    return e;
  }
  /**
   * Checks whether this block always returns a value.
   * @returns {Boolean} True if there is a return statement in every possible branch, false otherwise
   */
  alwaysReturnsAValue() {
    if (c(this, Le) === t.DocumentDefinition)
      return !1;
    if (c(this, ie).length === 0) {
      const e = this.getLastExecutedStatements();
      return e.length === 1 && !e[0].isBlank() && e[0].getFirstExpression().is(t.ReturnStatement);
    } else {
      if (this.hasTopLevelReturn())
        return !0;
      let e = !1, n = c(this, ie).length - 1;
      for (; n >= 0; ) {
        if (c(this, ie)[n].getBlockEntity() === t.ElseDefinition && c(this, ie)[n].alwaysReturnsAValue())
          e = !0;
        else if (e && c(this, ie)[n].getBlockEntity() === t.ElifDefinition && c(this, ie)[n].alwaysReturnsAValue())
          e = !0;
        else {
          if (e && c(this, ie)[n].getBlockEntity() === t.IfDefinition && c(this, ie)[n].alwaysReturnsAValue())
            return !0;
          e = !1;
        }
        n--;
      }
      return !1;
    }
  }
  /**
   * Checks if this block has a top level (not in a child block) return statement
   * @returns {Boolean}
   */
  hasTopLevelReturn() {
    for (let e of c(this, q))
      if (!e.isBlockStatement() && !e.isBlank() && e.getFirstExpression().is(t.ReturnStatement))
        return !0;
    return !1;
  }
  /**
   * 
   * @param {StatementBlock} block 
   */
  checkRules(e) {
    super.checkRules(e);
    for (const n of e.getChildBlocks())
      n.checkRules(n);
  }
  /**
   * Creates a JSON representation of this Block.
   * @returns {Object} A JSON representation of this Block, including the unique block ID, the start line and the array of child blocks.
   */
  toJSON() {
    return {
      id: this.getId(),
      startLine: this.getStartLine(),
      children: c(this, ie).map((e) => e.toJSON())
    };
  }
  /**
   * Creates an AST representation of this Block.
   * @returns {Object} A JSON representation of this Block's AST.
   */
  toTree() {
    return {
      id: this.getId(),
      statements: c(this, q).map((e) => e.toJSON()),
      children: c(this, ie).map((e) => e.toTree())
    };
  }
  /**
   * Factory method to create an appropriate block type based on the entity.
   * @param {ExpressionEntity} blockEntity Optional. DocumentDefinition by default.
   * @param {StatementBlock | undefined} parentBlock Optional. undefined by default.
   * @param {Number} indentation Optional. 0 by default.
   * @returns {StatementBlock} A new block
   * @throws Throws an error if an appropriate block type could not be found.
   */
  static blockFactory(e = t.DocumentDefinition, n = void 0, s = 0) {
    switch (e) {
      case t.DocumentDefinition:
      case t.FunctionDefinition:
      case t.ClassDefinition:
      case t.ListComprehension:
        return new Cs(e, n, s);
      default:
        return new Gr(e, n, s);
    }
  }
}
Le = new WeakMap(), dt = new WeakMap(), ie = new WeakMap(), _n = new WeakMap(), q = new WeakMap(), J = new WeakSet(), /**
 * Rule finder.
 * @param {StatementBlock} block 
 * @returns {Symptom[]}
 */
Lr = function(e) {
  var o;
  const n = [];
  let s = e.getStatements();
  s.length === 1 && s[0].isBlockStatement() && s[0].getFirstExpression().getBlockId() === e.getId() && (s = s[0].getStatements().slice(1));
  for (let u = 0; u < s.length; u++) {
    const h = s[u].getFirstExpression();
    if (h.is(t.WhileDefinitionStatement) && m(o = e, J, Vr).call(o, s[u])) {
      const p = s[u].getDefinitionStatement().getFirstExpression();
      if (n.push(x.createStatementSymptom(b.InfiniteLoop, [p], 0, 0)), u < s.length - 1) {
        const w = xs(s.slice(u + 1));
        n.push(x.createStatementSymptom(b.UnreachableInfiniteLoop, w, 0, w.length - 1, {
          infiniteLoopLine: h.getStartLineNumber()
        }));
      }
    }
    if (zt(h) && u < s.length - 1) {
      const p = s.slice(u + 1), w = xs(p), S = h.getFirstExpressionOf([t.ReturnKeyword, t.BreakKeyword, t.ExitFunction, t.SysExit, t.QuitFunction]);
      n.push(x.createStatementSymptom(b.UnreachableExit, w, 0, w.length - 1, {
        exitKeyword: S !== void 0 ? S.getTextValue() : "undefined"
      }));
    }
  }
  return n;
}, /**
 * Rule function helper. If the block is a while loop, checks if it is infinite
 * @param {BlockStatement} statement 
 * @returns {Boolean}
 */
Vr = function(e) {
  const o = e.getDefinitionStatement().getFirstExpression().getVariableExpressions();
  for (const u of e.getStatements()) {
    const h = u.getExpressions();
    for (const p of h) {
      if (zt(p))
        return !1;
      const w = p.getVariableExpressions().filter((F) => F.isAssignedOrChanged()), S = new Set(w.map((F) => F.getTextValue()));
      for (const F of o)
        if (S.has(F.getTextValue()))
          return !1;
    }
  }
  return !0;
}, /**
 * Rule finder.
 * @param {StatementBlock} block 
 * @returns {Symptom[]}
 */
vr = function(e) {
  const n = [];
  for (const s of e.getChildBlocks())
    if (s.getBlockEntity() === t.IfDefinition && s.isBranchOfExhaustiveConditional() && s.hasTopLevelExit()) {
      const o = s.getSiblingConditionalBranches();
      let u = !0, h = -1;
      for (const p of o) {
        if (!p.hasTopLevelExit()) {
          u = !1;
          break;
        }
        p.getBlockEntity() === t.ElseDefinition && (h = p.getStartLine());
      }
      if (u && h > 0) {
        const p = e.getStatements().filter((w) => w.getFirstLineNumber() > h);
        if (p.length > 0) {
          const w = xs(p);
          n.push(x.createStatementSymptom(b.UnreachableExhaustiveConditional, w, 0, w.length - 1));
        }
      }
    }
  return n;
}, /**
 * Rule finder.
 * @param {StatementBlock} block 
 * @returns {Symptom[]}
 */
Rr = function(e) {
  var u, h, p, w;
  const n = [];
  let s = e.getStatements();
  s.length === 1 && s[0].isBlockStatement() && (s = s[0].getStatements().slice(1));
  let o = [];
  for (let S = 0; S < s.length - 1; S++) {
    const F = s[S].getFirstExpression(), N = s[S + 1].getFirstExpression();
    if (F.is(t.IfDefinitionStatement) && N.is(t.IfDefinitionStatement) && !m(u = e, J, ui).call(u, s[S]) && !m(h = e, J, ui).call(h, s[S + 1]))
      o.length === 0 && o.push(s[S]), o.push(s[S + 1]);
    else if (o.length > 0) {
      const v = m(p = e, J, di).call(p, o);
      v !== void 0 && n.push(v), o = [];
    }
  }
  if (o.length > 0) {
    const S = m(w = e, J, di).call(w, o);
    S !== void 0 && n.push(S);
  }
  return n;
}, /**
 * Helper method. Checks if the statement contains a top level exit statement
 * @param {BlockStatement} statement 
 * @returns {Boolean}
 */
ui = function(e) {
  const n = e.getStatements().slice(1);
  for (const s of n)
    if (!s.isBlockStatement() && zt(s.getFirstExpression()))
      return !0;
  return !1;
}, /**
 * 
 * @param {Statement[]} sequence 
 * @returns {Symptom | undefined}
 */
di = function(e) {
  if (e.length === 0) return;
  const n = [];
  let s = [];
  for (let u = 0; u < e.length - 1; u++) {
    let h = e[u].getFirstExpression().getCondition();
    h = h.length === 1 && h[0].is(t.GroupStatement) ? h[0].getContents() : h;
    let p = e[u + 1].getFirstExpression().getCondition();
    p = p.length === 1 && p[0].is(t.GroupStatement) ? p[0].getContents() : p, m(this, J, hi).call(this, h, p) && m(this, J, hi).call(this, p, h) ? ((s.length === 0 || s[s.length - 1].docIndex !== e[u].getFirstExpression().getDocumentStartIndex()) && s.push({
      lineNum: e[u].getFirstExpression().getStartLineNumber(),
      docIndex: e[u].getFirstExpression().getDocumentStartIndex()
    }), s.push({
      lineNum: e[u + 1].getFirstExpression().getStartLineNumber(),
      docIndex: e[u + 1].getFirstExpression().getDocumentStartIndex()
    })) : s.length > 0 && (n.push(s), s = []);
  }
  s.length > 0 && (n.push(s), s = []);
  const o = xs(e);
  return x.createStatementSymptom(b.SequentialIfs, o, 0, o.length - 1, {
    branchMatches: n
  });
}, /**
 * Helper method. Compares the conditions of two if statements to check if they "match".
 * @param {ExpressionNode[]} condition1 
 * @param {ExpressionNode[]} condition2
 * @returns {Boolean} 
 */
hi = function(e, n) {
  if (e.length !== n.length)
    return !1;
  for (const s of e) {
    let o = !1;
    for (const u of n)
      if (s.matchesPattern(u)) {
        o = !0;
        break;
      }
    if (!o)
      return !1;
  }
  return !0;
}, /**
 * Rule finder.
 * @param {StatementBlock} block 
 * @returns {Symptom[]}
 */
Ur = function(e) {
  var u, h, p, w;
  const n = (S) => {
    try {
      const N = S.getFirstExpression().getCondition();
      if (N.length > 0)
        return N.map((v) => v.getTextValue()).join(" ");
    } catch {
      return "";
    }
  }, s = [];
  let o = e.getStatements();
  o.length === 1 && o[0].isBlockStatement() && o[0].getFirstExpression().getBlockId() === e.getId() && (o = o[0].getStatements().slice(1));
  for (let S = 0; S < o.length - 1; S++) {
    let F = {};
    const N = o[S].getFirstExpression(), v = o[S + 1].getFirstExpression();
    if (N.is(t.IfDefinitionStatement)) {
      const R = o[S].getStatements();
      if (v.is(t.ElseDefinitionStatement)) {
        const O = o[S + 1].getStatements();
        if (R.length === 2 && O.length === 2 && m(u = e, J, gi).call(u, R[1], O[1])) {
          const Ft = n(R[0]);
          F = {
            form: oi,
            condition: Ft
          };
        } else if (R.length === 2 && O.length === 2 && m(h = e, J, fi).call(h, R[1], O[1])) {
          const Ft = n(R[0]);
          F = {
            form: ai,
            variableAssigned: R[1].getFirstExpression().getTargetVariables()[0].getTextValue(),
            condition: Ft
          };
        }
      } else if (R.length === 2 && m(p = e, J, gi).call(p, R[1], o[S + 1])) {
        const O = n(R[0]);
        F = {
          form: oi,
          condition: O
        };
      } else if (R.length === 2 && m(w = e, J, fi).call(w, R[1], o[S + 1])) {
        const O = n(R[0]);
        F = {
          form: ai,
          variableAssigned: R[1].getFirstExpression().getTargetVariables()[0].getTextValue(),
          condition: O
        };
      }
      if (F.hasOwnProperty("form")) {
        const O = [...o[S].getExpressions(), ...o[S + 1].getExpressions()];
        s.push(x.createStatementSymptom(b.OneLineConditional, O, 0, O.length - 1, F));
      }
    }
  }
  return s;
}, /**
 * Helper method. Compares two statements to see if they have the form var = True and var = False
 * @param {Statement} firstEnd 
 * @param {Statement} secondEnd 
 * @returns {Boolean}
 */
fi = function(e, n) {
  const s = e.getFirstExpression(), o = n.getFirstExpression();
  if (s.getDataType() === d.Bool && o.getDataType() === d.Bool && s.is(t.AssignmentStatement) && o.is(t.AssignmentStatement)) {
    const u = m(this, J, Rn).call(this, s.getAssignedValues()), h = m(this, J, Rn).call(this, o.getAssignedValues()), p = s.getTargetVariables(), w = o.getTargetVariables();
    return u.length !== 1 || h.length !== 1 || p.length !== 1 || w.length !== 1 ? !1 : p[0].getTextValue() === w[0].getTextValue() && m(this, J, pi).call(this, u[0], h[0]);
  }
  return !1;
}, /**
 * Helper method. Compares two statements to see if they have the form return True and return False
 * @param {Statement} firstEnd 
 * @param {Statement} secondEnd 
 * @returns {Boolean}
 */
gi = function(e, n) {
  const s = e.getFirstExpression(), o = n.getFirstExpression();
  if (s.getDataType() === d.Bool && o.getDataType() === d.Bool && s.is(t.ReturnStatement) && o.is(t.ReturnStatement)) {
    const u = m(this, J, Rn).call(this, s.getReturnedValue()), h = m(this, J, Rn).call(this, o.getReturnedValue());
    return u.length !== 1 || h.length !== 1 ? !1 : m(this, J, pi).call(this, u[0], h[0]);
  }
  return !1;
}, /**
 * 
 * @param {ExpressionNode} firstValue 
 * @param {ExpressionNode} secondValue 
 * @returns {Boolean}
 */
pi = function(e, n) {
  return e.is(t.TrueType) && n.is(t.FalseType) || e.is(t.FalseType) && n.is(t.TrueType);
}, /**
 * 
 * @param {ExpressionNode[]} expressions 
 * @returns {ExpressionNode[]}
 */
Rn = function(e) {
  return e.length !== 1 ? e : e[0].is(t.GroupStatement) ? e[0].getContents() : e;
};
var Yi, _i;
class Cs extends Pr {
  // The number of the indentCharacter that make up one level of indentation
  /**
   * Creates a new StatementBlock representing a block of Python code
   * @param {ExpressionEntity} blockEntity The entity that defines this block e.g. document, if, for
   * @param {Block} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Number} indentation The size of the indentation of the definition line, in spaces
   */
  constructor(e = t.DocumentDefinition, n = void 0, s = 0) {
    if (e !== t.DocumentDefinition && e !== t.FunctionDefinition && e !== t.ClassDefinition && e !== t.ListComprehension)
      throw new Error(`${e.name} is not a scope block`);
    super(e, n, s);
    /** @type {Map<String, VariableInfo>} */
    l(this, "variableMap", /* @__PURE__ */ new Map());
    /** @type {Set<String>} */
    l(this, "globalVars", /* @__PURE__ */ new Set());
    /** @type {Map<String, ModuleInfo>} */
    l(this, "moduleMap", /* @__PURE__ */ new Map());
    /** @type {Map<String, UserDefinedFunctionExpression>} */
    l(this, "userDefinedFunctionMap", /* @__PURE__ */ new Map());
    /** @type {Map<String, UserDefinedFunctionCall[]>} */
    l(this, "unconnectedFunctionCalls", /* @__PURE__ */ new Map());
    /** @type {Map<String, DataType} */
    l(this, "userDefinedClassMap", /* @__PURE__ */ new Map());
    /** @type {Map<String, UserDefinedMethodCall[]} */
    l(this, "unconnectedMethodCalls", /* @__PURE__ */ new Map());
    /** @type {String} */
    I(this, Yi);
    /** @type {Number} */
    I(this, _i);
  }
  //#region - overrides
  /**
   * @override
   */
  isScopeBlock() {
    return !0;
  }
  /**
   * @override
   */
  getScope() {
    return this;
  }
  /**
   * @override
   * @inheritdoc 
   */
  addStatement(e) {
    super.addStatement(e), $.connectVariableUsages(e, this);
    const n = this.getParentBlock() !== void 0 && this.getBlockEntity() !== t.ListComprehension ? this.getParentBlock().getScope() : this;
    $.connectUserDefinedFunctions(e, n !== void 0 ? n : this), $.connectUserDefinedMethods(e, n !== void 0 ? n : this);
  }
  //#endregion - overrides
  //#region - extensions
  /**
   * Gets the map of variables found in this block (just this block, not nested blocks)
   * @returns {Map<String, VariableInfo>}
   */
  getVariableMap() {
    return this.variableMap;
  }
  /**
   * Gets the map of modules found in this block
   * @returns {Map<String, ModuleInfo>}
   */
  getModuleMap() {
    return this.moduleMap;
  }
  /**
   * Gets the BlockStatement that should be updated with a new statement or undefined
   * @param {Number} newStatementIndent The indentation of the new statement
   * @param {Number} newStatementStartLine
   * @returns {BlockStatement | undefined}
   */
  getStatementToUpdate(e, n) {
    if (this.getStatements().length > 0 && this.getLastStatement().isBlockStatement())
      return this.getLastStatement().getLastLineNumber() !== n ? this.getLastStatement().getBlockStatementForIndent(e) : this.getLastStatement().getLastBlockStatement();
  }
  /**
   * Adds a user defined function to the tracking
   * @param {UserDefinedFunctionExpression} functionExp 
   */
  addUserDefinedFunction(e) {
    if (e !== void 0) {
      const n = e.getTextValue();
      if (this.userDefinedFunctionMap.set(n, e), this.unconnectedFunctionCalls.has(n)) {
        for (let s of this.unconnectedFunctionCalls.get(n))
          e.addObserver(s);
        this.unconnectedFunctionCalls.delete(n);
      }
    }
  }
  /**
   * Adds a user defined class to the tracking
   * @param {DataType} classType 
   */
  addUserDefinedClass(e) {
    this.userDefinedClassMap.set(e.name, e);
  }
  /**
   * Gets the user defined functions defined in this block
   * @returns {Map<String, UserDefinedFunctionExpression>}
   */
  getUserDefinedFunctions() {
    return this.userDefinedFunctionMap;
  }
  /**
   * Gets the user defined classes defined in this block
   * @returns {Map<String, UserDefinedClassExpression}
   */
  getUserDefinedClasses() {
    return this.userDefinedClassMap;
  }
  /**
   * Get unconnected function calls
   * @returns {Map<String, UserDefinedFunctionCall[]>}
   */
  getUnconnectedFunctionCalls() {
    return this.unconnectedFunctionCalls;
  }
  /**
   * Get unconnected method calls
   * @returns {Map<String, UserDefinedMethodCall[]}
   */
  getUnconnectedMethodCalls() {
    return this.unconnectedMethodCalls;
  }
  /**
   * Adds a call of a function that is not yet tracked to the unconnected function map
   * @param {UserDefinedFunctionCall} functionCallExp 
   */
  addUnconnectedFunctionCall(e) {
    const n = e.getFunctionName();
    this.unconnectedFunctionCalls.has(n) || this.unconnectedFunctionCalls.set(n, []), this.unconnectedFunctionCalls.get(n).push(e);
  }
  /**
   * Adds a call of a method that is not yet tracked to the unconnected method map
   * @param {UserDefinedMethodCall} methodCallExp 
   */
  addUnconnectedMethodCall(e) {
    const n = e.getMethodName();
    this.unconnectedMethodCalls.has(n) || this.unconnectedMethodCalls.set(n, []), this.unconnectedMethodCalls.get(n).push(e);
  }
  /**
   * Adds tracking for a variable marked with the global keyword
   * @param {String} name 
   */
  addGlobalVar(e) {
    this.globalVars.add(e);
  }
  /**
   * Gets the names of any global variables
   * @returns {Set<String>}
   */
  getGlobalVars() {
    return this.globalVars;
  }
  /**
   * Find all function definitions in this scope block or a parent scope.
   * @returns {Map<String, UserDefinedFunctionExpression>}
   */
  findAllFunctions() {
    const e = new Map(this.getUserDefinedFunctions());
    let n = this.getParentBlock();
    for (; n !== void 0 && n.getScope() !== void 0; ) {
      n = n.getScope();
      const s = n.getUserDefinedFunctions();
      for (const [o, u] of s)
        e.set(o, u);
      n = n.getParentBlock();
    }
    return e;
  }
  /**
   * Find all imported modules in this scope block or a parent scope.
   * @returns {Map<String, ModuleInfo>}
   */
  findAllModules() {
    const e = new Map(this.getModuleMap());
    let n = this.getParentBlock();
    for (; n !== void 0 && n.getScope() !== void 0; ) {
      n = n.getScope();
      const s = n.getModuleMap();
      for (const [o, u] of s)
        e.set(o, u);
      n = n.getParentBlock();
    }
    return e;
  }
  //#endregion
}
Yi = new WeakMap(), _i = new WeakMap();
var rn;
class jc extends Cs {
  /**
   * Creates a new ClassBlock
   * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Statement} definitionStatement The definition line
   */
  constructor(e, n) {
    super(t.ClassDefinition, e, n.getIndentation());
    /** @type {DataType} */
    I(this, rn);
    y(this, rn, n.getFirstExpression().getDataType()), e.getScope().addUserDefinedClass(c(this, rn)), this.addStatement(n);
  }
  //#region - overrides
  //#endregion - overrides
  //#region - extensions
  /**
   * Gets the data type of the class
   * @returns {DataType}
   */
  getClassType() {
    return c(this, rn);
  }
  toTree() {
    const e = this.getStatements();
    return {
      id: this.getId(),
      definition: e.length > 0 ? e[0].toJSON() : {},
      statements: e.slice(1).map((n) => n.toJSON())
    };
  }
  //#endregion - extensions
}
rn = new WeakMap();
var er, es, Us, Er, ts, wi;
const Es = class Es extends Cs {
  /**
   * Creates a new FunctionBlock
   * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Statement} definitionStatement The definition line
   */
  constructor(e, n) {
    super(t.FunctionDefinition, e, n.getIndentation());
    I(this, Us);
    /** @type {ReturnStatement | undefined} */
    I(this, er);
    // Top level return 
    /** @type {String} */
    I(this, es);
    const s = n.getFirstExpression(), o = s.getEntity() === t.FunctionDefinitionStatement ? s.getFunctionNameExpression() : s.getMethodNameExpression();
    if (y(this, es, o !== void 0 ? o.getTextValue() : "not parsed"), e.getScope().addUserDefinedFunction(o), s.is(t.MethodDefinitionStatement) && s.getClassVar() && e.getBlockEntity() === t.ClassDefinition) {
      const h = e.getStatements()[0].getFirstExpression().getDataType();
      s.getClassVar().setDataType(h);
    }
    this.addStatement(n), this.addRules([m(this, Us, Er)]);
  }
  //#region - overrides
  //#endregion - overrides
  //#region - extensions
  /**
   * Gets the aggregated return type of the function
   * @returns {DataType}
   */
  getReturnType() {
    const n = this.getLastExecutedStatements().filter((s) => !s.isBlank() && s.getFirstExpression().is(t.ReturnStatement)).map((s) => s.getFirstExpression().getDataType());
    return this.alwaysReturnsAValue() || n.push(d.None), Kt(n);
  }
  /**
   * Gets the name of the function
   * @returns {String}
   */
  getFunctionName() {
    return c(this, es);
  }
  /**
   * Gets the UserDefinedFunctionExpression that contains information about returns
   * @returns {UserDefinedFunctionExpression | undefined}
   */
  getFunctionExpression() {
    const e = this.getStatements();
    if (e.length > 0 && e[0].getFirstExpression().is(t.FunctionDefinitionStatement))
      return e[0].getFirstExpression().getFunctionNameExpression();
  }
  toTree() {
    const e = this.getStatements();
    return {
      id: this.getId(),
      definition: e.length > 0 ? e[0].toJSON() : {},
      statements: e.slice(1).map((n) => n.toJSON())
    };
  }
  //#endregion - symptoms
};
er = new WeakMap(), es = new WeakMap(), Us = new WeakSet(), //#endregion - extensions
//#region - symptoms
/**
 * Rule finder. Checks a function scope block for print statements.
 * @param {FunctionBlock} block 
 * @returns {Symptom[]}
 */
Er = function(e) {
  var o;
  const n = [], s = e.getFunctionExpression();
  if (s !== void 0) {
    const u = e.getStatements(), h = m(o = Es, ts, wi).call(o, u);
    h.length > 0 && n.push(x.createStatementSymptom(b.FunctionPrints, [s], 0, 0, {
      printLines: h,
      functionReturns: s.getReturnType() !== d.None
    }));
  }
  return n;
}, ts = new WeakSet(), wi = function(e) {
  let n = [];
  for (let s = 0; s < e.length; s++)
    if (e[s].isBlockStatement())
      n = n.concat(m(this, ts, wi).call(this, e[s].getStatements()));
    else {
      const o = e[s].getFirstExpression();
      o.is(t.BuiltInFunctionCall) && o.getFunctionEntity() === t.PrintFunction ? n.push({
        lineNumber: o.getStartLineNumber(),
        followsReturn: s > 0 && e[s].getFirstExpression().is(t.ReturnStatement),
        precedesReturn: s < e.length - 1 && e[s + 1].getFirstExpression().is(t.ReturnStatement),
        isReturned: !1,
        isEndOfExitBranch: s === e.length - 1,
        blockId: o.getBlockId()
      }) : o.is(t.ReturnStatement) && o.getExpressionsOfKind(t.PrintFunction).length > 0 && n.push({
        lineNumber: o.getStartLineNumber(),
        followsReturn: !1,
        precedesReturn: !1,
        isReturned: !0,
        isEndOfExitBranch: s === e.length - 1,
        blockId: o.getBlockId()
      });
    }
  return n;
}, I(Es, ts);
let mi = Es;
class Hc extends Cs {
  /**
   * Creates a new ListComprehensionBlock
   * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {ListComprehensionExpression} listComprehensionExpression The definition line
   */
  constructor(i, e) {
    super(t.ListComprehension, i);
    const n = new Jt(e.getTextValue(), e.getStartLineNumber(), new kr(""), [e]);
    this.addStatement(n);
  }
  /**
   * @override
   */
  getId() {
    const i = this.getStatements();
    return `${super.getId()}-${i.length > 0 && !i[0].isBlank() ? i[0].getFirstExpression().getDocumentStartIndex() : "-1"}`;
  }
}
var K, He, Un, $r, Jr, Kr, Wr, qr, Si;
class Gr extends Pr {
  // Stores the ids of conditional branch siblings if this is a conditional branch
  /**
  * Creates a new BranchBlock representing a block of Python code
  * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
  * @param {Statement} definitionStatement The definition line
  */
  constructor(e, n) {
    const s = n.getFirstExpression().getBlockEntity();
    if (s === t.DocumentDefinition || s === t.FunctionDefinition || s === t.ClassDefinition || s === t.ListComprehension)
      throw new Error(`${s.name} is a scope block`);
    super(s, e, n.getIndentation());
    I(this, K);
    /** @type {Set<BranchBlock>} */
    l(this, "conditionalSiblings", /* @__PURE__ */ new Set());
    this.addStatement(n), this.addRules([m(this, K, Kr), m(this, K, qr), m(this, K, Jr), m(this, K, Wr)]);
  }
  //#region - overrides
  /**
   * @override
   */
  isScopeBlock() {
    return !1;
  }
  /**
   * Checks whether this is a branch block
   * @returns {Boolean}
   */
  isBranchBlock() {
    return !0;
  }
  /**
   * Gets the last statement to be executed in a block. This will either be a return,
   * a break, or the last statement if the block has no exit. Blocks with multiple 
   * branches will have multiple last statements, hence the return type of array.
   * @returns {Statement[]}
   */
  getLastExecutedStatements() {
    let e = [];
    for (let s of this.getChildBlocks())
      e = e.concat(s.getLastExecutedStatements());
    const n = m(this, K, He).call(this);
    for (let s = 0; s < n.length; s++)
      if (!n[s].isBlockStatement()) {
        if (s === n.length - 1 && this.isBranchOfExhaustiveConditional())
          e.push(n[s]);
        else if (!n[s].isBlank() && n[s].getFirstExpression().isOneOf([t.ReturnStatement, t.BreakKeyword])) {
          e.push(n[s]);
          break;
        }
      }
    return e;
  }
  /**
   * Checks if this block has a top level (not in a child block) return statement
   * @returns {Boolean}
   */
  hasTopLevelReturn() {
    const e = m(this, K, He).call(this);
    for (let n of e)
      if (!n.isBlockStatement() && !n.isBlank() && n.getFirstExpression().is(t.ReturnStatement))
        return !0;
    return !1;
  }
  /**
   * Checks if this block has a top level (not in a child block) exit statement
   * @returns {Boolean}
   */
  hasTopLevelExit() {
    const e = m(this, K, He).call(this);
    for (let n of e)
      if (!n.isBlockStatement() && !n.isBlank() && n.getExpressions().filter((s) => zt(s)).length > 0)
        return !0;
    return !1;
  }
  //#endregion - overrides
  //#region - custom
  /**
   * Checks if this block is a branch of a conditional statment.
   * @returns {Boolean}
   */
  isBranchOfConditional() {
    return this.getBlockEntity() === t.IfDefinition || this.getBlockEntity() === t.ElifDefinition || this.getBlockEntity() === t.ElseDefinition || this.getBlockEntity() === t.TryDefinition || this.getBlockEntity() === t.ExceptDefinition || this.getBlockEntity() === t.FinallyDefinition;
  }
  /**
   * Checks if this block is a branch of an exhaustive conditional--it includes an else branch
   * @returns {Boolean}
   */
  isBranchOfExhaustiveConditional() {
    if (this.getBlockEntity() === t.ElseDefinition)
      return m(this, K, Un).call(this, t.IfDefinition);
    if (this.getBlockEntity() === t.ElifDefinition) {
      let e = !1, n = !1;
      for (const s of this.conditionalSiblings)
        if (s.getBlockEntity() === t.IfDefinition ? e = !0 : s.getBlockEntity() === t.ElseDefinition && (n = !0), e && n)
          return !0;
    } else {
      if (this.getBlockEntity() === t.IfDefinition)
        return m(this, K, Un).call(this, t.ElseDefinition);
      if (this.getBlockEntity() === t.TryDefinition)
        return m(this, K, Un).call(this, t.ExceptDefinition);
      if (this.getBlockEntity() === t.ExceptDefinition)
        return m(this, K, Un).call(this, t.TryDefinition);
    }
    return !1;
  }
  /**
   * Gets a set containing this branch's siblings in a conditional. If it is not a conditional
   * branch, the set will be empty.
   * @returns {Set<BranchBlock>}
   */
  getSiblingConditionalBranches() {
    return this.conditionalSiblings;
  }
  /**
   * Connects a sibling conditional branch.
   * @param {BranchBlock} branch 
   * @throws Throws an error if either branch is not a conditional branch.
   */
  addSibling(e) {
    if (!this.isBranchOfConditional())
      throw new Error("Cannot add a sibling to a branch that is not a conditional");
    if (!e.isBranchOfConditional())
      throw new Error("Trying to add a non-conditional branch as a sibling.");
    this.conditionalSiblings.add(e);
  }
  //#endregion - symptoms
}
K = new WeakSet(), /**
 * Gets the statements inside the block statement
 * @returns {Statement[]}
 */
He = function() {
  const e = this.getStatements();
  return e.length, e[0].getStatements();
}, Un = function(e) {
  for (const n of this.conditionalSiblings)
    if (n.getBlockEntity() === e)
      return !0;
  return !1;
}, //#endregion - custom
//#region - symptoms
/**
 * Helper method to get the full text of the branch
 * @returns {string} The full text of the branch, with first line white space
 */
$r = function() {
  const e = m(this, K, He).call(this).flatMap((s) => s.getExpressions());
  return oe(e, !0);
}, /**
 * Rule finder.
 * @param {BranchBlock} branch 
 * @returns {Symptom[]}
 */
Jr = function(e) {
  return [];
}, /**
 * Rule finder.
 * @param {BranchBlock} branch 
 * @returns {Symptom[]}
 */
Kr = function(e) {
  var s;
  const n = [];
  if (e.getBlockEntity() === t.ForDefinition || e.getBlockEntity() === t.WhileDefinition && e.hasTopLevelExit())
    for (const o of m(s = e, K, He).call(s))
      !o.isBlockStatement() && !o.isBlank() && zt(o.getFirstExpression()) && n.push(x.createStatementSymptom(b.LoopReturn, [o.getFirstExpression()], 0, 0, {
        loopType: e.getBlockEntity().name,
        exitLevel: lc,
        exitTypes: [o.getFirstExpression().isOneOf([t.ReturnKeyword, t.ReturnStatement]) ? "return" : o.getFirstExpression().getTextValue()]
      }, e.getId()));
  else if (e.isBranchOfExhaustiveConditional() && e.getBlockEntity() === t.IfDefinition && e.hasTopLevelExit() && (e.getParentBlock() !== void 0 && e.getParentBlock().getBlockEntity() === t.ForDefinition || e.getParentBlock().getBlockEntity() === t.WhileDefinition)) {
    for (const p of e.getSiblingConditionalBranches())
      if (!p.hasTopLevelExit())
        return n;
    const u = e.getParentBlock().getStatements()[0].getExpressions(), h = u.flatMap((p) => p.getExpressionsOfKind(t.ReturnKeyword).concat(p.getExpressionsOfKind(t.BreakKeyword), p.getExpressionsOfKind(t.ExitFunction), p.getExpressionsOfKind(t.SysExit), p.getExpressionsOfKind(t.QuitFunction))).map((p) => p.getTextValue());
    n.push(x.createStatementSymptom(b.LoopReturn, [u[0]], 0, 0, {
      loopType: e.getParentBlock().getBlockEntity().name,
      exitLevel: cc,
      exitTypes: h
    }, e.getParentBlock().getId()));
  }
  return n;
}, /**
 * Rule finder.
 * @param {BranchBlock} branch 
 * @returns {Symptom[]}
 */
Wr = function(e) {
  var s, o;
  const n = [];
  if (e.getBlockEntity() === t.WhileDefinition) {
    const u = m(s = e, K, He).call(s)[0].getFirstExpression(), h = new Set(u.getVariableExpressions().map((F) => F.getTextValue())), p = m(o = e, K, He).call(o).slice(1), w = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
    for (const F of h)
      w.set(F, !1), S.set(F, []);
    for (const F of p)
      for (const N of F.getExpressions()) {
        const v = N.getExpressionsOfKind(t.ChangeStatement).flatMap((O) => O.getTargetVariables()).filter((O) => h.has(O.getTextValue())), R = N.getExpressionsOfKind(t.AssignmentStatement).flatMap((O) => O.getTargetVariables()).filter((O) => h.has(O.getTextValue()));
        for (const O of v)
          w.has(O.getTextValue()) && w.set(O.getTextValue(), !0);
        for (const O of R)
          S.has(O.getTextValue()) && S.get(O.getTextValue()).push(O);
      }
    for (const F of h)
      if (!w.get(F) && S.get(F).length > 0) {
        let N = [], v = !1;
        for (const R of S.get(F)) {
          const O = R.getParent().getAssignedValues();
          if (O.length === 1 && O[0].is(t.IntLiteral))
            N.push(R);
          else {
            v = !0;
            break;
          }
        }
        if (!v)
          for (const R of N)
            n.push(x.createStatementSymptom(b.WhileLoopVarAssignedIntLiteral, [R], 0, 0));
      }
  }
  return n;
}, /**
 * Rule finder.
 * @param {BranchBlock} branch 
 * @returns {Symptom[]}
 */
qr = function(e) {
  var s, o, u;
  const n = [];
  if (e.getBlockEntity() === t.WhileDefinition) {
    const h = m(s = e, K, He).call(s)[0].getFirstExpression(), p = new Set(h.getVariableExpressions());
    if (p.size > 0) {
      const w = m(o = e, K, Si).call(o, p), S = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map();
      for (const N of p) {
        const v = w.get(N);
        for (const R of v) {
          R === e && S.add(N);
          const O = R.getNearestParentOfAny([t.WhileDefinition, t.ForDefinition]);
          O !== void 0 && O !== e && e.hasChild(O) ? (F.has(N) || F.set(N, /* @__PURE__ */ new Set()), F.get(N).add(O)) : O !== void 0 && O === e && S.add(N);
        }
      }
      S.size === 0 && n.push(x.createStatementSymptom(
        b.LoopVarNotModified,
        [h],
        0,
        0,
        {
          unmodifiedVars: Array.from(p).map((N) => N.getTextValue()),
          loopText: m(u = e, K, $r).call(u)
        },
        e.getId()
      ));
      for (const [N, v] of F) {
        const R = x.createStatementSymptom(b.LoopVarModifiedInChildLoop, [N], 0, 0, {
          modifiedIn: [],
          varDataType: []
        }, e.getId());
        for (const O of v)
          R.getAdditionalInfo().modifiedIn.push({
            loopType: O.getBlockEntity().name,
            startLine: O.getStatements()[0].getFirstLineNumber(),
            varDataType: N.getDataType().name
          });
        n.push(R);
      }
    }
  }
  return n;
}, Si = function(e) {
  var o;
  const n = m(this, K, He).call(this).filter((u) => !u.isBlockStatement()), s = /* @__PURE__ */ new Map();
  for (const u of e)
    s.set(u, /* @__PURE__ */ new Set());
  for (const u of n) {
    const h = u.getExpressions();
    for (const p of h) {
      const w = p.getVariableExpressions().filter((F) => F.isAssignedOrChanged()), S = new Set(w.map((F) => F.getTextValue()));
      for (const F of e)
        S.has(F.getTextValue()) && s.get(F).add(this);
    }
  }
  for (const u of this.getChildBlocks().filter((h) => h.isBranchBlock())) {
    const h = m(o = u, K, Si).call(o, e);
    for (const p of e)
      h.get(p).size > 0 && s.get(p).add(...h.get(p));
  }
  return s;
};
var Y, Lt, ns, on, Ke, Fe, U, Vt, ss, Me, Ve, he, ht, tr, T, jr, Hr, Ii, zr, Nt, Je, be, Qr, Xr, bi, yi, Zr, Fi, Yr, _r, eo, to, no, so, io, ro, jt, oo, zc, ao, lo, co, uo, ho, fo, go, po, mo, wo;
class En {
  // Stores symptoms that can be detected while line processing is in progress
  constructor(i, e, n, {
    multilineCommentDelimiter: s = void 0,
    stringLiteralDelimiter: o = void 0,
    groupCharCounts: u = { "(": 0, "[": 0, "{": 0 },
    lastLineExpressions: h = [],
    startFrom: p = 0,
    moduleNames: w = [],
    varsWithTypeNames: S = [],
    // Used to disambiguate variables with the same name as a type expression e.g. list or str
    classDefinitionInProgress: F = !1
  } = {}) {
    I(this, T);
    /** @type {ExpressionNode[]} */
    I(this, Y, []);
    /** @type {ExpressionNode[]} */
    I(this, Lt, []);
    /** @type {Boolean} */
    I(this, ns, !1);
    /** @type {Boolean} */
    I(this, on, !1);
    // Indicates if there are non-space characters after a line separate (: or ;)
    /** @type {String} */
    I(this, Ke);
    /** @type {String} */
    I(this, Fe);
    /** @type {String} */
    I(this, U);
    /** @type {Number} */
    I(this, Vt);
    /** @type {Indent} */
    I(this, ss);
    /** @type {Number} */
    I(this, Me);
    /** @type {Number} */
    I(this, Ve);
    /** @type {Object} */
    I(this, he);
    // Keeps track of open brackets
    /** @type {Number} */
    I(this, ht);
    // The index of the last character in this statement. Will generally be the end of the text but may be earlier if the line contains a line separator such as : or ;
    /** @type {Symptom[]} */
    I(this, tr, []);
    y(this, U, i), y(this, ht, c(this, U).length - 1), y(this, Me, e), y(this, Ve, n), y(this, Ke, s), y(this, Fe, o), y(this, he, u), y(this, Vt, m(this, T, Hr).call(this, i)), y(this, ss, new kr(i.substring(0, c(this, Vt)))), y(this, Lt, h), c(this, U).length > 0 ? m(this, T, jr).call(this, p > 0 ? p : c(this, Vt), S, w, F) : m(this, T, Ii).call(this);
  }
  //#endregion - parsing operators
  //#endregion - parsing helper methods
  //#endregion - raw text parsing
  //#region - getters
  /**
   * Gets the raw text of the source code line
   * @returns {String} The raw text of the source line
   */
  getText() {
    return c(this, U);
  }
  /**
   * Gets the document line number of the source code
   * @returns {Number} The line number
   */
  getLineNumber() {
    return c(this, Me);
  }
  /**
   * Gets the expressions on the parsed line
   * @returns {ExpressionNode[]} The expressions array
   */
  getExpressions() {
    return c(this, Y);
  }
  /**
   * Gets the document start index of the line
   * @returns {Number} The index of the first character in the line in the document source text
   */
  getDocumentStartIndex() {
    return c(this, Ve);
  }
  /**
   * Gets the index of the last character processed in this line of source code. The index is
   * local to the line of text, not the document.
   * @returns {Number} The index of the last character processed in this line of source code
   */
  getLineEndIndex() {
    return c(this, ht);
  }
  /**
   * Returns the number of spaces at the start of the line.
   * @returns {Number}
   */
  getIndentation() {
    return c(this, Vt);
  }
  /**
   * Gets the indent object that describes the indentation
   * @returns {Indent}
   */
  getIndent() {
    return c(this, ss);
  }
  /**
   * Whether or not the statement continues on the next line of source code.
   * @returns {Boolean} True if the statement continues, false otherwise.
   */
  continuesOnNextLine() {
    return c(this, ns);
  }
  /**
   * Whether or not this statement is followed by a separate statement on the same
   * line of source code e.g. code after a : or ;
   * @returns {Boolean} True if the statement is followed by a separate statement, false otherwise
   */
  followedBySeparateStatement() {
    return c(this, on);
  }
  /**
   * Checks if there is an open multiline comment on this line.
   * @returns {Boolean} True if there is an unclosed multiline comment on this line
   */
  hasOpenComment() {
    return c(this, Ke) !== void 0;
  }
  /**
   * Gets the text value of the open multiline comment delimiter.
   * @returns {String} The multiline comment delimiter left open on this line. 
   * @throws Throws an error if there is no open multiline comment delimiter
   */
  getCommentDelimiter() {
    if (!this.hasOpenComment())
      throw new Error("This line of source code does not have an open multiline comment delimiter. Line", c(this, Me));
    return c(this, Ke);
  }
  /**
   * Checks if there is an open string literal on this line.
   * @returns {Boolean} True if there is an open string literal, false otherwise.
   */
  hasOpenString() {
    return c(this, Fe) !== void 0;
  }
  /**
   * Gets the text value of the open string literal delimiter.
   * @returns {String} The text value of the open string literal delimiter
   * @throws Throws an error if there is no open string literal delimiter on this line.
   */
  getStringLiteralDelimiter() {
    if (!this.hasOpenString())
      throw new Error("This line of source code does not have an open string literal delimiter. Line", c(this, Me));
    return c(this, Fe);
  }
  /**
   * Checks if there any unclosed brackets on the line
   * @returns {Boolean} True if there are any unclosed brackets, false otherwise.
   */
  hasOpenGroupChars() {
    return Object.entries(c(this, he)).filter(([i, e]) => e > 0).length > 0;
  }
  /**
   * Gets the open group information
   * @returns {Map<String, Number>} Each key is an open group character, (, [, or {. Each value is the number of unclosed open brackets.
   */
  getOpenGroupChars() {
    return c(this, he);
  }
  //#endregion - getters
}
Y = new WeakMap(), Lt = new WeakMap(), ns = new WeakMap(), on = new WeakMap(), Ke = new WeakMap(), Fe = new WeakMap(), U = new WeakMap(), Vt = new WeakMap(), ss = new WeakMap(), Me = new WeakMap(), Ve = new WeakMap(), he = new WeakMap(), ht = new WeakMap(), tr = new WeakMap(), T = new WeakSet(), //#region - raw text parsing
jr = function(i, e, n, s) {
  c(this, Ke) !== void 0 ? i = m(this, T, bi).call(this, c(this, Ke), 0) + 1 : c(this, Fe) !== void 0 && (i = m(this, T, yi).call(this, V.getCategory(c(this, Fe).charCodeAt(0)), 0) + 1);
  for (let o = i; o < c(this, U).length; o++) {
    const u = V.getCategory(c(this, U).charCodeAt(o));
    if (u === V.Hash)
      o = c(this, U).length - 1;
    else if (u.isQuote())
      o = m(this, T, Qr).call(this, u, o);
    else if (m(this, T, _r).call(this, u))
      o = m(this, T, eo).call(this, o, e, n, s);
    else if (m(this, T, lo).call(this, u, o, o === 0 || V.getCategory(c(this, U).charCodeAt(o - 1)) === V.Space))
      o = m(this, T, uo).call(this, o);
    else if (m(this, T, ho).call(this, u))
      o = m(this, T, fo).call(this, o);
    else if (m(this, T, go).call(this, u) && (m(this, T, po).call(this, o), o < c(this, ht) && m(this, T, mo).call(this, u))) {
      y(this, ht, o), m(this, T, zr).call(this);
      break;
    }
  }
  m(this, T, Ii).call(this);
}, //#region - parsing helper methods
/**
 * Counts the number of spaces at the start of the line.
 * @param {String} rawContent The raw text of the line
 * @returns {Number} The number of spaces at the start of the line.
 */
Hr = function(i) {
  return Math.max(i.search(/\S/), 0);
}, /**
 * Helper method to determine if the line continues onto the next line. Called at end of parseLine()
 * and updates #continuesOnNextLine if necessary.
 */
Ii = function() {
  (c(this, Ke) !== void 0 || c(this, Fe) !== void 0 || this.hasOpenGroupChars() || m(this, T, Je).call(this) && m(this, T, be).call(this).isOneOf([t.ContinuationLine, t.AddOperator, t.Comma])) && y(this, ns, !0);
}, zr = function() {
  const i = c(this, U).substring(c(this, ht) + 1).trim();
  i.length === 0 || V.getCategory(i.charCodeAt(0)) === V.Hash ? y(this, on, !1) : y(this, on, !0);
}, /**
 * Searches the expressions for the given entitiy.
 * @param {ExpressionEntity} entity 
 * @returns {Boolean} True if the expression is found, false otherwise
 */
Nt = function(i) {
  for (let e of c(this, Y))
    if (e.is(i))
      return !0;
  return !1;
}, /**
 * Convenience method to check that there are expressions in the expressions array.
 * @returns {Boolean} True if there is at least one expression in the expressions array, false otherwise.
 */
Je = function() {
  return c(this, Y).length > 0;
}, /**
 * Gets the last expression in the expressions array (the last expression parsed)
 * @returns {ExpressionNode} The last expression parsed
 * @throws Throws an error if the last expression is requested before any expressions have been parsed.
 */
be = function() {
  if (c(this, Y).length === 0)
    throw new Error("Attempted to get last expression when there are no expressions.");
  return c(this, Y)[c(this, Y).length - 1];
}, //#region - parsing block comments and string literals
/**
 * Creates expressions representing either a multiline comment or a string literal (including delimiters)
 * and returns the local index of the last character processed.
 * @param {Character} currentCharCategory The current Character
 * @param {Number} localIndex The index in the raw text of the current character.
 * @returns {Number} The index of the last character processed - either the end of the line or the closing quote
 */
Qr = function(i, e) {
  return m(this, T, Yr).call(this, i, e) ? m(this, T, Xr).call(this, e) : m(this, T, yi).call(this, i, e);
}, /**
 * Processes a block comment that starts on the line by searching for the end of the comment.
 * If the end is found on this line, returns the index of the last character in the closing
 * comment delimiter. If the end is not found, sets #multilineCommentDelimiter and returns the
 * index of the last character on the line.
 * @param {Number} localIndex The index in the raw text of the first quote symbol
 * @returns {Number} The index of the last character processed
 */
Xr = function(i) {
  const e = c(this, U).substring(i, i + 3);
  let n = i + 3;
  return m(this, T, bi).call(this, e, n);
}, /**
 * Searches for the end of a block comment. Clears the delimiter if found
 * @param {String} delimiter The comment delimiter
 * @param {Number} contentStart The index to start searching from 
 * @returns {Number} The index of the last quote in the delimiter, if found, or the last character on the line.
 */
bi = function(i, e) {
  if (e < c(this, U).length) {
    const s = m(this, T, Fi).call(this, c(this, U)).substring(e).indexOf(i);
    if (s > -1)
      return y(this, Ke, void 0), e + s + 2;
  }
  return y(this, Ke, i), c(this, U).length - 1;
}, /**
 * Processes a string literal that starts on this line. Continuations are handled separately.
 * @param {Character} quoteChar The quote Character
 * @param {Number} localIndex The index of the first quote in the raw text
 * @returns {Number} The index of the last character processed in the line text
 */
yi = function(i, e) {
  const n = m(this, T, Fi).call(this, c(this, U)), s = c(this, Fe) === void 0 ? m(this, T, Zr).call(this, i, e, n) : c(this, Fe);
  let o = c(this, Fe) === void 0 ? e + s.length : e, u = o + n.substring(o).indexOf(s);
  u === -1 || u < o ? (y(this, Fe, s), u = c(this, U).length) : y(this, Fe, void 0);
  const h = Math.min(c(this, U).length - 1, u + s.length - 1), p = c(this, U).substring(e, h + 1), w = new oa(
    p,
    c(this, Me),
    c(this, Ve) + e,
    e,
    c(this, Ve) + h
  );
  if (m(this, T, Je).call(this) && m(this, T, be).call(this).is(t.F)) {
    const S = [m(this, T, be).call(this), w], F = new iu(oe(S), S);
    c(this, Y)[c(this, Y).length - 1] = F;
  } else c(this, Y).push(w);
  return h;
}, /**
 * Gets the string value of the string delimiter
 * @param {Character} quoteChar The quote Character
 * @param {Number} localIndex The index of the first quote in the raw text
 * @param {String} cleanText 
 * @returns {String} The string delimiter (e.g. "\"" or "'''")
 */
Zr = function(i, e, n) {
  const s = i === V.SingleQuote ? "'" : '"';
  return e < n.length - 2 && V.getCategory(n.charCodeAt(e)) === i && V.getCategory(n.charCodeAt(e + 1)) === i && V.getCategory(n.charCodeAt(e + 2)) === i ? s + s + s : s;
}, /**
 * Removes escaped characters from a string. The escaping backslash and the character that follows
 * are replaced with spaces.
 * @param {String} text The original text
 * @returns {String} A copy of the string with escaped characters replaced with spaces.
 */
Fi = function(i) {
  return i.replace(/\\.{1}/g, "  ");
}, /**
 * Checks if a character at localIndex is the start of a block
 * @param {Character} quoteChar The Character of the first quote in a potential multiline quote delimeter
 * @param {Number} localIndex The index of the first quote in the raw text
 * @returns {Boolean} True if the quote is the start of a multiline comment, false otherwise.
 */
Yr = function(i, e) {
  return m(this, T, Je).call(this) && m(this, T, be).call(this).is(t.AssignmentOperator) || c(this, he)["("] > 0 || c(this, he)["["] > 0 || c(this, he)["{"] > 0 ? !1 : i.isQuote() && c(this, U).length > e + 2 && V.getCategory(c(this, U).charCodeAt(e)) === i && V.getCategory(c(this, U).charCodeAt(e + 1)) === i && V.getCategory(c(this, U).charCodeAt(e + 2)) === i;
}, //#endregion - parsing block comments and string literals
//#region - parsing keywords and identifiers
/**
 * Checks if an individual character is the start of an identifier or keyword - all such entities can only
 * start with an underscore or letter
 * @param {Character} characterCategory The Character to check
 * @returns {Boolean} True if the character is the start of an identifier or keyword
 */
_r = function(i) {
  return i === V.Underscore || i === V.Letter;
}, /**
 * Creates an expression representing the identifier and adds it to the expressions array. 
 * Variables, function calls, and other identifiers are tracked.
 * @param {Number} localIndex The identifier's index in the raw line text
 * @param {String[]} varsWithTypeNames An array containing existing variables with the same name as a type funct
 * @param {String[]} moduleNames An array containing the names of modules imported in the current scope
 * @param {boolean} classDefinitionInProgress Indicates if a class definition is in progress to enable method definitions to be distinguished from function definitions
 * @returns {Number} The local index of the last character processed
 */
eo = function(i, e, n, s) {
  let o = m(this, T, to).call(this, i), u = m(this, T, no).call(this, o, m(this, T, ao).call(this, i + o.length), e, n, s);
  const h = Gn(o, u, c(this, Me), c(this, Ve) + i, i);
  return m(this, T, Je).call(this) && (u.entity === t.InKeyword && m(this, T, be).call(this).is(t.NotOperator) || u.entity === t.NotOperator && m(this, T, be).call(this).is(t.IsKeyword)) ? (o = oe([m(this, T, be).call(this), h]), u = new Q(u.entity === t.InKeyword ? t.NotInKeyword : t.IsNotKeyword, a.ComparisonOperators), i = m(this, T, be).call(this).getDocumentStartIndex() - c(this, Ve), c(this, Y)[c(this, Y).length - 1] = Gn(o, u, c(this, Me), m(this, T, be).call(this).getDocumentStartIndex())) : c(this, Y).push(h), i + o.length - 1;
}, /**
 * Gets the string text of a possibile identifier or keyword. E.g., if the entity is a 
 * variable, this returns the variable name.
 * @param {Number} startIndex The local index in the raw content of the first character
 * @returns {String} The identifier name or keyword
 */
to = function(i) {
  let e = i;
  for (let n = i + 1; n < c(this, U).length; n++) {
    const s = V.getCategory(c(this, U).charCodeAt(n));
    if (s === V.Underscore || s === V.Letter || s === V.Digit)
      e = n;
    else
      break;
  }
  return c(this, U).substring(i, e + 1);
}, /**
 * Gets the ExpressionEntity and ExpressionCategory of the given identifier.
 * @param {String} identifier The text of the identifier e.g. def or a variable name
 * @param {String} nextCharacter The text of the next non-space character
 * @param {String[]} varsWithTypeNames
 * @param {String[]} moduleNames An array containing the names of modules imported in the current scope
 * @param {boolean} classDefinitionInProgress Indicates if a class definition is in progress to enable method definitions to be distinguished from function definitions
 * @returns {ExpressionInfo} An object containing the ExpressionEntity and ExpressionCategory of the given identifier.
 */
no = function(i, e, n, s, o) {
  const u = We(i);
  if (m(this, T, Je).call(this)) {
    const h = m(this, T, be).call(this);
    if (h.is(t.FunctionDefinition))
      return o ? new Q(t.MethodName, a.Identifiers) : new Q(t.FunctionName, a.Identifiers);
    if (h.is(t.ClassDefinition))
      return new Q(t.ClassName, a.Identifiers);
    if (h.is(t.FromKeyword) || m(this, T, Nt).call(this, t.ImportKeyword) && !m(this, T, Nt).call(this, t.FromKeyword))
      if (h.is(t.AsKeyword) && c(this, Y).length > 1) {
        const p = c(this, Y)[c(this, Y).length - 2];
        return new Q(p.getEntity(), p.getCategory());
      } else
        return u.entity === t.Unknown ? new Q(t.ModuleName, a.Identifiers) : u;
    else {
      if (m(this, T, jt).call(this) && e !== "(")
        return u.category === a.Unknown ? new Q(t.PropertyName, a.ModuleProperties) : u;
      if (m(this, T, Nt).call(this, t.FromKeyword) && m(this, T, Nt).call(this, t.ImportKeyword))
        return m(this, T, oo).call(this, i);
      if ((i === "sep" || i === "end") && !(h.is(t.Comma) && e === "="))
        return new Q(t.VariableName, a.Identifiers);
      if (u.entity !== t.VariableName && hc(i) && m(this, T, Nt).call(this, t.FunctionDefinition) && h.isOneOf([t.OpenParenthesis, t.Comma]))
        return new Q(t.VariableName, a.Identifiers);
    }
  } else if (i === "sep" || i === "end")
    return new Q(t.VariableName, a.Identifiers);
  return e === t.OpenParenthesis.name ? m(this, T, so).call(this, u, i) : (u.entity === t.R || u.entity === t.F) && e !== "'" && e !== '"' ? new Q(t.VariableName, a.Identifiers) : u.category === a.Types && n.includes(i) ? new Q(t.VariableName, a.Identifiers) : u.category === a.BuiltInModules && !s.includes(i) ? new Q(t.VariableName, a.Identifiers) : u.category === a.BuiltInFunctions && fr(i).entity !== t.Unknown && e !== "=" ? n.includes(i) ? new Q(t.VariableName, a.Identifiers) : fr(i) : u.category === a.OtherKeywords || u.category === a.BlockDefinitions || u.category === a.LogicalOperators || u.category === a.BuiltInExceptions || u.category === a.BuiltInModules || u.category === a.Types || u.category === a.SpecialVariables || u.category === a.ComparisonOperators ? u : u.category === a.Unknown && s.includes(i) ? new Q(t.ModuleName, a.Identifiers) : new Q(t.VariableName, a.Identifiers);
}, /**
 * Finds the appropriate function or method information for the given identifier
 * @param {Object} knownEntity An object with entity and category values. Returned by the lookup for the given identifier.
 * @param {String} identifier The identifier name.
 * @returns {Object} An object with entity and category values that best represent the identifier
 */
so = function(i, e) {
  return m(this, T, io).call(this, i) || m(this, T, ro).call(this, i) ? i : i.entity === t.Format ? m(this, T, jt).call(this) ? new Q(t.Format, a.BuiltInMethods) : new Q(t.FormatFunction, a.BuiltInFunctions) : m(this, T, jt).call(this) ? e === "exit" ? ii[e] : new Q(t.MethodName, a.OtherMethods) : ii.hasOwnProperty(e) ? ii[e] : i.category !== a.BuiltInFunctions && i.category !== a.BuiltInMethods && i.category !== a.Unknown && i.category !== a.ModuleFunctions ? i : new Q(t.FunctionName, a.Identifiers);
}, io = function(i) {
  return i.category === a.BuiltInFunctions && !m(this, T, jt).call(this);
}, ro = function(i) {
  return (i.category === a.BuiltInMethods || i.category === a.MagicMethods || i.category === a.ModuleFunctions) && m(this, T, jt).call(this);
}, /**
 * Helper method to find out if the current entity being processed is preceded by a dot, and therefore
 * might be method or property.
 * @returns {Boolean} True if the previous expression was a dot, false if there are no previous expressions or the last expression was not a dot.
 */
jt = function() {
  return m(this, T, Je).call(this) && m(this, T, be).call(this).is(t.Dot) || !m(this, T, Je).call(this) && c(this, Lt).length > 0 && c(this, Lt)[c(this, Lt).length - 1].is(t.Dot);
}, /**
 * Finds the appropriate ExpressionEntity for a named import - a function or variable directly imported
 * from a module.
 * @param {String} identifier The name of the named import
 * @returns {Object} An object containing the ExpressionEntity and ExpressionCategory that best describes the identifier
 */
oo = function(i) {
  if (c(this, Y).length >= 2 && c(this, Y)[1].is(a.BuiltInModules)) {
    let e = We(i);
    if (e.category === a.ModuleFunctions || e.category === a.ModuleProperties) {
      const n = gr.has(e.entity) ? gr.get(e.entity) : void 0;
      return n && m(this, T, Nt).call(this, n) ? e : new Q(t.NamedImport, a.Identifiers);
    }
    return e.entity === t.Unknown ? new Q(t.NamedImport, a.Identifiers) : e;
  }
  return new Q(t.NamedImport, a.Identifiers);
}, /**
 * DON'T NEED NOT FULLY IMPLEMENTED YET: DEPENDENT ON MODULE TRACKING
 * @param {String} aliasName The alias name
 * @param {ExpressionEntity} moduleEntity original entity of the imported module
 * @returns {Object} An object containing the ExpressionEntity and ExpressionCategory of the given identifier. Either a known module entity or the generic module entity.
 */
zc = function(i, e) {
  return new Q(t.ModuleName, a.Identifiers);
}, /**
 * Helper method to find the next character that is not a space
 * @param {Number} startIndex The local index to start searching from
 * @returns {String} The next non-space character (string, not index).
 */
ao = function(i) {
  for (; V.getCategory(c(this, U).charCodeAt(i)) === V.Space; )
    i++;
  return c(this, U).charAt(i);
}, //#endregion - parsing keywords and identifiers
//#region - parsing numbers
/**
 * Checks if a particular character is part of a number literal (at least one digit, up to one - and up to one .)
 * @param {Character} characterCategory The Character at the local index
 * @param {Number} index The index in the line text of the first character
 * @param {Boolean} lastCharIsSpace True if the previous raw character was a space (or start of line)
 * @returns {Boolean} True if the character at localIndex is the start of a number
 */
lo = function(i, e, n) {
  if (i === V.Minus && m(this, T, Je).call(this) && !n && m(this, T, be).call(this).isOneOf([a.Identifiers, t.CloseBrace, t.CloseParenthesis, t.CloseSquareBracket]))
    return !1;
  let s = 0, o = 0, u = 0, h = e;
  for (; h < c(this, U).length && (i === V.Digit || i === V.Decimal || i === V.Minus && h === e); )
    i === V.Digit ? s++ : i === V.Decimal ? o++ : u++, h++, i = V.getCategory(c(this, U).charCodeAt(h));
  return s >= 1 && o <= 1 && u <= 1;
}, /**
 * Gets a complete number literal including a leading - and any decimal places
 * @param {Number} localIndex The index of the first character in the number.
 * @returns {String} The number literal (a string).
 */
co = function(i) {
  let e = i;
  for (let n = i + 1; n < c(this, U).length; n++) {
    const s = V.getCategory(c(this, U).charCodeAt(n));
    if (s === V.Digit || s === V.Decimal)
      e = n;
    else break;
  }
  return c(this, U).substring(i, e + 1);
}, /**
 * Creates an expression representing the number and adds it to the expressions array.
 * @param {Number} localIndex The line index of the number literal.
 * @returns {Number} The index of the last character processed.
 */
uo = function(i) {
  const e = m(this, T, co).call(this, i);
  return c(this, Y).push(new Di(e, c(this, Me), c(this, Ve) + i, i)), i + e.length - 1;
}, //#endregion - parsing numbers
//#region - parsing operators
/**
 * Checks if a single character could be part of a multi character operator e.g. +=
 * @param {Character} category The Character to check
 * @returns {Boolean} True if the character *could* be the start of a multi character operator
 */
ho = function(i) {
  return i === V.Equals || i === V.Exclamation || i === V.Minus || i === V.Plus || i === V.Asterisk || i === V.ForwardSlash || i === V.Modulo || i === V.GreaterThan || i === V.LessThan;
}, /**
 * Identifies and adds an operator that might be multiple characters long e.g. + or ==
 * @param {Number} localIndex The local index of the first character in the operator
 * @returns {Number} The local index of the last character processed.
 */
fo = function(i) {
  let e = c(this, U).charAt(i), n = e, s = i;
  for (; (n === "!" || We(n).entity !== t.Unknown) && s < c(this, U).length; )
    e = n, s++, n += c(this, U).charAt(s);
  let o = We(e);
  return e === "*" && m(this, T, Je).call(this) && m(this, T, be).call(this).is(t.ImportKeyword) && (o = new Q(t.ImportAll, a.OtherKeywords)), c(this, Y).push(Gn(e, o, c(this, Me), c(this, Ve) + i, i)), i + e.length - 1;
}, /**
 * Checks if the current
 * @param {Character} currentCharCategory 
 * @returns {Boolean} True if the current character is not a space or tab, false otherwise.
 */
go = function(i) {
  return i !== V.Space && i !== V.Tab;
}, /**
 * Creates and adds an expression for a single character
 * @param {Number} localIndex The local index of the character
 */
po = function(i) {
  let e = c(this, U).charAt(i);
  m(this, T, wo).call(this, e);
  const n = We(e);
  c(this, Y).push(Gn(e, n, c(this, Me), c(this, Ve) + i, i));
}, /**
 * Checks if the given character is a line separator in Python, either ; or : outside of a group
 * @param {Character} currentCharCategory The character to check
 * @returns {Boolean} True if the character is a Python line separator, false otherwise.
 */
mo = function(i) {
  return i === V.Semicolon ? !0 : !!(i === V.Colon && m(this, T, Je).call(this) && c(this, Y)[0].isOneOf([t.IfDefinition, t.ElifDefinition, t.ElseDefinition, t.FunctionDefinition, t.ClassDefinition, t.ForDefinition, t.WhileDefinition, t.TryDefinition, t.ExceptDefinition]) && c(this, he)["{"] <= 0 && c(this, he)["("] <= 0 && c(this, he)["["] <= 0);
}, /**
 * Updates the counts of open group characters (open parentheses) depending on the provided 
 * text
 * @param {String} text The text to use for the update.
 */
wo = function(i) {
  c(this, he).hasOwnProperty(i) ? c(this, he)[i]++ : i === ")" ? c(this, he)["("]-- : i === "]" ? c(this, he)["["]-- : i === "}" && c(this, he)["{"]--;
};
var M, Ni, So, Io, bo, yo, Fo, No, To, Co, Ti, Oo, Mo, xo, Do, ae, Bo, Ao, ko, Ci, Po, Oi, Lo, Mi, Vo, vo, Ro, Uo, xi, Eo;
const $n = class $n {
  /**
   * Takes an expressions array and combines individual expressions into multipart expressions
   * where appropriate.
   * @param {ExpressionNode[]} expressions An array of expression nodes
   * @returns {ExpressionNode[]} The converted expressions
   */
  static createTree(i) {
    let e = i.filter((n) => !n.is(t.ContinuationLine));
    return m(this, M, yo).call(this, i) ? [m(this, M, No).call(this, i)] : (e.length > 1 && (e = m(this, M, ko).call(this, e), e = m(this, M, Ao).call(this, e), e = m(this, M, Co).call(this, e), e = m(this, M, Bo).call(this, e), e = m(this, M, Po).call(this, e), e = m(this, M, Lo).call(this, e), e = m(this, M, Vo).call(this, e), e = m(this, M, vo).call(this, e), e = m(this, M, Ro).call(this, e), e = m(this, M, Eo).call(this, e)), e);
  }
  /**
   * Splits an array into separate arrays of expressions using the split entity. A split
   * will only be made if the split entity is not in brackets
   * @param {ExpressionNode[]} expressions 
   * @param {ExpressionEntity} splitEntity 
   * @returns {ExpressionNode[]}
   */
  static split(i, e) {
    return this.splitMultiple(i, [e]);
  }
  /**
   * Splits an array into separate arrays of expressions using the split entity. A split
   * will only be made if the split entity is not in brackets
   * @param {ExpressionNode[]} expressions 
   * @param {ExpressionEntity[]} splitEntities 
   * @returns {ExpressionNode[]}
   */
  static splitMultiple(i, e) {
    const n = [];
    let s = 0, o = 0, u = 0, h = 0;
    for (let p = 0; p < i.length; p++)
      if (p === h && i[p].isOneOf(e))
        h++;
      else if (i[p].isOneOf(e) && p > h || p === i.length - 1) {
        if (s === 0 && o === 0 && u === 0 || p === i.length - 1 && (s === 1 && i[p].is(t.CloseParenthesis) || u === 1 && i[p].is(t.CloseSquareBracket) || o === 1 && i[p].is(t.CloseBrace))) {
          const w = i.slice(h, i[p].isOneOf(e) ? p : p + 1);
          n.push(w), h = p + 1;
        }
      } else i[p].is(t.OpenParenthesis) ? s++ : i[p].is(t.CloseParenthesis) ? s-- : i[p].is(t.OpenBrace) ? o++ : i[p].is(t.CloseBrace) ? o-- : i[p].is(t.OpenSquareBracket) ? u++ : i[p].is(t.CloseSquareBracket) && u--;
    return n;
  }
  /**
   * Connects variables in a new statement to variables created in the block so far
   * @param {Statement} statement The statement being processed
   * @param {StatementBlock} block The block containing the statement
   */
  static connectVariableUsages(i, e) {
    var w, S;
    const n = e.getScope();
    !i.isBlank() && i.getFirstExpression().is(t.ImportStatement) && m(w = $n, M, bo).call(w, i, n), i.isBlockStatement() && !i.isBlank() && i.getFirstExpression().is(t.ForDefinitionStatement) && (e = m(S = $n, M, Io).call(S, e));
    const s = i.getVariableUsages(), o = n.getVariableMap(), u = n.findAllModules(), h = new Map(Array.from(u.values()).flatMap((F) => Array.from(F.getDirectImports()))), p = !i.isBlank() && i.getFirstExpression().is(t.GlobalStatement);
    for (let [F, N] of s) {
      if (e.getBlockEntity() === t.ClassDefinition && N.length > 0 && (N[0].getParent() === void 0 || N[0].getParent().is(t.AssignmentStatement) && N[0].getParent().getTargetVariables().includes(N[0]))) {
        m(this, M, Ni).call(this, N[0], e.getClassType(), i, e, n);
        continue;
      }
      let v = N.map((R) => new mr(R, e, p));
      if (p && n.addGlobalVar(F), o.has(F)) {
        o.get(F).addUsages(v);
        for (const R of v) {
          const O = R.getVariable().getParent();
          if (O && O.is(t.PropertyCallExpression) && O.getObject().getDataType().isCustom) {
            const Ft = O.getObject().getDataType();
            m(this, M, Ni).call(this, O.getProperty(), Ft, i, e, n);
          }
        }
      } else {
        if (u.has(F))
          v[0].getVariable().setDataType(Ys(u.get(F).getEntity()));
        else if (h.has(F)) {
          const O = Wt.has(h.get(F).entity) ? Wt.get(h.get(F).entity) : d.Unknown;
          v[0].getVariable().setDataType(O);
        }
        const R = new pr(v[0], i, e);
        if (v.length > 1 && R.addUsages(v.slice(1)), m(this, M, So).call(this, e, F, R.getUsages()[0].getVariable()) && this.checkIfVariableExistsInParent(R, e))
          continue;
        o.set(F, R);
      }
    }
  }
  /**
   * Connects statements for graph generation
   * @param {Statement[]} statements 
   */
  static makeGraphConnections(i) {
    const e = i.filter((s) => !s.isBlank());
    if (e.length <= 1)
      return;
    const n = e[e.length - 1];
    if (!n.isBlank()) {
      let s = e[e.length - 2], o;
      if (s.isBlockStatement()) {
        o = s.getDefinitionStatement().getExpressions();
        let u = s.getFirstExpression(), h = n.getFirstExpression();
        if (!(u.isOneOf([t.IfDefinitionStatement, t.ElifDefinitionStatement]) && h.isOneOf([t.ElseDefinitionStatement, t.ElifDefinitionStatement]))) {
          const p = s.getExpressions();
          p[p.length - 1].addConnection(n.getFirstExpression());
          const w = s.getStatements();
          w.length > 1 && w[w.length - 1].isBlockStatement() && w[w.length - 1].getDefinitionStatement().getFirstExpression().addConnection(n.getFirstExpression());
        }
        if (!h.isOneOf([t.ElifDefinitionStatement, t.ElseDefinitionStatement, t.ReturnStatement]) && u.isOneOf([t.IfDefinitionStatement, t.ElifDefinitionStatement, t.ElseDefinitionStatement])) {
          const p = [];
          for (let w = e.length - 2; w >= 0; w--) {
            const S = e[w].getFirstExpression();
            if (S.isOneOf([t.IfDefinitionStatement, t.ElifDefinitionStatement, t.ElseDefinitionStatement]) && (p.push(e[w]), S.is(t.IfDefinitionStatement)))
              break;
          }
          for (const w of p)
            try {
              const S = w.getStatements();
              S[S.length - 1].getFirstExpression().addConnection(n.getFirstExpression());
            } catch (S) {
              console.log(S), console.log(w);
            }
        }
      } else
        o = s.getExpressions();
      o[0].addConnection(n.getFirstExpression());
    }
  }
  /**
   * Connects calls to user defined functions to the function expression that stores
   * return type information
   * @param {Statement} statement
   * @param {ScopeBlock} scopeBlock
   */
  static connectUserDefinedFunctions(i, e) {
    const n = e.findAllFunctions(), s = e.getRootBlock().getUserDefinedClasses(), o = i.getExpressions();
    for (let u of o) {
      const h = u.getExpressionsOfKind(t.UserDefinedFunctionCall);
      for (let p of h) {
        const w = p.getFunctionName();
        if (n.has(w)) {
          const S = n.get(w);
          p.setDataType(S.getDataType()), S.addObserver(p);
        } else if (s.has(w)) {
          const S = s.get(w);
          p.setDataType(S);
        } else
          e.addUnconnectedFunctionCall(p);
      }
    }
  }
  /**
   * Connects calls to user defined methods to the method expression that stores
   * return type information
   * @param {Statement} statement
   * @param {ScopeBlock} scopeBlock
   */
  static connectUserDefinedMethods(i, e) {
    const n = e.findAllFunctions();
    for (const [o, u] of n.entries())
      u.is(t.MethodName) || n.delete(o);
    const s = i.getExpressions();
    for (let o of s) {
      const u = o.getExpressionsOfKind(t.UserDefinedMethodCall);
      for (let h of u) {
        const p = h.getMethodName();
        if (n.has(p)) {
          const w = n.get(p);
          h.setDataType(w.getDataType()), w.addObserver(h);
        } else
          e.addUnconnectedMethodCall(h);
      }
    }
  }
  /**
   * Checks if the variable already exists in a higher scope and if so, adds usages to higher scope
   * @param {VariableInfo} vInfo 
   * @param {StatementBlock}
   * @returns {Boolean} True if the variable does exit in a parent, false otherwise
   */
  static checkIfVariableExistsInParent(i, e) {
    let n = e.getScope().getParentBlock();
    const s = i.getUsages()[0].getVariable();
    if (!i.isParameter() && (e.getScope().getGlobalVars().has(i.getName()) || !s.isAssignedOrChanged() || s.isObjectOfMethodCall() || s.isSubscripted()))
      for (; n !== void 0 && n.getScope() !== void 0; ) {
        const o = n.getScope().getVariableMap();
        if (o.has(i.getName())) {
          const u = o.get(i.getName());
          i.setDefinedInBlock(u.getDefinedInBlock());
          const h = u.getUsages();
          return i.insertUsages(h), !0;
        }
        n = n.getScope().getParentBlock();
      }
    return !1;
  }
  /**
   * 
   * @param {ExpressionNode[]} expressions 
   * @returns {ExpressionNode[][]}
   */
  static checkForListComp(i) {
    const e = this.split(i, t.Comma);
    let n = [];
    for (let s = 0; s < e.length; s++)
      s < e.length - 1 && Hn(e[s], t.ForDefinition) && Hn(e[s + 1], t.InKeyword) ? (n.push(e[s].concat(i[n.length + e[s].length], e[s + 1])), s++) : n.push(e[s]);
    return n;
  }
  //#endregion
};
M = new WeakSet(), Ni = function(i, e, n, s, o) {
  const u = i.getTextValue(), h = new mr(i, s);
  if (e.attributes.has(u))
    e.attributes.get(u).addUsage(h);
  else {
    const p = o.getNearestParentOfAny([t.ClassDefinition]), w = new pr(h, n, s);
    p && p.getClassType().name === e.name ? e.attributes.set(u, w) : console.log("add to unconnected attribute tracking");
  }
}, So = function(i, e, n) {
  let s = i.getScope();
  for (; s !== void 0; ) {
    if (s.getVariableMap().has(e)) {
      if (!n.isAssignedOrChanged() || n.isObjectOfMethodCall() || n.isSubscripted())
        return !0;
    } else if (s.getGlobalVars().has(e))
      return !0;
    s = s.getParentBlock(), s !== void 0 && (s = s.getScope());
  }
  return !1;
}, Io = function(i) {
  const e = i.getChildBlocks();
  return e.length > 0 && e[e.length - 1].getBlockEntity() === t.ForDefinition && (i = e[e.length - 1]), i;
}, bo = function(i, e) {
  const n = i.getRawExpressions(), s = e.getModuleMap(), o = [];
  let u = !1;
  for (const h of n)
    if (h.isOneOf([t.ModuleName, a.BuiltInModules]))
      if (u)
        for (const p of o)
          p.getEntity() === h.getEntity() && p.setAlias(h.getTextValue());
      else {
        const p = new Wc(h.getTextValue(), h.getEntity());
        o.push(p);
      }
    else if (h.is(t.AsKeyword))
      u = h;
    else if (h.isOneOf([a.ModuleProperties, t.NamedImport]))
      for (const p of o)
        p.addDirectImport(h.getTextValue(), qc(h.getEntity(), h.getCategory()));
    else if (h.is(t.ImportAll))
      for (const p of o)
        p.setImportAll();
  for (const h of o)
    s.set(h.getAlias(), h);
}, yo = function(i) {
  return i.length > 0 && i[0].is(a.BlockDefinitions) && !m(this, M, Fo).call(this, i);
}, Fo = function(i) {
  if (i.length === 1) return !1;
  const e = Qt(i, t.AssignmentOperator);
  return e === -1 ? !1 : e === 1 ? !0 : !!(i[1].is(t.Comma) && e % 2 === 1);
}, No = function(i) {
  const e = oe(i);
  switch (i[0].getEntity()) {
    case t.FunctionDefinition:
      return m(this, M, To).call(this, e, i);
    case t.IfDefinition:
      return new et(e, i, t.IfDefinitionStatement);
    case t.ElifDefinition:
      return new et(e, i, t.ElifDefinitionStatement);
    case t.WhileDefinition:
      return new et(e, i, t.WhileDefinitionStatement);
    case t.ForDefinition:
      return new et(e, i, t.ForDefinitionStatement);
    case t.ExceptDefinition:
      return new et(e, i, t.ExceptDefinitionStatement);
    case t.ElseDefinition:
      return new et(e, i, t.ElseDefinitionStatement);
    case t.TryDefinition:
      return new et(e, i, t.TryDefinitionStatement);
    case t.FinallyDefinition:
      return new et(e, i, t.FinallyDefinitionStatement);
    case t.ClassDefinition:
      return new Zc(e, i);
    case t.LambdaDefinition:
      return new pu(e, i);
    case t.WithKeyword:
      return new et(e, i, t.WithDefinitionStatement);
    default:
      return i;
  }
}, To = function(i, e) {
  return e.length < 2 || e[1].is(t.FunctionName) ? new Qc(i, e) : new Xc(i, e);
}, Co = function(i) {
  let e = m(this, M, Ti).call(this, i);
  if (e.sort((o, u) => o[0] - u[0]), e.length === 0)
    return i;
  let n = i, s;
  for (; e.length > 0 && (s === void 0 || e.length !== s.length); ) {
    const o = n[e[0][0]];
    o.is(t.OpenParenthesis) ? n = m(this, M, Oo).call(this, e[0], n) : o.is(t.OpenSquareBracket) ? n = m(this, M, Mo).call(this, e[0], n) : n = m(this, M, Do).call(this, e[0], n), s = e, e = m(this, M, Ti).call(this, n), e.sort((u, h) => u[0] - h[0]);
  }
  return n;
}, Ti = function(i) {
  let e = [], n = [];
  for (let s = 0; s < i.length; s++)
    if (Cr(i[s].getEntity()))
      n.push({
        openEntity: i[s].getEntity(),
        closeEntity: pc(i[s].getEntity()),
        openIndex: s,
        closeIndex: -1
      });
    else if (gc(i[s].getEntity())) {
      let o = n.length - 1;
      for (; o >= 0; ) {
        if (n[o].closeEntity === i[s].getEntity()) {
          n[o].closeIndex = s, e.push([n[o].openIndex, n[o].closeIndex]), n.splice(o, 1);
          break;
        }
        o--;
      }
    }
  return e;
}, Oo = function(i, e) {
  const n = i[0], s = i[1];
  if (n > 0 && e[n - 1].isOneOf([a.BuiltInFunctions, t.FunctionName])) {
    const u = e[n - 1].is(a.BuiltInFunctions) ? t.BuiltInFunctionCall : t.UserDefinedFunctionCall, h = m(this, M, ae).call(this, e.slice(n - 1, s + 1), u);
    return e.slice(0, n - 1).concat([h], e.slice(s + 1));
  } else if (n > 2 && e[n - 1].isOneOf([a.BuiltInMethods, t.MethodName, a.MagicMethods, a.ModuleFunctions]) && e[n - 2].is(t.Dot)) {
    const u = e[n - 1].is(t.MethodName) ? t.UserDefinedMethodCall : t.BuiltInMethodCall, h = m(this, M, ae).call(this, e.slice(n - 3, s + 1), u);
    return e.slice(0, n - 3).concat([h], e.slice(s + 1));
  } else if (n > 0 && e[n - 1].is(t.ExceptionName)) {
    const u = m(this, M, ae).call(this, e.slice(n - 1, s + 1), t.ExceptionCall);
    return e.slice(0, n - 1).concat([u], e.slice(s + 1));
  } else if (s > n + 1) {
    const u = e.slice(n + 1, s), h = this.split(u, t.Comma);
    if (h.length > 1) {
      const p = m(this, M, ae).call(this, e.slice(n, s + 1), t.TupleDefinition, h);
      return e.slice(0, n).concat([p], e.slice(s + 1));
    }
  }
  const o = m(this, M, ae).call(this, e.slice(n, s + 1), t.GroupStatement);
  return e.slice(0, n).concat([o], e.slice(s + 1));
}, Mo = function(i, e) {
  const n = i[0], s = i[1];
  let o = [], u = [];
  if (s > n + 1 && (u = e.slice(n + 1, s), o = this.checkForListComp(u)), n === 0 || o.length === 0 || e[n - 1].isOneOf([
    a.ComparisonOperators,
    a.LogicalOperators,
    a.MathsOperators,
    t.OpenParenthesis,
    t.OpenSquareBracket,
    t.OpenBrace,
    t.Comma,
    t.Colon,
    t.Separator,
    a.OtherKeywords,
    t.ContinuationLine
  ])) {
    const h = m(this, M, ae).call(this, e.slice(n, s + 1), t.ListDefinition, o);
    return e.slice(0, n).concat([h], e.slice(s + 1));
  } else {
    let h = this.split(u, t.Colon);
    const p = m(this, M, xo).call(this, h, e, n, s) ? m(this, M, ae).call(this, e.slice(n, s + 1), t.Slice, h) : m(this, M, ae).call(this, e.slice(n, s + 1), t.IndexKey);
    let w = n - 1;
    for (; w >= 0 && !e[w].isOneOf([
      a.Identifiers,
      a.BuiltInFunctions,
      a.CompoundTypes,
      t.BuiltInFunctionCall,
      t.BuiltInMethodCall,
      t.UserDefinedFunctionCall,
      t.UserDefinedMethodCall,
      t.SubscriptedExpression,
      t.PropertyCallExpression
    ]); )
      w--;
    w = Math.max(w, 0);
    const S = m(this, M, ae).call(this, [...e.slice(w, n), p], t.SubscriptedExpression);
    return e.slice(0, w).concat([S], e.slice(s + 1));
  }
}, xo = function(i, e, n, s) {
  return i.length > 1 || e[n + 1].is(t.Colon) || e[s - 1].is(t.Colon);
}, Do = function(i, e) {
  const n = i[0], s = i[1];
  let o;
  if (s === n + 1)
    o = m(this, M, ae).call(this, e.slice(n, s + 1), t.DictDefinition);
  else {
    const u = e.slice(n + 1, s), h = this.split(u, t.Comma), p = [];
    for (let w of h) {
      const S = this.split(w, t.Colon);
      S.length === 2 && p.push(S);
    }
    p.length === h.length ? o = m(this, M, ae).call(this, e.slice(n, s + 1), t.DictDefinition, p) : o = m(this, M, ae).call(this, e.slice(n, s + 1), t.SetDefinition, h);
  }
  return e.slice(0, n).concat([o], e.slice(s + 1));
}, ae = function(i, e, n = []) {
  const s = oe(i);
  switch (e) {
    case t.BuiltInFunctionCall:
      return new Yc(s, i);
    case t.UserDefinedFunctionCall:
      return new _c(s, i);
    case t.BuiltInMethodCall:
      return new tu(s, i);
    case t.UserDefinedMethodCall:
      return new nu(s, i);
    case t.ExceptionCall:
      return new eu(s, i);
    case t.TupleDefinition:
    case t.ListDefinition:
    case t.SetDefinition:
    case t.DictDefinition:
      return new ti(s, i, e, n);
    case t.GroupStatement:
      return new fu(s, i);
    case t.Slice:
      return new Ga(s, i, n);
    case t.IndexKey:
      return new $a(s, i);
    case t.SubscriptedExpression:
      return new vs(s, i);
    case t.CalculatedExpression:
      return new Rs(s, i);
    case t.ComparisonExpression:
      return new Ui(s, i);
    case t.IteratorExpression:
      return new ar(s, i);
    case t.BooleanExpression:
      return new Gi(s, i);
    default:
      throw new Error("Unknown multipart expression type");
  }
}, Bo = function(i) {
  let e = m(this, M, Ci).call(this, i);
  for (; e > -1; ) {
    const n = e > 0 && !i[e - 1].isOneOf([a.MathsOperators, a.LogicalOperators, a.ComparisonOperators, a.OtherKeywords]) ? e - 1 : e, s = m(this, M, ae).call(this, i.slice(n, e + 2), t.CalculatedExpression);
    i = i.slice(0, n).concat([s], i.slice(e + 2)), e = m(this, M, Ci).call(this, i);
  }
  return i;
}, Ao = function(i) {
  if (i.length < 3) return i;
  let e = 1;
  for (; e < i.length - 1; )
    if (i[e].is(t.Dot) && i[e + 1].isOneOf([t.PropertyName, a.ModuleProperties])) {
      const n = oe([i[e - 1], i[e], i[e + 1]]), s = new wr(
        n,
        [i[e - 1], i[e], i[e + 1]],
        t.PropertyCallExpression,
        a.MultipartValue
      );
      i = i.slice(0, e - 1).concat([s], i.slice(e + 2)), e--;
    } else if (i[e].is(t.Dot) && !i[e + 1].isOneOf([t.PropertyName, a.ModuleProperties]) && (e + 2 >= i.length || !i[e + 2].isOneOf([t.OpenParenthesis]))) {
      const n = oe([i[e - 1], i[e], i[e + 1]]), s = new wr(
        n,
        [i[e - 1], i[e], i[e + 1]],
        t.PropertyCallExpression,
        a.MultipartValue
      );
      i = i.slice(0, e - 1).concat([s], i.slice(e + 2)), e--;
    } else
      e++;
  return i;
}, ko = function(i) {
  if (i.length < 2) return i;
  let e = 0;
  for (; e < i.length - 1; )
    if (i[e].isStringLiteral() && i[e + 1].isStringLiteral()) {
      const n = oe([i[e], i[e + 1]]), s = new ru(n, [i[e], i[e + 1]]);
      i = i.slice(0, e).concat([s], i.slice(e + 2));
    } else
      e++;
  return i;
}, Ci = function(i) {
  const e = [], n = [];
  for (let s = 0; s < i.length; s++) {
    if (i[s].is(t.ExponentOperator))
      return s;
    i[s].isOneOf([t.MultiplyOperator, t.DivideOperator, t.IntDivideOperator, t.ModulusOperator]) ? e.push(s) : i[s].isOneOf([t.AddOperator, t.SubtractOperator]) && n.push(s);
  }
  return e.length > 0 ? e[0] : n.length > 0 ? n[0] : -1;
}, Po = function(i) {
  let e = m(this, M, Oi).call(this, i);
  for (; e > 0; ) {
    let n = e - 1, s;
    i[e].is(t.InKeyword) && n > 1 && i[n - 1].is(t.Comma) ? (n = n - 2, s = m(this, M, ae).call(this, i.slice(n, e + 2), t.IteratorExpression)) : i[e].is(t.InKeyword) && e === 1 && e + 1 < i.length && i[e + 1].is(t.BuiltInFunctionCall) && i[e + 1].getFunctionExpression().isOneOf([t.EnumerateFunction]) ? (n = 0, s = m(this, M, ae).call(this, i.slice(n, e + 2), t.IteratorExpression)) : s = m(this, M, ae).call(this, i.slice(n, e + 2), t.ComparisonExpression), i = i.slice(0, n).concat([s], i.slice(e + 2)), e = m(this, M, Oi).call(this, i);
  }
  return i;
}, Oi = function(i) {
  for (let e = 0; e < i.length; e++)
    if (i[e].is(a.ComparisonOperators))
      return e;
  return -1;
}, Lo = function(i) {
  let e = m(this, M, Mi).call(this, i);
  for (; e > -1; ) {
    const s = (i[e].is(t.NotOperator) ? 2 : 3) === 2 ? e : e - 1, o = s >= 0 ? i.slice(s, e + 2) : i.slice(e, e + 2), u = m(this, M, ae).call(this, o, t.BooleanExpression);
    i = s >= 0 ? i.slice(0, s).concat([u], i.slice(e + 2)) : i.slice(0, e).concat([u], i.slice(e + 2)), e = m(this, M, Mi).call(this, i);
  }
  return i;
}, Mi = function(i) {
  let e = [], n = [];
  for (let s = 0; s < i.length; s++) {
    if (i[s].is(t.NotOperator))
      return s;
    i[s].is(t.AndOperator) ? e.push(s) : i[s].is(t.OrOperator) && n.push(s);
  }
  return e.length > 0 ? e[0] : n.length > 0 ? n[0] : -1;
}, Vo = function(i) {
  let e = Qt(i, t.IfDefinition);
  for (; e > -1 && i.length >= e + 3 && i[e + 2].is(t.ElseDefinition); ) {
    const s = i.slice(e - 1, e + 4), o = oe(s), u = new Ki(o, s);
    i = i.slice(0, e - 1).concat([u], i.slice(e + 4)), e = Qt(i, t.IfDefinition);
  }
  return i;
}, vo = function(i) {
  for (; i.length >= 3 && i[1].is(t.ForDefinition); ) {
    const e = i.length >= 5 && i[3].is(t.IfDefinition), n = i.slice(0, e ? 5 : 3), s = oe(n);
    n[2].is(t.ComparisonExpression) && (n[2] = i[2].convertToIterator()), i = [new qi(s, n)].concat(i.slice(e ? 5 : 3));
  }
  return i;
}, Ro = function(i) {
  let e = m(this, M, xi).call(this, i);
  for (; e > -1; ) {
    const n = m(this, M, Uo).call(this, i, e - 1), s = i.slice(n), o = oe(s), u = i[e].is(t.AssignmentOperator) ? new Ca(o, s) : new hu(o, s);
    i = i.slice(0, n).concat([u]), e = m(this, M, xi).call(this, i);
  }
  return i;
}, Uo = function(i, e) {
  let n = -1;
  for (let s = e; s >= 0 && !(i[s].isChangeOperator() || i[s].isOneOf([a.OtherKeywords, a.BlockDefinitions])); s--)
    n = s;
  return Math.max(n, 0);
}, xi = function(i) {
  for (let e = i.length - 1; e > 0; e--)
    if (i[e].isChangeOperator())
      return e;
  return -1;
}, Eo = function(i) {
  return i.length > 0 && (i[0].is(t.ReturnKeyword) ? i = [new mu(oe(i), i)] : i[0].isOneOf([t.ImportKeyword, t.FromKeyword]) ? i = [new wu(oe(i), i)] : i[0].isOneOf([t.GlobalKeyword, t.AssertKeyword, t.RaiseKeyword]) && (i = [new Su(oe(i), i)])), i;
}, I($n, M);
let $ = $n;
function Gn(g, i, e, n, s, o = n + g.length, u = e) {
  switch (i.entity) {
    case t.ExceptionName:
      return new uu(g, i.entity, i.category, e, n, s);
    case t.VariableName:
      return new Tn(g, i.entity, i.category, e, n, s);
    case t.FunctionName:
      return new ba(g, i.entity, i.category, e, n, s);
    case t.MethodName:
      return new ou(g, i.entity, i.category, e, n, s);
    case t.ClassName:
      return new du(g, i.entity, i.category, e, n, s);
    case t.PropertyName:
      return new ri(g, i.entity, i.category, e, n, s);
    case t.ModuleName:
      return new Sr(g, i.entity, i.category, e, n, s);
    case t.StringLiteral:
      return new oa(g, e, n, s, o, u);
    case t.TrueType:
    case t.FalseType:
    case t.NoneType:
      return new lu(g, i.entity, i.category, e, n, s);
    case t.ListDefinition:
    case t.TupleDefinition:
    case t.SetDefinition:
    case t.DictDefinition:
      return new ti(g, [], i.entity, []);
    case t.IndexKey:
      return new $a(g, []);
    case t.Slice:
      return new Ga(g, [], []);
    case t.NamedImport:
      return new ri(g, i.entity, i.category, e, n, s);
  }
  switch (i.category) {
    case a.BuiltInFunctions:
    case a.BuiltInMethods:
    case a.ModuleFunctions:
    case a.MagicMethods:
      return new au(g, i.entity, i.category, e, n, s);
    case a.BuiltInModules:
      return new Sr(g, i.entity, i.category, e, n, s);
    case a.Types:
      return new cu(g, i.entity, i.category, e, n, s);
    case a.SpecialVariables:
      return new Tn(g, i.entity, i.category, e, n, s);
    case a.ModuleProperties:
      return new ri(g, i.entity, i.category, e, n, s);
    case a.LogicalOperators:
    case a.MathsOperators:
    case a.ComparisonOperators:
    case a.OtherKeywords:
    case a.BlockDefinitions:
    case a.Other:
    case a.TypeHint:
      return new ha(g, i.entity, i.category, e, n, s);
    default:
      return new _e(g, i.entity, i.category, e, n, s, d.Unknown);
  }
}
var ft, gt, pt, st, an, ln, cn, is, un, me, vt, dn, rs;
class _e extends Ps {
  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine The index of the first character of the expression in the raw text of the line (based on line breaks)
   * @param {DataType} dataType Optional. The data type of the individual expression. NotParsed by default.
   * @param {Number} documentEndIndex Optional. The index of the last characters of the expression in the raw text of the document
   * @param {Number} endLineNumber Optional. The zero-indexed document line number that the expression ends on. Same as start line by default.
   */
  constructor(e, n, s, o, u, h, p = d.NotParsed, w = u + e.length - 1, S = o) {
    super();
    /** @type {String} */
    I(this, ft);
    // The raw text of the node
    /** @type {ExpressionEntity} */
    I(this, gt);
    /** @type {ExpressionCategory} */
    I(this, pt);
    /** @type {ExpressionNode} */
    I(this, st);
    /** @type {Number} */
    I(this, an);
    // The zero-indexed document line number that the expression starts on
    /** @type {Number} */
    I(this, ln);
    // The zero-indexed document line number that the expression ends on
    /** @type {Number} */
    I(this, cn);
    // The index of the first character in #textValue in the raw document string
    /** @type {Number} */
    I(this, is);
    /** @type {Number} */
    I(this, un);
    // The index of the last character (inclusive) in #textValue in the raw document string
    /** @type {DataType} */
    I(this, me);
    // The DataType of this individual expression
    /** @type {String} */
    I(this, vt, "unknown");
    /** @type {String} */
    I(this, dn, "unknown");
    /** @type {ExpressionNode[]} */
    I(this, rs, []);
    if (w < u)
      throw new Error("Could not create expression: end index cannot be less than start index");
    y(this, ft, e), y(this, gt, n), y(this, pt, s), y(this, an, o), y(this, cn, u), y(this, is, h), y(this, un, w), y(this, ln, S), y(this, me, p);
  }
  /**
   * Gets the text value of the expression.
   * @returns {String} The text value of the expression.
   */
  getTextValue() {
    return c(this, ft);
  }
  /**
   * Sets the text value of the expression.
   * @param {String} value The new text value of the expression.
   */
  setTextValue(e) {
    y(this, ft, e);
  }
  /**
   * Gets the expression entity
   * @returns {ExpressionEntity}
   */
  getEntity() {
    return c(this, gt);
  }
  setEntity(e) {
    y(this, gt, e);
  }
  /**
   * Gets the expression category
   * @returns {ExpressionCategory}
   */
  getCategory() {
    return c(this, pt);
  }
  setCategory(e) {
    y(this, pt, e);
  }
  /**
   * Gets the zero-indexed line number that the expression starts
   * on.
   * @returns {Number} The starting document line number.
   */
  getStartLineNumber() {
    return c(this, an);
  }
  /**
   * Gets the zero-indexed line number that the expression ends on
   * @returns {Number} The ending line number
   */
  getEndLineNumber() {
    return c(this, ln);
  }
  /**
   * Sets the document end line number
   * @param {Number} num The new line number
   */
  setEndLineNumber(e) {
    y(this, ln, e);
  }
  /**
   * Gets the index of the first character of the expression in the
   * raw text of the document.
   * @returns {Number} The index of the first character of the expression
   */
  getDocumentStartIndex() {
    return c(this, cn);
  }
  getIndexOnLine() {
    return c(this, is);
  }
  /**
   * Gets the index of the last character of the expression in the
   * raw text of the document.
   * @returns {Number} The index of the last character of the expression
   */
  getDocumentEndIndex() {
    return c(this, un);
  }
  /**
   * Sets the document end index
   * @param {Number} index The new index of the expression's end in the raw text of the document
   */
  setDocumentEndIndex(e) {
    y(this, un, e);
  }
  /**
   * Gets the data type of the expression.
   * @returns {DataType} The data type of the expression.
   */
  getDataType() {
    return c(this, me);
  }
  /**
   * Updates the data type of the expression. Triggers an
   * update to any observers.
   * @param {DataType} dataType The new data type.
   */
  setDataType(e) {
    e !== c(this, me) && (y(this, me, e), super.sendUpdate(e));
  }
  setBlockId(e) {
    c(this, vt) !== e && y(this, vt, e);
  }
  getBlockId() {
    return c(this, vt) === "unknown" && c(this, st) !== void 0 ? c(this, st).getBlockId() : c(this, vt);
  }
  setScopeId(e) {
    c(this, dn) === "unknown" && y(this, dn, e);
  }
  getScopeId() {
    return c(this, dn);
  }
  /**
   * @override
   * @param {DataType} dataType 
   */
  typeUpdateReceived(e) {
    this.setDataType(e);
  }
  /**
   * The expression node that contains this node, if applicable.
   * @returns {ExpressionNode | undefined}
   */
  getParent() {
    return c(this, st);
  }
  /**
   * Sets the parent of this node
   * @param {ExpressionNode} node 
   */
  setParent(e) {
    y(this, st, e);
  }
  /**
   * Checks if this expression is part of an expression or statement of the given entity or category
   * @param {ExpressionEntity | ExpressionCategory} kind 
   */
  hasParentOfKind(e) {
    let n = this.getParent();
    for (; n !== void 0; )
      if (n.is(e))
        return !0;
    return !1;
  }
  /**
   * Gets the context of use... the parent expression
   * @returns {string}
   */
  getContextOfUse() {
    return c(this, st) === void 0 ? "none" : c(this, st).getEntity().name;
  }
  /**
   * Checks if this expression is or contains the given expression
   * @param {ExpressionNode} expression 
   */
  contains(e) {
    return this === e;
  }
  /**
   * Checks if this node matches the given characteristic. This should be 
   * implemented by each ExpressionNode child class.
   * @param {ExpressionEntity | ExpressionCategory | String} characteristic 
   * @returns {Boolean} True if this expression node is a match, false otherwise.
   */
  is(e) {
    return c(this, gt) === e || c(this, pt) === e || c(this, ft) === e;
  }
  /**
   * Checks if this node matches any of the given characteristics. This should be 
   * implemented by each ExpressionNode child class.
   * @param {Array<ExpressionEntity | ExpressionCategory | String>} characteristics 
   * @returns {Boolean} True if this expression node is a match, false otherwise.
   */
  isOneOf(e) {
    try {
      for (let n of e)
        if (this.is(n)) return !0;
    } catch {
      try {
        return this.is(e);
      } catch {
        return !1;
      }
    }
    return !1;
  }
  /**
   * Checks if this expression can be subscripted (followed by an index, key, or slice).
   * @returns {Boolean} True if this type of expression can be subscripted, false otherwise
   */
  isSubscriptable() {
    return !1;
  }
  /**
   * Checks if this expression can be treated as a number (int, float, number, or bool)
   * @returns {Boolean}
   */
  isNumeric() {
    return c(this, me) === d.Int || c(this, me) === d.Float || c(this, me) === d.Number || c(this, me) === d.Bool;
  }
  /**
   * Checks if this expression can be treated as an int (int or bool)
   * @returns {Boolean}
   */
  isIntLike() {
    return c(this, me) === d.Int || c(this, me) === d.Bool;
  }
  /**
   * Checks if this expression is a non-float numeric - int, bool, number
   * @returns {Boolean}
   */
  isNonFloatNumeric() {
    return this.isIntLike() || c(this, me) === d.Number;
  }
  /**
   * Checks if this expression is an assignment or value change operator.
   * @returns {Boolean}
   */
  isChangeOperator() {
    return this.isOneOf([t.AssignmentOperator, t.IncrementOperator, t.DecrementOperator, t.MultiplyAssignOperator, t.DivideAssignOperator, t.ExponentAssignOperator, t.IntDivideAssignOperator, t.RemainderAssignOperator]);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   */
  matchesPattern(e) {
    return this.getTextValue() === e.getTextValue() && this.getEntity() === e.getEntity();
  }
  /**
   * Checks whether this is a string literal for combination purposes.
   * @returns {Boolean}
   */
  isStringLiteral() {
    return !1;
  }
  /**
   * Whether or not this expression has child expressions. Should be overridden in multipart
   * expressions
   * @returns {Boolean} True if there are children, false if not
   */
  hasChildExpressions() {
    return !1;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity | ExpressionCategory | String} entity 
   * @returns {ExpressionNode[]}
   */
  getExpressionsOfKind(e) {
    const n = [];
    return this.is(e) && n.push(this), n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    if (this.isOneOf(e))
      return this;
  }
  /**
   * Gets all VariableExpressions that occur in the line.
   * @returns {VariableExpression[]}
   */
  getVariableExpressions() {
    return [];
  }
  /**
   * Gets all ExpressionNodes nested within this node, including this node.
   * @returns {ExpressionNode[]}
   */
  getAllNestedExpressions() {
    return [this];
  }
  /**
   * Checks any associated symptom rules and updates the symptom tracker
   */
  checkForSymptoms() {
    this.checkRules(this);
  }
  /**
   * Gets all nodes this node is connected to
   * @returns {ExpressionNode[]}
   */
  getConnectedTo() {
    return c(this, rs);
  }
  /**
   * Adds a new ExpressionNode to this node. Connections are directed so this node points 
   * to the new node but not the other way around
   * @param {ExpressionNode} node 
   */
  addConnection(e) {
    c(this, rs).push(e);
  }
  toJSON() {
    return {
      entity: c(this, gt).name,
      category: c(this, pt).name,
      textValue: c(this, ft),
      dataType: c(this, me).name,
      lineNumber: c(this, an),
      docIndex: c(this, cn)
    };
  }
}
ft = new WeakMap(), gt = new WeakMap(), pt = new WeakMap(), st = new WeakMap(), an = new WeakMap(), ln = new WeakMap(), cn = new WeakMap(), is = new WeakMap(), un = new WeakMap(), me = new WeakMap(), vt = new WeakMap(), dn = new WeakMap(), rs = new WeakMap();
var xe, Gs, Go;
class X extends _e {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity The entity that describes the MultiPartExpression
   * @param {ExpressionCategory} category The category that describes the MultiPartExpression
   * @param {DataType} dataType Optional. The datatype of the multipart expression. NotParsed by default.
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s, o, u = d.NotParsed) {
    super(
      e,
      s,
      o,
      n.length > 0 ? n[0].getStartLineNumber() : -1,
      n.length > 0 ? n[0].getDocumentStartIndex() : -1,
      n.length > 0 ? n[0].getIndexOnLine() : -1,
      u,
      n.length > 0 ? n[n.length - 1].getDocumentEndIndex() : -1,
      n.length > 0 ? n[n.length - 1].getEndLineNumber() : -1
    );
    I(this, Gs);
    /** @type {ExpressionNode[]} */
    I(this, xe);
    y(this, xe, n), m(this, Gs, Go).call(this, c(this, xe));
  }
  //#region - overrides
  /**
   * @inheritdoc
   * @override
   */
  isSubscriptable() {
    return _s(this.getDataType());
  }
  /**
   * @inheritdoc
   */
  hasChildExpressions() {
    return c(this, xe).length > 0;
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of c(this, xe))
      n.getTextValue() !== "Placeholder" && (e = e.concat(n.getVariableExpressions()));
    return e;
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return this.getEntity() === e.getEntity();
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of c(this, xe))
      s.is(e) ? n.push(s) : n = n.concat(s.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of c(this, xe)) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * @override
   */
  contains(e) {
    if (super.contains(e))
      return !0;
    for (let n of c(this, xe))
      if (n.contains(e))
        return !0;
    return !1;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of this.getChildren())
      e.checkForSymptoms();
  }
  /**
   * @override
   */
  checkForConstructs(e) {
    super.checkForConstructs(this);
    for (const n of this.getChildren())
      n.checkForConstructs(n);
  }
  /**
   * @override
   */
  setBlockId(e) {
    super.setBlockId(e);
    for (const n of this.getChildren())
      n.setBlockId(e);
  }
  /**
   * @override
   */
  setScopeId(e) {
    super.setScopeId(e);
    for (const n of this.getChildren())
      n.setScopeId(e);
  }
  //#endregion - overrides
  //#region - extension methods
  /**
   * Gets the child expressions
   * @returns {ExpressionNode[]} The child expressions
   */
  getChildren() {
    return c(this, xe);
  }
  /**
   * Overwrites the current children with the provided children.
   * @param {ExpressionNode[]} children An array of ExpressionNodes representing the child nodes
   */
  setChildren(e) {
    y(this, xe, e);
  }
  /**
   * Adds a child node to the list of children.
   * @param {ExpressionNode} child The child expression.
   */
  addChild(e) {
    c(this, xe).push(e);
  }
  /**
   * Checks if the expression is "complete" e.g. if an opening ( is closed. Should
   * be extended in child classes
   * @returns {Boolean} True if the expression represents a finished expression of its kind, false otherwise.
   */
  isComplete() {
    return this.hasChildExpressions();
  }
  //#endregion - extension methods
}
xe = new WeakMap(), Gs = new WeakSet(), Go = function(e) {
  for (const n of e)
    n.setParent(this);
};
var fe, os, Cn, $o, On, Jo, Ko, Wo;
const Jn = class Jn extends X {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity The entity that describes the MultiPartExpression
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s) {
    var p;
    const o = m(p = Jn, On, Ko).call(p, n);
    super(e, o, s, a.BlockDefinitionStatement, d.NA);
    I(this, Cn);
    /** @type {ExpressionNode[][]} */
    I(this, fe);
    /** @type {Number} */
    I(this, os, 0);
    const u = 3, h = o.length - 3;
    if (h < u)
      y(this, fe, []);
    else {
      const w = o.slice(u, h + 1);
      y(this, fe, $.split(w, t.Comma)), m(this, Cn, Wo).call(this);
    }
    this.addRule(m(this, Cn, $o));
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length >= 5 && e[0].is(t.FunctionDefinition) && e[1].isOneOf([t.FunctionName, t.MethodName]) && e[2].is(t.OpenParenthesis) && e[e.length - 2].is(t.CloseParenthesis) && e[e.length - 1].is(t.Colon) && rr(e, t.OpenParenthesis, t.CloseParenthesis);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of c(this, fe))
      for (let s of n)
        s.is(t.VariableName) ? e.push(s) : e = e.concat(s.getVariableExpressions());
    return e;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of c(this, fe))
      for (const o of s)
        o.is(e) ? n.push(o) : n = n.concat(o.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of c(this, fe)) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of c(this, fe))
      for (const n of e)
        n.checkForSymptoms();
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // CallableDefinitionStatement
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const item of this.#parameters) {
  //         for (const p of item)
  //             p.setBlockId(id);
  //     }*/
  // }
  //#endregion - overrides
  /**
   * Gets the parameters
   * @returns {ExpressionNode[][]}
   */
  getParameters() {
    return c(this, fe);
  }
  getOptionalParameterCount() {
    return c(this, os);
  }
};
fe = new WeakMap(), os = new WeakMap(), Cn = new WeakSet(), /**
 * Helper method. Checks if the name of this callable is a reserved word.
 * @param {CallableDefinitionStatement} callable 
 * @returns {Symptom[]}
 */
$o = function(e) {
  const n = [], s = e.getChildren();
  if (s.length > 1) {
    const o = We(s[1].getTextValue()).category;
    (o === a.BlockDefinitions || o === a.LogicalOperators || o === a.Types || o === a.OtherKeywords) && n.push(x.createStatementSymptom(
      b.DefinitionFollowedByReservedWord,
      s,
      0,
      1,
      {
        definitionType: s[0].getTextValue(),
        reservedWord: s[1].getTextValue()
      }
    ));
  }
  return n;
}, On = new WeakSet(), Jo = function(e) {
  let n = -1, s = -1, o = 0;
  for (let u = 0; u < e.length; u++)
    if (e[u].is(t.OpenParenthesis))
      o++, n === -1 && (n = u);
    else if (e[u].is(t.CloseParenthesis) && (o--, o === 0)) {
      s = u;
      break;
    }
  return [n, s];
}, Ko = function(e) {
  var u;
  let s = m(u = Jn, On, Jo).call(u, e)[1] + 1, o = -1;
  for (; s < e.length; ) {
    if (e[s].is(t.Colon)) {
      o >= 0 && e.splice(o, s - o);
      break;
    } else e[s].is(t.TypeHintReturn) && (o = s);
    s++;
  }
  return e;
}, /**
 * Helper method that sets the data type of all parameters
 */
Wo = function() {
  for (let e = 0; e < c(this, fe).length; e++) {
    if (c(this, fe)[e] = $.createTree(c(this, fe)[e]), c(this, fe)[e].length > 1) {
      const n = $.split(c(this, fe)[e], t.Colon);
      c(this, fe)[e] = n[0];
    }
    for (let n of c(this, fe)[e])
      if (n.is(t.VariableName))
        n.setDataType(d.Unknown), n.setAssignedOrChanged(), n.setIsParameter();
      else if (n.is(t.AssignmentStatement)) {
        const s = n.getVariableExpressions();
        Os(this, os)._++;
        for (let o of s)
          o.setDataType(d.Unknown), o.setAssignedOrChanged(), o.setIsParameter();
      }
  }
}, I(Jn, On);
let Ls = Jn;
class Qc extends Ls {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(i, e) {
    if (super(i, e, t.FunctionDefinitionStatement, a.BlockDefinitionStatement, d.NA), this.addConnection(this.getFunctionNameExpression()), this.getFunctionNameExpression() !== void 0) {
      this.getFunctionNameExpression().addConnection(this);
      for (const n of this.getParameters())
        for (const s of n)
          this.getFunctionNameExpression().addConnection(s);
    }
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[1].is(t.FunctionName);
  }
  //#endregion - overrides
  //#region - extension
  /**
   * Gets the expression that contains the function name
   * @returns {FunctionNode}
   */
  getFunctionNameExpression() {
    return this.getChildren()[1];
  }
  /**
   * Gets all nodes this node is connected to
   * @returns {ExpressionNode[]}
   * @override
   */
  getConnectedTo() {
    return this.getFunctionNameExpression().getConnectedTo();
  }
  /**
   * Adds a new ExpressionNode to this node. Connections are directed so this node points 
   * to the new node but not the other way around
   * @param {ExpressionNode} node 
   * @override
   */
  addConnection(i) {
    this.getFunctionNameExpression() !== void 0 && this.getFunctionNameExpression().addConnection(i);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    try {
      return [...super.getAllNestedExpressions(), ...this.getFunctionNameExpression().getAllNestedExpressions(), ...this.getParameters().flatMap((e) => e.flatMap((n) => n.getAllNestedExpressions()))];
    } catch {
      return [];
    }
  }
  toJSON() {
    const i = super.toJSON();
    return i.functionName = this.getFunctionNameExpression().getTextValue(), i.parameters = this.getParameters().map((e) => e.map((n) => n.toJSON())), i;
  }
  //#endregion - extension
}
var as;
class Xc extends Ls {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.MethodDefinitionStatement, a.BlockDefinitionStatement, d.NA);
    /** @type {VariableExpression | undefined} */
    I(this, as);
    const s = super.getParameters();
    s.length > 0 && y(this, as, s[0][0]), this.addConnection(this.getMethodNameExpression()), this.getMethodNameExpression().addConnection(this);
    for (const o of this.getParameters())
      for (const u of o)
        this.getMethodNameExpression().addConnection(u);
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[1].is(t.MethodName);
  }
  //#endregion - overrides
  //#region - extension
  /**
   * Gets the expression that contains the method name
   * @returns {UserDefinedMethodExpression}
   */
  getMethodNameExpression() {
    return this.getChildren()[1];
  }
  getParameters() {
    return super.getParameters().slice(1);
  }
  /**
   * Gets the class variable (i.e. self) defined in the method definition
   * @returns { VariableExpression | undefined}
   */
  getClassVar() {
    return c(this, as);
  }
  /**
   * Gets all nodes this node is connected to
   * @returns {ExpressionNode[]}
   * @override
   */
  getConnectedTo() {
    return this.getMethodNameExpression().getConnectedTo();
  }
  /**
   * Adds a new ExpressionNode to this node. Connections are directed so this node points 
   * to the new node but not the other way around
   * @param {ExpressionNode} node 
   * @override
   */
  addConnection(e) {
    this.getMethodNameExpression().addConnection(e);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getMethodNameExpression().getAllNestedExpressions(), ...this.getParameters().flatMap((n) => n.flatMap((s) => s.getAllNestedExpressions()))];
  }
  toJSON() {
    const e = super.toJSON();
    return e.methodName = this.getMethodNameExpression().getTextValue(), e.parameters = this.getParameters().map((n) => n.map((s) => s.toJSON())), e;
  }
  //#endregion - extension
}
as = new WeakMap();
class Zc extends X {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(i, e) {
    super(
      i,
      e,
      t.ClassDefinitionStatement,
      a.BlockDefinitionStatement,
      e.length >= 2 && e[1].is(t.ClassName) ? d.createCustomType(e[1].getTextValue()) : d.Class
    );
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[1].is(t.ClassName);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return super.getAllNestedExpressions() + [this.getChildren()[1]];
  }
  //#endregion - overrides
  //#region - extension
  /**
   * Gets the expression that contains the class name
   * @returns {ClassNode}
   */
  getClassNameExpression() {
    return this.getChildren()[1];
  }
  toJSON() {
    const i = super.toJSON();
    return i.className = this.getClassNameExpression().getTextValue(), i;
  }
  //#endregion - extension
}
var le, Ce, qo, jo, Bs, Ho, zo;
const $s = class $s extends X {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity AUTO FILL The entity that describes the MultiPartExpression
   * @param {ExpressionCategory} category AUTOFILL The category that describes the MultiPartExpression
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s, o) {
    super(e, n, s, o);
    I(this, Ce);
    I(this, le);
    if (m(this, Ce, Bs).call(this), this.isComplete()) {
      const h = n.length - 2;
      if (h < 2)
        y(this, le, []);
      else {
        const p = n.slice(2, h + 1);
        y(this, le, $.checkForListComp(p));
        for (let w = 0; w < c(this, le).length; w++)
          c(this, le)[w].length > 1 && (c(this, le)[w] = $.createTree(c(this, le)[w]));
      }
    } else y(this, le, []);
    m(this, Ce, jo).call(this), this.addRules([m(this, Ce, zo), m(this, Ce, Ho)]), m(this, Ce, qo).call(this);
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length >= 3 && e[0].isOneOf([a.BuiltInFunctions, t.FunctionName]) && e[1].is(t.OpenParenthesis) && e[e.length - 1].is(t.CloseParenthesis) && rr(e, t.OpenParenthesis, t.CloseParenthesis);
  }
  /**
   * @override
   */
  addChild(e) {
    super.addChild(e), m(this, Ce, Bs).call(this);
  }
  /**
   * @override
   */
  setChildren(e) {
    super.setChildren(e), m(this, Ce, Bs).call(this);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of c(this, le))
      for (let s of n)
        s.is(t.VariableName) ? e.push(s) : e = e.concat(s.getVariableExpressions());
    return e;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    if (this.getChildren()[0].is(e))
      return [this.getChildren()[0]];
    for (let s of c(this, le))
      for (let o of s)
        o.is(e) ? n.push(o) : n = n.concat(o.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (this.getChildren()[0].isOneOf(e))
      return this.getChildren()[0];
    if (n === void 0)
      for (const s of c(this, le)) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of c(this, le))
      for (const n of e)
        n.checkForSymptoms();
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return super.matchesPattern(e) && this.getFunctionName() === e.getFunctionName() && this.getTextValue() === e.getTextValue();
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const item of this.#arguments) {
  //         for (const a of item) {
  //             a.setBlockId(id);
  //         }
  //     }*/
  // }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getFunctionExpression().getAllNestedExpressions(), ...c(this, le).flatMap((n) => n.flatMap((s) => s.getAllNestedExpressions()))];
  }
  toJSON() {
    const e = super.toJSON();
    return e.functionName = this.getFunctionName(), e.arguments = this.getArguments().map((n) => n.map((s) => s.toJSON())), e;
  }
  //#endregion - overrides
  //#region - custom
  /**
   * Gets the ExpressionEntity of the function that was called
   * @returns {ExpressionEntity}
   */
  getFunctionEntity() {
    const e = this.getChildren();
    if (e.length < 1)
      throw new Error("No function expression available");
    return e[0].getEntity();
  }
  /**
   * Gets the name of the function that was called
   * @returns {String}
   */
  getFunctionName() {
    const e = this.getChildren();
    if (e.length < 1)
      throw new Error("No function expression available");
    return e[0].getTextValue();
  }
  getFunctionExpression() {
    const e = this.getChildren();
    if (e.length < 1)
      throw new Error("No function expression available");
    return e[0];
  }
  /**
   * 
   * @returns {ExpressionNode[][]}
   */
  getArguments() {
    return c(this, le);
  }
  //#endregion - custom
};
le = new WeakMap(), Ce = new WeakSet(), qo = function() {
  for (const e of c(this, le))
    for (const n of e)
      n.addConnection(this);
  this.addConnection(this.getFunctionExpression());
}, /**
 * Helper method that sets this as the parent of all arguments in a function call.
 */
jo = function() {
  for (const e of c(this, le))
    for (const n of e)
      n.setParent(this);
}, /**
 * Helper method that sets the data type based on the function called if the call is complete.
 */
Bs = function() {
  this.getChildren()[0].addObserver(this), this.isComplete() ? si($s.prototype, this, "setDataType").call(this, this.getChildren()[0].getDataType()) : si($s.prototype, this, "setDataType").call(this, d.NotParsed);
}, /** 
 * Rule function. Checks if the function returns something that is not used.
 * @param {FunctionCallNode} exp
 * @returns {Symptom[]}
 */
Ho = function(e) {
  const n = [];
  return e.getDataType() !== d.None && (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && (e.is(t.BuiltInFunctionCall) || e.getFunctionExpression().getReturnStatements().length > 0) && n.push(x.createStatementSymptom(b.UnusedReturn, [e], 0, 0, {
    expression: e.getFunctionExpression()
  })), n;
}, /** 
 * Rule function. Checks if the function call is passed something with no value and if so,
 * adds a new Symptom object.
 * @param {FunctionCallNode} exp
 * @returns {Symptom[]}
 */
zo = function(e) {
  const n = [], s = e.getArguments();
  for (const o of s) {
    const h = o.flatMap((p) => p.is(t.GroupStatement) ? p.getContents() : p).filter((p) => qt(p) || p.getDataType() === d.None && !p.isOneOf([t.NoneType, t.VariableName]));
    h.length > 0 && n.push(...h.map((p) => x.createStatementSymptom(
      b.AssignedNone,
      [p],
      0,
      0,
      {
        expression: p,
        usage: e.getFunctionEntity() === t.PrintFunction ? "print" : Tr
      }
    )));
  }
  return n;
};
let Vs = $s;
var Js, Qo;
class Yc extends Vs {
  /**
   * Creates a new BuiltInFunctionCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.BuiltInFunctionCall, a.FunctionCall);
    I(this, Js);
    n.length > 0 && n[0].isOneOf([t.StrFunction, t.IntFunction, t.FloatFunction, t.BoolFunction, t.ListFunction, t.TupleFunction, t.SetFunction, t.DictFunction]) && this.addRule(m(this, Js, Qo));
  }
  //#region - overrides    
  /**
   * @override
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[0].is(a.BuiltInFunctions);
  }
  //#endregion - overrides
  /**
   * Converts this to a user defined function expression
   * @param {UserDefinedFunctionExpression} userDefinedFunction 
   */
  convertToUserDefinedFunction(e) {
    this.setEntity(t.UserDefinedFunctionCall);
    const n = this.getChildren()[0];
    n.setEntity(t.FunctionName), n.setCategory(a.Identifiers), n.setDataType(e.getReturnType()), n.addReturns = (s, o = !1) => e.addReturns(s, o), n.getReturnType = () => e.getReturnType(), n.getReturnStatements = () => e.getReturnStatements();
  }
}
Js = new WeakSet(), /**
 * Rule function. Checks if the call is an unnecessary use of a type conversion function.
 * @param {BuiltInFunctionCall} call 
 * @returns {Symptom[]}
 */
Qo = function(e) {
  const n = [], s = e.getDataType(), o = e.getArguments(), u = e.getChildren();
  return o.length === 1 && o[0].length === 1 && (o[0][0].getDataType() === s || s === d.List && o[0][0].getDataType() === d.String) && n.push(x.createStatementSymptom(
    b.TypeUnnecessary,
    u,
    0,
    u.length - 1,
    {
      convertedValue: o[0][0].getTextValue(),
      argType: o[0][0].getDataType().name,
      convertedType: s.name
    }
  )), n;
};
class _c extends Vs {
  /**
   * Creates a new UserDefinedFunctionCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(i, e) {
    super(i, e, t.UserDefinedFunctionCall, a.FunctionCall);
    const n = this.getFunctionExpression(), s = this.getArguments();
    if (s.length > 0 && n.getParent().is(a.FunctionCall) && s.length <= n.getParent().getArguments().length) {
      const o = n.getParent().getArguments();
      for (let u = 0; u < s.length; u++)
        s[u][0].addConnection(o[u][0]);
    }
  }
  //#region - overrides    
  /**
   * @override
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[0].is(t.FunctionName);
  }
  //#endregion - overrides
  /**
   * Converts this to a built in function expression 
   */
  convertToImportedFunction() {
    this.setEntity(t.BuiltInFunctionCall);
    const i = this.getChildren()[0];
    i.setEntity(t.Unknown), i.setCategory(a.ModuleFunctions), i.setDataType(d.Unknown);
  }
}
class eu extends X {
  /**
   * Creates a new ExceptionCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(i, e) {
    super(i, e, t.ExceptionCall, a.ExceptionCall, d.Exception);
  }
  //#region - overrides    
  /**
   * @override
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[0].is(a.BuiltInExceptions);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return this.getChildren()[0].getAllNestedExpressions();
  }
  //#endregion - overrides
}
var ce, Oe, Zo, Yo, As, _o, ea;
class Xo extends X {
  /**
   * Creates a new MethodCallNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity AUTO FILL The entity that describes the MultiPartExpression
   * @param {ExpressionCategory} category AUTOFILL The category that describes the MultiPartExpression
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s, o) {
    super(e, n, s, o);
    I(this, Oe);
    I(this, ce);
    if (m(this, Oe, As).call(this), this.isComplete()) {
      const h = n.length - 2;
      if (h < 4)
        y(this, ce, []);
      else {
        let p = n.slice(4, h + 1);
        y(this, ce, $.checkForListComp(p));
        for (let w = 0; w < c(this, ce).length; w++)
          c(this, ce)[w].length > 1 && (c(this, ce)[w] = $.createTree(c(this, ce)[w]));
      }
    } else y(this, ce, []);
    m(this, Oe, Yo).call(this), m(this, Oe, Zo).call(this), this.addRules([m(this, Oe, ea), m(this, Oe, _o)]);
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length >= 5 && e[1].is(t.Dot) && e[3].is(t.OpenParenthesis) && e[e.length - 1].is(t.CloseParenthesis) && rr(e, t.OpenParenthesis, t.CloseParenthesis);
  }
  /**
   * @override
   */
  addChild(e) {
    super.addChild(e), m(this, Oe, As).call(this);
  }
  /**
   * @override
   */
  setChildren(e) {
    super.setChildren(e), m(this, Oe, As).call(this);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of this.getChildren()) {
      if (n.is(t.Dot))
        break;
      n.is(t.VariableName) ? e.push(n) : e = e.concat(n.getVariableExpressions());
    }
    for (let n of c(this, ce))
      for (let s of n)
        s.is(t.VariableName) ? e.push(s) : e = e.concat(s.getVariableExpressions());
    return e;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of c(this, ce))
      for (let o of s)
        o.is(e) ? n.push(o) : n = n.concat(o.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of c(this, ce)) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this), this.isComplete() && this.getChildren()[0].checkForSymptoms();
    for (const e of c(this, ce))
      for (const n of e)
        n.checkForSymptoms();
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return super.matchesPattern(e) && this.getMethodName() === e.getMethodName();
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), this.getMethodExpression(), ...c(this, ce).flatMap((n) => n.flatMap((s) => s.getAllNestedExpressions()))];
  }
  toJSON() {
    const e = super.toJSON();
    return e.methodName = this.getMethodName(), e.arguments = this.getArguments().map((n) => n.map((s) => s.toJSON())), e.object = this.getObject().toJSON(), e;
  }
  //#endregion - overrides
  //#region - custom
  /**
   * Gets the ExpressionEntity of the method that was called
   * @returns {ExpressionEntity}
   */
  getMethodEntity() {
    const e = this.getChildren();
    if (e.length < 3)
      throw new Error("No method expression available");
    return e[2].getEntity();
  }
  getMethodExpression() {
    const e = this.getChildren();
    if (e.length < 3)
      throw new Error("No method expression available");
    return e[2];
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const item of this.#arguments) {
  //         for (const a of item) {
  //             a.setBlockId(id);
  //         }
  //     }*/
  // }
  /**
   * Gets the name of the method that was called
   * @returns {String}
   */
  getMethodName() {
    const e = this.getChildren();
    if (e.length < 3)
      throw new Error("No method expression available");
    return e[2].getTextValue();
  }
  getMethod() {
    const e = this.getChildren();
    if (e.length < 3)
      throw new Error("No method expression available");
    return e[2];
  }
  /**
   * Gets the expression that the method was called on
   * @returns {ExpressionNode}
   */
  getObject() {
    const e = this.getChildren();
    if (e.length === 0)
      throw new Error("No children");
    return e[0];
  }
  /**
   * 
   * @returns {ExpressionNode[][]}
   */
  getArguments() {
    return c(this, ce);
  }
  //#endregion - custom
}
ce = new WeakMap(), Oe = new WeakSet(), Zo = function() {
  for (const e of c(this, ce))
    for (const n of e)
      n.addConnection(this);
  this.addConnection(this.getMethodExpression());
}, /**
 * Helper method that sets this as the parent of all arguments in a function call.
 */
Yo = function() {
  for (const e of c(this, ce))
    for (const n of e)
      n.setParent(this);
}, /**
 * Helper method that sets the data type based on the function called if the call is complete.
 */
As = function() {
  this.isComplete() ? this.setDataType(this.getChildren()[2].getDataType()) : this.setDataType(d.NotParsed);
}, /** 
 * Rule function. Checks if the function returns something that is not used.
 * @param {MethodCallNode} exp
 * @returns {Symptom[]}
 */
_o = function(e) {
  const n = [];
  return e.getDataType() !== d.None && (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(
    b.UnusedReturn,
    [e],
    0,
    0,
    {
      expression: e.getMethodExpression()
    }
  )), n;
}, /** 
 * Rule function. Checks if the function call is passed something with no value and if so,
 * adds a new Symptom object.
 * @param {MethodCallNode} exp
 * @returns {Symptom[]}
 */
ea = function(e) {
  const n = [], s = e.getArguments();
  for (const o of s) {
    const h = o.flatMap((p) => p.is(t.GroupStatement) ? p.getContents() : p).filter((p) => qt(p) || p.getDataType() === d.None && !p.isOneOf([t.NoneType, t.VariableName]));
    h.length > 0 && n.push(...h.map((p) => x.createStatementSymptom(
      b.AssignedNone,
      [p],
      0,
      0,
      {
        expression: p,
        usage: Tr
      }
    )));
  }
  return n;
};
var Mn, ta, na;
class tu extends Xo {
  /**
   * Creates a new BuiltInMethodCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.BuiltInMethodCall, a.MethodCall);
    I(this, Mn);
    m(this, Mn, ta).call(this), this.addRule(m(this, Mn, na));
  }
  //#region - overrides    
  /**
   * @override
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[2].isOneOf([a.BuiltInMethods, a.MagicMethods, a.ModuleFunctions]);
  }
  /**
   * @override
   */
  isStringLiteral() {
    return this.getMethodEntity() === t.Format;
  }
}
Mn = new WeakSet(), // If the method called is a known modifier e.g. list remove, mark the variable it was called on as modified
ta = function() {
  if (mc.has(this.getMethodEntity())) {
    const e = this.getObject();
    e.is(t.VariableName) ? e.setAssignedOrChanged() : e.is(t.SubscriptedExpression) && e.getChildren()[0].is(t.VariableName) && e.getChildren()[0].setAssignedOrChanged();
  }
}, //#endregion - overrides
/**
 * Rule function. Checks if the method called is valid for the object it was called on
 * @param {MethodCallNode} methodCall 
 * @returns {Symptom[]}
 */
na = function(e) {
  const n = [], o = e.getObject().getDataType(), u = e.getMethod();
  let h = !0;
  switch (o) {
    case d.Number:
    case d.Int:
    case d.Float:
    case d.Bool:
    case d.None:
      h = !1;
  }
  if (h && li.has(o) && (h = li.get(o).has(u.getEntity()) || u.is(a.MagicMethods)), !h) {
    const p = e.getChildren();
    n.push(x.createStatementSymptom(
      b.UnknownMethod,
      p,
      0,
      p.length - 1,
      {
        objectType: o.name
      }
    ));
  }
  return n;
};
var Ks, sa;
class nu extends Xo {
  /**
   * Creates a new UserDefinedMethodCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.UserDefinedMethodCall, a.MethodCall);
    I(this, Ks);
    this.addRule(m(this, Ks, sa));
  }
  //#region - overrides    
  /**
   * @override
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[2].is(t.MethodName);
  }
}
Ks = new WeakSet(), //#endregion - overrides
/**
 * Checks if the method called is valid for the object it was called on
 * @param {MethodCallNode} methodCall 
 * @returns {Symptom[]}
 */
sa = function(e) {
  const n = [], o = e.getObject().getDataType();
  if (li.has(o)) {
    const u = e.getChildren();
    n.push(x.createStatementSymptom(
      b.UnknownMethod,
      u,
      0,
      u.length - 1,
      {
        objectType: o.name
      }
    ));
  }
  return n;
};
var ze, we, xn, ia, ra;
class wr extends X {
  /**
   * Creates a new PropertyCallNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s, o) {
    super(e, n, s, o);
    I(this, xn);
    /** @type {ExpressionNode} */
    I(this, ze);
    /** @type {ExpressionNode} */
    I(this, we);
    this.isComplete() && (y(this, ze, n[0]), y(this, we, n[2])), m(this, xn, ra).call(this), this.addRule(m(this, xn, ia));
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length == 3 && e[1].is(t.Dot);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    return c(this, ze).is(t.VariableName) ? e.push(c(this, ze)) : e = e.concat(c(this, ze).getVariableExpressions()), e;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of this.getChildren())
      s.is(e) ? n.push(s) : n = n.concat(s.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of this.getChildren()) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return super.matchesPattern(e) && this.getTextValue() === e.getTextValue();
  }
  setDataType(e) {
    if ((e !== this.getDataType() || e !== c(this, we).getDataType()) && (super.setDataType(e), !c(this, we).is(a.ModuleProperties)))
      try {
        c(this, we).setDataType(e);
      } catch {
        console.log("Couldn't set property type of", c(this, we).getEntity().name, ". Expected a property.");
      }
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...c(this, ze).getAllNestedExpressions(), ...c(this, we).getAllNestedExpressions()];
  }
  toJSON() {
    const e = super.toJSON();
    return e.object = c(this, ze).toJSON(), e.propertyName = c(this, we).getTextValue(), e;
  }
  //#endregion - overrides
  //#region - custom
  /**
   * Gets the object of the property call (the variable before the .)
   * @returns {VariableExpression}
   */
  getObject() {
    return c(this, ze);
  }
  /**
   * Gets the property node
   * @returns {ExpressionNode}
   */
  getProperty() {
    return c(this, we);
  }
  //#endregion - custom
}
ze = new WeakMap(), we = new WeakMap(), xn = new WeakSet(), /**
 * Rule function. Checks if the property is unused
 * @param {PropertyCallNode} exp 
 * @returns {Symptom[]}
 */
ia = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(b.UnusedValue, [e], 0, 0)), n;
}, /**
 * Helper method that sets the data type based on the function called if the call is complete.
 */
ra = function() {
  if (this.isComplete())
    if (c(this, we).getCategory() === a.ModuleProperties) {
      const e = Wt.get(c(this, we).getEntity());
      this.setDataType(e || c(this, we).getDataType());
    } else
      this.setDataType(d.Unknown);
  else
    this.setDataType(d.NotParsed);
  c(this, we).addObserver(this);
};
class su extends _e {
  /**
   * @inheritdoc
   */
  isSubscriptable() {
    return !0;
  }
}
var Ws, aa;
class oa extends su {
  /**
   * 
   * @param {String} textValue 
   * @param {Number} startLineNumber 
   * @param {Number} documentStartIndex 
   * @param {Number} indexOnLine
   * @param {Number} documentEndIndex 
   * @param {Number} endLineNumber 
   */
  constructor(e, n, s, o, u = s + e.length, h = n) {
    super(e, t.StringLiteral, a.Literals, n, s, o, d.String, u, h);
    I(this, Ws);
    this.addRule(m(this, Ws, aa));
  }
  /**
   * @override
   */
  isStringLiteral() {
    return !0;
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return e.getEntity() === t.StringLiteral || e.getEntity() === t.CombinedStringLiteral || e.getEntity() === t.FString;
  }
  /**
   * Inherited method. Overridden to do nothing. DataType of a literal should not be changed.
   * @override
   * @param {DataType} dataType 
   * @throws Throws an error if a calling function tries to change the data type
   */
  setDataType(e) {
    throw new Error(`Cannot change the data type of a String literal. Attempted to change the type to: ${e.name}.`);
  }
  /**
   * Updates the expression contents when additional content is added.
   * @param {Number} documentEndLine The ending line number of the expression
   * @param {Number} documentEndIndex The index of the end of the expression text in the document text
   * @param {String} textValueToAdd The string text to add to the existing text.
   */
  update(e, n, s) {
    this.setEndLineNumber(e), this.documentEndIndex(n), this.setTextValue(this.getTextValue + s);
  }
}
Ws = new WeakSet(), /**
 * Rule function. Checks if the property is unused
 * @param {StringLiteralExpression} exp 
 * @returns {Symptom[]}
 */
aa = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(b.UnusedValue, [e], 0, 0)), n;
};
var qs, la;
class Di extends _e {
  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(e, n, s, o) {
    const u = e.indexOf(".") >= 0 ? t.FloatLiteral : t.IntLiteral;
    super(e, u, a.Literals, n, s, o, u === t.FloatLiteral ? d.Float : d.Int);
    I(this, qs);
    this.addRule(m(this, qs, la));
  }
  /**
   * Inherited method. Overridden to do nothing. DataType of a literal should not be changed.
   * @override
   * @param {DataType} dataType 
   * @throws Throws an error if a calling function tries to change the data type
   */
  setDataType(e) {
    throw new Error(`Cannot change the data type of a bumber literal. Attempted to change the type to: ${e.name}.`);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return e.getEntity() === t.FloatLiteral || e.getEntity() === t.IntLiteral;
  }
}
qs = new WeakSet(), /**
 * Rule function. Checks if the property is unused
 * @param {NumberLiteral} exp 
 * @returns {Symptom[]}
 */
la = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(b.UnusedValue, [e], 0, 0)), n;
};
var Qe, Dn, ca, ua;
class iu extends X {
  // The values used to create the string e.g. variables
  /**
   * Creates a new UserDefinedMethodCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.FString, a.Literals, d.String);
    I(this, Dn);
    /** @type {ExpressionNode[][]} */
    I(this, Qe);
    y(this, Qe, m(this, Dn, ca).call(this));
    for (const s of c(this, Qe))
      for (const o of s)
        o.setParent(this), this.addConnection(o);
    this.addRule(m(this, Dn, ua));
  }
  //#region - overrides
  /**
   * @override
   */
  isStringLiteral() {
    return !0;
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return e.getEntity() === t.StringLiteral || e.getEntity() === t.CombinedStringLiteral || e.getEntity() === t.FString;
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of c(this, Qe))
      for (let s of n)
        s.is(t.VariableName) ? e.push(s) : e = e.concat(s.getVariableExpressions());
    return e;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of c(this, Qe))
      for (const n of e)
        n.checkForSymptoms();
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const item of this.#values) {
  //         for (const v of item)
  //             v.setBlockId(id);
  //     }*/
  // }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...c(this, Qe).flatMap((e) => e.flatMap((n) => n.getAllNestedExpressions()))];
  }
  toJSON() {
    const e = super.toJSON();
    return e.values = c(this, Qe).map((n) => n.map((s) => s.toJSON())), e;
  }
  //#endregion - overrides
  //#region - extensions
  /**
   * Gets the values used to populate the string
   * @returns {ExpressionNode[][]}
   */
  getValues() {
    return c(this, Qe);
  }
  //#endregion - extensions
}
Qe = new WeakMap(), Dn = new WeakSet(), /**
 * Parses the string literal to find the values in {} and returns a 2D
 * ExpressionNode array.
 * @returns {ExpressionNode[][]}
 */
ca = function() {
  const e = [];
  if (this.isComplete()) {
    const n = this.getChildren()[1], s = n.getTextValue();
    let o = 0, u = 0, h = -1, p = -1;
    for (let w = 0; w < s.length; w++)
      if (s.charAt(w) === "{")
        o === 0 && (h = w + 1), o++;
      else if (o > 0)
        if (s.charAt(w) === "}") {
          if (o--, o === 0) {
            const S = p === -1 ? s.substring(h, w) : s.substring(h, p), F = new En(S, n.getStartLineNumber(), n.getDocumentStartIndex());
            e.push($.createTree(F.getExpressions()));
          }
        } else s.charAt(w) === "[" ? u++ : s.charAt(w) === "]" ? u-- : u === 0 && s.charAt(w) === ":" && (p = w);
  }
  return e;
}, /**
 * Rule function. Checks if the property is unused
 * @param {FStringExpression} exp 
 * @returns {Symptom[]}
 */
ua = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(b.UnusedValue, [e], 0, 0)), n;
};
var js, da;
class ru extends X {
  /**
   * Creates a new CombinedStringLiteral
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.CombinedStringLiteral, a.Literals, d.String);
    I(this, js);
    this.addRule(m(this, js, da));
  }
  //#region - overrides
  isStringLiteral() {
    return !0;
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return e.getEntity() === t.StringLiteral || e.getEntity() === t.CombinedStringLiteral || e.getEntity() === t.FString;
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of this.getChildren())
      e = e.concat(n.getVariableExpressions());
    return e;
  }
}
js = new WeakSet(), //#endregion - overrides
/**
 * Rule function. Checks if the property is unused
 * @param {CombinedStringLiteral} exp 
 * @returns {Symptom[]}
 */
da = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(b.UnusedValue, [e], 0, 0)), n;
};
class ha extends _e {
  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(i, e, n, s, o, u) {
    super(i, e, n, s, o, u, d.NA);
  }
  /**
   * Inherited method. Overridden to do nothing and throw an error. DataType of a literal should not be changed.
   * @override
   * @param {DataType} dataType 
   * @throws Throws an error because the data type of a keyword or operator should not change.
   */
  setDataType(i) {
    throw new Error(`Cannot change the data type of a keyword or operator. Attempted to change the type to: ${i.name}.`);
  }
  /**
   * Inherited method. Overriden to do nothing and throw an error.
   * @override
   * @param {String} value 
   * @throws Throws an error because the text value of a keyword or operator should not change.
   */
  setTextValue(i) {
    throw new Error(`Cannot change the value of a keyword or operator. Attempted to change the value to ${i}.`);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(i) {
    return this.getEntity() === i.getEntity() ? !0 : this.isOneOf([a.ComparisonOperators, a.LogicalOperators, a.MathsOperators]) ? i.getCategory() : !1;
  }
}
var mt;
class Sr extends _e {
  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(e, n, s, o, u, h) {
    super(e, n, s, o, u, h, Ys(n));
    /** @type {String} */
    I(this, mt);
    y(this, mt, e);
  }
  /**
   * Checks whether this module has been given an alias
   * @returns {Boolean} True if the module has an alias that is different from its original name, false otherwise.
   */
  hasAlias() {
    return c(this, mt) !== this.getTextValue();
  }
  /**
   * Gets the module alias
   * @returns {String} The module alias
   */
  getModuleName() {
    return c(this, mt);
  }
  /**
   * Sets the module name for the module - will happen if the text value is an alias
   * @param {String} name 
   */
  setModuleName(e) {
    y(this, mt, e);
  }
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @param {DataType} dataType 
   * @throws Throws an error because the data type of a module cannot be changes
   */
  setDataType(e) {
    throw new Error(`The data type of a module cannot be changed. Attempted to change the data type to ${e}.`);
  }
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @param {String} value 
   * @throws Throws an error because the text value should not be changed.
   */
  setTextValue(e) {
    throw new Error(`The text value of a module cannot be changed. Attempted to change the value to ${e}.`);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return this.getEntity() === e.getEntity() === this.getTextValue() && e.getTextValue();
  }
  toJSON() {
    const e = super.toJSON();
    return e.moduleAlias = c(this, mt), e;
  }
}
mt = new WeakMap();
var wt, ls, cs, us, se, ks, fa, ga, pa, ma, wa, Sa, Bi;
class Tn extends _e {
  /**
   * Creates a VariableExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   * @param {Boolean} proxy Optional. Used to indicate that is a "proxy" variable used to support an operation rather than a "real" instance of a variable in the source code
   */
  constructor(e, n, s, o, u, h, p = !1) {
    var i = (...Dd) => (super(...Dd), I(this, se), /**
     * @type {VariableExpression[]}
     */
    I(this, wt, []), /**
     * @type {Boolean}
     */
    I(this, ls, !1), /**
     * @type {Boolean}
     */
    I(this, cs), /**
     * @type {Boolean}
     */
    I(this, us, !1), this);
    if (s === a.Identifiers)
      i(e, n, s, o, u, h);
    else if (s === a.SpecialVariables)
      i(e, n, s, o, u, h, Ys(n));
    else if (s === a.ModuleProperties)
      i(e, n, s, o, u, h, Wt.has(n) ? Wt.get(n) : d.Unknown);
    else
      throw new Error(`No constructor for VariableExpression with ${n.name}`);
    y(this, cs, p), this.addRules([m(this, se, pa), m(this, se, ga)]), this.addConstructRule(m(this, se, fa));
  }
  //#region - overrides
  /**
   * @override
   * @param {String} value 
   * @throws Throws an error if calling code tries to change the variable's text value.
   */
  setTextValue(e) {
    throw new Error(`Cannot change the text value of a variable (its name). Attempted to change the value to ${e}.`);
  }
  setIsParameter() {
    y(this, us, !0);
  }
  isParameter() {
    return c(this, us);
  }
  /**
   * @inheritdoc
   * @override
   */
  isSubscriptable() {
    return _s(this.getDataType());
  }
  /**
   * @override
   */
  getVariableExpressions() {
    return this.is(t.VariableName) ? [this] : [];
  }
  setDataType(e) {
    (!this.isAssignedOrChanged() || this.isObjectOfMethodCall() || this.isSubscripted()) && c(this, wt).length > 0 && (e = m(this, se, ks).call(this)), super.setDataType(e), e.isCustom && this.getParent() && this.getParent().is(t.PropertyCallExpression) && (this.getParent().getProperty().setCategory(a.ClassAttributes), this.getParent().getProperty().setOwnerType(e));
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    let n = e;
    return n.is(t.BooleanExpression) && e.getChildren().length === 2 && e.getChildren()[0].is(t.NotOperator) && e.getChildren()[1].is(t.VariableName) && (n = e.getChildren()[1]), this.getEntity() === n.getEntity() && this.getTextValue() === n.getTextValue();
  }
  //#endregion - overrides
  //#region - extension methods
  /**
   * Gets the last usages of this variable.
   * @returns {VariableExpression[]}
   */
  getLastUsages() {
    return c(this, wt);
  }
  /**
   * Adds a VariableExpression to the last usages array. Should only be used when the 
   * variable has not been assigned or changed.
   * @param {VariableExpression} varExpression 
   */
  addLastUsage(e) {
    c(this, wt).push(e), e.addConnection(this), (!this.isAssignedOrChanged() || this.isObjectOfMethodCall() || this.isSubscripted()) && (this.setDataType(m(this, se, ks).call(this)), e.addObserver(this));
  }
  isSubscripted() {
    const e = this.getParent();
    return e === void 0 ? !1 : e.is(t.SubscriptedExpression);
  }
  isObjectOfMethodCall() {
    const e = this.getParent();
    return e === void 0 ? !1 : e.is(t.BuiltInMethodCall) && e.getChildren()[0].getTextValue() === this.getTextValue();
  }
  /**
   * Overwrites the lastUsages array with the provided usages.
   * @param {VariableExpression[]} usages 
   */
  setLastUsages(e) {
    y(this, wt, e), this.setDataType(m(this, se, ks).call(this));
    for (let n of e)
      n.addObserver(this), n.addConnection(this);
  }
  /**
   * Whether or not this variable's value is set
   * @returns {Boolean}
   */
  isAssignedOrChanged() {
    return c(this, ls);
  }
  /**
   * Marks this variable as assigned or changed
   */
  setAssignedOrChanged() {
    y(this, ls, !0);
  }
  /**
   * Whether or not this variable expression is a proxy, rather than a real instance that
   * appears in the source code
   * @returns {Boolean}
   */
  isProxy() {
    return c(this, cs);
  }
  /**
   * Helper method to compare the value assigned to this variable with the value assigned in previous
   * usages. Only checks if current is part of an assignment and all last usages are part of an assignment,
   * otherwise returns UNKNOWN.
   * Only checks if current is assigned a literal value, otherwise returns UNKNONW
   * @param {VariableExpression} current 
   * @param {VariableExpression[]} lastUsages 
   * @returns {SAME_VALUE | DIFFERENT_VALUE | UNKNOWN}
   */
  compareValues(e, n) {
    const s = e.getParent();
    if (s === void 0) return Ms;
    const o = s.is(t.AssignmentStatement) ? m(this, se, Bi).call(this, e) : s.is(t.IteratorExpression) ? m(this, se, Sa).call(this, e) : void 0, u = m(this, se, wa).call(this, o, n);
    return u.size === 1 ? Array.from(u)[0] : Ms;
  }
  //#endregion - extension methods
}
wt = new WeakMap(), ls = new WeakMap(), cs = new WeakMap(), us = new WeakMap(), se = new WeakSet(), ks = function() {
  return Kt(c(this, wt).map((e) => e.getDataType()));
}, /**
 * Construct function. Checks if the variable is a BooleanCompares 
 * - a variable with Bool data type that is used as a standalone Boolean expression or part of a check for equality e.g. if var:, if var == True:
 * @param {VariableExpression} exp 
 * @returns {Symptom[]}
 */
fa = function(e) {
  const n = [];
  return e.getDataType() === d.Bool && x.checkBooleanCompare(e), n;
}, /**
 * Rule function. Checks if the property is unused
 * @param {VariableExpression} exp 
 * @returns {Symptom[]}
 */
ga = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(b.UnusedValue, [e], 0, 0)), n;
}, /**
 * 
 * @param {VariableExpression} varExp 
 * @returns {Boolean}
 */
pa = function(e) {
  var u;
  const n = [], s = e.getLastUsages(), o = e.getParent();
  if (!e.getScopeId().includes("listComprehension") && !e.isProxy() && e.isAssignedOrChanged() && s.length > 0 && o !== void 0 && o.isOneOf([t.AssignmentStatement, t.IteratorExpression])) {
    if (o.is(t.AssignmentStatement) && m(u = e, se, ma).call(u, e.getTextValue(), o))
      return n;
    let h = !0;
    const p = e.getBlockId().split("-")[1];
    for (const w of s)
      if (w.getScopeId() === e.getScopeId() && (!w.isAssignedOrChanged() || p !== "for" && w.getBlockId() !== e.getBlockId())) {
        h = !1;
        break;
      }
    if (h) {
      const w = s.length === 1 && s[0].isParameter(), S = o.is(t.IteratorExpression) ? o.getParent().getTextValue() : o.getTextValue();
      n.push(x.createStatementSymptom(b.OverwrittenVariable, [e], 0, 0, {
        isParameter: w,
        functionBlock: w ? s[0].getBlockId() : "",
        prevUsageIsDefinition: s.length === 1 && s[0].getLastUsages().length === 0,
        overwriteType: o.is(t.AssignmentStatement) ? sr : nr,
        overwriteValue: e.compareValues(e, s),
        usageText: S,
        overwrittenVar: s.map((F) => ({
          lineNum: F.getStartLineNumber(),
          block: F.getBlockId(),
          docIndex: F.getDocumentStartIndex(),
          forLoopDefinition: F.getParent().is(t.IteratorExpression) && F.getParent().getLoopVariables().filter((N) => N.getTextValue() === F.getTextValue()).length > 0
        }))
      }));
    }
  }
  return n;
}, /**
 * 
 * @param {String} varName 
 * @param {AssignmentExpression} assignmentExp 
 * @returns {Boolean}
 */
ma = function(e, n) {
  const s = n.getAssignedValues();
  for (const o of s)
    if (o.getExpressionsOfKind(e).length > 0)
      return !0;
  return !1;
}, /**
 * Helper method for rule finder.
 * @param {ExpressionNode | undefined} assignedValue 
 * @param {VariableExpression[]} lastUsages 
 * @returns {Set<String>}
 */
wa = function(e, n) {
  const s = /* @__PURE__ */ new Set();
  if (e !== void 0 && e.isOneOf([a.Literals, a.Types]))
    for (const o of n)
      if (o.getParent() !== void 0 && o.getParent().is(t.AssignmentStatement)) {
        const u = m(this, se, Bi).call(this, o);
        u !== void 0 && u.isOneOf([a.Literals, a.Types]) ? s.add(
          e.getTextValue() === u.getTextValue() ? ir : Nr
        ) : s.add(Ms);
      } else
        s.add(Ms);
  return s;
}, /**
 * Helper method for rule finder. Gets the value assigned to the variable in an assignment
 * @param {VariableExpression} variable 
 * @returns {ExpressionNode | undefined}
 */
Sa = function(e) {
  const n = e.getParent(), s = n.getIterable();
  if (s.is(t.BuiltInFunctionCall)) {
    const o = s.getFunctionExpression();
    if (o.is(t.RangeFunction)) {
      const u = s.getArguments();
      if (u.length === 1)
        return new Di("0", -1, -1, -1);
      if (u.length > 1)
        return u[0][0];
    } else if (o.is(t.EnumerateFunction)) {
      const u = n.getLoopVariables();
      if (u.length === 2 && u[0].getTextValue() === e.getTextValue())
        return new Di("0", -1, -1, -1);
    }
  }
}, /**
 * Helper method for rule finder. Gets the value assigned to the variable in an assignment
 * @param {VariableExpression} variable 
 * @returns {ExpressionNode | undefined}
 */
Bi = function(e) {
  const n = e.getParent();
  if (n === void 0) return;
  const s = n.getTargetVariables(), o = n.getAssignedValues();
  let u = -1;
  for (let h = 0; h < s.length; h++)
    if (s[h].getTextValue() === e.getTextValue()) {
      u = h;
      break;
    }
  if (u > -1 && u < o.length)
    return o[u];
};
var ds;
class ri extends Tn {
  /**
   * Creates a ModulePropertyExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(e, n, s, o, u, h) {
    super(e, n, s, o, u, h);
    /** @type {DataType} */
    I(this, ds);
  }
  //#region - overrides
  /**
   * @override
   * @throws Throws an error if calling code is attempting to change the data type of an attribute of a built-in module
   */
  setDataType(e) {
    if (this.is(t.PropertyName))
      super.setDataType(e);
    else
      throw new Error(`Cannot change the data type of an attribute of a built-in module. Attempted to change the data type to ${e.name}.`);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    return [];
  }
  //#endregion - overrides
  //#region - extension methods
  /**
   * Gets the data type that owns this property (e.g. the math module, a custom class).
   * @returns {DataType}
   */
  getOwnerType() {
    return c(this, ds);
  }
  /**
   * Sets the owner of this property
   * @param {DataType} ownerType 
   */
  setOwnerType(e) {
    y(this, ds, e);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return this.getEntity() === e.getEntity() && this.getTextValue() === e.getTextValue();
  }
  //#endregion - extension methods
}
ds = new WeakMap();
class Ia extends _e {
  /**
   * Creates a FunctionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   * @param {DataType} dataType Optional. The data type of the individual expression. NotParsed by default.
   */
  constructor(i, e, n, s, o, u, h = d.NotParsed) {
    super(i, e, n, s, o, u, h);
  }
  //#region - overrides
  /**
   * @override
   * @throws Throws an error because the text value of a function node should not change.
   */
  setTextValue(i) {
    throw new Error(`Cannot change the name of a function node. Attempted to change the name to ${i}.`);
  }
  /**
   * @inheritdoc
   * @override
   */
  isSubscriptable() {
    return _s(this.getDataType());
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(i) {
    return this.getEntity() === i.getEntity() && this.getTextValue() === i.getTextValue();
  }
  //#endregion - overrides
}
var Xe, hs, Ai;
class ba extends Ia {
  // Store the return statement expressions that determine the data type of the call
  /**
   * Creates a UserDefinedFunctionExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(e, n, s, o, u, h) {
    super(e, n, s, o, u, h, d.NotParsed);
    I(this, hs);
    /** @type {ExpressionNode[]} */
    I(this, Xe, []);
  }
  /**
   * @override
   */
  setDataType(e) {
    const n = c(this, Xe).map((s) => s.getDataType());
    super.setDataType(Kt(n));
  }
  // NEED TO ADD RETURN - CALL CONNECTIONS AT END - toGraph?
  toJSON() {
    const e = this.getReturnStatements(), n = this.getParent(), s = n !== void 0 && n.isOneOf([t.FunctionDefinitionStatement, t.MethodDefinitionStatement]) ? n.getParameters().length : -1, o = n !== void 0 && n.isOneOf([t.FunctionDefinitionStatement, t.MethodDefinitionStatement]) ? n.getOptionalParameterCount() : -1;
    return {
      name: this.getTextValue(),
      block: this.getBlockId(),
      callLineNumbers: Array.from(this.getObservers()).filter((u) => u.is(t.UserDefinedFunctionCall)).map((u) => u.getStartLineNumber()),
      hasReturn: e.length > 0,
      hasBranchWithoutReturn: c(this, Xe).length > e.length,
      numOptionalParameters: o,
      parameters: s > -1 ? n.getParameters().flatMap((u) => u).map((u) => u.getTextValue()) : [],
      returnDetail: e.map((u) => ({ line: u.getStartLineNumber(), dataType: u.getDataType().name })),
      returnTypes: e.length > 0 ? Array.from(new Set(e.map((u) => u.getDataType().name))) : ["none"]
    };
  }
  //#region - extensions
  /**
   * Extract the return expression from an array of statements
   * @param {Statement[]} statements 
   * @param {Boolean} addProxy Optional. Whether or not a blank return is needed
   */
  addReturns(e, n = !1) {
    for (const s of e)
      if (s.getFirstExpression().is(t.ReturnStatement)) {
        const o = s.getFirstExpression();
        c(this, Xe).push(o);
        for (const u of this.getObservers())
          u.is(t.UserDefinedFunctionCall) && (c(u.getFunctionExpression(), Xe).push(o), o.addConnection(u));
        o.addObserver(this);
      } else
        m(this, hs, Ai).call(this);
    n && m(this, hs, Ai).call(this), this.setDataType();
  }
  getReturnType() {
    const e = c(this, Xe).map((n) => n.getDataType());
    return Kt(e);
  }
  getReturnStatements() {
    return c(this, Xe).filter((e) => e.is(t.ReturnStatement));
  }
  //#endregion - extensions
}
Xe = new WeakMap(), hs = new WeakSet(), Ai = function() {
  const e = new Tn("proxy", t.VariableName, a.Identifiers, -1, -1, -1, !0);
  e.setDataType(d.None), c(this, Xe).push(e);
};
var hn;
class ou extends ba {
  constructor() {
    super(...arguments);
    /** @type {DataType} */
    I(this, hn, d.Class);
  }
  /**
   * Returns the data type that represents the containing class
   * @returns {DataType}
   */
  getContainingClass() {
    return c(this, hn);
  }
  /**
   * Sets the containing class of this method
   * @param {DataType} owner 
   */
  setContainingClass(e) {
    y(this, hn, e);
  }
  toJSON() {
    const e = super.toJSON();
    return e.containingClass = c(this, hn).name, this.getTextValue() === "__init__" && (e.hasReturn = !0, e.hasBranchWithoutReturn = !1, e.returnTypes = [e.containingClass]), e;
  }
}
hn = new WeakMap();
class au extends Ia {
  /**
   * Creates a FunctionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(i, e, n, s, o, u) {
    super(i, e, n, s, o, u, Wt.get(e));
  }
  //#region - overrides
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the data type should not be changed.
   */
  setDataType(i) {
    if (this.getEntity() !== t.FunctionName)
      throw new Error(`Cannot set the data type of a built-in function. Attempted to set the data type to ${i}`);
    super.setDataType(i);
  }
  //#endregion - overrides
}
var Hs, ya;
class lu extends _e {
  /**
   * Creates a TypeValueNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(e, n, s, o, u, h) {
    var i = (...Bd) => (super(...Bd), I(this, Hs), this);
    if (n === t.TrueType || n === t.FalseType)
      i(e, n, s, o, u, h, d.Bool);
    else if (n === t.NoneType)
      i(e, n, s, o, u, h, d.None);
    else
      throw new Error(`Not a valid type value: ${n.name}`);
    this.addRule(m(this, Hs, ya));
  }
  //#region - overrides
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the text value should not be changed.
   */
  setTextValue(e) {
    throw new Error(`The text value of a built-in function cannot be changed. Attempted to change the value to ${e}.`);
  }
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the data type should not be changed.
   */
  setDataType(e) {
    throw new Error(`Cannot set the data type of a built-in function. Attempted to set the data type to ${e}`);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return e.getEntity() === t.TrueType || e.getEntity() === t.FalseType || e.getEntity() === t.NoneType;
  }
}
Hs = new WeakSet(), //#endregion - overrides
/**
 * Rule function. Checks if the property is unused
 * @param {TypeValueExpression} exp 
 * @returns {Symptom[]}
 */
ya = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(b.UnusedValue, [e], 0, 0)), n;
};
class or extends _e {
  /**
   * Creates a TypeNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   * @param {DataType} dataType 
   */
  constructor(i, e, n, s, o, u, h) {
    super(i, e, n, s, o, u, h);
  }
  //#region - overrides
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the text value should not be changed.
   */
  setTextValue(i) {
    throw new Error(`The text value of a class or type cannot be changed. Attempted to change the value to ${i}.`);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(i) {
    return this.getEntity() === i.getEntity() && this.getTextValue() === i.getTextValue();
  }
  //#endregion - overrides
}
class cu extends or {
  /**
   * Creates a BuiltInTypeExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(i, e, n, s, o, u) {
    super(
      i,
      e,
      n,
      s,
      o,
      u,
      d.Unknown
      /*typeLookup(textValue)*/
    );
  }
  //#region - overrides
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the data type should not be changed.
   */
  setDataType(i) {
    throw new Error(`Cannot change the data type of a built-in type. Attempted to set the data type to ${i}.`);
  }
  //#endregion - overrides
}
class uu extends or {
  /**
   * Creates an ExceptionExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(i, e, n, s, o, u) {
    super(i, e, n, s, o, u, d.Exception);
  }
  //#region - overrides
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the data type should not be changed.
   */
  setDataType(i) {
    throw new Error(`Cannot change the data type of a built-in type. Attempted to set the data type to ${i}.`);
  }
  //#endregion - overrides
}
class du extends or {
  /**
   * Creates a BuiltInTypeExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(i, e, n, s, o, u) {
    super(i, e, n, s, o, u, d.Class);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(i) {
    return this.getEntity() === i.getEntity() && this.getTextValue() === i.getTextValue();
  }
}
var _, zs, Fa;
class ti extends X {
  // The elements in the compound type
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity The entity that describes the MultiPartExpression
   * @param {ExpressionEntity[][]} elements The elements in the compound type
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s, o) {
    const u = Ys(s);
    super(e, n, s, a.CompoundTypes, u);
    I(this, zs);
    /** @type {ExpressionNode[][]} */
    I(this, _);
    y(this, _, o);
    for (let h = 0; h < c(this, _).length; h++)
      if (s !== t.DictDefinition) {
        c(this, _)[h].length > 1 && (c(this, _)[h] = $.createTree(c(this, _)[h]));
        for (const p of c(this, _)[h])
          p.setParent(this), this.addConnection(p);
      } else
        for (let p = 0; p < c(this, _)[h].length; p++) {
          c(this, _)[h][p].length > 1 && (c(this, _)[h][p] = $.createTree(c(this, _)[h][p]));
          for (const w of c(this, _)[h][p])
            w.setParent(this), this.addConnection(w);
        }
    this.addRule(m(this, zs, Fa));
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    this.getChildren().length > 1;
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of c(this, _))
      for (let s of n)
        if (this.getEntity() !== t.DictDefinition)
          s.is(t.VariableName) ? e.push(s) : e = e.concat(s.getVariableExpressions());
        else
          for (let o of s)
            o.is(t.VariableName) ? e.push(o) : e = e.concat(o.getVariableExpressions());
    return e;
  }
  /**
   * @override
   */
  contains(e) {
    if (super.contains(e))
      return !0;
    for (let n of c(this, _))
      for (let s of n)
        if (this.getEntity() !== t.DictDefinition) {
          if (s.contains(e))
            return !0;
        } else
          for (let o of s)
            if (o.contains(e))
              return !0;
    return !1;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of c(this, _))
      for (let o of s)
        if (this.getEntity() !== t.DictDefinition)
          o.is(e) ? n.push(o) : n = n.concat(o.getExpressionsOfKind(e));
        else
          for (let u of o)
            u.is(e) ? n.push(u) : n = n.concat(u.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of c(this, _))
        for (const o of s)
          if (this.getEntity() !== t.DictDefinition) {
            if (o.isOneOf(e)) return o;
            if (n = o.getFirstExpressionOf(e), n !== void 0) return n;
          } else
            for (const u of o) {
              if (u.isOneOf(e)) return u;
              if (n = u.getFirstExpressionOf(e), n !== void 0) return n;
            }
    return n;
  }
  /**
   * @inheritdoc
   * @override 
   */
  setDataType(e) {
    throw new Error("Can't update the type of a compound expression");
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of c(this, _))
      for (const n of e)
        if (this.getEntity() !== t.DictDefinition)
          n.checkForSymptoms();
        else
          for (const s of n)
            s.checkForSymptoms();
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const item of this.#elements) {
  //         for (const e of item) {
  //             if (this.getEntity() !== ExpressionEntity.DictDefinition) {
  //                 e.setBlockId(id);
  //             } else {
  //                 for (const keyValue of e) {
  //                     keyValue.setBlockId();
  //                 }
  //             }
  //         }
  //     }*/
  // }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return this.getEntity() === e.getEntity();
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return this.getEntity() !== t.DictDefinition ? [...super.getAllNestedExpressions(), ...c(this, _).flatMap((e) => e.flatMap((n) => n.getAllNestedExpressions()))] : [...super.getAllNestedExpressions(), ...c(this, _).flatMap((e) => e.flatMap((n) => n.flatMap((s) => s.getAllNestedExpressions())))];
  }
  toJSON() {
    const e = super.toJSON();
    try {
      e.elements = c(this, _).map((n) => n.map((s) => s.toJSON()));
    } catch {
      e.elements = c(this, _).map((s) => s.map((o) => o.map((u) => u.toJSON())));
    }
    return e;
  }
  //#endregion - overrides
  //#region - extensions
  /**
   * Gets the elements in the compound expression
   * @returns {ExpressionNode[][]}
   */
  getElements() {
    return c(this, _);
  }
  //#endregion - extensions
}
_ = new WeakMap(), zs = new WeakSet(), /**
 * Rule function. Checks if the property is unused
 * @param {CompoundTypeExpression} exp 
 * @returns {Symptom[]}
 */
Fa = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(b.UnusedValue, [e], 0, 0)), n;
};
var re, Bn, Na, Ta;
class et extends X {
  /**
   * Creates a new BlockDefinitionStatement
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s) {
    super(e, n, s, a.BlockDefinitionStatement, d.NA);
    I(this, Bn);
    /** @type {ExpressionNode[]} */
    I(this, re, []);
    if (n.length > 1) {
      const o = m(this, Bn, Na).call(this);
      let u = $.createTree(n.slice(1, o));
      if (s === t.ForDefinitionStatement && u.length > 0)
        if (u[0].is(t.IteratorExpression))
          y(this, re, u);
        else if (u[0].is(t.ComparisonExpression)) {
          u[0] = u[0].convertToIterator(), y(this, re, [u[0]]);
          const h = u.slice(1).filter((p) => !p.is(t.Colon));
          h.length > 0 && y(this, re, c(this, re).concat(h));
        } else
          u = [new ar(e, u)], y(this, re, u);
      else s === t.WithDefinitionStatement || s === t.ExceptDefinitionStatement ? u.length === 3 && u[1].is(t.AsKeyword) && u[2].is(t.VariableName) && y(this, re, [new Ca(e, u)]) : y(this, re, u);
      for (const h of u)
        h.setParent(this), this.addConnection(h);
    }
    s === t.WhileDefinitionStatement && this.addRule(m(this, Bn, Ta));
  }
  //#region - overrides
  /**
   * @override
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length >= 2 ? e[0].is(a.BlockDefinitions) && e[e.length - 1].is(t.Colon) : !1;
  }
  /**
   * @override
   * @inheritdoc 
   */
  setDataType(e) {
    throw new Error("Can't update the type of a block definition");
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of c(this, re))
      n.is(t.VariableName) ? e.push(n) : e = e.concat(n.getVariableExpressions());
    return e;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of c(this, re))
      s.is(e) ? n.push(s) : n = n.concat(s.getExpressionsOfKind(e));
    return n;
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const c of this.#condition) {
  //         c.setBlockId(id);
  //     }*/
  // }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of c(this, re)) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of c(this, re))
      e.checkForSymptoms();
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...c(this, re).flatMap((n) => n.getAllNestedExpressions())];
  }
  getCondition() {
    return c(this, re);
  }
  toJSON() {
    const e = super.toJSON();
    return e.keyword = this.getChildren()[0].getTextValue(), e.condition = c(this, re).map((n) => n.toJSON()), e;
  }
  //#endregion - overrides
  getCondition() {
    return c(this, re);
  }
  /** Gets the entity of the defining keyword */
  getBlockEntity() {
    return this.getChildren()[0].getEntity();
  }
}
re = new WeakMap(), Bn = new WeakSet(), Na = function() {
  const e = this.getChildren();
  for (let n = e.length - 1; n >= 0; n--)
    if (e[n].is(t.Colon))
      return n;
  return e.length;
}, /**
 * Rule function. Checks if this is a while True
 * @param {BlockDefinitionStatement} blockDef 
 * @returns {Symptom[]}
 */
Ta = function(e) {
  const n = [], s = e.getChildren();
  if (e.is(t.WhileDefinitionStatement)) {
    const o = c(e, re);
    oe(s, !0), o.length === 1 && (o[0].is(t.TrueType) || o[0].is(t.GroupStatement) && o[0].getContents().length === 1 && o[0].getContents()[0].is(t.TrueType)) && n.push(x.createStatementSymptom(b.WhileTrue, s, 0, s.length - 1));
  }
  return n;
};
var z, pe, Z, Oa, Ma, xa, ki, Da, Pi, Li, Ba, Aa, ka;
class Ca extends X {
  /**
   * Creates a new AssignmentExpression
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.AssignmentStatement, a.Assignment, d.NotParsed);
    I(this, Z);
    /** @type {ExpressionNode[]} */
    I(this, z, []);
    /** @type {ExpressionNode[]} */
    I(this, pe, []);
    m(this, Z, Oa).call(this), this.addRules([m(this, Z, ka), m(this, Z, Ba), m(this, Z, Aa)]);
  }
  //#region - overrides
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of c(this, pe))
      e = e.concat(n.getVariableExpressions());
    for (let n of c(this, z))
      e = e.concat(n.getVariableExpressions());
    return e;
  }
  setDataType(e) {
    e = Kt(c(this, z).map((n) => n.getDataType())), super.setDataType(e);
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const v of this.#values) {
  //         v.setBlockId(id);
  //     }*/
  // }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...c(this, z).flatMap((n) => n.getAllNestedExpressions()), ...c(this, pe).flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.targets = c(this, z).map((n) => n.toJSON()), e.values = c(this, pe).map((n) => n.toJSON()), e;
  }
  //#endregion - overrides
  //#region - extension
  /**
   * The variables on the left side of the assignment.
   * @returns {ExpressionNode[]}
   */
  getTargetVariables() {
    return c(this, z);
  }
  /**
   * The values on the right side of the assignment.
   * @returns {ExpressionNode[]}
   */
  getAssignedValues() {
    return c(this, pe);
  }
  //#endregion - extension
}
z = new WeakMap(), pe = new WeakMap(), Z = new WeakSet(), /**
 * Helper method. Populates the #variables and #values arrays, sets the data types of
 * each variable and adds the variables as observers on the values as appropriate
 */
Oa = function() {
  const e = this.getChildren();
  Qt(e, t.AssignmentOperator) > 0 ? m(this, Z, xa).call(this, e) : Qt(e, t.AsKeyword) > 0 && m(this, Z, Ma).call(this, e);
}, Ma = function(e) {
  const n = $.split(e, t.AsKeyword), s = [];
  for (let o = 0; o < n.length; o++)
    s.push($.split(n[o], t.Comma));
  if (n.length === 2 && s.length === 2) {
    for (let o of s[1])
      o[0].is(t.VariableName) ? o[0].setAssignedOrChanged() : o[0].is(t.PropertyCallExpression) && o[0].getProperty().is(t.PropertyName) && o[0].getProperty().setAssignedOrChanged(), c(this, z).push(o[0]);
    for (let o of s[0])
      c(this, pe).push(o[0]);
  }
  c(this, z).length === c(this, pe).length ? m(this, Z, ki).call(this) : c(this, z).length > c(this, pe).length ? m(this, Z, Pi).call(this) : m(this, Z, Li).call(this);
}, xa = function(e) {
  const n = $.split(e, t.AssignmentOperator), s = [];
  for (let o = 0; o < n.length; o++) {
    const u = $.split(n[o], t.Comma);
    s.push(u);
  }
  if (n.length === 2 && s.length === 2) {
    for (let o of s[0])
      o[0].is(t.VariableName) ? o[0].setAssignedOrChanged() : o[0].is(t.SubscriptedExpression) && o[0].getChildren()[0].is(t.VariableName) ? o[0].getChildren()[0].setAssignedOrChanged() : o[0].is(t.PropertyCallExpression) && o[0].getProperty().is(t.PropertyName) && o[0].getProperty().setAssignedOrChanged(), c(this, z).push(o[0]);
    for (let o of s[1])
      c(this, pe).push(o[0]);
  }
  c(this, z).length === c(this, pe).length ? m(this, Z, ki).call(this) : c(this, z).length > c(this, pe).length ? m(this, Z, Pi).call(this) : m(this, Z, Li).call(this);
  for (const o of c(this, z))
    o.addObserver(this), this.addConnection(o);
  this.setDataType(Kt(c(this, z).map((o) => o.getDataType())));
}, ki = function() {
  for (let e = 0; e < c(this, z).length; e++)
    c(this, z)[e].isOneOf([t.VariableName, t.SubscriptedExpression, t.PropertyCallExpression]) ? (c(this, z)[e].setDataType(c(this, pe)[e].getDataType()), c(this, pe)[e].addObserver(c(this, z)[e]), c(this, pe)[e].addConnection(c(this, z)[e])) : c(this, z)[e].is(t.TupleDefinition) ? m(this, Z, Da).call(this, c(this, z)[e]) : c(this, z)[e].is(a.SpecialVariables) || this.setDataType(d.Invalid);
}, /**
 * When the variable assigned is actually a tuple of variables, assign each variable unknown
 * @param {CompoundTypeExpression} tuple 
 */
Da = function(e) {
  for (let n of e.getElements())
    n[0].isOneOf([t.VariableName, t.SubscriptedExpression]) && n[0].setDataType(d.Unknown);
}, /**
 * If there are more assigned variables than values, assume the value is a tuple and set each variable to 
 * Unknown. No need to add as observers.
 */
Pi = function() {
  for (let e of c(this, z))
    e.isOneOf([t.VariableName, t.SubscriptedExpression]) ? e.setDataType(d.Unknown) : console.log("stop");
}, /**
 * If there are more values than variables, assign the value of tuple. No need to set observers.
 */
Li = function() {
  for (let e of c(this, z))
    e.isOneOf([t.VariableName, t.SubscriptedExpression]) ? e.setDataType(d.Tuple) : console.log("stop");
}, /** 
 * Rule function. Checks if the expression calculates with something with no value and if so,
 * adds a new Symptom object.
 * @param {AssignmentExpression} exp
 * @returns {Symptom[]}
 */
Ba = function(e) {
  const n = [];
  for (const s of e.getTargetVariables()) {
    const o = We(s.getTextValue()).category;
    s.is(t.VariableName) && s.getLastUsages().length === 0 && o === a.BuiltInFunctions ? n.push(x.createStatementSymptom(
      b.VariableWithSameNameAsFunction,
      [s],
      0,
      0,
      {
        funcType: vn,
        varIsParameter: s.isParameter()
      }
    )) : (o === a.BlockDefinitions || o === a.LogicalOperators || o === a.Types || o === a.OtherKeywords) && s.getTextValue() !== "f" && s.getTextValue() !== "r" && n.push(x.createStatementSymptom(b.ReservedWordAssigned, [s], 0, 0));
  }
  return n;
}, /**
 * 
 * @param {AssignmentExpression} exp 
 * @returns {Symptom[]}
 */
Aa = function(e) {
  const n = [], s = e.getAssignedValues();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(x.createStatementSymptom(b.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : de,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : de
    }));
  return n;
}, /** 
 * Rule function. Checks if the expression calculates with something with no value and if so,
 * adds a new Symptom object.
 * @param {AssignmentExpression} exp
 * @returns {Symptom[]}
 */
ka = function(e) {
  const n = [], u = e.getAssignedValues().flatMap((h) => h.is(t.GroupStatement) ? h.getContents() : h).filter((h) => qt(h) || h.getDataType() === d.None && !h.isOneOf([t.NoneType, t.VariableName]));
  return u.length > 0 && n.push(...u.map((h) => x.createStatementSymptom(
    b.AssignedNone,
    [h],
    0,
    0,
    {
      expression: h,
      usage: sr,
      target: c(e, z)[0].getTextValue()
    }
  ))), n;
};
var ve, De, fn, it, Ue, Pa, La, Va, va, Ra;
class hu extends X {
  // Should store the plain value, not the placeholder calculation
  /**
   * Creates a new ChangeExpression
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.ChangeStatement, a.Assignment, d.NA);
    I(this, Ue);
    /** @type {ExpressionNode[]} */
    I(this, ve, []);
    // should only contain one if valid
    /** @type {Number} */
    I(this, De, -1);
    /** @type {ExpressionNode[]} */
    I(this, fn, []);
    // Should store calculations rather than plain value
    /** @type {ExpressionNode} */
    I(this, it);
    m(this, Ue, Pa).call(this), this.addRule(m(this, Ue, Ra));
  }
  //#region - overrides
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of c(this, fn))
      e = e.concat(n.getVariableExpressions());
    for (let n of c(this, ve))
      e = e.concat(n.getVariableExpressions());
    return e;
  }
  /**
   * Gets the value assigned. May be undefined if the expression is incomplete
   * @returns {ExpressionNode | undefined}
   */
  getAssignedValue() {
    return c(this, it);
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     //this.#assignedValue.setBlockId(id);
  // }
  //#endregion - overrides
  /**
   * The variables on the left side of the assignment.
   * @returns {ExpressionNode[]}
   */
  getTargetVariables() {
    return c(this, ve);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...c(this, ve).flatMap((n) => n.getAllNestedExpressions()), ...c(this, it).getAllNestedExpressions()];
  }
  toJSON() {
    const e = super.toJSON();
    return e.target = c(this, ve)[0].toJSON(), e.operator = this.getChildren()[c(this, De)].toJSON(), e.changeValue = c(this, it).toJSON(), e;
  }
}
ve = new WeakMap(), De = new WeakMap(), fn = new WeakMap(), it = new WeakMap(), Ue = new WeakSet(), Pa = function() {
  m(this, Ue, va).call(this);
  const e = this.getChildren();
  if (c(this, De) === 1 && e.length === 3)
    e[0].is(t.VariableName) ? e[0].setAssignedOrChanged() : e[0].is(t.SubscriptedExpression) && e[0].getChildren()[0].is(t.VariableName) ? e[0].getChildren()[0].setAssignedOrChanged() : e[0].is(t.PropertyCallExpression) && e[0].getProperty().is(t.PropertyName) && e[0].getProperty().setAssignedOrChanged(), c(this, ve).push(e[0]), y(this, it, e[2]), this.addConnection(e[0]), e[2].addConnection(e[0]), e[0].isOneOf([t.VariableName, t.SubscriptedExpression]) ? m(this, Ue, La).call(this) : this.setDataType(d.Invalid);
  else if (c(this, De) === 1 && e.length > 3 && Hn(e, t.Comma)) {
    this.setDataType(d.Tuple);
    const n = e.slice(2), s = $.split(n, t.Comma), o = new ti(oe(n), n, t.TupleDefinition, s);
    for (o.setParent(this); e.length > 2; )
      e.pop();
    e.push(o), c(this, ve).push(e[0]), y(this, it, e[2]);
  } else
    this.setDataType(d.Invalid), y(this, it, e[c(this, De) - 1]), y(this, ve, c(this, De) > -1 ? e.slice(0, c(this, De)) : []), y(this, fn, c(this, De) > -1 ? e.slice(c(this, De) + 1) : []);
}, La = function() {
  const e = m(this, Ue, Va).call(this), n = c(this, ve)[0], s = [
    new ha(e.entity.name, e.entity, e.category, -1, -1),
    this.getChildren()[2]
  ];
  if (n.is(t.VariableName)) {
    const u = new Tn(n.getTextValue(), n.getEntity(), n.getCategory(), -1, -1, -1, !0);
    s.unshift(u);
  } else {
    const u = n.getChildren(), h = new vs("Placeholder", [u[0], u[1]]);
    s.unshift(h);
  }
  const o = new Rs("Placeholder", s);
  c(this, fn).push(o), n.setDataType(o.getDataType()), o.addObserver(n);
}, /**
 * Helper method. Finds the ExpressionEntity and ExpressionCategory of the operator without the =
 * @returns {Object}
 */
Va = function() {
  const n = this.getChildren()[c(this, De)].getTextValue().replace("=", "");
  return We(n);
}, /**
 * Finds the index of the change operator in the children and sets the #operatorIndex
 */
va = function() {
  const e = this.getChildren();
  for (let n = 0; n < e.length; n++)
    if (e[n].isChangeOperator()) {
      y(this, De, n);
      break;
    }
}, /** 
 * Rule function. Checks if the expression calculates with something with no value and if so,
 * adds a new Symptom object.
 * @param {ChangeExpression} exp
 * @returns {Symptom[]}
 */
Ra = function(e) {
  const n = [], s = e.getAssignedValue();
  return (s.getDataType() === d.None && !s.isOneOf([t.NoneType, t.VariableName]) || qt(s)) && n.push(x.createStatementSymptom(
    b.AssignedNone,
    [s],
    0,
    0,
    {
      expression: s,
      usage: sr,
      target: c(e, ve)[0].getTextValue()
    }
  )), n;
};
var ee, An, Ua, Ea;
class fu extends X {
  // The contents of the group (everything between the parentheses)
  /**
   * Creates a new GroupElement
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.GroupStatement, a.Group, d.NotParsed);
    I(this, An);
    /** @type {ExpressionNode[]} */
    I(this, ee);
    if (n.length > 2) {
      const s = n.slice(1, n.length - 1);
      s.length > 1 ? y(this, ee, $.createTree(n.slice(1, n.length - 1))) : y(this, ee, [s[0]]);
    } else
      y(this, ee, []);
    m(this, An, Ua).call(this), this.setDataType(c(this, ee).length === 1 ? c(this, ee)[0].getDataType() : d.Unknown), c(this, ee).length === 1 ? c(this, ee)[0].addObserver(this) : this.setDataType(d.Invalid), this.addRule(m(this, An, Ea));
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const c of this.#contents) {
  //         c.setBlockId(id);
  //     }*/
  // }
  //#region - extension
  /**
   * Gets the contents of the group.
   * @returns {ExpressionNode[]}
   */
  getContents() {
    return c(this, ee);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of c(this, ee))
      e = e.concat(n.getVariableExpressions());
    return e;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of c(this, ee))
      s.is(e) ? n.push(s) : n = n.concat(s.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of c(this, ee)) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of c(this, ee))
      e.checkForSymptoms();
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    const n = this.getContents();
    for (const s of n)
      if (!s.matchesPattern(e)) return !1;
    return !0;
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...c(this, ee).flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.contents = c(this, ee).map((n) => n.toJSON()), e;
  }
}
ee = new WeakMap(), An = new WeakSet(), Ua = function() {
  for (let e = 0; e < c(this, ee).length; e++)
    e < c(this, ee).length - 1 && c(this, ee)[e].addConnection(c(this, ee)[e + 1]), c(this, ee)[e].setParent(this), this.addConnection(c(this, ee)[e]);
}, //#endregion - extension
/**
 * 
 * @param {GroupElement} exp 
 * @returns {Symptom[]}
 */
Ea = function(e) {
  const n = [], s = e.getContents();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(x.createStatementSymptom(b.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : de,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : de
    }));
  return n;
};
var Ne;
class Ga extends X {
  // An array storing each part of the slice i.e. the expressions between :
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionNode[][]} indices Optional. The individual indices in the slice.
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s = []) {
    super(e, n, t.Slice, a.Other, d.NA);
    /** @type {ExpressionNode[][]} */
    I(this, Ne);
    y(this, Ne, s);
    for (let o = 0; o < c(this, Ne).length; o++) {
      c(this, Ne)[o].length > 1 && (c(this, Ne)[o] = $.createTree(c(this, Ne)[o]));
      for (const u of c(this, Ne)[o])
        u.setParent(this), this.addConnection(u);
    }
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length >= 4 && e[0].is(t.OpenSquareBracket) && e[e.length - 1].is(t.CloseSquareBracket) && Hn(e, t.Colon);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of c(this, Ne))
      for (let s of n)
        e = e.concat(s.getVariableExpressions());
    return e;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of c(this, Ne))
      for (const n of e)
        n.checkForSymptoms();
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return this.getEntity() === e.getEntity();
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const item of this.#indices) {
  //         for (const i of item) {
  //             i.setBlockId(id);
  //         }
  //     }*/
  // }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...c(this, Ne).flatMap((n) => n.flatMap((s) => s.getAllNestedExpressions()))];
  }
  toJSON() {
    const e = super.toJSON();
    return e.indices = c(this, Ne).map((n) => n.map((s) => s.toJSON())), e;
  }
  //#endregion - overrides
  //#region - extension
  /**
   * Gets the indices that make up the slice.
   * @returns {ExpressionNode[][]}
   */
  getIndices() {
    return c(this, Ne);
  }
  //#endregion - extension
}
Ne = new WeakMap();
var rt;
class $a extends X {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.IndexKey, a.Other, d.NA);
    /** @type {ExpressionNode[]} */
    I(this, rt, []);
    n.length > 2 && y(this, rt, $.createTree(n.slice(1, n.length - 1)));
    for (const s of c(this, rt))
      s.setParent(this), this.addConnection(s);
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length >= 3 && e[0].is(t.OpenSquareBracket) && e[e.length - 1].is(t.CloseSquareBracket);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of c(this, rt))
      e = e.concat(n.getVariableExpressions());
    return e;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of c(this, rt))
      e.checkForSymptoms();
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return this.getEntity() === e.getEntity();
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const i of this.#contents) {
  //         i.setBlockId(id)
  //     }*/
  // }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...c(this, rt).flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.index = c(this, rt).map((n) => n.toJSON()), e;
  }
  //#endregion - overrides
}
rt = new WeakMap();
var kn, Ja, Ka, fs, Vi;
const Kn = class Kn extends X {
  /**
   * Creates a new SubscriptedElement - an expression followed by an index, key, or slice
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain two nodex
   */
  constructor(e, n) {
    var o;
    let s = m(o = Kn, fs, Vi).call(o, n);
    super(e, n, t.SubscriptedExpression, a.MultipartValue, s);
    I(this, kn);
    n[0].addObserver(this);
    for (const u of n)
      this.addConnection(u);
    this.addRules([m(this, kn, Ka), m(this, kn, Ja)]);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    if (this.getEntity() !== e.getEntity())
      return !1;
    const n = this.getChildren(), s = e.getChildren();
    return n.length > 0 && s.length > 0 && n[0].matchesPattern(s[0]);
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length === 2 && e[1].isOneOf(t.IndexKey, t.Slice);
  }
  /**
   * @override
   */
  setDataType(e) {
    var s;
    const n = m(s = Kn, fs, Vi).call(s, this.getChildren());
    super.setDataType(n);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.nodes = this.getChildren().map((n) => n.toJSON()), e;
  }
  //#endregion - extensions
};
kn = new WeakSet(), /**
 * Rule function. Checks if the property is unused
 * @param {SubscriptedElement} exp 
 * @returns {Symptom[]}
 */
Ja = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(b.UnusedValue, [e], 0, 0)), n;
}, /** 
 * Rule function. Checks if the subscripted element is not subscriptable and if so,
 * adds a new Symptom object.
 * @param {SubscriptedElement} exp
 * @returns {Symptom[]}
 */
Ka = function(e) {
  const n = [], s = e.getChildren();
  return s.length > 0 && !_s(s[0].getDataType()) && n.push(x.createStatementSymptom(
    b.SubscriptedNonSubscriptable,
    s,
    0,
    s.length - 1,
    {
      isUndefined: s[0].getDataType() === d.Undefined,
      subscriptedType: s[0].getDataType(),
      varName: s[0].getTextValue()
    }
  )), n;
}, fs = new WeakSet(), Vi = function(e) {
  if (e.length !== 2)
    return d.Unknown;
  if (e[0].getDataType() === d.String)
    return d.String;
  if (e[1].is(t.Slice)) {
    const n = e[0].getDataType();
    return n === d.NotParsed || n === d.Unknown || n === d.List || n === d.Tuple || n === d.String ? n : d.Invalid;
  }
  return d.Unknown;
}, I(Kn, fs);
let vs = Kn;
var Ee, Wa, Ze, vi, Ri, qa, ja, Ha, za, Qa;
const Ct = class Ct extends X {
  /**
   * Creates a new CalculatedExpression
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain exactly three elements
   */
  constructor(e, n) {
    var o, u;
    let s = n.length === 3 ? m(o = Ct, Ze, vi).call(o, ...n) : n.length === 2 ? m(u = Ct, Ze, Ri).call(u, n[1]) : d.Unknown;
    super(e, n, t.CalculatedExpression, a.MultipartValue, s);
    I(this, Ee);
    n.length === 3 ? (n[0] !== void 0 && n[0].addObserver(this), n[2] !== void 0 && n[2].addObserver(this)) : n.length > 0 && n[1] !== void 0 && n[1].addObserver(this), m(this, Ee, Wa).call(this), this.addRules([m(this, Ee, Qa), m(this, Ee, za), m(this, Ee, Ha), m(this, Ee, ja)]);
  }
  //#region - overrides
  /**
   * @override
   */
  setDataType(e) {
    var s, o;
    const n = this.getChildren();
    e = n.length === 3 ? m(s = Ct, Ze, vi).call(s, ...n) : m(o = Ct, Ze, Ri).call(o, n[1]), super.setDataType(e);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    if (this.getEntity() !== e.getEntity()) return !1;
    const n = this.getChildren(), s = e.getChildren();
    if (n.length !== s.length) return !1;
    const o = /* @__PURE__ */ new Map();
    for (const u of n) {
      let h = !1;
      for (const p of s)
        if (u.matchesPattern(p)) {
          h = !0;
          break;
        }
      if (!h && !u.is(t.VariableName))
        return !1;
      u.is(t.VariableName) && o.set(u.getTextValue(), h);
    }
    return o.size === 0 ? !0 : Array.from(o.values()).filter((u) => u === !0).length > 0;
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.nodes = this.getChildren().map((n) => n.toJSON()), e;
  }
  //#endregion - extensions
};
Ee = new WeakSet(), Wa = function() {
  const e = this.getChildren();
  for (let n = 0; n < e.length; n++)
    this.addConnection(e[n]), n < e.length - 1 && e[n].addConnection(e[n + 1]);
}, Ze = new WeakSet(), vi = function(e, n, s) {
  const o = e.getDataType(), u = s.getDataType();
  return e.is(t.StringLiteral) && n.is(t.ModulusOperator) ? d.String : o === d.NotParsed || u === d.NotParsed ? d.NotParsed : o === d.Undefined && e.is(t.VariableName) && e.isProxy() || u === d.Undefined && s.is(t.VariableName) && s.isProxy() ? d.Undefined : o === d.Unknown || u === d.Unknown ? d.Unknown : o === d.Invalid || u === d.Invalid || o === d.NA || u === d.NA ? d.Invalid : e.isNumeric() && s.isNumeric() ? m(this, Ze, qa).call(this, e, n, s) : n.isOneOf([t.ExponentOperator, t.DivideOperator, t.IntDivideOperator]) ? d.Invalid : n.is(t.MultiplyOperator) ? e.isNonFloatNumeric() && (u === d.String || u === d.List || u === d.Tuple) ? u : s.isNonFloatNumeric() && (o === d.String || o === d.List || o === d.Tuple) ? o : d.Invalid : n.is(t.ModulusOperator) ? o === d.String ? d.String : d.Invalid : n.is(t.AddOperator) ? o === u && (o === d.String || o === d.List || o === d.Tuple) || o === d.List && (u === d.String || u === d.Dict || u === d.Set || u === d.Tuple) ? o : d.Invalid : n.is(t.SubtractOperator) && o === d.Set && o === u ? o : d.Invalid;
}, Ri = function(e) {
  const n = e.getDataType();
  return n === d.Float || n === d.Int || n === d.Number || n === d.NotParsed || n === d.Unknown ? n : n === d.Bool ? d.Int : d.Invalid;
}, qa = function(e, n, s) {
  return n.is(t.DivideOperator) ? d.Float : e.getDataType() === s.getDataType() && e.getDataType() !== d.Bool ? e.getDataType() : e.isIntLike() && s.isIntLike() ? d.Int : e.getDataType() === d.Float || s.getDataType() === d.Float ? d.Float : d.Number;
}, /**
 * Rule function. Checks if the property is unused
 * @param {CalculatedExpression} exp 
 * @returns {Symptom[]}
 */
ja = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(b.UnusedValue, [e], 0, 0)), n;
}, /**
 * 
 * @param {CalculatedExpression} exp 
 * @returns {Symptom[]}
 */
Ha = function(e) {
  const n = [], s = e.getChildren();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(x.createStatementSymptom(b.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : de,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : de
    }));
  return n;
}, /** 
 * Rule function. Checks if the expression is an invalid calculation and if so,
 * adds a new Symptom object.
 * @param {CalculatedExpression} calc
 * @returns {Symptom[]}
 */
za = function(e) {
  const n = [], s = e.getChildren();
  return e.getDataType() === d.Invalid && s.filter((o) => o.getDataType() === d.Undefined || o.getDataType() === d.Invalid).length === 0 && n.push(x.createStatementSymptom(b.TypeErrorInvalid, s, 0, s.length - 1, {
    parts: s.map((o) => o.getDataType() === d.NA ? o.getTextValue() : o.getDataType().name)
  })), n;
}, /** 
 * Rule function. Checks if the expression calculates with something with no value and if so,
 * adds a new Symptom object.
 * @param {CalculatedExpression} exp
 * @returns {Symptom[]}
 */
Qa = function(e) {
  const n = [], u = e.getChildren().flatMap((h) => h.is(t.GroupStatement) ? h.getContents() : h).filter((h) => qt(h) || h.getDataType() === d.None && !h.isOneOf([t.NoneType, t.VariableName]));
  return u.length > 0 && n.push(...u.map((h) => x.createStatementSymptom(
    b.AssignedNone,
    [h],
    0,
    0,
    {
      expression: h,
      usage: uc
    }
  ))), n;
}, I(Ct, Ze);
let Rs = Ct;
var Ge, Xa, gs, Ei, Za, Ya, _a, el;
const Wn = class Wn extends X {
  /**
   * Creates a new ComparisonExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain exactly three elements
   */
  constructor(e, n) {
    var o;
    let s = n.length === 3 ? m(o = Wn, gs, Ei).call(o, ...n) : d.Unknown;
    super(e, n, t.ComparisonExpression, a.MultipartValue, s);
    I(this, Ge);
    n.length === 3 && (n[0].addObserver(this), n[2].addObserver(this)), m(this, Ge, Xa).call(this), this.addRules([m(this, Ge, el), m(this, Ge, _a), m(this, Ge, Ya), m(this, Ge, Za)]);
  }
  //#region - overrides
  /**
   * @override 
   */
  setDataType(e) {
    var s;
    const n = m(s = Wn, gs, Ei).call(s, ...this.getChildren());
    n !== this.getDataType() && super.setDataType(n);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    if (this.getEntity() !== e.getEntity()) return !1;
    const n = this.getChildren(), s = e.getChildren();
    if (n.length !== s.length) return !1;
    const o = /* @__PURE__ */ new Map();
    for (let u = 0; u < n.length; u++) {
      if (n[u].isOneOf([t.InKeyword, t.NotInKeyword])) {
        const p = n[u].is(t.InKeyword) ? t.NotInKeyword : t.InKeyword;
        for (let w = 0; w < s.length; w++)
          if (s[w].is(p))
            return u > 0 && u < n.length - 1 && w > 0 && w < s.length - 1 ? n[u - 1].matchesPattern(s[w - 1]) && n[u + 1].matchesPattern(s[w + 1]) : !1;
        return !1;
      }
      let h = !1;
      for (const p of s)
        if (n[u].matchesPattern(p)) {
          h = !0;
          break;
        }
      if (!h && !n[u].isOneOf([t.VariableName, t.BuiltInFunctionCall, t.UserDefinedFunctionCall, t.SubscriptedExpression]))
        return !1;
      n[u].isOneOf([t.VariableName, t.BuiltInFunctionCall, t.UserDefinedFunctionCall, t.SubscriptedExpression]) && o.set(n[u].getTextValue(), h);
    }
    return o.size === 0 ? !1 : Array.from(o.values()).filter((u) => u === !0).length > 0;
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.nodes = this.getChildren().map((n) => n.toJSON()), e;
  }
  //#endregion - overrides
  //#region - extensions
  convertToIterator() {
    const e = this.getChildren();
    return e.length === 3 && (e[0].removeObserver(this), e[2].removeObserver(this)), new ar(this.getTextValue(), e);
  }
  //#endregion - extensions
};
Ge = new WeakSet(), Xa = function() {
  const e = this.getChildren();
  for (let n = 0; n < e.length; n++)
    this.addConnection(e[n]), n < e.length - 1 && e[n].addConnection(e[n + 1]);
}, gs = new WeakSet(), Ei = function(e, n, s) {
  const o = e.getDataType(), u = s.getDataType();
  return n.isOneOf([t.EqualOperator, t.NotEqualOperator, t.IsKeyword, t.IsNotKeyword]) ? d.Bool : n.isOneOf([t.InKeyword, t.NotInKeyword]) ? u === d.String && (o === d.String || o === d.Unknown || o === d.NotParsed) || u === d.List || u === d.Tuple || u === d.Set || u === d.Dict || u === d.Unknown ? d.Bool : u === d.NotParsed ? d.NotParsed : d.Invalid : o === d.NotParsed || u === d.NotParsed ? d.NotParsed : o === d.None || u === d.None ? d.Invalid : o === d.Unknown || u === d.Unknown || e.isNumeric() && s.isNumeric() || o === u ? d.Bool : d.Invalid;
}, /**
 * Rule function. Checks if the property is unused
 * @param {ComparisonExpression} exp 
 * @returns {Symptom[]}
 */
Za = function(e) {
  const n = [], s = e.getChildren();
  return !(s[0] !== void 0 && s[0].is(t.BuiltInFunctionCall) && s[0].getFunctionExpression().is(t.AssertFunction)) && (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(b.UnusedValue, [e], 0, 0)), n;
}, /**
 * 
 * @param {ComparisonExpression} exp 
 * @returns {Symptom[]}
 */
Ya = function(e) {
  const n = [], s = e.getChildren();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(x.createStatementSymptom(b.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : de,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : de
    }));
  return n;
}, /**
 * Helper method. Checks if the expression at index i indicates the CompareBoolLiteral symptom.
 * @param {ComparisonExpression} comparison 
 * @returns {Symptom[]}
 */
_a = function(e) {
  const n = [], s = e.getChildren();
  return s.length === 3 && s[1].isOneOf([t.EqualOperator, t.IsKeyword]) && s[2].isOneOf([t.TrueType, t.FalseType]) && n.push(x.createStatementSymptom(
    b.CompareBoolLiteral,
    s,
    0,
    s.length - 1,
    {
      boolValue: s[0].getTextValue(),
      operator: s[1].getTextValue(),
      boolLiteral: s[2].getTextValue(),
      usedIn: e.getContextOfUse()
    }
  )), n;
}, /** 
 * Rule function. Checks if the expression compares something with no value and if so,
 * adds a new Symptom object.
 * @param {ComparisonExpression} exp
 * @returns {Symptom[]}
 */
el = function(e) {
  const n = [], u = e.getChildren().flatMap((h) => h.is(t.GroupStatement) ? h.getContents() : h).filter((h) => !(h.is(t.BuiltInFunctionCall) && h.getFunctionExpression().is(t.AssertFunction)) && (qt(h) || h.getDataType() === d.None && !h.isOneOf([t.NoneType, t.VariableName])));
  return u.length > 0 && n.push(...u.map((h) => x.createStatementSymptom(
    b.AssignedNone,
    [h],
    0,
    0,
    {
      expression: h,
      usage: dc
    }
  ))), n;
}, I(Wn, gs);
let Ui = Wn;
var qe, tl, ps, $i, nl, sl, gu, il;
const qn = class qn extends X {
  /**
   * Creates a new BooleanExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  constructor(e, n) {
    var o;
    const s = m(o = qn, ps, $i).call(o, n);
    super(e, n, t.BooleanExpression, a.MultipartValue, s);
    I(this, qe);
    n.length === 3 && n[1].is(a.LogicalOperators) && (n[0].addObserver(this), n[2].addObserver(this)), m(this, qe, tl).call(this), this.addRules([m(this, qe, il), m(this, qe, sl), m(this, qe, nl)]);
  }
  //#region - overrides
  setDataType(e) {
    var s;
    const n = m(s = qn, ps, $i).call(s, this.getChildren());
    n !== this.getDataType() && super.setDataType(n);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    const n = this.getChildren();
    if (this.getEntity() !== e.getEntity())
      return e.is(t.VariableName) && n.length === 2 && n[0].is(t.NotOperator) && n[1].is(t.VariableName) ? n[1].matchesPattern(e) : !1;
    const s = e.getChildren(), o = /* @__PURE__ */ new Map();
    for (const u of n) {
      if (u.is(t.NotOperator))
        continue;
      let h = !1;
      for (const p of s)
        if (!p.is(t.NotOperator) && u.matchesPattern(p)) {
          h = !0;
          break;
        }
      if (!h && !u.is(t.VariableName))
        return !1;
      u.is(t.VariableName) && o.set(u.getTextValue(), h);
    }
    return o.size === 0 ? !0 : Array.from(o.values()).filter((u) => u === !0).length > 0;
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.nodes = this.getChildren().map((n) => n.toJSON()), e;
  }
  //#endregion - extensions
};
qe = new WeakSet(), tl = function() {
  const e = this.getChildren();
  for (let n = 0; n < e.length; n++)
    this.addConnection(e[n]), n < e.length - 1 && e[n].addConnection(e[n + 1]);
}, ps = new WeakSet(), $i = function(e) {
  if (e.length === 2 && e[0].is(t.NotOperator))
    return d.Bool;
  if (e.length === 3 && e[1].is(a.LogicalOperators)) {
    const n = e[0].getDataType(), s = e[2].getDataType();
    return n === s ? n : n === d.NotParsed || s === d.NotParsed ? d.NotParsed : d.Unknown;
  } else
    return d.Invalid;
}, /**
 * Rule function. Checks if the property is unused
 * @param {BooleanExpression} exp 
 * @returns {Symptom[]}
 */
nl = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(x.createStatementSymptom(b.UnusedValue, [e], 0, 0)), n;
}, /**
 * 
 * @param {ComparisonExpression} exp 
 * @returns {Symptom[]}
 */
sl = function(e) {
  const n = [], s = e.getChildren();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(x.createStatementSymptom(b.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : de,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : de
    }));
  return n;
}, /**
 * Helper function for #checkNaturalLanguage
 * @param {ExpressionNode} a The expression on the left of the logical operator
 * @param {ExpressionNode} b The expression on the right of the logical operator
 * @returns {boolean} True if either a or b is truthy rather than boolean
 */
gu = function(e, n) {
  const s = e.getDataType(), o = n.getDataType();
  return s !== d.Bool && s !== d.Unknown || o !== d.Bool && o !== d.Unknown;
}, /** 
 * Rule function. Checks if the expression compares something with no value and if so,
 * adds a new Symptom object.
 * @param {BooleanExpression} exp
 * @returns {Symptom[]}
 */
il = function(e) {
  const n = [], s = e.getChildren();
  if (s.length === 3) {
    const o = s[0].getDataType(), u = s[2].getDataType();
    (o !== d.Bool && o !== d.Unknown || u !== d.Bool && u !== d.Unknown) && n.push(x.createStatementSymptom(
      b.NaturalLanguageBoolean,
      s,
      0,
      2,
      {
        form: oc,
        leftSideType: s[0].getDataType(),
        leftSideText: s[0].getTextValue(),
        leftSideEntity: s[0].getEntity(),
        operator: s[1].getTextValue(),
        rightSideType: s[2].getDataType(),
        rightSideText: s[2].getTextValue(),
        rightSideEntity: s[2].getEntity(),
        tempExpression: e
      }
    ));
  }
  return n;
}, I(qn, ps);
let Gi = qn;
var gn, ue, te, Ie, rl, ol, al, Ji, ll, cl;
class ar extends X {
  /**
   * Creates a new IteratorExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  constructor(e, n) {
    super(e, n, t.IteratorExpression, a.MultipartValue, d.NA);
    I(this, Ie);
    /** @type {Number} */
    I(this, gn);
    /** @type {ExpressionNode} */
    I(this, ue);
    /** @type {ExpressionNode[]} */
    I(this, te, []);
    m(this, Ie, ol).call(this), m(this, Ie, rl).call(this), this.addRules([m(this, Ie, cl), m(this, Ie, ll)]);
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this), c(this, ue).checkForSymptoms();
    for (const e of c(this, te))
      e.checkForSymptoms();
  }
  //#region - overrides
  /**
   * @override
   */
  getVariableExpressions() {
    let e = c(this, ue).getVariableExpressions();
    for (let n of c(this, te))
      e = e.concat(n.getVariableExpressions());
    return e;
  }
  /** @override */
  setDataType(e) {
    m(this, Ie, Ji).call(this);
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     //this.#iterable.setBlockId(id);
  // }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...c(this, te).flatMap((n) => n.getAllNestedExpressions()), ...c(this, ue).getAllNestedExpressions()];
  }
  toJSON() {
    const e = super.toJSON();
    return e.loopVariables = c(this, te).map((n) => n.toJSON()), e.iterable = c(this, ue).toJSON(), e;
  }
  getLoopVariables() {
    return c(this, te);
  }
  getIterable() {
    return c(this, ue);
  }
  //#endregion - extensions
}
gn = new WeakMap(), ue = new WeakMap(), te = new WeakMap(), Ie = new WeakSet(), rl = function() {
  const e = this.getChildren();
  for (let n = 0; n < e.length; n++)
    this.addConnection(e[n]), n < e.length - 1 && e[n].addConnection(e[n + 1]);
}, //#endregion - overrides
//#region - extensions
ol = function() {
  const e = this.getChildren();
  y(this, gn, Qt(e, t.InKeyword)), y(this, ue, e[e.length - 1]), y(this, te, c(this, gn) === 1 && e[0].is(t.TupleDefinition) ? e[0].getElements().filter((n) => n[0].is(t.VariableName)).map((n) => n[0]) : e.slice(0, c(this, gn)).filter((n) => n.is(t.VariableName)));
  for (let n of c(this, te))
    n.setAssignedOrChanged();
  m(this, Ie, al).call(this);
}, al = function() {
  if (c(this, ue).isOneOf([t.BuiltInFunctionCall, t.BuiltInMethodCall])) {
    const e = c(this, ue).is(t.BuiltInMethodCall) ? c(this, ue).getMethodEntity() : c(this, ue).getFunctionEntity();
    if (e === t.EnumerateFunction)
      if (c(this, te).length === 1)
        c(this, te)[0].setDataType(d.Tuple);
      else if (c(this, te).length === 2) {
        c(this, te)[0].setDataType(d.Int);
        const n = c(this, ue).getArguments(), s = n.length === 1 && n[0].length === 1 && n[0][0].getDataType() === d.String ? d.String : d.Unknown;
        c(this, te)[1].setDataType(s);
      } else
        for (const n of c(this, te))
          n.setDataType(d.Unknown);
    else if (e === t.RangeFunction && c(this, te).length === 1)
      c(this, te)[0].setDataType(d.Int);
    else if (Wt.get(e) === d.String && c(this, te).length === 1)
      c(this, te)[0].setDataType(d.String);
    else
      for (const n of c(this, te))
        n.setDataType(d.Unknown);
  } else
    c(this, ue).addObserver(this), m(this, Ie, Ji).call(this);
}, Ji = function() {
  const e = c(this, ue).getDataType() === d.String || c(this, ue).getDataType() === d.File ? d.String : d.Unknown;
  for (let n of c(this, te))
    n.setDataType(e);
}, /**
 * Rule finder. Looks for cases of the target variable overwriting a variable used in the iterable
 * @param {IteratorExpression} exp 
 * @returns {Symptom[]}
 */
ll = function(e) {
  const n = [], s = c(e, ue).getVariableExpressions();
  for (const o of c(e, te))
    for (const u of s)
      if (o.getTextValue() === u.getTextValue()) {
        const h = o.getLastUsages(), p = u.getLastUsages().length > 0 && u.getLastUsages()[0].isParameter();
        n.push(x.createStatementSymptom(b.OverwrittenVariable, [o], 0, 0, {
          isParameter: p,
          functionBlock: p ? h[0].getBlockId() : "",
          prevUsageIsDefinition: !1,
          overwriteType: rc,
          overwriteValue: o.compareValues(o, [h[h.length - 1]]),
          usageText: e.getParent().getTextValue(),
          overwrittenVar: [{
            lineNumber: h[h.length - 1].getStartLineNumber(),
            blockId: h[h.length - 1].getBlockId(),
            docIndex: h[h.length - 1].getDocumentStartIndex(),
            forLoopDefinition: h[h.length - 1].getParent().is(t.IteratorExpression) && h[h.length - 1].getParent().getLoopVariables().filter((w) => w.getTextValue() === h[h.length - 1].getTextValue()).length > 0
          }]
        }));
      }
  return n;
}, /**
 * 
 * @param {IteratorExpression} exp 
 * @returns {Symptom[]}
 */
cl = function(e) {
  const n = [], s = e.getChildren();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(x.createStatementSymptom(b.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : de,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : de
    }));
  return n;
};
var ms, ws;
class pu extends X {
  /**
   * Creates a new BooleanExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  constructor(e, n) {
    if (n.length < 4)
      throw new Error("A lambda expression must have a minimum of 4 children");
    const s = $.split(n.slice(1), t.Colon);
    if (s.length !== 2)
      throw new Error("Lambda expects at least one argument and a return value");
    const o = $.split(s[0], t.Comma);
    for (const h of o)
      for (const p of h)
        p.is(t.VariableName) && (p.setAssignedOrChanged(), p.setDataType(d.Unknown));
    const u = $.createTree(s[1]);
    if (u.length !== 1)
      throw new Error("Lambda can only have one return value");
    super(e, n, t.LambdaDefinitionStatement, a.BlockDefinitions, u[0].getDataType());
    /** @type {ExpressionNode[][]} */
    I(this, ms);
    /** @type {ExpressionNode} */
    I(this, ws);
    y(this, ms, o), y(this, ws, u[0]), u[0].addObserver(this);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of this.getChildren())
      n.is(t.VariableName) ? e.push(n) : e = e.concat(n.getVariableExpressions());
    return e;
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.arguments = c(this, ms).map((n) => n.map((s) => s.toJSON())), e.return = c(this, ws).toJSON(), e;
  }
}
ms = new WeakMap(), ws = new WeakMap();
var Ss, Wi, Qs, ul;
const jn = class jn extends X {
  /**
   * Creates a new TernaryExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  constructor(e, n) {
    var o;
    if (n.length !== 5)
      throw new Error("Ternary should contain 5 children");
    let s = m(o = jn, Ss, Wi).call(o, n);
    super(e, n, t.TernaryStatement, a.BlockDefinitionStatement, s);
    I(this, Qs);
    n[0].addObserver(this), n[4].addObserver(this), this.addRule(m(this, Qs, ul));
  }
  /**
   * @override 
   */
  setDataType(e) {
    var s;
    const n = m(s = jn, Ss, Wi).call(s, this.getChildren());
    n !== this.getDataType() && super.setDataType(n);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.nodes = this.getChildren().map((n) => n.toJSON()), e;
  }
};
Ss = new WeakSet(), Wi = function(e) {
  return e.length === 5 ? Kt([e[0].getDataType(), e[4].getDataType()]) : d.Unknown;
}, Qs = new WeakSet(), /**
 * Rule function. Checks if the ternary returns bool literals
 * @param {TernaryExpression} ternary 
 * @returns {Symptom[]}
 */
ul = function(e) {
  const n = [];
  if (e.getDataType() === d.Bool) {
    const s = e.getChildren();
    if (s[0].is(t.TrueType) && s[4].is(t.FalseType)) {
      let o = e.getParent();
      for (; o.is(t.GroupStatement); )
        o = o.getParent();
      const u = (h) => {
        switch (h) {
          case t.ReturnStatement.name:
            return "return";
          case t.AssignmentStatement.name:
            return "assignment";
          default:
            return "unknown";
        }
      };
      n.push(x.createStatementSymptom(
        b.TernaryReturnsBool,
        s,
        0,
        s.length - 1,
        {
          boolValue: s[2].getTextValue(),
          boolLiteralIfTrue: s[0].getTextValue(),
          boolLiteralIfFalse: s[4].getTextValue(),
          parentText: o ? o.getTextValue() : "",
          parentEntity: o ? u(o.getEntity().name) : ""
        }
      ));
    }
  }
  return n;
}, I(jn, Ss);
let Ki = jn;
var Pn, dl, hl;
const lr = class lr extends X {
  /**
   * Creates a new ListComprehensionExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  constructor(e, n) {
    if (n.length < 3 || n.length > 5)
      throw new Error("List comprehension should contain 3-5 children");
    super(e, n, t.ListComprehension, a.BlockDefinitionStatement, d.List);
    I(this, Pn);
    const s = `${n[0].getStartLineNumber()}-listComprehension-${n[0].getDocumentStartIndex()}`;
    this.setBlockId(s), this.setScopeId(s), m(this, Pn, hl).call(this);
  }
  /**
   * @override
   * @inheritdoc
   */
  getVariableExpressions() {
    let e = [];
    const n = this.getChildren(), s = m(this, Pn, dl).call(this);
    if (s > -1) {
      e = e.concat(n[s].getVariableExpressions());
      for (let o = 0; o < n.length; o++)
        o !== s && (e = e.concat(n[o].getVariableExpressions()));
    }
    return e;
  }
  /**
   * Used for variable / block processing. Returns a copy of this expression and empties the
   * current values.
   * @returns {ListComprehensionExpression}
   */
  copyAndConvertToPlaceholder() {
    const e = new lr(this.getTextValue(), this.getChildren());
    return this.setTextValue(""), this.setChildren([]), e;
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.nodes = this.getChildren().map((n) => n.toJSON()), e;
  }
};
Pn = new WeakSet(), dl = function() {
  const e = this.getChildren();
  for (let n = 0; n < e.length; n++)
    if (e[n].is(t.IteratorExpression))
      return n;
  return -1;
}, hl = function() {
  const e = this.getChildren();
  if (e.length > 0 && e[0].is(t.ListComprehension) && e[2].is(t.IteratorExpression)) {
    const n = e[0].getChildren();
    if (n.length >= 3 && n[2].is(t.IteratorExpression)) {
      const s = e[2].getIterable(), o = n[2].getLoopVariables();
      for (const u of o)
        u.getTextValue() === s.getTextValue() && (u.addObserver(s), s.setDataType(u.getDataType()), s.setAssignedOrChanged());
    }
  }
};
let qi = lr;
var $e, fl, gl, pl, ml, wl;
class mu extends X {
  /**
   * Creates a new ReturnStatement 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  constructor(e, n) {
    if (n.length === 0 || !n[0].is(t.ReturnKeyword))
      throw new Error("Not a valid return statement");
    let s = d.None;
    if (n.length === 2)
      s = n[1].getDataType();
    else if (n.length > 2)
      if (Hn(n, t.Comma)) {
        s = d.Tuple;
        const o = n.slice(1), u = $.split(o, t.Comma), h = new ti(oe(o), o, t.TupleDefinition, u);
        n = [n[0], h];
      } else
        s = d.Invalid;
    super(e, n, t.ReturnStatement, a.MultipartValue, s);
    I(this, $e);
    n.length === 2 && (n[1].addObserver(this), this.addConnection(n[1])), this.addRules([
      m(this, $e, wl),
      m(this, $e, ml),
      m(this, $e, fl),
      m(this, $e, pl)
    ]);
  }
  getReturnedValue() {
    return this.getChildren().slice(1);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions()).slice(1)];
  }
  toJSON() {
    const e = super.toJSON();
    return e.returnedValue = this.getReturnedValue().map((n) => n.toJSON()), e;
  }
}
$e = new WeakSet(), /** 
 * Rule function. Checks if the returned value is in unnecessary parentheses and if so,
 * adds a new Symptom object.
 * @param {ReturnStatement} returnExpression
 * @returns {Symptom[]}
 */
fl = function(e) {
  var o;
  const n = [], s = e.getChildren();
  return s.length === 2 && s[1].is(t.GroupStatement) && n.push(x.createStatementSymptom(
    b.ReturnInParentheses,
    s,
    0,
    1,
    {
      contents: m(o = e, $e, gl).call(o, s[1]),
      textInParentheses: s[1].getTextValue().substring(1, s[1].getTextValue().length - 1)
    }
  )), n;
}, /**
 * Gets the "summary" of the expressions inside parentheses e.g. a literal, a compound expression
 * @param {GroupElement} group The returned values
 * @returns {string} A string summarising the group contents
 */
gl = function(e) {
  const n = e.getContents();
  if (n.length === 1) {
    if (n[0].isOneOf([a.Literals, a.Types]))
      return sc;
    if (n[0].isOneOf([t.VariableName, t.SubscriptedExpression]))
      return ic;
    if (n[0].isOneOf([a.FunctionCall, a.MethodCall]))
      return br;
    if (n[0].is(a.CompoundTypes))
      return yr;
  }
  return Fr;
}, /**
 * 
 * @param {ReturnStatement} exp 
 * @returns {Symptom[]}
 */
pl = function(e) {
  const n = [], s = e.getChildren();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(x.createStatementSymptom(b.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : de,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : de
    }));
  return n;
}, /** 
 * Rule function. Checks if the statement Returns something with no value and if so,
 * adds a new Symptom object.
 * @param {ReturnStatement} returnExpression
 * @returns {Symptom[]}
 */
ml = function(e) {
  const n = [], u = e.getChildren().flatMap((h) => h.is(t.GroupStatement) ? h.getContents() : h).filter((h) => qt(h) || h.getDataType() === d.None && !h.isOneOf([t.NoneType, t.VariableName]));
  return u.length > 0 && n.push(...u.map((h) => x.createStatementSymptom(
    b.AssignedNone,
    [h],
    0,
    0,
    {
      expression: h,
      usage: Ir
    }
  ))), n;
}, /** 
 * Rule function. Checks if the statement contains the AssignmentInReturn symptom and if so,
 * adds a new Symptom object.
 * @param {ReturnStatement} returnExpression
 * @returns {Symptom[]}
 */
wl = function(e) {
  const n = e.getChildren(), s = [];
  for (let o = 1; o < n.length; o++)
    if (n[o].is(t.AssignmentStatement)) {
      const u = n[o].getTargetVariables().map((h) => h.getTextValue());
      s.push(x.createStatementSymptom(
        b.AssignmentInReturn,
        n,
        o,
        o,
        {
          assignedVariables: u
        }
      ));
    }
  return s;
};
var Xs, pn;
class wu extends X {
  /**
   * Creates a new ImportStatement 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   */
  constructor(e, n) {
    super(e, n, t.ImportStatement, a.KeywordStatement, d.NA);
    /** @type {ModuleExpression} */
    I(this, Xs);
    /** @type {ExpressionNode[]} */
    I(this, pn, []);
    if (n.length > 1 && (y(this, Xs, n[1]), n[0].is(t.FromKeyword)))
      for (let s = 3; s < n.length; s++)
        n[s].is(t.Comma) || c(this, pn).push(n[s]);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...c(this, pn).flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.importedEntities = c(this, pn).map((n) => n.toJSON()), e;
  }
}
Xs = new WeakMap(), pn = new WeakMap();
var mn;
class Su extends X {
  /**
   * Creates a new KeywordStatement 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   */
  constructor(e, n) {
    if (n.length === 0)
      throw new Error("Not enough elements to make a statement");
    let s = t.Unknown;
    if (n[0].is(t.AssertKeyword))
      s = t.AssertStatement;
    else if (n[0].is(t.GlobalKeyword))
      s = t.GlobalStatement;
    else if (n[0].is(t.RaiseKeyword))
      s = t.ThrowStatement;
    else throw new Error("Unknown keyword");
    super(e, n, s, a.KeywordStatement, d.NA);
    I(this, mn, []);
    y(this, mn, n.slice(1));
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...c(this, mn).flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.keyword = this.getChildren()[0].toJSON(), e.values = c(this, mn).map((n) => n.toJSON()), e;
  }
}
mn = new WeakMap();
var Rt, ge, Is, bs, Be, ke, ji, Sl, Il, bl, yl, yt, Fl, Nl, Tl;
const Ot = class Ot extends ei {
  // The expressions summarised in tree form, with multipart expressions where needed e.g. function calls
  /**
   * Creates a new Statement. 
   * @param {String} rawText The raw text of the statement. 
   * @param {Number} firstLineNumber The document line number that the statement begins on.
   * @param {Indent} indent The indent object representing the number of spaces.
   * @param {ExpressionNode[]} expressions. Optional. The expression nodes that make up the statment.
   */
  constructor(e, n, s, o = [], u = !0) {
    super();
    I(this, ke);
    /** @type {String} */
    I(this, Rt);
    // The raw text of the statement
    /** @type {Set<Number} */
    l(this, "lineNumbers", /* @__PURE__ */ new Set());
    // The document line number(s) of the statement
    /** @type {ExpressionNode[]} */
    I(this, ge);
    // The most basic expressions found on the line, ignoring comments
    /** @type {Number} */
    I(this, Is);
    /** @type {Indent} */
    I(this, bs);
    /** @type {ExpressionNode[]} */
    I(this, Be);
    y(this, Rt, e), this.lineNumbers.add(n), y(this, bs, s), y(this, Is, s.getSpaceCount() + s.getTabCount()), o.length > 0 && (o[o.length - 1].is(t.ContinuationLine) && o.pop(), o.length > 0 && o[0].isOneOf([t.IfDefinition, t.ElifDefinition, t.WhileDefinition]) && this.addRule(m(this, ke, yl))), y(this, ge, o), this.addRule(m(this, ke, Il)), u && m(this, ke, ji).call(this);
  }
  /**
   * Gets the raw text of the statement
   * @returns {String}
   */
  getRawText() {
    return c(this, Rt);
  }
  /**
   * Sets the raw text of the statement.
   * @param {String} text The updated text.
   */
  updateRawText(e) {
    y(this, Rt, e);
  }
  /**
   * Gets the document line numbers that the statement occurs on.
   * @returns {Set<Number>} The document line numbers.
   */
  getLineNumbers() {
    return this.lineNumbers;
  }
  /**
   * Gets the line number of the first line in the statement.
   * @returns {Number} The line number or -1 if there are no line numbers
   */
  getFirstLineNumber() {
    return this.lineNumbers.size > 0 ? Math.min(...Array.from(this.lineNumbers)) : -1;
  }
  /**
   * Gets the line number of the last line in the statement.
   * @returns {Number} The line number or -1 if there are no line numbers
   */
  getLastLineNumber() {
    return this.lineNumbers.size > 0 ? Math.max(...Array.from(this.lineNumbers)) : -1;
  }
  /**
   * Adds a line number that the statement occurs on.
   * @param {Number} lineNum The line number to add
   */
  addLineNumber(e) {
    this.lineNumbers.add(e);
  }
  /**
   * Gets the number of spaces at the start of the statement.
   * @returns {Number}
   */
  getIndentation() {
    return c(this, Is);
  }
  /**
   * Gets the indent object describing the indentation
   * @returns {Indent}
   */
  getIndent() {
    return c(this, bs);
  }
  /**
   * Gets the parsed expressions in the statement (the AST version)
   * @returns {ExpressionNode[]}
   */
  getExpressions() {
    return c(this, Be) === void 0 ? c(this, ge) : c(this, Be);
  }
  /**
   * Gets the raw expressions - the most low level expressions
   * @returns {ExpressionNode[]}
   */
  getRawExpressions() {
    return c(this, ge);
  }
  /**
   * Checks if this statement contains the given expression
   * @param {ExpressionNode} expression 
   * @returns 
   */
  containsExpression(e) {
    for (let n of this.getExpressions())
      if (n.contains(e))
        return !0;
    return !1;
  }
  /**
   * Get all variable expressions in the statement
   * @returns {Map<String, VariableExpression>}
   */
  getVariableUsages() {
    const e = /* @__PURE__ */ new Map();
    for (let n of c(this, Be)) {
      const s = n.getVariableExpressions();
      for (let o of s)
        e.has(o.getTextValue()) || e.set(o.getTextValue(), []), e.get(o.getTextValue()).push(o);
    }
    return e;
  }
  /**
   * Checks if this statement is blank
   * @returns {Boolean} True if the statement has no expressions, false otherwise
   */
  isBlank() {
    return c(this, Be).length === 0;
  }
  /**
   * Gets the first expression in the statement
   * @returns {ExpressionNode}
   * @throws Throws an error if the statement is blank
   */
  getFirstExpression() {
    if (this.isBlank())
      throw new Error("Statement is blank. Could not get first expression.");
    return c(this, Be)[0];
  }
  /**
   * Whether or not this is a block statement e.g. a for loop or an if branch
   * @returns {Boolean}
   */
  isBlockStatement() {
    return !1;
  }
  /**
   * Checks if this statement is the definition line of a block
   * @returns {Boolean}
   */
  isDefinitionOfBlock() {
    return c(this, Be).length === 0 ? !1 : c(this, Be)[0].is(a.BlockDefinitionStatement);
  }
  /**
   * Creates a new Statement from a SourceProcessor object
   * @param {SourceProcessor} processedSource A processed line of source code
   * @returns {Statement} A new Statement object
   */
  static createFromSource(e) {
    return new Ot(e.getText(), e.getLineNumber(), e.getIndent(), e.getExpressions(), !e.continuesOnNextLine());
  }
  /**
   * Adds another source line to the statement
   * @param {SourceProcessor} processedSource A processed line of source code that continues on from the existing statement
   */
  continueFromSource(e) {
    this.addLineNumber(e.getLineNumber()), m(this, ke, Sl).call(this, e.getExpressions()), this.updateRawText(c(this, Rt) + `
` + e.getText()), e.continuesOnNextLine() || m(this, ke, ji).call(this);
  }
  toJSON() {
    return {
      expressions: c(this, Be).map((e) => e.toJSON())
    };
  }
};
Rt = new WeakMap(), ge = new WeakMap(), Is = new WeakMap(), bs = new WeakMap(), Be = new WeakMap(), ke = new WeakSet(), ji = function() {
  y(this, Be, $.createTree(c(this, ge))), this.addRules([m(this, ke, bl)]), this.checkRules(this);
}, /**
 * Helper method called when adding a continuation line. Addresses the edge case that the
 * parentheses in function call are on a separate line from the function name.
 * @param {ExpressionNode[]} continuingExpressions 
 */
Sl = function(e) {
  if (e.length > 0 && e[0].is(t.OpenParenthesis) && c(this, ge).length > 0 && c(this, ge)[c(this, ge).length - 1].is(t.VariableName)) {
    const n = c(this, ge).length - 1, s = c(this, ge)[n];
    let o = We(c(this, ge)[c(this, ge).length - 1]);
    o.category !== a.BuiltInFunctions && (o = new Q(t.FunctionName, a.Identifiers)), c(this, ge)[n] = Gn(s.getTextValue(), o, s.getStartLineNumber(), s.getDocumentStartIndex(), s.getDocumentEndIndex(), s.getEndLineNumber());
  }
  y(this, ge, c(this, ge).concat(e));
}, /**
 * Rule checker. Checks symptoms in the raw expressions
 */
Il = function(e) {
  var o, u, h;
  const n = e.getRawExpressions(), s = [];
  for (let p = 0; p < n.length; p++)
    m(o = Ot, yt, Fl).call(o, n, p) && s.push(x.createStatementSymptom(b.NaturalLanguageBoolean, n, p, p + 1, {
      form: ac
    })), m(u = Ot, yt, Tl).call(u, n, p) && s.push(x.createStatementSymptom(b.OutOfPlaceBooleanOperator, n, p, p)), m(h = Ot, yt, Nl).call(h, n, p) && s.push(x.createStatementSymptom(b.DoubleComparisonOperators, n, p, p + 1));
  return s;
}, /**
 * 
 * @param {Statement} statement 
 * @returns 
 */
bl = function(e) {
  const n = [], s = c(e, Be);
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(x.createStatementSymptom(b.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? {
        type: s[o - 1].getEntity().name,
        value: s[o - 1].getTextValue()
      } : { type: de },
      after: o < s.length - 1 ? {
        type: s[o + 1].getEntity().name,
        value: s[o + 1].getTextValue()
      } : { type: de }
    }));
  return n;
}, /**
 * Rule checker. Checks if the statement contains the AssignedInBoolean symptom and if so,
 * adds a new Symptom object.
 * @param {Statement} statement
 */
yl = function(e) {
  const n = e.getFirstExpression().getExpressionsOfKind(t.AssignmentStatement), s = [];
  for (const o of n)
    s.push(x.createStatementSymptom(b.AssignmentInBoolean, [o], 0, 0, {
      parentText: e.getRawText()
    }));
  return s;
}, yt = new WeakSet(), Fl = function(e, n) {
  return e[n].is(t.AndOperator) && n < e.length - 1 && e[n + 1].is(t.OrOperator);
}, Nl = function(e, n) {
  return n < e.length - 1 && e[n].isOneOf([t.AssignmentOperator, a.ComparisonOperators]) && e[n + 1].isOneOf([t.AssignmentOperator, a.ComparisonOperators]);
}, Tl = function(e, n) {
  return e[n].is(a.LogicalOperators) ? !!(!e[n].is(t.NotOperator) && (n === 0 || e[n - 1].isOneOf([a.LogicalOperators, a.MathsOperators, a.ComparisonOperators, a.BlockDefinitions])) || !e[n].is(t.NotOperator) && n < e.length - 1 && e[n + 1].isOneOf([a.LogicalOperators, a.MathsOperators, a.ComparisonOperators, a.BlockDefinitions]) && !e[n + 1].is(t.NotOperator)) : !1;
}, I(Ot, yt);
let Jt = Ot;
var W, Ye, Hi, Cl, bu, Ol;
class Iu extends Jt {
  /**
   * Creates a new BlockStatement e.g an if branch or a for loop 
   * @param {Statement} definitionStatement The raw text of the statement. 
   * @param {String} scopeId The id of the scope block
   */
  constructor(e, n) {
    super(e.getRawText(), e.getFirstLineNumber(), e.getIndent());
    I(this, Ye);
    /** @type {Statement[]} */
    I(this, W, []);
    for (const s of e.getExpressions())
      s.setBlockId(`${e.getFirstLineNumber()}-${e.getRawExpressions()[0].getTextValue()}`), s.setScopeId(n);
    c(this, W).push(e);
    for (const s of e.getLineNumbers())
      this.addLineNumber(s);
    this.addRules([m(this, Ye, Hi)]);
  }
  //#region - overrides
  /**
   * @override
   */
  getExpressions() {
    let e = [];
    for (let n of c(this, W))
      e = e.concat(n.getExpressions());
    return e;
  }
  /**
   * Get all variable expressions in the statement
   * @returns {Map<String, VariableExpression>}
   * @override
   */
  getVariableUsages() {
    const e = /* @__PURE__ */ new Map();
    for (let n of c(this, W)) {
      const s = n.getVariableUsages();
      for (const [o, u] of s)
        if (!e.has(o))
          e.set(o, u);
        else {
          const h = e.get(o).concat(u);
          e.set(o, h);
        }
    }
    return e;
  }
  /**
   * Checks if this statement is blank
   * @returns {Boolean} True if the statement has no expressions, false otherwise
   * @override
   */
  isBlank() {
    return !1;
  }
  /**
   * Gets the first expression in the statement
   * @returns {ExpressionNode}
   * @throws Throws an error if the statement is blank
   * @override
   */
  getFirstExpression() {
    if (this.isBlank())
      throw new Error("Statement is blank. Could not get first expression.");
    return c(this, W)[0].getFirstExpression();
  }
  /**
   * Whether or not this is a block statement e.g. a for loop or an if branch
   * @returns {Boolean}
   */
  isBlockStatement() {
    return !0;
  }
  /**
   * Gets the document line numbers that the statement occurs on.
   * @returns {Set<Number>} The document line numbers.
   */
  getLineNumbers() {
    const e = /* @__PURE__ */ new Set();
    for (let n of c(this, W))
      for (let s = n.getFirstLineNumber(); s <= n.getLastLineNumber(); s++)
        e.add(s);
    return e;
  }
  /**
   * Gets the line number of the first line in the statement.
   * @returns {Number} The line number or -1 if there are no line numbers
   */
  getFirstLineNumber() {
    return c(this, W).length === 0 ? -1 : c(this, W)[0].getFirstLineNumber();
  }
  /**
   * Gets the line number of the last line in the statement.
   * @returns {Number} The line number or -1 if there are no line numbers
   */
  getLastLineNumber() {
    return c(this, W).length === 0 ? -1 : c(this, W)[c(this, W).length - 1].getLastLineNumber();
  }
  //#endregion - overrides
  //#region - extensions
  /**
   * Gets all the statements in this block
   * @returns {Statement[]}
   */
  getStatements() {
    return c(this, W);
  }
  /**
   * Gets the definition statement of this block
   * @returns {Statement}
   */
  getDefinitionStatement() {
    let e = c(this, W)[0];
    for (; e.isBlockStatement(); )
      e = e.getDefinitionStatment();
    return e;
  }
  /**
   * Adds a statement to the block
   * @param {Statement} statement
   * @param {ScopeBlock} block 
   */
  addStatement(e, n) {
    const s = c(this, W).length > 0 && c(this, W)[c(this, W).length - 1].getExpressions().length > 0 ? c(this, W)[c(this, W).length - 1].getFirstExpression().getBlockId() : "unknown";
    c(this, W).push(e);
    for (const h of e.getExpressions())
      h.setBlockId(s), h.setScopeId(n.getScope().getId());
    const o = oe(this.getExpressions());
    this.updateRawText(o);
    for (let h of e.getLineNumbers())
      this.addLineNumber(h);
    $.connectVariableUsages(e, n);
    const u = n.getBlockEntity() === t.DocumentDefinition ? n : n.getParentBlock().getScope();
    $.connectUserDefinedFunctions(e, u), $.connectUserDefinedMethods(e, u), $.makeGraphConnections(c(this, W));
  }
  /**
   * Gets the BlockStatement that a new statement should be added to, if any
   * @param {Number} newStatementIndent 
   * @returns {BlockStatement | undefined}
   */
  getBlockStatementForIndent(e) {
    if (c(this, W).length === 0 || e <= this.getIndentation())
      return;
    const n = c(this, W)[c(this, W).length - 1];
    if (!n.isBlockStatement())
      return this;
    const s = n.getBlockStatementForIndent(e);
    return s === void 0 ? this : s;
  }
  getLastBlockStatement() {
    if (c(this, W).length === 0)
      return;
    const e = c(this, W)[c(this, W).length - 1];
    if (!e.isBlockStatement())
      return this;
    const n = e.getLastBlockStatement();
    return n === void 0 ? this : n;
  }
  //#endregion - symptoms
  toJSON() {
    return {
      definition: this.getDefinitionStatement().toJSON(),
      statements: c(this, W).slice(1).map((e) => e.toJSON())
    };
  }
}
W = new WeakMap(), Ye = new WeakSet(), //#endregion - extensions
//#region - symptoms
Hi = function(e) {
  var u, h, p;
  const n = [], s = e.getDefinitionStatement();
  s.getFirstExpression().is(t.ForDefinitionStatement) ? n.push(...m(u = e, Ye, Ol).call(u, e, s)) : s.getFirstExpression().is(t.ExceptDefinitionStatement) && n.push(...m(h = e, Ye, Cl).call(h, e, s));
  const o = e.getStatements().filter((w) => w.isBlockStatement());
  for (const w of o)
    n.push(...m(p = w, Ye, Hi).call(p, w));
  return n;
}, /**
 * Rule function. If the block is an except statement, checks if the same exception is thrown in the block
 * @param {BlockStatement} statement 
 * @param {Statement} definition
 * @returns {Symptom[]}
 */
Cl = function(e, n) {
  const s = [];
  if (n.getFirstExpression().getChildren().length === 3 && n.getFirstExpression().getChildren()[1].is(t.ExceptionName)) {
    const o = n.getFirstExpression().getChildren()[1], u = e.getStatements().slice(1);
    for (const h of u) {
      const p = h.getFirstExpression();
      if (p.is(t.ThrowStatement)) {
        const w = p.getExpressionsOfKind(t.ExceptionName);
        for (const S of w)
          S.getTextValue() === o.getTextValue() && s.push(x.createStatementSymptom(b.RedundantException, [p], 0, 0));
      }
    }
  }
  return s;
}, /**
 * Rule function. If the block is a while loop, checks if it is infinite
 * @param {BlockStatement} statement 
 * @param {Statement} definition
 * @returns {Symptom[]}
 */
bu = function(e, n) {
  const s = [], o = n.getFirstExpression(), u = o.getVariableExpressions();
  for (const h of e.getStatements()) {
    const p = h.getExpressions();
    for (const w of p) {
      if (zt(w))
        return s;
      const S = w.getVariableExpressions().filter((N) => N.isAssignedOrChanged()), F = new Set(S.map((N) => N.getTextValue()));
      for (const N of u)
        if (F.has(N.getTextValue()))
          return s;
    }
  }
  return s.push(x.createStatementSymptom(b.InfiniteLoop, [o], 0, 0)), s;
}, /**
 * Rule function. If the block is a for loop, checks if an iterator variable is modified then not used
 * @param {BlockStatement} statement 
 * @param {Statement} definition
 * @returns {Symptom[]}
 */
Ol = function(e, n) {
  const s = [], o = n.getFirstExpression().getCondition()[0];
  if (o !== void 0 && o.is(t.IteratorExpression)) {
    const u = o.getLoopVariables(), h = e.getVariableUsages();
    for (const p of u)
      if (h.has(p.getTextValue())) {
        const w = h.get(p.getTextValue()).filter((S) => S.getStartLineNumber() !== n.getFirstLineNumber());
        for (let S = 0; S < w.length; S++)
          if (w[S].isAssignedOrChanged() && !(w.slice(S + 1).filter((N) => !N.isAssignedOrChanged()).length > 0)) {
            const N = n.getFirstExpression().getTextValue(), v = p.getDataType().name;
            s.push(x.createStatementSymptom(b.ForLoopIteratorModified, [w[S]], 0, 0, {
              // Add the for loop definition text
              definitionText: N.trim(),
              loopVarTypeAtDefinition: v,
              modificationText: w[S].getParent().getTextValue()
            }));
          }
      }
  }
  return s;
};
const yu = (g, i, e) => {
  let n = /* @__PURE__ */ new Map();
  for (let [s, o] of Qu) {
    const u = o(g, i, e);
    u.length > 0 && n.set(s, zi.create(s, u));
  }
  return n;
}, Fu = (g) => g.filter((e) => e.getID() === b.AssignmentInBoolean.name).map((e) => new G(e.getLineNumber(), e.getDocIndex(), new E(
  [e],
  "A single equals operator is used in a boolean expression where a double equals operator might be expected."
))), Nu = (g) => {
  const i = g.filter((n) => n.getID() === b.UnexpectedColon.name && n.getAdditionalInfo().after.type !== de && n.getAdditionalInfo().before.type === t.VariableName.name);
  let e = [];
  for (let n of i) {
    const s = new E(
      [n],
      "The unexpected colon is preceded by a variable name and followed by a value. The intention may be to assign the value to the named variable."
    );
    e.push(new G(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, Tu = (g) => {
  const i = g.filter((o) => o.getID() === b.NaturalLanguageBoolean.name && o.getAdditionalInfo().operator === "or"), e = /* @__PURE__ */ new Map(), n = [];
  for (const o of i) {
    let u, h = o.getAdditionalInfo().tempExpression.is(t.BooleanExpression) ? o.getAdditionalInfo().tempExpression : void 0;
    try {
      for (u = o.getAdditionalInfo().tempExpression.getParent(); u.is(t.BooleanExpression); )
        h = u, u = u.getParent();
    } catch {
      u = void 0;
    }
    if (u)
      try {
        u.getFirstExpressionOf(t.ComparisonExpression) && o.getAdditionalInfo().operator === "or" ? (e.has(u) || e.set(u, []), e.get(u).push(o), o.getAdditionalInfo().parentText = u.getTextValue(), o.getAdditionalInfo().parentEntity = u.getEntity(), h && (o.getAdditionalInfo().completeBooleanExpression = h.getTextValue())) : n.push(o);
      } catch {
        n.push(o);
      }
    else
      n.push(o);
  }
  let s = [];
  for (const o of e.values()) {
    o.sort((h, p) => h.getDocIndex() - p.getDocIndex());
    const u = new E(
      o,
      "One or more non-boolean value is used where a boolean expression is expected."
    );
    s.push(new G(o[0].getLineNumber(), o[0].getDocIndex(), u));
  }
  return s;
}, Cu = (g) => {
  const i = g.filter((n) => n.getID() === b.CompareBoolLiteral.name);
  let e = [];
  for (let n of i) {
    const s = n.toJSON();
    if (s.boolLiteral === ec) {
      const o = new E(
        [n],
        `${s.boolValue} is a boolean value so ${s.operator} ${s.boolLiteral} is redundant.`
      );
      e.push(new G(n.getLineNumber(), n.getDocIndex(), o));
    } else {
      const o = new E(
        [n],
        `${s.boolValue} is a boolean value so the expression can be rewritten as not ${s.boolValue}.`
      );
      e.push(new G(n.getLineNumber(), n.getDocIndex(), o));
    }
  }
  return e;
}, Ou = (g) => {
  const i = g.filter((n) => n.getID() === b.UnreachableExit.name && n.getAdditionalInfo().exitKeyword === Ir);
  g.filter((n) => n.getID() === b.LoopReturn.name && n.getAdditionalInfo().loopType === "for" && n.getAdditionalInfo().exitType === "return");
  let e = [];
  for (let n of i) {
    const s = new E(
      [n],
      "Code follows a return statement in the same branch."
    );
    e.push(new G(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, Mu = (g) => {
  const i = g.filter((n) => n.getID() === b.OverwrittenVariable.name && n.getAdditionalInfo().overwriteType === nr && n.getAdditionalInfo().overwriteValue !== ir && !(n.getAdditionalInfo().prevUsageIsDefinition && n.getAdditionalInfo().overwrittenVar[n.getAdditionalInfo().overwrittenVar.length - 1].forLoopDefinition));
  let e = [];
  for (let n of i) {
    const s = new E(
      [n],
      `The iterating variable ${n.getAffectedText()} is initialised before the loop. ${n.getAdditionalInfo().overwriteValue === Nr ? "The overwritten value is different from the value initialised by the loop" : "It could not be determined if the overwritten value is the same as the value initialised by the loop"}.`
    );
    e.push(new G(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, xu = (g, i) => {
  const e = g.filter((h) => h.getID() === b.UndefinedVariable.name), n = Array.from(i.values()).flatMap((h) => h).flatMap((h) => h.getUsages()).filter((h) => h.getVariable().getDataType() === d.Function).map((h) => h.getVariable()), s = g.filter((h) => h.getID() === b.SubscriptedNonSubscriptable.name), o = g.filter((h) => h.getID() === b.VariableWithSameNameAsFunction.name && (h.getAdditionalInfo().funcType === vn || h.getAdditionalInfo().funcType === Vn && h.getAdditionalInfo().numArgsExpected > 0));
  let u = [];
  if (o.length === 0 || e.length === 0 && n.length === 0)
    return u;
  for (let h of o) {
    const p = h.getAffectedText(), w = h.getDocIndex();
    for (let S of e)
      if (S.getAffectedText() === p && S.getDocIndex() === w && s.filter((N) => N.getAdditionalInfo().varName === p && N.getDocIndex() === w).length === 0) {
        const N = new E(
          [S, h],
          `The variable ${p} has not been assigned a value and the file contains a user-defined function of the same name.`
        );
        u.push(new G(S.getLineNumber(), S.getDocIndex(), N));
      }
    for (let S of n)
      if (S.getTextValue() === p && S.getDocumentStartIndex() === w && s.filter((N) => N.getAdditionalInfo().varName === p && N.getDocIndex() === w).length === 0) {
        const N = new E(
          [h],
          `The variable ${p} has not been assigned a value and the file contains a user-defined function of the same name.`
        );
        u.push(new G(h.getLineNumber(), h.getDocIndex(), N));
      }
  }
  return u;
}, Du = (g) => {
  const i = g.filter((s) => s.getID() === b.SubscriptedNonSubscriptable.name), e = g.filter((s) => s.getID() === b.VariableWithSameNameAsFunction.name);
  let n = [];
  for (let s of i) {
    let o = s.getAdditionalInfo().varName, u = s.getDocIndex();
    for (let h of e)
      if (h.getAffectedText() === o && h.getDocIndex() === u) {
        const p = s.getAdditionalInfo().isUndefined ? "undefined variable" : s.getAdditionalInfo().subscriptedType === "unknown data type" ? "variable with unknown data type" : `variable with ${s.getAdditionalInfo().subscriptedType} data type`, w = new E(
          [s, h],
          `${o} (${p}) has the same name as a function. ${o} is subscripted, suggesting a mistake may have been made while calling a function of the same name. It is possible there is confusion about when to use square brackets versus parentheses.`
        );
        n.push(new G(s.getLineNumber(), s.getDocIndex(), w));
      }
  }
  return n;
}, Bu = (g) => {
  const i = g.filter((s) => s.getID() === b.LoopVarModifiedInChildLoop.name && s.getAdditionalInfo().modifiedIn.every((o) => o.loopType === "for" && o.varDataType === "int")), e = g.filter((s) => s.getID() === b.LoopVarNotModified.name);
  let n = [];
  for (let s of i) {
    const o = s.getAffectedText(), u = s.getBlock();
    for (const h of e)
      if (h.getBlock() === u && h.getAdditionalInfo().unmodifiedVars.includes(o)) {
        const p = new E(
          [s, h],
          `The int variable ${o} is referenced in a while loop condition but only modified in a nested for loop. If ${o} is being used to count the iterated items, the two loops could be replaced with a single for loop using enumerate() or range() to count the items.`
        );
        n.push(new G(s.getLineNumber(), s.getDocIndex(), p));
        break;
      }
  }
  return n;
}, Au = (g) => {
  const i = g.filter((n) => n.getID() === b.OverwrittenVariable.name && n.getAdditionalInfo().overwriteType === nr && n.getAdditionalInfo().overwriteValue === ir && n.getAdditionalInfo().prevUsageIsDefinition && !n.getAdditionalInfo().overwrittenVar[n.getAdditionalInfo().overwrittenVar.length - 1].forLoopDefinition);
  let e = [];
  for (let n of i) {
    const s = new E(
      [n],
      `The iterating variable ${n.getAffectedText()} is initialised before the loop with the same value that it is initialised with in the for loop definition.`
    );
    e.push(new G(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, ku = (g, i) => {
  const e = g.filter((s) => s.getID() === b.UndefinedVariable.name && s.getAdditionalInfo().variable.getScope().getBlockEntity() === t.DocumentDefinition);
  let n = [];
  for (let s of e) {
    const o = s.getAdditionalInfo().variable.getName(), u = i.get(o).filter((h) => h.getScope().getBlockEntity() !== t.DocumentDefinition);
    if (u.length > 0) {
      s.getAdditionalInfo().localVariables = [];
      for (const p of u) {
        const w = { scope: p.getScope().getBlockEntity().name };
        p.getScope().getBlockEntity() === t.FunctionDefinition && (w.functionName = p.getScope().getFunctionName()), s.getAdditionalInfo().localVariables.push(w);
      }
      const h = new E(
        [s],
        `The undefined variable ${s.getAffectedText()} has global scope. The document contains ${u.length} other ${u.length === 1 ? "variable" : "variables"} with the same name in function scope.`
      );
      n.push(new G(s.getLineNumber(), s.getDocIndex(), h));
    }
  }
  return n;
}, Pu = (g) => {
  let i = g.filter(
    (n) => n.getID() === b.ForLoopIteratorModified.name
    /*|| s.getID() === SymptomType.WhileLoopVarAssignedIntLiteral.name*/
  ), e = [];
  for (let n of i) {
    let s = "";
    s = `The for loop iterator variable ${n.getAffectedText()} is modified in the loop.`;
    const o = new E([n], s);
    e.push(new G(n.getLineNumber(), n.getDocIndex(), o));
  }
  return e;
}, Lu = (g) => {
  const i = g.filter((n) => n.getID() === b.OneLineConditional.name);
  let e = [];
  for (let n of i) {
    const s = n.toJSON();
    if (s.form === oi) {
      const o = new E(
        [n],
        "Conditional returns a boolean literal that matches the value of the boolean expression in the if statement. The whole conditional could be replaced with a single line."
      );
      e.push(new G(n.getLineNumber(), n.getDocIndex(), o));
    } else if (s.form === ai) {
      const o = new E(
        [n],
        `The variable ${s.variableAssigned} is assigned a boolean literal that matches the value of the boolean expression in the if statement. The whole conditional could be replaced with a single line.`
      );
      e.push(new G(n.getLineNumber(), n.getDocIndex(), o));
    }
  }
  return e;
}, Vu = (g) => {
  const i = g.filter((n) => n.getID() === b.TernaryReturnsBool.name);
  let e = [];
  for (let n of i) {
    const s = new E(
      [n],
      "Ternary returns a boolean literal that matches the value of the boolean expression in the ternary. The ternary could be replaced with the boolean expression alone."
    );
    e.push(new G(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, vu = (g) => {
  const i = g.filter((s) => s.getID() === b.UnexpectedColon.name && s.getAdditionalInfo().after.type === de && (s.getAdditionalInfo().before.type === t.FunctionName.name || s.getAdditionalInfo().before.type === hr)), e = g.filter((s) => s.getID() === b.UnknownFunction.name);
  let n = [];
  for (let s of i)
    if (s.getAdditionalInfo().before.type === t.FunctionName.name) {
      let o = e.filter((u) => u.getAffectedText() === s.getAdditionalInfo().before.value);
      if (o.length > 0) {
        const u = new E(
          [s, o[0]],
          `The unexpected colon is preceded by a call to unknown function, ${o[0].getAffectedText()}. It is possible the intention was to declare a function but the def keyword has been omitted.`
        );
        n.push(new G(s.getLineNumber(), s.getDocIndex(), u));
      }
    } else if (s.getAdditionalInfo().before.type === hr) {
      const o = new E(
        [s],
        "The unexpected colon is preceded by a Boolean expression. It is possible the intention was to declare a while, if, or elif but the keyword was omitted."
      );
      n.push(new G(s.getLineNumber(), s.getDocIndex(), o));
    }
  return n;
}, Ru = (g) => {
  const i = g.filter((s) => s.getID() === b.DefinitionFollowedByReservedWord.name), e = g.filter((s) => s.getID() === b.ReservedWordAssigned.name);
  let n = [];
  for (let s of i) {
    const o = new E(
      [s],
      `The reserved word, ${s.getAdditionalInfo().reservedWord}, follows the ${s.getAdditionalInfo().definitionType}.`
    );
    n.push(new G(s.getLineNumber(), s.getDocIndex(), o));
  }
  for (let s of e) {
    const o = new E(
      [s],
      `The reserved word, ${s.getAffectedText()}, is followed by the assignment operator.`
    );
    n.push(new G(s.getLineNumber(), s.getDocIndex(), o));
  }
  return n;
}, Uu = (g, i) => {
  const e = g.filter((h) => h.getID() === b.UndefinedVariable.name), n = Array.from(i.values()).flatMap((h) => h).flatMap((h) => h.getUsages()).filter((h) => h.getVariable().getDataType() === d.Function).map((h) => h.getVariable()), s = g.filter((h) => h.getID() === b.SubscriptedNonSubscriptable.name), o = g.filter((h) => h.getID() === b.VariableWithSameNameAsFunction.name && h.getAdditionalInfo().funcType === Vn && h.getAdditionalInfo().numArgsExpected === 0);
  let u = [];
  if (o.length === 0 || e.length === 0 && n.length === 0)
    return u;
  for (let h of o) {
    const p = h.getAffectedText(), w = h.getDocIndex();
    for (let S of e)
      if (S.getAffectedText() === p && S.getDocIndex() === w && s.filter((N) => N.getAdditionalInfo().varName === p && N.getDocIndex() === w).length === 0) {
        const N = new E(
          [S, h],
          `The variable ${p} has not been assigned a value and the file contains a user-defined function of the same name, which does not expect any arguments.`
        );
        u.push(new G(S.getLineNumber(), S.getDocIndex(), N));
      }
    for (let S of n)
      if (S.getTextValue() === p && S.getDocumentStartIndex() === w && s.filter((N) => N.getAdditionalInfo().varName === p && N.getDocIndex() === w).length === 0) {
        const N = new E(
          [h],
          `The variable ${p} has not been assigned a value and the file contains a user-defined function of the same name, which does not expect any arguments.`
        );
        u.push(new G(h.getLineNumber(), h.getDocIndex(), N));
      }
  }
  return u;
}, Eu = (g) => {
  const i = g.filter((o) => o.getID() === b.AssignedNone.name), e = g.filter((o) => o.getID() === b.FunctionPrints.name), n = g.filter((o) => o.getID() === b.UnusedReturn.name && o.getAdditionalInfo().expression.is(t.FunctionName));
  let s = [];
  for (let o of i) {
    const u = o.toJSON();
    if (u.expressionNoValue.type === Vn) {
      const h = u.expressionNoValue.value.split("(")[0], p = e.filter((S) => S.getAffectedText() === h);
      if (p.length > 0) {
        const S = new E(
          [o, ...p],
          `User-defined function ${h} prints to the console but does not return a value.`
        );
        s.push(new G(o.getLineNumber(), o.getDocIndex(), S));
      } else {
        const S = new E(
          [o],
          `User-defined function ${h} does not return a value but it is used as if it does.`
        );
        s.push(new G(o.getLineNumber(), o.getDocIndex(), S));
      }
    } else if (u.expressionNoValue.type === vn && u.expressionNoValue.value.indexOf("print(") === 0) {
      const h = new E(
        [o],
        "The print function does not return a value but it is used as if it does."
      );
      s.push(new G(o.getLineNumber(), o.getDocIndex(), h));
    }
  }
  for (let o of n) {
    const h = o.toJSON().unusedFunc.value, p = e.filter((S) => S.getAffectedText() === h);
    if (p.length > 0) {
      const S = new E(
        [o, ...p],
        `User-defined function ${h} prints to the console and returns a value but the value is not used.`
      );
      s.push(new G(o.getLineNumber(), o.getDocIndex(), S));
    }
  }
  return s;
}, Gu = (g) => {
  const i = g.filter((s) => s.getID() === b.FunctionPrints.name), e = g.filter(
    (s) => s.getID() === b.UnusedReturn.name && !(s.getAdditionalInfo().expression.is(a.BuiltInMethods) && Or.has(s.getAdditionalInfo().expression.getEntity())) && !s.getAdditionalInfo().expression.isOneOf([t.StrFunction, t.IntFunction, t.FloatFunction, t.BoolFunction, t.ListFunction, t.TupleFunction, t.SetFunction])
  ), n = [];
  for (let s of e) {
    const u = s.toJSON().unusedFunc.value;
    if (!(i.filter((w) => w.getAffectedText() === u).length > 0)) {
      const w = new E(
        [s],
        `The function ${u} returns a value but the value is not used.`
      );
      n.push(new G(s.getLineNumber(), s.getDocIndex(), w));
    }
  }
  return n;
}, $u = (g) => {
  const i = g.filter((n) => n.getID() === b.ReturnInParentheses.name), e = (n) => n === br ? "function call" : n === yr ? "compound type (e.g. list, set)" : n === Fr ? "compound expression" : n;
  return i.map((n) => new G(n.getLineNumber(), n.getDocIndex(), new E(
    [n],
    `The function returns a ${e(n.getAdditionalInfo().contents)} wrapped in parentheses. The parentheses are unnecessary.`
  )));
}, Ju = (g) => {
  const i = g.filter((n) => n.getID() === b.SequentialIfs.name && n.getAdditionalInfo().branchMatches.length > 0);
  let e = [];
  for (let n of i)
    for (let s of n.getAdditionalInfo().branchMatches) {
      let o = s.map((h) => h.lineNum + 1).join(", "), u = o.lastIndexOf(",");
      o = o.substring(0, u) + " and" + o.substring(u + 1), s.length > 0 && e.push(new G(
        s[0].lineNum,
        s[0].docIndex,
        new E(
          [n],
          `The if statement is part of a sequence of if statements (lines ${o}) that have very similar boolean expressions.`
        )
      ));
    }
  return e;
}, Ku = (g, i, e) => {
  const n = new Set(g.filter((u) => u.getID() === b.AssignmentInReturn.name).map((u) => u.getLineNumber())), s = g.filter(
    (u) => u.getID() === b.OverwrittenVariable.name && u.getAdditionalInfo().isParameter && u.getAdditionalInfo().prevUsageIsDefinition && !n.has(u.getLineNumber())
  );
  let o = [];
  for (let u of s) {
    const h = u.getAdditionalInfo().functionBlock;
    let p = "";
    for (const [S, F] of e.entries())
      if (F.getBlockId() === h) {
        p = S;
        break;
      }
    u.getAdditionalInfo().functionBlock = p;
    const w = new E(
      [u],
      `The parameter ${u.getAffectedText()} is overwritten before use.`
    );
    o.push(new G(u.getLineNumber(), u.getDocIndex(), w));
  }
  return o;
}, Wu = (g) => {
  const i = g.filter(
    (n) => n.getID() === b.UnusedReturn.name && n.getAdditionalInfo().expression.is(a.BuiltInMethods) && Or.has(n.getAdditionalInfo().expression.getEntity())
  );
  let e = [];
  for (let n of i) {
    const s = new E(
      [n],
      `A String method, ${n.getAdditionalInfo().expression.getTextValue()}, that returns a new string is called but the return value is not assigned or passed.`
    );
    e.push(new G(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, qu = (g) => {
  const i = g.filter(
    (n) => n.getID() === b.UnusedReturn.name && n.getAdditionalInfo().expression.isOneOf([t.StrFunction, t.IntFunction, t.FloatFunction, t.BoolFunction, t.ListFunction, t.TupleFunction, t.SetFunction])
  );
  let e = [];
  for (let n of i) {
    const s = new E(
      [n],
      `${n.getAdditionalInfo().expression.getTextValue()}() is called but the converted value returned by the function is not saved or passed.`
    );
    e.push(new G(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, ju = (g) => {
  const i = g.filter((s) => s.getID() === b.LoopVarNotModified.name), e = g.filter((s) => s.getID() === b.LoopReturn.name);
  let n = [];
  for (const s of e) {
    if (s.getAdditionalInfo().exitTypes.filter((u) => u !== "return").length > 0 || s.getAdditionalInfo().loopType === "while" && i.filter((u) => u.getBlock() === s.getBlock()).length > 0)
      continue;
    const o = new E(
      [s],
      `A ${s.getAdditionalInfo().loopType} always exits on the first iteration due to return statements. Related to DeferredReturn.`
    );
    n.push(new G(s.getLineNumber(), s.getDocIndex(), o));
  }
  return n;
}, Hu = (g) => {
  const i = g.filter((s) => s.getID() === b.LoopVarNotModified.name), e = g.filter((s) => s.getID() === b.LoopReturn.name);
  let n = [];
  for (let s of i) {
    const o = e.filter((u) => u.getBlock() === s.getBlock());
    if (o.length > 0) {
      const u = new E(
        [s, ...o],
        "No while loop variables are modified (excluding modifications in any nested loops) and the loop always exits on the first iteration."
      );
      n.push(new G(s.getLineNumber(), s.getDocIndex(), u));
    }
  }
  return n;
}, zu = (g) => {
  const i = g.filter((n) => n.getID() === b.TypeUnnecessary.name);
  let e = [];
  for (let n of i) {
    const s = n.toJSON();
    let o;
    s.argType === tc && s.convertedType === nc ? o = new E(
      [n],
      `A string value, ${s.convertedValue}, is converted to a list which may not be necessary. The programmer may not realise that much of the functionality provided by a list is also available to strings.`
    ) : o = new E(
      [n],
      `${s.convertedValue} is guaranteed to be a ${s.argType} so there is no need to convert it to ${s.convertedType}.`
    ), o !== void 0 && e.push(new G(n.getLineNumber(), n.getDocIndex(), o));
  }
  return e;
};
var wn, ys, Ut;
const cr = class cr {
  // All occurrences of the misconception.
  /**
   * Creates a new Misconception
   * @param {MisconceptionType} misconType 
   * @param {MisconceptionOccurrence[]} occurrences 
   */
  constructor(i, e) {
    /** @type {MisconceptionType} */
    I(this, wn);
    // The type of the misconception
    /** @type {string} */
    I(this, ys);
    // A high level, abstract text discription of the symptoms associated with the misconception and their relationships
    /** @type {Array<MisconceptionOccurrence>} */
    I(this, Ut);
    y(this, wn, i.name), y(this, ys, i.description), y(this, Ut, e);
  }
  /**
   * Add a new occurrence of the misconception
   * @param {MisconceptionOccurrence} occurrence 
   */
  addOccurrence(i) {
    c(this, Ut).push(i);
  }
  /**
   * Gets the (String) name of the misconception.
   * @returns {string}
   */
  getName() {
    return c(this, wn);
  }
  /**
   * Checks if any of the contributing symptoms occur in the given range
   * @param {number} startIndex The starting doc index of a token in the document
   * @param {number} endIndex The ending doc index of a token in the document
   * @returns {boolean} True if a contributing symptom is present in the given range
   */
  isPresentInToken(i, e) {
    for (const n of c(this, Ut))
      for (const s of n.getReason().getContributingSymptoms())
        if (i <= s.getDocIndex() && e >= s.getDocIndex())
          return !0;
    return !1;
  }
  /**
   * Creates a JSON-friendly representation of the object
   * @returns {Object} A JSON-friendly representation of the object
   */
  toJSON() {
    return {
      type: c(this, wn),
      description: c(this, ys),
      occurrences: c(this, Ut).map((i) => i.toJSON())
    };
  }
  /**
   * Static method. Creates a new Misconception
   * @param {MisconceptionType} misconceptionType 
   * @param {MisconceptionOccurrence[]} occurrences 
   * @returns {Misconception} A new misconception
   */
  static create(i, e) {
    return new cr(i, e);
  }
};
wn = new WeakMap(), ys = new WeakMap(), Ut = new WeakMap();
let zi = cr;
var Sn, In, bn;
class G {
  // A description of the relevant symptoms, tailored to the specific occurrence
  /**
   * Creates a new MisconceptionOccurrence
   * @param {Number} line The document line number
   * @param {Number} docIndex The index in the document's raw text
   * @param {Reason} reason A description of the relevant symptoms
   */
  constructor(i, e, n) {
    /** @type {Number} */
    I(this, Sn);
    // The document line number
    /** @type {Number} */
    I(this, In);
    // The index in the document's raw text
    /** @type {Reason} */
    I(this, bn);
    y(this, Sn, i), y(this, In, e), y(this, bn, n);
  }
  /**
   * Gets the document line number
   * @returns {Number} The document line number
   */
  getLineNumber() {
    return c(this, Sn);
  }
  /**
   * Gets the index in the raw document text
   * @returns {Number} The index in the raw document text
   */
  getDocIndex() {
    return c(this, In);
  }
  /**
   * Gets the Reason for the occurrence
   * @returns {Reason} The Reason object that contains more information about the occurrence
   */
  getReason() {
    return c(this, bn);
  }
  /**
   * Creates a JSON-friendly representation of the Misconception
   * @returns {Object} A JSON-friendly representation of the Misconception.
   */
  toJSON() {
    return {
      line: c(this, Sn),
      docIndex: c(this, In),
      reason: c(this, bn).toJSON()
    };
  }
}
Sn = new WeakMap(), In = new WeakMap(), bn = new WeakMap();
var yn, Fs;
class E {
  /**
   * Creates a new Reason.
   * @param {Symptom[]} contributingSymptoms 
   * @param {String} explanation 
   */
  constructor(i, e) {
    /** @type {Symptom[]} */
    I(this, yn);
    /** @type {String} */
    I(this, Fs);
    y(this, yn, i), y(this, Fs, e);
  }
  getContributingSymptoms() {
    return c(this, yn);
  }
  /**
   * Creates a JSON representation of the reason.
   * @returns {Object} A JSON (or JSON-friendly) representation of the reason.
   */
  toJSON() {
    return {
      contributingSymptoms: c(this, yn).map((i) => i.toJSON()),
      explanation: c(this, Fs)
    };
  }
}
yn = new WeakMap(), Fs = new WeakMap();
const Qu = /* @__PURE__ */ new Map([
  [P.PrintSameAsReturn, Eu],
  [P.UnusedReturn, Gu],
  [P.MapToBooleanWithIf, Lu],
  [P.ComparisonWithBoolLiteral, Cu],
  [P.DeferredReturn, Ou],
  [P.TypeMustBeSpecified, zu],
  [P.CompareMultipleValuesWithOr, Tu],
  [P.ParenthesesOnlyIfArgument, Uu],
  [P.FunctionCallsUseSquareBrackets, Du],
  [P.FunctionCallsNoParentheses, xu],
  [P.AssignCompares, Fu],
  [P.ReturnCall, $u],
  [P.SequentialIfsAreExclusive, Ju],
  [P.WhileSameAsIf, Hu],
  [P.IterationRequiresTwoLoops, Bu],
  [P.StringMethodsModifyTheString, Wu],
  [P.TypeConversionModifiesArgument, qu],
  [P.MapToBooleanWithTernaryOperator, Vu],
  [P.NoReservedWords, Ru],
  [P.ParameterMustBeAssignedInFunction, Ku],
  [P.LocalVariablesAreGlobal, ku],
  [P.IteratorInitialisedOutsideLoop, Au],
  [P.ForLoopVarIsLocal, Mu],
  [P.LoopCounter, Pu],
  [P.NoKeyword, vu],
  [P.ColonAssigns, Nu],
  [P.ReturnWaitsForLoop, ju]
  //27
]);
var Et, Re, St, Ns, Gt, $t, Fn, Zs, xl;
class Ml {
  /**
   * Creates a new GraphNode
   * @param {ExpressionNode} expressionNode The original ExpressionNode that this GraphNode is created from
   */
  constructor(i) {
    I(this, Zs);
    /** @type {String} */
    I(this, Et);
    /** @type {ExpressionCategory} */
    I(this, Re);
    /** @type {ExpressionEntity} */
    I(this, St);
    /** @type {ExpressionNode[]} */
    I(this, Ns);
    /** @type {number} */
    I(this, Gt);
    /** @type {number} */
    I(this, $t);
    /** @type {Set<String>} */
    I(this, Fn);
    y(this, Et, i.getTextValue()), y(this, Re, i.getCategory()), y(this, St, i.getEntity()), y(this, Gt, i.getDocumentStartIndex()), y(this, $t, i.getDocumentEndIndex()), y(this, Ns, i.getConnectedTo()), y(this, Fn, /* @__PURE__ */ new Set());
  }
  /**
   * Gets the text value of this node.
   * @returns {String}
   */
  getText() {
    return c(this, Et);
  }
  /**
   * Get the ExpressionEntity of this node.
   * @returns {ExpressionEntity}
   */
  getEntity() {
    return c(this, St);
  }
  /**
   * Gets the ExpressionCategory of this node,
   * @returns {ExpressionCategory}
   */
  getCategory() {
    return c(this, Re);
  }
  /**
   * Gets the connected ExpressionNodes.
   * @returns {ExpressionNode[]}
   */
  getConnectedTo() {
    return c(this, Ns);
  }
  /**
   * If this node has a symptom that contributes to an occurrence of a 
   * misconception, this method will add the misconception ID name for tracking.
   * @param {String} misconName The name of the misconception
   */
  addMisconception(i) {
    c(this, Fn).add(i);
  }
  getID() {
    let i = `${c(this, St).name}_${c(this, Re).name} ${c(this, Et)}`;
    return m(this, Zs, xl).call(this) ? i : `${c(this, Gt)}_${c(this, $t)}_${i}`;
  }
  getStartIndex() {
    return c(this, Gt);
  }
  getEndIndex() {
    return c(this, $t);
  }
  /**
   * Converts this node to a JSON object.
   * @returns {Object}
   */
  toJSON() {
    return {
      id: this.getID(),
      text: c(this, Et),
      entity: c(this, St).name,
      category: c(this, Re).name,
      startDocIndex: c(this, Gt),
      endDocIndex: c(this, $t),
      misconceptions: Array.from(c(this, Fn))
    };
  }
}
Et = new WeakMap(), Re = new WeakMap(), St = new WeakMap(), Ns = new WeakMap(), Gt = new WeakMap(), $t = new WeakMap(), Fn = new WeakMap(), Zs = new WeakSet(), xl = function() {
  return c(this, St) === t.FunctionName && c(this, Re) === a.Identifiers || c(this, Re) === a.BuiltInFunctions || c(this, Re) === a.BuiltInMethods || c(this, Re) === a.BuiltInModules || c(this, Re) === a.BuiltInExceptions;
};
var It, Nn, je, Dl, Qi, Bl, Al;
class Xu {
  /**
   * 
   * @param {GraphNode[]} allNodes 
   * @param {Map<MisconceptionType, Misconception>} misconceptions
   */
  constructor(i, e) {
    I(this, je);
    /** @type {Map<String, GraphNode>} */
    I(this, It, /* @__PURE__ */ new Map());
    /** @type {Map<String, Set<String> >} */
    I(this, Nn, /* @__PURE__ */ new Map());
    const n = Array.from(e.values());
    for (const s of i)
      m(this, je, Dl).call(this, n, s), m(this, je, Qi).call(this, s);
    m(this, je, Bl).call(this);
  }
  toJSON() {
    const i = {
      nodes: {},
      edges: {}
    };
    for (const [e, n] of c(this, It))
      i.nodes[e] = n.toJSON();
    for (const [e, n] of c(this, Nn))
      i.edges[e] = Array.from(n);
    return i;
  }
}
It = new WeakMap(), Nn = new WeakMap(), je = new WeakSet(), /**
 * Checks if any of the misconceptions have symptoms that occur in the node. If so, 
 * the misonception ID is added to the node
 * @param {Misconception[]} misconObjects 
 * @param {GraphNode} node 
 */
Dl = function(i, e) {
  const n = i.filter((s) => s.isPresentInToken(e.getStartIndex(), e.getEndIndex()));
  for (const s of n)
    e.addMisconception(s.getName());
}, /**
 * 
 * @param {GraphNode} node 
 */
Qi = function(i) {
  const e = i.getID();
  c(this, It).has(e) || (c(this, It).set(e, i), c(this, Nn).set(e, /* @__PURE__ */ new Set()));
}, Bl = function() {
  for (const [i, e] of c(this, It)) {
    const n = e.getConnectedTo();
    for (const s of n) {
      const o = new Ml(s);
      c(this, It).has(o.getID()) || m(this, je, Qi).call(this, o), i !== o.getID() && m(this, je, Al).call(this, i, o.getID());
    }
  }
}, /**
 * 
 * @param {String} fromNode The ID of the node
 * @param {String} toNode The node to connect to
 */
Al = function(i, e) {
  c(this, Nn).get(i).add(e);
};
var Ts, Te, Se, L, kl, Tt, Pl, Ll, Vl, vl, Rl, Ul, El, Gl, $l, Jl, Xi, Zi, Kl, Wl, ql, jl, Hl, zl, Ht;
class Zu {
  /**
   * Creates a new DocInfo object from Python raw text
   * @param {string} text The raw text of the Python file
   */
  constructor(i) {
    I(this, L);
    /** @type {string} */
    I(this, Ts);
    // The raw text in the document
    /** @type {Statement} */
    I(this, Te, []);
    /** @type {StatementBlock} */
    I(this, Se);
    l(this, "variables");
    /** @type {Map<String, UserDefinedFunctionExpression>} */
    l(this, "userDefinedFunctions");
    /** @type {Map<String, ClassNode} */
    l(this, "userDefinedClasses");
    /** @type {Map<string, ModuleInfo>} */
    l(this, "modules");
    y(this, Ts, i), y(this, Se, new Cs()), this.variables = /* @__PURE__ */ new Map(), this.modules = /* @__PURE__ */ new Map(), x.symptoms = [], m(this, L, kl).call(this, i);
  }
  //#endregion
  /**
   * Gets all UserDefinedFunctions in the document.
   * @returns {Map<String, UserDefinedFunctionExpression>} A Map, where each key is the name of a function and each value is a UserDefinedFunction object
   */
  getUserDefinedFunctions() {
    return this.userDefinedFunctions;
  }
  /**
   * Gets all user defined classes in the document
   * @returns {Map<string, DataType}
   */
  getUserDefinedClasses() {
    return this.userDefinedClasses;
  }
  /**
   * Gets all variables defined in the document.
   * @returns {Map<String, VariableInfo[]>}
   */
  getVariables() {
    return this.variables;
  }
  /**
   * Gets all symptoms in the document.
   * @returns {Symptom[]} An array of all symptoms in the document.
   */
  getSymptoms() {
    return x.symptoms;
  }
  /**
   * Gets all misconceptions in the document.
   * @returns {Map<MisconceptionType, Misconception>} A Map of all misconceptions found in the document
   */
  getMisconceptions() {
    return yu(x.symptoms, this.variables, this.getUserDefinedFunctions());
  }
  /**
   * Gets the raw text in the document.
   * @returns {string} The raw text of the document.
   */
  getText() {
    return c(this, Ts);
  }
  /**
   * Gets all blocks in the document
   * @returns {Block} The document root block, which contains references to all child blocks.
   */
  getBlocks() {
    return c(this, Se);
  }
  /**
   * Returns the document as an Abstract Semantic Graph.
   * 
   *
   * A Graph object (to be implemented) containing: 
   * - An array all nodes in the graph (index = node ID, value = JSON attributes)
   * - A 2D array of all connections e.g. at index 0, there will be an array of the IDs of all nodes that node 0 connects to)
   */
  getGraph() {
    let i = [];
    for (const n of c(this, Te))
      for (const s of n.getExpressions()) {
        let o = s.getAllNestedExpressions();
        try {
          i.push(...o.map((u) => new Ml(u)));
        } catch (u) {
          console.log("Unable to get graph nodes:", u);
        }
      }
    return new Xu(i, this.getMisconceptions());
  }
  //#endregion
}
Ts = new WeakMap(), Te = new WeakMap(), Se = new WeakMap(), L = new WeakSet(), //#region setup
/**
 * Main processing method. Converts the raw source code to an AST
 * @param {String} text 
 */
kl = function(i) {
  y(this, Te, []);
  let e = c(this, Se);
  const n = i.split(/\r?\n/);
  if (n.length > 0) {
    let s = new En(n[0], 0, 0);
    c(this, Te).push(Jt.createFromSource(s)), s.continuesOnNextLine() || (e = m(this, L, Zi).call(this, c(this, Te)[c(this, Te).length - 1], e));
    for (let o = 1; o < n.length; o++) {
      const u = e.isScopeBlock() ? m(this, L, Xi).call(this, e) : m(this, L, Xi).call(this, e.getScope()), h = Array.from(e.getScope().findAllModules().keys()), p = { varsWithTypeNames: u, moduleNames: h, classDefinitionInProgress: e.hasParentOfEntity(t.ClassDefinition) }, w = s.getDocumentStartIndex() + s.getText().length + 1;
      if (s.continuesOnNextLine())
        p.groupCharCounts = s.getOpenGroupChars(), p.lastLineExpressions = s.getExpressions(), s.hasOpenComment() && (p.multilineCommentDelimiter = s.getCommentDelimiter()), s.hasOpenString() && (p.stringLiteralDelimiter = s.getStringLiteralDelimiter()), s = new En(n[o], o, w, p), c(this, Te)[c(this, Te).length - 1].continueFromSource(s);
      else if (s.followedBySeparateStatement()) {
        o--;
        const S = s.getLineEndIndex() + 1;
        p.startFrom = S, s = new En(n[o], o, s.getDocumentStartIndex(), p), c(this, Te).push(Jt.createFromSource(s));
      } else
        s = new En(n[o], o, w, p), c(this, Te).push(Jt.createFromSource(s));
      s.continuesOnNextLine() || (e = m(this, L, Zi).call(this, c(this, Te)[c(this, Te).length - 1], e));
    }
  }
  m(this, L, Ll).call(this), m(this, L, Vl).call(this), m(this, L, Pl).call(this);
}, /**
 * Gets all the scope blocks in the document
 * @returns {ScopeBlock[]}
 */
Tt = function() {
  return [c(this, Se)].concat(c(this, Se).getChildBlocksOfKind(t.FunctionDefinition)).concat(c(this, Se).getChildBlocksOfKind(t.ClassDefinition)).concat(c(this, Se).getChildBlocksOfKind(t.ListComprehension));
}, Pl = function() {
  const i = m(this, L, Tt).call(this);
  for (const e of i)
    for (const n of e.getStatements()) {
      for (const s of n.getExpressions())
        s.checkForSymptoms(), s.checkForConstructs(s);
      n.isBlockStatement() && n.checkRules(n);
    }
  for (const e of this.variables.values())
    for (const n of e)
      n.checkRules(n);
  for (const e of this.userDefinedFunctions.values()) {
    const n = e.getParent();
    if (n !== void 0 && n.is(t.FunctionDefinitionStatement)) {
      const s = n.getParameters().length - n.getOptionalParameterCount(), o = n.getParameters().length, u = Array.from(e.getObservers()).filter((h) => h.is(t.UserDefinedFunctionCall));
      for (const h of u) {
        const p = h.getArguments();
        (p.length < s || p.length > o) && x.symptoms.push(x.createStatementSymptom(b.WrongArgNumber, [h], 0, 0, {
          expectedMinArgs: s,
          expectedMaxArgs: o,
          receivedArgs: p.length
        }));
      }
    }
  }
  c(this, Se).checkRules(c(this, Se));
}, Ll = function() {
  const i = /* @__PURE__ */ new Map(), e = m(this, L, Tt).call(this);
  for (const n of e) {
    const s = n.getVariableMap(), o = n.getUserDefinedFunctions();
    for (const [u, h] of s) {
      let p = !1;
      const w = h.getUsages()[0].getVariable();
      w.getDataType() === d.NotParsed && !w.isAssignedOrChanged() && !w.isParameter() && ($.checkIfVariableExistsInParent(h, n) ? p = !0 : o.has(u) ? w.setDataType(d.Function) : (h.getUsages()[0].getVariable().setDataType(d.Undefined), h.checkAndAdjustUndefined())), i.has(u) || i.set(u, []), p || i.get(u).push(h);
    }
  }
  this.variables = i;
}, Vl = function() {
  this.userDefinedFunctions = m(this, L, El).call(this), this.userDefinedClasses = c(this, Se).getUserDefinedClasses();
  const i = c(this, Se).getChildBlocksOfKind(t.FunctionDefinition);
  for (const n of i) {
    let s = n.getLastExecutedStatements();
    const o = n.alwaysReturnsAValue();
    if (o && (s = s.filter((u) => u.getFirstExpression().is(t.ReturnStatement))), n.getParentBlock().getBlockEntity() !== t.ClassDefinition)
      this.userDefinedFunctions.has(n.getFunctionName()) && this.userDefinedFunctions.get(n.getFunctionName()).is(t.FunctionName) && this.userDefinedFunctions.get(n.getFunctionName()).addReturns(s, !o);
    else {
      const u = n.getParentBlock().getClassType().name;
      if (this.userDefinedClasses.has(u)) {
        const h = this.userDefinedClasses.get(u).methods;
        h.has(n.getFunctionName()) && h.get(n.getFunctionName()).addReturns(s, !o);
      }
    }
  }
  m(this, L, Gl).call(this);
  const e = m(this, L, Rl).call(this);
  m(this, L, Ul).call(this, e), m(this, L, vl).call(this), m(this, L, $l).call(this);
}, /**
 * Checks for a specific symptom - variables with the same name as a user defined function.
 * Can only be run after all variable and function processing is complete.
 */
vl = function() {
  const i = this.userDefinedFunctions.keys(), e = Array.from(i).filter((n) => this.variables.has(n));
  for (const n of e) {
    const s = this.userDefinedFunctions.get(n).getParent();
    if (s !== void 0) {
      for (const o of this.variables.get(n))
        if (o.getUsages().length > 0) {
          const u = o.getUsages()[0].getVariable();
          x.symptoms.push(x.createStatementSymptom(b.VariableWithSameNameAsFunction, [u], 0, 0, {
            funcType: Vn,
            numArgsExpected: s.getParameters().length - s.getOptionalParameterCount(),
            varIsParameter: u.isParameter()
          }));
        }
    }
  }
}, /**
 * Helper method to find user defined functions with the same name as built in functions
 * @returns {String[]} An array of the function names
 */
Rl = function() {
  const i = this.userDefinedFunctions.keys(), e = [];
  for (const n of i)
    We(n).category === a.BuiltInFunctions && e.push(n);
  return e;
}, /**
 * Converts any calls to built in functions that have the same name as a user defined function to
 * the user defined function call
 * @param {String[]} functionNames 
 */
Ul = function(i) {
  if (i.length > 0) {
    const e = m(this, L, Tt).call(this);
    for (const n of e) {
      const s = n.getStatements();
      for (const o of s) {
        const h = o.getExpressions().flatMap((p) => p.getExpressionsOfKind(t.BuiltInFunctionCall)).filter((p) => i.includes(p.getFunctionName()));
        for (const p of h)
          i.includes(p.getFunctionName()) && p.convertToUserDefinedFunction(this.userDefinedFunctions.get(p.getFunctionName()));
      }
    }
  }
}, /**
 * Helper method. Finds all user defined functions in all scopes and returns a map.
 * @returns {Map<String, UserDefinedFunctionExpression>}
 */
El = function() {
  const i = /* @__PURE__ */ new Map();
  let e = m(this, L, Tt).call(this);
  for (const n of e) {
    const s = n.getUserDefinedFunctions();
    for (const [o, u] of s)
      i.set(o, u);
  }
  return i;
}, /**
 * Helper method to handle any calls to unknown functions
 */
Gl = function() {
  const i = m(this, L, Tt).call(this);
  for (const e of i) {
    const n = e.getUnconnectedFunctionCalls();
    for (let s of n)
      for (let o of s[1])
        if (this.userDefinedFunctions.has(s[0])) {
          const u = this.userDefinedFunctions.get(s[0]);
          u.addObserver(o), o.setDataType(u.getReturnType());
        } else m(this, L, Jl).call(this, s[0], e) ? o.convertToImportedFunction() : (o.setDataType(d.Unknown), x.symptoms.push(x.createStatementSymptom(b.UnknownFunction, [o], 0, 0)));
  }
}, /**
 * Helper method to handle any calls to unknown functions
 */
$l = function() {
  const i = m(this, L, Tt).call(this);
  for (const e of i) {
    const n = e.getUnconnectedMethodCalls();
    for (let s of n)
      for (let o of s[1]) {
        const u = o.getObject();
        let h;
        if (u.getDataType().isCustom)
          u.getDataType().methods.has(s[0]) && (h = u.getDataType().methods.get(s[0]));
        else
          for (const p of this.userDefinedClasses.values())
            if (p.methods.has(s[0])) {
              h = p.methods.get(s[0]);
              break;
            }
        h && (h.addObserver(o), o.setDataType(h.getReturnType()));
      }
  }
}, /**
 * Helper method to check if an unknown function is an imported entity
 * @param {String} funcName 
 * @param {ScopeBlock} scopeBlock 
 * @returns {Boolean}
 */
Jl = function(i, e) {
  let n = e;
  for (; n !== void 0; ) {
    if (n.getModuleMap().has(i) || Array.from(n.getModuleMap().values()).filter((s) => s.hasDirectImport(i)).length > 0)
      return !0;
    n = n.getParentBlock() !== void 0 ? n.getParentBlock().getScope() : void 0;
  }
  return !1;
}, /**
 * Gets the names of variables in the current block that have names matching Python
 * type classes.
 * @param {StatementBlock} currentBlock 
 * @returns {String[]}
 */
Xi = function(i) {
  const e = /* @__PURE__ */ new Set(["int", "float", "bool", "str", "list", "set", "dict"]);
  let n = Array.from(i.getVariableMap().keys()).filter((o) => e.has(o)), s = i;
  for (; s.getBlockEntity() !== t.DocumentDefinition; )
    s = s.getParentBlock().getScope(), n = n.concat(Array.from(s.getVariableMap().keys()).filter((o) => e.has(o)));
  return n;
}, /**
 * Adds the most recent statement to the current block or creates a new block as needed
 * @param {Statement} lastStatement
 * @param {StatementBlock} currentBlock
 * @returns {StatementBlock}
 */
Zi = function(i, e) {
  if (!i.isBlank()) {
    const n = i.getFirstExpression(), s = i.getIndentation(), o = n.getStartLineNumber();
    let u;
    const h = m(this, L, ql).call(this, i);
    e.isScopeBlock() || (u = e.getScope().getStatementToUpdate(s, o)), n.isOneOf([t.FunctionDefinitionStatement, t.MethodDefinitionStatement]) ? (e = m(this, L, Hl).call(this, e, i, s), n.is(t.MethodDefinitionStatement) && m(this, L, Wl).call(this, e, n)) : n.is(t.ClassDefinitionStatement) ? e = m(this, L, zl).call(this, e, i, s) : n.is(a.BlockDefinitionStatement) && !n.is(t.TernaryStatement) ? e = m(this, L, jl).call(this, e, i, s, u) : u !== void 0 ? (e = m(this, L, Ht).call(this, s, e, o), u.addStatement(i, e)) : (e = m(this, L, Ht).call(this, s, e, o), e.addStatement(i)), h.length > 0 && m(this, L, Kl).call(this, h, e);
  }
  return e;
}, Kl = function(i, e) {
  for (let n of i) {
    const s = new Hc(e, n);
    e.addChildBlock(s);
  }
}, /**
 * Helper method to connect a method to its containing class
 * @param {FunctionBlock} methodBlock 
 * @param {MethodDefinitionStatement} methodDefinition
 */
Wl = function(i, e) {
  const n = i.getParentBlock();
  if (n && n.getBlockEntity() === t.ClassDefinition) {
    const s = n.getClassType(), o = e.getMethodNameExpression();
    o.setContainingClass(s), s.methods.set(o.getTextValue(), o);
  }
}, /**
 * Helper method that finds any list comprehensions within the statement. The list comprehensions
 * are copied and returned as an array to be added to a new block. The original expressions are converted
 * to placeholder data. This is to avoid variables within the list comprehension being counted twice.
 * @param {Statement} statement 
 * @returns {ListComprehensionExpression[]}
 */
ql = function(i) {
  const e = i.getExpressions();
  let n = [];
  for (const s of e) {
    const o = s.getExpressionsOfKind(t.ListComprehension);
    for (const u of o)
      n.push(u.copyAndConvertToPlaceholder());
  }
  return n;
}, /**
 * Helper method. Creates a block for a new branch
 * @param {StatementBlock} currentBlock 
 * @param {Statement} lastStatement 
 * @param {Number} statementIndent 
 * @param {BlockStatement} blockStatementToUpdate
 * @returns {StatementBlock}
 */
jl = function(i, e, n, s) {
  const o = new Iu(e, i.getScope().getId()), u = new Gr(i, o), h = m(this, L, Ht).call(this, n, i, e.getFirstLineNumber()), p = o.getFirstExpression().isOneOf([t.ElifDefinitionStatement, t.ElseDefinitionStatement]), w = o.getFirstExpression().is(t.ExceptDefinitionStatement);
  if (o.isBlockStatement() && (p || w)) {
    const S = s ? s.getStatements() : h.getStatements(), F = S[S.length - 1], N = p ? [t.IfDefinitionStatement, t.ElifDefinitionStatement, t.ElseDefinitionStatement] : [t.TryDefinitionStatement];
    if (F !== void 0 && F.isBlockStatement() && F.getFirstExpression().isOneOf(N)) {
      const v = h.getChildBlocks(), R = v[v.length - 1], O = R.getBlockEntity();
      if (p && (O === t.IfDefinition || O === t.ElifDefinition) || w && O === t.TryDefinition) {
        const Ft = R.getSiblingConditionalBranches();
        for (const ur of Ft)
          u.addSibling(ur), ur.addSibling(u);
        R.addSibling(u), u.addSibling(R);
      }
    }
  }
  return h.addChildBlock(u), s ? s.addStatement(o, u) : h.addStatement(o), u;
}, /**
 * Helper method. Creates a block for a new function
 * @param {StatementBlock} currentBlock 
 * @param {Statement} lastStatement 
 * @param {Number} statementIndent 
 * @returns {StatementBlock}
 */
Hl = function(i, e, n) {
  i = m(this, L, Ht).call(this, n, i, e.getFirstLineNumber());
  const s = new mi(i, e);
  return i.addChildBlock(s), s;
}, /**
 * Helper method. Creates a block for a new class
 * @param {StatementBlock} currentBlock 
 * @param {Statement} lastStatement 
 * @param {Number} statementIndent 
 * @returns {StatementBlock}
 */
zl = function(i, e, n) {
  i = m(this, L, Ht).call(this, n, i, e.getFirstLineNumber());
  const s = new jc(i, e);
  return i.addChildBlock(s), s;
}, /**
 * 
 * @param {Number} statementIndent 
 * @param {StatementBlock} currentBlock 
 * @param {Number} statementStartLine 
 * @returns 
 */
Ht = function(i, e, n) {
  let s = e.getIndentation();
  const o = e.getStatements();
  if (o.length > 0 && o[o.length - 1].getLastLineNumber() === n)
    return e;
  for (; e.getBlockEntity() !== t.DocumentDefinition && i <= s; ) {
    let u = e.getParentBlock();
    e = u !== void 0 ? u : c(this, Se), s = e.getIndentation();
  }
  return e;
};
class j {
  constructor(i, e, n, s, o) {
    l(this, "type");
    l(this, "docIndex");
    l(this, "affectedText");
    l(this, "firstMessage");
    l(this, "extendedFeedbackParams");
    for (this.type = i, this.docIndex = e, this.affectedText = n, this.firstMessage = s, this.extendedFeedbackParams = o; this.extendedFeedbackParams.includes("+"); )
      this.extendedFeedbackParams = this.extendedFeedbackParams.replace("+", "%2B");
    this.extendedFeedbackParams = encodeURI(this.extendedFeedbackParams);
  }
  static notImplemented() {
    return new j("Invalid", -1, "N/A", "No feedback", "");
  }
  toJSON() {
    return {
      type: this.type,
      docIndex: this.docIndex,
      affectedText: this.affectedText,
      firstMessage: this.firstMessage,
      extendedFeedbackParams: this.extendedFeedbackParams
    };
  }
}
const Yu = (g) => g.hasOwnProperty("reason") && g.reason.hasOwnProperty("contributingSymptoms") && g.reason.contributingSymptoms.length > 0, ot = (g, i) => g.type === i, _u = (g) => {
  const i = [];
  try {
    for (const e of g.occurrences)
      if (Yu(e))
        switch (g.type) {
          case P.AssignCompares.name:
            i.push(ed(g.type, e));
            break;
          case P.ColonAssigns.name:
            i.push(td(g.type, e));
            break;
          case P.CompareMultipleValuesWithOr.name:
            i.push(nd(g.type, e));
            break;
          case P.ComparisonWithBoolLiteral.name:
            i.push(sd(g.type, e));
            break;
          case P.DeferredReturn.name:
            i.push(rd(g.type, e));
            break;
          case P.ForLoopVarIsLocal.name:
          // Use this for target outside loop too?
          case P.IteratorInitialisedOutsideLoop.name:
            i.push(od(g.type, e));
            break;
          case P.FunctionCallsNoParentheses.name:
          case P.ParenthesesOnlyIfArgument.name:
            i.push(ld(g.type, e));
            break;
          case P.IterationRequiresTwoLoops.name:
            i.push(cd(g.type, e));
            break;
          case P.LocalVariablesAreGlobal.name:
            i.push(ud(g.type, e));
            break;
          case P.LoopCounter.name:
            i.push(ad(g.type, e));
            break;
          case P.MapToBooleanWithIf.name:
            i.push(dd(g.type, e));
            break;
          case P.MapToBooleanWithTernaryOperator.name:
            i.push(hd(g.type, e));
            break;
          case P.ParameterMustBeAssignedInFunction.name:
            i.push(fd(g.type, e));
            break;
          case P.PrintSameAsReturn.name:
            i.push(gd(g.type, e));
            break;
          case P.ReturnCall.name:
            i.push(pd(g.type, e));
            break;
          case P.ReturnWaitsForLoop.name:
            i.push(bd(g.type, e));
            break;
          case P.SequentialIfsAreExclusive.name:
            i.push(id(g.type, e));
            break;
          case P.StringMethodsModifyTheString.name:
            i.push(md(g.type, e));
            break;
          case P.TypeConversionModifiesArgument.name:
            i.push(wd(g.type, e));
            break;
          case P.TypeMustBeSpecified.name:
            i.push(Sd(g.type, e));
            break;
          case P.UnusedReturn.name:
            i.push(Id(g.type, e));
            break;
          case P.WhileSameAsIf.name:
            i.push(yd(g.type, e));
            break;
          default:
            console.log("Not implemented!", g.type);
        }
  } catch (e) {
    console.log(e);
  }
  return i;
}, ne = (g, i) => `?miscon=${g}&lineNumber=${i.line + 1}`, ed = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = "Should this = be == ?", u = `${ne(g, i)}&text=${s}&parentText=${e.parentText}`;
  return new j(g, n, s, o, u);
}, td = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = "Should this : be = ?", u = `${ne(g, i)}&text=${s}&variableName=${e.before.value}&assignedValue=${e.after.value}`;
  return new j(g, n, s, o, u);
}, nd = (g, i) => {
  const e = "NA", n = i.docIndex, s = i.reason.contributingSymptoms[0].text ? i.reason.contributingSymptoms[0].text : e, o = i.reason.contributingSymptoms[0].completeBooleanExpression ? `${i.reason.contributingSymptoms[0].completeBooleanExpression} will always be True` : "This boolean expression will always be True";
  let u = e, h = e, p = e;
  const w = [], S = [], F = [], N = [], v = [];
  for (const O of i.reason.contributingSymptoms)
    ot(O, b.NaturalLanguageBoolean.name) && (O.completeBooleanExpression && (u = O.completeBooleanExpression), O.parentText && (h = O.parentText), O.parentEntity && (p = O.parentEntity), O.rightSideEntity && (O.rightSideEntity === t.ComparisonExpression.name && (w.length === 0 || w[0] !== O.rightSideText) ? w.unshift(O.rightSideText) : O.rightSideEntity !== t.BooleanExpression.name && (S.length === 0 || S[0] !== O.rightSideText) && (S.unshift(O.rightSideText), N.unshift(O.rightSideEntity), F.unshift(O.rightSideType))), O.leftSideEntity && (O.leftSideEntity === t.ComparisonExpression.name ? w.unshift(O.leftSideText) : O.leftSideEntity !== t.BooleanExpression.name && (S.unshift(O.leftSideText), N.unshift(O.leftSideEntity), F.unshift(O.leftSideType))), v.unshift(O.operator));
  const R = `${ne(g, i)}&booleanExpressionText=${u}&parentText=${h}&parentEntity=${p}&${w.map((O) => "comparisonText=" + O).join("&")}&${S.map((O) => "otherText=" + O).join("&")}&${N.map((O) => "otherEntity=" + O).join("&")}&${F.map((O) => "otherType=" + O).join("&")}&${v.map((O) => "operator=" + O).join("&")}}`;
  return new j(g, n, s, o, R);
}, sd = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = e.boolValue, u = e.boolLiteral, h = u === "True" ? `${o} is boolean so == True is not needed` : `${s} is the same as not ${o}`, p = `${ne(g, i)}&text=${s}&boolValue=${o}&boolLiteral=${u}`;
  return new j(g, n, s, h, p);
}, id = (g, i) => {
  const e = i.docIndex;
  let n = i.reason.contributingSymptoms[0].text;
  const s = /* @__PURE__ */ new Set();
  for (const p of i.reason.contributingSymptoms) {
    if (!ot(p, b.SequentialIfs.name))
      continue;
    const w = p.branchMatches.flat();
    w.forEach((O) => {
      s.add(O.lineNum + 1);
    });
    const S = w[0].docIndex - p.docIndex, F = S, N = w[w.length - 1].docIndex - w[0].docIndex + S, v = n.substring(N).indexOf(`
`), R = v > -1 ? N + v : n.length;
    n = n.substring(F, R);
  }
  const u = `Should this sequence of if statements be if${Array(s.size - 1).fill("-elif").join("")} instead?`, h = `${ne(g, i)}&fullText=${n}&${[...s].map((p) => "statementLine=" + p).join("&")}`;
  return new j(g, e, n, u, h);
}, rd = (g, i) => {
  for (const e of i.reason.contributingSymptoms)
    if (ot(e, b.UnreachableExit.name) && e.exitKeyword === "return") {
      const n = e.docIndex, s = e.text, o = "This code will never execute", u = `${ne(g, i)}&exitKeyword=${e.exitKeyword}`;
      return new j(g, n, s, o, u);
    }
  return j.notImplemented();
}, od = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = e.text, s = e.usageText, o = e.overwrittenVar[e.overwrittenVar.length - 1].lineNum + 1, u = e.prevUsageIsDefinition, h = u ? `${n} does not need to be defined if it is only used in the for loop on line ${e.line + 1}` : `This for loop changes the value of an existing variable, ${n}`, p = u ? e.overwrittenVar[0].docIndex : i.docIndex, w = `${ne(g, i)}&loopVariable=${n}&forDefinition=${s}&overwrittenVarLine=${o}&overwrittenIsDefinition=${u}`;
  return new j(g, p, n, h, w);
}, ad = (g, i) => {
  const e = i.docIndex, n = i.reason.contributingSymptoms[0], s = n.text, o = `This value of ${s} will be ignored by the next loop iteration`, u = `${ne(g, i)}&loopVarName=${s}&definitionText=${n.definitionText}&loopVarTypeAtDefinition=${n.loopVarTypeAtDefinition}&modificationText=${n.modificationText}`;
  return new j(g, e, s, o, u);
}, ld = (g, i) => {
  let e = i.docIndex, n = `${ne(g, i)}`, s = "";
  const o = i.reason.contributingSymptoms;
  if (o.length === 2) {
    const h = ot(o[0], b.UndefinedVariable.name) ? o[0] : o[1], p = ot(o[1], b.VariableWithSameNameAsFunction.name) ? o[1] : o[0];
    ot(h, b.UndefinedVariable.name) && ot(p, b.VariableWithSameNameAsFunction.name) && (s = p.text, e = h.docIndex, n = `${n}&funcName=${s}&funcType=${p.funcType}&funcExpectedArgs=${p.numArgsExpected}&matchesUndefinedVarOnLine=${h.line + 1}`);
  } else o.length === 1 && ot(o[0], b.VariableWithSameNameAsFunction.name) && (s = o[0].text, e = o[0].docIndex, n = `${n}&funcName=${s}&funcType=${o[0].funcType}&funcExpectedArgs=${o[0].numArgsExpected}`);
  const u = `Did you forget () after ${s}?`;
  return new j(g, e, s, u, n);
}, cd = (g, i) => {
  const e = i.docIndex, n = "This while loop might not be needed", s = i.reason.contributingSymptoms, o = s[0].type === b.LoopVarNotModified.name ? s[0] : s[1], u = s[0].type === b.LoopVarModifiedInChildLoop.name ? s[0] : s[1], h = o.text, p = `${ne(g, i)}&outerLoopText=${h}&outerLoopVariable=${u.text}${u.modifiedIn.map((w) => `&modifiedInType=${w.loopType}&modifiedInStartLine=${w.startLine + 1}`)}`;
  return new j(g, e, h, n, p);
}, ud = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = `${s} is undefined`;
  let u = `${ne(g, i)}&text=${s}`;
  return e.hasOwnProperty("localVariables") && (u = `${u}${e.localVariables.map((h) => `&localScope=${h.scope}${h.hasOwnProperty("functionName") ? "&localFunction=" + h.functionName : "&localFunction=NA"}`).join()}`), new j(g, n, s, o, u);
}, dd = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = "This conditional could be shortened to one line";
  let u = `${ne(g, i)}&text=${e.text}&form=${e.form}`;
  return e.form === "valueAssigned" && (u = `${u}&variableAssigned=${e.variableAssigned}`), e.condition && e.condition.length > 0 && (u = `${u}&condition=${e.condition}`), new j(g, n, s, o, u);
}, hd = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = "This ternary is not needed", u = `${ne(g, i)}&text=${e.text}&boolExp=${e.boolValue}&valueIfTrue=${e.boolLiteralIfTrue}&valueIfFalse=${e.boolLiteralIfFalse}&parentText=${e.parentText}&parentEntity=${e.parentEntity}`;
  return new j(g, n, s, o, u);
}, fd = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = "This statement replaces the value of an argument passed to the function";
  let u = `${ne(g, i)}&paramName=${s}`;
  return e.functionBlock !== "" && (u = `${u}&functionName=${e.functionBlock}`), new j(g, n, s, o, u);
}, gd = (g, i) => {
  const e = i.reason.contributingSymptoms.filter((o) => o.type === b.AssignedNone.name), n = i.reason.contributingSymptoms.filter((o) => b.UnusedReturn);
  let s = `${ne(g, i)}`;
  if (e.length > 0) {
    const o = e[0], u = o.docIndex, h = o.expressionNoValue.value, p = `${o.expressionNoValue.value} has no value`;
    if (s = `${s}&variant=AssignedNoReturn&expressionNoValueType=${o.expressionNoValue.type}&expressionNoValueUsage=${o.usage}&expressionNoValueText=${o.expressionNoValue.value}&expressionNoValueTarget=${o.target}`, o.expressionNoValue.type === "userDefinedFunction") {
      const w = i.reason.contributingSymptoms.filter((F) => F.type === b.FunctionPrints.name), S = w.length === 1 ? w[0] : void 0;
      S && S.printLines.filter((N) => N.isEndOfExitBranch).length > 0 && !S.functionReturns && (s = `${s}&isFuncPrintNoReturn=true`);
    }
    return new j(g, u, h, p, s);
  } else if (n.length > 0) {
    const o = n[0], u = o.docIndex, h = o.unusedFunc.value, p = `The value returned by ${h}() is not used`;
    if (s = `${s}&variant=UnusedReturn&expressionUnusedType=${o.unusedFunc.type}&expressionUnusedText=${o.unusedFunc.value}`, o.unusedFunc.type === "userDefinedFunction") {
      const w = i.reason.contributingSymptoms.filter((F) => F.type === b.FunctionPrints.name), S = w.length === 1 ? w[0] : void 0;
      S && S.text === o.unusedFunc.value && (s = `${s}&isFuncPrintsAndReturns=true`);
    }
    return new j(g, u, h, p, s);
  }
  return j.notImplemented();
}, pd = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = `The () around ${e.textInParentheses} are not needed`, u = `${ne(g, i)}&text=${s}&returnValueType=${e.contents}&returnValueText=${e.textInParentheses}`;
  return new j(g, n, s, o, u);
}, md = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = e.unusedFunc.value, u = e.unusedFunc.returnType, h = new RegExp("[ ]*.[ ]*" + o), p = s.split(h)[0], w = `${o}() will not change ${p}`, S = `${ne(g, i)}&text=${s}&unusedMethod=${o}&unusedReturnType=${u}&stringValue=${p}`;
  return new j(g, n, s, w, S);
}, wd = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = e.unusedFunc.value, u = e.unusedFunc.returnType, h = s.substring(s.indexOf("(") + 1, s.lastIndexOf(")")), p = `${o}() will not change ${h}`, w = `${ne(g, i)}&text=${s}&typeFunction=${o}&returnType=${u}&argument=${h}`;
  return new j(g, n, s, p, w);
}, Sd = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = "This type conversion is not needed", u = `${ne(g, i)}&text=${s}&argType=${e.argType}&convertedType=${e.convertedType}&convertedValue=${e.convertedValue}`;
  return new j(g, n, s, o, u);
}, Id = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = e.unusedFunc.returnType, u = o !== d.Unknown.name && o !== d.Invalid.name && o !== d.NA.name && o !== d.NotParsed.name, h = u ? `The ${o} returned by ${s} is not used` : `The value returned by ${s} is not used`, p = `${ne(g, i)}&expressionUnusedType=${e.unusedFunc.type}&expressionUnusedText=${e.unusedFunc.value}${u ? "&returnType=" + o : ""}`;
  return new j(g, n, s, h, p);
}, bd = (g, i) => {
  const e = i.docIndex, n = i.reason.contributingSymptoms[0], s = n.text, o = n.loopType, u = n.exitTypes.length, h = n.exitLevel, p = `This ${o} loop always ends the first time it runs because of where return is used`, w = `${ne(g, i)}&text=${s}&loopType=${o}&returnCount=${u}&exitLevel=${h}`;
  return new j(g, e, s, p, w);
}, yd = (g, i) => {
  const e = i.docIndex, n = i.reason.contributingSymptoms, s = n.filter((h) => h.type === b.LoopReturn.name), o = n.filter((h) => h.type === b.LoopVarNotModified.name), u = ne(g, i);
  if (o.length === 1) {
    const h = o[0].text, p = "Could this while loop be an if statement?", w = `${u}&variant=${o[0].type}&definitionText=${h}&loopText=${o[0].loopText}${o[0].unmodifiedVars.map((S) => `&loopVar=${S}`)}${s.map((S) => `&earlyExitLine=${S.line + 1}&earlyExitText=${S.text}`)}`;
    return new j(g, e, h, p, w);
  }
  return j.notImplemented();
}, Fd = (g, i) => g.getLineNumber() === i.getLineNumber() && g.getID() === i.getID() ? 0 : g.getLineNumber() < i.getLineNumber() || g.getLineNumber() === i.getLineNumber() && g.getID() < i.getID() ? -1 : 1, Nd = (g, i = !1, e = !1, n = !1) => {
  try {
    let s = new Zu(g);
    const o = s.getSymptoms().sort(Fd).map((N) => {
      try {
        return N.toJSON();
      } catch (v) {
        return {
          error: "Could not process symptom",
          msg: v.toString()
        };
      }
    }), u = Array.from(s.getVariables().values()).flat().map((N) => {
      try {
        return N.toJSON();
      } catch (v) {
        return {
          error: "Could not process variable",
          msg: v.toString()
        };
      }
    }), h = Array.from(s.getUserDefinedFunctions().values()).filter((N) => N.is(t.FunctionName)).map((N) => {
      try {
        return N.toJSON();
      } catch (v) {
        return {
          error: "Could not process function",
          msg: v.toString()
        };
      }
    }), p = Array.from(s.getUserDefinedClasses().values()).map((N) => N.toJSON()), w = Array.from(s.getMisconceptions().values()).map((N) => {
      try {
        return N.toJSON();
      } catch (v) {
        return {
          error: "Could not process misconception",
          msg: v.toString()
        };
      }
    }), S = s.getBlocks(), F = {
      misconceptions: w,
      symptoms: o,
      blocks: S.toJSON(),
      variables: u,
      functions: h,
      classes: p
    };
    if (i) {
      const N = S.toTree();
      F.tree = N;
    }
    if (e) {
      const N = s.getGraph();
      F.graph = N.toJSON();
    }
    return F;
  } catch (s) {
    console.log("Unable to parse", s);
    const o = {
      misconceptions: [],
      symptoms: [],
      blocks: [],
      variables: [],
      functions: [],
      classes: [],
      error: "Unable to parse!"
    };
    return n && (o.errorDetail = s.toString()), o;
  }
}, Cd = () => {
  let g = {};
  for (let i in b)
    g[b[i].name] = b[i].description;
  return g;
}, Od = () => {
  let g = {};
  for (let i in P)
    g[P[i].name] = P[i].description;
  return g;
}, Md = (g, i = !1) => {
  const e = Nd(g), n = {};
  if (i && (n.parse = e), n.feedback = [], e.hasOwnProperty("misconceptions"))
    for (const s of e.misconceptions)
      s.hasOwnProperty("type") && n.feedback.push(..._u(s).map((o) => o.toJSON()));
  return n;
};
export {
  Md as feedback,
  Od as misconceptionInfo,
  Nd as parse,
  Cd as symptomInfo
};
