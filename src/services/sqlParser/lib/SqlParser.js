// Generated from /home/rogerk/projects/rogerk/firestore-ui/antlr/grammar/SqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SqlParserVisitor = require('./SqlParserVisitor').SqlParserVisitor;

var grammarFileName = "SqlParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u041c\u0213\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004",
    "+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u0004",
    "2\t2\u00043\t3\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0005",
    "\u0003k\n\u0003\u0003\u0003\u0005\u0003n\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0005\u0004t\n\u0004\u0003\u0004\u0005\u0004",
    "w\n\u0004\u0003\u0004\u0007\u0004z\n\u0004\f\u0004\u000e\u0004}\u000b",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0081\n\u0004\u0003\u0004",
    "\u0005\u0004\u0084\n\u0004\u0003\u0004\u0005\u0004\u0087\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u008d\n\u0005",
    "\u0003\u0006\u0003\u0006\u0005\u0006\u0091\n\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u0098\n\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "\u009f\n\u0006\f\u0006\u000e\u0006\u00a2\u000b\u0006\u0005\u0006\u00a4",
    "\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u00af\n",
    "\u0007\f\u0007\u000e\u0007\u00b2\u000b\u0007\u0003\b\u0003\b\u0003\b",
    "\u0005\b\u00b7\n\b\u0003\b\u0005\b\u00ba\n\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0007\b\u00c0\n\b\f\b\u000e\b\u00c3\u000b\b\u0003\b\u0003\b",
    "\u0005\b\u00c7\n\b\u0003\b\u0005\b\u00ca\n\b\u0003\b\u0005\b\u00cd\n",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00d3\n\t\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0005\n\u00da\n\n\u0003\n\u0005\n\u00dd\n\n",
    "\u0003\n\u0003\n\u0005\n\u00e1\n\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u00e7\n\u000b\u0003\u000b\u0005\u000b\u00ea",
    "\n\u000b\u0005\u000b\u00ec\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0007",
    "\f\u00f2\n\f\f\f\u000e\f\u00f5\u000b\f\u0003\f\u0003\f\u0005\f\u00f9",
    "\n\f\u0005\f\u00fb\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0005\r\u0103\n\r\u0003\r\u0005\r\u0106\n\r\u0003\r\u0003\r\u0005",
    "\r\u010a\n\r\u0003\r\u0005\r\u010d\n\r\u0005\r\u010f\n\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u0115\n\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u011c",
    "\n\u000f\f\u000f\u000e\u000f\u011f\u000b\u000f\u0003\u0010\u0003\u0010",
    "\u0005\u0010\u0123\n\u0010\u0003\u0011\u0003\u0011\u0005\u0011\u0127",
    "\n\u0011\u0003\u0011\u0005\u0011\u012a\n\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0005\u0012\u0130\n\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0137\n\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0005\u0014\u013f\n\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0007\u0016\u0145\n\u0016\f\u0016\u000e\u0016\u0148\u000b\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0005\u0018\u0150\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005",
    "\u0019\u015b\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a",
    "\u0160\n\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0005\u001e\u0169\n\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0005\u001f\u0174\n\u001f\u0003 \u0003 \u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0005!\u017d\n!\u0003\"\u0003\"\u0005",
    "\"\u0181\n\"\u0003#\u0003#\u0003#\u0007#\u0186\n#\f#\u000e#\u0189\u000b",
    "#\u0003$\u0003$\u0003$\u0007$\u018e\n$\f$\u000e$\u0191\u000b$\u0003",
    "%\u0003%\u0003%\u0007%\u0196\n%\f%\u000e%\u0199\u000b%\u0003&\u0003",
    "&\u0003&\u0003&\u0005&\u019f\n&\u0003&\u0003&\u0003&\u0003&\u0007&\u01a5",
    "\n&\f&\u000e&\u01a8\u000b&\u0003\'\u0003\'\u0005\'\u01ac\n\'\u0003\'",
    "\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0005\'\u01b6",
    "\n\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'",
    "\u0005\'\u01c0\n\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0005\'\u01c9\n\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0005\'",
    "\u01d0\n\'\u0003\'\u0003\'\u0003\'\u0003\'\u0005\'\u01d6\n\'\u0003(",
    "\u0003(\u0003(\u0007(\u01db\n(\f(\u000e(\u01de\u000b(\u0003)\u0003)",
    "\u0005)\u01e2\n)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0005*\u01ea",
    "\n*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0005+\u01fa\n+\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0005,\u0203\n,\u0003-\u0003-\u0003.\u0003.\u0003",
    "/\u0003/\u00030\u00030\u00031\u00031\u00032\u00032\u00033\u00033\u0003",
    "3\u0002\u0003J4\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bd\u0002",
    "\u0011\u0004\u0002\u00ac\u00ac\u0242\u0242\u0004\u0002\u000e\u000e+",
    "+\u0003\u0002\u02a7\u02b2\u0004\u0002\u0403\u0405\u040e\u040e\u0004",
    "\u0002::\u00a2\u00a2\u0004\u0002jj\u0411\u0411\u0004\u0002hh\u03f8\u03f8",
    "\u0004\u0002}}\u0088\u0088\u0003\u0002\u027f\u02a6\u0003\u0002\u02b3",
    "\u02b6\u0003\u0002\u025c\u0264\u0003\u0002\u0254\u025b\u0005\u0002\u00c9",
    "\u00cd\u00da\u00da\u00dd\u00dd\u0010\u0002\"\"..kk\u0099\u0099\u00df",
    "\u00df\u0110\u0184\u0186\u0223\u0225\u0244\u0247\u024e\u0253\u0253\u0266",
    "\u027e\u02ac\u02ac\u02d8\u02d8\u037e\u037e\u0012\u0002%%YY\u0087\u0087",
    "\u00c9\u00cb\u00cd\u00cd\u00eb\u00ec\u00f1\u00f1\u0108\u0108\u0185\u0185",
    "\u0246\u0246\u0254\u025b\u0278\u0278\u02b7\u02b7\u02ba\u02d7\u02d9\u037d",
    "\u037f\u03e3\u0002\u0246\u0002f\u0003\u0002\u0002\u0002\u0004j\u0003",
    "\u0002\u0002\u0002\u0006{\u0003\u0002\u0002\u0002\b\u008c\u0003\u0002",
    "\u0002\u0002\n\u008e\u0003\u0002\u0002\u0002\f\u00a5\u0003\u0002\u0002",
    "\u0002\u000e\u00b3\u0003\u0002\u0002\u0002\u0010\u00ce\u0003\u0002\u0002",
    "\u0002\u0012\u00d4\u0003\u0002\u0002\u0002\u0014\u00e2\u0003\u0002\u0002",
    "\u0002\u0016\u00fa\u0003\u0002\u0002\u0002\u0018\u010e\u0003\u0002\u0002",
    "\u0002\u001a\u0110\u0003\u0002\u0002\u0002\u001c\u0116\u0003\u0002\u0002",
    "\u0002\u001e\u0120\u0003\u0002\u0002\u0002 \u0124\u0003\u0002\u0002",
    "\u0002\"\u012b\u0003\u0002\u0002\u0002$\u0138\u0003\u0002\u0002\u0002",
    "&\u013a\u0003\u0002\u0002\u0002(\u0140\u0003\u0002\u0002\u0002*\u0142",
    "\u0003\u0002\u0002\u0002,\u0149\u0003\u0002\u0002\u0002.\u014f\u0003",
    "\u0002\u0002\u00020\u015a\u0003\u0002\u0002\u00022\u015f\u0003\u0002",
    "\u0002\u00024\u0161\u0003\u0002\u0002\u00026\u0163\u0003\u0002\u0002",
    "\u00028\u0165\u0003\u0002\u0002\u0002:\u0168\u0003\u0002\u0002\u0002",
    "<\u0173\u0003\u0002\u0002\u0002>\u0175\u0003\u0002\u0002\u0002@\u017c",
    "\u0003\u0002\u0002\u0002B\u0180\u0003\u0002\u0002\u0002D\u0182\u0003",
    "\u0002\u0002\u0002F\u018a\u0003\u0002\u0002\u0002H\u0192\u0003\u0002",
    "\u0002\u0002J\u019e\u0003\u0002\u0002\u0002L\u01d5\u0003\u0002\u0002",
    "\u0002N\u01d7\u0003\u0002\u0002\u0002P\u01e1\u0003\u0002\u0002\u0002",
    "R\u01e9\u0003\u0002\u0002\u0002T\u01f9\u0003\u0002\u0002\u0002V\u0202",
    "\u0003\u0002\u0002\u0002X\u0204\u0003\u0002\u0002\u0002Z\u0206\u0003",
    "\u0002\u0002\u0002\\\u0208\u0003\u0002\u0002\u0002^\u020a\u0003\u0002",
    "\u0002\u0002`\u020c\u0003\u0002\u0002\u0002b\u020e\u0003\u0002\u0002",
    "\u0002d\u0210\u0003\u0002\u0002\u0002fg\u0005\u0004\u0003\u0002gh\u0007",
    "\u0002\u0002\u0003h\u0003\u0003\u0002\u0002\u0002ik\u0005\u0006\u0004",
    "\u0002ji\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002km\u0003\u0002",
    "\u0002\u0002ln\u0007\u03f1\u0002\u0002ml\u0003\u0002\u0002\u0002mn\u0003",
    "\u0002\u0002\u0002no\u0003\u0002\u0002\u0002op\u0007\u0002\u0002\u0003",
    "p\u0005\u0003\u0002\u0002\u0002qs\u0005\b\u0005\u0002rt\u0007\u03f1",
    "\u0002\u0002sr\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tv\u0003",
    "\u0002\u0002\u0002uw\u0007\u0401\u0002\u0002vu\u0003\u0002\u0002\u0002",
    "vw\u0003\u0002\u0002\u0002wz\u0003\u0002\u0002\u0002xz\u0007\u0401\u0002",
    "\u0002yq\u0003\u0002\u0002\u0002yx\u0003\u0002\u0002\u0002z}\u0003\u0002",
    "\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u0086",
    "\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002~\u0083\u0005\b\u0005",
    "\u0002\u007f\u0081\u0007\u03f1\u0002\u0002\u0080\u007f\u0003\u0002\u0002",
    "\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002",
    "\u0002\u0082\u0084\u0007\u0401\u0002\u0002\u0083\u0080\u0003\u0002\u0002",
    "\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0087\u0003\u0002\u0002",
    "\u0002\u0085\u0087\u0007\u0401\u0002\u0002\u0086~\u0003\u0002\u0002",
    "\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0087\u0007\u0003\u0002\u0002",
    "\u0002\u0088\u008d\u0005\u0014\u000b\u0002\u0089\u008d\u0005\n\u0006",
    "\u0002\u008a\u008d\u0005\u000e\b\u0002\u008b\u008d\u0005\u0012\n\u0002",
    "\u008c\u0088\u0003\u0002\u0002\u0002\u008c\u0089\u0003\u0002\u0002\u0002",
    "\u008c\u008a\u0003\u0002\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002",
    "\u008d\t\u0003\u0002\u0002\u0002\u008e\u0090\u0007N\u0002\u0002\u008f",
    "\u0091\u0007P\u0002\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0090",
    "\u0091\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092",
    "\u00a3\u0005(\u0015\u0002\u0093\u0094\u0007\u03fe\u0002\u0002\u0094",
    "\u0095\u0005D#\u0002\u0095\u0096\u0007\u03ff\u0002\u0002\u0096\u0098",
    "\u0003\u0002\u0002\u0002\u0097\u0093\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u00a4",
    "\u0005\f\u0007\u0002\u009a\u009b\u0007\u008c\u0002\u0002\u009b\u00a0",
    "\u0005\u0010\t\u0002\u009c\u009d\u0007\u0400\u0002\u0002\u009d\u009f",
    "\u0005\u0010\t\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009f\u00a2",
    "\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1",
    "\u0003\u0002\u0002\u0002\u00a1\u00a4\u0003\u0002\u0002\u0002\u00a2\u00a0",
    "\u0003\u0002\u0002\u0002\u00a3\u0097\u0003\u0002\u0002\u0002\u00a3\u009a",
    "\u0003\u0002\u0002\u0002\u00a4\u000b\u0003\u0002\u0002\u0002\u00a5\u00a6",
    "\t\u0002\u0002\u0002\u00a6\u00a7\u0007\u03fe\u0002\u0002\u00a7\u00a8",
    "\u0005H%\u0002\u00a8\u00b0\u0007\u03ff\u0002\u0002\u00a9\u00aa\u0007",
    "\u0400\u0002\u0002\u00aa\u00ab\u0007\u03fe\u0002\u0002\u00ab\u00ac\u0005",
    "H%\u0002\u00ac\u00ad\u0007\u03ff\u0002\u0002\u00ad\u00af\u0003\u0002",
    "\u0002\u0002\u00ae\u00a9\u0003\u0002\u0002\u0002\u00af\u00b2\u0003\u0002",
    "\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002",
    "\u0002\u0002\u00b1\r\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0007\u00a8\u0002\u0002\u00b4\u00b9\u0005(",
    "\u0015\u0002\u00b5\u00b7\u0007\r\u0002\u0002\u00b6\u00b5\u0003\u0002",
    "\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002",
    "\u0002\u0002\u00b8\u00ba\u0005.\u0018\u0002\u00b9\u00b6\u0003\u0002",
    "\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002",
    "\u0002\u0002\u00bb\u00bc\u0007\u008c\u0002\u0002\u00bc\u00c1\u0005\u0010",
    "\t\u0002\u00bd\u00be\u0007\u0400\u0002\u0002\u00be\u00c0\u0005\u0010",
    "\t\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00c0\u00c3\u0003\u0002",
    "\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002",
    "\u0002\u0002\u00c2\u00c6\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002",
    "\u0002\u0002\u00c4\u00c5\u0007\u00ae\u0002\u0002\u00c5\u00c7\u0005J",
    "&\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002",
    "\u0002\u0002\u00c7\u00c9\u0003\u0002\u0002\u0002\u00c8\u00ca\u0005\u001c",
    "\u000f\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002",
    "\u0002\u0002\u00ca\u00cc\u0003\u0002\u0002\u0002\u00cb\u00cd\u0005\"",
    "\u0012\u0002\u00cc\u00cb\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002",
    "\u0002\u0002\u00cd\u000f\u0003\u0002\u0002\u0002\u00ce\u00cf\u0005*",
    "\u0016\u0002\u00cf\u00d2\u0007\u03f5\u0002\u0002\u00d0\u00d3\u0005P",
    ")\u0002\u00d1\u00d3\u0007(\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002",
    "\u0002\u00d2\u00d1\u0003\u0002\u0002\u0002\u00d3\u0011\u0003\u0002\u0002",
    "\u0002\u00d4\u00d5\u0007*\u0002\u0002\u00d5\u00d6\u0007?\u0002\u0002",
    "\u00d6\u00d9\u0005(\u0015\u0002\u00d7\u00d8\u0007\u00ae\u0002\u0002",
    "\u00d8\u00da\u0005J&\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9",
    "\u00da\u0003\u0002\u0002\u0002\u00da\u00dc\u0003\u0002\u0002\u0002\u00db",
    "\u00dd\u0005\u001c\u000f\u0002\u00dc\u00db\u0003\u0002\u0002\u0002\u00dc",
    "\u00dd\u0003\u0002\u0002\u0002\u00dd\u00e0\u0003\u0002\u0002\u0002\u00de",
    "\u00df\u0007[\u0002\u0002\u00df\u00e1\u0005$\u0013\u0002\u00e0\u00de",
    "\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u0013",
    "\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007\u008b\u0002\u0002\u00e3\u00eb",
    "\u0005\u0016\f\u0002\u00e4\u00e6\u0005\u001a\u000e\u0002\u00e5\u00e7",
    "\u0005\u001c\u000f\u0002\u00e6\u00e5\u0003\u0002\u0002\u0002\u00e6\u00e7",
    "\u0003\u0002\u0002\u0002\u00e7\u00e9\u0003\u0002\u0002\u0002\u00e8\u00ea",
    "\u0005\"\u0012\u0002\u00e9\u00e8\u0003\u0002\u0002\u0002\u00e9\u00ea",
    "\u0003\u0002\u0002\u0002\u00ea\u00ec\u0003\u0002\u0002\u0002\u00eb\u00e4",
    "\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec\u0015",
    "\u0003\u0002\u0002\u0002\u00ed\u00fb\u0007\u03ed\u0002\u0002\u00ee\u00f3",
    "\u0005\u0018\r\u0002\u00ef\u00f0\u0007\u0400\u0002\u0002\u00f0\u00f2",
    "\u0005\u0018\r\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f2\u00f5",
    "\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f3\u00f4",
    "\u0003\u0002\u0002\u0002\u00f4\u00f8\u0003\u0002\u0002\u0002\u00f5\u00f3",
    "\u0003\u0002\u0002\u0002\u00f6\u00f7\u0007\u0400\u0002\u0002\u00f7\u00f9",
    "\u0007\u03ed\u0002\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f8\u00f9",
    "\u0003\u0002\u0002\u0002\u00f9\u00fb\u0003\u0002\u0002\u0002\u00fa\u00ed",
    "\u0003\u0002\u0002\u0002\u00fa\u00ee\u0003\u0002\u0002\u0002\u00fb\u0017",
    "\u0003\u0002\u0002\u0002\u00fc\u00fd\u0005&\u0014\u0002\u00fd\u00fe",
    "\u0007\u03fd\u0002\u0002\u00fe\u00ff\u0007\u03ed\u0002\u0002\u00ff\u010f",
    "\u0003\u0002\u0002\u0002\u0100\u0105\u0005*\u0016\u0002\u0101\u0103",
    "\u0007\r\u0002\u0002\u0102\u0101\u0003\u0002\u0002\u0002\u0102\u0103",
    "\u0003\u0002\u0002\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104\u0106",
    "\u0005.\u0018\u0002\u0105\u0102\u0003\u0002\u0002\u0002\u0105\u0106",
    "\u0003\u0002\u0002\u0002\u0106\u010f\u0003\u0002\u0002\u0002\u0107\u010c",
    "\u0005@!\u0002\u0108\u010a\u0007\r\u0002\u0002\u0109\u0108\u0003\u0002",
    "\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002",
    "\u0002\u0002\u010b\u010d\u0005.\u0018\u0002\u010c\u0109\u0003\u0002",
    "\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u010f\u0003\u0002",
    "\u0002\u0002\u010e\u00fc\u0003\u0002\u0002\u0002\u010e\u0100\u0003\u0002",
    "\u0002\u0002\u010e\u0107\u0003\u0002\u0002\u0002\u010f\u0019\u0003\u0002",
    "\u0002\u0002\u0110\u0111\u0007?\u0002\u0002\u0111\u0114\u0005 \u0011",
    "\u0002\u0112\u0113\u0007\u00ae\u0002\u0002\u0113\u0115\u0005J&\u0002",
    "\u0114\u0112\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002",
    "\u0115\u001b\u0003\u0002\u0002\u0002\u0116\u0117\u0007q\u0002\u0002",
    "\u0117\u0118\u0007\u0012\u0002\u0002\u0118\u011d\u0005\u001e\u0010\u0002",
    "\u0119\u011a\u0007\u0400\u0002\u0002\u011a\u011c\u0005\u001e\u0010\u0002",
    "\u011b\u0119\u0003\u0002\u0002\u0002\u011c\u011f\u0003\u0002\u0002\u0002",
    "\u011d\u011b\u0003\u0002\u0002\u0002\u011d\u011e\u0003\u0002\u0002\u0002",
    "\u011e\u001d\u0003\u0002\u0002\u0002\u011f\u011d\u0003\u0002\u0002\u0002",
    "\u0120\u0122\u0005*\u0016\u0002\u0121\u0123\t\u0003\u0002\u0002\u0122",
    "\u0121\u0003\u0002\u0002\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123",
    "\u001f\u0003\u0002\u0002\u0002\u0124\u0129\u0005(\u0015\u0002\u0125",
    "\u0127\u0007\r\u0002\u0002\u0126\u0125\u0003\u0002\u0002\u0002\u0126",
    "\u0127\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002\u0002\u0002\u0128",
    "\u012a\u0005.\u0018\u0002\u0129\u0126\u0003\u0002\u0002\u0002\u0129",
    "\u012a\u0003\u0002\u0002\u0002\u012a!\u0003\u0002\u0002\u0002\u012b",
    "\u0136\u0007[\u0002\u0002\u012c\u012d\u0005$\u0013\u0002\u012d\u012e",
    "\u0007\u0400\u0002\u0002\u012e\u0130\u0003\u0002\u0002\u0002\u012f\u012c",
    "\u0003\u0002\u0002\u0002\u012f\u0130\u0003\u0002\u0002\u0002\u0130\u0131",
    "\u0003\u0002\u0002\u0002\u0131\u0137\u0005$\u0013\u0002\u0132\u0133",
    "\u0005$\u0013\u0002\u0133\u0134\u0007\u01c6\u0002\u0002\u0134\u0135",
    "\u0005$\u0013\u0002\u0135\u0137\u0003\u0002\u0002\u0002\u0136\u012f",
    "\u0003\u0002\u0002\u0002\u0136\u0132\u0003\u0002\u0002\u0002\u0137#",
    "\u0003\u0002\u0002\u0002\u0138\u0139\u00054\u001b\u0002\u0139%\u0003",
    "\u0002\u0002\u0002\u013a\u013e\u0005.\u0018\u0002\u013b\u013f\u0007",
    "\u0414\u0002\u0002\u013c\u013d\u0007\u03fd\u0002\u0002\u013d\u013f\u0005",
    ".\u0018\u0002\u013e\u013b\u0003\u0002\u0002\u0002\u013e\u013c\u0003",
    "\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013f\'\u0003",
    "\u0002\u0002\u0002\u0140\u0141\u0005&\u0014\u0002\u0141)\u0003\u0002",
    "\u0002\u0002\u0142\u0146\u0005.\u0018\u0002\u0143\u0145\u00052\u001a",
    "\u0002\u0144\u0143\u0003\u0002\u0002\u0002\u0145\u0148\u0003\u0002\u0002",
    "\u0002\u0146\u0144\u0003\u0002\u0002\u0002\u0146\u0147\u0003\u0002\u0002",
    "\u0002\u0147+\u0003\u0002\u0002\u0002\u0148\u0146\u0003\u0002\u0002",
    "\u0002\u0149\u014a\t\u0004\u0002\u0002\u014a-\u0003\u0002\u0002\u0002",
    "\u014b\u0150\u00050\u0019\u0002\u014c\u0150\u0007\u0416\u0002\u0002",
    "\u014d\u0150\u0007\u0417\u0002\u0002\u014e\u0150\u0007\u0418\u0002\u0002",
    "\u014f\u014b\u0003\u0002\u0002\u0002\u014f\u014c\u0003\u0002\u0002\u0002",
    "\u014f\u014d\u0003\u0002\u0002\u0002\u014f\u014e\u0003\u0002\u0002\u0002",
    "\u0150/\u0003\u0002\u0002\u0002\u0151\u015b\u0007\u0415\u0002\u0002",
    "\u0152\u015b\u0005X-\u0002\u0153\u015b\u0005Z.\u0002\u0154\u015b\u0005",
    ",\u0017\u0002\u0155\u015b\u0005\\/\u0002\u0156\u015b\u0005^0\u0002\u0157",
    "\u015b\u0005`1\u0002\u0158\u015b\u0005b2\u0002\u0159\u015b\u0005d3\u0002",
    "\u015a\u0151\u0003\u0002\u0002\u0002\u015a\u0152\u0003\u0002\u0002\u0002",
    "\u015a\u0153\u0003\u0002\u0002\u0002\u015a\u0154\u0003\u0002\u0002\u0002",
    "\u015a\u0155\u0003\u0002\u0002\u0002\u015a\u0156\u0003\u0002\u0002\u0002",
    "\u015a\u0157\u0003\u0002\u0002\u0002\u015a\u0158\u0003\u0002\u0002\u0002",
    "\u015a\u0159\u0003\u0002\u0002\u0002\u015b1\u0003\u0002\u0002\u0002",
    "\u015c\u0160\u0007\u0414\u0002\u0002\u015d\u015e\u0007\u03fd\u0002\u0002",
    "\u015e\u0160\u0005.\u0018\u0002\u015f\u015c\u0003\u0002\u0002\u0002",
    "\u015f\u015d\u0003\u0002\u0002\u0002\u01603\u0003\u0002\u0002\u0002",
    "\u0161\u0162\t\u0005\u0002\u0002\u01625\u0003\u0002\u0002\u0002\u0163",
    "\u0164\u0007\u040d\u0002\u0002\u01647\u0003\u0002\u0002\u0002\u0165",
    "\u0166\t\u0006\u0002\u0002\u01669\u0003\u0002\u0002\u0002\u0167\u0169",
    "\u0007\u0413\u0002\u0002\u0168\u0167\u0003\u0002\u0002\u0002\u0168\u0169",
    "\u0003\u0002\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002\u016a\u016b",
    "\u0007\u040f\u0002\u0002\u016b;\u0003\u0002\u0002\u0002\u016c\u0174",
    "\u0003\u0002\u0002\u0002\u016d\u0174\u00054\u001b\u0002\u016e\u016f",
    "\u0007\u03f2\u0002\u0002\u016f\u0174\u00054\u001b\u0002\u0170\u0174",
    "\u0007\u0410\u0002\u0002\u0171\u0172\u0007\u03f2\u0002\u0002\u0172\u0174",
    "\u0007\u0410\u0002\u0002\u0173\u016c\u0003\u0002\u0002\u0002\u0173\u016d",
    "\u0003\u0002\u0002\u0002\u0173\u016e\u0003\u0002\u0002\u0002\u0173\u0170",
    "\u0003\u0002\u0002\u0002\u0173\u0171\u0003\u0002\u0002\u0002\u0174=",
    "\u0003\u0002\u0002\u0002\u0175\u0176\t\u0007\u0002\u0002\u0176?\u0003",
    "\u0002\u0002\u0002\u0177\u017d\u00056\u001c\u0002\u0178\u017d\u0005",
    "<\u001f\u0002\u0179\u017d\u0005:\u001e\u0002\u017a\u017d\u00058\u001d",
    "\u0002\u017b\u017d\u0005> \u0002\u017c\u0177\u0003\u0002\u0002\u0002",
    "\u017c\u0178\u0003\u0002\u0002\u0002\u017c\u0179\u0003\u0002\u0002\u0002",
    "\u017c\u017a\u0003\u0002\u0002\u0002\u017c\u017b\u0003\u0002\u0002\u0002",
    "\u017dA\u0003\u0002\u0002\u0002\u017e\u0181\u0005@!\u0002\u017f\u0181",
    "\u0007(\u0002\u0002\u0180\u017e\u0003\u0002\u0002\u0002\u0180\u017f",
    "\u0003\u0002\u0002\u0002\u0181C\u0003\u0002\u0002\u0002\u0182\u0187",
    "\u0005.\u0018\u0002\u0183\u0184\u0007\u0400\u0002\u0002\u0184\u0186",
    "\u0005.\u0018\u0002\u0185\u0183\u0003\u0002\u0002\u0002\u0186\u0189",
    "\u0003\u0002\u0002\u0002\u0187\u0185\u0003\u0002\u0002\u0002\u0187\u0188",
    "\u0003\u0002\u0002\u0002\u0188E\u0003\u0002\u0002\u0002\u0189\u0187",
    "\u0003\u0002\u0002\u0002\u018a\u018f\u0005@!\u0002\u018b\u018c\u0007",
    "\u0400\u0002\u0002\u018c\u018e\u0005@!\u0002\u018d\u018b\u0003\u0002",
    "\u0002\u0002\u018e\u0191\u0003\u0002\u0002\u0002\u018f\u018d\u0003\u0002",
    "\u0002\u0002\u018f\u0190\u0003\u0002\u0002\u0002\u0190G\u0003\u0002",
    "\u0002\u0002\u0191\u018f\u0003\u0002\u0002\u0002\u0192\u0197\u0005B",
    "\"\u0002\u0193\u0194\u0007\u0400\u0002\u0002\u0194\u0196\u0005B\"\u0002",
    "\u0195\u0193\u0003\u0002\u0002\u0002\u0196\u0199\u0003\u0002\u0002\u0002",
    "\u0197\u0195\u0003\u0002\u0002\u0002\u0197\u0198\u0003\u0002\u0002\u0002",
    "\u0198I\u0003\u0002\u0002\u0002\u0199\u0197\u0003\u0002\u0002\u0002",
    "\u019a\u019b\b&\u0001\u0002\u019b\u019c\t\b\u0002\u0002\u019c\u019f",
    "\u0005J&\u0005\u019d\u019f\u0005L\'\u0002\u019e\u019a\u0003\u0002\u0002",
    "\u0002\u019e\u019d\u0003\u0002\u0002\u0002\u019f\u01a6\u0003\u0002\u0002",
    "\u0002\u01a0\u01a1\f\u0004\u0002\u0002\u01a1\u01a2\u0005V,\u0002\u01a2",
    "\u01a3\u0005J&\u0005\u01a3\u01a5\u0003\u0002\u0002\u0002\u01a4\u01a0",
    "\u0003\u0002\u0002\u0002\u01a5\u01a8\u0003\u0002\u0002\u0002\u01a6\u01a4",
    "\u0003\u0002\u0002\u0002\u01a6\u01a7\u0003\u0002\u0002\u0002\u01a7K",
    "\u0003\u0002\u0002\u0002\u01a8\u01a6\u0003\u0002\u0002\u0002\u01a9\u01ab",
    "\u0005P)\u0002\u01aa\u01ac\u0007h\u0002\u0002\u01ab\u01aa\u0003\u0002",
    "\u0002\u0002\u01ab\u01ac\u0003\u0002\u0002\u0002\u01ac\u01ad\u0003\u0002",
    "\u0002\u0002\u01ad\u01ae\u0007I\u0002\u0002\u01ae\u01af\u0007\u03fe",
    "\u0002\u0002\u01af\u01b0\u0005N(\u0002\u01b0\u01b1\u0007\u03ff\u0002",
    "\u0002\u01b1\u01d6\u0003\u0002\u0002\u0002\u01b2\u01b3\u0005P)\u0002",
    "\u01b3\u01b5\u0007Q\u0002\u0002\u01b4\u01b6\u0007h\u0002\u0002\u01b5",
    "\u01b4\u0003\u0002\u0002\u0002\u01b5\u01b6\u0003\u0002\u0002\u0002\u01b6",
    "\u01b7\u0003\u0002\u0002\u0002\u01b7\u01b8\u0005> \u0002\u01b8\u01d6",
    "\u0003\u0002\u0002\u0002\u01b9\u01ba\u0005P)\u0002\u01ba\u01bb\u0005",
    "T+\u0002\u01bb\u01bc\u0005P)\u0002\u01bc\u01d6\u0003\u0002\u0002\u0002",
    "\u01bd\u01bf\u0005P)\u0002\u01be\u01c0\u0007h\u0002\u0002\u01bf\u01be",
    "\u0003\u0002\u0002\u0002\u01bf\u01c0\u0003\u0002\u0002\u0002\u01c0\u01c1",
    "\u0003\u0002\u0002\u0002\u01c1\u01c2\u0007\u0010\u0002\u0002\u01c2\u01c3",
    "\u0005@!\u0002\u01c3\u01c4\u0007\f\u0002\u0002\u01c4\u01c5\u0005@!\u0002",
    "\u01c5\u01d6\u0003\u0002\u0002\u0002\u01c6\u01c8\u0005P)\u0002\u01c7",
    "\u01c9\u0007h\u0002\u0002\u01c8\u01c7\u0003\u0002\u0002\u0002\u01c8",
    "\u01c9\u0003\u0002\u0002\u0002\u01c9\u01ca\u0003\u0002\u0002\u0002\u01ca",
    "\u01cb\u0007Z\u0002\u0002\u01cb\u01cc\u0007\u040d\u0002\u0002\u01cc",
    "\u01d6\u0003\u0002\u0002\u0002\u01cd\u01cf\u0005P)\u0002\u01ce\u01d0",
    "\u0007h\u0002\u0002\u01cf\u01ce\u0003\u0002\u0002\u0002\u01cf\u01d0",
    "\u0003\u0002\u0002\u0002\u01d0\u01d1\u0003\u0002\u0002\u0002\u01d1\u01d2",
    "\t\t\u0002\u0002\u01d2\u01d3\u0007\u040d\u0002\u0002\u01d3\u01d6\u0003",
    "\u0002\u0002\u0002\u01d4\u01d6\u0005R*\u0002\u01d5\u01a9\u0003\u0002",
    "\u0002\u0002\u01d5\u01b2\u0003\u0002\u0002\u0002\u01d5\u01b9\u0003\u0002",
    "\u0002\u0002\u01d5\u01bd\u0003\u0002\u0002\u0002\u01d5\u01c6\u0003\u0002",
    "\u0002\u0002\u01d5\u01cd\u0003\u0002\u0002\u0002\u01d5\u01d4\u0003\u0002",
    "\u0002\u0002\u01d6M\u0003\u0002\u0002\u0002\u01d7\u01dc\u0005@!\u0002",
    "\u01d8\u01d9\u0007\u0400\u0002\u0002\u01d9\u01db\u0005@!\u0002\u01da",
    "\u01d8\u0003\u0002\u0002\u0002\u01db\u01de\u0003\u0002\u0002\u0002\u01dc",
    "\u01da\u0003\u0002\u0002\u0002\u01dc\u01dd\u0003\u0002\u0002\u0002\u01dd",
    "O\u0003\u0002\u0002\u0002\u01de\u01dc\u0003\u0002\u0002\u0002\u01df",
    "\u01e2\u0005@!\u0002\u01e0\u01e2\u0005*\u0016\u0002\u01e1\u01df\u0003",
    "\u0002\u0002\u0002\u01e1\u01e0\u0003\u0002\u0002\u0002\u01e2Q\u0003",
    "\u0002\u0002\u0002\u01e3\u01ea\u0005@!\u0002\u01e4\u01ea\u0005*\u0016",
    "\u0002\u01e5\u01e6\u0007\u03fe\u0002\u0002\u01e6\u01e7\u0005J&\u0002",
    "\u01e7\u01e8\u0007\u03ff\u0002\u0002\u01e8\u01ea\u0003\u0002\u0002\u0002",
    "\u01e9\u01e3\u0003\u0002\u0002\u0002\u01e9\u01e4\u0003\u0002\u0002\u0002",
    "\u01e9\u01e5\u0003\u0002\u0002\u0002\u01eaS\u0003\u0002\u0002\u0002",
    "\u01eb\u01fa\u0007\u03f5\u0002\u0002\u01ec\u01fa\u0007\u03f6\u0002\u0002",
    "\u01ed\u01fa\u0007\u03f7\u0002\u0002\u01ee\u01ef\u0007\u03f7\u0002\u0002",
    "\u01ef\u01fa\u0007\u03f5\u0002\u0002\u01f0\u01f1\u0007\u03f6\u0002\u0002",
    "\u01f1\u01fa\u0007\u03f5\u0002\u0002\u01f2\u01f3\u0007\u03f7\u0002\u0002",
    "\u01f3\u01fa\u0007\u03f6\u0002\u0002\u01f4\u01f5\u0007\u03f8\u0002\u0002",
    "\u01f5\u01fa\u0007\u03f5\u0002\u0002\u01f6\u01f7\u0007\u03f7\u0002\u0002",
    "\u01f7\u01f8\u0007\u03f5\u0002\u0002\u01f8\u01fa\u0007\u03f6\u0002\u0002",
    "\u01f9\u01eb\u0003\u0002\u0002\u0002\u01f9\u01ec\u0003\u0002\u0002\u0002",
    "\u01f9\u01ed\u0003\u0002\u0002\u0002\u01f9\u01ee\u0003\u0002\u0002\u0002",
    "\u01f9\u01f0\u0003\u0002\u0002\u0002\u01f9\u01f2\u0003\u0002\u0002\u0002",
    "\u01f9\u01f4\u0003\u0002\u0002\u0002\u01f9\u01f6\u0003\u0002\u0002\u0002",
    "\u01faU\u0003\u0002\u0002\u0002\u01fb\u0203\u0007\f\u0002\u0002\u01fc",
    "\u01fd\u0007\u03fb\u0002\u0002\u01fd\u0203\u0007\u03fb\u0002\u0002\u01fe",
    "\u0203\u0007\u00b2\u0002\u0002\u01ff\u0203\u0007p\u0002\u0002\u0200",
    "\u0201\u0007\u03fa\u0002\u0002\u0201\u0203\u0007\u03fa\u0002\u0002\u0202",
    "\u01fb\u0003\u0002\u0002\u0002\u0202\u01fc\u0003\u0002\u0002\u0002\u0202",
    "\u01fe\u0003\u0002\u0002\u0002\u0202\u01ff\u0003\u0002\u0002\u0002\u0202",
    "\u0200\u0003\u0002\u0002\u0002\u0203W\u0003\u0002\u0002\u0002\u0204",
    "\u0205\t\n\u0002\u0002\u0205Y\u0003\u0002\u0002\u0002\u0206\u0207\t",
    "\u000b\u0002\u0002\u0207[\u0003\u0002\u0002\u0002\u0208\u0209\t\f\u0002",
    "\u0002\u0209]\u0003\u0002\u0002\u0002\u020a\u020b\t\r\u0002\u0002\u020b",
    "_\u0003\u0002\u0002\u0002\u020c\u020d\t\u000e\u0002\u0002\u020da\u0003",
    "\u0002\u0002\u0002\u020e\u020f\t\u000f\u0002\u0002\u020fc\u0003\u0002",
    "\u0002\u0002\u0210\u0211\t\u0010\u0002\u0002\u0211e\u0003\u0002\u0002",
    "\u0002Fjmsvy{\u0080\u0083\u0086\u008c\u0090\u0097\u00a0\u00a3\u00b0",
    "\u00b6\u00b9\u00c1\u00c6\u00c9\u00cc\u00d2\u00d9\u00dc\u00e0\u00e6\u00e9",
    "\u00eb\u00f3\u00f8\u00fa\u0102\u0105\u0109\u010c\u010e\u0114\u011d\u0122",
    "\u0126\u0129\u012f\u0136\u013e\u0146\u014f\u015a\u015f\u0168\u0173\u017c",
    "\u0180\u0187\u018f\u0197\u019e\u01a6\u01ab\u01b5\u01bf\u01c8\u01cf\u01d5",
    "\u01dc\u01e1\u01e9\u01f9\u0202"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'ADD'", "'ALL'", "'ALTER'", 
                     "'ALWAYS'", "'ANALYZE'", "'AND'", "'AS'", "'ASC'", 
                     "'BEFORE'", "'BETWEEN'", "'BOTH'", "'BY'", "'CALL'", 
                     "'CASCADE'", "'CASE'", "'CAST'", "'CHANGE'", "'CHARACTER'", 
                     "'CHECK'", "'COLLATE'", "'COLUMN'", "'CONDITION'", 
                     "'CONSTRAINT'", "'CONTINUE'", "'CONVERT'", "'CREATE'", 
                     "'CROSS'", "'CURRENT'", "'CURRENT_USER'", "'CURSOR'", 
                     "'DATABASE'", "'DATABASES'", "'DECLARE'", "'DEFAULT'", 
                     "'DELAYED'", "'DELETE'", "'DESC'", "'DESCRIBE'", "'DETERMINISTIC'", 
                     "'DIAGNOSTICS'", "'DISTINCT'", "'DISTINCTROW'", "'DROP'", 
                     "'EACH'", "'ELSE'", "'ELSEIF'", "'ENCLOSED'", "'ESCAPED'", 
                     "'EXISTS'", "'EXIT'", "'EXPLAIN'", "'FALSE'", "'FETCH'", 
                     "'FOR'", "'FORCE'", "'FOREIGN'", "'FROM'", "'FULLTEXT'", 
                     "'GENERATED'", "'GET'", "'GRANT'", "'GROUP'", "'HAVING'", 
                     "'HIGH_PRIORITY'", "'IF'", "'IGNORE'", "'IN'", "'INDEX'", 
                     "'INFILE'", "'INNER'", "'INOUT'", "'INSERT'", "'INTERVAL'", 
                     "'INTO'", "'IS'", "'ITERATE'", "'JOIN'", "'KEY'", "'KEYS'", 
                     "'KILL'", "'LEADING'", "'LEAVE'", "'LEFT'", "'LIKE'", 
                     "'LIMIT'", "'LINEAR'", "'LINES'", "'LOAD'", "'LOCK'", 
                     "'LOOP'", "'LOW_PRIORITY'", "'MASTER_BIND'", "'MASTER_SSL_VERIFY_SERVER_CERT'", 
                     "'MATCH'", "'MAXVALUE'", "'MODIFIES'", "'NATURAL'", 
                     "'NOT'", "'NO_WRITE_TO_BINLOG'", "'NULL'", "'NUMBER'", 
                     "'ON'", "'OPTIMIZE'", "'OPTION'", "'OPTIONALLY'", "'OR'", 
                     "'ORDER'", "'OUT'", "'OUTER'", "'OUTFILE'", "'PARTITION'", 
                     "'PRIMARY'", "'PROCEDURE'", "'PURGE'", "'RANGE'", "'READ'", 
                     "'READS'", "'REFERENCES'", "'REGEXP'", "'RELEASE'", 
                     "'RENAME'", "'REPEAT'", "'REPLACE'", "'REQUIRE'", "'RESIGNAL'", 
                     "'RESTRICT'", "'RETURN'", "'REVOKE'", "'RIGHT'", "'RLIKE'", 
                     "'SCHEMA'", "'SCHEMAS'", "'SELECT'", "'SET'", "'SEPARATOR'", 
                     "'SHOW'", "'SIGNAL'", "'SPATIAL'", "'SQL'", "'SQLEXCEPTION'", 
                     "'SQLSTATE'", "'SQLWARNING'", "'SQL_BIG_RESULT'", "'SQL_CALC_FOUND_ROWS'", 
                     "'SQL_SMALL_RESULT'", "'SSL'", "'STACKED'", "'STARTING'", 
                     "'STRAIGHT_JOIN'", "'TABLE'", "'TERMINATED'", "'THEN'", 
                     "'TO'", "'TRAILING'", "'TRIGGER'", "'TRUE'", "'UNDO'", 
                     "'UNION'", "'UNIQUE'", "'UNLOCK'", "'UNSIGNED'", "'UPDATE'", 
                     "'USAGE'", "'USE'", "'USING'", "'VALUES'", "'WHEN'", 
                     "'WHERE'", "'WHILE'", "'WITH'", "'WRITE'", "'XOR'", 
                     "'ZEROFILL'", "'TINYINT'", "'SMALLINT'", "'MEDIUMINT'", 
                     "'MIDDLEINT'", "'INT'", "'INT1'", "'INT2'", "'INT3'", 
                     "'INT4'", "'INT8'", "'INTEGER'", "'BIGINT'", "'REAL'", 
                     "'DOUBLE'", "'PRECISION'", "'FLOAT'", "'FLOAT4'", "'FLOAT8'", 
                     "'DECIMAL'", "'DEC'", "'NUMERIC'", "'DATE'", "'TIME'", 
                     "'TIMESTAMP'", "'DATETIME'", "'YEAR'", "'CHAR'", "'VARCHAR'", 
                     "'NVARCHAR'", "'NATIONAL'", "'BINARY'", "'VARBINARY'", 
                     "'TINYBLOB'", "'BLOB'", "'MEDIUMBLOB'", "'LONG'", "'LONGBLOB'", 
                     "'TINYTEXT'", "'TEXT'", "'MEDIUMTEXT'", "'LONGTEXT'", 
                     "'ENUM'", "'VARYING'", "'SERIAL'", "'YEAR_MONTH'", 
                     "'DAY_HOUR'", "'DAY_MINUTE'", "'DAY_SECOND'", "'HOUR_MINUTE'", 
                     "'HOUR_SECOND'", "'MINUTE_SECOND'", "'SECOND_MICROSECOND'", 
                     "'MINUTE_MICROSECOND'", "'HOUR_MICROSECOND'", "'DAY_MICROSECOND'", 
                     "'JSON_VALID'", "'JSON_SCHEMA_VALID'", "'AVG'", "'BIT_AND'", 
                     "'BIT_OR'", "'BIT_XOR'", "'COUNT'", "'GROUP_CONCAT'", 
                     "'MAX'", "'MIN'", "'STD'", "'STDDEV'", "'STDDEV_POP'", 
                     "'STDDEV_SAMP'", "'SUM'", "'VAR_POP'", "'VAR_SAMP'", 
                     "'VARIANCE'", "'CURRENT_DATE'", "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", 
                     "'LOCALTIME'", "'CURDATE'", "'CURTIME'", "'DATE_ADD'", 
                     "'DATE_SUB'", "'EXTRACT'", "'LOCALTIMESTAMP'", "'NOW'", 
                     "'POSITION'", "'SUBSTR'", "'SUBSTRING'", "'SYSDATE'", 
                     "'TRIM'", "'UTC_DATE'", "'UTC_TIME'", "'UTC_TIMESTAMP'", 
                     "'ACCOUNT'", "'ACTION'", "'AFTER'", "'AGGREGATE'", 
                     "'ALGORITHM'", "'ANY'", "'AT'", "'AUTHORS'", "'AUTOCOMMIT'", 
                     "'AUTOEXTEND_SIZE'", "'AUTO_INCREMENT'", "'AVG_ROW_LENGTH'", 
                     "'BEGIN'", "'BINLOG'", "'BIT'", "'BLOCK'", "'BOOL'", 
                     "'BOOLEAN'", "'BTREE'", "'CACHE'", "'CASCADED'", "'CHAIN'", 
                     "'CHANGED'", "'CHANNEL'", "'CHECKSUM'", "'PAGE_CHECKSUM'", 
                     "'CIPHER'", "'CLASS_ORIGIN'", "'CLIENT'", "'CLOSE'", 
                     "'COALESCE'", "'CODE'", "'COLUMNS'", "'COLUMN_FORMAT'", 
                     "'COLUMN_NAME'", "'COMMENT'", "'COMMIT'", "'COMPACT'", 
                     "'COMPLETION'", "'COMPRESSED'", "'COMPRESSION'", "'CONCURRENT'", 
                     "'CONNECTION'", "'CONSISTENT'", "'CONSTRAINT_CATALOG'", 
                     "'CONSTRAINT_SCHEMA'", "'CONSTRAINT_NAME'", "'CONTAINS'", 
                     "'CONTEXT'", "'CONTRIBUTORS'", "'COPY'", "'CPU'", "'CURSOR_NAME'", 
                     "'DATA'", "'DATAFILE'", "'DEALLOCATE'", "'DEFAULT_AUTH'", 
                     "'DEFINER'", "'DELAY_KEY_WRITE'", "'DES_KEY_FILE'", 
                     "'DIRECTORY'", "'DISABLE'", "'DISCARD'", "'DISK'", 
                     "'DO'", "'DUMPFILE'", "'DUPLICATE'", "'DYNAMIC'", "'ENABLE'", 
                     "'ENCRYPTION'", "'END'", "'ENDS'", "'ENGINE'", "'ENGINES'", 
                     "'ERROR'", "'ERRORS'", "'ESCAPE'", "'EVEN'", "'EVENT'", 
                     "'EVENTS'", "'EVERY'", "'EXCHANGE'", "'EXCLUSIVE'", 
                     "'EXPIRE'", "'EXPORT'", "'EXTENDED'", "'EXTENT_SIZE'", 
                     "'FAST'", "'FAULTS'", "'FIELDS'", "'FILE_BLOCK_SIZE'", 
                     "'FILTER'", "'FIRST'", "'FIXED'", "'FLUSH'", "'FOLLOWS'", 
                     "'FOUND'", "'FULL'", "'FUNCTION'", "'GENERAL'", "'GLOBAL'", 
                     "'GRANTS'", "'GROUP_REPLICATION'", "'HANDLER'", "'HASH'", 
                     "'HELP'", "'HOST'", "'HOSTS'", "'IDENTIFIED'", "'IGNORE_SERVER_IDS'", 
                     "'IMPORT'", "'INDEXES'", "'INITIAL_SIZE'", "'INPLACE'", 
                     "'INSERT_METHOD'", "'INSTALL'", "'INSTANCE'", "'INVISIBLE'", 
                     "'INVOKER'", "'IO'", "'IO_THREAD'", "'IPC'", "'ISOLATION'", 
                     "'ISSUER'", "'JSON'", "'KEY_BLOCK_SIZE'", "'LANGUAGE'", 
                     "'LAST'", "'LEAVES'", "'LESS'", "'LEVEL'", "'LIST'", 
                     "'LOCAL'", "'LOGFILE'", "'LOGS'", "'MASTER'", "'MASTER_AUTO_POSITION'", 
                     "'MASTER_CONNECT_RETRY'", "'MASTER_DELAY'", "'MASTER_HEARTBEAT_PERIOD'", 
                     "'MASTER_HOST'", "'MASTER_LOG_FILE'", "'MASTER_LOG_POS'", 
                     "'MASTER_PASSWORD'", "'MASTER_PORT'", "'MASTER_RETRY_COUNT'", 
                     "'MASTER_SSL'", "'MASTER_SSL_CA'", "'MASTER_SSL_CAPATH'", 
                     "'MASTER_SSL_CERT'", "'MASTER_SSL_CIPHER'", "'MASTER_SSL_CRL'", 
                     "'MASTER_SSL_CRLPATH'", "'MASTER_SSL_KEY'", "'MASTER_TLS_VERSION'", 
                     "'MASTER_USER'", "'MAX_CONNECTIONS_PER_HOUR'", "'MAX_QUERIES_PER_HOUR'", 
                     "'MAX_ROWS'", "'MAX_SIZE'", "'MAX_UPDATES_PER_HOUR'", 
                     "'MAX_USER_CONNECTIONS'", "'MEDIUM'", "'MERGE'", "'MESSAGE_TEXT'", 
                     "'MID'", "'MIGRATE'", "'MIN_ROWS'", "'MODE'", "'MODIFY'", 
                     "'MUTEX'", "'MYSQL'", "'MYSQL_ERRNO'", "'NAME'", "'NAMES'", 
                     "'NCHAR'", "'NEVER'", "'NEXT'", "'NO'", "'NODEGROUP'", 
                     "'NONE'", "'OFFLINE'", "'OFFSET'", "'OJ'", "'OLD_PASSWORD'", 
                     "'ONE'", "'ONLINE'", "'ONLY'", "'OPEN'", "'OPTIMIZER_COSTS'", 
                     "'OPTIONS'", "'OWNER'", "'PACK_KEYS'", "'PAGE'", "'PARSER'", 
                     "'PARTIAL'", "'PARTITIONING'", "'PARTITIONS'", "'PASSWORD'", 
                     "'PHASE'", "'PLUGIN'", "'PLUGIN_DIR'", "'PLUGINS'", 
                     "'PORT'", "'PRECEDES'", "'PREPARE'", "'PRESERVE'", 
                     "'PREV'", "'PROCESSLIST'", "'PROFILE'", "'PROFILES'", 
                     "'PROXY'", "'QUERY'", "'QUICK'", "'REBUILD'", "'RECOVER'", 
                     "'REDO_BUFFER_SIZE'", "'REDUNDANT'", "'RELAY'", "'RELAY_LOG_FILE'", 
                     "'RELAY_LOG_POS'", "'RELAYLOG'", "'REMOVE'", "'REORGANIZE'", 
                     "'REPAIR'", "'REPLICATE_DO_DB'", "'REPLICATE_DO_TABLE'", 
                     "'REPLICATE_IGNORE_DB'", "'REPLICATE_IGNORE_TABLE'", 
                     "'REPLICATE_REWRITE_DB'", "'REPLICATE_WILD_DO_TABLE'", 
                     "'REPLICATE_WILD_IGNORE_TABLE'", "'REPLICATION'", "'RESET'", 
                     "'RESUME'", "'RETURNED_SQLSTATE'", "'RETURNS'", "'ROLE'", 
                     "'ROLLBACK'", "'ROLLUP'", "'ROTATE'", "'ROW'", "'ROWS'", 
                     "'ROW_FORMAT'", "'SAVEPOINT'", "'SCHEDULE'", "'SECURITY'", 
                     "'SERVER'", "'SESSION'", "'SHARE'", "'SHARED'", "'SIGNED'", 
                     "'SIMPLE'", "'SLAVE'", "'SLOW'", "'SNAPSHOT'", "'SOCKET'", 
                     "'SOME'", "'SONAME'", "'SOUNDS'", "'SOURCE'", "'SQL_AFTER_GTIDS'", 
                     "'SQL_AFTER_MTS_GAPS'", "'SQL_BEFORE_GTIDS'", "'SQL_BUFFER_RESULT'", 
                     "'SQL_CACHE'", "'SQL_NO_CACHE'", "'SQL_THREAD'", "'START'", 
                     "'STARTS'", "'STATS_AUTO_RECALC'", "'STATS_PERSISTENT'", 
                     "'STATS_SAMPLE_PAGES'", "'STATUS'", "'STOP'", "'STORAGE'", 
                     "'STORED'", "'STRING'", "'SUBCLASS_ORIGIN'", "'SUBJECT'", 
                     "'SUBPARTITION'", "'SUBPARTITIONS'", "'SUSPEND'", "'SWAPS'", 
                     "'SWITCHES'", "'TABLE_NAME'", "'TABLESPACE'", "'TEMPORARY'", 
                     "'TEMPTABLE'", "'THAN'", "'TRADITIONAL'", "'TRANSACTION'", 
                     "'TRANSACTIONAL'", "'TRIGGERS'", "'TRUNCATE'", "'UNDEFINED'", 
                     "'UNDOFILE'", "'UNDO_BUFFER_SIZE'", "'UNINSTALL'", 
                     "'UNKNOWN'", "'UNTIL'", "'UPGRADE'", "'USER'", "'USE_FRM'", 
                     "'USER_RESOURCES'", "'VALIDATION'", "'VALUE'", "'VARIABLES'", 
                     "'VIEW'", "'VIRTUAL'", "'VISIBLE'", "'WAIT'", "'WARNINGS'", 
                     "'WITHOUT'", "'WORK'", "'WRAPPER'", "'X509'", "'XA'", 
                     "'XML'", "'EUR'", "'USA'", "'JIS'", "'ISO'", "'INTERNAL'", 
                     "'QUARTER'", "'MONTH'", "'DAY'", "'HOUR'", "'MINUTE'", 
                     "'WEEK'", "'SECOND'", "'MICROSECOND'", "'TABLES'", 
                     "'ROUTINE'", "'EXECUTE'", "'FILE'", "'PROCESS'", "'RELOAD'", 
                     "'SHUTDOWN'", "'SUPER'", "'PRIVILEGES'", "'APPLICATION_PASSWORD_ADMIN'", 
                     "'AUDIT_ADMIN'", "'BACKUP_ADMIN'", "'BINLOG_ADMIN'", 
                     "'BINLOG_ENCRYPTION_ADMIN'", "'CLONE_ADMIN'", "'CONNECTION_ADMIN'", 
                     "'ENCRYPTION_KEY_ADMIN'", "'FIREWALL_ADMIN'", "'FIREWALL_USER'", 
                     "'GROUP_REPLICATION_ADMIN'", "'INNODB_REDO_LOG_ARCHIVE'", 
                     "'NDB_STORED_USER'", "'PERSIST_RO_VARIABLES_ADMIN'", 
                     "'REPLICATION_APPLIER'", "'REPLICATION_SLAVE_ADMIN'", 
                     "'RESOURCE_GROUP_ADMIN'", "'RESOURCE_GROUP_USER'", 
                     "'ROLE_ADMIN'", null, "'SET_USER_ID'", "'SHOW_ROUTINE'", 
                     "'SYSTEM_VARIABLES_ADMIN'", "'TABLE_ENCRYPTION_ADMIN'", 
                     "'VERSION_TOKEN_ADMIN'", "'XA_RECOVER_ADMIN'", "'ARMSCII8'", 
                     "'ASCII'", "'BIG5'", "'CP1250'", "'CP1251'", "'CP1256'", 
                     "'CP1257'", "'CP850'", "'CP852'", "'CP866'", "'CP932'", 
                     "'DEC8'", "'EUCJPMS'", "'EUCKR'", "'GB2312'", "'GBK'", 
                     "'GEOSTD8'", "'GREEK'", "'HEBREW'", "'HP8'", "'KEYBCS2'", 
                     "'KOI8R'", "'KOI8U'", "'LATIN1'", "'LATIN2'", "'LATIN5'", 
                     "'LATIN7'", "'MACCE'", "'MACROMAN'", "'SJIS'", "'SWE7'", 
                     "'TIS620'", "'UCS2'", "'UJIS'", "'UTF16'", "'UTF16LE'", 
                     "'UTF32'", "'UTF8'", "'UTF8MB3'", "'UTF8MB4'", "'ARCHIVE'", 
                     "'BLACKHOLE'", "'CSV'", "'FEDERATED'", "'INNODB'", 
                     "'MEMORY'", "'MRG_MYISAM'", "'MYISAM'", "'NDB'", "'NDBCLUSTER'", 
                     "'PERFORMANCE_SCHEMA'", "'TOKUDB'", "'REPEATABLE'", 
                     "'COMMITTED'", "'UNCOMMITTED'", "'SERIALIZABLE'", "'GEOMETRYCOLLECTION'", 
                     "'GEOMCOLLECTION'", "'GEOMETRY'", "'LINESTRING'", "'MULTILINESTRING'", 
                     "'MULTIPOINT'", "'MULTIPOLYGON'", "'POINT'", "'POLYGON'", 
                     "'ABS'", "'ACOS'", "'ADDDATE'", "'ADDTIME'", "'AES_DECRYPT'", 
                     "'AES_ENCRYPT'", "'AREA'", "'ASBINARY'", "'ASIN'", 
                     "'ASTEXT'", "'ASWKB'", "'ASWKT'", "'ASYMMETRIC_DECRYPT'", 
                     "'ASYMMETRIC_DERIVE'", "'ASYMMETRIC_ENCRYPT'", "'ASYMMETRIC_SIGN'", 
                     "'ASYMMETRIC_VERIFY'", "'ATAN'", "'ATAN2'", "'BENCHMARK'", 
                     "'BIN'", "'BIT_COUNT'", "'BIT_LENGTH'", "'BUFFER'", 
                     "'CATALOG_NAME'", "'CEIL'", "'CEILING'", "'CENTROID'", 
                     "'CHARACTER_LENGTH'", "'CHARSET'", "'CHAR_LENGTH'", 
                     "'COERCIBILITY'", "'COLLATION'", "'COMPRESS'", "'CONCAT'", 
                     "'CONCAT_WS'", "'CONNECTION_ID'", "'CONV'", "'CONVERT_TZ'", 
                     "'COS'", "'COT'", "'CRC32'", "'CREATE_ASYMMETRIC_PRIV_KEY'", 
                     "'CREATE_ASYMMETRIC_PUB_KEY'", "'CREATE_DH_PARAMETERS'", 
                     "'CREATE_DIGEST'", "'CROSSES'", "'DATEDIFF'", "'DATE_FORMAT'", 
                     "'DAYNAME'", "'DAYOFMONTH'", "'DAYOFWEEK'", "'DAYOFYEAR'", 
                     "'DECODE'", "'DEGREES'", "'DES_DECRYPT'", "'DES_ENCRYPT'", 
                     "'DIMENSION'", "'DISJOINT'", "'ELT'", "'ENCODE'", "'ENCRYPT'", 
                     "'ENDPOINT'", "'ENVELOPE'", "'EQUALS'", "'EXP'", "'EXPORT_SET'", 
                     "'EXTERIORRING'", "'EXTRACTVALUE'", "'FIELD'", "'FIND_IN_SET'", 
                     "'FLOOR'", "'FORMAT'", "'FOUND_ROWS'", "'FROM_BASE64'", 
                     "'FROM_DAYS'", "'FROM_UNIXTIME'", "'GEOMCOLLFROMTEXT'", 
                     "'GEOMCOLLFROMWKB'", "'GEOMETRYCOLLECTIONFROMTEXT'", 
                     "'GEOMETRYCOLLECTIONFROMWKB'", "'GEOMETRYFROMTEXT'", 
                     "'GEOMETRYFROMWKB'", "'GEOMETRYN'", "'GEOMETRYTYPE'", 
                     "'GEOMFROMTEXT'", "'GEOMFROMWKB'", "'GET_FORMAT'", 
                     "'GET_LOCK'", "'GLENGTH'", "'GREATEST'", "'GTID_SUBSET'", 
                     "'GTID_SUBTRACT'", "'HEX'", "'IFNULL'", "'INET6_ATON'", 
                     "'INET6_NTOA'", "'INET_ATON'", "'INET_NTOA'", "'INSTR'", 
                     "'INTERIORRINGN'", "'INTERSECTS'", "'ISCLOSED'", "'ISEMPTY'", 
                     "'ISNULL'", "'ISSIMPLE'", "'IS_FREE_LOCK'", "'IS_IPV4'", 
                     "'IS_IPV4_COMPAT'", "'IS_IPV4_MAPPED'", "'IS_IPV6'", 
                     "'IS_USED_LOCK'", "'LAST_INSERT_ID'", "'LCASE'", "'LEAST'", 
                     "'LENGTH'", "'LINEFROMTEXT'", "'LINEFROMWKB'", "'LINESTRINGFROMTEXT'", 
                     "'LINESTRINGFROMWKB'", "'LN'", "'LOAD_FILE'", "'LOCATE'", 
                     "'LOG'", "'LOG10'", "'LOG2'", "'LOWER'", "'LPAD'", 
                     "'LTRIM'", "'MAKEDATE'", "'MAKETIME'", "'MAKE_SET'", 
                     "'MASTER_POS_WAIT'", "'MBRCONTAINS'", "'MBRDISJOINT'", 
                     "'MBREQUAL'", "'MBRINTERSECTS'", "'MBROVERLAPS'", "'MBRTOUCHES'", 
                     "'MBRWITHIN'", "'MD5'", "'MLINEFROMTEXT'", "'MLINEFROMWKB'", 
                     "'MONTHNAME'", "'MPOINTFROMTEXT'", "'MPOINTFROMWKB'", 
                     "'MPOLYFROMTEXT'", "'MPOLYFROMWKB'", "'MULTILINESTRINGFROMTEXT'", 
                     "'MULTILINESTRINGFROMWKB'", "'MULTIPOINTFROMTEXT'", 
                     "'MULTIPOINTFROMWKB'", "'MULTIPOLYGONFROMTEXT'", "'MULTIPOLYGONFROMWKB'", 
                     "'NAME_CONST'", "'NULLIF'", "'NUMGEOMETRIES'", "'NUMINTERIORRINGS'", 
                     "'NUMPOINTS'", "'OCT'", "'OCTET_LENGTH'", "'ORD'", 
                     "'OVERLAPS'", "'PERIOD_ADD'", "'PERIOD_DIFF'", "'PI'", 
                     "'POINTFROMTEXT'", "'POINTFROMWKB'", "'POINTN'", "'POLYFROMTEXT'", 
                     "'POLYFROMWKB'", "'POLYGONFROMTEXT'", "'POLYGONFROMWKB'", 
                     "'POW'", "'POWER'", "'QUOTE'", "'RADIANS'", "'RAND'", 
                     "'RANDOM_BYTES'", "'RELEASE_LOCK'", "'REVERSE'", "'ROUND'", 
                     "'ROW_COUNT'", "'RPAD'", "'RTRIM'", "'SEC_TO_TIME'", 
                     "'SESSION_USER'", "'SHA'", "'SHA1'", "'SHA2'", "'SCHEMA_NAME'", 
                     "'SIGN'", "'SIN'", "'SLEEP'", "'SOUNDEX'", "'SQL_THREAD_WAIT_AFTER_GTIDS'", 
                     "'SQRT'", "'SRID'", "'STARTPOINT'", "'STRCMP'", "'STR_TO_DATE'", 
                     "'ST_AREA'", "'ST_ASBINARY'", "'ST_ASTEXT'", "'ST_ASWKB'", 
                     "'ST_ASWKT'", "'ST_BUFFER'", "'ST_CENTROID'", "'ST_CONTAINS'", 
                     "'ST_CROSSES'", "'ST_DIFFERENCE'", "'ST_DIMENSION'", 
                     "'ST_DISJOINT'", "'ST_DISTANCE'", "'ST_ENDPOINT'", 
                     "'ST_ENVELOPE'", "'ST_EQUALS'", "'ST_EXTERIORRING'", 
                     "'ST_GEOMCOLLFROMTEXT'", "'ST_GEOMCOLLFROMTXT'", "'ST_GEOMCOLLFROMWKB'", 
                     "'ST_GEOMETRYCOLLECTIONFROMTEXT'", "'ST_GEOMETRYCOLLECTIONFROMWKB'", 
                     "'ST_GEOMETRYFROMTEXT'", "'ST_GEOMETRYFROMWKB'", "'ST_GEOMETRYN'", 
                     "'ST_GEOMETRYTYPE'", "'ST_GEOMFROMTEXT'", "'ST_GEOMFROMWKB'", 
                     "'ST_INTERIORRINGN'", "'ST_INTERSECTION'", "'ST_INTERSECTS'", 
                     "'ST_ISCLOSED'", "'ST_ISEMPTY'", "'ST_ISSIMPLE'", "'ST_LINEFROMTEXT'", 
                     "'ST_LINEFROMWKB'", "'ST_LINESTRINGFROMTEXT'", "'ST_LINESTRINGFROMWKB'", 
                     "'ST_NUMGEOMETRIES'", "'ST_NUMINTERIORRING'", "'ST_NUMINTERIORRINGS'", 
                     "'ST_NUMPOINTS'", "'ST_OVERLAPS'", "'ST_POINTFROMTEXT'", 
                     "'ST_POINTFROMWKB'", "'ST_POINTN'", "'ST_POLYFROMTEXT'", 
                     "'ST_POLYFROMWKB'", "'ST_POLYGONFROMTEXT'", "'ST_POLYGONFROMWKB'", 
                     "'ST_SRID'", "'ST_STARTPOINT'", "'ST_SYMDIFFERENCE'", 
                     "'ST_TOUCHES'", "'ST_UNION'", "'ST_WITHIN'", "'ST_X'", 
                     "'ST_Y'", "'SUBDATE'", "'SUBSTRING_INDEX'", "'SUBTIME'", 
                     "'SYSTEM_USER'", "'TAN'", "'TIMEDIFF'", "'TIMESTAMPADD'", 
                     "'TIMESTAMPDIFF'", "'TIME_FORMAT'", "'TIME_TO_SEC'", 
                     "'TOUCHES'", "'TO_BASE64'", "'TO_DAYS'", "'TO_SECONDS'", 
                     "'UCASE'", "'UNCOMPRESS'", "'UNCOMPRESSED_LENGTH'", 
                     "'UNHEX'", "'UNIX_TIMESTAMP'", "'UPDATEXML'", "'UPPER'", 
                     "'UUID'", "'UUID_SHORT'", "'VALIDATE_PASSWORD_STRENGTH'", 
                     "'VERSION'", "'WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS'", 
                     "'WEEKDAY'", "'WEEKOFYEAR'", "'WEIGHT_STRING'", "'WITHIN'", 
                     "'YEARWEEK'", "'Y'", "'X'", "':='", "'+='", "'-='", 
                     "'*='", "'/='", "'%='", "'&='", "'^='", "'|='", "'*'", 
                     "'/'", "'%'", "'+'", "'--'", "'-'", "'DIV'", "'MOD'", 
                     "'='", "'>'", "'<'", "'!'", "'~'", "'|'", "'&'", "'^'", 
                     "'.'", "'('", "')'", "','", "';'", "'@'", "'0'", "'1'", 
                     "'2'", "'''", "'\"'", "'`'", "':'" ];

var symbolicNames = [ null, "SPACE", "SPEC_MYSQL_COMMENT", "COMMENT_INPUT", 
                      "LINE_COMMENT", "ADD", "ALL", "ALTER", "ALWAYS", "ANALYZE", 
                      "AND", "AS", "ASC", "BEFORE", "BETWEEN", "BOTH", "BY", 
                      "CALL", "CASCADE", "CASE", "CAST", "CHANGE", "CHARACTER", 
                      "CHECK", "COLLATE", "COLUMN", "CONDITION", "CONSTRAINT", 
                      "CONTINUE", "CONVERT", "CREATE", "CROSS", "CURRENT", 
                      "CURRENT_USER", "CURSOR", "DATABASE", "DATABASES", 
                      "DECLARE", "DEFAULT", "DELAYED", "DELETE", "DESC", 
                      "DESCRIBE", "DETERMINISTIC", "DIAGNOSTICS", "DISTINCT", 
                      "DISTINCTROW", "DROP", "EACH", "ELSE", "ELSEIF", "ENCLOSED", 
                      "ESCAPED", "EXISTS", "EXIT", "EXPLAIN", "FALSE", "FETCH", 
                      "FOR", "FORCE", "FOREIGN", "FROM", "FULLTEXT", "GENERATED", 
                      "GET", "GRANT", "GROUP", "HAVING", "HIGH_PRIORITY", 
                      "IF", "IGNORE", "IN", "INDEX", "INFILE", "INNER", 
                      "INOUT", "INSERT", "INTERVAL", "INTO", "IS", "ITERATE", 
                      "JOIN", "KEY", "KEYS", "KILL", "LEADING", "LEAVE", 
                      "LEFT", "LIKE", "LIMIT", "LINEAR", "LINES", "LOAD", 
                      "LOCK", "LOOP", "LOW_PRIORITY", "MASTER_BIND", "MASTER_SSL_VERIFY_SERVER_CERT", 
                      "MATCH", "MAXVALUE", "MODIFIES", "NATURAL", "NOT", 
                      "NO_WRITE_TO_BINLOG", "NULL_LITERAL", "NUMBER", "ON", 
                      "OPTIMIZE", "OPTION", "OPTIONALLY", "OR", "ORDER", 
                      "OUT", "OUTER", "OUTFILE", "PARTITION", "PRIMARY", 
                      "PROCEDURE", "PURGE", "RANGE", "READ", "READS", "REFERENCES", 
                      "REGEXP", "RELEASE", "RENAME", "REPEAT", "REPLACE", 
                      "REQUIRE", "RESIGNAL", "RESTRICT", "RETURN", "REVOKE", 
                      "RIGHT", "RLIKE", "SCHEMA", "SCHEMAS", "SELECT", "SET", 
                      "SEPARATOR", "SHOW", "SIGNAL", "SPATIAL", "SQL", "SQLEXCEPTION", 
                      "SQLSTATE", "SQLWARNING", "SQL_BIG_RESULT", "SQL_CALC_FOUND_ROWS", 
                      "SQL_SMALL_RESULT", "SSL", "STACKED", "STARTING", 
                      "STRAIGHT_JOIN", "TABLE", "TERMINATED", "THEN", "TO", 
                      "TRAILING", "TRIGGER", "TRUE", "UNDO", "UNION", "UNIQUE", 
                      "UNLOCK", "UNSIGNED", "UPDATE", "USAGE", "USE", "USING", 
                      "VALUES", "WHEN", "WHERE", "WHILE", "WITH", "WRITE", 
                      "XOR", "ZEROFILL", "TINYINT", "SMALLINT", "MEDIUMINT", 
                      "MIDDLEINT", "INT", "INT1", "INT2", "INT3", "INT4", 
                      "INT8", "INTEGER", "BIGINT", "REAL", "DOUBLE", "PRECISION", 
                      "FLOAT", "FLOAT4", "FLOAT8", "DECIMAL", "DEC", "NUMERIC", 
                      "DATE", "TIME", "TIMESTAMP", "DATETIME", "YEAR", "CHAR", 
                      "VARCHAR", "NVARCHAR", "NATIONAL", "BINARY", "VARBINARY", 
                      "TINYBLOB", "BLOB", "MEDIUMBLOB", "LONG", "LONGBLOB", 
                      "TINYTEXT", "TEXT", "MEDIUMTEXT", "LONGTEXT", "ENUM", 
                      "VARYING", "SERIAL", "YEAR_MONTH", "DAY_HOUR", "DAY_MINUTE", 
                      "DAY_SECOND", "HOUR_MINUTE", "HOUR_SECOND", "MINUTE_SECOND", 
                      "SECOND_MICROSECOND", "MINUTE_MICROSECOND", "HOUR_MICROSECOND", 
                      "DAY_MICROSECOND", "JSON_VALID", "JSON_SCHEMA_VALID", 
                      "AVG", "BIT_AND", "BIT_OR", "BIT_XOR", "COUNT", "GROUP_CONCAT", 
                      "MAX", "MIN", "STD", "STDDEV", "STDDEV_POP", "STDDEV_SAMP", 
                      "SUM", "VAR_POP", "VAR_SAMP", "VARIANCE", "CURRENT_DATE", 
                      "CURRENT_TIME", "CURRENT_TIMESTAMP", "LOCALTIME", 
                      "CURDATE", "CURTIME", "DATE_ADD", "DATE_SUB", "EXTRACT", 
                      "LOCALTIMESTAMP", "NOW", "POSITION", "SUBSTR", "SUBSTRING", 
                      "SYSDATE", "TRIM", "UTC_DATE", "UTC_TIME", "UTC_TIMESTAMP", 
                      "ACCOUNT", "ACTION", "AFTER", "AGGREGATE", "ALGORITHM", 
                      "ANY", "AT", "AUTHORS", "AUTOCOMMIT", "AUTOEXTEND_SIZE", 
                      "AUTO_INCREMENT", "AVG_ROW_LENGTH", "BEGIN", "BINLOG", 
                      "BIT", "BLOCK", "BOOL", "BOOLEAN", "BTREE", "CACHE", 
                      "CASCADED", "CHAIN", "CHANGED", "CHANNEL", "CHECKSUM", 
                      "PAGE_CHECKSUM", "CIPHER", "CLASS_ORIGIN", "CLIENT", 
                      "CLOSE", "COALESCE", "CODE", "COLUMNS", "COLUMN_FORMAT", 
                      "COLUMN_NAME", "COMMENT", "COMMIT", "COMPACT", "COMPLETION", 
                      "COMPRESSED", "COMPRESSION", "CONCURRENT", "CONNECTION", 
                      "CONSISTENT", "CONSTRAINT_CATALOG", "CONSTRAINT_SCHEMA", 
                      "CONSTRAINT_NAME", "CONTAINS", "CONTEXT", "CONTRIBUTORS", 
                      "COPY", "CPU", "CURSOR_NAME", "DATA", "DATAFILE", 
                      "DEALLOCATE", "DEFAULT_AUTH", "DEFINER", "DELAY_KEY_WRITE", 
                      "DES_KEY_FILE", "DIRECTORY", "DISABLE", "DISCARD", 
                      "DISK", "DO", "DUMPFILE", "DUPLICATE", "DYNAMIC", 
                      "ENABLE", "ENCRYPTION", "END", "ENDS", "ENGINE", "ENGINES", 
                      "ERROR", "ERRORS", "ESCAPE", "EVEN", "EVENT", "EVENTS", 
                      "EVERY", "EXCHANGE", "EXCLUSIVE", "EXPIRE", "EXPORT", 
                      "EXTENDED", "EXTENT_SIZE", "FAST", "FAULTS", "FIELDS", 
                      "FILE_BLOCK_SIZE", "FILTER", "FIRST", "FIXED", "FLUSH", 
                      "FOLLOWS", "FOUND", "FULL", "FUNCTION", "GENERAL", 
                      "GLOBAL", "GRANTS", "GROUP_REPLICATION", "HANDLER", 
                      "HASH", "HELP", "HOST", "HOSTS", "IDENTIFIED", "IGNORE_SERVER_IDS", 
                      "IMPORT", "INDEXES", "INITIAL_SIZE", "INPLACE", "INSERT_METHOD", 
                      "INSTALL", "INSTANCE", "INVISIBLE", "INVOKER", "IO", 
                      "IO_THREAD", "IPC", "ISOLATION", "ISSUER", "JSON", 
                      "KEY_BLOCK_SIZE", "LANGUAGE", "LAST", "LEAVES", "LESS", 
                      "LEVEL", "LIST", "LOCAL", "LOGFILE", "LOGS", "MASTER", 
                      "MASTER_AUTO_POSITION", "MASTER_CONNECT_RETRY", "MASTER_DELAY", 
                      "MASTER_HEARTBEAT_PERIOD", "MASTER_HOST", "MASTER_LOG_FILE", 
                      "MASTER_LOG_POS", "MASTER_PASSWORD", "MASTER_PORT", 
                      "MASTER_RETRY_COUNT", "MASTER_SSL", "MASTER_SSL_CA", 
                      "MASTER_SSL_CAPATH", "MASTER_SSL_CERT", "MASTER_SSL_CIPHER", 
                      "MASTER_SSL_CRL", "MASTER_SSL_CRLPATH", "MASTER_SSL_KEY", 
                      "MASTER_TLS_VERSION", "MASTER_USER", "MAX_CONNECTIONS_PER_HOUR", 
                      "MAX_QUERIES_PER_HOUR", "MAX_ROWS", "MAX_SIZE", "MAX_UPDATES_PER_HOUR", 
                      "MAX_USER_CONNECTIONS", "MEDIUM", "MERGE", "MESSAGE_TEXT", 
                      "MID", "MIGRATE", "MIN_ROWS", "MODE", "MODIFY", "MUTEX", 
                      "MYSQL", "MYSQL_ERRNO", "NAME", "NAMES", "NCHAR", 
                      "NEVER", "NEXT", "NO", "NODEGROUP", "NONE", "OFFLINE", 
                      "OFFSET", "OJ", "OLD_PASSWORD", "ONE", "ONLINE", "ONLY", 
                      "OPEN", "OPTIMIZER_COSTS", "OPTIONS", "OWNER", "PACK_KEYS", 
                      "PAGE", "PARSER", "PARTIAL", "PARTITIONING", "PARTITIONS", 
                      "PASSWORD", "PHASE", "PLUGIN", "PLUGIN_DIR", "PLUGINS", 
                      "PORT", "PRECEDES", "PREPARE", "PRESERVE", "PREV", 
                      "PROCESSLIST", "PROFILE", "PROFILES", "PROXY", "QUERY", 
                      "QUICK", "REBUILD", "RECOVER", "REDO_BUFFER_SIZE", 
                      "REDUNDANT", "RELAY", "RELAY_LOG_FILE", "RELAY_LOG_POS", 
                      "RELAYLOG", "REMOVE", "REORGANIZE", "REPAIR", "REPLICATE_DO_DB", 
                      "REPLICATE_DO_TABLE", "REPLICATE_IGNORE_DB", "REPLICATE_IGNORE_TABLE", 
                      "REPLICATE_REWRITE_DB", "REPLICATE_WILD_DO_TABLE", 
                      "REPLICATE_WILD_IGNORE_TABLE", "REPLICATION", "RESET", 
                      "RESUME", "RETURNED_SQLSTATE", "RETURNS", "ROLE", 
                      "ROLLBACK", "ROLLUP", "ROTATE", "ROW", "ROWS", "ROW_FORMAT", 
                      "SAVEPOINT", "SCHEDULE", "SECURITY", "SERVER", "SESSION", 
                      "SHARE", "SHARED", "SIGNED", "SIMPLE", "SLAVE", "SLOW", 
                      "SNAPSHOT", "SOCKET", "SOME", "SONAME", "SOUNDS", 
                      "SOURCE", "SQL_AFTER_GTIDS", "SQL_AFTER_MTS_GAPS", 
                      "SQL_BEFORE_GTIDS", "SQL_BUFFER_RESULT", "SQL_CACHE", 
                      "SQL_NO_CACHE", "SQL_THREAD", "START", "STARTS", "STATS_AUTO_RECALC", 
                      "STATS_PERSISTENT", "STATS_SAMPLE_PAGES", "STATUS", 
                      "STOP", "STORAGE", "STORED", "STRING", "SUBCLASS_ORIGIN", 
                      "SUBJECT", "SUBPARTITION", "SUBPARTITIONS", "SUSPEND", 
                      "SWAPS", "SWITCHES", "TABLE_NAME", "TABLESPACE", "TEMPORARY", 
                      "TEMPTABLE", "THAN", "TRADITIONAL", "TRANSACTION", 
                      "TRANSACTIONAL", "TRIGGERS", "TRUNCATE", "UNDEFINED", 
                      "UNDOFILE", "UNDO_BUFFER_SIZE", "UNINSTALL", "UNKNOWN", 
                      "UNTIL", "UPGRADE", "USER", "USE_FRM", "USER_RESOURCES", 
                      "VALIDATION", "VALUE", "VARIABLES", "VIEW", "VIRTUAL", 
                      "VISIBLE", "WAIT", "WARNINGS", "WITHOUT", "WORK", 
                      "WRAPPER", "X509", "XA", "XML", "EUR", "USA", "JIS", 
                      "ISO", "INTERNAL", "QUARTER", "MONTH", "DAY", "HOUR", 
                      "MINUTE", "WEEK", "SECOND", "MICROSECOND", "TABLES", 
                      "ROUTINE", "EXECUTE", "FILE", "PROCESS", "RELOAD", 
                      "SHUTDOWN", "SUPER", "PRIVILEGES", "APPLICATION_PASSWORD_ADMIN", 
                      "AUDIT_ADMIN", "BACKUP_ADMIN", "BINLOG_ADMIN", "BINLOG_ENCRYPTION_ADMIN", 
                      "CLONE_ADMIN", "CONNECTION_ADMIN", "ENCRYPTION_KEY_ADMIN", 
                      "FIREWALL_ADMIN", "FIREWALL_USER", "GROUP_REPLICATION_ADMIN", 
                      "INNODB_REDO_LOG_ARCHIVE", "NDB_STORED_USER", "PERSIST_RO_VARIABLES_ADMIN", 
                      "REPLICATION_APPLIER", "REPLICATION_SLAVE_ADMIN", 
                      "RESOURCE_GROUP_ADMIN", "RESOURCE_GROUP_USER", "ROLE_ADMIN", 
                      "SESSION_VARIABLES_ADMIN", "SET_USER_ID", "SHOW_ROUTINE", 
                      "SYSTEM_VARIABLES_ADMIN", "TABLE_ENCRYPTION_ADMIN", 
                      "VERSION_TOKEN_ADMIN", "XA_RECOVER_ADMIN", "ARMSCII8", 
                      "ASCII", "BIG5", "CP1250", "CP1251", "CP1256", "CP1257", 
                      "CP850", "CP852", "CP866", "CP932", "DEC8", "EUCJPMS", 
                      "EUCKR", "GB2312", "GBK", "GEOSTD8", "GREEK", "HEBREW", 
                      "HP8", "KEYBCS2", "KOI8R", "KOI8U", "LATIN1", "LATIN2", 
                      "LATIN5", "LATIN7", "MACCE", "MACROMAN", "SJIS", "SWE7", 
                      "TIS620", "UCS2", "UJIS", "UTF16", "UTF16LE", "UTF32", 
                      "UTF8", "UTF8MB3", "UTF8MB4", "ARCHIVE", "BLACKHOLE", 
                      "CSV", "FEDERATED", "INNODB", "MEMORY", "MRG_MYISAM", 
                      "MYISAM", "NDB", "NDBCLUSTER", "PERFORMANCE_SCHEMA", 
                      "TOKUDB", "REPEATABLE", "COMMITTED", "UNCOMMITTED", 
                      "SERIALIZABLE", "GEOMETRYCOLLECTION", "GEOMCOLLECTION", 
                      "GEOMETRY", "LINESTRING", "MULTILINESTRING", "MULTIPOINT", 
                      "MULTIPOLYGON", "POINT", "POLYGON", "ABS", "ACOS", 
                      "ADDDATE", "ADDTIME", "AES_DECRYPT", "AES_ENCRYPT", 
                      "AREA", "ASBINARY", "ASIN", "ASTEXT", "ASWKB", "ASWKT", 
                      "ASYMMETRIC_DECRYPT", "ASYMMETRIC_DERIVE", "ASYMMETRIC_ENCRYPT", 
                      "ASYMMETRIC_SIGN", "ASYMMETRIC_VERIFY", "ATAN", "ATAN2", 
                      "BENCHMARK", "BIN", "BIT_COUNT", "BIT_LENGTH", "BUFFER", 
                      "CATALOG_NAME", "CEIL", "CEILING", "CENTROID", "CHARACTER_LENGTH", 
                      "CHARSET", "CHAR_LENGTH", "COERCIBILITY", "COLLATION", 
                      "COMPRESS", "CONCAT", "CONCAT_WS", "CONNECTION_ID", 
                      "CONV", "CONVERT_TZ", "COS", "COT", "CRC32", "CREATE_ASYMMETRIC_PRIV_KEY", 
                      "CREATE_ASYMMETRIC_PUB_KEY", "CREATE_DH_PARAMETERS", 
                      "CREATE_DIGEST", "CROSSES", "DATEDIFF", "DATE_FORMAT", 
                      "DAYNAME", "DAYOFMONTH", "DAYOFWEEK", "DAYOFYEAR", 
                      "DECODE", "DEGREES", "DES_DECRYPT", "DES_ENCRYPT", 
                      "DIMENSION", "DISJOINT", "ELT", "ENCODE", "ENCRYPT", 
                      "ENDPOINT", "ENVELOPE", "EQUALS", "EXP", "EXPORT_SET", 
                      "EXTERIORRING", "EXTRACTVALUE", "FIELD", "FIND_IN_SET", 
                      "FLOOR", "FORMAT", "FOUND_ROWS", "FROM_BASE64", "FROM_DAYS", 
                      "FROM_UNIXTIME", "GEOMCOLLFROMTEXT", "GEOMCOLLFROMWKB", 
                      "GEOMETRYCOLLECTIONFROMTEXT", "GEOMETRYCOLLECTIONFROMWKB", 
                      "GEOMETRYFROMTEXT", "GEOMETRYFROMWKB", "GEOMETRYN", 
                      "GEOMETRYTYPE", "GEOMFROMTEXT", "GEOMFROMWKB", "GET_FORMAT", 
                      "GET_LOCK", "GLENGTH", "GREATEST", "GTID_SUBSET", 
                      "GTID_SUBTRACT", "HEX", "IFNULL", "INET6_ATON", "INET6_NTOA", 
                      "INET_ATON", "INET_NTOA", "INSTR", "INTERIORRINGN", 
                      "INTERSECTS", "ISCLOSED", "ISEMPTY", "ISNULL", "ISSIMPLE", 
                      "IS_FREE_LOCK", "IS_IPV4", "IS_IPV4_COMPAT", "IS_IPV4_MAPPED", 
                      "IS_IPV6", "IS_USED_LOCK", "LAST_INSERT_ID", "LCASE", 
                      "LEAST", "LENGTH", "LINEFROMTEXT", "LINEFROMWKB", 
                      "LINESTRINGFROMTEXT", "LINESTRINGFROMWKB", "LN", "LOAD_FILE", 
                      "LOCATE", "LOG", "LOG10", "LOG2", "LOWER", "LPAD", 
                      "LTRIM", "MAKEDATE", "MAKETIME", "MAKE_SET", "MASTER_POS_WAIT", 
                      "MBRCONTAINS", "MBRDISJOINT", "MBREQUAL", "MBRINTERSECTS", 
                      "MBROVERLAPS", "MBRTOUCHES", "MBRWITHIN", "MD5", "MLINEFROMTEXT", 
                      "MLINEFROMWKB", "MONTHNAME", "MPOINTFROMTEXT", "MPOINTFROMWKB", 
                      "MPOLYFROMTEXT", "MPOLYFROMWKB", "MULTILINESTRINGFROMTEXT", 
                      "MULTILINESTRINGFROMWKB", "MULTIPOINTFROMTEXT", "MULTIPOINTFROMWKB", 
                      "MULTIPOLYGONFROMTEXT", "MULTIPOLYGONFROMWKB", "NAME_CONST", 
                      "NULLIF", "NUMGEOMETRIES", "NUMINTERIORRINGS", "NUMPOINTS", 
                      "OCT", "OCTET_LENGTH", "ORD", "OVERLAPS", "PERIOD_ADD", 
                      "PERIOD_DIFF", "PI", "POINTFROMTEXT", "POINTFROMWKB", 
                      "POINTN", "POLYFROMTEXT", "POLYFROMWKB", "POLYGONFROMTEXT", 
                      "POLYGONFROMWKB", "POW", "POWER", "QUOTE", "RADIANS", 
                      "RAND", "RANDOM_BYTES", "RELEASE_LOCK", "REVERSE", 
                      "ROUND", "ROW_COUNT", "RPAD", "RTRIM", "SEC_TO_TIME", 
                      "SESSION_USER", "SHA", "SHA1", "SHA2", "SCHEMA_NAME", 
                      "SIGN", "SIN", "SLEEP", "SOUNDEX", "SQL_THREAD_WAIT_AFTER_GTIDS", 
                      "SQRT", "SRID", "STARTPOINT", "STRCMP", "STR_TO_DATE", 
                      "ST_AREA", "ST_ASBINARY", "ST_ASTEXT", "ST_ASWKB", 
                      "ST_ASWKT", "ST_BUFFER", "ST_CENTROID", "ST_CONTAINS", 
                      "ST_CROSSES", "ST_DIFFERENCE", "ST_DIMENSION", "ST_DISJOINT", 
                      "ST_DISTANCE", "ST_ENDPOINT", "ST_ENVELOPE", "ST_EQUALS", 
                      "ST_EXTERIORRING", "ST_GEOMCOLLFROMTEXT", "ST_GEOMCOLLFROMTXT", 
                      "ST_GEOMCOLLFROMWKB", "ST_GEOMETRYCOLLECTIONFROMTEXT", 
                      "ST_GEOMETRYCOLLECTIONFROMWKB", "ST_GEOMETRYFROMTEXT", 
                      "ST_GEOMETRYFROMWKB", "ST_GEOMETRYN", "ST_GEOMETRYTYPE", 
                      "ST_GEOMFROMTEXT", "ST_GEOMFROMWKB", "ST_INTERIORRINGN", 
                      "ST_INTERSECTION", "ST_INTERSECTS", "ST_ISCLOSED", 
                      "ST_ISEMPTY", "ST_ISSIMPLE", "ST_LINEFROMTEXT", "ST_LINEFROMWKB", 
                      "ST_LINESTRINGFROMTEXT", "ST_LINESTRINGFROMWKB", "ST_NUMGEOMETRIES", 
                      "ST_NUMINTERIORRING", "ST_NUMINTERIORRINGS", "ST_NUMPOINTS", 
                      "ST_OVERLAPS", "ST_POINTFROMTEXT", "ST_POINTFROMWKB", 
                      "ST_POINTN", "ST_POLYFROMTEXT", "ST_POLYFROMWKB", 
                      "ST_POLYGONFROMTEXT", "ST_POLYGONFROMWKB", "ST_SRID", 
                      "ST_STARTPOINT", "ST_SYMDIFFERENCE", "ST_TOUCHES", 
                      "ST_UNION", "ST_WITHIN", "ST_X", "ST_Y", "SUBDATE", 
                      "SUBSTRING_INDEX", "SUBTIME", "SYSTEM_USER", "TAN", 
                      "TIMEDIFF", "TIMESTAMPADD", "TIMESTAMPDIFF", "TIME_FORMAT", 
                      "TIME_TO_SEC", "TOUCHES", "TO_BASE64", "TO_DAYS", 
                      "TO_SECONDS", "UCASE", "UNCOMPRESS", "UNCOMPRESSED_LENGTH", 
                      "UNHEX", "UNIX_TIMESTAMP", "UPDATEXML", "UPPER", "UUID", 
                      "UUID_SHORT", "VALIDATE_PASSWORD_STRENGTH", "VERSION", 
                      "WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS", "WEEKDAY", "WEEKOFYEAR", 
                      "WEIGHT_STRING", "WITHIN", "YEARWEEK", "Y_FUNCTION", 
                      "X_FUNCTION", "VAR_ASSIGN", "PLUS_ASSIGN", "MINUS_ASSIGN", 
                      "MULT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", "AND_ASSIGN", 
                      "XOR_ASSIGN", "OR_ASSIGN", "STAR", "DIVIDE", "MODULE", 
                      "PLUS", "MINUSMINUS", "MINUS", "DIV", "MOD", "EQUAL_SYMBOL", 
                      "GREATER_SYMBOL", "LESS_SYMBOL", "EXCLAMATION_SYMBOL", 
                      "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", 
                      "DOT", "LR_BRACKET", "RR_BRACKET", "COMMA", "SEMI", 
                      "AT_SIGN", "ZERO_DECIMAL", "ONE_DECIMAL", "TWO_DECIMAL", 
                      "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", "REVERSE_QUOTE_SYMB", 
                      "COLON_SYMB", "CHARSET_REVERSE_QOUTE_STRING", "FILESIZE_LITERAL", 
                      "START_NATIONAL_STRING_LITERAL", "STRING_LITERAL", 
                      "DECIMAL_LITERAL", "HEXADECIMAL_LITERAL", "REAL_LITERAL", 
                      "NULL_SPEC_LITERAL", "BIT_STRING", "STRING_CHARSET_NAME", 
                      "DOT_ID", "ID", "DOUBLE_QUOTE_ID", "REVERSE_QUOTE_ID", 
                      "BLOCKED_QUOTE_ID", "STRING_USER_NAME", "LOCAL_ID", 
                      "GLOBAL_ID", "ERROR_RECONGNIGION" ];

var ruleNames =  [ "program", "statement", "sqlStatements", "sqlStatement", 
                   "insertStatement", "insertStatementValue", "updateStatement", 
                   "updatedElement", "deleteStatement", "selectStatement", 
                   "selectElements", "selectElement", "fromClause", "orderByClause", 
                   "orderByExpression", "tableSource", "limitClause", "limitClauseAtom", 
                   "fullId", "tableName", "fullColumnName", "engineName", 
                   "uid", "simpleId", "dottedId", "decimalLiteral", "stringLiteral", 
                   "booleanLiteral", "hexadecimalLiteral", "constNumberLiteral", 
                   "nullLiteral", "constant", "constantOrDefault", "uidList", 
                   "constants", "constantsOrDefaults", "expression", "predicate", 
                   "constantAtoms", "constOrColumnAtom", "expressionAtom", 
                   "comparisonOperator", "logicalOperator", "charsetNameBase", 
                   "transactionLevelBase", "privilegesBase", "intervalTypeBase", 
                   "dataTypeBase", "keywordsCanBeId", "functionNameBase" ];

function SqlParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SqlParser.prototype = Object.create(antlr4.Parser.prototype);
SqlParser.prototype.constructor = SqlParser;

Object.defineProperty(SqlParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SqlParser.EOF = antlr4.Token.EOF;
SqlParser.SPACE = 1;
SqlParser.SPEC_MYSQL_COMMENT = 2;
SqlParser.COMMENT_INPUT = 3;
SqlParser.LINE_COMMENT = 4;
SqlParser.ADD = 5;
SqlParser.ALL = 6;
SqlParser.ALTER = 7;
SqlParser.ALWAYS = 8;
SqlParser.ANALYZE = 9;
SqlParser.AND = 10;
SqlParser.AS = 11;
SqlParser.ASC = 12;
SqlParser.BEFORE = 13;
SqlParser.BETWEEN = 14;
SqlParser.BOTH = 15;
SqlParser.BY = 16;
SqlParser.CALL = 17;
SqlParser.CASCADE = 18;
SqlParser.CASE = 19;
SqlParser.CAST = 20;
SqlParser.CHANGE = 21;
SqlParser.CHARACTER = 22;
SqlParser.CHECK = 23;
SqlParser.COLLATE = 24;
SqlParser.COLUMN = 25;
SqlParser.CONDITION = 26;
SqlParser.CONSTRAINT = 27;
SqlParser.CONTINUE = 28;
SqlParser.CONVERT = 29;
SqlParser.CREATE = 30;
SqlParser.CROSS = 31;
SqlParser.CURRENT = 32;
SqlParser.CURRENT_USER = 33;
SqlParser.CURSOR = 34;
SqlParser.DATABASE = 35;
SqlParser.DATABASES = 36;
SqlParser.DECLARE = 37;
SqlParser.DEFAULT = 38;
SqlParser.DELAYED = 39;
SqlParser.DELETE = 40;
SqlParser.DESC = 41;
SqlParser.DESCRIBE = 42;
SqlParser.DETERMINISTIC = 43;
SqlParser.DIAGNOSTICS = 44;
SqlParser.DISTINCT = 45;
SqlParser.DISTINCTROW = 46;
SqlParser.DROP = 47;
SqlParser.EACH = 48;
SqlParser.ELSE = 49;
SqlParser.ELSEIF = 50;
SqlParser.ENCLOSED = 51;
SqlParser.ESCAPED = 52;
SqlParser.EXISTS = 53;
SqlParser.EXIT = 54;
SqlParser.EXPLAIN = 55;
SqlParser.FALSE = 56;
SqlParser.FETCH = 57;
SqlParser.FOR = 58;
SqlParser.FORCE = 59;
SqlParser.FOREIGN = 60;
SqlParser.FROM = 61;
SqlParser.FULLTEXT = 62;
SqlParser.GENERATED = 63;
SqlParser.GET = 64;
SqlParser.GRANT = 65;
SqlParser.GROUP = 66;
SqlParser.HAVING = 67;
SqlParser.HIGH_PRIORITY = 68;
SqlParser.IF = 69;
SqlParser.IGNORE = 70;
SqlParser.IN = 71;
SqlParser.INDEX = 72;
SqlParser.INFILE = 73;
SqlParser.INNER = 74;
SqlParser.INOUT = 75;
SqlParser.INSERT = 76;
SqlParser.INTERVAL = 77;
SqlParser.INTO = 78;
SqlParser.IS = 79;
SqlParser.ITERATE = 80;
SqlParser.JOIN = 81;
SqlParser.KEY = 82;
SqlParser.KEYS = 83;
SqlParser.KILL = 84;
SqlParser.LEADING = 85;
SqlParser.LEAVE = 86;
SqlParser.LEFT = 87;
SqlParser.LIKE = 88;
SqlParser.LIMIT = 89;
SqlParser.LINEAR = 90;
SqlParser.LINES = 91;
SqlParser.LOAD = 92;
SqlParser.LOCK = 93;
SqlParser.LOOP = 94;
SqlParser.LOW_PRIORITY = 95;
SqlParser.MASTER_BIND = 96;
SqlParser.MASTER_SSL_VERIFY_SERVER_CERT = 97;
SqlParser.MATCH = 98;
SqlParser.MAXVALUE = 99;
SqlParser.MODIFIES = 100;
SqlParser.NATURAL = 101;
SqlParser.NOT = 102;
SqlParser.NO_WRITE_TO_BINLOG = 103;
SqlParser.NULL_LITERAL = 104;
SqlParser.NUMBER = 105;
SqlParser.ON = 106;
SqlParser.OPTIMIZE = 107;
SqlParser.OPTION = 108;
SqlParser.OPTIONALLY = 109;
SqlParser.OR = 110;
SqlParser.ORDER = 111;
SqlParser.OUT = 112;
SqlParser.OUTER = 113;
SqlParser.OUTFILE = 114;
SqlParser.PARTITION = 115;
SqlParser.PRIMARY = 116;
SqlParser.PROCEDURE = 117;
SqlParser.PURGE = 118;
SqlParser.RANGE = 119;
SqlParser.READ = 120;
SqlParser.READS = 121;
SqlParser.REFERENCES = 122;
SqlParser.REGEXP = 123;
SqlParser.RELEASE = 124;
SqlParser.RENAME = 125;
SqlParser.REPEAT = 126;
SqlParser.REPLACE = 127;
SqlParser.REQUIRE = 128;
SqlParser.RESIGNAL = 129;
SqlParser.RESTRICT = 130;
SqlParser.RETURN = 131;
SqlParser.REVOKE = 132;
SqlParser.RIGHT = 133;
SqlParser.RLIKE = 134;
SqlParser.SCHEMA = 135;
SqlParser.SCHEMAS = 136;
SqlParser.SELECT = 137;
SqlParser.SET = 138;
SqlParser.SEPARATOR = 139;
SqlParser.SHOW = 140;
SqlParser.SIGNAL = 141;
SqlParser.SPATIAL = 142;
SqlParser.SQL = 143;
SqlParser.SQLEXCEPTION = 144;
SqlParser.SQLSTATE = 145;
SqlParser.SQLWARNING = 146;
SqlParser.SQL_BIG_RESULT = 147;
SqlParser.SQL_CALC_FOUND_ROWS = 148;
SqlParser.SQL_SMALL_RESULT = 149;
SqlParser.SSL = 150;
SqlParser.STACKED = 151;
SqlParser.STARTING = 152;
SqlParser.STRAIGHT_JOIN = 153;
SqlParser.TABLE = 154;
SqlParser.TERMINATED = 155;
SqlParser.THEN = 156;
SqlParser.TO = 157;
SqlParser.TRAILING = 158;
SqlParser.TRIGGER = 159;
SqlParser.TRUE = 160;
SqlParser.UNDO = 161;
SqlParser.UNION = 162;
SqlParser.UNIQUE = 163;
SqlParser.UNLOCK = 164;
SqlParser.UNSIGNED = 165;
SqlParser.UPDATE = 166;
SqlParser.USAGE = 167;
SqlParser.USE = 168;
SqlParser.USING = 169;
SqlParser.VALUES = 170;
SqlParser.WHEN = 171;
SqlParser.WHERE = 172;
SqlParser.WHILE = 173;
SqlParser.WITH = 174;
SqlParser.WRITE = 175;
SqlParser.XOR = 176;
SqlParser.ZEROFILL = 177;
SqlParser.TINYINT = 178;
SqlParser.SMALLINT = 179;
SqlParser.MEDIUMINT = 180;
SqlParser.MIDDLEINT = 181;
SqlParser.INT = 182;
SqlParser.INT1 = 183;
SqlParser.INT2 = 184;
SqlParser.INT3 = 185;
SqlParser.INT4 = 186;
SqlParser.INT8 = 187;
SqlParser.INTEGER = 188;
SqlParser.BIGINT = 189;
SqlParser.REAL = 190;
SqlParser.DOUBLE = 191;
SqlParser.PRECISION = 192;
SqlParser.FLOAT = 193;
SqlParser.FLOAT4 = 194;
SqlParser.FLOAT8 = 195;
SqlParser.DECIMAL = 196;
SqlParser.DEC = 197;
SqlParser.NUMERIC = 198;
SqlParser.DATE = 199;
SqlParser.TIME = 200;
SqlParser.TIMESTAMP = 201;
SqlParser.DATETIME = 202;
SqlParser.YEAR = 203;
SqlParser.CHAR = 204;
SqlParser.VARCHAR = 205;
SqlParser.NVARCHAR = 206;
SqlParser.NATIONAL = 207;
SqlParser.BINARY = 208;
SqlParser.VARBINARY = 209;
SqlParser.TINYBLOB = 210;
SqlParser.BLOB = 211;
SqlParser.MEDIUMBLOB = 212;
SqlParser.LONG = 213;
SqlParser.LONGBLOB = 214;
SqlParser.TINYTEXT = 215;
SqlParser.TEXT = 216;
SqlParser.MEDIUMTEXT = 217;
SqlParser.LONGTEXT = 218;
SqlParser.ENUM = 219;
SqlParser.VARYING = 220;
SqlParser.SERIAL = 221;
SqlParser.YEAR_MONTH = 222;
SqlParser.DAY_HOUR = 223;
SqlParser.DAY_MINUTE = 224;
SqlParser.DAY_SECOND = 225;
SqlParser.HOUR_MINUTE = 226;
SqlParser.HOUR_SECOND = 227;
SqlParser.MINUTE_SECOND = 228;
SqlParser.SECOND_MICROSECOND = 229;
SqlParser.MINUTE_MICROSECOND = 230;
SqlParser.HOUR_MICROSECOND = 231;
SqlParser.DAY_MICROSECOND = 232;
SqlParser.JSON_VALID = 233;
SqlParser.JSON_SCHEMA_VALID = 234;
SqlParser.AVG = 235;
SqlParser.BIT_AND = 236;
SqlParser.BIT_OR = 237;
SqlParser.BIT_XOR = 238;
SqlParser.COUNT = 239;
SqlParser.GROUP_CONCAT = 240;
SqlParser.MAX = 241;
SqlParser.MIN = 242;
SqlParser.STD = 243;
SqlParser.STDDEV = 244;
SqlParser.STDDEV_POP = 245;
SqlParser.STDDEV_SAMP = 246;
SqlParser.SUM = 247;
SqlParser.VAR_POP = 248;
SqlParser.VAR_SAMP = 249;
SqlParser.VARIANCE = 250;
SqlParser.CURRENT_DATE = 251;
SqlParser.CURRENT_TIME = 252;
SqlParser.CURRENT_TIMESTAMP = 253;
SqlParser.LOCALTIME = 254;
SqlParser.CURDATE = 255;
SqlParser.CURTIME = 256;
SqlParser.DATE_ADD = 257;
SqlParser.DATE_SUB = 258;
SqlParser.EXTRACT = 259;
SqlParser.LOCALTIMESTAMP = 260;
SqlParser.NOW = 261;
SqlParser.POSITION = 262;
SqlParser.SUBSTR = 263;
SqlParser.SUBSTRING = 264;
SqlParser.SYSDATE = 265;
SqlParser.TRIM = 266;
SqlParser.UTC_DATE = 267;
SqlParser.UTC_TIME = 268;
SqlParser.UTC_TIMESTAMP = 269;
SqlParser.ACCOUNT = 270;
SqlParser.ACTION = 271;
SqlParser.AFTER = 272;
SqlParser.AGGREGATE = 273;
SqlParser.ALGORITHM = 274;
SqlParser.ANY = 275;
SqlParser.AT = 276;
SqlParser.AUTHORS = 277;
SqlParser.AUTOCOMMIT = 278;
SqlParser.AUTOEXTEND_SIZE = 279;
SqlParser.AUTO_INCREMENT = 280;
SqlParser.AVG_ROW_LENGTH = 281;
SqlParser.BEGIN = 282;
SqlParser.BINLOG = 283;
SqlParser.BIT = 284;
SqlParser.BLOCK = 285;
SqlParser.BOOL = 286;
SqlParser.BOOLEAN = 287;
SqlParser.BTREE = 288;
SqlParser.CACHE = 289;
SqlParser.CASCADED = 290;
SqlParser.CHAIN = 291;
SqlParser.CHANGED = 292;
SqlParser.CHANNEL = 293;
SqlParser.CHECKSUM = 294;
SqlParser.PAGE_CHECKSUM = 295;
SqlParser.CIPHER = 296;
SqlParser.CLASS_ORIGIN = 297;
SqlParser.CLIENT = 298;
SqlParser.CLOSE = 299;
SqlParser.COALESCE = 300;
SqlParser.CODE = 301;
SqlParser.COLUMNS = 302;
SqlParser.COLUMN_FORMAT = 303;
SqlParser.COLUMN_NAME = 304;
SqlParser.COMMENT = 305;
SqlParser.COMMIT = 306;
SqlParser.COMPACT = 307;
SqlParser.COMPLETION = 308;
SqlParser.COMPRESSED = 309;
SqlParser.COMPRESSION = 310;
SqlParser.CONCURRENT = 311;
SqlParser.CONNECTION = 312;
SqlParser.CONSISTENT = 313;
SqlParser.CONSTRAINT_CATALOG = 314;
SqlParser.CONSTRAINT_SCHEMA = 315;
SqlParser.CONSTRAINT_NAME = 316;
SqlParser.CONTAINS = 317;
SqlParser.CONTEXT = 318;
SqlParser.CONTRIBUTORS = 319;
SqlParser.COPY = 320;
SqlParser.CPU = 321;
SqlParser.CURSOR_NAME = 322;
SqlParser.DATA = 323;
SqlParser.DATAFILE = 324;
SqlParser.DEALLOCATE = 325;
SqlParser.DEFAULT_AUTH = 326;
SqlParser.DEFINER = 327;
SqlParser.DELAY_KEY_WRITE = 328;
SqlParser.DES_KEY_FILE = 329;
SqlParser.DIRECTORY = 330;
SqlParser.DISABLE = 331;
SqlParser.DISCARD = 332;
SqlParser.DISK = 333;
SqlParser.DO = 334;
SqlParser.DUMPFILE = 335;
SqlParser.DUPLICATE = 336;
SqlParser.DYNAMIC = 337;
SqlParser.ENABLE = 338;
SqlParser.ENCRYPTION = 339;
SqlParser.END = 340;
SqlParser.ENDS = 341;
SqlParser.ENGINE = 342;
SqlParser.ENGINES = 343;
SqlParser.ERROR = 344;
SqlParser.ERRORS = 345;
SqlParser.ESCAPE = 346;
SqlParser.EVEN = 347;
SqlParser.EVENT = 348;
SqlParser.EVENTS = 349;
SqlParser.EVERY = 350;
SqlParser.EXCHANGE = 351;
SqlParser.EXCLUSIVE = 352;
SqlParser.EXPIRE = 353;
SqlParser.EXPORT = 354;
SqlParser.EXTENDED = 355;
SqlParser.EXTENT_SIZE = 356;
SqlParser.FAST = 357;
SqlParser.FAULTS = 358;
SqlParser.FIELDS = 359;
SqlParser.FILE_BLOCK_SIZE = 360;
SqlParser.FILTER = 361;
SqlParser.FIRST = 362;
SqlParser.FIXED = 363;
SqlParser.FLUSH = 364;
SqlParser.FOLLOWS = 365;
SqlParser.FOUND = 366;
SqlParser.FULL = 367;
SqlParser.FUNCTION = 368;
SqlParser.GENERAL = 369;
SqlParser.GLOBAL = 370;
SqlParser.GRANTS = 371;
SqlParser.GROUP_REPLICATION = 372;
SqlParser.HANDLER = 373;
SqlParser.HASH = 374;
SqlParser.HELP = 375;
SqlParser.HOST = 376;
SqlParser.HOSTS = 377;
SqlParser.IDENTIFIED = 378;
SqlParser.IGNORE_SERVER_IDS = 379;
SqlParser.IMPORT = 380;
SqlParser.INDEXES = 381;
SqlParser.INITIAL_SIZE = 382;
SqlParser.INPLACE = 383;
SqlParser.INSERT_METHOD = 384;
SqlParser.INSTALL = 385;
SqlParser.INSTANCE = 386;
SqlParser.INVISIBLE = 387;
SqlParser.INVOKER = 388;
SqlParser.IO = 389;
SqlParser.IO_THREAD = 390;
SqlParser.IPC = 391;
SqlParser.ISOLATION = 392;
SqlParser.ISSUER = 393;
SqlParser.JSON = 394;
SqlParser.KEY_BLOCK_SIZE = 395;
SqlParser.LANGUAGE = 396;
SqlParser.LAST = 397;
SqlParser.LEAVES = 398;
SqlParser.LESS = 399;
SqlParser.LEVEL = 400;
SqlParser.LIST = 401;
SqlParser.LOCAL = 402;
SqlParser.LOGFILE = 403;
SqlParser.LOGS = 404;
SqlParser.MASTER = 405;
SqlParser.MASTER_AUTO_POSITION = 406;
SqlParser.MASTER_CONNECT_RETRY = 407;
SqlParser.MASTER_DELAY = 408;
SqlParser.MASTER_HEARTBEAT_PERIOD = 409;
SqlParser.MASTER_HOST = 410;
SqlParser.MASTER_LOG_FILE = 411;
SqlParser.MASTER_LOG_POS = 412;
SqlParser.MASTER_PASSWORD = 413;
SqlParser.MASTER_PORT = 414;
SqlParser.MASTER_RETRY_COUNT = 415;
SqlParser.MASTER_SSL = 416;
SqlParser.MASTER_SSL_CA = 417;
SqlParser.MASTER_SSL_CAPATH = 418;
SqlParser.MASTER_SSL_CERT = 419;
SqlParser.MASTER_SSL_CIPHER = 420;
SqlParser.MASTER_SSL_CRL = 421;
SqlParser.MASTER_SSL_CRLPATH = 422;
SqlParser.MASTER_SSL_KEY = 423;
SqlParser.MASTER_TLS_VERSION = 424;
SqlParser.MASTER_USER = 425;
SqlParser.MAX_CONNECTIONS_PER_HOUR = 426;
SqlParser.MAX_QUERIES_PER_HOUR = 427;
SqlParser.MAX_ROWS = 428;
SqlParser.MAX_SIZE = 429;
SqlParser.MAX_UPDATES_PER_HOUR = 430;
SqlParser.MAX_USER_CONNECTIONS = 431;
SqlParser.MEDIUM = 432;
SqlParser.MERGE = 433;
SqlParser.MESSAGE_TEXT = 434;
SqlParser.MID = 435;
SqlParser.MIGRATE = 436;
SqlParser.MIN_ROWS = 437;
SqlParser.MODE = 438;
SqlParser.MODIFY = 439;
SqlParser.MUTEX = 440;
SqlParser.MYSQL = 441;
SqlParser.MYSQL_ERRNO = 442;
SqlParser.NAME = 443;
SqlParser.NAMES = 444;
SqlParser.NCHAR = 445;
SqlParser.NEVER = 446;
SqlParser.NEXT = 447;
SqlParser.NO = 448;
SqlParser.NODEGROUP = 449;
SqlParser.NONE = 450;
SqlParser.OFFLINE = 451;
SqlParser.OFFSET = 452;
SqlParser.OJ = 453;
SqlParser.OLD_PASSWORD = 454;
SqlParser.ONE = 455;
SqlParser.ONLINE = 456;
SqlParser.ONLY = 457;
SqlParser.OPEN = 458;
SqlParser.OPTIMIZER_COSTS = 459;
SqlParser.OPTIONS = 460;
SqlParser.OWNER = 461;
SqlParser.PACK_KEYS = 462;
SqlParser.PAGE = 463;
SqlParser.PARSER = 464;
SqlParser.PARTIAL = 465;
SqlParser.PARTITIONING = 466;
SqlParser.PARTITIONS = 467;
SqlParser.PASSWORD = 468;
SqlParser.PHASE = 469;
SqlParser.PLUGIN = 470;
SqlParser.PLUGIN_DIR = 471;
SqlParser.PLUGINS = 472;
SqlParser.PORT = 473;
SqlParser.PRECEDES = 474;
SqlParser.PREPARE = 475;
SqlParser.PRESERVE = 476;
SqlParser.PREV = 477;
SqlParser.PROCESSLIST = 478;
SqlParser.PROFILE = 479;
SqlParser.PROFILES = 480;
SqlParser.PROXY = 481;
SqlParser.QUERY = 482;
SqlParser.QUICK = 483;
SqlParser.REBUILD = 484;
SqlParser.RECOVER = 485;
SqlParser.REDO_BUFFER_SIZE = 486;
SqlParser.REDUNDANT = 487;
SqlParser.RELAY = 488;
SqlParser.RELAY_LOG_FILE = 489;
SqlParser.RELAY_LOG_POS = 490;
SqlParser.RELAYLOG = 491;
SqlParser.REMOVE = 492;
SqlParser.REORGANIZE = 493;
SqlParser.REPAIR = 494;
SqlParser.REPLICATE_DO_DB = 495;
SqlParser.REPLICATE_DO_TABLE = 496;
SqlParser.REPLICATE_IGNORE_DB = 497;
SqlParser.REPLICATE_IGNORE_TABLE = 498;
SqlParser.REPLICATE_REWRITE_DB = 499;
SqlParser.REPLICATE_WILD_DO_TABLE = 500;
SqlParser.REPLICATE_WILD_IGNORE_TABLE = 501;
SqlParser.REPLICATION = 502;
SqlParser.RESET = 503;
SqlParser.RESUME = 504;
SqlParser.RETURNED_SQLSTATE = 505;
SqlParser.RETURNS = 506;
SqlParser.ROLE = 507;
SqlParser.ROLLBACK = 508;
SqlParser.ROLLUP = 509;
SqlParser.ROTATE = 510;
SqlParser.ROW = 511;
SqlParser.ROWS = 512;
SqlParser.ROW_FORMAT = 513;
SqlParser.SAVEPOINT = 514;
SqlParser.SCHEDULE = 515;
SqlParser.SECURITY = 516;
SqlParser.SERVER = 517;
SqlParser.SESSION = 518;
SqlParser.SHARE = 519;
SqlParser.SHARED = 520;
SqlParser.SIGNED = 521;
SqlParser.SIMPLE = 522;
SqlParser.SLAVE = 523;
SqlParser.SLOW = 524;
SqlParser.SNAPSHOT = 525;
SqlParser.SOCKET = 526;
SqlParser.SOME = 527;
SqlParser.SONAME = 528;
SqlParser.SOUNDS = 529;
SqlParser.SOURCE = 530;
SqlParser.SQL_AFTER_GTIDS = 531;
SqlParser.SQL_AFTER_MTS_GAPS = 532;
SqlParser.SQL_BEFORE_GTIDS = 533;
SqlParser.SQL_BUFFER_RESULT = 534;
SqlParser.SQL_CACHE = 535;
SqlParser.SQL_NO_CACHE = 536;
SqlParser.SQL_THREAD = 537;
SqlParser.START = 538;
SqlParser.STARTS = 539;
SqlParser.STATS_AUTO_RECALC = 540;
SqlParser.STATS_PERSISTENT = 541;
SqlParser.STATS_SAMPLE_PAGES = 542;
SqlParser.STATUS = 543;
SqlParser.STOP = 544;
SqlParser.STORAGE = 545;
SqlParser.STORED = 546;
SqlParser.STRING = 547;
SqlParser.SUBCLASS_ORIGIN = 548;
SqlParser.SUBJECT = 549;
SqlParser.SUBPARTITION = 550;
SqlParser.SUBPARTITIONS = 551;
SqlParser.SUSPEND = 552;
SqlParser.SWAPS = 553;
SqlParser.SWITCHES = 554;
SqlParser.TABLE_NAME = 555;
SqlParser.TABLESPACE = 556;
SqlParser.TEMPORARY = 557;
SqlParser.TEMPTABLE = 558;
SqlParser.THAN = 559;
SqlParser.TRADITIONAL = 560;
SqlParser.TRANSACTION = 561;
SqlParser.TRANSACTIONAL = 562;
SqlParser.TRIGGERS = 563;
SqlParser.TRUNCATE = 564;
SqlParser.UNDEFINED = 565;
SqlParser.UNDOFILE = 566;
SqlParser.UNDO_BUFFER_SIZE = 567;
SqlParser.UNINSTALL = 568;
SqlParser.UNKNOWN = 569;
SqlParser.UNTIL = 570;
SqlParser.UPGRADE = 571;
SqlParser.USER = 572;
SqlParser.USE_FRM = 573;
SqlParser.USER_RESOURCES = 574;
SqlParser.VALIDATION = 575;
SqlParser.VALUE = 576;
SqlParser.VARIABLES = 577;
SqlParser.VIEW = 578;
SqlParser.VIRTUAL = 579;
SqlParser.VISIBLE = 580;
SqlParser.WAIT = 581;
SqlParser.WARNINGS = 582;
SqlParser.WITHOUT = 583;
SqlParser.WORK = 584;
SqlParser.WRAPPER = 585;
SqlParser.X509 = 586;
SqlParser.XA = 587;
SqlParser.XML = 588;
SqlParser.EUR = 589;
SqlParser.USA = 590;
SqlParser.JIS = 591;
SqlParser.ISO = 592;
SqlParser.INTERNAL = 593;
SqlParser.QUARTER = 594;
SqlParser.MONTH = 595;
SqlParser.DAY = 596;
SqlParser.HOUR = 597;
SqlParser.MINUTE = 598;
SqlParser.WEEK = 599;
SqlParser.SECOND = 600;
SqlParser.MICROSECOND = 601;
SqlParser.TABLES = 602;
SqlParser.ROUTINE = 603;
SqlParser.EXECUTE = 604;
SqlParser.FILE = 605;
SqlParser.PROCESS = 606;
SqlParser.RELOAD = 607;
SqlParser.SHUTDOWN = 608;
SqlParser.SUPER = 609;
SqlParser.PRIVILEGES = 610;
SqlParser.APPLICATION_PASSWORD_ADMIN = 611;
SqlParser.AUDIT_ADMIN = 612;
SqlParser.BACKUP_ADMIN = 613;
SqlParser.BINLOG_ADMIN = 614;
SqlParser.BINLOG_ENCRYPTION_ADMIN = 615;
SqlParser.CLONE_ADMIN = 616;
SqlParser.CONNECTION_ADMIN = 617;
SqlParser.ENCRYPTION_KEY_ADMIN = 618;
SqlParser.FIREWALL_ADMIN = 619;
SqlParser.FIREWALL_USER = 620;
SqlParser.GROUP_REPLICATION_ADMIN = 621;
SqlParser.INNODB_REDO_LOG_ARCHIVE = 622;
SqlParser.NDB_STORED_USER = 623;
SqlParser.PERSIST_RO_VARIABLES_ADMIN = 624;
SqlParser.REPLICATION_APPLIER = 625;
SqlParser.REPLICATION_SLAVE_ADMIN = 626;
SqlParser.RESOURCE_GROUP_ADMIN = 627;
SqlParser.RESOURCE_GROUP_USER = 628;
SqlParser.ROLE_ADMIN = 629;
SqlParser.SESSION_VARIABLES_ADMIN = 630;
SqlParser.SET_USER_ID = 631;
SqlParser.SHOW_ROUTINE = 632;
SqlParser.SYSTEM_VARIABLES_ADMIN = 633;
SqlParser.TABLE_ENCRYPTION_ADMIN = 634;
SqlParser.VERSION_TOKEN_ADMIN = 635;
SqlParser.XA_RECOVER_ADMIN = 636;
SqlParser.ARMSCII8 = 637;
SqlParser.ASCII = 638;
SqlParser.BIG5 = 639;
SqlParser.CP1250 = 640;
SqlParser.CP1251 = 641;
SqlParser.CP1256 = 642;
SqlParser.CP1257 = 643;
SqlParser.CP850 = 644;
SqlParser.CP852 = 645;
SqlParser.CP866 = 646;
SqlParser.CP932 = 647;
SqlParser.DEC8 = 648;
SqlParser.EUCJPMS = 649;
SqlParser.EUCKR = 650;
SqlParser.GB2312 = 651;
SqlParser.GBK = 652;
SqlParser.GEOSTD8 = 653;
SqlParser.GREEK = 654;
SqlParser.HEBREW = 655;
SqlParser.HP8 = 656;
SqlParser.KEYBCS2 = 657;
SqlParser.KOI8R = 658;
SqlParser.KOI8U = 659;
SqlParser.LATIN1 = 660;
SqlParser.LATIN2 = 661;
SqlParser.LATIN5 = 662;
SqlParser.LATIN7 = 663;
SqlParser.MACCE = 664;
SqlParser.MACROMAN = 665;
SqlParser.SJIS = 666;
SqlParser.SWE7 = 667;
SqlParser.TIS620 = 668;
SqlParser.UCS2 = 669;
SqlParser.UJIS = 670;
SqlParser.UTF16 = 671;
SqlParser.UTF16LE = 672;
SqlParser.UTF32 = 673;
SqlParser.UTF8 = 674;
SqlParser.UTF8MB3 = 675;
SqlParser.UTF8MB4 = 676;
SqlParser.ARCHIVE = 677;
SqlParser.BLACKHOLE = 678;
SqlParser.CSV = 679;
SqlParser.FEDERATED = 680;
SqlParser.INNODB = 681;
SqlParser.MEMORY = 682;
SqlParser.MRG_MYISAM = 683;
SqlParser.MYISAM = 684;
SqlParser.NDB = 685;
SqlParser.NDBCLUSTER = 686;
SqlParser.PERFORMANCE_SCHEMA = 687;
SqlParser.TOKUDB = 688;
SqlParser.REPEATABLE = 689;
SqlParser.COMMITTED = 690;
SqlParser.UNCOMMITTED = 691;
SqlParser.SERIALIZABLE = 692;
SqlParser.GEOMETRYCOLLECTION = 693;
SqlParser.GEOMCOLLECTION = 694;
SqlParser.GEOMETRY = 695;
SqlParser.LINESTRING = 696;
SqlParser.MULTILINESTRING = 697;
SqlParser.MULTIPOINT = 698;
SqlParser.MULTIPOLYGON = 699;
SqlParser.POINT = 700;
SqlParser.POLYGON = 701;
SqlParser.ABS = 702;
SqlParser.ACOS = 703;
SqlParser.ADDDATE = 704;
SqlParser.ADDTIME = 705;
SqlParser.AES_DECRYPT = 706;
SqlParser.AES_ENCRYPT = 707;
SqlParser.AREA = 708;
SqlParser.ASBINARY = 709;
SqlParser.ASIN = 710;
SqlParser.ASTEXT = 711;
SqlParser.ASWKB = 712;
SqlParser.ASWKT = 713;
SqlParser.ASYMMETRIC_DECRYPT = 714;
SqlParser.ASYMMETRIC_DERIVE = 715;
SqlParser.ASYMMETRIC_ENCRYPT = 716;
SqlParser.ASYMMETRIC_SIGN = 717;
SqlParser.ASYMMETRIC_VERIFY = 718;
SqlParser.ATAN = 719;
SqlParser.ATAN2 = 720;
SqlParser.BENCHMARK = 721;
SqlParser.BIN = 722;
SqlParser.BIT_COUNT = 723;
SqlParser.BIT_LENGTH = 724;
SqlParser.BUFFER = 725;
SqlParser.CATALOG_NAME = 726;
SqlParser.CEIL = 727;
SqlParser.CEILING = 728;
SqlParser.CENTROID = 729;
SqlParser.CHARACTER_LENGTH = 730;
SqlParser.CHARSET = 731;
SqlParser.CHAR_LENGTH = 732;
SqlParser.COERCIBILITY = 733;
SqlParser.COLLATION = 734;
SqlParser.COMPRESS = 735;
SqlParser.CONCAT = 736;
SqlParser.CONCAT_WS = 737;
SqlParser.CONNECTION_ID = 738;
SqlParser.CONV = 739;
SqlParser.CONVERT_TZ = 740;
SqlParser.COS = 741;
SqlParser.COT = 742;
SqlParser.CRC32 = 743;
SqlParser.CREATE_ASYMMETRIC_PRIV_KEY = 744;
SqlParser.CREATE_ASYMMETRIC_PUB_KEY = 745;
SqlParser.CREATE_DH_PARAMETERS = 746;
SqlParser.CREATE_DIGEST = 747;
SqlParser.CROSSES = 748;
SqlParser.DATEDIFF = 749;
SqlParser.DATE_FORMAT = 750;
SqlParser.DAYNAME = 751;
SqlParser.DAYOFMONTH = 752;
SqlParser.DAYOFWEEK = 753;
SqlParser.DAYOFYEAR = 754;
SqlParser.DECODE = 755;
SqlParser.DEGREES = 756;
SqlParser.DES_DECRYPT = 757;
SqlParser.DES_ENCRYPT = 758;
SqlParser.DIMENSION = 759;
SqlParser.DISJOINT = 760;
SqlParser.ELT = 761;
SqlParser.ENCODE = 762;
SqlParser.ENCRYPT = 763;
SqlParser.ENDPOINT = 764;
SqlParser.ENVELOPE = 765;
SqlParser.EQUALS = 766;
SqlParser.EXP = 767;
SqlParser.EXPORT_SET = 768;
SqlParser.EXTERIORRING = 769;
SqlParser.EXTRACTVALUE = 770;
SqlParser.FIELD = 771;
SqlParser.FIND_IN_SET = 772;
SqlParser.FLOOR = 773;
SqlParser.FORMAT = 774;
SqlParser.FOUND_ROWS = 775;
SqlParser.FROM_BASE64 = 776;
SqlParser.FROM_DAYS = 777;
SqlParser.FROM_UNIXTIME = 778;
SqlParser.GEOMCOLLFROMTEXT = 779;
SqlParser.GEOMCOLLFROMWKB = 780;
SqlParser.GEOMETRYCOLLECTIONFROMTEXT = 781;
SqlParser.GEOMETRYCOLLECTIONFROMWKB = 782;
SqlParser.GEOMETRYFROMTEXT = 783;
SqlParser.GEOMETRYFROMWKB = 784;
SqlParser.GEOMETRYN = 785;
SqlParser.GEOMETRYTYPE = 786;
SqlParser.GEOMFROMTEXT = 787;
SqlParser.GEOMFROMWKB = 788;
SqlParser.GET_FORMAT = 789;
SqlParser.GET_LOCK = 790;
SqlParser.GLENGTH = 791;
SqlParser.GREATEST = 792;
SqlParser.GTID_SUBSET = 793;
SqlParser.GTID_SUBTRACT = 794;
SqlParser.HEX = 795;
SqlParser.IFNULL = 796;
SqlParser.INET6_ATON = 797;
SqlParser.INET6_NTOA = 798;
SqlParser.INET_ATON = 799;
SqlParser.INET_NTOA = 800;
SqlParser.INSTR = 801;
SqlParser.INTERIORRINGN = 802;
SqlParser.INTERSECTS = 803;
SqlParser.ISCLOSED = 804;
SqlParser.ISEMPTY = 805;
SqlParser.ISNULL = 806;
SqlParser.ISSIMPLE = 807;
SqlParser.IS_FREE_LOCK = 808;
SqlParser.IS_IPV4 = 809;
SqlParser.IS_IPV4_COMPAT = 810;
SqlParser.IS_IPV4_MAPPED = 811;
SqlParser.IS_IPV6 = 812;
SqlParser.IS_USED_LOCK = 813;
SqlParser.LAST_INSERT_ID = 814;
SqlParser.LCASE = 815;
SqlParser.LEAST = 816;
SqlParser.LENGTH = 817;
SqlParser.LINEFROMTEXT = 818;
SqlParser.LINEFROMWKB = 819;
SqlParser.LINESTRINGFROMTEXT = 820;
SqlParser.LINESTRINGFROMWKB = 821;
SqlParser.LN = 822;
SqlParser.LOAD_FILE = 823;
SqlParser.LOCATE = 824;
SqlParser.LOG = 825;
SqlParser.LOG10 = 826;
SqlParser.LOG2 = 827;
SqlParser.LOWER = 828;
SqlParser.LPAD = 829;
SqlParser.LTRIM = 830;
SqlParser.MAKEDATE = 831;
SqlParser.MAKETIME = 832;
SqlParser.MAKE_SET = 833;
SqlParser.MASTER_POS_WAIT = 834;
SqlParser.MBRCONTAINS = 835;
SqlParser.MBRDISJOINT = 836;
SqlParser.MBREQUAL = 837;
SqlParser.MBRINTERSECTS = 838;
SqlParser.MBROVERLAPS = 839;
SqlParser.MBRTOUCHES = 840;
SqlParser.MBRWITHIN = 841;
SqlParser.MD5 = 842;
SqlParser.MLINEFROMTEXT = 843;
SqlParser.MLINEFROMWKB = 844;
SqlParser.MONTHNAME = 845;
SqlParser.MPOINTFROMTEXT = 846;
SqlParser.MPOINTFROMWKB = 847;
SqlParser.MPOLYFROMTEXT = 848;
SqlParser.MPOLYFROMWKB = 849;
SqlParser.MULTILINESTRINGFROMTEXT = 850;
SqlParser.MULTILINESTRINGFROMWKB = 851;
SqlParser.MULTIPOINTFROMTEXT = 852;
SqlParser.MULTIPOINTFROMWKB = 853;
SqlParser.MULTIPOLYGONFROMTEXT = 854;
SqlParser.MULTIPOLYGONFROMWKB = 855;
SqlParser.NAME_CONST = 856;
SqlParser.NULLIF = 857;
SqlParser.NUMGEOMETRIES = 858;
SqlParser.NUMINTERIORRINGS = 859;
SqlParser.NUMPOINTS = 860;
SqlParser.OCT = 861;
SqlParser.OCTET_LENGTH = 862;
SqlParser.ORD = 863;
SqlParser.OVERLAPS = 864;
SqlParser.PERIOD_ADD = 865;
SqlParser.PERIOD_DIFF = 866;
SqlParser.PI = 867;
SqlParser.POINTFROMTEXT = 868;
SqlParser.POINTFROMWKB = 869;
SqlParser.POINTN = 870;
SqlParser.POLYFROMTEXT = 871;
SqlParser.POLYFROMWKB = 872;
SqlParser.POLYGONFROMTEXT = 873;
SqlParser.POLYGONFROMWKB = 874;
SqlParser.POW = 875;
SqlParser.POWER = 876;
SqlParser.QUOTE = 877;
SqlParser.RADIANS = 878;
SqlParser.RAND = 879;
SqlParser.RANDOM_BYTES = 880;
SqlParser.RELEASE_LOCK = 881;
SqlParser.REVERSE = 882;
SqlParser.ROUND = 883;
SqlParser.ROW_COUNT = 884;
SqlParser.RPAD = 885;
SqlParser.RTRIM = 886;
SqlParser.SEC_TO_TIME = 887;
SqlParser.SESSION_USER = 888;
SqlParser.SHA = 889;
SqlParser.SHA1 = 890;
SqlParser.SHA2 = 891;
SqlParser.SCHEMA_NAME = 892;
SqlParser.SIGN = 893;
SqlParser.SIN = 894;
SqlParser.SLEEP = 895;
SqlParser.SOUNDEX = 896;
SqlParser.SQL_THREAD_WAIT_AFTER_GTIDS = 897;
SqlParser.SQRT = 898;
SqlParser.SRID = 899;
SqlParser.STARTPOINT = 900;
SqlParser.STRCMP = 901;
SqlParser.STR_TO_DATE = 902;
SqlParser.ST_AREA = 903;
SqlParser.ST_ASBINARY = 904;
SqlParser.ST_ASTEXT = 905;
SqlParser.ST_ASWKB = 906;
SqlParser.ST_ASWKT = 907;
SqlParser.ST_BUFFER = 908;
SqlParser.ST_CENTROID = 909;
SqlParser.ST_CONTAINS = 910;
SqlParser.ST_CROSSES = 911;
SqlParser.ST_DIFFERENCE = 912;
SqlParser.ST_DIMENSION = 913;
SqlParser.ST_DISJOINT = 914;
SqlParser.ST_DISTANCE = 915;
SqlParser.ST_ENDPOINT = 916;
SqlParser.ST_ENVELOPE = 917;
SqlParser.ST_EQUALS = 918;
SqlParser.ST_EXTERIORRING = 919;
SqlParser.ST_GEOMCOLLFROMTEXT = 920;
SqlParser.ST_GEOMCOLLFROMTXT = 921;
SqlParser.ST_GEOMCOLLFROMWKB = 922;
SqlParser.ST_GEOMETRYCOLLECTIONFROMTEXT = 923;
SqlParser.ST_GEOMETRYCOLLECTIONFROMWKB = 924;
SqlParser.ST_GEOMETRYFROMTEXT = 925;
SqlParser.ST_GEOMETRYFROMWKB = 926;
SqlParser.ST_GEOMETRYN = 927;
SqlParser.ST_GEOMETRYTYPE = 928;
SqlParser.ST_GEOMFROMTEXT = 929;
SqlParser.ST_GEOMFROMWKB = 930;
SqlParser.ST_INTERIORRINGN = 931;
SqlParser.ST_INTERSECTION = 932;
SqlParser.ST_INTERSECTS = 933;
SqlParser.ST_ISCLOSED = 934;
SqlParser.ST_ISEMPTY = 935;
SqlParser.ST_ISSIMPLE = 936;
SqlParser.ST_LINEFROMTEXT = 937;
SqlParser.ST_LINEFROMWKB = 938;
SqlParser.ST_LINESTRINGFROMTEXT = 939;
SqlParser.ST_LINESTRINGFROMWKB = 940;
SqlParser.ST_NUMGEOMETRIES = 941;
SqlParser.ST_NUMINTERIORRING = 942;
SqlParser.ST_NUMINTERIORRINGS = 943;
SqlParser.ST_NUMPOINTS = 944;
SqlParser.ST_OVERLAPS = 945;
SqlParser.ST_POINTFROMTEXT = 946;
SqlParser.ST_POINTFROMWKB = 947;
SqlParser.ST_POINTN = 948;
SqlParser.ST_POLYFROMTEXT = 949;
SqlParser.ST_POLYFROMWKB = 950;
SqlParser.ST_POLYGONFROMTEXT = 951;
SqlParser.ST_POLYGONFROMWKB = 952;
SqlParser.ST_SRID = 953;
SqlParser.ST_STARTPOINT = 954;
SqlParser.ST_SYMDIFFERENCE = 955;
SqlParser.ST_TOUCHES = 956;
SqlParser.ST_UNION = 957;
SqlParser.ST_WITHIN = 958;
SqlParser.ST_X = 959;
SqlParser.ST_Y = 960;
SqlParser.SUBDATE = 961;
SqlParser.SUBSTRING_INDEX = 962;
SqlParser.SUBTIME = 963;
SqlParser.SYSTEM_USER = 964;
SqlParser.TAN = 965;
SqlParser.TIMEDIFF = 966;
SqlParser.TIMESTAMPADD = 967;
SqlParser.TIMESTAMPDIFF = 968;
SqlParser.TIME_FORMAT = 969;
SqlParser.TIME_TO_SEC = 970;
SqlParser.TOUCHES = 971;
SqlParser.TO_BASE64 = 972;
SqlParser.TO_DAYS = 973;
SqlParser.TO_SECONDS = 974;
SqlParser.UCASE = 975;
SqlParser.UNCOMPRESS = 976;
SqlParser.UNCOMPRESSED_LENGTH = 977;
SqlParser.UNHEX = 978;
SqlParser.UNIX_TIMESTAMP = 979;
SqlParser.UPDATEXML = 980;
SqlParser.UPPER = 981;
SqlParser.UUID = 982;
SqlParser.UUID_SHORT = 983;
SqlParser.VALIDATE_PASSWORD_STRENGTH = 984;
SqlParser.VERSION = 985;
SqlParser.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS = 986;
SqlParser.WEEKDAY = 987;
SqlParser.WEEKOFYEAR = 988;
SqlParser.WEIGHT_STRING = 989;
SqlParser.WITHIN = 990;
SqlParser.YEARWEEK = 991;
SqlParser.Y_FUNCTION = 992;
SqlParser.X_FUNCTION = 993;
SqlParser.VAR_ASSIGN = 994;
SqlParser.PLUS_ASSIGN = 995;
SqlParser.MINUS_ASSIGN = 996;
SqlParser.MULT_ASSIGN = 997;
SqlParser.DIV_ASSIGN = 998;
SqlParser.MOD_ASSIGN = 999;
SqlParser.AND_ASSIGN = 1000;
SqlParser.XOR_ASSIGN = 1001;
SqlParser.OR_ASSIGN = 1002;
SqlParser.STAR = 1003;
SqlParser.DIVIDE = 1004;
SqlParser.MODULE = 1005;
SqlParser.PLUS = 1006;
SqlParser.MINUSMINUS = 1007;
SqlParser.MINUS = 1008;
SqlParser.DIV = 1009;
SqlParser.MOD = 1010;
SqlParser.EQUAL_SYMBOL = 1011;
SqlParser.GREATER_SYMBOL = 1012;
SqlParser.LESS_SYMBOL = 1013;
SqlParser.EXCLAMATION_SYMBOL = 1014;
SqlParser.BIT_NOT_OP = 1015;
SqlParser.BIT_OR_OP = 1016;
SqlParser.BIT_AND_OP = 1017;
SqlParser.BIT_XOR_OP = 1018;
SqlParser.DOT = 1019;
SqlParser.LR_BRACKET = 1020;
SqlParser.RR_BRACKET = 1021;
SqlParser.COMMA = 1022;
SqlParser.SEMI = 1023;
SqlParser.AT_SIGN = 1024;
SqlParser.ZERO_DECIMAL = 1025;
SqlParser.ONE_DECIMAL = 1026;
SqlParser.TWO_DECIMAL = 1027;
SqlParser.SINGLE_QUOTE_SYMB = 1028;
SqlParser.DOUBLE_QUOTE_SYMB = 1029;
SqlParser.REVERSE_QUOTE_SYMB = 1030;
SqlParser.COLON_SYMB = 1031;
SqlParser.CHARSET_REVERSE_QOUTE_STRING = 1032;
SqlParser.FILESIZE_LITERAL = 1033;
SqlParser.START_NATIONAL_STRING_LITERAL = 1034;
SqlParser.STRING_LITERAL = 1035;
SqlParser.DECIMAL_LITERAL = 1036;
SqlParser.HEXADECIMAL_LITERAL = 1037;
SqlParser.REAL_LITERAL = 1038;
SqlParser.NULL_SPEC_LITERAL = 1039;
SqlParser.BIT_STRING = 1040;
SqlParser.STRING_CHARSET_NAME = 1041;
SqlParser.DOT_ID = 1042;
SqlParser.ID = 1043;
SqlParser.DOUBLE_QUOTE_ID = 1044;
SqlParser.REVERSE_QUOTE_ID = 1045;
SqlParser.BLOCKED_QUOTE_ID = 1046;
SqlParser.STRING_USER_NAME = 1047;
SqlParser.LOCAL_ID = 1048;
SqlParser.GLOBAL_ID = 1049;
SqlParser.ERROR_RECONGNIGION = 1050;

SqlParser.RULE_program = 0;
SqlParser.RULE_statement = 1;
SqlParser.RULE_sqlStatements = 2;
SqlParser.RULE_sqlStatement = 3;
SqlParser.RULE_insertStatement = 4;
SqlParser.RULE_insertStatementValue = 5;
SqlParser.RULE_updateStatement = 6;
SqlParser.RULE_updatedElement = 7;
SqlParser.RULE_deleteStatement = 8;
SqlParser.RULE_selectStatement = 9;
SqlParser.RULE_selectElements = 10;
SqlParser.RULE_selectElement = 11;
SqlParser.RULE_fromClause = 12;
SqlParser.RULE_orderByClause = 13;
SqlParser.RULE_orderByExpression = 14;
SqlParser.RULE_tableSource = 15;
SqlParser.RULE_limitClause = 16;
SqlParser.RULE_limitClauseAtom = 17;
SqlParser.RULE_fullId = 18;
SqlParser.RULE_tableName = 19;
SqlParser.RULE_fullColumnName = 20;
SqlParser.RULE_engineName = 21;
SqlParser.RULE_uid = 22;
SqlParser.RULE_simpleId = 23;
SqlParser.RULE_dottedId = 24;
SqlParser.RULE_decimalLiteral = 25;
SqlParser.RULE_stringLiteral = 26;
SqlParser.RULE_booleanLiteral = 27;
SqlParser.RULE_hexadecimalLiteral = 28;
SqlParser.RULE_constNumberLiteral = 29;
SqlParser.RULE_nullLiteral = 30;
SqlParser.RULE_constant = 31;
SqlParser.RULE_constantOrDefault = 32;
SqlParser.RULE_uidList = 33;
SqlParser.RULE_constants = 34;
SqlParser.RULE_constantsOrDefaults = 35;
SqlParser.RULE_expression = 36;
SqlParser.RULE_predicate = 37;
SqlParser.RULE_constantAtoms = 38;
SqlParser.RULE_constOrColumnAtom = 39;
SqlParser.RULE_expressionAtom = 40;
SqlParser.RULE_comparisonOperator = 41;
SqlParser.RULE_logicalOperator = 42;
SqlParser.RULE_charsetNameBase = 43;
SqlParser.RULE_transactionLevelBase = 44;
SqlParser.RULE_privilegesBase = 45;
SqlParser.RULE_intervalTypeBase = 46;
SqlParser.RULE_dataTypeBase = 47;
SqlParser.RULE_keywordsCanBeId = 48;
SqlParser.RULE_functionNameBase = 49;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(SqlParser.EOF, 0);
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.ProgramContext = ProgramContext;

SqlParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SqlParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.statement();
        this.state = 101;
        this.match(SqlParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.EOF = function() {
    return this.getToken(SqlParser.EOF, 0);
};

StatementContext.prototype.sqlStatements = function() {
    return this.getTypedRuleContext(SqlStatementsContext,0);
};

StatementContext.prototype.MINUSMINUS = function() {
    return this.getToken(SqlParser.MINUSMINUS, 0);
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.StatementContext = StatementContext;

SqlParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SqlParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.DELETE || _la===SqlParser.INSERT || _la===SqlParser.SELECT || _la===SqlParser.UPDATE || _la===SqlParser.SEMI) {
            this.state = 103;
            this.sqlStatements();
        }

        this.state = 107;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.MINUSMINUS) {
            this.state = 106;
            this.match(SqlParser.MINUSMINUS);
        }

        this.state = 109;
        this.match(SqlParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SqlStatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_sqlStatements;
    return this;
}

SqlStatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqlStatementsContext.prototype.constructor = SqlStatementsContext;

SqlStatementsContext.prototype.sqlStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SqlStatementContext);
    } else {
        return this.getTypedRuleContext(SqlStatementContext,i);
    }
};

SqlStatementsContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.SEMI);
    } else {
        return this.getToken(SqlParser.SEMI, i);
    }
};


SqlStatementsContext.prototype.MINUSMINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.MINUSMINUS);
    } else {
        return this.getToken(SqlParser.MINUSMINUS, i);
    }
};


SqlStatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitSqlStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.SqlStatementsContext = SqlStatementsContext;

SqlParser.prototype.sqlStatements = function() {

    var localctx = new SqlStatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SqlParser.RULE_sqlStatements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 119;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case SqlParser.DELETE:
                case SqlParser.INSERT:
                case SqlParser.SELECT:
                case SqlParser.UPDATE:
                    this.state = 111;
                    this.sqlStatement();
                    this.state = 113;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===SqlParser.MINUSMINUS) {
                        this.state = 112;
                        this.match(SqlParser.MINUSMINUS);
                    }

                    this.state = 116;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                    if(la_===1) {
                        this.state = 115;
                        this.match(SqlParser.SEMI);

                    }
                    break;
                case SqlParser.SEMI:
                    this.state = 118;
                    this.match(SqlParser.SEMI);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                } 
            }
            this.state = 123;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

        this.state = 132;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.DELETE:
        case SqlParser.INSERT:
        case SqlParser.SELECT:
        case SqlParser.UPDATE:
            this.state = 124;
            this.sqlStatement();
            this.state = 129;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            if(la_===1) {
                this.state = 126;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===SqlParser.MINUSMINUS) {
                    this.state = 125;
                    this.match(SqlParser.MINUSMINUS);
                }

                this.state = 128;
                this.match(SqlParser.SEMI);

            }
            break;
        case SqlParser.SEMI:
            this.state = 131;
            this.match(SqlParser.SEMI);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SqlStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_sqlStatement;
    return this;
}

SqlStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqlStatementContext.prototype.constructor = SqlStatementContext;

SqlStatementContext.prototype.selectStatement = function() {
    return this.getTypedRuleContext(SelectStatementContext,0);
};

SqlStatementContext.prototype.insertStatement = function() {
    return this.getTypedRuleContext(InsertStatementContext,0);
};

SqlStatementContext.prototype.updateStatement = function() {
    return this.getTypedRuleContext(UpdateStatementContext,0);
};

SqlStatementContext.prototype.deleteStatement = function() {
    return this.getTypedRuleContext(DeleteStatementContext,0);
};

SqlStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitSqlStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.SqlStatementContext = SqlStatementContext;

SqlParser.prototype.sqlStatement = function() {

    var localctx = new SqlStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SqlParser.RULE_sqlStatement);
    try {
        this.state = 138;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.SELECT:
            this.enterOuterAlt(localctx, 1);
            this.state = 134;
            this.selectStatement();
            break;
        case SqlParser.INSERT:
            this.enterOuterAlt(localctx, 2);
            this.state = 135;
            this.insertStatement();
            break;
        case SqlParser.UPDATE:
            this.enterOuterAlt(localctx, 3);
            this.state = 136;
            this.updateStatement();
            break;
        case SqlParser.DELETE:
            this.enterOuterAlt(localctx, 4);
            this.state = 137;
            this.deleteStatement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InsertStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_insertStatement;
    this.columns = null; // UidListContext
    this.setFirst = null; // UpdatedElementContext
    this._updatedElement = null; // UpdatedElementContext
    this.setElements = []; // of UpdatedElementContexts
    return this;
}

InsertStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InsertStatementContext.prototype.constructor = InsertStatementContext;

InsertStatementContext.prototype.INSERT = function() {
    return this.getToken(SqlParser.INSERT, 0);
};

InsertStatementContext.prototype.tableName = function() {
    return this.getTypedRuleContext(TableNameContext,0);
};

InsertStatementContext.prototype.insertStatementValue = function() {
    return this.getTypedRuleContext(InsertStatementValueContext,0);
};

InsertStatementContext.prototype.SET = function() {
    return this.getToken(SqlParser.SET, 0);
};

InsertStatementContext.prototype.INTO = function() {
    return this.getToken(SqlParser.INTO, 0);
};

InsertStatementContext.prototype.updatedElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UpdatedElementContext);
    } else {
        return this.getTypedRuleContext(UpdatedElementContext,i);
    }
};

InsertStatementContext.prototype.LR_BRACKET = function() {
    return this.getToken(SqlParser.LR_BRACKET, 0);
};

InsertStatementContext.prototype.RR_BRACKET = function() {
    return this.getToken(SqlParser.RR_BRACKET, 0);
};

InsertStatementContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.COMMA);
    } else {
        return this.getToken(SqlParser.COMMA, i);
    }
};


InsertStatementContext.prototype.uidList = function() {
    return this.getTypedRuleContext(UidListContext,0);
};

InsertStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitInsertStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.InsertStatementContext = InsertStatementContext;

SqlParser.prototype.insertStatement = function() {

    var localctx = new InsertStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SqlParser.RULE_insertStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(SqlParser.INSERT);
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.INTO) {
            this.state = 141;
            this.match(SqlParser.INTO);
        }

        this.state = 144;
        this.tableName();
        this.state = 161;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.VALUES:
        case SqlParser.VALUE:
        case SqlParser.LR_BRACKET:
            this.state = 149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.LR_BRACKET) {
                this.state = 145;
                this.match(SqlParser.LR_BRACKET);
                this.state = 146;
                localctx.columns = this.uidList();
                this.state = 147;
                this.match(SqlParser.RR_BRACKET);
            }

            this.state = 151;
            this.insertStatementValue();
            break;
        case SqlParser.SET:
            this.state = 152;
            this.match(SqlParser.SET);
            this.state = 153;
            localctx.setFirst = this.updatedElement();
            this.state = 158;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SqlParser.COMMA) {
                this.state = 154;
                this.match(SqlParser.COMMA);
                this.state = 155;
                localctx._updatedElement = this.updatedElement();
                localctx.setElements.push(localctx._updatedElement);
                this.state = 160;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InsertStatementValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_insertStatementValue;
    this.insertFormat = null; // Token
    return this;
}

InsertStatementValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InsertStatementValueContext.prototype.constructor = InsertStatementValueContext;

InsertStatementValueContext.prototype.LR_BRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.LR_BRACKET);
    } else {
        return this.getToken(SqlParser.LR_BRACKET, i);
    }
};


InsertStatementValueContext.prototype.constantsOrDefaults = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantsOrDefaultsContext);
    } else {
        return this.getTypedRuleContext(ConstantsOrDefaultsContext,i);
    }
};

InsertStatementValueContext.prototype.RR_BRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.RR_BRACKET);
    } else {
        return this.getToken(SqlParser.RR_BRACKET, i);
    }
};


InsertStatementValueContext.prototype.VALUES = function() {
    return this.getToken(SqlParser.VALUES, 0);
};

InsertStatementValueContext.prototype.VALUE = function() {
    return this.getToken(SqlParser.VALUE, 0);
};

InsertStatementValueContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.COMMA);
    } else {
        return this.getToken(SqlParser.COMMA, i);
    }
};


InsertStatementValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitInsertStatementValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.InsertStatementValueContext = InsertStatementValueContext;

SqlParser.prototype.insertStatementValue = function() {

    var localctx = new InsertStatementValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SqlParser.RULE_insertStatementValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        localctx.insertFormat = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===SqlParser.VALUES || _la===SqlParser.VALUE)) {
            localctx.insertFormat = this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 164;
        this.match(SqlParser.LR_BRACKET);
        this.state = 165;
        this.constantsOrDefaults();
        this.state = 166;
        this.match(SqlParser.RR_BRACKET);
        this.state = 174;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 167;
            this.match(SqlParser.COMMA);
            this.state = 168;
            this.match(SqlParser.LR_BRACKET);
            this.state = 169;
            this.constantsOrDefaults();
            this.state = 170;
            this.match(SqlParser.RR_BRACKET);
            this.state = 176;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UpdateStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_updateStatement;
    this.alias = null; // UidContext
    this.whereExp = null; // ExpressionContext
    return this;
}

UpdateStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UpdateStatementContext.prototype.constructor = UpdateStatementContext;

UpdateStatementContext.prototype.UPDATE = function() {
    return this.getToken(SqlParser.UPDATE, 0);
};

UpdateStatementContext.prototype.tableName = function() {
    return this.getTypedRuleContext(TableNameContext,0);
};

UpdateStatementContext.prototype.SET = function() {
    return this.getToken(SqlParser.SET, 0);
};

UpdateStatementContext.prototype.updatedElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UpdatedElementContext);
    } else {
        return this.getTypedRuleContext(UpdatedElementContext,i);
    }
};

UpdateStatementContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.COMMA);
    } else {
        return this.getToken(SqlParser.COMMA, i);
    }
};


UpdateStatementContext.prototype.WHERE = function() {
    return this.getToken(SqlParser.WHERE, 0);
};

UpdateStatementContext.prototype.orderByClause = function() {
    return this.getTypedRuleContext(OrderByClauseContext,0);
};

UpdateStatementContext.prototype.limitClause = function() {
    return this.getTypedRuleContext(LimitClauseContext,0);
};

UpdateStatementContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

UpdateStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

UpdateStatementContext.prototype.AS = function() {
    return this.getToken(SqlParser.AS, 0);
};

UpdateStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitUpdateStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.UpdateStatementContext = UpdateStatementContext;

SqlParser.prototype.updateStatement = function() {

    var localctx = new UpdateStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SqlParser.RULE_updateStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(SqlParser.UPDATE);
        this.state = 178;
        this.tableName();
        this.state = 183;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.AS || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (SqlParser.CURRENT - 32)) | (1 << (SqlParser.DATABASE - 32)) | (1 << (SqlParser.DIAGNOSTICS - 32)))) !== 0) || _la===SqlParser.LEFT || _la===SqlParser.NUMBER || _la===SqlParser.RIGHT || _la===SqlParser.STACKED || ((((_la - 199)) & ~0x1f) == 0 && ((1 << (_la - 199)) & ((1 << (SqlParser.DATE - 199)) | (1 << (SqlParser.TIME - 199)) | (1 << (SqlParser.TIMESTAMP - 199)) | (1 << (SqlParser.DATETIME - 199)) | (1 << (SqlParser.YEAR - 199)) | (1 << (SqlParser.TEXT - 199)) | (1 << (SqlParser.ENUM - 199)) | (1 << (SqlParser.SERIAL - 199)))) !== 0) || ((((_la - 233)) & ~0x1f) == 0 && ((1 << (_la - 233)) & ((1 << (SqlParser.JSON_VALID - 233)) | (1 << (SqlParser.JSON_SCHEMA_VALID - 233)) | (1 << (SqlParser.COUNT - 233)) | (1 << (SqlParser.POSITION - 233)))) !== 0) || ((((_la - 270)) & ~0x1f) == 0 && ((1 << (_la - 270)) & ((1 << (SqlParser.ACCOUNT - 270)) | (1 << (SqlParser.ACTION - 270)) | (1 << (SqlParser.AFTER - 270)) | (1 << (SqlParser.AGGREGATE - 270)) | (1 << (SqlParser.ALGORITHM - 270)) | (1 << (SqlParser.ANY - 270)) | (1 << (SqlParser.AT - 270)) | (1 << (SqlParser.AUTHORS - 270)) | (1 << (SqlParser.AUTOCOMMIT - 270)) | (1 << (SqlParser.AUTOEXTEND_SIZE - 270)) | (1 << (SqlParser.AUTO_INCREMENT - 270)) | (1 << (SqlParser.AVG_ROW_LENGTH - 270)) | (1 << (SqlParser.BEGIN - 270)) | (1 << (SqlParser.BINLOG - 270)) | (1 << (SqlParser.BIT - 270)) | (1 << (SqlParser.BLOCK - 270)) | (1 << (SqlParser.BOOL - 270)) | (1 << (SqlParser.BOOLEAN - 270)) | (1 << (SqlParser.BTREE - 270)) | (1 << (SqlParser.CACHE - 270)) | (1 << (SqlParser.CASCADED - 270)) | (1 << (SqlParser.CHAIN - 270)) | (1 << (SqlParser.CHANGED - 270)) | (1 << (SqlParser.CHANNEL - 270)) | (1 << (SqlParser.CHECKSUM - 270)) | (1 << (SqlParser.PAGE_CHECKSUM - 270)) | (1 << (SqlParser.CIPHER - 270)) | (1 << (SqlParser.CLASS_ORIGIN - 270)) | (1 << (SqlParser.CLIENT - 270)) | (1 << (SqlParser.CLOSE - 270)) | (1 << (SqlParser.COALESCE - 270)) | (1 << (SqlParser.CODE - 270)))) !== 0) || ((((_la - 302)) & ~0x1f) == 0 && ((1 << (_la - 302)) & ((1 << (SqlParser.COLUMNS - 302)) | (1 << (SqlParser.COLUMN_FORMAT - 302)) | (1 << (SqlParser.COLUMN_NAME - 302)) | (1 << (SqlParser.COMMENT - 302)) | (1 << (SqlParser.COMMIT - 302)) | (1 << (SqlParser.COMPACT - 302)) | (1 << (SqlParser.COMPLETION - 302)) | (1 << (SqlParser.COMPRESSED - 302)) | (1 << (SqlParser.COMPRESSION - 302)) | (1 << (SqlParser.CONCURRENT - 302)) | (1 << (SqlParser.CONNECTION - 302)) | (1 << (SqlParser.CONSISTENT - 302)) | (1 << (SqlParser.CONSTRAINT_CATALOG - 302)) | (1 << (SqlParser.CONSTRAINT_SCHEMA - 302)) | (1 << (SqlParser.CONSTRAINT_NAME - 302)) | (1 << (SqlParser.CONTAINS - 302)) | (1 << (SqlParser.CONTEXT - 302)) | (1 << (SqlParser.CONTRIBUTORS - 302)) | (1 << (SqlParser.COPY - 302)) | (1 << (SqlParser.CPU - 302)) | (1 << (SqlParser.CURSOR_NAME - 302)) | (1 << (SqlParser.DATA - 302)) | (1 << (SqlParser.DATAFILE - 302)) | (1 << (SqlParser.DEALLOCATE - 302)) | (1 << (SqlParser.DEFAULT_AUTH - 302)) | (1 << (SqlParser.DEFINER - 302)) | (1 << (SqlParser.DELAY_KEY_WRITE - 302)) | (1 << (SqlParser.DES_KEY_FILE - 302)) | (1 << (SqlParser.DIRECTORY - 302)) | (1 << (SqlParser.DISABLE - 302)) | (1 << (SqlParser.DISCARD - 302)) | (1 << (SqlParser.DISK - 302)))) !== 0) || ((((_la - 334)) & ~0x1f) == 0 && ((1 << (_la - 334)) & ((1 << (SqlParser.DO - 334)) | (1 << (SqlParser.DUMPFILE - 334)) | (1 << (SqlParser.DUPLICATE - 334)) | (1 << (SqlParser.DYNAMIC - 334)) | (1 << (SqlParser.ENABLE - 334)) | (1 << (SqlParser.ENCRYPTION - 334)) | (1 << (SqlParser.END - 334)) | (1 << (SqlParser.ENDS - 334)) | (1 << (SqlParser.ENGINE - 334)) | (1 << (SqlParser.ENGINES - 334)) | (1 << (SqlParser.ERROR - 334)) | (1 << (SqlParser.ERRORS - 334)) | (1 << (SqlParser.ESCAPE - 334)) | (1 << (SqlParser.EVEN - 334)) | (1 << (SqlParser.EVENT - 334)) | (1 << (SqlParser.EVENTS - 334)) | (1 << (SqlParser.EVERY - 334)) | (1 << (SqlParser.EXCHANGE - 334)) | (1 << (SqlParser.EXCLUSIVE - 334)) | (1 << (SqlParser.EXPIRE - 334)) | (1 << (SqlParser.EXPORT - 334)) | (1 << (SqlParser.EXTENDED - 334)) | (1 << (SqlParser.EXTENT_SIZE - 334)) | (1 << (SqlParser.FAST - 334)) | (1 << (SqlParser.FAULTS - 334)) | (1 << (SqlParser.FIELDS - 334)) | (1 << (SqlParser.FILE_BLOCK_SIZE - 334)) | (1 << (SqlParser.FILTER - 334)) | (1 << (SqlParser.FIRST - 334)) | (1 << (SqlParser.FIXED - 334)) | (1 << (SqlParser.FLUSH - 334)) | (1 << (SqlParser.FOLLOWS - 334)))) !== 0) || ((((_la - 366)) & ~0x1f) == 0 && ((1 << (_la - 366)) & ((1 << (SqlParser.FOUND - 366)) | (1 << (SqlParser.FULL - 366)) | (1 << (SqlParser.FUNCTION - 366)) | (1 << (SqlParser.GENERAL - 366)) | (1 << (SqlParser.GLOBAL - 366)) | (1 << (SqlParser.GRANTS - 366)) | (1 << (SqlParser.GROUP_REPLICATION - 366)) | (1 << (SqlParser.HANDLER - 366)) | (1 << (SqlParser.HASH - 366)) | (1 << (SqlParser.HELP - 366)) | (1 << (SqlParser.HOST - 366)) | (1 << (SqlParser.HOSTS - 366)) | (1 << (SqlParser.IDENTIFIED - 366)) | (1 << (SqlParser.IGNORE_SERVER_IDS - 366)) | (1 << (SqlParser.IMPORT - 366)) | (1 << (SqlParser.INDEXES - 366)) | (1 << (SqlParser.INITIAL_SIZE - 366)) | (1 << (SqlParser.INPLACE - 366)) | (1 << (SqlParser.INSERT_METHOD - 366)) | (1 << (SqlParser.INSTALL - 366)) | (1 << (SqlParser.INSTANCE - 366)) | (1 << (SqlParser.INVISIBLE - 366)) | (1 << (SqlParser.INVOKER - 366)) | (1 << (SqlParser.IO - 366)) | (1 << (SqlParser.IO_THREAD - 366)) | (1 << (SqlParser.IPC - 366)) | (1 << (SqlParser.ISOLATION - 366)) | (1 << (SqlParser.ISSUER - 366)) | (1 << (SqlParser.JSON - 366)) | (1 << (SqlParser.KEY_BLOCK_SIZE - 366)) | (1 << (SqlParser.LANGUAGE - 366)) | (1 << (SqlParser.LAST - 366)))) !== 0) || ((((_la - 398)) & ~0x1f) == 0 && ((1 << (_la - 398)) & ((1 << (SqlParser.LEAVES - 398)) | (1 << (SqlParser.LESS - 398)) | (1 << (SqlParser.LEVEL - 398)) | (1 << (SqlParser.LIST - 398)) | (1 << (SqlParser.LOCAL - 398)) | (1 << (SqlParser.LOGFILE - 398)) | (1 << (SqlParser.LOGS - 398)) | (1 << (SqlParser.MASTER - 398)) | (1 << (SqlParser.MASTER_AUTO_POSITION - 398)) | (1 << (SqlParser.MASTER_CONNECT_RETRY - 398)) | (1 << (SqlParser.MASTER_DELAY - 398)) | (1 << (SqlParser.MASTER_HEARTBEAT_PERIOD - 398)) | (1 << (SqlParser.MASTER_HOST - 398)) | (1 << (SqlParser.MASTER_LOG_FILE - 398)) | (1 << (SqlParser.MASTER_LOG_POS - 398)) | (1 << (SqlParser.MASTER_PASSWORD - 398)) | (1 << (SqlParser.MASTER_PORT - 398)) | (1 << (SqlParser.MASTER_RETRY_COUNT - 398)) | (1 << (SqlParser.MASTER_SSL - 398)) | (1 << (SqlParser.MASTER_SSL_CA - 398)) | (1 << (SqlParser.MASTER_SSL_CAPATH - 398)) | (1 << (SqlParser.MASTER_SSL_CERT - 398)) | (1 << (SqlParser.MASTER_SSL_CIPHER - 398)) | (1 << (SqlParser.MASTER_SSL_CRL - 398)) | (1 << (SqlParser.MASTER_SSL_CRLPATH - 398)) | (1 << (SqlParser.MASTER_SSL_KEY - 398)) | (1 << (SqlParser.MASTER_TLS_VERSION - 398)) | (1 << (SqlParser.MASTER_USER - 398)) | (1 << (SqlParser.MAX_CONNECTIONS_PER_HOUR - 398)) | (1 << (SqlParser.MAX_QUERIES_PER_HOUR - 398)) | (1 << (SqlParser.MAX_ROWS - 398)) | (1 << (SqlParser.MAX_SIZE - 398)))) !== 0) || ((((_la - 430)) & ~0x1f) == 0 && ((1 << (_la - 430)) & ((1 << (SqlParser.MAX_UPDATES_PER_HOUR - 430)) | (1 << (SqlParser.MAX_USER_CONNECTIONS - 430)) | (1 << (SqlParser.MEDIUM - 430)) | (1 << (SqlParser.MERGE - 430)) | (1 << (SqlParser.MESSAGE_TEXT - 430)) | (1 << (SqlParser.MID - 430)) | (1 << (SqlParser.MIGRATE - 430)) | (1 << (SqlParser.MIN_ROWS - 430)) | (1 << (SqlParser.MODE - 430)) | (1 << (SqlParser.MODIFY - 430)) | (1 << (SqlParser.MUTEX - 430)) | (1 << (SqlParser.MYSQL - 430)) | (1 << (SqlParser.MYSQL_ERRNO - 430)) | (1 << (SqlParser.NAME - 430)) | (1 << (SqlParser.NAMES - 430)) | (1 << (SqlParser.NCHAR - 430)) | (1 << (SqlParser.NEVER - 430)) | (1 << (SqlParser.NEXT - 430)) | (1 << (SqlParser.NO - 430)) | (1 << (SqlParser.NODEGROUP - 430)) | (1 << (SqlParser.NONE - 430)) | (1 << (SqlParser.OFFLINE - 430)) | (1 << (SqlParser.OFFSET - 430)) | (1 << (SqlParser.OJ - 430)) | (1 << (SqlParser.OLD_PASSWORD - 430)) | (1 << (SqlParser.ONE - 430)) | (1 << (SqlParser.ONLINE - 430)) | (1 << (SqlParser.ONLY - 430)) | (1 << (SqlParser.OPEN - 430)) | (1 << (SqlParser.OPTIMIZER_COSTS - 430)) | (1 << (SqlParser.OPTIONS - 430)) | (1 << (SqlParser.OWNER - 430)))) !== 0) || ((((_la - 462)) & ~0x1f) == 0 && ((1 << (_la - 462)) & ((1 << (SqlParser.PACK_KEYS - 462)) | (1 << (SqlParser.PAGE - 462)) | (1 << (SqlParser.PARSER - 462)) | (1 << (SqlParser.PARTIAL - 462)) | (1 << (SqlParser.PARTITIONING - 462)) | (1 << (SqlParser.PARTITIONS - 462)) | (1 << (SqlParser.PASSWORD - 462)) | (1 << (SqlParser.PHASE - 462)) | (1 << (SqlParser.PLUGIN - 462)) | (1 << (SqlParser.PLUGIN_DIR - 462)) | (1 << (SqlParser.PLUGINS - 462)) | (1 << (SqlParser.PORT - 462)) | (1 << (SqlParser.PRECEDES - 462)) | (1 << (SqlParser.PREPARE - 462)) | (1 << (SqlParser.PRESERVE - 462)) | (1 << (SqlParser.PREV - 462)) | (1 << (SqlParser.PROCESSLIST - 462)) | (1 << (SqlParser.PROFILE - 462)) | (1 << (SqlParser.PROFILES - 462)) | (1 << (SqlParser.PROXY - 462)) | (1 << (SqlParser.QUERY - 462)) | (1 << (SqlParser.QUICK - 462)) | (1 << (SqlParser.REBUILD - 462)) | (1 << (SqlParser.RECOVER - 462)) | (1 << (SqlParser.REDO_BUFFER_SIZE - 462)) | (1 << (SqlParser.REDUNDANT - 462)) | (1 << (SqlParser.RELAY - 462)) | (1 << (SqlParser.RELAY_LOG_FILE - 462)) | (1 << (SqlParser.RELAY_LOG_POS - 462)) | (1 << (SqlParser.RELAYLOG - 462)) | (1 << (SqlParser.REMOVE - 462)) | (1 << (SqlParser.REORGANIZE - 462)))) !== 0) || ((((_la - 494)) & ~0x1f) == 0 && ((1 << (_la - 494)) & ((1 << (SqlParser.REPAIR - 494)) | (1 << (SqlParser.REPLICATE_DO_DB - 494)) | (1 << (SqlParser.REPLICATE_DO_TABLE - 494)) | (1 << (SqlParser.REPLICATE_IGNORE_DB - 494)) | (1 << (SqlParser.REPLICATE_IGNORE_TABLE - 494)) | (1 << (SqlParser.REPLICATE_REWRITE_DB - 494)) | (1 << (SqlParser.REPLICATE_WILD_DO_TABLE - 494)) | (1 << (SqlParser.REPLICATE_WILD_IGNORE_TABLE - 494)) | (1 << (SqlParser.REPLICATION - 494)) | (1 << (SqlParser.RESET - 494)) | (1 << (SqlParser.RESUME - 494)) | (1 << (SqlParser.RETURNED_SQLSTATE - 494)) | (1 << (SqlParser.RETURNS - 494)) | (1 << (SqlParser.ROLE - 494)) | (1 << (SqlParser.ROLLBACK - 494)) | (1 << (SqlParser.ROLLUP - 494)) | (1 << (SqlParser.ROTATE - 494)) | (1 << (SqlParser.ROW - 494)) | (1 << (SqlParser.ROWS - 494)) | (1 << (SqlParser.ROW_FORMAT - 494)) | (1 << (SqlParser.SAVEPOINT - 494)) | (1 << (SqlParser.SCHEDULE - 494)) | (1 << (SqlParser.SECURITY - 494)) | (1 << (SqlParser.SERVER - 494)) | (1 << (SqlParser.SESSION - 494)) | (1 << (SqlParser.SHARE - 494)) | (1 << (SqlParser.SHARED - 494)) | (1 << (SqlParser.SIGNED - 494)) | (1 << (SqlParser.SIMPLE - 494)) | (1 << (SqlParser.SLAVE - 494)) | (1 << (SqlParser.SLOW - 494)) | (1 << (SqlParser.SNAPSHOT - 494)))) !== 0) || ((((_la - 526)) & ~0x1f) == 0 && ((1 << (_la - 526)) & ((1 << (SqlParser.SOCKET - 526)) | (1 << (SqlParser.SOME - 526)) | (1 << (SqlParser.SONAME - 526)) | (1 << (SqlParser.SOUNDS - 526)) | (1 << (SqlParser.SOURCE - 526)) | (1 << (SqlParser.SQL_AFTER_GTIDS - 526)) | (1 << (SqlParser.SQL_AFTER_MTS_GAPS - 526)) | (1 << (SqlParser.SQL_BEFORE_GTIDS - 526)) | (1 << (SqlParser.SQL_BUFFER_RESULT - 526)) | (1 << (SqlParser.SQL_CACHE - 526)) | (1 << (SqlParser.SQL_NO_CACHE - 526)) | (1 << (SqlParser.SQL_THREAD - 526)) | (1 << (SqlParser.START - 526)) | (1 << (SqlParser.STARTS - 526)) | (1 << (SqlParser.STATS_AUTO_RECALC - 526)) | (1 << (SqlParser.STATS_PERSISTENT - 526)) | (1 << (SqlParser.STATS_SAMPLE_PAGES - 526)) | (1 << (SqlParser.STATUS - 526)) | (1 << (SqlParser.STOP - 526)) | (1 << (SqlParser.STORAGE - 526)) | (1 << (SqlParser.STRING - 526)) | (1 << (SqlParser.SUBCLASS_ORIGIN - 526)) | (1 << (SqlParser.SUBJECT - 526)) | (1 << (SqlParser.SUBPARTITION - 526)) | (1 << (SqlParser.SUBPARTITIONS - 526)) | (1 << (SqlParser.SUSPEND - 526)) | (1 << (SqlParser.SWAPS - 526)) | (1 << (SqlParser.SWITCHES - 526)) | (1 << (SqlParser.TABLE_NAME - 526)) | (1 << (SqlParser.TABLESPACE - 526)) | (1 << (SqlParser.TEMPORARY - 526)))) !== 0) || ((((_la - 558)) & ~0x1f) == 0 && ((1 << (_la - 558)) & ((1 << (SqlParser.TEMPTABLE - 558)) | (1 << (SqlParser.THAN - 558)) | (1 << (SqlParser.TRADITIONAL - 558)) | (1 << (SqlParser.TRANSACTION - 558)) | (1 << (SqlParser.TRANSACTIONAL - 558)) | (1 << (SqlParser.TRIGGERS - 558)) | (1 << (SqlParser.TRUNCATE - 558)) | (1 << (SqlParser.UNDEFINED - 558)) | (1 << (SqlParser.UNDOFILE - 558)) | (1 << (SqlParser.UNDO_BUFFER_SIZE - 558)) | (1 << (SqlParser.UNINSTALL - 558)) | (1 << (SqlParser.UNKNOWN - 558)) | (1 << (SqlParser.UNTIL - 558)) | (1 << (SqlParser.UPGRADE - 558)) | (1 << (SqlParser.USER - 558)) | (1 << (SqlParser.USE_FRM - 558)) | (1 << (SqlParser.USER_RESOURCES - 558)) | (1 << (SqlParser.VALIDATION - 558)) | (1 << (SqlParser.VALUE - 558)) | (1 << (SqlParser.VARIABLES - 558)) | (1 << (SqlParser.VIEW - 558)) | (1 << (SqlParser.VISIBLE - 558)) | (1 << (SqlParser.WAIT - 558)) | (1 << (SqlParser.WARNINGS - 558)) | (1 << (SqlParser.WITHOUT - 558)) | (1 << (SqlParser.WORK - 558)) | (1 << (SqlParser.WRAPPER - 558)) | (1 << (SqlParser.X509 - 558)) | (1 << (SqlParser.XA - 558)) | (1 << (SqlParser.XML - 558)))) !== 0) || ((((_la - 593)) & ~0x1f) == 0 && ((1 << (_la - 593)) & ((1 << (SqlParser.INTERNAL - 593)) | (1 << (SqlParser.QUARTER - 593)) | (1 << (SqlParser.MONTH - 593)) | (1 << (SqlParser.DAY - 593)) | (1 << (SqlParser.HOUR - 593)) | (1 << (SqlParser.MINUTE - 593)) | (1 << (SqlParser.WEEK - 593)) | (1 << (SqlParser.SECOND - 593)) | (1 << (SqlParser.MICROSECOND - 593)) | (1 << (SqlParser.TABLES - 593)) | (1 << (SqlParser.ROUTINE - 593)) | (1 << (SqlParser.EXECUTE - 593)) | (1 << (SqlParser.FILE - 593)) | (1 << (SqlParser.PROCESS - 593)) | (1 << (SqlParser.RELOAD - 593)) | (1 << (SqlParser.SHUTDOWN - 593)) | (1 << (SqlParser.SUPER - 593)) | (1 << (SqlParser.PRIVILEGES - 593)) | (1 << (SqlParser.AUDIT_ADMIN - 593)) | (1 << (SqlParser.BACKUP_ADMIN - 593)) | (1 << (SqlParser.BINLOG_ADMIN - 593)) | (1 << (SqlParser.BINLOG_ENCRYPTION_ADMIN - 593)) | (1 << (SqlParser.CLONE_ADMIN - 593)) | (1 << (SqlParser.CONNECTION_ADMIN - 593)) | (1 << (SqlParser.ENCRYPTION_KEY_ADMIN - 593)) | (1 << (SqlParser.FIREWALL_ADMIN - 593)) | (1 << (SqlParser.FIREWALL_USER - 593)) | (1 << (SqlParser.GROUP_REPLICATION_ADMIN - 593)) | (1 << (SqlParser.INNODB_REDO_LOG_ARCHIVE - 593)) | (1 << (SqlParser.NDB_STORED_USER - 593)) | (1 << (SqlParser.PERSIST_RO_VARIABLES_ADMIN - 593)))) !== 0) || ((((_la - 625)) & ~0x1f) == 0 && ((1 << (_la - 625)) & ((1 << (SqlParser.REPLICATION_APPLIER - 625)) | (1 << (SqlParser.REPLICATION_SLAVE_ADMIN - 625)) | (1 << (SqlParser.RESOURCE_GROUP_ADMIN - 625)) | (1 << (SqlParser.RESOURCE_GROUP_USER - 625)) | (1 << (SqlParser.ROLE_ADMIN - 625)) | (1 << (SqlParser.SESSION_VARIABLES_ADMIN - 625)) | (1 << (SqlParser.SET_USER_ID - 625)) | (1 << (SqlParser.SHOW_ROUTINE - 625)) | (1 << (SqlParser.SYSTEM_VARIABLES_ADMIN - 625)) | (1 << (SqlParser.TABLE_ENCRYPTION_ADMIN - 625)) | (1 << (SqlParser.VERSION_TOKEN_ADMIN - 625)) | (1 << (SqlParser.XA_RECOVER_ADMIN - 625)) | (1 << (SqlParser.ARMSCII8 - 625)) | (1 << (SqlParser.ASCII - 625)) | (1 << (SqlParser.BIG5 - 625)) | (1 << (SqlParser.CP1250 - 625)) | (1 << (SqlParser.CP1251 - 625)) | (1 << (SqlParser.CP1256 - 625)) | (1 << (SqlParser.CP1257 - 625)) | (1 << (SqlParser.CP850 - 625)) | (1 << (SqlParser.CP852 - 625)) | (1 << (SqlParser.CP866 - 625)) | (1 << (SqlParser.CP932 - 625)) | (1 << (SqlParser.DEC8 - 625)) | (1 << (SqlParser.EUCJPMS - 625)) | (1 << (SqlParser.EUCKR - 625)) | (1 << (SqlParser.GB2312 - 625)) | (1 << (SqlParser.GBK - 625)) | (1 << (SqlParser.GEOSTD8 - 625)) | (1 << (SqlParser.GREEK - 625)) | (1 << (SqlParser.HEBREW - 625)) | (1 << (SqlParser.HP8 - 625)))) !== 0) || ((((_la - 657)) & ~0x1f) == 0 && ((1 << (_la - 657)) & ((1 << (SqlParser.KEYBCS2 - 657)) | (1 << (SqlParser.KOI8R - 657)) | (1 << (SqlParser.KOI8U - 657)) | (1 << (SqlParser.LATIN1 - 657)) | (1 << (SqlParser.LATIN2 - 657)) | (1 << (SqlParser.LATIN5 - 657)) | (1 << (SqlParser.LATIN7 - 657)) | (1 << (SqlParser.MACCE - 657)) | (1 << (SqlParser.MACROMAN - 657)) | (1 << (SqlParser.SJIS - 657)) | (1 << (SqlParser.SWE7 - 657)) | (1 << (SqlParser.TIS620 - 657)) | (1 << (SqlParser.UCS2 - 657)) | (1 << (SqlParser.UJIS - 657)) | (1 << (SqlParser.UTF16 - 657)) | (1 << (SqlParser.UTF16LE - 657)) | (1 << (SqlParser.UTF32 - 657)) | (1 << (SqlParser.UTF8 - 657)) | (1 << (SqlParser.UTF8MB3 - 657)) | (1 << (SqlParser.UTF8MB4 - 657)) | (1 << (SqlParser.ARCHIVE - 657)) | (1 << (SqlParser.BLACKHOLE - 657)) | (1 << (SqlParser.CSV - 657)) | (1 << (SqlParser.FEDERATED - 657)) | (1 << (SqlParser.INNODB - 657)) | (1 << (SqlParser.MEMORY - 657)) | (1 << (SqlParser.MRG_MYISAM - 657)) | (1 << (SqlParser.MYISAM - 657)) | (1 << (SqlParser.NDB - 657)) | (1 << (SqlParser.NDBCLUSTER - 657)) | (1 << (SqlParser.PERFORMANCE_SCHEMA - 657)) | (1 << (SqlParser.TOKUDB - 657)))) !== 0) || ((((_la - 689)) & ~0x1f) == 0 && ((1 << (_la - 689)) & ((1 << (SqlParser.REPEATABLE - 689)) | (1 << (SqlParser.COMMITTED - 689)) | (1 << (SqlParser.UNCOMMITTED - 689)) | (1 << (SqlParser.SERIALIZABLE - 689)) | (1 << (SqlParser.GEOMETRYCOLLECTION - 689)) | (1 << (SqlParser.LINESTRING - 689)) | (1 << (SqlParser.MULTILINESTRING - 689)) | (1 << (SqlParser.MULTIPOINT - 689)) | (1 << (SqlParser.MULTIPOLYGON - 689)) | (1 << (SqlParser.POINT - 689)) | (1 << (SqlParser.POLYGON - 689)) | (1 << (SqlParser.ABS - 689)) | (1 << (SqlParser.ACOS - 689)) | (1 << (SqlParser.ADDDATE - 689)) | (1 << (SqlParser.ADDTIME - 689)) | (1 << (SqlParser.AES_DECRYPT - 689)) | (1 << (SqlParser.AES_ENCRYPT - 689)) | (1 << (SqlParser.AREA - 689)) | (1 << (SqlParser.ASBINARY - 689)) | (1 << (SqlParser.ASIN - 689)) | (1 << (SqlParser.ASTEXT - 689)) | (1 << (SqlParser.ASWKB - 689)) | (1 << (SqlParser.ASWKT - 689)) | (1 << (SqlParser.ASYMMETRIC_DECRYPT - 689)) | (1 << (SqlParser.ASYMMETRIC_DERIVE - 689)) | (1 << (SqlParser.ASYMMETRIC_ENCRYPT - 689)) | (1 << (SqlParser.ASYMMETRIC_SIGN - 689)) | (1 << (SqlParser.ASYMMETRIC_VERIFY - 689)) | (1 << (SqlParser.ATAN - 689)) | (1 << (SqlParser.ATAN2 - 689)))) !== 0) || ((((_la - 721)) & ~0x1f) == 0 && ((1 << (_la - 721)) & ((1 << (SqlParser.BENCHMARK - 721)) | (1 << (SqlParser.BIN - 721)) | (1 << (SqlParser.BIT_COUNT - 721)) | (1 << (SqlParser.BIT_LENGTH - 721)) | (1 << (SqlParser.BUFFER - 721)) | (1 << (SqlParser.CATALOG_NAME - 721)) | (1 << (SqlParser.CEIL - 721)) | (1 << (SqlParser.CEILING - 721)) | (1 << (SqlParser.CENTROID - 721)) | (1 << (SqlParser.CHARACTER_LENGTH - 721)) | (1 << (SqlParser.CHARSET - 721)) | (1 << (SqlParser.CHAR_LENGTH - 721)) | (1 << (SqlParser.COERCIBILITY - 721)) | (1 << (SqlParser.COLLATION - 721)) | (1 << (SqlParser.COMPRESS - 721)) | (1 << (SqlParser.CONCAT - 721)) | (1 << (SqlParser.CONCAT_WS - 721)) | (1 << (SqlParser.CONNECTION_ID - 721)) | (1 << (SqlParser.CONV - 721)) | (1 << (SqlParser.CONVERT_TZ - 721)) | (1 << (SqlParser.COS - 721)) | (1 << (SqlParser.COT - 721)) | (1 << (SqlParser.CRC32 - 721)) | (1 << (SqlParser.CREATE_ASYMMETRIC_PRIV_KEY - 721)) | (1 << (SqlParser.CREATE_ASYMMETRIC_PUB_KEY - 721)) | (1 << (SqlParser.CREATE_DH_PARAMETERS - 721)) | (1 << (SqlParser.CREATE_DIGEST - 721)) | (1 << (SqlParser.CROSSES - 721)) | (1 << (SqlParser.DATEDIFF - 721)) | (1 << (SqlParser.DATE_FORMAT - 721)) | (1 << (SqlParser.DAYNAME - 721)) | (1 << (SqlParser.DAYOFMONTH - 721)))) !== 0) || ((((_la - 753)) & ~0x1f) == 0 && ((1 << (_la - 753)) & ((1 << (SqlParser.DAYOFWEEK - 753)) | (1 << (SqlParser.DAYOFYEAR - 753)) | (1 << (SqlParser.DECODE - 753)) | (1 << (SqlParser.DEGREES - 753)) | (1 << (SqlParser.DES_DECRYPT - 753)) | (1 << (SqlParser.DES_ENCRYPT - 753)) | (1 << (SqlParser.DIMENSION - 753)) | (1 << (SqlParser.DISJOINT - 753)) | (1 << (SqlParser.ELT - 753)) | (1 << (SqlParser.ENCODE - 753)) | (1 << (SqlParser.ENCRYPT - 753)) | (1 << (SqlParser.ENDPOINT - 753)) | (1 << (SqlParser.ENVELOPE - 753)) | (1 << (SqlParser.EQUALS - 753)) | (1 << (SqlParser.EXP - 753)) | (1 << (SqlParser.EXPORT_SET - 753)) | (1 << (SqlParser.EXTERIORRING - 753)) | (1 << (SqlParser.EXTRACTVALUE - 753)) | (1 << (SqlParser.FIELD - 753)) | (1 << (SqlParser.FIND_IN_SET - 753)) | (1 << (SqlParser.FLOOR - 753)) | (1 << (SqlParser.FORMAT - 753)) | (1 << (SqlParser.FOUND_ROWS - 753)) | (1 << (SqlParser.FROM_BASE64 - 753)) | (1 << (SqlParser.FROM_DAYS - 753)) | (1 << (SqlParser.FROM_UNIXTIME - 753)) | (1 << (SqlParser.GEOMCOLLFROMTEXT - 753)) | (1 << (SqlParser.GEOMCOLLFROMWKB - 753)) | (1 << (SqlParser.GEOMETRYCOLLECTIONFROMTEXT - 753)) | (1 << (SqlParser.GEOMETRYCOLLECTIONFROMWKB - 753)) | (1 << (SqlParser.GEOMETRYFROMTEXT - 753)) | (1 << (SqlParser.GEOMETRYFROMWKB - 753)))) !== 0) || ((((_la - 785)) & ~0x1f) == 0 && ((1 << (_la - 785)) & ((1 << (SqlParser.GEOMETRYN - 785)) | (1 << (SqlParser.GEOMETRYTYPE - 785)) | (1 << (SqlParser.GEOMFROMTEXT - 785)) | (1 << (SqlParser.GEOMFROMWKB - 785)) | (1 << (SqlParser.GET_FORMAT - 785)) | (1 << (SqlParser.GET_LOCK - 785)) | (1 << (SqlParser.GLENGTH - 785)) | (1 << (SqlParser.GREATEST - 785)) | (1 << (SqlParser.GTID_SUBSET - 785)) | (1 << (SqlParser.GTID_SUBTRACT - 785)) | (1 << (SqlParser.HEX - 785)) | (1 << (SqlParser.IFNULL - 785)) | (1 << (SqlParser.INET6_ATON - 785)) | (1 << (SqlParser.INET6_NTOA - 785)) | (1 << (SqlParser.INET_ATON - 785)) | (1 << (SqlParser.INET_NTOA - 785)) | (1 << (SqlParser.INSTR - 785)) | (1 << (SqlParser.INTERIORRINGN - 785)) | (1 << (SqlParser.INTERSECTS - 785)) | (1 << (SqlParser.ISCLOSED - 785)) | (1 << (SqlParser.ISEMPTY - 785)) | (1 << (SqlParser.ISNULL - 785)) | (1 << (SqlParser.ISSIMPLE - 785)) | (1 << (SqlParser.IS_FREE_LOCK - 785)) | (1 << (SqlParser.IS_IPV4 - 785)) | (1 << (SqlParser.IS_IPV4_COMPAT - 785)) | (1 << (SqlParser.IS_IPV4_MAPPED - 785)) | (1 << (SqlParser.IS_IPV6 - 785)) | (1 << (SqlParser.IS_USED_LOCK - 785)) | (1 << (SqlParser.LAST_INSERT_ID - 785)) | (1 << (SqlParser.LCASE - 785)) | (1 << (SqlParser.LEAST - 785)))) !== 0) || ((((_la - 817)) & ~0x1f) == 0 && ((1 << (_la - 817)) & ((1 << (SqlParser.LENGTH - 817)) | (1 << (SqlParser.LINEFROMTEXT - 817)) | (1 << (SqlParser.LINEFROMWKB - 817)) | (1 << (SqlParser.LINESTRINGFROMTEXT - 817)) | (1 << (SqlParser.LINESTRINGFROMWKB - 817)) | (1 << (SqlParser.LN - 817)) | (1 << (SqlParser.LOAD_FILE - 817)) | (1 << (SqlParser.LOCATE - 817)) | (1 << (SqlParser.LOG - 817)) | (1 << (SqlParser.LOG10 - 817)) | (1 << (SqlParser.LOG2 - 817)) | (1 << (SqlParser.LOWER - 817)) | (1 << (SqlParser.LPAD - 817)) | (1 << (SqlParser.LTRIM - 817)) | (1 << (SqlParser.MAKEDATE - 817)) | (1 << (SqlParser.MAKETIME - 817)) | (1 << (SqlParser.MAKE_SET - 817)) | (1 << (SqlParser.MASTER_POS_WAIT - 817)) | (1 << (SqlParser.MBRCONTAINS - 817)) | (1 << (SqlParser.MBRDISJOINT - 817)) | (1 << (SqlParser.MBREQUAL - 817)) | (1 << (SqlParser.MBRINTERSECTS - 817)) | (1 << (SqlParser.MBROVERLAPS - 817)) | (1 << (SqlParser.MBRTOUCHES - 817)) | (1 << (SqlParser.MBRWITHIN - 817)) | (1 << (SqlParser.MD5 - 817)) | (1 << (SqlParser.MLINEFROMTEXT - 817)) | (1 << (SqlParser.MLINEFROMWKB - 817)) | (1 << (SqlParser.MONTHNAME - 817)) | (1 << (SqlParser.MPOINTFROMTEXT - 817)) | (1 << (SqlParser.MPOINTFROMWKB - 817)) | (1 << (SqlParser.MPOLYFROMTEXT - 817)))) !== 0) || ((((_la - 849)) & ~0x1f) == 0 && ((1 << (_la - 849)) & ((1 << (SqlParser.MPOLYFROMWKB - 849)) | (1 << (SqlParser.MULTILINESTRINGFROMTEXT - 849)) | (1 << (SqlParser.MULTILINESTRINGFROMWKB - 849)) | (1 << (SqlParser.MULTIPOINTFROMTEXT - 849)) | (1 << (SqlParser.MULTIPOINTFROMWKB - 849)) | (1 << (SqlParser.MULTIPOLYGONFROMTEXT - 849)) | (1 << (SqlParser.MULTIPOLYGONFROMWKB - 849)) | (1 << (SqlParser.NAME_CONST - 849)) | (1 << (SqlParser.NULLIF - 849)) | (1 << (SqlParser.NUMGEOMETRIES - 849)) | (1 << (SqlParser.NUMINTERIORRINGS - 849)) | (1 << (SqlParser.NUMPOINTS - 849)) | (1 << (SqlParser.OCT - 849)) | (1 << (SqlParser.OCTET_LENGTH - 849)) | (1 << (SqlParser.ORD - 849)) | (1 << (SqlParser.OVERLAPS - 849)) | (1 << (SqlParser.PERIOD_ADD - 849)) | (1 << (SqlParser.PERIOD_DIFF - 849)) | (1 << (SqlParser.PI - 849)) | (1 << (SqlParser.POINTFROMTEXT - 849)) | (1 << (SqlParser.POINTFROMWKB - 849)) | (1 << (SqlParser.POINTN - 849)) | (1 << (SqlParser.POLYFROMTEXT - 849)) | (1 << (SqlParser.POLYFROMWKB - 849)) | (1 << (SqlParser.POLYGONFROMTEXT - 849)) | (1 << (SqlParser.POLYGONFROMWKB - 849)) | (1 << (SqlParser.POW - 849)) | (1 << (SqlParser.POWER - 849)) | (1 << (SqlParser.QUOTE - 849)) | (1 << (SqlParser.RADIANS - 849)) | (1 << (SqlParser.RAND - 849)) | (1 << (SqlParser.RANDOM_BYTES - 849)))) !== 0) || ((((_la - 881)) & ~0x1f) == 0 && ((1 << (_la - 881)) & ((1 << (SqlParser.RELEASE_LOCK - 881)) | (1 << (SqlParser.REVERSE - 881)) | (1 << (SqlParser.ROUND - 881)) | (1 << (SqlParser.ROW_COUNT - 881)) | (1 << (SqlParser.RPAD - 881)) | (1 << (SqlParser.RTRIM - 881)) | (1 << (SqlParser.SEC_TO_TIME - 881)) | (1 << (SqlParser.SESSION_USER - 881)) | (1 << (SqlParser.SHA - 881)) | (1 << (SqlParser.SHA1 - 881)) | (1 << (SqlParser.SHA2 - 881)) | (1 << (SqlParser.SCHEMA_NAME - 881)) | (1 << (SqlParser.SIGN - 881)) | (1 << (SqlParser.SIN - 881)) | (1 << (SqlParser.SLEEP - 881)) | (1 << (SqlParser.SOUNDEX - 881)) | (1 << (SqlParser.SQL_THREAD_WAIT_AFTER_GTIDS - 881)) | (1 << (SqlParser.SQRT - 881)) | (1 << (SqlParser.SRID - 881)) | (1 << (SqlParser.STARTPOINT - 881)) | (1 << (SqlParser.STRCMP - 881)) | (1 << (SqlParser.STR_TO_DATE - 881)) | (1 << (SqlParser.ST_AREA - 881)) | (1 << (SqlParser.ST_ASBINARY - 881)) | (1 << (SqlParser.ST_ASTEXT - 881)) | (1 << (SqlParser.ST_ASWKB - 881)) | (1 << (SqlParser.ST_ASWKT - 881)) | (1 << (SqlParser.ST_BUFFER - 881)) | (1 << (SqlParser.ST_CENTROID - 881)) | (1 << (SqlParser.ST_CONTAINS - 881)) | (1 << (SqlParser.ST_CROSSES - 881)) | (1 << (SqlParser.ST_DIFFERENCE - 881)))) !== 0) || ((((_la - 913)) & ~0x1f) == 0 && ((1 << (_la - 913)) & ((1 << (SqlParser.ST_DIMENSION - 913)) | (1 << (SqlParser.ST_DISJOINT - 913)) | (1 << (SqlParser.ST_DISTANCE - 913)) | (1 << (SqlParser.ST_ENDPOINT - 913)) | (1 << (SqlParser.ST_ENVELOPE - 913)) | (1 << (SqlParser.ST_EQUALS - 913)) | (1 << (SqlParser.ST_EXTERIORRING - 913)) | (1 << (SqlParser.ST_GEOMCOLLFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMCOLLFROMTXT - 913)) | (1 << (SqlParser.ST_GEOMCOLLFROMWKB - 913)) | (1 << (SqlParser.ST_GEOMETRYCOLLECTIONFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMETRYCOLLECTIONFROMWKB - 913)) | (1 << (SqlParser.ST_GEOMETRYFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMETRYFROMWKB - 913)) | (1 << (SqlParser.ST_GEOMETRYN - 913)) | (1 << (SqlParser.ST_GEOMETRYTYPE - 913)) | (1 << (SqlParser.ST_GEOMFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMFROMWKB - 913)) | (1 << (SqlParser.ST_INTERIORRINGN - 913)) | (1 << (SqlParser.ST_INTERSECTION - 913)) | (1 << (SqlParser.ST_INTERSECTS - 913)) | (1 << (SqlParser.ST_ISCLOSED - 913)) | (1 << (SqlParser.ST_ISEMPTY - 913)) | (1 << (SqlParser.ST_ISSIMPLE - 913)) | (1 << (SqlParser.ST_LINEFROMTEXT - 913)) | (1 << (SqlParser.ST_LINEFROMWKB - 913)) | (1 << (SqlParser.ST_LINESTRINGFROMTEXT - 913)) | (1 << (SqlParser.ST_LINESTRINGFROMWKB - 913)) | (1 << (SqlParser.ST_NUMGEOMETRIES - 913)) | (1 << (SqlParser.ST_NUMINTERIORRING - 913)) | (1 << (SqlParser.ST_NUMINTERIORRINGS - 913)) | (1 << (SqlParser.ST_NUMPOINTS - 913)))) !== 0) || ((((_la - 945)) & ~0x1f) == 0 && ((1 << (_la - 945)) & ((1 << (SqlParser.ST_OVERLAPS - 945)) | (1 << (SqlParser.ST_POINTFROMTEXT - 945)) | (1 << (SqlParser.ST_POINTFROMWKB - 945)) | (1 << (SqlParser.ST_POINTN - 945)) | (1 << (SqlParser.ST_POLYFROMTEXT - 945)) | (1 << (SqlParser.ST_POLYFROMWKB - 945)) | (1 << (SqlParser.ST_POLYGONFROMTEXT - 945)) | (1 << (SqlParser.ST_POLYGONFROMWKB - 945)) | (1 << (SqlParser.ST_SRID - 945)) | (1 << (SqlParser.ST_STARTPOINT - 945)) | (1 << (SqlParser.ST_SYMDIFFERENCE - 945)) | (1 << (SqlParser.ST_TOUCHES - 945)) | (1 << (SqlParser.ST_UNION - 945)) | (1 << (SqlParser.ST_WITHIN - 945)) | (1 << (SqlParser.ST_X - 945)) | (1 << (SqlParser.ST_Y - 945)) | (1 << (SqlParser.SUBDATE - 945)) | (1 << (SqlParser.SUBSTRING_INDEX - 945)) | (1 << (SqlParser.SUBTIME - 945)) | (1 << (SqlParser.SYSTEM_USER - 945)) | (1 << (SqlParser.TAN - 945)) | (1 << (SqlParser.TIMEDIFF - 945)) | (1 << (SqlParser.TIMESTAMPADD - 945)) | (1 << (SqlParser.TIMESTAMPDIFF - 945)) | (1 << (SqlParser.TIME_FORMAT - 945)) | (1 << (SqlParser.TIME_TO_SEC - 945)) | (1 << (SqlParser.TOUCHES - 945)) | (1 << (SqlParser.TO_BASE64 - 945)) | (1 << (SqlParser.TO_DAYS - 945)) | (1 << (SqlParser.TO_SECONDS - 945)) | (1 << (SqlParser.UCASE - 945)) | (1 << (SqlParser.UNCOMPRESS - 945)))) !== 0) || ((((_la - 977)) & ~0x1f) == 0 && ((1 << (_la - 977)) & ((1 << (SqlParser.UNCOMPRESSED_LENGTH - 977)) | (1 << (SqlParser.UNHEX - 977)) | (1 << (SqlParser.UNIX_TIMESTAMP - 977)) | (1 << (SqlParser.UPDATEXML - 977)) | (1 << (SqlParser.UPPER - 977)) | (1 << (SqlParser.UUID - 977)) | (1 << (SqlParser.UUID_SHORT - 977)) | (1 << (SqlParser.VALIDATE_PASSWORD_STRENGTH - 977)) | (1 << (SqlParser.VERSION - 977)) | (1 << (SqlParser.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS - 977)) | (1 << (SqlParser.WEEKDAY - 977)) | (1 << (SqlParser.WEEKOFYEAR - 977)) | (1 << (SqlParser.WEIGHT_STRING - 977)) | (1 << (SqlParser.WITHIN - 977)) | (1 << (SqlParser.YEARWEEK - 977)) | (1 << (SqlParser.Y_FUNCTION - 977)) | (1 << (SqlParser.X_FUNCTION - 977)))) !== 0) || ((((_la - 1043)) & ~0x1f) == 0 && ((1 << (_la - 1043)) & ((1 << (SqlParser.ID - 1043)) | (1 << (SqlParser.DOUBLE_QUOTE_ID - 1043)) | (1 << (SqlParser.REVERSE_QUOTE_ID - 1043)) | (1 << (SqlParser.BLOCKED_QUOTE_ID - 1043)))) !== 0)) {
            this.state = 180;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.AS) {
                this.state = 179;
                this.match(SqlParser.AS);
            }

            this.state = 182;
            localctx.alias = this.uid();
        }

        this.state = 185;
        this.match(SqlParser.SET);
        this.state = 186;
        this.updatedElement();
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 187;
            this.match(SqlParser.COMMA);
            this.state = 188;
            this.updatedElement();
            this.state = 193;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.WHERE) {
            this.state = 194;
            this.match(SqlParser.WHERE);
            this.state = 195;
            localctx.whereExp = this.expression(0);
        }

        this.state = 199;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.ORDER) {
            this.state = 198;
            this.orderByClause();
        }

        this.state = 202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.LIMIT) {
            this.state = 201;
            this.limitClause();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UpdatedElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_updatedElement;
    return this;
}

UpdatedElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UpdatedElementContext.prototype.constructor = UpdatedElementContext;

UpdatedElementContext.prototype.fullColumnName = function() {
    return this.getTypedRuleContext(FullColumnNameContext,0);
};

UpdatedElementContext.prototype.EQUAL_SYMBOL = function() {
    return this.getToken(SqlParser.EQUAL_SYMBOL, 0);
};

UpdatedElementContext.prototype.constOrColumnAtom = function() {
    return this.getTypedRuleContext(ConstOrColumnAtomContext,0);
};

UpdatedElementContext.prototype.DEFAULT = function() {
    return this.getToken(SqlParser.DEFAULT, 0);
};

UpdatedElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitUpdatedElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.UpdatedElementContext = UpdatedElementContext;

SqlParser.prototype.updatedElement = function() {

    var localctx = new UpdatedElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SqlParser.RULE_updatedElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.fullColumnName();
        this.state = 205;
        this.match(SqlParser.EQUAL_SYMBOL);
        this.state = 208;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.EOF:
        case SqlParser.CURRENT:
        case SqlParser.DATABASE:
        case SqlParser.DELETE:
        case SqlParser.DIAGNOSTICS:
        case SqlParser.FALSE:
        case SqlParser.INSERT:
        case SqlParser.LEFT:
        case SqlParser.LIMIT:
        case SqlParser.NULL_LITERAL:
        case SqlParser.NUMBER:
        case SqlParser.ORDER:
        case SqlParser.RIGHT:
        case SqlParser.SELECT:
        case SqlParser.STACKED:
        case SqlParser.TRUE:
        case SqlParser.UPDATE:
        case SqlParser.WHERE:
        case SqlParser.DATE:
        case SqlParser.TIME:
        case SqlParser.TIMESTAMP:
        case SqlParser.DATETIME:
        case SqlParser.YEAR:
        case SqlParser.TEXT:
        case SqlParser.ENUM:
        case SqlParser.SERIAL:
        case SqlParser.JSON_VALID:
        case SqlParser.JSON_SCHEMA_VALID:
        case SqlParser.COUNT:
        case SqlParser.POSITION:
        case SqlParser.ACCOUNT:
        case SqlParser.ACTION:
        case SqlParser.AFTER:
        case SqlParser.AGGREGATE:
        case SqlParser.ALGORITHM:
        case SqlParser.ANY:
        case SqlParser.AT:
        case SqlParser.AUTHORS:
        case SqlParser.AUTOCOMMIT:
        case SqlParser.AUTOEXTEND_SIZE:
        case SqlParser.AUTO_INCREMENT:
        case SqlParser.AVG_ROW_LENGTH:
        case SqlParser.BEGIN:
        case SqlParser.BINLOG:
        case SqlParser.BIT:
        case SqlParser.BLOCK:
        case SqlParser.BOOL:
        case SqlParser.BOOLEAN:
        case SqlParser.BTREE:
        case SqlParser.CACHE:
        case SqlParser.CASCADED:
        case SqlParser.CHAIN:
        case SqlParser.CHANGED:
        case SqlParser.CHANNEL:
        case SqlParser.CHECKSUM:
        case SqlParser.PAGE_CHECKSUM:
        case SqlParser.CIPHER:
        case SqlParser.CLASS_ORIGIN:
        case SqlParser.CLIENT:
        case SqlParser.CLOSE:
        case SqlParser.COALESCE:
        case SqlParser.CODE:
        case SqlParser.COLUMNS:
        case SqlParser.COLUMN_FORMAT:
        case SqlParser.COLUMN_NAME:
        case SqlParser.COMMENT:
        case SqlParser.COMMIT:
        case SqlParser.COMPACT:
        case SqlParser.COMPLETION:
        case SqlParser.COMPRESSED:
        case SqlParser.COMPRESSION:
        case SqlParser.CONCURRENT:
        case SqlParser.CONNECTION:
        case SqlParser.CONSISTENT:
        case SqlParser.CONSTRAINT_CATALOG:
        case SqlParser.CONSTRAINT_SCHEMA:
        case SqlParser.CONSTRAINT_NAME:
        case SqlParser.CONTAINS:
        case SqlParser.CONTEXT:
        case SqlParser.CONTRIBUTORS:
        case SqlParser.COPY:
        case SqlParser.CPU:
        case SqlParser.CURSOR_NAME:
        case SqlParser.DATA:
        case SqlParser.DATAFILE:
        case SqlParser.DEALLOCATE:
        case SqlParser.DEFAULT_AUTH:
        case SqlParser.DEFINER:
        case SqlParser.DELAY_KEY_WRITE:
        case SqlParser.DES_KEY_FILE:
        case SqlParser.DIRECTORY:
        case SqlParser.DISABLE:
        case SqlParser.DISCARD:
        case SqlParser.DISK:
        case SqlParser.DO:
        case SqlParser.DUMPFILE:
        case SqlParser.DUPLICATE:
        case SqlParser.DYNAMIC:
        case SqlParser.ENABLE:
        case SqlParser.ENCRYPTION:
        case SqlParser.END:
        case SqlParser.ENDS:
        case SqlParser.ENGINE:
        case SqlParser.ENGINES:
        case SqlParser.ERROR:
        case SqlParser.ERRORS:
        case SqlParser.ESCAPE:
        case SqlParser.EVEN:
        case SqlParser.EVENT:
        case SqlParser.EVENTS:
        case SqlParser.EVERY:
        case SqlParser.EXCHANGE:
        case SqlParser.EXCLUSIVE:
        case SqlParser.EXPIRE:
        case SqlParser.EXPORT:
        case SqlParser.EXTENDED:
        case SqlParser.EXTENT_SIZE:
        case SqlParser.FAST:
        case SqlParser.FAULTS:
        case SqlParser.FIELDS:
        case SqlParser.FILE_BLOCK_SIZE:
        case SqlParser.FILTER:
        case SqlParser.FIRST:
        case SqlParser.FIXED:
        case SqlParser.FLUSH:
        case SqlParser.FOLLOWS:
        case SqlParser.FOUND:
        case SqlParser.FULL:
        case SqlParser.FUNCTION:
        case SqlParser.GENERAL:
        case SqlParser.GLOBAL:
        case SqlParser.GRANTS:
        case SqlParser.GROUP_REPLICATION:
        case SqlParser.HANDLER:
        case SqlParser.HASH:
        case SqlParser.HELP:
        case SqlParser.HOST:
        case SqlParser.HOSTS:
        case SqlParser.IDENTIFIED:
        case SqlParser.IGNORE_SERVER_IDS:
        case SqlParser.IMPORT:
        case SqlParser.INDEXES:
        case SqlParser.INITIAL_SIZE:
        case SqlParser.INPLACE:
        case SqlParser.INSERT_METHOD:
        case SqlParser.INSTALL:
        case SqlParser.INSTANCE:
        case SqlParser.INVISIBLE:
        case SqlParser.INVOKER:
        case SqlParser.IO:
        case SqlParser.IO_THREAD:
        case SqlParser.IPC:
        case SqlParser.ISOLATION:
        case SqlParser.ISSUER:
        case SqlParser.JSON:
        case SqlParser.KEY_BLOCK_SIZE:
        case SqlParser.LANGUAGE:
        case SqlParser.LAST:
        case SqlParser.LEAVES:
        case SqlParser.LESS:
        case SqlParser.LEVEL:
        case SqlParser.LIST:
        case SqlParser.LOCAL:
        case SqlParser.LOGFILE:
        case SqlParser.LOGS:
        case SqlParser.MASTER:
        case SqlParser.MASTER_AUTO_POSITION:
        case SqlParser.MASTER_CONNECT_RETRY:
        case SqlParser.MASTER_DELAY:
        case SqlParser.MASTER_HEARTBEAT_PERIOD:
        case SqlParser.MASTER_HOST:
        case SqlParser.MASTER_LOG_FILE:
        case SqlParser.MASTER_LOG_POS:
        case SqlParser.MASTER_PASSWORD:
        case SqlParser.MASTER_PORT:
        case SqlParser.MASTER_RETRY_COUNT:
        case SqlParser.MASTER_SSL:
        case SqlParser.MASTER_SSL_CA:
        case SqlParser.MASTER_SSL_CAPATH:
        case SqlParser.MASTER_SSL_CERT:
        case SqlParser.MASTER_SSL_CIPHER:
        case SqlParser.MASTER_SSL_CRL:
        case SqlParser.MASTER_SSL_CRLPATH:
        case SqlParser.MASTER_SSL_KEY:
        case SqlParser.MASTER_TLS_VERSION:
        case SqlParser.MASTER_USER:
        case SqlParser.MAX_CONNECTIONS_PER_HOUR:
        case SqlParser.MAX_QUERIES_PER_HOUR:
        case SqlParser.MAX_ROWS:
        case SqlParser.MAX_SIZE:
        case SqlParser.MAX_UPDATES_PER_HOUR:
        case SqlParser.MAX_USER_CONNECTIONS:
        case SqlParser.MEDIUM:
        case SqlParser.MERGE:
        case SqlParser.MESSAGE_TEXT:
        case SqlParser.MID:
        case SqlParser.MIGRATE:
        case SqlParser.MIN_ROWS:
        case SqlParser.MODE:
        case SqlParser.MODIFY:
        case SqlParser.MUTEX:
        case SqlParser.MYSQL:
        case SqlParser.MYSQL_ERRNO:
        case SqlParser.NAME:
        case SqlParser.NAMES:
        case SqlParser.NCHAR:
        case SqlParser.NEVER:
        case SqlParser.NEXT:
        case SqlParser.NO:
        case SqlParser.NODEGROUP:
        case SqlParser.NONE:
        case SqlParser.OFFLINE:
        case SqlParser.OFFSET:
        case SqlParser.OJ:
        case SqlParser.OLD_PASSWORD:
        case SqlParser.ONE:
        case SqlParser.ONLINE:
        case SqlParser.ONLY:
        case SqlParser.OPEN:
        case SqlParser.OPTIMIZER_COSTS:
        case SqlParser.OPTIONS:
        case SqlParser.OWNER:
        case SqlParser.PACK_KEYS:
        case SqlParser.PAGE:
        case SqlParser.PARSER:
        case SqlParser.PARTIAL:
        case SqlParser.PARTITIONING:
        case SqlParser.PARTITIONS:
        case SqlParser.PASSWORD:
        case SqlParser.PHASE:
        case SqlParser.PLUGIN:
        case SqlParser.PLUGIN_DIR:
        case SqlParser.PLUGINS:
        case SqlParser.PORT:
        case SqlParser.PRECEDES:
        case SqlParser.PREPARE:
        case SqlParser.PRESERVE:
        case SqlParser.PREV:
        case SqlParser.PROCESSLIST:
        case SqlParser.PROFILE:
        case SqlParser.PROFILES:
        case SqlParser.PROXY:
        case SqlParser.QUERY:
        case SqlParser.QUICK:
        case SqlParser.REBUILD:
        case SqlParser.RECOVER:
        case SqlParser.REDO_BUFFER_SIZE:
        case SqlParser.REDUNDANT:
        case SqlParser.RELAY:
        case SqlParser.RELAY_LOG_FILE:
        case SqlParser.RELAY_LOG_POS:
        case SqlParser.RELAYLOG:
        case SqlParser.REMOVE:
        case SqlParser.REORGANIZE:
        case SqlParser.REPAIR:
        case SqlParser.REPLICATE_DO_DB:
        case SqlParser.REPLICATE_DO_TABLE:
        case SqlParser.REPLICATE_IGNORE_DB:
        case SqlParser.REPLICATE_IGNORE_TABLE:
        case SqlParser.REPLICATE_REWRITE_DB:
        case SqlParser.REPLICATE_WILD_DO_TABLE:
        case SqlParser.REPLICATE_WILD_IGNORE_TABLE:
        case SqlParser.REPLICATION:
        case SqlParser.RESET:
        case SqlParser.RESUME:
        case SqlParser.RETURNED_SQLSTATE:
        case SqlParser.RETURNS:
        case SqlParser.ROLE:
        case SqlParser.ROLLBACK:
        case SqlParser.ROLLUP:
        case SqlParser.ROTATE:
        case SqlParser.ROW:
        case SqlParser.ROWS:
        case SqlParser.ROW_FORMAT:
        case SqlParser.SAVEPOINT:
        case SqlParser.SCHEDULE:
        case SqlParser.SECURITY:
        case SqlParser.SERVER:
        case SqlParser.SESSION:
        case SqlParser.SHARE:
        case SqlParser.SHARED:
        case SqlParser.SIGNED:
        case SqlParser.SIMPLE:
        case SqlParser.SLAVE:
        case SqlParser.SLOW:
        case SqlParser.SNAPSHOT:
        case SqlParser.SOCKET:
        case SqlParser.SOME:
        case SqlParser.SONAME:
        case SqlParser.SOUNDS:
        case SqlParser.SOURCE:
        case SqlParser.SQL_AFTER_GTIDS:
        case SqlParser.SQL_AFTER_MTS_GAPS:
        case SqlParser.SQL_BEFORE_GTIDS:
        case SqlParser.SQL_BUFFER_RESULT:
        case SqlParser.SQL_CACHE:
        case SqlParser.SQL_NO_CACHE:
        case SqlParser.SQL_THREAD:
        case SqlParser.START:
        case SqlParser.STARTS:
        case SqlParser.STATS_AUTO_RECALC:
        case SqlParser.STATS_PERSISTENT:
        case SqlParser.STATS_SAMPLE_PAGES:
        case SqlParser.STATUS:
        case SqlParser.STOP:
        case SqlParser.STORAGE:
        case SqlParser.STRING:
        case SqlParser.SUBCLASS_ORIGIN:
        case SqlParser.SUBJECT:
        case SqlParser.SUBPARTITION:
        case SqlParser.SUBPARTITIONS:
        case SqlParser.SUSPEND:
        case SqlParser.SWAPS:
        case SqlParser.SWITCHES:
        case SqlParser.TABLE_NAME:
        case SqlParser.TABLESPACE:
        case SqlParser.TEMPORARY:
        case SqlParser.TEMPTABLE:
        case SqlParser.THAN:
        case SqlParser.TRADITIONAL:
        case SqlParser.TRANSACTION:
        case SqlParser.TRANSACTIONAL:
        case SqlParser.TRIGGERS:
        case SqlParser.TRUNCATE:
        case SqlParser.UNDEFINED:
        case SqlParser.UNDOFILE:
        case SqlParser.UNDO_BUFFER_SIZE:
        case SqlParser.UNINSTALL:
        case SqlParser.UNKNOWN:
        case SqlParser.UNTIL:
        case SqlParser.UPGRADE:
        case SqlParser.USER:
        case SqlParser.USE_FRM:
        case SqlParser.USER_RESOURCES:
        case SqlParser.VALIDATION:
        case SqlParser.VALUE:
        case SqlParser.VARIABLES:
        case SqlParser.VIEW:
        case SqlParser.VISIBLE:
        case SqlParser.WAIT:
        case SqlParser.WARNINGS:
        case SqlParser.WITHOUT:
        case SqlParser.WORK:
        case SqlParser.WRAPPER:
        case SqlParser.X509:
        case SqlParser.XA:
        case SqlParser.XML:
        case SqlParser.INTERNAL:
        case SqlParser.QUARTER:
        case SqlParser.MONTH:
        case SqlParser.DAY:
        case SqlParser.HOUR:
        case SqlParser.MINUTE:
        case SqlParser.WEEK:
        case SqlParser.SECOND:
        case SqlParser.MICROSECOND:
        case SqlParser.TABLES:
        case SqlParser.ROUTINE:
        case SqlParser.EXECUTE:
        case SqlParser.FILE:
        case SqlParser.PROCESS:
        case SqlParser.RELOAD:
        case SqlParser.SHUTDOWN:
        case SqlParser.SUPER:
        case SqlParser.PRIVILEGES:
        case SqlParser.AUDIT_ADMIN:
        case SqlParser.BACKUP_ADMIN:
        case SqlParser.BINLOG_ADMIN:
        case SqlParser.BINLOG_ENCRYPTION_ADMIN:
        case SqlParser.CLONE_ADMIN:
        case SqlParser.CONNECTION_ADMIN:
        case SqlParser.ENCRYPTION_KEY_ADMIN:
        case SqlParser.FIREWALL_ADMIN:
        case SqlParser.FIREWALL_USER:
        case SqlParser.GROUP_REPLICATION_ADMIN:
        case SqlParser.INNODB_REDO_LOG_ARCHIVE:
        case SqlParser.NDB_STORED_USER:
        case SqlParser.PERSIST_RO_VARIABLES_ADMIN:
        case SqlParser.REPLICATION_APPLIER:
        case SqlParser.REPLICATION_SLAVE_ADMIN:
        case SqlParser.RESOURCE_GROUP_ADMIN:
        case SqlParser.RESOURCE_GROUP_USER:
        case SqlParser.ROLE_ADMIN:
        case SqlParser.SESSION_VARIABLES_ADMIN:
        case SqlParser.SET_USER_ID:
        case SqlParser.SHOW_ROUTINE:
        case SqlParser.SYSTEM_VARIABLES_ADMIN:
        case SqlParser.TABLE_ENCRYPTION_ADMIN:
        case SqlParser.VERSION_TOKEN_ADMIN:
        case SqlParser.XA_RECOVER_ADMIN:
        case SqlParser.ARMSCII8:
        case SqlParser.ASCII:
        case SqlParser.BIG5:
        case SqlParser.CP1250:
        case SqlParser.CP1251:
        case SqlParser.CP1256:
        case SqlParser.CP1257:
        case SqlParser.CP850:
        case SqlParser.CP852:
        case SqlParser.CP866:
        case SqlParser.CP932:
        case SqlParser.DEC8:
        case SqlParser.EUCJPMS:
        case SqlParser.EUCKR:
        case SqlParser.GB2312:
        case SqlParser.GBK:
        case SqlParser.GEOSTD8:
        case SqlParser.GREEK:
        case SqlParser.HEBREW:
        case SqlParser.HP8:
        case SqlParser.KEYBCS2:
        case SqlParser.KOI8R:
        case SqlParser.KOI8U:
        case SqlParser.LATIN1:
        case SqlParser.LATIN2:
        case SqlParser.LATIN5:
        case SqlParser.LATIN7:
        case SqlParser.MACCE:
        case SqlParser.MACROMAN:
        case SqlParser.SJIS:
        case SqlParser.SWE7:
        case SqlParser.TIS620:
        case SqlParser.UCS2:
        case SqlParser.UJIS:
        case SqlParser.UTF16:
        case SqlParser.UTF16LE:
        case SqlParser.UTF32:
        case SqlParser.UTF8:
        case SqlParser.UTF8MB3:
        case SqlParser.UTF8MB4:
        case SqlParser.ARCHIVE:
        case SqlParser.BLACKHOLE:
        case SqlParser.CSV:
        case SqlParser.FEDERATED:
        case SqlParser.INNODB:
        case SqlParser.MEMORY:
        case SqlParser.MRG_MYISAM:
        case SqlParser.MYISAM:
        case SqlParser.NDB:
        case SqlParser.NDBCLUSTER:
        case SqlParser.PERFORMANCE_SCHEMA:
        case SqlParser.TOKUDB:
        case SqlParser.REPEATABLE:
        case SqlParser.COMMITTED:
        case SqlParser.UNCOMMITTED:
        case SqlParser.SERIALIZABLE:
        case SqlParser.GEOMETRYCOLLECTION:
        case SqlParser.LINESTRING:
        case SqlParser.MULTILINESTRING:
        case SqlParser.MULTIPOINT:
        case SqlParser.MULTIPOLYGON:
        case SqlParser.POINT:
        case SqlParser.POLYGON:
        case SqlParser.ABS:
        case SqlParser.ACOS:
        case SqlParser.ADDDATE:
        case SqlParser.ADDTIME:
        case SqlParser.AES_DECRYPT:
        case SqlParser.AES_ENCRYPT:
        case SqlParser.AREA:
        case SqlParser.ASBINARY:
        case SqlParser.ASIN:
        case SqlParser.ASTEXT:
        case SqlParser.ASWKB:
        case SqlParser.ASWKT:
        case SqlParser.ASYMMETRIC_DECRYPT:
        case SqlParser.ASYMMETRIC_DERIVE:
        case SqlParser.ASYMMETRIC_ENCRYPT:
        case SqlParser.ASYMMETRIC_SIGN:
        case SqlParser.ASYMMETRIC_VERIFY:
        case SqlParser.ATAN:
        case SqlParser.ATAN2:
        case SqlParser.BENCHMARK:
        case SqlParser.BIN:
        case SqlParser.BIT_COUNT:
        case SqlParser.BIT_LENGTH:
        case SqlParser.BUFFER:
        case SqlParser.CATALOG_NAME:
        case SqlParser.CEIL:
        case SqlParser.CEILING:
        case SqlParser.CENTROID:
        case SqlParser.CHARACTER_LENGTH:
        case SqlParser.CHARSET:
        case SqlParser.CHAR_LENGTH:
        case SqlParser.COERCIBILITY:
        case SqlParser.COLLATION:
        case SqlParser.COMPRESS:
        case SqlParser.CONCAT:
        case SqlParser.CONCAT_WS:
        case SqlParser.CONNECTION_ID:
        case SqlParser.CONV:
        case SqlParser.CONVERT_TZ:
        case SqlParser.COS:
        case SqlParser.COT:
        case SqlParser.CRC32:
        case SqlParser.CREATE_ASYMMETRIC_PRIV_KEY:
        case SqlParser.CREATE_ASYMMETRIC_PUB_KEY:
        case SqlParser.CREATE_DH_PARAMETERS:
        case SqlParser.CREATE_DIGEST:
        case SqlParser.CROSSES:
        case SqlParser.DATEDIFF:
        case SqlParser.DATE_FORMAT:
        case SqlParser.DAYNAME:
        case SqlParser.DAYOFMONTH:
        case SqlParser.DAYOFWEEK:
        case SqlParser.DAYOFYEAR:
        case SqlParser.DECODE:
        case SqlParser.DEGREES:
        case SqlParser.DES_DECRYPT:
        case SqlParser.DES_ENCRYPT:
        case SqlParser.DIMENSION:
        case SqlParser.DISJOINT:
        case SqlParser.ELT:
        case SqlParser.ENCODE:
        case SqlParser.ENCRYPT:
        case SqlParser.ENDPOINT:
        case SqlParser.ENVELOPE:
        case SqlParser.EQUALS:
        case SqlParser.EXP:
        case SqlParser.EXPORT_SET:
        case SqlParser.EXTERIORRING:
        case SqlParser.EXTRACTVALUE:
        case SqlParser.FIELD:
        case SqlParser.FIND_IN_SET:
        case SqlParser.FLOOR:
        case SqlParser.FORMAT:
        case SqlParser.FOUND_ROWS:
        case SqlParser.FROM_BASE64:
        case SqlParser.FROM_DAYS:
        case SqlParser.FROM_UNIXTIME:
        case SqlParser.GEOMCOLLFROMTEXT:
        case SqlParser.GEOMCOLLFROMWKB:
        case SqlParser.GEOMETRYCOLLECTIONFROMTEXT:
        case SqlParser.GEOMETRYCOLLECTIONFROMWKB:
        case SqlParser.GEOMETRYFROMTEXT:
        case SqlParser.GEOMETRYFROMWKB:
        case SqlParser.GEOMETRYN:
        case SqlParser.GEOMETRYTYPE:
        case SqlParser.GEOMFROMTEXT:
        case SqlParser.GEOMFROMWKB:
        case SqlParser.GET_FORMAT:
        case SqlParser.GET_LOCK:
        case SqlParser.GLENGTH:
        case SqlParser.GREATEST:
        case SqlParser.GTID_SUBSET:
        case SqlParser.GTID_SUBTRACT:
        case SqlParser.HEX:
        case SqlParser.IFNULL:
        case SqlParser.INET6_ATON:
        case SqlParser.INET6_NTOA:
        case SqlParser.INET_ATON:
        case SqlParser.INET_NTOA:
        case SqlParser.INSTR:
        case SqlParser.INTERIORRINGN:
        case SqlParser.INTERSECTS:
        case SqlParser.ISCLOSED:
        case SqlParser.ISEMPTY:
        case SqlParser.ISNULL:
        case SqlParser.ISSIMPLE:
        case SqlParser.IS_FREE_LOCK:
        case SqlParser.IS_IPV4:
        case SqlParser.IS_IPV4_COMPAT:
        case SqlParser.IS_IPV4_MAPPED:
        case SqlParser.IS_IPV6:
        case SqlParser.IS_USED_LOCK:
        case SqlParser.LAST_INSERT_ID:
        case SqlParser.LCASE:
        case SqlParser.LEAST:
        case SqlParser.LENGTH:
        case SqlParser.LINEFROMTEXT:
        case SqlParser.LINEFROMWKB:
        case SqlParser.LINESTRINGFROMTEXT:
        case SqlParser.LINESTRINGFROMWKB:
        case SqlParser.LN:
        case SqlParser.LOAD_FILE:
        case SqlParser.LOCATE:
        case SqlParser.LOG:
        case SqlParser.LOG10:
        case SqlParser.LOG2:
        case SqlParser.LOWER:
        case SqlParser.LPAD:
        case SqlParser.LTRIM:
        case SqlParser.MAKEDATE:
        case SqlParser.MAKETIME:
        case SqlParser.MAKE_SET:
        case SqlParser.MASTER_POS_WAIT:
        case SqlParser.MBRCONTAINS:
        case SqlParser.MBRDISJOINT:
        case SqlParser.MBREQUAL:
        case SqlParser.MBRINTERSECTS:
        case SqlParser.MBROVERLAPS:
        case SqlParser.MBRTOUCHES:
        case SqlParser.MBRWITHIN:
        case SqlParser.MD5:
        case SqlParser.MLINEFROMTEXT:
        case SqlParser.MLINEFROMWKB:
        case SqlParser.MONTHNAME:
        case SqlParser.MPOINTFROMTEXT:
        case SqlParser.MPOINTFROMWKB:
        case SqlParser.MPOLYFROMTEXT:
        case SqlParser.MPOLYFROMWKB:
        case SqlParser.MULTILINESTRINGFROMTEXT:
        case SqlParser.MULTILINESTRINGFROMWKB:
        case SqlParser.MULTIPOINTFROMTEXT:
        case SqlParser.MULTIPOINTFROMWKB:
        case SqlParser.MULTIPOLYGONFROMTEXT:
        case SqlParser.MULTIPOLYGONFROMWKB:
        case SqlParser.NAME_CONST:
        case SqlParser.NULLIF:
        case SqlParser.NUMGEOMETRIES:
        case SqlParser.NUMINTERIORRINGS:
        case SqlParser.NUMPOINTS:
        case SqlParser.OCT:
        case SqlParser.OCTET_LENGTH:
        case SqlParser.ORD:
        case SqlParser.OVERLAPS:
        case SqlParser.PERIOD_ADD:
        case SqlParser.PERIOD_DIFF:
        case SqlParser.PI:
        case SqlParser.POINTFROMTEXT:
        case SqlParser.POINTFROMWKB:
        case SqlParser.POINTN:
        case SqlParser.POLYFROMTEXT:
        case SqlParser.POLYFROMWKB:
        case SqlParser.POLYGONFROMTEXT:
        case SqlParser.POLYGONFROMWKB:
        case SqlParser.POW:
        case SqlParser.POWER:
        case SqlParser.QUOTE:
        case SqlParser.RADIANS:
        case SqlParser.RAND:
        case SqlParser.RANDOM_BYTES:
        case SqlParser.RELEASE_LOCK:
        case SqlParser.REVERSE:
        case SqlParser.ROUND:
        case SqlParser.ROW_COUNT:
        case SqlParser.RPAD:
        case SqlParser.RTRIM:
        case SqlParser.SEC_TO_TIME:
        case SqlParser.SESSION_USER:
        case SqlParser.SHA:
        case SqlParser.SHA1:
        case SqlParser.SHA2:
        case SqlParser.SCHEMA_NAME:
        case SqlParser.SIGN:
        case SqlParser.SIN:
        case SqlParser.SLEEP:
        case SqlParser.SOUNDEX:
        case SqlParser.SQL_THREAD_WAIT_AFTER_GTIDS:
        case SqlParser.SQRT:
        case SqlParser.SRID:
        case SqlParser.STARTPOINT:
        case SqlParser.STRCMP:
        case SqlParser.STR_TO_DATE:
        case SqlParser.ST_AREA:
        case SqlParser.ST_ASBINARY:
        case SqlParser.ST_ASTEXT:
        case SqlParser.ST_ASWKB:
        case SqlParser.ST_ASWKT:
        case SqlParser.ST_BUFFER:
        case SqlParser.ST_CENTROID:
        case SqlParser.ST_CONTAINS:
        case SqlParser.ST_CROSSES:
        case SqlParser.ST_DIFFERENCE:
        case SqlParser.ST_DIMENSION:
        case SqlParser.ST_DISJOINT:
        case SqlParser.ST_DISTANCE:
        case SqlParser.ST_ENDPOINT:
        case SqlParser.ST_ENVELOPE:
        case SqlParser.ST_EQUALS:
        case SqlParser.ST_EXTERIORRING:
        case SqlParser.ST_GEOMCOLLFROMTEXT:
        case SqlParser.ST_GEOMCOLLFROMTXT:
        case SqlParser.ST_GEOMCOLLFROMWKB:
        case SqlParser.ST_GEOMETRYCOLLECTIONFROMTEXT:
        case SqlParser.ST_GEOMETRYCOLLECTIONFROMWKB:
        case SqlParser.ST_GEOMETRYFROMTEXT:
        case SqlParser.ST_GEOMETRYFROMWKB:
        case SqlParser.ST_GEOMETRYN:
        case SqlParser.ST_GEOMETRYTYPE:
        case SqlParser.ST_GEOMFROMTEXT:
        case SqlParser.ST_GEOMFROMWKB:
        case SqlParser.ST_INTERIORRINGN:
        case SqlParser.ST_INTERSECTION:
        case SqlParser.ST_INTERSECTS:
        case SqlParser.ST_ISCLOSED:
        case SqlParser.ST_ISEMPTY:
        case SqlParser.ST_ISSIMPLE:
        case SqlParser.ST_LINEFROMTEXT:
        case SqlParser.ST_LINEFROMWKB:
        case SqlParser.ST_LINESTRINGFROMTEXT:
        case SqlParser.ST_LINESTRINGFROMWKB:
        case SqlParser.ST_NUMGEOMETRIES:
        case SqlParser.ST_NUMINTERIORRING:
        case SqlParser.ST_NUMINTERIORRINGS:
        case SqlParser.ST_NUMPOINTS:
        case SqlParser.ST_OVERLAPS:
        case SqlParser.ST_POINTFROMTEXT:
        case SqlParser.ST_POINTFROMWKB:
        case SqlParser.ST_POINTN:
        case SqlParser.ST_POLYFROMTEXT:
        case SqlParser.ST_POLYFROMWKB:
        case SqlParser.ST_POLYGONFROMTEXT:
        case SqlParser.ST_POLYGONFROMWKB:
        case SqlParser.ST_SRID:
        case SqlParser.ST_STARTPOINT:
        case SqlParser.ST_SYMDIFFERENCE:
        case SqlParser.ST_TOUCHES:
        case SqlParser.ST_UNION:
        case SqlParser.ST_WITHIN:
        case SqlParser.ST_X:
        case SqlParser.ST_Y:
        case SqlParser.SUBDATE:
        case SqlParser.SUBSTRING_INDEX:
        case SqlParser.SUBTIME:
        case SqlParser.SYSTEM_USER:
        case SqlParser.TAN:
        case SqlParser.TIMEDIFF:
        case SqlParser.TIMESTAMPADD:
        case SqlParser.TIMESTAMPDIFF:
        case SqlParser.TIME_FORMAT:
        case SqlParser.TIME_TO_SEC:
        case SqlParser.TOUCHES:
        case SqlParser.TO_BASE64:
        case SqlParser.TO_DAYS:
        case SqlParser.TO_SECONDS:
        case SqlParser.UCASE:
        case SqlParser.UNCOMPRESS:
        case SqlParser.UNCOMPRESSED_LENGTH:
        case SqlParser.UNHEX:
        case SqlParser.UNIX_TIMESTAMP:
        case SqlParser.UPDATEXML:
        case SqlParser.UPPER:
        case SqlParser.UUID:
        case SqlParser.UUID_SHORT:
        case SqlParser.VALIDATE_PASSWORD_STRENGTH:
        case SqlParser.VERSION:
        case SqlParser.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS:
        case SqlParser.WEEKDAY:
        case SqlParser.WEEKOFYEAR:
        case SqlParser.WEIGHT_STRING:
        case SqlParser.WITHIN:
        case SqlParser.YEARWEEK:
        case SqlParser.Y_FUNCTION:
        case SqlParser.X_FUNCTION:
        case SqlParser.MINUSMINUS:
        case SqlParser.MINUS:
        case SqlParser.COMMA:
        case SqlParser.SEMI:
        case SqlParser.ZERO_DECIMAL:
        case SqlParser.ONE_DECIMAL:
        case SqlParser.TWO_DECIMAL:
        case SqlParser.STRING_LITERAL:
        case SqlParser.DECIMAL_LITERAL:
        case SqlParser.HEXADECIMAL_LITERAL:
        case SqlParser.REAL_LITERAL:
        case SqlParser.NULL_SPEC_LITERAL:
        case SqlParser.STRING_CHARSET_NAME:
        case SqlParser.ID:
        case SqlParser.DOUBLE_QUOTE_ID:
        case SqlParser.REVERSE_QUOTE_ID:
        case SqlParser.BLOCKED_QUOTE_ID:
            this.state = 206;
            this.constOrColumnAtom();
            break;
        case SqlParser.DEFAULT:
            this.state = 207;
            this.match(SqlParser.DEFAULT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DeleteStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_deleteStatement;
    this.whereExp = null; // ExpressionContext
    return this;
}

DeleteStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeleteStatementContext.prototype.constructor = DeleteStatementContext;

DeleteStatementContext.prototype.DELETE = function() {
    return this.getToken(SqlParser.DELETE, 0);
};

DeleteStatementContext.prototype.FROM = function() {
    return this.getToken(SqlParser.FROM, 0);
};

DeleteStatementContext.prototype.tableName = function() {
    return this.getTypedRuleContext(TableNameContext,0);
};

DeleteStatementContext.prototype.WHERE = function() {
    return this.getToken(SqlParser.WHERE, 0);
};

DeleteStatementContext.prototype.orderByClause = function() {
    return this.getTypedRuleContext(OrderByClauseContext,0);
};

DeleteStatementContext.prototype.LIMIT = function() {
    return this.getToken(SqlParser.LIMIT, 0);
};

DeleteStatementContext.prototype.limitClauseAtom = function() {
    return this.getTypedRuleContext(LimitClauseAtomContext,0);
};

DeleteStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DeleteStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitDeleteStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.DeleteStatementContext = DeleteStatementContext;

SqlParser.prototype.deleteStatement = function() {

    var localctx = new DeleteStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SqlParser.RULE_deleteStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(SqlParser.DELETE);
        this.state = 211;
        this.match(SqlParser.FROM);
        this.state = 212;
        this.tableName();
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.WHERE) {
            this.state = 213;
            this.match(SqlParser.WHERE);
            this.state = 214;
            localctx.whereExp = this.expression(0);
        }

        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.ORDER) {
            this.state = 217;
            this.orderByClause();
        }

        this.state = 222;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.LIMIT) {
            this.state = 220;
            this.match(SqlParser.LIMIT);
            this.state = 221;
            this.limitClauseAtom();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_selectStatement;
    return this;
}

SelectStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectStatementContext.prototype.constructor = SelectStatementContext;

SelectStatementContext.prototype.SELECT = function() {
    return this.getToken(SqlParser.SELECT, 0);
};

SelectStatementContext.prototype.selectElements = function() {
    return this.getTypedRuleContext(SelectElementsContext,0);
};

SelectStatementContext.prototype.fromClause = function() {
    return this.getTypedRuleContext(FromClauseContext,0);
};

SelectStatementContext.prototype.orderByClause = function() {
    return this.getTypedRuleContext(OrderByClauseContext,0);
};

SelectStatementContext.prototype.limitClause = function() {
    return this.getTypedRuleContext(LimitClauseContext,0);
};

SelectStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitSelectStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.SelectStatementContext = SelectStatementContext;

SqlParser.prototype.selectStatement = function() {

    var localctx = new SelectStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SqlParser.RULE_selectStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(SqlParser.SELECT);
        this.state = 225;
        this.selectElements();
        this.state = 233;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.FROM) {
            this.state = 226;
            this.fromClause();
            this.state = 228;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.ORDER) {
                this.state = 227;
                this.orderByClause();
            }

            this.state = 231;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.LIMIT) {
                this.state = 230;
                this.limitClause();
            }

        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectElementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_selectElements;
    this.star = null; // Token
    return this;
}

SelectElementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectElementsContext.prototype.constructor = SelectElementsContext;

SelectElementsContext.prototype.STAR = function() {
    return this.getToken(SqlParser.STAR, 0);
};

SelectElementsContext.prototype.selectElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SelectElementContext);
    } else {
        return this.getTypedRuleContext(SelectElementContext,i);
    }
};

SelectElementsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.COMMA);
    } else {
        return this.getToken(SqlParser.COMMA, i);
    }
};


SelectElementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitSelectElements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.SelectElementsContext = SelectElementsContext;

SqlParser.prototype.selectElements = function() {

    var localctx = new SelectElementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SqlParser.RULE_selectElements);
    var _la = 0; // Token type
    try {
        this.state = 248;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.STAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 235;
            localctx.star = this.match(SqlParser.STAR);
            break;
        case SqlParser.EOF:
        case SqlParser.AS:
        case SqlParser.CURRENT:
        case SqlParser.DATABASE:
        case SqlParser.DELETE:
        case SqlParser.DIAGNOSTICS:
        case SqlParser.FALSE:
        case SqlParser.FROM:
        case SqlParser.INSERT:
        case SqlParser.LEFT:
        case SqlParser.NULL_LITERAL:
        case SqlParser.NUMBER:
        case SqlParser.RIGHT:
        case SqlParser.SELECT:
        case SqlParser.STACKED:
        case SqlParser.TRUE:
        case SqlParser.UPDATE:
        case SqlParser.DATE:
        case SqlParser.TIME:
        case SqlParser.TIMESTAMP:
        case SqlParser.DATETIME:
        case SqlParser.YEAR:
        case SqlParser.TEXT:
        case SqlParser.ENUM:
        case SqlParser.SERIAL:
        case SqlParser.JSON_VALID:
        case SqlParser.JSON_SCHEMA_VALID:
        case SqlParser.COUNT:
        case SqlParser.POSITION:
        case SqlParser.ACCOUNT:
        case SqlParser.ACTION:
        case SqlParser.AFTER:
        case SqlParser.AGGREGATE:
        case SqlParser.ALGORITHM:
        case SqlParser.ANY:
        case SqlParser.AT:
        case SqlParser.AUTHORS:
        case SqlParser.AUTOCOMMIT:
        case SqlParser.AUTOEXTEND_SIZE:
        case SqlParser.AUTO_INCREMENT:
        case SqlParser.AVG_ROW_LENGTH:
        case SqlParser.BEGIN:
        case SqlParser.BINLOG:
        case SqlParser.BIT:
        case SqlParser.BLOCK:
        case SqlParser.BOOL:
        case SqlParser.BOOLEAN:
        case SqlParser.BTREE:
        case SqlParser.CACHE:
        case SqlParser.CASCADED:
        case SqlParser.CHAIN:
        case SqlParser.CHANGED:
        case SqlParser.CHANNEL:
        case SqlParser.CHECKSUM:
        case SqlParser.PAGE_CHECKSUM:
        case SqlParser.CIPHER:
        case SqlParser.CLASS_ORIGIN:
        case SqlParser.CLIENT:
        case SqlParser.CLOSE:
        case SqlParser.COALESCE:
        case SqlParser.CODE:
        case SqlParser.COLUMNS:
        case SqlParser.COLUMN_FORMAT:
        case SqlParser.COLUMN_NAME:
        case SqlParser.COMMENT:
        case SqlParser.COMMIT:
        case SqlParser.COMPACT:
        case SqlParser.COMPLETION:
        case SqlParser.COMPRESSED:
        case SqlParser.COMPRESSION:
        case SqlParser.CONCURRENT:
        case SqlParser.CONNECTION:
        case SqlParser.CONSISTENT:
        case SqlParser.CONSTRAINT_CATALOG:
        case SqlParser.CONSTRAINT_SCHEMA:
        case SqlParser.CONSTRAINT_NAME:
        case SqlParser.CONTAINS:
        case SqlParser.CONTEXT:
        case SqlParser.CONTRIBUTORS:
        case SqlParser.COPY:
        case SqlParser.CPU:
        case SqlParser.CURSOR_NAME:
        case SqlParser.DATA:
        case SqlParser.DATAFILE:
        case SqlParser.DEALLOCATE:
        case SqlParser.DEFAULT_AUTH:
        case SqlParser.DEFINER:
        case SqlParser.DELAY_KEY_WRITE:
        case SqlParser.DES_KEY_FILE:
        case SqlParser.DIRECTORY:
        case SqlParser.DISABLE:
        case SqlParser.DISCARD:
        case SqlParser.DISK:
        case SqlParser.DO:
        case SqlParser.DUMPFILE:
        case SqlParser.DUPLICATE:
        case SqlParser.DYNAMIC:
        case SqlParser.ENABLE:
        case SqlParser.ENCRYPTION:
        case SqlParser.END:
        case SqlParser.ENDS:
        case SqlParser.ENGINE:
        case SqlParser.ENGINES:
        case SqlParser.ERROR:
        case SqlParser.ERRORS:
        case SqlParser.ESCAPE:
        case SqlParser.EVEN:
        case SqlParser.EVENT:
        case SqlParser.EVENTS:
        case SqlParser.EVERY:
        case SqlParser.EXCHANGE:
        case SqlParser.EXCLUSIVE:
        case SqlParser.EXPIRE:
        case SqlParser.EXPORT:
        case SqlParser.EXTENDED:
        case SqlParser.EXTENT_SIZE:
        case SqlParser.FAST:
        case SqlParser.FAULTS:
        case SqlParser.FIELDS:
        case SqlParser.FILE_BLOCK_SIZE:
        case SqlParser.FILTER:
        case SqlParser.FIRST:
        case SqlParser.FIXED:
        case SqlParser.FLUSH:
        case SqlParser.FOLLOWS:
        case SqlParser.FOUND:
        case SqlParser.FULL:
        case SqlParser.FUNCTION:
        case SqlParser.GENERAL:
        case SqlParser.GLOBAL:
        case SqlParser.GRANTS:
        case SqlParser.GROUP_REPLICATION:
        case SqlParser.HANDLER:
        case SqlParser.HASH:
        case SqlParser.HELP:
        case SqlParser.HOST:
        case SqlParser.HOSTS:
        case SqlParser.IDENTIFIED:
        case SqlParser.IGNORE_SERVER_IDS:
        case SqlParser.IMPORT:
        case SqlParser.INDEXES:
        case SqlParser.INITIAL_SIZE:
        case SqlParser.INPLACE:
        case SqlParser.INSERT_METHOD:
        case SqlParser.INSTALL:
        case SqlParser.INSTANCE:
        case SqlParser.INVISIBLE:
        case SqlParser.INVOKER:
        case SqlParser.IO:
        case SqlParser.IO_THREAD:
        case SqlParser.IPC:
        case SqlParser.ISOLATION:
        case SqlParser.ISSUER:
        case SqlParser.JSON:
        case SqlParser.KEY_BLOCK_SIZE:
        case SqlParser.LANGUAGE:
        case SqlParser.LAST:
        case SqlParser.LEAVES:
        case SqlParser.LESS:
        case SqlParser.LEVEL:
        case SqlParser.LIST:
        case SqlParser.LOCAL:
        case SqlParser.LOGFILE:
        case SqlParser.LOGS:
        case SqlParser.MASTER:
        case SqlParser.MASTER_AUTO_POSITION:
        case SqlParser.MASTER_CONNECT_RETRY:
        case SqlParser.MASTER_DELAY:
        case SqlParser.MASTER_HEARTBEAT_PERIOD:
        case SqlParser.MASTER_HOST:
        case SqlParser.MASTER_LOG_FILE:
        case SqlParser.MASTER_LOG_POS:
        case SqlParser.MASTER_PASSWORD:
        case SqlParser.MASTER_PORT:
        case SqlParser.MASTER_RETRY_COUNT:
        case SqlParser.MASTER_SSL:
        case SqlParser.MASTER_SSL_CA:
        case SqlParser.MASTER_SSL_CAPATH:
        case SqlParser.MASTER_SSL_CERT:
        case SqlParser.MASTER_SSL_CIPHER:
        case SqlParser.MASTER_SSL_CRL:
        case SqlParser.MASTER_SSL_CRLPATH:
        case SqlParser.MASTER_SSL_KEY:
        case SqlParser.MASTER_TLS_VERSION:
        case SqlParser.MASTER_USER:
        case SqlParser.MAX_CONNECTIONS_PER_HOUR:
        case SqlParser.MAX_QUERIES_PER_HOUR:
        case SqlParser.MAX_ROWS:
        case SqlParser.MAX_SIZE:
        case SqlParser.MAX_UPDATES_PER_HOUR:
        case SqlParser.MAX_USER_CONNECTIONS:
        case SqlParser.MEDIUM:
        case SqlParser.MERGE:
        case SqlParser.MESSAGE_TEXT:
        case SqlParser.MID:
        case SqlParser.MIGRATE:
        case SqlParser.MIN_ROWS:
        case SqlParser.MODE:
        case SqlParser.MODIFY:
        case SqlParser.MUTEX:
        case SqlParser.MYSQL:
        case SqlParser.MYSQL_ERRNO:
        case SqlParser.NAME:
        case SqlParser.NAMES:
        case SqlParser.NCHAR:
        case SqlParser.NEVER:
        case SqlParser.NEXT:
        case SqlParser.NO:
        case SqlParser.NODEGROUP:
        case SqlParser.NONE:
        case SqlParser.OFFLINE:
        case SqlParser.OFFSET:
        case SqlParser.OJ:
        case SqlParser.OLD_PASSWORD:
        case SqlParser.ONE:
        case SqlParser.ONLINE:
        case SqlParser.ONLY:
        case SqlParser.OPEN:
        case SqlParser.OPTIMIZER_COSTS:
        case SqlParser.OPTIONS:
        case SqlParser.OWNER:
        case SqlParser.PACK_KEYS:
        case SqlParser.PAGE:
        case SqlParser.PARSER:
        case SqlParser.PARTIAL:
        case SqlParser.PARTITIONING:
        case SqlParser.PARTITIONS:
        case SqlParser.PASSWORD:
        case SqlParser.PHASE:
        case SqlParser.PLUGIN:
        case SqlParser.PLUGIN_DIR:
        case SqlParser.PLUGINS:
        case SqlParser.PORT:
        case SqlParser.PRECEDES:
        case SqlParser.PREPARE:
        case SqlParser.PRESERVE:
        case SqlParser.PREV:
        case SqlParser.PROCESSLIST:
        case SqlParser.PROFILE:
        case SqlParser.PROFILES:
        case SqlParser.PROXY:
        case SqlParser.QUERY:
        case SqlParser.QUICK:
        case SqlParser.REBUILD:
        case SqlParser.RECOVER:
        case SqlParser.REDO_BUFFER_SIZE:
        case SqlParser.REDUNDANT:
        case SqlParser.RELAY:
        case SqlParser.RELAY_LOG_FILE:
        case SqlParser.RELAY_LOG_POS:
        case SqlParser.RELAYLOG:
        case SqlParser.REMOVE:
        case SqlParser.REORGANIZE:
        case SqlParser.REPAIR:
        case SqlParser.REPLICATE_DO_DB:
        case SqlParser.REPLICATE_DO_TABLE:
        case SqlParser.REPLICATE_IGNORE_DB:
        case SqlParser.REPLICATE_IGNORE_TABLE:
        case SqlParser.REPLICATE_REWRITE_DB:
        case SqlParser.REPLICATE_WILD_DO_TABLE:
        case SqlParser.REPLICATE_WILD_IGNORE_TABLE:
        case SqlParser.REPLICATION:
        case SqlParser.RESET:
        case SqlParser.RESUME:
        case SqlParser.RETURNED_SQLSTATE:
        case SqlParser.RETURNS:
        case SqlParser.ROLE:
        case SqlParser.ROLLBACK:
        case SqlParser.ROLLUP:
        case SqlParser.ROTATE:
        case SqlParser.ROW:
        case SqlParser.ROWS:
        case SqlParser.ROW_FORMAT:
        case SqlParser.SAVEPOINT:
        case SqlParser.SCHEDULE:
        case SqlParser.SECURITY:
        case SqlParser.SERVER:
        case SqlParser.SESSION:
        case SqlParser.SHARE:
        case SqlParser.SHARED:
        case SqlParser.SIGNED:
        case SqlParser.SIMPLE:
        case SqlParser.SLAVE:
        case SqlParser.SLOW:
        case SqlParser.SNAPSHOT:
        case SqlParser.SOCKET:
        case SqlParser.SOME:
        case SqlParser.SONAME:
        case SqlParser.SOUNDS:
        case SqlParser.SOURCE:
        case SqlParser.SQL_AFTER_GTIDS:
        case SqlParser.SQL_AFTER_MTS_GAPS:
        case SqlParser.SQL_BEFORE_GTIDS:
        case SqlParser.SQL_BUFFER_RESULT:
        case SqlParser.SQL_CACHE:
        case SqlParser.SQL_NO_CACHE:
        case SqlParser.SQL_THREAD:
        case SqlParser.START:
        case SqlParser.STARTS:
        case SqlParser.STATS_AUTO_RECALC:
        case SqlParser.STATS_PERSISTENT:
        case SqlParser.STATS_SAMPLE_PAGES:
        case SqlParser.STATUS:
        case SqlParser.STOP:
        case SqlParser.STORAGE:
        case SqlParser.STRING:
        case SqlParser.SUBCLASS_ORIGIN:
        case SqlParser.SUBJECT:
        case SqlParser.SUBPARTITION:
        case SqlParser.SUBPARTITIONS:
        case SqlParser.SUSPEND:
        case SqlParser.SWAPS:
        case SqlParser.SWITCHES:
        case SqlParser.TABLE_NAME:
        case SqlParser.TABLESPACE:
        case SqlParser.TEMPORARY:
        case SqlParser.TEMPTABLE:
        case SqlParser.THAN:
        case SqlParser.TRADITIONAL:
        case SqlParser.TRANSACTION:
        case SqlParser.TRANSACTIONAL:
        case SqlParser.TRIGGERS:
        case SqlParser.TRUNCATE:
        case SqlParser.UNDEFINED:
        case SqlParser.UNDOFILE:
        case SqlParser.UNDO_BUFFER_SIZE:
        case SqlParser.UNINSTALL:
        case SqlParser.UNKNOWN:
        case SqlParser.UNTIL:
        case SqlParser.UPGRADE:
        case SqlParser.USER:
        case SqlParser.USE_FRM:
        case SqlParser.USER_RESOURCES:
        case SqlParser.VALIDATION:
        case SqlParser.VALUE:
        case SqlParser.VARIABLES:
        case SqlParser.VIEW:
        case SqlParser.VISIBLE:
        case SqlParser.WAIT:
        case SqlParser.WARNINGS:
        case SqlParser.WITHOUT:
        case SqlParser.WORK:
        case SqlParser.WRAPPER:
        case SqlParser.X509:
        case SqlParser.XA:
        case SqlParser.XML:
        case SqlParser.INTERNAL:
        case SqlParser.QUARTER:
        case SqlParser.MONTH:
        case SqlParser.DAY:
        case SqlParser.HOUR:
        case SqlParser.MINUTE:
        case SqlParser.WEEK:
        case SqlParser.SECOND:
        case SqlParser.MICROSECOND:
        case SqlParser.TABLES:
        case SqlParser.ROUTINE:
        case SqlParser.EXECUTE:
        case SqlParser.FILE:
        case SqlParser.PROCESS:
        case SqlParser.RELOAD:
        case SqlParser.SHUTDOWN:
        case SqlParser.SUPER:
        case SqlParser.PRIVILEGES:
        case SqlParser.AUDIT_ADMIN:
        case SqlParser.BACKUP_ADMIN:
        case SqlParser.BINLOG_ADMIN:
        case SqlParser.BINLOG_ENCRYPTION_ADMIN:
        case SqlParser.CLONE_ADMIN:
        case SqlParser.CONNECTION_ADMIN:
        case SqlParser.ENCRYPTION_KEY_ADMIN:
        case SqlParser.FIREWALL_ADMIN:
        case SqlParser.FIREWALL_USER:
        case SqlParser.GROUP_REPLICATION_ADMIN:
        case SqlParser.INNODB_REDO_LOG_ARCHIVE:
        case SqlParser.NDB_STORED_USER:
        case SqlParser.PERSIST_RO_VARIABLES_ADMIN:
        case SqlParser.REPLICATION_APPLIER:
        case SqlParser.REPLICATION_SLAVE_ADMIN:
        case SqlParser.RESOURCE_GROUP_ADMIN:
        case SqlParser.RESOURCE_GROUP_USER:
        case SqlParser.ROLE_ADMIN:
        case SqlParser.SESSION_VARIABLES_ADMIN:
        case SqlParser.SET_USER_ID:
        case SqlParser.SHOW_ROUTINE:
        case SqlParser.SYSTEM_VARIABLES_ADMIN:
        case SqlParser.TABLE_ENCRYPTION_ADMIN:
        case SqlParser.VERSION_TOKEN_ADMIN:
        case SqlParser.XA_RECOVER_ADMIN:
        case SqlParser.ARMSCII8:
        case SqlParser.ASCII:
        case SqlParser.BIG5:
        case SqlParser.CP1250:
        case SqlParser.CP1251:
        case SqlParser.CP1256:
        case SqlParser.CP1257:
        case SqlParser.CP850:
        case SqlParser.CP852:
        case SqlParser.CP866:
        case SqlParser.CP932:
        case SqlParser.DEC8:
        case SqlParser.EUCJPMS:
        case SqlParser.EUCKR:
        case SqlParser.GB2312:
        case SqlParser.GBK:
        case SqlParser.GEOSTD8:
        case SqlParser.GREEK:
        case SqlParser.HEBREW:
        case SqlParser.HP8:
        case SqlParser.KEYBCS2:
        case SqlParser.KOI8R:
        case SqlParser.KOI8U:
        case SqlParser.LATIN1:
        case SqlParser.LATIN2:
        case SqlParser.LATIN5:
        case SqlParser.LATIN7:
        case SqlParser.MACCE:
        case SqlParser.MACROMAN:
        case SqlParser.SJIS:
        case SqlParser.SWE7:
        case SqlParser.TIS620:
        case SqlParser.UCS2:
        case SqlParser.UJIS:
        case SqlParser.UTF16:
        case SqlParser.UTF16LE:
        case SqlParser.UTF32:
        case SqlParser.UTF8:
        case SqlParser.UTF8MB3:
        case SqlParser.UTF8MB4:
        case SqlParser.ARCHIVE:
        case SqlParser.BLACKHOLE:
        case SqlParser.CSV:
        case SqlParser.FEDERATED:
        case SqlParser.INNODB:
        case SqlParser.MEMORY:
        case SqlParser.MRG_MYISAM:
        case SqlParser.MYISAM:
        case SqlParser.NDB:
        case SqlParser.NDBCLUSTER:
        case SqlParser.PERFORMANCE_SCHEMA:
        case SqlParser.TOKUDB:
        case SqlParser.REPEATABLE:
        case SqlParser.COMMITTED:
        case SqlParser.UNCOMMITTED:
        case SqlParser.SERIALIZABLE:
        case SqlParser.GEOMETRYCOLLECTION:
        case SqlParser.LINESTRING:
        case SqlParser.MULTILINESTRING:
        case SqlParser.MULTIPOINT:
        case SqlParser.MULTIPOLYGON:
        case SqlParser.POINT:
        case SqlParser.POLYGON:
        case SqlParser.ABS:
        case SqlParser.ACOS:
        case SqlParser.ADDDATE:
        case SqlParser.ADDTIME:
        case SqlParser.AES_DECRYPT:
        case SqlParser.AES_ENCRYPT:
        case SqlParser.AREA:
        case SqlParser.ASBINARY:
        case SqlParser.ASIN:
        case SqlParser.ASTEXT:
        case SqlParser.ASWKB:
        case SqlParser.ASWKT:
        case SqlParser.ASYMMETRIC_DECRYPT:
        case SqlParser.ASYMMETRIC_DERIVE:
        case SqlParser.ASYMMETRIC_ENCRYPT:
        case SqlParser.ASYMMETRIC_SIGN:
        case SqlParser.ASYMMETRIC_VERIFY:
        case SqlParser.ATAN:
        case SqlParser.ATAN2:
        case SqlParser.BENCHMARK:
        case SqlParser.BIN:
        case SqlParser.BIT_COUNT:
        case SqlParser.BIT_LENGTH:
        case SqlParser.BUFFER:
        case SqlParser.CATALOG_NAME:
        case SqlParser.CEIL:
        case SqlParser.CEILING:
        case SqlParser.CENTROID:
        case SqlParser.CHARACTER_LENGTH:
        case SqlParser.CHARSET:
        case SqlParser.CHAR_LENGTH:
        case SqlParser.COERCIBILITY:
        case SqlParser.COLLATION:
        case SqlParser.COMPRESS:
        case SqlParser.CONCAT:
        case SqlParser.CONCAT_WS:
        case SqlParser.CONNECTION_ID:
        case SqlParser.CONV:
        case SqlParser.CONVERT_TZ:
        case SqlParser.COS:
        case SqlParser.COT:
        case SqlParser.CRC32:
        case SqlParser.CREATE_ASYMMETRIC_PRIV_KEY:
        case SqlParser.CREATE_ASYMMETRIC_PUB_KEY:
        case SqlParser.CREATE_DH_PARAMETERS:
        case SqlParser.CREATE_DIGEST:
        case SqlParser.CROSSES:
        case SqlParser.DATEDIFF:
        case SqlParser.DATE_FORMAT:
        case SqlParser.DAYNAME:
        case SqlParser.DAYOFMONTH:
        case SqlParser.DAYOFWEEK:
        case SqlParser.DAYOFYEAR:
        case SqlParser.DECODE:
        case SqlParser.DEGREES:
        case SqlParser.DES_DECRYPT:
        case SqlParser.DES_ENCRYPT:
        case SqlParser.DIMENSION:
        case SqlParser.DISJOINT:
        case SqlParser.ELT:
        case SqlParser.ENCODE:
        case SqlParser.ENCRYPT:
        case SqlParser.ENDPOINT:
        case SqlParser.ENVELOPE:
        case SqlParser.EQUALS:
        case SqlParser.EXP:
        case SqlParser.EXPORT_SET:
        case SqlParser.EXTERIORRING:
        case SqlParser.EXTRACTVALUE:
        case SqlParser.FIELD:
        case SqlParser.FIND_IN_SET:
        case SqlParser.FLOOR:
        case SqlParser.FORMAT:
        case SqlParser.FOUND_ROWS:
        case SqlParser.FROM_BASE64:
        case SqlParser.FROM_DAYS:
        case SqlParser.FROM_UNIXTIME:
        case SqlParser.GEOMCOLLFROMTEXT:
        case SqlParser.GEOMCOLLFROMWKB:
        case SqlParser.GEOMETRYCOLLECTIONFROMTEXT:
        case SqlParser.GEOMETRYCOLLECTIONFROMWKB:
        case SqlParser.GEOMETRYFROMTEXT:
        case SqlParser.GEOMETRYFROMWKB:
        case SqlParser.GEOMETRYN:
        case SqlParser.GEOMETRYTYPE:
        case SqlParser.GEOMFROMTEXT:
        case SqlParser.GEOMFROMWKB:
        case SqlParser.GET_FORMAT:
        case SqlParser.GET_LOCK:
        case SqlParser.GLENGTH:
        case SqlParser.GREATEST:
        case SqlParser.GTID_SUBSET:
        case SqlParser.GTID_SUBTRACT:
        case SqlParser.HEX:
        case SqlParser.IFNULL:
        case SqlParser.INET6_ATON:
        case SqlParser.INET6_NTOA:
        case SqlParser.INET_ATON:
        case SqlParser.INET_NTOA:
        case SqlParser.INSTR:
        case SqlParser.INTERIORRINGN:
        case SqlParser.INTERSECTS:
        case SqlParser.ISCLOSED:
        case SqlParser.ISEMPTY:
        case SqlParser.ISNULL:
        case SqlParser.ISSIMPLE:
        case SqlParser.IS_FREE_LOCK:
        case SqlParser.IS_IPV4:
        case SqlParser.IS_IPV4_COMPAT:
        case SqlParser.IS_IPV4_MAPPED:
        case SqlParser.IS_IPV6:
        case SqlParser.IS_USED_LOCK:
        case SqlParser.LAST_INSERT_ID:
        case SqlParser.LCASE:
        case SqlParser.LEAST:
        case SqlParser.LENGTH:
        case SqlParser.LINEFROMTEXT:
        case SqlParser.LINEFROMWKB:
        case SqlParser.LINESTRINGFROMTEXT:
        case SqlParser.LINESTRINGFROMWKB:
        case SqlParser.LN:
        case SqlParser.LOAD_FILE:
        case SqlParser.LOCATE:
        case SqlParser.LOG:
        case SqlParser.LOG10:
        case SqlParser.LOG2:
        case SqlParser.LOWER:
        case SqlParser.LPAD:
        case SqlParser.LTRIM:
        case SqlParser.MAKEDATE:
        case SqlParser.MAKETIME:
        case SqlParser.MAKE_SET:
        case SqlParser.MASTER_POS_WAIT:
        case SqlParser.MBRCONTAINS:
        case SqlParser.MBRDISJOINT:
        case SqlParser.MBREQUAL:
        case SqlParser.MBRINTERSECTS:
        case SqlParser.MBROVERLAPS:
        case SqlParser.MBRTOUCHES:
        case SqlParser.MBRWITHIN:
        case SqlParser.MD5:
        case SqlParser.MLINEFROMTEXT:
        case SqlParser.MLINEFROMWKB:
        case SqlParser.MONTHNAME:
        case SqlParser.MPOINTFROMTEXT:
        case SqlParser.MPOINTFROMWKB:
        case SqlParser.MPOLYFROMTEXT:
        case SqlParser.MPOLYFROMWKB:
        case SqlParser.MULTILINESTRINGFROMTEXT:
        case SqlParser.MULTILINESTRINGFROMWKB:
        case SqlParser.MULTIPOINTFROMTEXT:
        case SqlParser.MULTIPOINTFROMWKB:
        case SqlParser.MULTIPOLYGONFROMTEXT:
        case SqlParser.MULTIPOLYGONFROMWKB:
        case SqlParser.NAME_CONST:
        case SqlParser.NULLIF:
        case SqlParser.NUMGEOMETRIES:
        case SqlParser.NUMINTERIORRINGS:
        case SqlParser.NUMPOINTS:
        case SqlParser.OCT:
        case SqlParser.OCTET_LENGTH:
        case SqlParser.ORD:
        case SqlParser.OVERLAPS:
        case SqlParser.PERIOD_ADD:
        case SqlParser.PERIOD_DIFF:
        case SqlParser.PI:
        case SqlParser.POINTFROMTEXT:
        case SqlParser.POINTFROMWKB:
        case SqlParser.POINTN:
        case SqlParser.POLYFROMTEXT:
        case SqlParser.POLYFROMWKB:
        case SqlParser.POLYGONFROMTEXT:
        case SqlParser.POLYGONFROMWKB:
        case SqlParser.POW:
        case SqlParser.POWER:
        case SqlParser.QUOTE:
        case SqlParser.RADIANS:
        case SqlParser.RAND:
        case SqlParser.RANDOM_BYTES:
        case SqlParser.RELEASE_LOCK:
        case SqlParser.REVERSE:
        case SqlParser.ROUND:
        case SqlParser.ROW_COUNT:
        case SqlParser.RPAD:
        case SqlParser.RTRIM:
        case SqlParser.SEC_TO_TIME:
        case SqlParser.SESSION_USER:
        case SqlParser.SHA:
        case SqlParser.SHA1:
        case SqlParser.SHA2:
        case SqlParser.SCHEMA_NAME:
        case SqlParser.SIGN:
        case SqlParser.SIN:
        case SqlParser.SLEEP:
        case SqlParser.SOUNDEX:
        case SqlParser.SQL_THREAD_WAIT_AFTER_GTIDS:
        case SqlParser.SQRT:
        case SqlParser.SRID:
        case SqlParser.STARTPOINT:
        case SqlParser.STRCMP:
        case SqlParser.STR_TO_DATE:
        case SqlParser.ST_AREA:
        case SqlParser.ST_ASBINARY:
        case SqlParser.ST_ASTEXT:
        case SqlParser.ST_ASWKB:
        case SqlParser.ST_ASWKT:
        case SqlParser.ST_BUFFER:
        case SqlParser.ST_CENTROID:
        case SqlParser.ST_CONTAINS:
        case SqlParser.ST_CROSSES:
        case SqlParser.ST_DIFFERENCE:
        case SqlParser.ST_DIMENSION:
        case SqlParser.ST_DISJOINT:
        case SqlParser.ST_DISTANCE:
        case SqlParser.ST_ENDPOINT:
        case SqlParser.ST_ENVELOPE:
        case SqlParser.ST_EQUALS:
        case SqlParser.ST_EXTERIORRING:
        case SqlParser.ST_GEOMCOLLFROMTEXT:
        case SqlParser.ST_GEOMCOLLFROMTXT:
        case SqlParser.ST_GEOMCOLLFROMWKB:
        case SqlParser.ST_GEOMETRYCOLLECTIONFROMTEXT:
        case SqlParser.ST_GEOMETRYCOLLECTIONFROMWKB:
        case SqlParser.ST_GEOMETRYFROMTEXT:
        case SqlParser.ST_GEOMETRYFROMWKB:
        case SqlParser.ST_GEOMETRYN:
        case SqlParser.ST_GEOMETRYTYPE:
        case SqlParser.ST_GEOMFROMTEXT:
        case SqlParser.ST_GEOMFROMWKB:
        case SqlParser.ST_INTERIORRINGN:
        case SqlParser.ST_INTERSECTION:
        case SqlParser.ST_INTERSECTS:
        case SqlParser.ST_ISCLOSED:
        case SqlParser.ST_ISEMPTY:
        case SqlParser.ST_ISSIMPLE:
        case SqlParser.ST_LINEFROMTEXT:
        case SqlParser.ST_LINEFROMWKB:
        case SqlParser.ST_LINESTRINGFROMTEXT:
        case SqlParser.ST_LINESTRINGFROMWKB:
        case SqlParser.ST_NUMGEOMETRIES:
        case SqlParser.ST_NUMINTERIORRING:
        case SqlParser.ST_NUMINTERIORRINGS:
        case SqlParser.ST_NUMPOINTS:
        case SqlParser.ST_OVERLAPS:
        case SqlParser.ST_POINTFROMTEXT:
        case SqlParser.ST_POINTFROMWKB:
        case SqlParser.ST_POINTN:
        case SqlParser.ST_POLYFROMTEXT:
        case SqlParser.ST_POLYFROMWKB:
        case SqlParser.ST_POLYGONFROMTEXT:
        case SqlParser.ST_POLYGONFROMWKB:
        case SqlParser.ST_SRID:
        case SqlParser.ST_STARTPOINT:
        case SqlParser.ST_SYMDIFFERENCE:
        case SqlParser.ST_TOUCHES:
        case SqlParser.ST_UNION:
        case SqlParser.ST_WITHIN:
        case SqlParser.ST_X:
        case SqlParser.ST_Y:
        case SqlParser.SUBDATE:
        case SqlParser.SUBSTRING_INDEX:
        case SqlParser.SUBTIME:
        case SqlParser.SYSTEM_USER:
        case SqlParser.TAN:
        case SqlParser.TIMEDIFF:
        case SqlParser.TIMESTAMPADD:
        case SqlParser.TIMESTAMPDIFF:
        case SqlParser.TIME_FORMAT:
        case SqlParser.TIME_TO_SEC:
        case SqlParser.TOUCHES:
        case SqlParser.TO_BASE64:
        case SqlParser.TO_DAYS:
        case SqlParser.TO_SECONDS:
        case SqlParser.UCASE:
        case SqlParser.UNCOMPRESS:
        case SqlParser.UNCOMPRESSED_LENGTH:
        case SqlParser.UNHEX:
        case SqlParser.UNIX_TIMESTAMP:
        case SqlParser.UPDATEXML:
        case SqlParser.UPPER:
        case SqlParser.UUID:
        case SqlParser.UUID_SHORT:
        case SqlParser.VALIDATE_PASSWORD_STRENGTH:
        case SqlParser.VERSION:
        case SqlParser.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS:
        case SqlParser.WEEKDAY:
        case SqlParser.WEEKOFYEAR:
        case SqlParser.WEIGHT_STRING:
        case SqlParser.WITHIN:
        case SqlParser.YEARWEEK:
        case SqlParser.Y_FUNCTION:
        case SqlParser.X_FUNCTION:
        case SqlParser.MINUSMINUS:
        case SqlParser.MINUS:
        case SqlParser.COMMA:
        case SqlParser.SEMI:
        case SqlParser.ZERO_DECIMAL:
        case SqlParser.ONE_DECIMAL:
        case SqlParser.TWO_DECIMAL:
        case SqlParser.STRING_LITERAL:
        case SqlParser.DECIMAL_LITERAL:
        case SqlParser.HEXADECIMAL_LITERAL:
        case SqlParser.REAL_LITERAL:
        case SqlParser.NULL_SPEC_LITERAL:
        case SqlParser.STRING_CHARSET_NAME:
        case SqlParser.ID:
        case SqlParser.DOUBLE_QUOTE_ID:
        case SqlParser.REVERSE_QUOTE_ID:
        case SqlParser.BLOCKED_QUOTE_ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 236;
            this.selectElement();
            this.state = 241;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 237;
                    this.match(SqlParser.COMMA);
                    this.state = 238;
                    this.selectElement(); 
                }
                this.state = 243;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
            }

            this.state = 246;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.COMMA) {
                this.state = 244;
                this.match(SqlParser.COMMA);
                this.state = 245;
                localctx.star = this.match(SqlParser.STAR);
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_selectElement;
    this.starOf = null; // FullIdContext
    this.column = null; // FullColumnNameContext
    this.alias = null; // UidContext
    this.value = null; // ConstantContext
    return this;
}

SelectElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectElementContext.prototype.constructor = SelectElementContext;

SelectElementContext.prototype.DOT = function() {
    return this.getToken(SqlParser.DOT, 0);
};

SelectElementContext.prototype.STAR = function() {
    return this.getToken(SqlParser.STAR, 0);
};

SelectElementContext.prototype.fullId = function() {
    return this.getTypedRuleContext(FullIdContext,0);
};

SelectElementContext.prototype.fullColumnName = function() {
    return this.getTypedRuleContext(FullColumnNameContext,0);
};

SelectElementContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

SelectElementContext.prototype.AS = function() {
    return this.getToken(SqlParser.AS, 0);
};

SelectElementContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

SelectElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitSelectElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.SelectElementContext = SelectElementContext;

SqlParser.prototype.selectElement = function() {

    var localctx = new SelectElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SqlParser.RULE_selectElement);
    var _la = 0; // Token type
    try {
        this.state = 268;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 250;
            localctx.starOf = this.fullId();
            this.state = 251;
            this.match(SqlParser.DOT);
            this.state = 252;
            this.match(SqlParser.STAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 254;
            localctx.column = this.fullColumnName();
            this.state = 259;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.AS || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (SqlParser.CURRENT - 32)) | (1 << (SqlParser.DATABASE - 32)) | (1 << (SqlParser.DIAGNOSTICS - 32)))) !== 0) || _la===SqlParser.LEFT || _la===SqlParser.NUMBER || _la===SqlParser.RIGHT || _la===SqlParser.STACKED || ((((_la - 199)) & ~0x1f) == 0 && ((1 << (_la - 199)) & ((1 << (SqlParser.DATE - 199)) | (1 << (SqlParser.TIME - 199)) | (1 << (SqlParser.TIMESTAMP - 199)) | (1 << (SqlParser.DATETIME - 199)) | (1 << (SqlParser.YEAR - 199)) | (1 << (SqlParser.TEXT - 199)) | (1 << (SqlParser.ENUM - 199)) | (1 << (SqlParser.SERIAL - 199)))) !== 0) || ((((_la - 233)) & ~0x1f) == 0 && ((1 << (_la - 233)) & ((1 << (SqlParser.JSON_VALID - 233)) | (1 << (SqlParser.JSON_SCHEMA_VALID - 233)) | (1 << (SqlParser.COUNT - 233)) | (1 << (SqlParser.POSITION - 233)))) !== 0) || ((((_la - 270)) & ~0x1f) == 0 && ((1 << (_la - 270)) & ((1 << (SqlParser.ACCOUNT - 270)) | (1 << (SqlParser.ACTION - 270)) | (1 << (SqlParser.AFTER - 270)) | (1 << (SqlParser.AGGREGATE - 270)) | (1 << (SqlParser.ALGORITHM - 270)) | (1 << (SqlParser.ANY - 270)) | (1 << (SqlParser.AT - 270)) | (1 << (SqlParser.AUTHORS - 270)) | (1 << (SqlParser.AUTOCOMMIT - 270)) | (1 << (SqlParser.AUTOEXTEND_SIZE - 270)) | (1 << (SqlParser.AUTO_INCREMENT - 270)) | (1 << (SqlParser.AVG_ROW_LENGTH - 270)) | (1 << (SqlParser.BEGIN - 270)) | (1 << (SqlParser.BINLOG - 270)) | (1 << (SqlParser.BIT - 270)) | (1 << (SqlParser.BLOCK - 270)) | (1 << (SqlParser.BOOL - 270)) | (1 << (SqlParser.BOOLEAN - 270)) | (1 << (SqlParser.BTREE - 270)) | (1 << (SqlParser.CACHE - 270)) | (1 << (SqlParser.CASCADED - 270)) | (1 << (SqlParser.CHAIN - 270)) | (1 << (SqlParser.CHANGED - 270)) | (1 << (SqlParser.CHANNEL - 270)) | (1 << (SqlParser.CHECKSUM - 270)) | (1 << (SqlParser.PAGE_CHECKSUM - 270)) | (1 << (SqlParser.CIPHER - 270)) | (1 << (SqlParser.CLASS_ORIGIN - 270)) | (1 << (SqlParser.CLIENT - 270)) | (1 << (SqlParser.CLOSE - 270)) | (1 << (SqlParser.COALESCE - 270)) | (1 << (SqlParser.CODE - 270)))) !== 0) || ((((_la - 302)) & ~0x1f) == 0 && ((1 << (_la - 302)) & ((1 << (SqlParser.COLUMNS - 302)) | (1 << (SqlParser.COLUMN_FORMAT - 302)) | (1 << (SqlParser.COLUMN_NAME - 302)) | (1 << (SqlParser.COMMENT - 302)) | (1 << (SqlParser.COMMIT - 302)) | (1 << (SqlParser.COMPACT - 302)) | (1 << (SqlParser.COMPLETION - 302)) | (1 << (SqlParser.COMPRESSED - 302)) | (1 << (SqlParser.COMPRESSION - 302)) | (1 << (SqlParser.CONCURRENT - 302)) | (1 << (SqlParser.CONNECTION - 302)) | (1 << (SqlParser.CONSISTENT - 302)) | (1 << (SqlParser.CONSTRAINT_CATALOG - 302)) | (1 << (SqlParser.CONSTRAINT_SCHEMA - 302)) | (1 << (SqlParser.CONSTRAINT_NAME - 302)) | (1 << (SqlParser.CONTAINS - 302)) | (1 << (SqlParser.CONTEXT - 302)) | (1 << (SqlParser.CONTRIBUTORS - 302)) | (1 << (SqlParser.COPY - 302)) | (1 << (SqlParser.CPU - 302)) | (1 << (SqlParser.CURSOR_NAME - 302)) | (1 << (SqlParser.DATA - 302)) | (1 << (SqlParser.DATAFILE - 302)) | (1 << (SqlParser.DEALLOCATE - 302)) | (1 << (SqlParser.DEFAULT_AUTH - 302)) | (1 << (SqlParser.DEFINER - 302)) | (1 << (SqlParser.DELAY_KEY_WRITE - 302)) | (1 << (SqlParser.DES_KEY_FILE - 302)) | (1 << (SqlParser.DIRECTORY - 302)) | (1 << (SqlParser.DISABLE - 302)) | (1 << (SqlParser.DISCARD - 302)) | (1 << (SqlParser.DISK - 302)))) !== 0) || ((((_la - 334)) & ~0x1f) == 0 && ((1 << (_la - 334)) & ((1 << (SqlParser.DO - 334)) | (1 << (SqlParser.DUMPFILE - 334)) | (1 << (SqlParser.DUPLICATE - 334)) | (1 << (SqlParser.DYNAMIC - 334)) | (1 << (SqlParser.ENABLE - 334)) | (1 << (SqlParser.ENCRYPTION - 334)) | (1 << (SqlParser.END - 334)) | (1 << (SqlParser.ENDS - 334)) | (1 << (SqlParser.ENGINE - 334)) | (1 << (SqlParser.ENGINES - 334)) | (1 << (SqlParser.ERROR - 334)) | (1 << (SqlParser.ERRORS - 334)) | (1 << (SqlParser.ESCAPE - 334)) | (1 << (SqlParser.EVEN - 334)) | (1 << (SqlParser.EVENT - 334)) | (1 << (SqlParser.EVENTS - 334)) | (1 << (SqlParser.EVERY - 334)) | (1 << (SqlParser.EXCHANGE - 334)) | (1 << (SqlParser.EXCLUSIVE - 334)) | (1 << (SqlParser.EXPIRE - 334)) | (1 << (SqlParser.EXPORT - 334)) | (1 << (SqlParser.EXTENDED - 334)) | (1 << (SqlParser.EXTENT_SIZE - 334)) | (1 << (SqlParser.FAST - 334)) | (1 << (SqlParser.FAULTS - 334)) | (1 << (SqlParser.FIELDS - 334)) | (1 << (SqlParser.FILE_BLOCK_SIZE - 334)) | (1 << (SqlParser.FILTER - 334)) | (1 << (SqlParser.FIRST - 334)) | (1 << (SqlParser.FIXED - 334)) | (1 << (SqlParser.FLUSH - 334)) | (1 << (SqlParser.FOLLOWS - 334)))) !== 0) || ((((_la - 366)) & ~0x1f) == 0 && ((1 << (_la - 366)) & ((1 << (SqlParser.FOUND - 366)) | (1 << (SqlParser.FULL - 366)) | (1 << (SqlParser.FUNCTION - 366)) | (1 << (SqlParser.GENERAL - 366)) | (1 << (SqlParser.GLOBAL - 366)) | (1 << (SqlParser.GRANTS - 366)) | (1 << (SqlParser.GROUP_REPLICATION - 366)) | (1 << (SqlParser.HANDLER - 366)) | (1 << (SqlParser.HASH - 366)) | (1 << (SqlParser.HELP - 366)) | (1 << (SqlParser.HOST - 366)) | (1 << (SqlParser.HOSTS - 366)) | (1 << (SqlParser.IDENTIFIED - 366)) | (1 << (SqlParser.IGNORE_SERVER_IDS - 366)) | (1 << (SqlParser.IMPORT - 366)) | (1 << (SqlParser.INDEXES - 366)) | (1 << (SqlParser.INITIAL_SIZE - 366)) | (1 << (SqlParser.INPLACE - 366)) | (1 << (SqlParser.INSERT_METHOD - 366)) | (1 << (SqlParser.INSTALL - 366)) | (1 << (SqlParser.INSTANCE - 366)) | (1 << (SqlParser.INVISIBLE - 366)) | (1 << (SqlParser.INVOKER - 366)) | (1 << (SqlParser.IO - 366)) | (1 << (SqlParser.IO_THREAD - 366)) | (1 << (SqlParser.IPC - 366)) | (1 << (SqlParser.ISOLATION - 366)) | (1 << (SqlParser.ISSUER - 366)) | (1 << (SqlParser.JSON - 366)) | (1 << (SqlParser.KEY_BLOCK_SIZE - 366)) | (1 << (SqlParser.LANGUAGE - 366)) | (1 << (SqlParser.LAST - 366)))) !== 0) || ((((_la - 398)) & ~0x1f) == 0 && ((1 << (_la - 398)) & ((1 << (SqlParser.LEAVES - 398)) | (1 << (SqlParser.LESS - 398)) | (1 << (SqlParser.LEVEL - 398)) | (1 << (SqlParser.LIST - 398)) | (1 << (SqlParser.LOCAL - 398)) | (1 << (SqlParser.LOGFILE - 398)) | (1 << (SqlParser.LOGS - 398)) | (1 << (SqlParser.MASTER - 398)) | (1 << (SqlParser.MASTER_AUTO_POSITION - 398)) | (1 << (SqlParser.MASTER_CONNECT_RETRY - 398)) | (1 << (SqlParser.MASTER_DELAY - 398)) | (1 << (SqlParser.MASTER_HEARTBEAT_PERIOD - 398)) | (1 << (SqlParser.MASTER_HOST - 398)) | (1 << (SqlParser.MASTER_LOG_FILE - 398)) | (1 << (SqlParser.MASTER_LOG_POS - 398)) | (1 << (SqlParser.MASTER_PASSWORD - 398)) | (1 << (SqlParser.MASTER_PORT - 398)) | (1 << (SqlParser.MASTER_RETRY_COUNT - 398)) | (1 << (SqlParser.MASTER_SSL - 398)) | (1 << (SqlParser.MASTER_SSL_CA - 398)) | (1 << (SqlParser.MASTER_SSL_CAPATH - 398)) | (1 << (SqlParser.MASTER_SSL_CERT - 398)) | (1 << (SqlParser.MASTER_SSL_CIPHER - 398)) | (1 << (SqlParser.MASTER_SSL_CRL - 398)) | (1 << (SqlParser.MASTER_SSL_CRLPATH - 398)) | (1 << (SqlParser.MASTER_SSL_KEY - 398)) | (1 << (SqlParser.MASTER_TLS_VERSION - 398)) | (1 << (SqlParser.MASTER_USER - 398)) | (1 << (SqlParser.MAX_CONNECTIONS_PER_HOUR - 398)) | (1 << (SqlParser.MAX_QUERIES_PER_HOUR - 398)) | (1 << (SqlParser.MAX_ROWS - 398)) | (1 << (SqlParser.MAX_SIZE - 398)))) !== 0) || ((((_la - 430)) & ~0x1f) == 0 && ((1 << (_la - 430)) & ((1 << (SqlParser.MAX_UPDATES_PER_HOUR - 430)) | (1 << (SqlParser.MAX_USER_CONNECTIONS - 430)) | (1 << (SqlParser.MEDIUM - 430)) | (1 << (SqlParser.MERGE - 430)) | (1 << (SqlParser.MESSAGE_TEXT - 430)) | (1 << (SqlParser.MID - 430)) | (1 << (SqlParser.MIGRATE - 430)) | (1 << (SqlParser.MIN_ROWS - 430)) | (1 << (SqlParser.MODE - 430)) | (1 << (SqlParser.MODIFY - 430)) | (1 << (SqlParser.MUTEX - 430)) | (1 << (SqlParser.MYSQL - 430)) | (1 << (SqlParser.MYSQL_ERRNO - 430)) | (1 << (SqlParser.NAME - 430)) | (1 << (SqlParser.NAMES - 430)) | (1 << (SqlParser.NCHAR - 430)) | (1 << (SqlParser.NEVER - 430)) | (1 << (SqlParser.NEXT - 430)) | (1 << (SqlParser.NO - 430)) | (1 << (SqlParser.NODEGROUP - 430)) | (1 << (SqlParser.NONE - 430)) | (1 << (SqlParser.OFFLINE - 430)) | (1 << (SqlParser.OFFSET - 430)) | (1 << (SqlParser.OJ - 430)) | (1 << (SqlParser.OLD_PASSWORD - 430)) | (1 << (SqlParser.ONE - 430)) | (1 << (SqlParser.ONLINE - 430)) | (1 << (SqlParser.ONLY - 430)) | (1 << (SqlParser.OPEN - 430)) | (1 << (SqlParser.OPTIMIZER_COSTS - 430)) | (1 << (SqlParser.OPTIONS - 430)) | (1 << (SqlParser.OWNER - 430)))) !== 0) || ((((_la - 462)) & ~0x1f) == 0 && ((1 << (_la - 462)) & ((1 << (SqlParser.PACK_KEYS - 462)) | (1 << (SqlParser.PAGE - 462)) | (1 << (SqlParser.PARSER - 462)) | (1 << (SqlParser.PARTIAL - 462)) | (1 << (SqlParser.PARTITIONING - 462)) | (1 << (SqlParser.PARTITIONS - 462)) | (1 << (SqlParser.PASSWORD - 462)) | (1 << (SqlParser.PHASE - 462)) | (1 << (SqlParser.PLUGIN - 462)) | (1 << (SqlParser.PLUGIN_DIR - 462)) | (1 << (SqlParser.PLUGINS - 462)) | (1 << (SqlParser.PORT - 462)) | (1 << (SqlParser.PRECEDES - 462)) | (1 << (SqlParser.PREPARE - 462)) | (1 << (SqlParser.PRESERVE - 462)) | (1 << (SqlParser.PREV - 462)) | (1 << (SqlParser.PROCESSLIST - 462)) | (1 << (SqlParser.PROFILE - 462)) | (1 << (SqlParser.PROFILES - 462)) | (1 << (SqlParser.PROXY - 462)) | (1 << (SqlParser.QUERY - 462)) | (1 << (SqlParser.QUICK - 462)) | (1 << (SqlParser.REBUILD - 462)) | (1 << (SqlParser.RECOVER - 462)) | (1 << (SqlParser.REDO_BUFFER_SIZE - 462)) | (1 << (SqlParser.REDUNDANT - 462)) | (1 << (SqlParser.RELAY - 462)) | (1 << (SqlParser.RELAY_LOG_FILE - 462)) | (1 << (SqlParser.RELAY_LOG_POS - 462)) | (1 << (SqlParser.RELAYLOG - 462)) | (1 << (SqlParser.REMOVE - 462)) | (1 << (SqlParser.REORGANIZE - 462)))) !== 0) || ((((_la - 494)) & ~0x1f) == 0 && ((1 << (_la - 494)) & ((1 << (SqlParser.REPAIR - 494)) | (1 << (SqlParser.REPLICATE_DO_DB - 494)) | (1 << (SqlParser.REPLICATE_DO_TABLE - 494)) | (1 << (SqlParser.REPLICATE_IGNORE_DB - 494)) | (1 << (SqlParser.REPLICATE_IGNORE_TABLE - 494)) | (1 << (SqlParser.REPLICATE_REWRITE_DB - 494)) | (1 << (SqlParser.REPLICATE_WILD_DO_TABLE - 494)) | (1 << (SqlParser.REPLICATE_WILD_IGNORE_TABLE - 494)) | (1 << (SqlParser.REPLICATION - 494)) | (1 << (SqlParser.RESET - 494)) | (1 << (SqlParser.RESUME - 494)) | (1 << (SqlParser.RETURNED_SQLSTATE - 494)) | (1 << (SqlParser.RETURNS - 494)) | (1 << (SqlParser.ROLE - 494)) | (1 << (SqlParser.ROLLBACK - 494)) | (1 << (SqlParser.ROLLUP - 494)) | (1 << (SqlParser.ROTATE - 494)) | (1 << (SqlParser.ROW - 494)) | (1 << (SqlParser.ROWS - 494)) | (1 << (SqlParser.ROW_FORMAT - 494)) | (1 << (SqlParser.SAVEPOINT - 494)) | (1 << (SqlParser.SCHEDULE - 494)) | (1 << (SqlParser.SECURITY - 494)) | (1 << (SqlParser.SERVER - 494)) | (1 << (SqlParser.SESSION - 494)) | (1 << (SqlParser.SHARE - 494)) | (1 << (SqlParser.SHARED - 494)) | (1 << (SqlParser.SIGNED - 494)) | (1 << (SqlParser.SIMPLE - 494)) | (1 << (SqlParser.SLAVE - 494)) | (1 << (SqlParser.SLOW - 494)) | (1 << (SqlParser.SNAPSHOT - 494)))) !== 0) || ((((_la - 526)) & ~0x1f) == 0 && ((1 << (_la - 526)) & ((1 << (SqlParser.SOCKET - 526)) | (1 << (SqlParser.SOME - 526)) | (1 << (SqlParser.SONAME - 526)) | (1 << (SqlParser.SOUNDS - 526)) | (1 << (SqlParser.SOURCE - 526)) | (1 << (SqlParser.SQL_AFTER_GTIDS - 526)) | (1 << (SqlParser.SQL_AFTER_MTS_GAPS - 526)) | (1 << (SqlParser.SQL_BEFORE_GTIDS - 526)) | (1 << (SqlParser.SQL_BUFFER_RESULT - 526)) | (1 << (SqlParser.SQL_CACHE - 526)) | (1 << (SqlParser.SQL_NO_CACHE - 526)) | (1 << (SqlParser.SQL_THREAD - 526)) | (1 << (SqlParser.START - 526)) | (1 << (SqlParser.STARTS - 526)) | (1 << (SqlParser.STATS_AUTO_RECALC - 526)) | (1 << (SqlParser.STATS_PERSISTENT - 526)) | (1 << (SqlParser.STATS_SAMPLE_PAGES - 526)) | (1 << (SqlParser.STATUS - 526)) | (1 << (SqlParser.STOP - 526)) | (1 << (SqlParser.STORAGE - 526)) | (1 << (SqlParser.STRING - 526)) | (1 << (SqlParser.SUBCLASS_ORIGIN - 526)) | (1 << (SqlParser.SUBJECT - 526)) | (1 << (SqlParser.SUBPARTITION - 526)) | (1 << (SqlParser.SUBPARTITIONS - 526)) | (1 << (SqlParser.SUSPEND - 526)) | (1 << (SqlParser.SWAPS - 526)) | (1 << (SqlParser.SWITCHES - 526)) | (1 << (SqlParser.TABLE_NAME - 526)) | (1 << (SqlParser.TABLESPACE - 526)) | (1 << (SqlParser.TEMPORARY - 526)))) !== 0) || ((((_la - 558)) & ~0x1f) == 0 && ((1 << (_la - 558)) & ((1 << (SqlParser.TEMPTABLE - 558)) | (1 << (SqlParser.THAN - 558)) | (1 << (SqlParser.TRADITIONAL - 558)) | (1 << (SqlParser.TRANSACTION - 558)) | (1 << (SqlParser.TRANSACTIONAL - 558)) | (1 << (SqlParser.TRIGGERS - 558)) | (1 << (SqlParser.TRUNCATE - 558)) | (1 << (SqlParser.UNDEFINED - 558)) | (1 << (SqlParser.UNDOFILE - 558)) | (1 << (SqlParser.UNDO_BUFFER_SIZE - 558)) | (1 << (SqlParser.UNINSTALL - 558)) | (1 << (SqlParser.UNKNOWN - 558)) | (1 << (SqlParser.UNTIL - 558)) | (1 << (SqlParser.UPGRADE - 558)) | (1 << (SqlParser.USER - 558)) | (1 << (SqlParser.USE_FRM - 558)) | (1 << (SqlParser.USER_RESOURCES - 558)) | (1 << (SqlParser.VALIDATION - 558)) | (1 << (SqlParser.VALUE - 558)) | (1 << (SqlParser.VARIABLES - 558)) | (1 << (SqlParser.VIEW - 558)) | (1 << (SqlParser.VISIBLE - 558)) | (1 << (SqlParser.WAIT - 558)) | (1 << (SqlParser.WARNINGS - 558)) | (1 << (SqlParser.WITHOUT - 558)) | (1 << (SqlParser.WORK - 558)) | (1 << (SqlParser.WRAPPER - 558)) | (1 << (SqlParser.X509 - 558)) | (1 << (SqlParser.XA - 558)) | (1 << (SqlParser.XML - 558)))) !== 0) || ((((_la - 593)) & ~0x1f) == 0 && ((1 << (_la - 593)) & ((1 << (SqlParser.INTERNAL - 593)) | (1 << (SqlParser.QUARTER - 593)) | (1 << (SqlParser.MONTH - 593)) | (1 << (SqlParser.DAY - 593)) | (1 << (SqlParser.HOUR - 593)) | (1 << (SqlParser.MINUTE - 593)) | (1 << (SqlParser.WEEK - 593)) | (1 << (SqlParser.SECOND - 593)) | (1 << (SqlParser.MICROSECOND - 593)) | (1 << (SqlParser.TABLES - 593)) | (1 << (SqlParser.ROUTINE - 593)) | (1 << (SqlParser.EXECUTE - 593)) | (1 << (SqlParser.FILE - 593)) | (1 << (SqlParser.PROCESS - 593)) | (1 << (SqlParser.RELOAD - 593)) | (1 << (SqlParser.SHUTDOWN - 593)) | (1 << (SqlParser.SUPER - 593)) | (1 << (SqlParser.PRIVILEGES - 593)) | (1 << (SqlParser.AUDIT_ADMIN - 593)) | (1 << (SqlParser.BACKUP_ADMIN - 593)) | (1 << (SqlParser.BINLOG_ADMIN - 593)) | (1 << (SqlParser.BINLOG_ENCRYPTION_ADMIN - 593)) | (1 << (SqlParser.CLONE_ADMIN - 593)) | (1 << (SqlParser.CONNECTION_ADMIN - 593)) | (1 << (SqlParser.ENCRYPTION_KEY_ADMIN - 593)) | (1 << (SqlParser.FIREWALL_ADMIN - 593)) | (1 << (SqlParser.FIREWALL_USER - 593)) | (1 << (SqlParser.GROUP_REPLICATION_ADMIN - 593)) | (1 << (SqlParser.INNODB_REDO_LOG_ARCHIVE - 593)) | (1 << (SqlParser.NDB_STORED_USER - 593)) | (1 << (SqlParser.PERSIST_RO_VARIABLES_ADMIN - 593)))) !== 0) || ((((_la - 625)) & ~0x1f) == 0 && ((1 << (_la - 625)) & ((1 << (SqlParser.REPLICATION_APPLIER - 625)) | (1 << (SqlParser.REPLICATION_SLAVE_ADMIN - 625)) | (1 << (SqlParser.RESOURCE_GROUP_ADMIN - 625)) | (1 << (SqlParser.RESOURCE_GROUP_USER - 625)) | (1 << (SqlParser.ROLE_ADMIN - 625)) | (1 << (SqlParser.SESSION_VARIABLES_ADMIN - 625)) | (1 << (SqlParser.SET_USER_ID - 625)) | (1 << (SqlParser.SHOW_ROUTINE - 625)) | (1 << (SqlParser.SYSTEM_VARIABLES_ADMIN - 625)) | (1 << (SqlParser.TABLE_ENCRYPTION_ADMIN - 625)) | (1 << (SqlParser.VERSION_TOKEN_ADMIN - 625)) | (1 << (SqlParser.XA_RECOVER_ADMIN - 625)) | (1 << (SqlParser.ARMSCII8 - 625)) | (1 << (SqlParser.ASCII - 625)) | (1 << (SqlParser.BIG5 - 625)) | (1 << (SqlParser.CP1250 - 625)) | (1 << (SqlParser.CP1251 - 625)) | (1 << (SqlParser.CP1256 - 625)) | (1 << (SqlParser.CP1257 - 625)) | (1 << (SqlParser.CP850 - 625)) | (1 << (SqlParser.CP852 - 625)) | (1 << (SqlParser.CP866 - 625)) | (1 << (SqlParser.CP932 - 625)) | (1 << (SqlParser.DEC8 - 625)) | (1 << (SqlParser.EUCJPMS - 625)) | (1 << (SqlParser.EUCKR - 625)) | (1 << (SqlParser.GB2312 - 625)) | (1 << (SqlParser.GBK - 625)) | (1 << (SqlParser.GEOSTD8 - 625)) | (1 << (SqlParser.GREEK - 625)) | (1 << (SqlParser.HEBREW - 625)) | (1 << (SqlParser.HP8 - 625)))) !== 0) || ((((_la - 657)) & ~0x1f) == 0 && ((1 << (_la - 657)) & ((1 << (SqlParser.KEYBCS2 - 657)) | (1 << (SqlParser.KOI8R - 657)) | (1 << (SqlParser.KOI8U - 657)) | (1 << (SqlParser.LATIN1 - 657)) | (1 << (SqlParser.LATIN2 - 657)) | (1 << (SqlParser.LATIN5 - 657)) | (1 << (SqlParser.LATIN7 - 657)) | (1 << (SqlParser.MACCE - 657)) | (1 << (SqlParser.MACROMAN - 657)) | (1 << (SqlParser.SJIS - 657)) | (1 << (SqlParser.SWE7 - 657)) | (1 << (SqlParser.TIS620 - 657)) | (1 << (SqlParser.UCS2 - 657)) | (1 << (SqlParser.UJIS - 657)) | (1 << (SqlParser.UTF16 - 657)) | (1 << (SqlParser.UTF16LE - 657)) | (1 << (SqlParser.UTF32 - 657)) | (1 << (SqlParser.UTF8 - 657)) | (1 << (SqlParser.UTF8MB3 - 657)) | (1 << (SqlParser.UTF8MB4 - 657)) | (1 << (SqlParser.ARCHIVE - 657)) | (1 << (SqlParser.BLACKHOLE - 657)) | (1 << (SqlParser.CSV - 657)) | (1 << (SqlParser.FEDERATED - 657)) | (1 << (SqlParser.INNODB - 657)) | (1 << (SqlParser.MEMORY - 657)) | (1 << (SqlParser.MRG_MYISAM - 657)) | (1 << (SqlParser.MYISAM - 657)) | (1 << (SqlParser.NDB - 657)) | (1 << (SqlParser.NDBCLUSTER - 657)) | (1 << (SqlParser.PERFORMANCE_SCHEMA - 657)) | (1 << (SqlParser.TOKUDB - 657)))) !== 0) || ((((_la - 689)) & ~0x1f) == 0 && ((1 << (_la - 689)) & ((1 << (SqlParser.REPEATABLE - 689)) | (1 << (SqlParser.COMMITTED - 689)) | (1 << (SqlParser.UNCOMMITTED - 689)) | (1 << (SqlParser.SERIALIZABLE - 689)) | (1 << (SqlParser.GEOMETRYCOLLECTION - 689)) | (1 << (SqlParser.LINESTRING - 689)) | (1 << (SqlParser.MULTILINESTRING - 689)) | (1 << (SqlParser.MULTIPOINT - 689)) | (1 << (SqlParser.MULTIPOLYGON - 689)) | (1 << (SqlParser.POINT - 689)) | (1 << (SqlParser.POLYGON - 689)) | (1 << (SqlParser.ABS - 689)) | (1 << (SqlParser.ACOS - 689)) | (1 << (SqlParser.ADDDATE - 689)) | (1 << (SqlParser.ADDTIME - 689)) | (1 << (SqlParser.AES_DECRYPT - 689)) | (1 << (SqlParser.AES_ENCRYPT - 689)) | (1 << (SqlParser.AREA - 689)) | (1 << (SqlParser.ASBINARY - 689)) | (1 << (SqlParser.ASIN - 689)) | (1 << (SqlParser.ASTEXT - 689)) | (1 << (SqlParser.ASWKB - 689)) | (1 << (SqlParser.ASWKT - 689)) | (1 << (SqlParser.ASYMMETRIC_DECRYPT - 689)) | (1 << (SqlParser.ASYMMETRIC_DERIVE - 689)) | (1 << (SqlParser.ASYMMETRIC_ENCRYPT - 689)) | (1 << (SqlParser.ASYMMETRIC_SIGN - 689)) | (1 << (SqlParser.ASYMMETRIC_VERIFY - 689)) | (1 << (SqlParser.ATAN - 689)) | (1 << (SqlParser.ATAN2 - 689)))) !== 0) || ((((_la - 721)) & ~0x1f) == 0 && ((1 << (_la - 721)) & ((1 << (SqlParser.BENCHMARK - 721)) | (1 << (SqlParser.BIN - 721)) | (1 << (SqlParser.BIT_COUNT - 721)) | (1 << (SqlParser.BIT_LENGTH - 721)) | (1 << (SqlParser.BUFFER - 721)) | (1 << (SqlParser.CATALOG_NAME - 721)) | (1 << (SqlParser.CEIL - 721)) | (1 << (SqlParser.CEILING - 721)) | (1 << (SqlParser.CENTROID - 721)) | (1 << (SqlParser.CHARACTER_LENGTH - 721)) | (1 << (SqlParser.CHARSET - 721)) | (1 << (SqlParser.CHAR_LENGTH - 721)) | (1 << (SqlParser.COERCIBILITY - 721)) | (1 << (SqlParser.COLLATION - 721)) | (1 << (SqlParser.COMPRESS - 721)) | (1 << (SqlParser.CONCAT - 721)) | (1 << (SqlParser.CONCAT_WS - 721)) | (1 << (SqlParser.CONNECTION_ID - 721)) | (1 << (SqlParser.CONV - 721)) | (1 << (SqlParser.CONVERT_TZ - 721)) | (1 << (SqlParser.COS - 721)) | (1 << (SqlParser.COT - 721)) | (1 << (SqlParser.CRC32 - 721)) | (1 << (SqlParser.CREATE_ASYMMETRIC_PRIV_KEY - 721)) | (1 << (SqlParser.CREATE_ASYMMETRIC_PUB_KEY - 721)) | (1 << (SqlParser.CREATE_DH_PARAMETERS - 721)) | (1 << (SqlParser.CREATE_DIGEST - 721)) | (1 << (SqlParser.CROSSES - 721)) | (1 << (SqlParser.DATEDIFF - 721)) | (1 << (SqlParser.DATE_FORMAT - 721)) | (1 << (SqlParser.DAYNAME - 721)) | (1 << (SqlParser.DAYOFMONTH - 721)))) !== 0) || ((((_la - 753)) & ~0x1f) == 0 && ((1 << (_la - 753)) & ((1 << (SqlParser.DAYOFWEEK - 753)) | (1 << (SqlParser.DAYOFYEAR - 753)) | (1 << (SqlParser.DECODE - 753)) | (1 << (SqlParser.DEGREES - 753)) | (1 << (SqlParser.DES_DECRYPT - 753)) | (1 << (SqlParser.DES_ENCRYPT - 753)) | (1 << (SqlParser.DIMENSION - 753)) | (1 << (SqlParser.DISJOINT - 753)) | (1 << (SqlParser.ELT - 753)) | (1 << (SqlParser.ENCODE - 753)) | (1 << (SqlParser.ENCRYPT - 753)) | (1 << (SqlParser.ENDPOINT - 753)) | (1 << (SqlParser.ENVELOPE - 753)) | (1 << (SqlParser.EQUALS - 753)) | (1 << (SqlParser.EXP - 753)) | (1 << (SqlParser.EXPORT_SET - 753)) | (1 << (SqlParser.EXTERIORRING - 753)) | (1 << (SqlParser.EXTRACTVALUE - 753)) | (1 << (SqlParser.FIELD - 753)) | (1 << (SqlParser.FIND_IN_SET - 753)) | (1 << (SqlParser.FLOOR - 753)) | (1 << (SqlParser.FORMAT - 753)) | (1 << (SqlParser.FOUND_ROWS - 753)) | (1 << (SqlParser.FROM_BASE64 - 753)) | (1 << (SqlParser.FROM_DAYS - 753)) | (1 << (SqlParser.FROM_UNIXTIME - 753)) | (1 << (SqlParser.GEOMCOLLFROMTEXT - 753)) | (1 << (SqlParser.GEOMCOLLFROMWKB - 753)) | (1 << (SqlParser.GEOMETRYCOLLECTIONFROMTEXT - 753)) | (1 << (SqlParser.GEOMETRYCOLLECTIONFROMWKB - 753)) | (1 << (SqlParser.GEOMETRYFROMTEXT - 753)) | (1 << (SqlParser.GEOMETRYFROMWKB - 753)))) !== 0) || ((((_la - 785)) & ~0x1f) == 0 && ((1 << (_la - 785)) & ((1 << (SqlParser.GEOMETRYN - 785)) | (1 << (SqlParser.GEOMETRYTYPE - 785)) | (1 << (SqlParser.GEOMFROMTEXT - 785)) | (1 << (SqlParser.GEOMFROMWKB - 785)) | (1 << (SqlParser.GET_FORMAT - 785)) | (1 << (SqlParser.GET_LOCK - 785)) | (1 << (SqlParser.GLENGTH - 785)) | (1 << (SqlParser.GREATEST - 785)) | (1 << (SqlParser.GTID_SUBSET - 785)) | (1 << (SqlParser.GTID_SUBTRACT - 785)) | (1 << (SqlParser.HEX - 785)) | (1 << (SqlParser.IFNULL - 785)) | (1 << (SqlParser.INET6_ATON - 785)) | (1 << (SqlParser.INET6_NTOA - 785)) | (1 << (SqlParser.INET_ATON - 785)) | (1 << (SqlParser.INET_NTOA - 785)) | (1 << (SqlParser.INSTR - 785)) | (1 << (SqlParser.INTERIORRINGN - 785)) | (1 << (SqlParser.INTERSECTS - 785)) | (1 << (SqlParser.ISCLOSED - 785)) | (1 << (SqlParser.ISEMPTY - 785)) | (1 << (SqlParser.ISNULL - 785)) | (1 << (SqlParser.ISSIMPLE - 785)) | (1 << (SqlParser.IS_FREE_LOCK - 785)) | (1 << (SqlParser.IS_IPV4 - 785)) | (1 << (SqlParser.IS_IPV4_COMPAT - 785)) | (1 << (SqlParser.IS_IPV4_MAPPED - 785)) | (1 << (SqlParser.IS_IPV6 - 785)) | (1 << (SqlParser.IS_USED_LOCK - 785)) | (1 << (SqlParser.LAST_INSERT_ID - 785)) | (1 << (SqlParser.LCASE - 785)) | (1 << (SqlParser.LEAST - 785)))) !== 0) || ((((_la - 817)) & ~0x1f) == 0 && ((1 << (_la - 817)) & ((1 << (SqlParser.LENGTH - 817)) | (1 << (SqlParser.LINEFROMTEXT - 817)) | (1 << (SqlParser.LINEFROMWKB - 817)) | (1 << (SqlParser.LINESTRINGFROMTEXT - 817)) | (1 << (SqlParser.LINESTRINGFROMWKB - 817)) | (1 << (SqlParser.LN - 817)) | (1 << (SqlParser.LOAD_FILE - 817)) | (1 << (SqlParser.LOCATE - 817)) | (1 << (SqlParser.LOG - 817)) | (1 << (SqlParser.LOG10 - 817)) | (1 << (SqlParser.LOG2 - 817)) | (1 << (SqlParser.LOWER - 817)) | (1 << (SqlParser.LPAD - 817)) | (1 << (SqlParser.LTRIM - 817)) | (1 << (SqlParser.MAKEDATE - 817)) | (1 << (SqlParser.MAKETIME - 817)) | (1 << (SqlParser.MAKE_SET - 817)) | (1 << (SqlParser.MASTER_POS_WAIT - 817)) | (1 << (SqlParser.MBRCONTAINS - 817)) | (1 << (SqlParser.MBRDISJOINT - 817)) | (1 << (SqlParser.MBREQUAL - 817)) | (1 << (SqlParser.MBRINTERSECTS - 817)) | (1 << (SqlParser.MBROVERLAPS - 817)) | (1 << (SqlParser.MBRTOUCHES - 817)) | (1 << (SqlParser.MBRWITHIN - 817)) | (1 << (SqlParser.MD5 - 817)) | (1 << (SqlParser.MLINEFROMTEXT - 817)) | (1 << (SqlParser.MLINEFROMWKB - 817)) | (1 << (SqlParser.MONTHNAME - 817)) | (1 << (SqlParser.MPOINTFROMTEXT - 817)) | (1 << (SqlParser.MPOINTFROMWKB - 817)) | (1 << (SqlParser.MPOLYFROMTEXT - 817)))) !== 0) || ((((_la - 849)) & ~0x1f) == 0 && ((1 << (_la - 849)) & ((1 << (SqlParser.MPOLYFROMWKB - 849)) | (1 << (SqlParser.MULTILINESTRINGFROMTEXT - 849)) | (1 << (SqlParser.MULTILINESTRINGFROMWKB - 849)) | (1 << (SqlParser.MULTIPOINTFROMTEXT - 849)) | (1 << (SqlParser.MULTIPOINTFROMWKB - 849)) | (1 << (SqlParser.MULTIPOLYGONFROMTEXT - 849)) | (1 << (SqlParser.MULTIPOLYGONFROMWKB - 849)) | (1 << (SqlParser.NAME_CONST - 849)) | (1 << (SqlParser.NULLIF - 849)) | (1 << (SqlParser.NUMGEOMETRIES - 849)) | (1 << (SqlParser.NUMINTERIORRINGS - 849)) | (1 << (SqlParser.NUMPOINTS - 849)) | (1 << (SqlParser.OCT - 849)) | (1 << (SqlParser.OCTET_LENGTH - 849)) | (1 << (SqlParser.ORD - 849)) | (1 << (SqlParser.OVERLAPS - 849)) | (1 << (SqlParser.PERIOD_ADD - 849)) | (1 << (SqlParser.PERIOD_DIFF - 849)) | (1 << (SqlParser.PI - 849)) | (1 << (SqlParser.POINTFROMTEXT - 849)) | (1 << (SqlParser.POINTFROMWKB - 849)) | (1 << (SqlParser.POINTN - 849)) | (1 << (SqlParser.POLYFROMTEXT - 849)) | (1 << (SqlParser.POLYFROMWKB - 849)) | (1 << (SqlParser.POLYGONFROMTEXT - 849)) | (1 << (SqlParser.POLYGONFROMWKB - 849)) | (1 << (SqlParser.POW - 849)) | (1 << (SqlParser.POWER - 849)) | (1 << (SqlParser.QUOTE - 849)) | (1 << (SqlParser.RADIANS - 849)) | (1 << (SqlParser.RAND - 849)) | (1 << (SqlParser.RANDOM_BYTES - 849)))) !== 0) || ((((_la - 881)) & ~0x1f) == 0 && ((1 << (_la - 881)) & ((1 << (SqlParser.RELEASE_LOCK - 881)) | (1 << (SqlParser.REVERSE - 881)) | (1 << (SqlParser.ROUND - 881)) | (1 << (SqlParser.ROW_COUNT - 881)) | (1 << (SqlParser.RPAD - 881)) | (1 << (SqlParser.RTRIM - 881)) | (1 << (SqlParser.SEC_TO_TIME - 881)) | (1 << (SqlParser.SESSION_USER - 881)) | (1 << (SqlParser.SHA - 881)) | (1 << (SqlParser.SHA1 - 881)) | (1 << (SqlParser.SHA2 - 881)) | (1 << (SqlParser.SCHEMA_NAME - 881)) | (1 << (SqlParser.SIGN - 881)) | (1 << (SqlParser.SIN - 881)) | (1 << (SqlParser.SLEEP - 881)) | (1 << (SqlParser.SOUNDEX - 881)) | (1 << (SqlParser.SQL_THREAD_WAIT_AFTER_GTIDS - 881)) | (1 << (SqlParser.SQRT - 881)) | (1 << (SqlParser.SRID - 881)) | (1 << (SqlParser.STARTPOINT - 881)) | (1 << (SqlParser.STRCMP - 881)) | (1 << (SqlParser.STR_TO_DATE - 881)) | (1 << (SqlParser.ST_AREA - 881)) | (1 << (SqlParser.ST_ASBINARY - 881)) | (1 << (SqlParser.ST_ASTEXT - 881)) | (1 << (SqlParser.ST_ASWKB - 881)) | (1 << (SqlParser.ST_ASWKT - 881)) | (1 << (SqlParser.ST_BUFFER - 881)) | (1 << (SqlParser.ST_CENTROID - 881)) | (1 << (SqlParser.ST_CONTAINS - 881)) | (1 << (SqlParser.ST_CROSSES - 881)) | (1 << (SqlParser.ST_DIFFERENCE - 881)))) !== 0) || ((((_la - 913)) & ~0x1f) == 0 && ((1 << (_la - 913)) & ((1 << (SqlParser.ST_DIMENSION - 913)) | (1 << (SqlParser.ST_DISJOINT - 913)) | (1 << (SqlParser.ST_DISTANCE - 913)) | (1 << (SqlParser.ST_ENDPOINT - 913)) | (1 << (SqlParser.ST_ENVELOPE - 913)) | (1 << (SqlParser.ST_EQUALS - 913)) | (1 << (SqlParser.ST_EXTERIORRING - 913)) | (1 << (SqlParser.ST_GEOMCOLLFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMCOLLFROMTXT - 913)) | (1 << (SqlParser.ST_GEOMCOLLFROMWKB - 913)) | (1 << (SqlParser.ST_GEOMETRYCOLLECTIONFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMETRYCOLLECTIONFROMWKB - 913)) | (1 << (SqlParser.ST_GEOMETRYFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMETRYFROMWKB - 913)) | (1 << (SqlParser.ST_GEOMETRYN - 913)) | (1 << (SqlParser.ST_GEOMETRYTYPE - 913)) | (1 << (SqlParser.ST_GEOMFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMFROMWKB - 913)) | (1 << (SqlParser.ST_INTERIORRINGN - 913)) | (1 << (SqlParser.ST_INTERSECTION - 913)) | (1 << (SqlParser.ST_INTERSECTS - 913)) | (1 << (SqlParser.ST_ISCLOSED - 913)) | (1 << (SqlParser.ST_ISEMPTY - 913)) | (1 << (SqlParser.ST_ISSIMPLE - 913)) | (1 << (SqlParser.ST_LINEFROMTEXT - 913)) | (1 << (SqlParser.ST_LINEFROMWKB - 913)) | (1 << (SqlParser.ST_LINESTRINGFROMTEXT - 913)) | (1 << (SqlParser.ST_LINESTRINGFROMWKB - 913)) | (1 << (SqlParser.ST_NUMGEOMETRIES - 913)) | (1 << (SqlParser.ST_NUMINTERIORRING - 913)) | (1 << (SqlParser.ST_NUMINTERIORRINGS - 913)) | (1 << (SqlParser.ST_NUMPOINTS - 913)))) !== 0) || ((((_la - 945)) & ~0x1f) == 0 && ((1 << (_la - 945)) & ((1 << (SqlParser.ST_OVERLAPS - 945)) | (1 << (SqlParser.ST_POINTFROMTEXT - 945)) | (1 << (SqlParser.ST_POINTFROMWKB - 945)) | (1 << (SqlParser.ST_POINTN - 945)) | (1 << (SqlParser.ST_POLYFROMTEXT - 945)) | (1 << (SqlParser.ST_POLYFROMWKB - 945)) | (1 << (SqlParser.ST_POLYGONFROMTEXT - 945)) | (1 << (SqlParser.ST_POLYGONFROMWKB - 945)) | (1 << (SqlParser.ST_SRID - 945)) | (1 << (SqlParser.ST_STARTPOINT - 945)) | (1 << (SqlParser.ST_SYMDIFFERENCE - 945)) | (1 << (SqlParser.ST_TOUCHES - 945)) | (1 << (SqlParser.ST_UNION - 945)) | (1 << (SqlParser.ST_WITHIN - 945)) | (1 << (SqlParser.ST_X - 945)) | (1 << (SqlParser.ST_Y - 945)) | (1 << (SqlParser.SUBDATE - 945)) | (1 << (SqlParser.SUBSTRING_INDEX - 945)) | (1 << (SqlParser.SUBTIME - 945)) | (1 << (SqlParser.SYSTEM_USER - 945)) | (1 << (SqlParser.TAN - 945)) | (1 << (SqlParser.TIMEDIFF - 945)) | (1 << (SqlParser.TIMESTAMPADD - 945)) | (1 << (SqlParser.TIMESTAMPDIFF - 945)) | (1 << (SqlParser.TIME_FORMAT - 945)) | (1 << (SqlParser.TIME_TO_SEC - 945)) | (1 << (SqlParser.TOUCHES - 945)) | (1 << (SqlParser.TO_BASE64 - 945)) | (1 << (SqlParser.TO_DAYS - 945)) | (1 << (SqlParser.TO_SECONDS - 945)) | (1 << (SqlParser.UCASE - 945)) | (1 << (SqlParser.UNCOMPRESS - 945)))) !== 0) || ((((_la - 977)) & ~0x1f) == 0 && ((1 << (_la - 977)) & ((1 << (SqlParser.UNCOMPRESSED_LENGTH - 977)) | (1 << (SqlParser.UNHEX - 977)) | (1 << (SqlParser.UNIX_TIMESTAMP - 977)) | (1 << (SqlParser.UPDATEXML - 977)) | (1 << (SqlParser.UPPER - 977)) | (1 << (SqlParser.UUID - 977)) | (1 << (SqlParser.UUID_SHORT - 977)) | (1 << (SqlParser.VALIDATE_PASSWORD_STRENGTH - 977)) | (1 << (SqlParser.VERSION - 977)) | (1 << (SqlParser.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS - 977)) | (1 << (SqlParser.WEEKDAY - 977)) | (1 << (SqlParser.WEEKOFYEAR - 977)) | (1 << (SqlParser.WEIGHT_STRING - 977)) | (1 << (SqlParser.WITHIN - 977)) | (1 << (SqlParser.YEARWEEK - 977)) | (1 << (SqlParser.Y_FUNCTION - 977)) | (1 << (SqlParser.X_FUNCTION - 977)))) !== 0) || ((((_la - 1043)) & ~0x1f) == 0 && ((1 << (_la - 1043)) & ((1 << (SqlParser.ID - 1043)) | (1 << (SqlParser.DOUBLE_QUOTE_ID - 1043)) | (1 << (SqlParser.REVERSE_QUOTE_ID - 1043)) | (1 << (SqlParser.BLOCKED_QUOTE_ID - 1043)))) !== 0)) {
                this.state = 256;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===SqlParser.AS) {
                    this.state = 255;
                    this.match(SqlParser.AS);
                }

                this.state = 258;
                localctx.alias = this.uid();
            }

            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 261;
            localctx.value = this.constant();
            this.state = 266;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.AS || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (SqlParser.CURRENT - 32)) | (1 << (SqlParser.DATABASE - 32)) | (1 << (SqlParser.DIAGNOSTICS - 32)))) !== 0) || _la===SqlParser.LEFT || _la===SqlParser.NUMBER || _la===SqlParser.RIGHT || _la===SqlParser.STACKED || ((((_la - 199)) & ~0x1f) == 0 && ((1 << (_la - 199)) & ((1 << (SqlParser.DATE - 199)) | (1 << (SqlParser.TIME - 199)) | (1 << (SqlParser.TIMESTAMP - 199)) | (1 << (SqlParser.DATETIME - 199)) | (1 << (SqlParser.YEAR - 199)) | (1 << (SqlParser.TEXT - 199)) | (1 << (SqlParser.ENUM - 199)) | (1 << (SqlParser.SERIAL - 199)))) !== 0) || ((((_la - 233)) & ~0x1f) == 0 && ((1 << (_la - 233)) & ((1 << (SqlParser.JSON_VALID - 233)) | (1 << (SqlParser.JSON_SCHEMA_VALID - 233)) | (1 << (SqlParser.COUNT - 233)) | (1 << (SqlParser.POSITION - 233)))) !== 0) || ((((_la - 270)) & ~0x1f) == 0 && ((1 << (_la - 270)) & ((1 << (SqlParser.ACCOUNT - 270)) | (1 << (SqlParser.ACTION - 270)) | (1 << (SqlParser.AFTER - 270)) | (1 << (SqlParser.AGGREGATE - 270)) | (1 << (SqlParser.ALGORITHM - 270)) | (1 << (SqlParser.ANY - 270)) | (1 << (SqlParser.AT - 270)) | (1 << (SqlParser.AUTHORS - 270)) | (1 << (SqlParser.AUTOCOMMIT - 270)) | (1 << (SqlParser.AUTOEXTEND_SIZE - 270)) | (1 << (SqlParser.AUTO_INCREMENT - 270)) | (1 << (SqlParser.AVG_ROW_LENGTH - 270)) | (1 << (SqlParser.BEGIN - 270)) | (1 << (SqlParser.BINLOG - 270)) | (1 << (SqlParser.BIT - 270)) | (1 << (SqlParser.BLOCK - 270)) | (1 << (SqlParser.BOOL - 270)) | (1 << (SqlParser.BOOLEAN - 270)) | (1 << (SqlParser.BTREE - 270)) | (1 << (SqlParser.CACHE - 270)) | (1 << (SqlParser.CASCADED - 270)) | (1 << (SqlParser.CHAIN - 270)) | (1 << (SqlParser.CHANGED - 270)) | (1 << (SqlParser.CHANNEL - 270)) | (1 << (SqlParser.CHECKSUM - 270)) | (1 << (SqlParser.PAGE_CHECKSUM - 270)) | (1 << (SqlParser.CIPHER - 270)) | (1 << (SqlParser.CLASS_ORIGIN - 270)) | (1 << (SqlParser.CLIENT - 270)) | (1 << (SqlParser.CLOSE - 270)) | (1 << (SqlParser.COALESCE - 270)) | (1 << (SqlParser.CODE - 270)))) !== 0) || ((((_la - 302)) & ~0x1f) == 0 && ((1 << (_la - 302)) & ((1 << (SqlParser.COLUMNS - 302)) | (1 << (SqlParser.COLUMN_FORMAT - 302)) | (1 << (SqlParser.COLUMN_NAME - 302)) | (1 << (SqlParser.COMMENT - 302)) | (1 << (SqlParser.COMMIT - 302)) | (1 << (SqlParser.COMPACT - 302)) | (1 << (SqlParser.COMPLETION - 302)) | (1 << (SqlParser.COMPRESSED - 302)) | (1 << (SqlParser.COMPRESSION - 302)) | (1 << (SqlParser.CONCURRENT - 302)) | (1 << (SqlParser.CONNECTION - 302)) | (1 << (SqlParser.CONSISTENT - 302)) | (1 << (SqlParser.CONSTRAINT_CATALOG - 302)) | (1 << (SqlParser.CONSTRAINT_SCHEMA - 302)) | (1 << (SqlParser.CONSTRAINT_NAME - 302)) | (1 << (SqlParser.CONTAINS - 302)) | (1 << (SqlParser.CONTEXT - 302)) | (1 << (SqlParser.CONTRIBUTORS - 302)) | (1 << (SqlParser.COPY - 302)) | (1 << (SqlParser.CPU - 302)) | (1 << (SqlParser.CURSOR_NAME - 302)) | (1 << (SqlParser.DATA - 302)) | (1 << (SqlParser.DATAFILE - 302)) | (1 << (SqlParser.DEALLOCATE - 302)) | (1 << (SqlParser.DEFAULT_AUTH - 302)) | (1 << (SqlParser.DEFINER - 302)) | (1 << (SqlParser.DELAY_KEY_WRITE - 302)) | (1 << (SqlParser.DES_KEY_FILE - 302)) | (1 << (SqlParser.DIRECTORY - 302)) | (1 << (SqlParser.DISABLE - 302)) | (1 << (SqlParser.DISCARD - 302)) | (1 << (SqlParser.DISK - 302)))) !== 0) || ((((_la - 334)) & ~0x1f) == 0 && ((1 << (_la - 334)) & ((1 << (SqlParser.DO - 334)) | (1 << (SqlParser.DUMPFILE - 334)) | (1 << (SqlParser.DUPLICATE - 334)) | (1 << (SqlParser.DYNAMIC - 334)) | (1 << (SqlParser.ENABLE - 334)) | (1 << (SqlParser.ENCRYPTION - 334)) | (1 << (SqlParser.END - 334)) | (1 << (SqlParser.ENDS - 334)) | (1 << (SqlParser.ENGINE - 334)) | (1 << (SqlParser.ENGINES - 334)) | (1 << (SqlParser.ERROR - 334)) | (1 << (SqlParser.ERRORS - 334)) | (1 << (SqlParser.ESCAPE - 334)) | (1 << (SqlParser.EVEN - 334)) | (1 << (SqlParser.EVENT - 334)) | (1 << (SqlParser.EVENTS - 334)) | (1 << (SqlParser.EVERY - 334)) | (1 << (SqlParser.EXCHANGE - 334)) | (1 << (SqlParser.EXCLUSIVE - 334)) | (1 << (SqlParser.EXPIRE - 334)) | (1 << (SqlParser.EXPORT - 334)) | (1 << (SqlParser.EXTENDED - 334)) | (1 << (SqlParser.EXTENT_SIZE - 334)) | (1 << (SqlParser.FAST - 334)) | (1 << (SqlParser.FAULTS - 334)) | (1 << (SqlParser.FIELDS - 334)) | (1 << (SqlParser.FILE_BLOCK_SIZE - 334)) | (1 << (SqlParser.FILTER - 334)) | (1 << (SqlParser.FIRST - 334)) | (1 << (SqlParser.FIXED - 334)) | (1 << (SqlParser.FLUSH - 334)) | (1 << (SqlParser.FOLLOWS - 334)))) !== 0) || ((((_la - 366)) & ~0x1f) == 0 && ((1 << (_la - 366)) & ((1 << (SqlParser.FOUND - 366)) | (1 << (SqlParser.FULL - 366)) | (1 << (SqlParser.FUNCTION - 366)) | (1 << (SqlParser.GENERAL - 366)) | (1 << (SqlParser.GLOBAL - 366)) | (1 << (SqlParser.GRANTS - 366)) | (1 << (SqlParser.GROUP_REPLICATION - 366)) | (1 << (SqlParser.HANDLER - 366)) | (1 << (SqlParser.HASH - 366)) | (1 << (SqlParser.HELP - 366)) | (1 << (SqlParser.HOST - 366)) | (1 << (SqlParser.HOSTS - 366)) | (1 << (SqlParser.IDENTIFIED - 366)) | (1 << (SqlParser.IGNORE_SERVER_IDS - 366)) | (1 << (SqlParser.IMPORT - 366)) | (1 << (SqlParser.INDEXES - 366)) | (1 << (SqlParser.INITIAL_SIZE - 366)) | (1 << (SqlParser.INPLACE - 366)) | (1 << (SqlParser.INSERT_METHOD - 366)) | (1 << (SqlParser.INSTALL - 366)) | (1 << (SqlParser.INSTANCE - 366)) | (1 << (SqlParser.INVISIBLE - 366)) | (1 << (SqlParser.INVOKER - 366)) | (1 << (SqlParser.IO - 366)) | (1 << (SqlParser.IO_THREAD - 366)) | (1 << (SqlParser.IPC - 366)) | (1 << (SqlParser.ISOLATION - 366)) | (1 << (SqlParser.ISSUER - 366)) | (1 << (SqlParser.JSON - 366)) | (1 << (SqlParser.KEY_BLOCK_SIZE - 366)) | (1 << (SqlParser.LANGUAGE - 366)) | (1 << (SqlParser.LAST - 366)))) !== 0) || ((((_la - 398)) & ~0x1f) == 0 && ((1 << (_la - 398)) & ((1 << (SqlParser.LEAVES - 398)) | (1 << (SqlParser.LESS - 398)) | (1 << (SqlParser.LEVEL - 398)) | (1 << (SqlParser.LIST - 398)) | (1 << (SqlParser.LOCAL - 398)) | (1 << (SqlParser.LOGFILE - 398)) | (1 << (SqlParser.LOGS - 398)) | (1 << (SqlParser.MASTER - 398)) | (1 << (SqlParser.MASTER_AUTO_POSITION - 398)) | (1 << (SqlParser.MASTER_CONNECT_RETRY - 398)) | (1 << (SqlParser.MASTER_DELAY - 398)) | (1 << (SqlParser.MASTER_HEARTBEAT_PERIOD - 398)) | (1 << (SqlParser.MASTER_HOST - 398)) | (1 << (SqlParser.MASTER_LOG_FILE - 398)) | (1 << (SqlParser.MASTER_LOG_POS - 398)) | (1 << (SqlParser.MASTER_PASSWORD - 398)) | (1 << (SqlParser.MASTER_PORT - 398)) | (1 << (SqlParser.MASTER_RETRY_COUNT - 398)) | (1 << (SqlParser.MASTER_SSL - 398)) | (1 << (SqlParser.MASTER_SSL_CA - 398)) | (1 << (SqlParser.MASTER_SSL_CAPATH - 398)) | (1 << (SqlParser.MASTER_SSL_CERT - 398)) | (1 << (SqlParser.MASTER_SSL_CIPHER - 398)) | (1 << (SqlParser.MASTER_SSL_CRL - 398)) | (1 << (SqlParser.MASTER_SSL_CRLPATH - 398)) | (1 << (SqlParser.MASTER_SSL_KEY - 398)) | (1 << (SqlParser.MASTER_TLS_VERSION - 398)) | (1 << (SqlParser.MASTER_USER - 398)) | (1 << (SqlParser.MAX_CONNECTIONS_PER_HOUR - 398)) | (1 << (SqlParser.MAX_QUERIES_PER_HOUR - 398)) | (1 << (SqlParser.MAX_ROWS - 398)) | (1 << (SqlParser.MAX_SIZE - 398)))) !== 0) || ((((_la - 430)) & ~0x1f) == 0 && ((1 << (_la - 430)) & ((1 << (SqlParser.MAX_UPDATES_PER_HOUR - 430)) | (1 << (SqlParser.MAX_USER_CONNECTIONS - 430)) | (1 << (SqlParser.MEDIUM - 430)) | (1 << (SqlParser.MERGE - 430)) | (1 << (SqlParser.MESSAGE_TEXT - 430)) | (1 << (SqlParser.MID - 430)) | (1 << (SqlParser.MIGRATE - 430)) | (1 << (SqlParser.MIN_ROWS - 430)) | (1 << (SqlParser.MODE - 430)) | (1 << (SqlParser.MODIFY - 430)) | (1 << (SqlParser.MUTEX - 430)) | (1 << (SqlParser.MYSQL - 430)) | (1 << (SqlParser.MYSQL_ERRNO - 430)) | (1 << (SqlParser.NAME - 430)) | (1 << (SqlParser.NAMES - 430)) | (1 << (SqlParser.NCHAR - 430)) | (1 << (SqlParser.NEVER - 430)) | (1 << (SqlParser.NEXT - 430)) | (1 << (SqlParser.NO - 430)) | (1 << (SqlParser.NODEGROUP - 430)) | (1 << (SqlParser.NONE - 430)) | (1 << (SqlParser.OFFLINE - 430)) | (1 << (SqlParser.OFFSET - 430)) | (1 << (SqlParser.OJ - 430)) | (1 << (SqlParser.OLD_PASSWORD - 430)) | (1 << (SqlParser.ONE - 430)) | (1 << (SqlParser.ONLINE - 430)) | (1 << (SqlParser.ONLY - 430)) | (1 << (SqlParser.OPEN - 430)) | (1 << (SqlParser.OPTIMIZER_COSTS - 430)) | (1 << (SqlParser.OPTIONS - 430)) | (1 << (SqlParser.OWNER - 430)))) !== 0) || ((((_la - 462)) & ~0x1f) == 0 && ((1 << (_la - 462)) & ((1 << (SqlParser.PACK_KEYS - 462)) | (1 << (SqlParser.PAGE - 462)) | (1 << (SqlParser.PARSER - 462)) | (1 << (SqlParser.PARTIAL - 462)) | (1 << (SqlParser.PARTITIONING - 462)) | (1 << (SqlParser.PARTITIONS - 462)) | (1 << (SqlParser.PASSWORD - 462)) | (1 << (SqlParser.PHASE - 462)) | (1 << (SqlParser.PLUGIN - 462)) | (1 << (SqlParser.PLUGIN_DIR - 462)) | (1 << (SqlParser.PLUGINS - 462)) | (1 << (SqlParser.PORT - 462)) | (1 << (SqlParser.PRECEDES - 462)) | (1 << (SqlParser.PREPARE - 462)) | (1 << (SqlParser.PRESERVE - 462)) | (1 << (SqlParser.PREV - 462)) | (1 << (SqlParser.PROCESSLIST - 462)) | (1 << (SqlParser.PROFILE - 462)) | (1 << (SqlParser.PROFILES - 462)) | (1 << (SqlParser.PROXY - 462)) | (1 << (SqlParser.QUERY - 462)) | (1 << (SqlParser.QUICK - 462)) | (1 << (SqlParser.REBUILD - 462)) | (1 << (SqlParser.RECOVER - 462)) | (1 << (SqlParser.REDO_BUFFER_SIZE - 462)) | (1 << (SqlParser.REDUNDANT - 462)) | (1 << (SqlParser.RELAY - 462)) | (1 << (SqlParser.RELAY_LOG_FILE - 462)) | (1 << (SqlParser.RELAY_LOG_POS - 462)) | (1 << (SqlParser.RELAYLOG - 462)) | (1 << (SqlParser.REMOVE - 462)) | (1 << (SqlParser.REORGANIZE - 462)))) !== 0) || ((((_la - 494)) & ~0x1f) == 0 && ((1 << (_la - 494)) & ((1 << (SqlParser.REPAIR - 494)) | (1 << (SqlParser.REPLICATE_DO_DB - 494)) | (1 << (SqlParser.REPLICATE_DO_TABLE - 494)) | (1 << (SqlParser.REPLICATE_IGNORE_DB - 494)) | (1 << (SqlParser.REPLICATE_IGNORE_TABLE - 494)) | (1 << (SqlParser.REPLICATE_REWRITE_DB - 494)) | (1 << (SqlParser.REPLICATE_WILD_DO_TABLE - 494)) | (1 << (SqlParser.REPLICATE_WILD_IGNORE_TABLE - 494)) | (1 << (SqlParser.REPLICATION - 494)) | (1 << (SqlParser.RESET - 494)) | (1 << (SqlParser.RESUME - 494)) | (1 << (SqlParser.RETURNED_SQLSTATE - 494)) | (1 << (SqlParser.RETURNS - 494)) | (1 << (SqlParser.ROLE - 494)) | (1 << (SqlParser.ROLLBACK - 494)) | (1 << (SqlParser.ROLLUP - 494)) | (1 << (SqlParser.ROTATE - 494)) | (1 << (SqlParser.ROW - 494)) | (1 << (SqlParser.ROWS - 494)) | (1 << (SqlParser.ROW_FORMAT - 494)) | (1 << (SqlParser.SAVEPOINT - 494)) | (1 << (SqlParser.SCHEDULE - 494)) | (1 << (SqlParser.SECURITY - 494)) | (1 << (SqlParser.SERVER - 494)) | (1 << (SqlParser.SESSION - 494)) | (1 << (SqlParser.SHARE - 494)) | (1 << (SqlParser.SHARED - 494)) | (1 << (SqlParser.SIGNED - 494)) | (1 << (SqlParser.SIMPLE - 494)) | (1 << (SqlParser.SLAVE - 494)) | (1 << (SqlParser.SLOW - 494)) | (1 << (SqlParser.SNAPSHOT - 494)))) !== 0) || ((((_la - 526)) & ~0x1f) == 0 && ((1 << (_la - 526)) & ((1 << (SqlParser.SOCKET - 526)) | (1 << (SqlParser.SOME - 526)) | (1 << (SqlParser.SONAME - 526)) | (1 << (SqlParser.SOUNDS - 526)) | (1 << (SqlParser.SOURCE - 526)) | (1 << (SqlParser.SQL_AFTER_GTIDS - 526)) | (1 << (SqlParser.SQL_AFTER_MTS_GAPS - 526)) | (1 << (SqlParser.SQL_BEFORE_GTIDS - 526)) | (1 << (SqlParser.SQL_BUFFER_RESULT - 526)) | (1 << (SqlParser.SQL_CACHE - 526)) | (1 << (SqlParser.SQL_NO_CACHE - 526)) | (1 << (SqlParser.SQL_THREAD - 526)) | (1 << (SqlParser.START - 526)) | (1 << (SqlParser.STARTS - 526)) | (1 << (SqlParser.STATS_AUTO_RECALC - 526)) | (1 << (SqlParser.STATS_PERSISTENT - 526)) | (1 << (SqlParser.STATS_SAMPLE_PAGES - 526)) | (1 << (SqlParser.STATUS - 526)) | (1 << (SqlParser.STOP - 526)) | (1 << (SqlParser.STORAGE - 526)) | (1 << (SqlParser.STRING - 526)) | (1 << (SqlParser.SUBCLASS_ORIGIN - 526)) | (1 << (SqlParser.SUBJECT - 526)) | (1 << (SqlParser.SUBPARTITION - 526)) | (1 << (SqlParser.SUBPARTITIONS - 526)) | (1 << (SqlParser.SUSPEND - 526)) | (1 << (SqlParser.SWAPS - 526)) | (1 << (SqlParser.SWITCHES - 526)) | (1 << (SqlParser.TABLE_NAME - 526)) | (1 << (SqlParser.TABLESPACE - 526)) | (1 << (SqlParser.TEMPORARY - 526)))) !== 0) || ((((_la - 558)) & ~0x1f) == 0 && ((1 << (_la - 558)) & ((1 << (SqlParser.TEMPTABLE - 558)) | (1 << (SqlParser.THAN - 558)) | (1 << (SqlParser.TRADITIONAL - 558)) | (1 << (SqlParser.TRANSACTION - 558)) | (1 << (SqlParser.TRANSACTIONAL - 558)) | (1 << (SqlParser.TRIGGERS - 558)) | (1 << (SqlParser.TRUNCATE - 558)) | (1 << (SqlParser.UNDEFINED - 558)) | (1 << (SqlParser.UNDOFILE - 558)) | (1 << (SqlParser.UNDO_BUFFER_SIZE - 558)) | (1 << (SqlParser.UNINSTALL - 558)) | (1 << (SqlParser.UNKNOWN - 558)) | (1 << (SqlParser.UNTIL - 558)) | (1 << (SqlParser.UPGRADE - 558)) | (1 << (SqlParser.USER - 558)) | (1 << (SqlParser.USE_FRM - 558)) | (1 << (SqlParser.USER_RESOURCES - 558)) | (1 << (SqlParser.VALIDATION - 558)) | (1 << (SqlParser.VALUE - 558)) | (1 << (SqlParser.VARIABLES - 558)) | (1 << (SqlParser.VIEW - 558)) | (1 << (SqlParser.VISIBLE - 558)) | (1 << (SqlParser.WAIT - 558)) | (1 << (SqlParser.WARNINGS - 558)) | (1 << (SqlParser.WITHOUT - 558)) | (1 << (SqlParser.WORK - 558)) | (1 << (SqlParser.WRAPPER - 558)) | (1 << (SqlParser.X509 - 558)) | (1 << (SqlParser.XA - 558)) | (1 << (SqlParser.XML - 558)))) !== 0) || ((((_la - 593)) & ~0x1f) == 0 && ((1 << (_la - 593)) & ((1 << (SqlParser.INTERNAL - 593)) | (1 << (SqlParser.QUARTER - 593)) | (1 << (SqlParser.MONTH - 593)) | (1 << (SqlParser.DAY - 593)) | (1 << (SqlParser.HOUR - 593)) | (1 << (SqlParser.MINUTE - 593)) | (1 << (SqlParser.WEEK - 593)) | (1 << (SqlParser.SECOND - 593)) | (1 << (SqlParser.MICROSECOND - 593)) | (1 << (SqlParser.TABLES - 593)) | (1 << (SqlParser.ROUTINE - 593)) | (1 << (SqlParser.EXECUTE - 593)) | (1 << (SqlParser.FILE - 593)) | (1 << (SqlParser.PROCESS - 593)) | (1 << (SqlParser.RELOAD - 593)) | (1 << (SqlParser.SHUTDOWN - 593)) | (1 << (SqlParser.SUPER - 593)) | (1 << (SqlParser.PRIVILEGES - 593)) | (1 << (SqlParser.AUDIT_ADMIN - 593)) | (1 << (SqlParser.BACKUP_ADMIN - 593)) | (1 << (SqlParser.BINLOG_ADMIN - 593)) | (1 << (SqlParser.BINLOG_ENCRYPTION_ADMIN - 593)) | (1 << (SqlParser.CLONE_ADMIN - 593)) | (1 << (SqlParser.CONNECTION_ADMIN - 593)) | (1 << (SqlParser.ENCRYPTION_KEY_ADMIN - 593)) | (1 << (SqlParser.FIREWALL_ADMIN - 593)) | (1 << (SqlParser.FIREWALL_USER - 593)) | (1 << (SqlParser.GROUP_REPLICATION_ADMIN - 593)) | (1 << (SqlParser.INNODB_REDO_LOG_ARCHIVE - 593)) | (1 << (SqlParser.NDB_STORED_USER - 593)) | (1 << (SqlParser.PERSIST_RO_VARIABLES_ADMIN - 593)))) !== 0) || ((((_la - 625)) & ~0x1f) == 0 && ((1 << (_la - 625)) & ((1 << (SqlParser.REPLICATION_APPLIER - 625)) | (1 << (SqlParser.REPLICATION_SLAVE_ADMIN - 625)) | (1 << (SqlParser.RESOURCE_GROUP_ADMIN - 625)) | (1 << (SqlParser.RESOURCE_GROUP_USER - 625)) | (1 << (SqlParser.ROLE_ADMIN - 625)) | (1 << (SqlParser.SESSION_VARIABLES_ADMIN - 625)) | (1 << (SqlParser.SET_USER_ID - 625)) | (1 << (SqlParser.SHOW_ROUTINE - 625)) | (1 << (SqlParser.SYSTEM_VARIABLES_ADMIN - 625)) | (1 << (SqlParser.TABLE_ENCRYPTION_ADMIN - 625)) | (1 << (SqlParser.VERSION_TOKEN_ADMIN - 625)) | (1 << (SqlParser.XA_RECOVER_ADMIN - 625)) | (1 << (SqlParser.ARMSCII8 - 625)) | (1 << (SqlParser.ASCII - 625)) | (1 << (SqlParser.BIG5 - 625)) | (1 << (SqlParser.CP1250 - 625)) | (1 << (SqlParser.CP1251 - 625)) | (1 << (SqlParser.CP1256 - 625)) | (1 << (SqlParser.CP1257 - 625)) | (1 << (SqlParser.CP850 - 625)) | (1 << (SqlParser.CP852 - 625)) | (1 << (SqlParser.CP866 - 625)) | (1 << (SqlParser.CP932 - 625)) | (1 << (SqlParser.DEC8 - 625)) | (1 << (SqlParser.EUCJPMS - 625)) | (1 << (SqlParser.EUCKR - 625)) | (1 << (SqlParser.GB2312 - 625)) | (1 << (SqlParser.GBK - 625)) | (1 << (SqlParser.GEOSTD8 - 625)) | (1 << (SqlParser.GREEK - 625)) | (1 << (SqlParser.HEBREW - 625)) | (1 << (SqlParser.HP8 - 625)))) !== 0) || ((((_la - 657)) & ~0x1f) == 0 && ((1 << (_la - 657)) & ((1 << (SqlParser.KEYBCS2 - 657)) | (1 << (SqlParser.KOI8R - 657)) | (1 << (SqlParser.KOI8U - 657)) | (1 << (SqlParser.LATIN1 - 657)) | (1 << (SqlParser.LATIN2 - 657)) | (1 << (SqlParser.LATIN5 - 657)) | (1 << (SqlParser.LATIN7 - 657)) | (1 << (SqlParser.MACCE - 657)) | (1 << (SqlParser.MACROMAN - 657)) | (1 << (SqlParser.SJIS - 657)) | (1 << (SqlParser.SWE7 - 657)) | (1 << (SqlParser.TIS620 - 657)) | (1 << (SqlParser.UCS2 - 657)) | (1 << (SqlParser.UJIS - 657)) | (1 << (SqlParser.UTF16 - 657)) | (1 << (SqlParser.UTF16LE - 657)) | (1 << (SqlParser.UTF32 - 657)) | (1 << (SqlParser.UTF8 - 657)) | (1 << (SqlParser.UTF8MB3 - 657)) | (1 << (SqlParser.UTF8MB4 - 657)) | (1 << (SqlParser.ARCHIVE - 657)) | (1 << (SqlParser.BLACKHOLE - 657)) | (1 << (SqlParser.CSV - 657)) | (1 << (SqlParser.FEDERATED - 657)) | (1 << (SqlParser.INNODB - 657)) | (1 << (SqlParser.MEMORY - 657)) | (1 << (SqlParser.MRG_MYISAM - 657)) | (1 << (SqlParser.MYISAM - 657)) | (1 << (SqlParser.NDB - 657)) | (1 << (SqlParser.NDBCLUSTER - 657)) | (1 << (SqlParser.PERFORMANCE_SCHEMA - 657)) | (1 << (SqlParser.TOKUDB - 657)))) !== 0) || ((((_la - 689)) & ~0x1f) == 0 && ((1 << (_la - 689)) & ((1 << (SqlParser.REPEATABLE - 689)) | (1 << (SqlParser.COMMITTED - 689)) | (1 << (SqlParser.UNCOMMITTED - 689)) | (1 << (SqlParser.SERIALIZABLE - 689)) | (1 << (SqlParser.GEOMETRYCOLLECTION - 689)) | (1 << (SqlParser.LINESTRING - 689)) | (1 << (SqlParser.MULTILINESTRING - 689)) | (1 << (SqlParser.MULTIPOINT - 689)) | (1 << (SqlParser.MULTIPOLYGON - 689)) | (1 << (SqlParser.POINT - 689)) | (1 << (SqlParser.POLYGON - 689)) | (1 << (SqlParser.ABS - 689)) | (1 << (SqlParser.ACOS - 689)) | (1 << (SqlParser.ADDDATE - 689)) | (1 << (SqlParser.ADDTIME - 689)) | (1 << (SqlParser.AES_DECRYPT - 689)) | (1 << (SqlParser.AES_ENCRYPT - 689)) | (1 << (SqlParser.AREA - 689)) | (1 << (SqlParser.ASBINARY - 689)) | (1 << (SqlParser.ASIN - 689)) | (1 << (SqlParser.ASTEXT - 689)) | (1 << (SqlParser.ASWKB - 689)) | (1 << (SqlParser.ASWKT - 689)) | (1 << (SqlParser.ASYMMETRIC_DECRYPT - 689)) | (1 << (SqlParser.ASYMMETRIC_DERIVE - 689)) | (1 << (SqlParser.ASYMMETRIC_ENCRYPT - 689)) | (1 << (SqlParser.ASYMMETRIC_SIGN - 689)) | (1 << (SqlParser.ASYMMETRIC_VERIFY - 689)) | (1 << (SqlParser.ATAN - 689)) | (1 << (SqlParser.ATAN2 - 689)))) !== 0) || ((((_la - 721)) & ~0x1f) == 0 && ((1 << (_la - 721)) & ((1 << (SqlParser.BENCHMARK - 721)) | (1 << (SqlParser.BIN - 721)) | (1 << (SqlParser.BIT_COUNT - 721)) | (1 << (SqlParser.BIT_LENGTH - 721)) | (1 << (SqlParser.BUFFER - 721)) | (1 << (SqlParser.CATALOG_NAME - 721)) | (1 << (SqlParser.CEIL - 721)) | (1 << (SqlParser.CEILING - 721)) | (1 << (SqlParser.CENTROID - 721)) | (1 << (SqlParser.CHARACTER_LENGTH - 721)) | (1 << (SqlParser.CHARSET - 721)) | (1 << (SqlParser.CHAR_LENGTH - 721)) | (1 << (SqlParser.COERCIBILITY - 721)) | (1 << (SqlParser.COLLATION - 721)) | (1 << (SqlParser.COMPRESS - 721)) | (1 << (SqlParser.CONCAT - 721)) | (1 << (SqlParser.CONCAT_WS - 721)) | (1 << (SqlParser.CONNECTION_ID - 721)) | (1 << (SqlParser.CONV - 721)) | (1 << (SqlParser.CONVERT_TZ - 721)) | (1 << (SqlParser.COS - 721)) | (1 << (SqlParser.COT - 721)) | (1 << (SqlParser.CRC32 - 721)) | (1 << (SqlParser.CREATE_ASYMMETRIC_PRIV_KEY - 721)) | (1 << (SqlParser.CREATE_ASYMMETRIC_PUB_KEY - 721)) | (1 << (SqlParser.CREATE_DH_PARAMETERS - 721)) | (1 << (SqlParser.CREATE_DIGEST - 721)) | (1 << (SqlParser.CROSSES - 721)) | (1 << (SqlParser.DATEDIFF - 721)) | (1 << (SqlParser.DATE_FORMAT - 721)) | (1 << (SqlParser.DAYNAME - 721)) | (1 << (SqlParser.DAYOFMONTH - 721)))) !== 0) || ((((_la - 753)) & ~0x1f) == 0 && ((1 << (_la - 753)) & ((1 << (SqlParser.DAYOFWEEK - 753)) | (1 << (SqlParser.DAYOFYEAR - 753)) | (1 << (SqlParser.DECODE - 753)) | (1 << (SqlParser.DEGREES - 753)) | (1 << (SqlParser.DES_DECRYPT - 753)) | (1 << (SqlParser.DES_ENCRYPT - 753)) | (1 << (SqlParser.DIMENSION - 753)) | (1 << (SqlParser.DISJOINT - 753)) | (1 << (SqlParser.ELT - 753)) | (1 << (SqlParser.ENCODE - 753)) | (1 << (SqlParser.ENCRYPT - 753)) | (1 << (SqlParser.ENDPOINT - 753)) | (1 << (SqlParser.ENVELOPE - 753)) | (1 << (SqlParser.EQUALS - 753)) | (1 << (SqlParser.EXP - 753)) | (1 << (SqlParser.EXPORT_SET - 753)) | (1 << (SqlParser.EXTERIORRING - 753)) | (1 << (SqlParser.EXTRACTVALUE - 753)) | (1 << (SqlParser.FIELD - 753)) | (1 << (SqlParser.FIND_IN_SET - 753)) | (1 << (SqlParser.FLOOR - 753)) | (1 << (SqlParser.FORMAT - 753)) | (1 << (SqlParser.FOUND_ROWS - 753)) | (1 << (SqlParser.FROM_BASE64 - 753)) | (1 << (SqlParser.FROM_DAYS - 753)) | (1 << (SqlParser.FROM_UNIXTIME - 753)) | (1 << (SqlParser.GEOMCOLLFROMTEXT - 753)) | (1 << (SqlParser.GEOMCOLLFROMWKB - 753)) | (1 << (SqlParser.GEOMETRYCOLLECTIONFROMTEXT - 753)) | (1 << (SqlParser.GEOMETRYCOLLECTIONFROMWKB - 753)) | (1 << (SqlParser.GEOMETRYFROMTEXT - 753)) | (1 << (SqlParser.GEOMETRYFROMWKB - 753)))) !== 0) || ((((_la - 785)) & ~0x1f) == 0 && ((1 << (_la - 785)) & ((1 << (SqlParser.GEOMETRYN - 785)) | (1 << (SqlParser.GEOMETRYTYPE - 785)) | (1 << (SqlParser.GEOMFROMTEXT - 785)) | (1 << (SqlParser.GEOMFROMWKB - 785)) | (1 << (SqlParser.GET_FORMAT - 785)) | (1 << (SqlParser.GET_LOCK - 785)) | (1 << (SqlParser.GLENGTH - 785)) | (1 << (SqlParser.GREATEST - 785)) | (1 << (SqlParser.GTID_SUBSET - 785)) | (1 << (SqlParser.GTID_SUBTRACT - 785)) | (1 << (SqlParser.HEX - 785)) | (1 << (SqlParser.IFNULL - 785)) | (1 << (SqlParser.INET6_ATON - 785)) | (1 << (SqlParser.INET6_NTOA - 785)) | (1 << (SqlParser.INET_ATON - 785)) | (1 << (SqlParser.INET_NTOA - 785)) | (1 << (SqlParser.INSTR - 785)) | (1 << (SqlParser.INTERIORRINGN - 785)) | (1 << (SqlParser.INTERSECTS - 785)) | (1 << (SqlParser.ISCLOSED - 785)) | (1 << (SqlParser.ISEMPTY - 785)) | (1 << (SqlParser.ISNULL - 785)) | (1 << (SqlParser.ISSIMPLE - 785)) | (1 << (SqlParser.IS_FREE_LOCK - 785)) | (1 << (SqlParser.IS_IPV4 - 785)) | (1 << (SqlParser.IS_IPV4_COMPAT - 785)) | (1 << (SqlParser.IS_IPV4_MAPPED - 785)) | (1 << (SqlParser.IS_IPV6 - 785)) | (1 << (SqlParser.IS_USED_LOCK - 785)) | (1 << (SqlParser.LAST_INSERT_ID - 785)) | (1 << (SqlParser.LCASE - 785)) | (1 << (SqlParser.LEAST - 785)))) !== 0) || ((((_la - 817)) & ~0x1f) == 0 && ((1 << (_la - 817)) & ((1 << (SqlParser.LENGTH - 817)) | (1 << (SqlParser.LINEFROMTEXT - 817)) | (1 << (SqlParser.LINEFROMWKB - 817)) | (1 << (SqlParser.LINESTRINGFROMTEXT - 817)) | (1 << (SqlParser.LINESTRINGFROMWKB - 817)) | (1 << (SqlParser.LN - 817)) | (1 << (SqlParser.LOAD_FILE - 817)) | (1 << (SqlParser.LOCATE - 817)) | (1 << (SqlParser.LOG - 817)) | (1 << (SqlParser.LOG10 - 817)) | (1 << (SqlParser.LOG2 - 817)) | (1 << (SqlParser.LOWER - 817)) | (1 << (SqlParser.LPAD - 817)) | (1 << (SqlParser.LTRIM - 817)) | (1 << (SqlParser.MAKEDATE - 817)) | (1 << (SqlParser.MAKETIME - 817)) | (1 << (SqlParser.MAKE_SET - 817)) | (1 << (SqlParser.MASTER_POS_WAIT - 817)) | (1 << (SqlParser.MBRCONTAINS - 817)) | (1 << (SqlParser.MBRDISJOINT - 817)) | (1 << (SqlParser.MBREQUAL - 817)) | (1 << (SqlParser.MBRINTERSECTS - 817)) | (1 << (SqlParser.MBROVERLAPS - 817)) | (1 << (SqlParser.MBRTOUCHES - 817)) | (1 << (SqlParser.MBRWITHIN - 817)) | (1 << (SqlParser.MD5 - 817)) | (1 << (SqlParser.MLINEFROMTEXT - 817)) | (1 << (SqlParser.MLINEFROMWKB - 817)) | (1 << (SqlParser.MONTHNAME - 817)) | (1 << (SqlParser.MPOINTFROMTEXT - 817)) | (1 << (SqlParser.MPOINTFROMWKB - 817)) | (1 << (SqlParser.MPOLYFROMTEXT - 817)))) !== 0) || ((((_la - 849)) & ~0x1f) == 0 && ((1 << (_la - 849)) & ((1 << (SqlParser.MPOLYFROMWKB - 849)) | (1 << (SqlParser.MULTILINESTRINGFROMTEXT - 849)) | (1 << (SqlParser.MULTILINESTRINGFROMWKB - 849)) | (1 << (SqlParser.MULTIPOINTFROMTEXT - 849)) | (1 << (SqlParser.MULTIPOINTFROMWKB - 849)) | (1 << (SqlParser.MULTIPOLYGONFROMTEXT - 849)) | (1 << (SqlParser.MULTIPOLYGONFROMWKB - 849)) | (1 << (SqlParser.NAME_CONST - 849)) | (1 << (SqlParser.NULLIF - 849)) | (1 << (SqlParser.NUMGEOMETRIES - 849)) | (1 << (SqlParser.NUMINTERIORRINGS - 849)) | (1 << (SqlParser.NUMPOINTS - 849)) | (1 << (SqlParser.OCT - 849)) | (1 << (SqlParser.OCTET_LENGTH - 849)) | (1 << (SqlParser.ORD - 849)) | (1 << (SqlParser.OVERLAPS - 849)) | (1 << (SqlParser.PERIOD_ADD - 849)) | (1 << (SqlParser.PERIOD_DIFF - 849)) | (1 << (SqlParser.PI - 849)) | (1 << (SqlParser.POINTFROMTEXT - 849)) | (1 << (SqlParser.POINTFROMWKB - 849)) | (1 << (SqlParser.POINTN - 849)) | (1 << (SqlParser.POLYFROMTEXT - 849)) | (1 << (SqlParser.POLYFROMWKB - 849)) | (1 << (SqlParser.POLYGONFROMTEXT - 849)) | (1 << (SqlParser.POLYGONFROMWKB - 849)) | (1 << (SqlParser.POW - 849)) | (1 << (SqlParser.POWER - 849)) | (1 << (SqlParser.QUOTE - 849)) | (1 << (SqlParser.RADIANS - 849)) | (1 << (SqlParser.RAND - 849)) | (1 << (SqlParser.RANDOM_BYTES - 849)))) !== 0) || ((((_la - 881)) & ~0x1f) == 0 && ((1 << (_la - 881)) & ((1 << (SqlParser.RELEASE_LOCK - 881)) | (1 << (SqlParser.REVERSE - 881)) | (1 << (SqlParser.ROUND - 881)) | (1 << (SqlParser.ROW_COUNT - 881)) | (1 << (SqlParser.RPAD - 881)) | (1 << (SqlParser.RTRIM - 881)) | (1 << (SqlParser.SEC_TO_TIME - 881)) | (1 << (SqlParser.SESSION_USER - 881)) | (1 << (SqlParser.SHA - 881)) | (1 << (SqlParser.SHA1 - 881)) | (1 << (SqlParser.SHA2 - 881)) | (1 << (SqlParser.SCHEMA_NAME - 881)) | (1 << (SqlParser.SIGN - 881)) | (1 << (SqlParser.SIN - 881)) | (1 << (SqlParser.SLEEP - 881)) | (1 << (SqlParser.SOUNDEX - 881)) | (1 << (SqlParser.SQL_THREAD_WAIT_AFTER_GTIDS - 881)) | (1 << (SqlParser.SQRT - 881)) | (1 << (SqlParser.SRID - 881)) | (1 << (SqlParser.STARTPOINT - 881)) | (1 << (SqlParser.STRCMP - 881)) | (1 << (SqlParser.STR_TO_DATE - 881)) | (1 << (SqlParser.ST_AREA - 881)) | (1 << (SqlParser.ST_ASBINARY - 881)) | (1 << (SqlParser.ST_ASTEXT - 881)) | (1 << (SqlParser.ST_ASWKB - 881)) | (1 << (SqlParser.ST_ASWKT - 881)) | (1 << (SqlParser.ST_BUFFER - 881)) | (1 << (SqlParser.ST_CENTROID - 881)) | (1 << (SqlParser.ST_CONTAINS - 881)) | (1 << (SqlParser.ST_CROSSES - 881)) | (1 << (SqlParser.ST_DIFFERENCE - 881)))) !== 0) || ((((_la - 913)) & ~0x1f) == 0 && ((1 << (_la - 913)) & ((1 << (SqlParser.ST_DIMENSION - 913)) | (1 << (SqlParser.ST_DISJOINT - 913)) | (1 << (SqlParser.ST_DISTANCE - 913)) | (1 << (SqlParser.ST_ENDPOINT - 913)) | (1 << (SqlParser.ST_ENVELOPE - 913)) | (1 << (SqlParser.ST_EQUALS - 913)) | (1 << (SqlParser.ST_EXTERIORRING - 913)) | (1 << (SqlParser.ST_GEOMCOLLFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMCOLLFROMTXT - 913)) | (1 << (SqlParser.ST_GEOMCOLLFROMWKB - 913)) | (1 << (SqlParser.ST_GEOMETRYCOLLECTIONFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMETRYCOLLECTIONFROMWKB - 913)) | (1 << (SqlParser.ST_GEOMETRYFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMETRYFROMWKB - 913)) | (1 << (SqlParser.ST_GEOMETRYN - 913)) | (1 << (SqlParser.ST_GEOMETRYTYPE - 913)) | (1 << (SqlParser.ST_GEOMFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMFROMWKB - 913)) | (1 << (SqlParser.ST_INTERIORRINGN - 913)) | (1 << (SqlParser.ST_INTERSECTION - 913)) | (1 << (SqlParser.ST_INTERSECTS - 913)) | (1 << (SqlParser.ST_ISCLOSED - 913)) | (1 << (SqlParser.ST_ISEMPTY - 913)) | (1 << (SqlParser.ST_ISSIMPLE - 913)) | (1 << (SqlParser.ST_LINEFROMTEXT - 913)) | (1 << (SqlParser.ST_LINEFROMWKB - 913)) | (1 << (SqlParser.ST_LINESTRINGFROMTEXT - 913)) | (1 << (SqlParser.ST_LINESTRINGFROMWKB - 913)) | (1 << (SqlParser.ST_NUMGEOMETRIES - 913)) | (1 << (SqlParser.ST_NUMINTERIORRING - 913)) | (1 << (SqlParser.ST_NUMINTERIORRINGS - 913)) | (1 << (SqlParser.ST_NUMPOINTS - 913)))) !== 0) || ((((_la - 945)) & ~0x1f) == 0 && ((1 << (_la - 945)) & ((1 << (SqlParser.ST_OVERLAPS - 945)) | (1 << (SqlParser.ST_POINTFROMTEXT - 945)) | (1 << (SqlParser.ST_POINTFROMWKB - 945)) | (1 << (SqlParser.ST_POINTN - 945)) | (1 << (SqlParser.ST_POLYFROMTEXT - 945)) | (1 << (SqlParser.ST_POLYFROMWKB - 945)) | (1 << (SqlParser.ST_POLYGONFROMTEXT - 945)) | (1 << (SqlParser.ST_POLYGONFROMWKB - 945)) | (1 << (SqlParser.ST_SRID - 945)) | (1 << (SqlParser.ST_STARTPOINT - 945)) | (1 << (SqlParser.ST_SYMDIFFERENCE - 945)) | (1 << (SqlParser.ST_TOUCHES - 945)) | (1 << (SqlParser.ST_UNION - 945)) | (1 << (SqlParser.ST_WITHIN - 945)) | (1 << (SqlParser.ST_X - 945)) | (1 << (SqlParser.ST_Y - 945)) | (1 << (SqlParser.SUBDATE - 945)) | (1 << (SqlParser.SUBSTRING_INDEX - 945)) | (1 << (SqlParser.SUBTIME - 945)) | (1 << (SqlParser.SYSTEM_USER - 945)) | (1 << (SqlParser.TAN - 945)) | (1 << (SqlParser.TIMEDIFF - 945)) | (1 << (SqlParser.TIMESTAMPADD - 945)) | (1 << (SqlParser.TIMESTAMPDIFF - 945)) | (1 << (SqlParser.TIME_FORMAT - 945)) | (1 << (SqlParser.TIME_TO_SEC - 945)) | (1 << (SqlParser.TOUCHES - 945)) | (1 << (SqlParser.TO_BASE64 - 945)) | (1 << (SqlParser.TO_DAYS - 945)) | (1 << (SqlParser.TO_SECONDS - 945)) | (1 << (SqlParser.UCASE - 945)) | (1 << (SqlParser.UNCOMPRESS - 945)))) !== 0) || ((((_la - 977)) & ~0x1f) == 0 && ((1 << (_la - 977)) & ((1 << (SqlParser.UNCOMPRESSED_LENGTH - 977)) | (1 << (SqlParser.UNHEX - 977)) | (1 << (SqlParser.UNIX_TIMESTAMP - 977)) | (1 << (SqlParser.UPDATEXML - 977)) | (1 << (SqlParser.UPPER - 977)) | (1 << (SqlParser.UUID - 977)) | (1 << (SqlParser.UUID_SHORT - 977)) | (1 << (SqlParser.VALIDATE_PASSWORD_STRENGTH - 977)) | (1 << (SqlParser.VERSION - 977)) | (1 << (SqlParser.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS - 977)) | (1 << (SqlParser.WEEKDAY - 977)) | (1 << (SqlParser.WEEKOFYEAR - 977)) | (1 << (SqlParser.WEIGHT_STRING - 977)) | (1 << (SqlParser.WITHIN - 977)) | (1 << (SqlParser.YEARWEEK - 977)) | (1 << (SqlParser.Y_FUNCTION - 977)) | (1 << (SqlParser.X_FUNCTION - 977)))) !== 0) || ((((_la - 1043)) & ~0x1f) == 0 && ((1 << (_la - 1043)) & ((1 << (SqlParser.ID - 1043)) | (1 << (SqlParser.DOUBLE_QUOTE_ID - 1043)) | (1 << (SqlParser.REVERSE_QUOTE_ID - 1043)) | (1 << (SqlParser.BLOCKED_QUOTE_ID - 1043)))) !== 0)) {
                this.state = 263;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===SqlParser.AS) {
                    this.state = 262;
                    this.match(SqlParser.AS);
                }

                this.state = 265;
                localctx.alias = this.uid();
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FromClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_fromClause;
    this.whereExp = null; // ExpressionContext
    return this;
}

FromClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FromClauseContext.prototype.constructor = FromClauseContext;

FromClauseContext.prototype.FROM = function() {
    return this.getToken(SqlParser.FROM, 0);
};

FromClauseContext.prototype.tableSource = function() {
    return this.getTypedRuleContext(TableSourceContext,0);
};

FromClauseContext.prototype.WHERE = function() {
    return this.getToken(SqlParser.WHERE, 0);
};

FromClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FromClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitFromClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.FromClauseContext = FromClauseContext;

SqlParser.prototype.fromClause = function() {

    var localctx = new FromClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SqlParser.RULE_fromClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.match(SqlParser.FROM);
        this.state = 271;
        this.tableSource();
        this.state = 274;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.WHERE) {
            this.state = 272;
            this.match(SqlParser.WHERE);
            this.state = 273;
            localctx.whereExp = this.expression(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrderByClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_orderByClause;
    return this;
}

OrderByClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrderByClauseContext.prototype.constructor = OrderByClauseContext;

OrderByClauseContext.prototype.ORDER = function() {
    return this.getToken(SqlParser.ORDER, 0);
};

OrderByClauseContext.prototype.BY = function() {
    return this.getToken(SqlParser.BY, 0);
};

OrderByClauseContext.prototype.orderByExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OrderByExpressionContext);
    } else {
        return this.getTypedRuleContext(OrderByExpressionContext,i);
    }
};

OrderByClauseContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.COMMA);
    } else {
        return this.getToken(SqlParser.COMMA, i);
    }
};


OrderByClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitOrderByClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.OrderByClauseContext = OrderByClauseContext;

SqlParser.prototype.orderByClause = function() {

    var localctx = new OrderByClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SqlParser.RULE_orderByClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this.match(SqlParser.ORDER);
        this.state = 277;
        this.match(SqlParser.BY);
        this.state = 278;
        this.orderByExpression();
        this.state = 283;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 279;
            this.match(SqlParser.COMMA);
            this.state = 280;
            this.orderByExpression();
            this.state = 285;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrderByExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_orderByExpression;
    this.orderOn = null; // FullColumnNameContext
    this.orderBy = null; // Token
    return this;
}

OrderByExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrderByExpressionContext.prototype.constructor = OrderByExpressionContext;

OrderByExpressionContext.prototype.fullColumnName = function() {
    return this.getTypedRuleContext(FullColumnNameContext,0);
};

OrderByExpressionContext.prototype.ASC = function() {
    return this.getToken(SqlParser.ASC, 0);
};

OrderByExpressionContext.prototype.DESC = function() {
    return this.getToken(SqlParser.DESC, 0);
};

OrderByExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitOrderByExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.OrderByExpressionContext = OrderByExpressionContext;

SqlParser.prototype.orderByExpression = function() {

    var localctx = new OrderByExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SqlParser.RULE_orderByExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        localctx.orderOn = this.fullColumnName();
        this.state = 288;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.ASC || _la===SqlParser.DESC) {
            this.state = 287;
            localctx.orderBy = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===SqlParser.ASC || _la===SqlParser.DESC)) {
                localctx.orderBy = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TableSourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_tableSource;
    this.alias = null; // UidContext
    return this;
}

TableSourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableSourceContext.prototype.constructor = TableSourceContext;

TableSourceContext.prototype.tableName = function() {
    return this.getTypedRuleContext(TableNameContext,0);
};

TableSourceContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

TableSourceContext.prototype.AS = function() {
    return this.getToken(SqlParser.AS, 0);
};

TableSourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitTableSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.TableSourceContext = TableSourceContext;

SqlParser.prototype.tableSource = function() {

    var localctx = new TableSourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SqlParser.RULE_tableSource);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.tableName();
        this.state = 295;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.AS || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (SqlParser.CURRENT - 32)) | (1 << (SqlParser.DATABASE - 32)) | (1 << (SqlParser.DIAGNOSTICS - 32)))) !== 0) || _la===SqlParser.LEFT || _la===SqlParser.NUMBER || _la===SqlParser.RIGHT || _la===SqlParser.STACKED || ((((_la - 199)) & ~0x1f) == 0 && ((1 << (_la - 199)) & ((1 << (SqlParser.DATE - 199)) | (1 << (SqlParser.TIME - 199)) | (1 << (SqlParser.TIMESTAMP - 199)) | (1 << (SqlParser.DATETIME - 199)) | (1 << (SqlParser.YEAR - 199)) | (1 << (SqlParser.TEXT - 199)) | (1 << (SqlParser.ENUM - 199)) | (1 << (SqlParser.SERIAL - 199)))) !== 0) || ((((_la - 233)) & ~0x1f) == 0 && ((1 << (_la - 233)) & ((1 << (SqlParser.JSON_VALID - 233)) | (1 << (SqlParser.JSON_SCHEMA_VALID - 233)) | (1 << (SqlParser.COUNT - 233)) | (1 << (SqlParser.POSITION - 233)))) !== 0) || ((((_la - 270)) & ~0x1f) == 0 && ((1 << (_la - 270)) & ((1 << (SqlParser.ACCOUNT - 270)) | (1 << (SqlParser.ACTION - 270)) | (1 << (SqlParser.AFTER - 270)) | (1 << (SqlParser.AGGREGATE - 270)) | (1 << (SqlParser.ALGORITHM - 270)) | (1 << (SqlParser.ANY - 270)) | (1 << (SqlParser.AT - 270)) | (1 << (SqlParser.AUTHORS - 270)) | (1 << (SqlParser.AUTOCOMMIT - 270)) | (1 << (SqlParser.AUTOEXTEND_SIZE - 270)) | (1 << (SqlParser.AUTO_INCREMENT - 270)) | (1 << (SqlParser.AVG_ROW_LENGTH - 270)) | (1 << (SqlParser.BEGIN - 270)) | (1 << (SqlParser.BINLOG - 270)) | (1 << (SqlParser.BIT - 270)) | (1 << (SqlParser.BLOCK - 270)) | (1 << (SqlParser.BOOL - 270)) | (1 << (SqlParser.BOOLEAN - 270)) | (1 << (SqlParser.BTREE - 270)) | (1 << (SqlParser.CACHE - 270)) | (1 << (SqlParser.CASCADED - 270)) | (1 << (SqlParser.CHAIN - 270)) | (1 << (SqlParser.CHANGED - 270)) | (1 << (SqlParser.CHANNEL - 270)) | (1 << (SqlParser.CHECKSUM - 270)) | (1 << (SqlParser.PAGE_CHECKSUM - 270)) | (1 << (SqlParser.CIPHER - 270)) | (1 << (SqlParser.CLASS_ORIGIN - 270)) | (1 << (SqlParser.CLIENT - 270)) | (1 << (SqlParser.CLOSE - 270)) | (1 << (SqlParser.COALESCE - 270)) | (1 << (SqlParser.CODE - 270)))) !== 0) || ((((_la - 302)) & ~0x1f) == 0 && ((1 << (_la - 302)) & ((1 << (SqlParser.COLUMNS - 302)) | (1 << (SqlParser.COLUMN_FORMAT - 302)) | (1 << (SqlParser.COLUMN_NAME - 302)) | (1 << (SqlParser.COMMENT - 302)) | (1 << (SqlParser.COMMIT - 302)) | (1 << (SqlParser.COMPACT - 302)) | (1 << (SqlParser.COMPLETION - 302)) | (1 << (SqlParser.COMPRESSED - 302)) | (1 << (SqlParser.COMPRESSION - 302)) | (1 << (SqlParser.CONCURRENT - 302)) | (1 << (SqlParser.CONNECTION - 302)) | (1 << (SqlParser.CONSISTENT - 302)) | (1 << (SqlParser.CONSTRAINT_CATALOG - 302)) | (1 << (SqlParser.CONSTRAINT_SCHEMA - 302)) | (1 << (SqlParser.CONSTRAINT_NAME - 302)) | (1 << (SqlParser.CONTAINS - 302)) | (1 << (SqlParser.CONTEXT - 302)) | (1 << (SqlParser.CONTRIBUTORS - 302)) | (1 << (SqlParser.COPY - 302)) | (1 << (SqlParser.CPU - 302)) | (1 << (SqlParser.CURSOR_NAME - 302)) | (1 << (SqlParser.DATA - 302)) | (1 << (SqlParser.DATAFILE - 302)) | (1 << (SqlParser.DEALLOCATE - 302)) | (1 << (SqlParser.DEFAULT_AUTH - 302)) | (1 << (SqlParser.DEFINER - 302)) | (1 << (SqlParser.DELAY_KEY_WRITE - 302)) | (1 << (SqlParser.DES_KEY_FILE - 302)) | (1 << (SqlParser.DIRECTORY - 302)) | (1 << (SqlParser.DISABLE - 302)) | (1 << (SqlParser.DISCARD - 302)) | (1 << (SqlParser.DISK - 302)))) !== 0) || ((((_la - 334)) & ~0x1f) == 0 && ((1 << (_la - 334)) & ((1 << (SqlParser.DO - 334)) | (1 << (SqlParser.DUMPFILE - 334)) | (1 << (SqlParser.DUPLICATE - 334)) | (1 << (SqlParser.DYNAMIC - 334)) | (1 << (SqlParser.ENABLE - 334)) | (1 << (SqlParser.ENCRYPTION - 334)) | (1 << (SqlParser.END - 334)) | (1 << (SqlParser.ENDS - 334)) | (1 << (SqlParser.ENGINE - 334)) | (1 << (SqlParser.ENGINES - 334)) | (1 << (SqlParser.ERROR - 334)) | (1 << (SqlParser.ERRORS - 334)) | (1 << (SqlParser.ESCAPE - 334)) | (1 << (SqlParser.EVEN - 334)) | (1 << (SqlParser.EVENT - 334)) | (1 << (SqlParser.EVENTS - 334)) | (1 << (SqlParser.EVERY - 334)) | (1 << (SqlParser.EXCHANGE - 334)) | (1 << (SqlParser.EXCLUSIVE - 334)) | (1 << (SqlParser.EXPIRE - 334)) | (1 << (SqlParser.EXPORT - 334)) | (1 << (SqlParser.EXTENDED - 334)) | (1 << (SqlParser.EXTENT_SIZE - 334)) | (1 << (SqlParser.FAST - 334)) | (1 << (SqlParser.FAULTS - 334)) | (1 << (SqlParser.FIELDS - 334)) | (1 << (SqlParser.FILE_BLOCK_SIZE - 334)) | (1 << (SqlParser.FILTER - 334)) | (1 << (SqlParser.FIRST - 334)) | (1 << (SqlParser.FIXED - 334)) | (1 << (SqlParser.FLUSH - 334)) | (1 << (SqlParser.FOLLOWS - 334)))) !== 0) || ((((_la - 366)) & ~0x1f) == 0 && ((1 << (_la - 366)) & ((1 << (SqlParser.FOUND - 366)) | (1 << (SqlParser.FULL - 366)) | (1 << (SqlParser.FUNCTION - 366)) | (1 << (SqlParser.GENERAL - 366)) | (1 << (SqlParser.GLOBAL - 366)) | (1 << (SqlParser.GRANTS - 366)) | (1 << (SqlParser.GROUP_REPLICATION - 366)) | (1 << (SqlParser.HANDLER - 366)) | (1 << (SqlParser.HASH - 366)) | (1 << (SqlParser.HELP - 366)) | (1 << (SqlParser.HOST - 366)) | (1 << (SqlParser.HOSTS - 366)) | (1 << (SqlParser.IDENTIFIED - 366)) | (1 << (SqlParser.IGNORE_SERVER_IDS - 366)) | (1 << (SqlParser.IMPORT - 366)) | (1 << (SqlParser.INDEXES - 366)) | (1 << (SqlParser.INITIAL_SIZE - 366)) | (1 << (SqlParser.INPLACE - 366)) | (1 << (SqlParser.INSERT_METHOD - 366)) | (1 << (SqlParser.INSTALL - 366)) | (1 << (SqlParser.INSTANCE - 366)) | (1 << (SqlParser.INVISIBLE - 366)) | (1 << (SqlParser.INVOKER - 366)) | (1 << (SqlParser.IO - 366)) | (1 << (SqlParser.IO_THREAD - 366)) | (1 << (SqlParser.IPC - 366)) | (1 << (SqlParser.ISOLATION - 366)) | (1 << (SqlParser.ISSUER - 366)) | (1 << (SqlParser.JSON - 366)) | (1 << (SqlParser.KEY_BLOCK_SIZE - 366)) | (1 << (SqlParser.LANGUAGE - 366)) | (1 << (SqlParser.LAST - 366)))) !== 0) || ((((_la - 398)) & ~0x1f) == 0 && ((1 << (_la - 398)) & ((1 << (SqlParser.LEAVES - 398)) | (1 << (SqlParser.LESS - 398)) | (1 << (SqlParser.LEVEL - 398)) | (1 << (SqlParser.LIST - 398)) | (1 << (SqlParser.LOCAL - 398)) | (1 << (SqlParser.LOGFILE - 398)) | (1 << (SqlParser.LOGS - 398)) | (1 << (SqlParser.MASTER - 398)) | (1 << (SqlParser.MASTER_AUTO_POSITION - 398)) | (1 << (SqlParser.MASTER_CONNECT_RETRY - 398)) | (1 << (SqlParser.MASTER_DELAY - 398)) | (1 << (SqlParser.MASTER_HEARTBEAT_PERIOD - 398)) | (1 << (SqlParser.MASTER_HOST - 398)) | (1 << (SqlParser.MASTER_LOG_FILE - 398)) | (1 << (SqlParser.MASTER_LOG_POS - 398)) | (1 << (SqlParser.MASTER_PASSWORD - 398)) | (1 << (SqlParser.MASTER_PORT - 398)) | (1 << (SqlParser.MASTER_RETRY_COUNT - 398)) | (1 << (SqlParser.MASTER_SSL - 398)) | (1 << (SqlParser.MASTER_SSL_CA - 398)) | (1 << (SqlParser.MASTER_SSL_CAPATH - 398)) | (1 << (SqlParser.MASTER_SSL_CERT - 398)) | (1 << (SqlParser.MASTER_SSL_CIPHER - 398)) | (1 << (SqlParser.MASTER_SSL_CRL - 398)) | (1 << (SqlParser.MASTER_SSL_CRLPATH - 398)) | (1 << (SqlParser.MASTER_SSL_KEY - 398)) | (1 << (SqlParser.MASTER_TLS_VERSION - 398)) | (1 << (SqlParser.MASTER_USER - 398)) | (1 << (SqlParser.MAX_CONNECTIONS_PER_HOUR - 398)) | (1 << (SqlParser.MAX_QUERIES_PER_HOUR - 398)) | (1 << (SqlParser.MAX_ROWS - 398)) | (1 << (SqlParser.MAX_SIZE - 398)))) !== 0) || ((((_la - 430)) & ~0x1f) == 0 && ((1 << (_la - 430)) & ((1 << (SqlParser.MAX_UPDATES_PER_HOUR - 430)) | (1 << (SqlParser.MAX_USER_CONNECTIONS - 430)) | (1 << (SqlParser.MEDIUM - 430)) | (1 << (SqlParser.MERGE - 430)) | (1 << (SqlParser.MESSAGE_TEXT - 430)) | (1 << (SqlParser.MID - 430)) | (1 << (SqlParser.MIGRATE - 430)) | (1 << (SqlParser.MIN_ROWS - 430)) | (1 << (SqlParser.MODE - 430)) | (1 << (SqlParser.MODIFY - 430)) | (1 << (SqlParser.MUTEX - 430)) | (1 << (SqlParser.MYSQL - 430)) | (1 << (SqlParser.MYSQL_ERRNO - 430)) | (1 << (SqlParser.NAME - 430)) | (1 << (SqlParser.NAMES - 430)) | (1 << (SqlParser.NCHAR - 430)) | (1 << (SqlParser.NEVER - 430)) | (1 << (SqlParser.NEXT - 430)) | (1 << (SqlParser.NO - 430)) | (1 << (SqlParser.NODEGROUP - 430)) | (1 << (SqlParser.NONE - 430)) | (1 << (SqlParser.OFFLINE - 430)) | (1 << (SqlParser.OFFSET - 430)) | (1 << (SqlParser.OJ - 430)) | (1 << (SqlParser.OLD_PASSWORD - 430)) | (1 << (SqlParser.ONE - 430)) | (1 << (SqlParser.ONLINE - 430)) | (1 << (SqlParser.ONLY - 430)) | (1 << (SqlParser.OPEN - 430)) | (1 << (SqlParser.OPTIMIZER_COSTS - 430)) | (1 << (SqlParser.OPTIONS - 430)) | (1 << (SqlParser.OWNER - 430)))) !== 0) || ((((_la - 462)) & ~0x1f) == 0 && ((1 << (_la - 462)) & ((1 << (SqlParser.PACK_KEYS - 462)) | (1 << (SqlParser.PAGE - 462)) | (1 << (SqlParser.PARSER - 462)) | (1 << (SqlParser.PARTIAL - 462)) | (1 << (SqlParser.PARTITIONING - 462)) | (1 << (SqlParser.PARTITIONS - 462)) | (1 << (SqlParser.PASSWORD - 462)) | (1 << (SqlParser.PHASE - 462)) | (1 << (SqlParser.PLUGIN - 462)) | (1 << (SqlParser.PLUGIN_DIR - 462)) | (1 << (SqlParser.PLUGINS - 462)) | (1 << (SqlParser.PORT - 462)) | (1 << (SqlParser.PRECEDES - 462)) | (1 << (SqlParser.PREPARE - 462)) | (1 << (SqlParser.PRESERVE - 462)) | (1 << (SqlParser.PREV - 462)) | (1 << (SqlParser.PROCESSLIST - 462)) | (1 << (SqlParser.PROFILE - 462)) | (1 << (SqlParser.PROFILES - 462)) | (1 << (SqlParser.PROXY - 462)) | (1 << (SqlParser.QUERY - 462)) | (1 << (SqlParser.QUICK - 462)) | (1 << (SqlParser.REBUILD - 462)) | (1 << (SqlParser.RECOVER - 462)) | (1 << (SqlParser.REDO_BUFFER_SIZE - 462)) | (1 << (SqlParser.REDUNDANT - 462)) | (1 << (SqlParser.RELAY - 462)) | (1 << (SqlParser.RELAY_LOG_FILE - 462)) | (1 << (SqlParser.RELAY_LOG_POS - 462)) | (1 << (SqlParser.RELAYLOG - 462)) | (1 << (SqlParser.REMOVE - 462)) | (1 << (SqlParser.REORGANIZE - 462)))) !== 0) || ((((_la - 494)) & ~0x1f) == 0 && ((1 << (_la - 494)) & ((1 << (SqlParser.REPAIR - 494)) | (1 << (SqlParser.REPLICATE_DO_DB - 494)) | (1 << (SqlParser.REPLICATE_DO_TABLE - 494)) | (1 << (SqlParser.REPLICATE_IGNORE_DB - 494)) | (1 << (SqlParser.REPLICATE_IGNORE_TABLE - 494)) | (1 << (SqlParser.REPLICATE_REWRITE_DB - 494)) | (1 << (SqlParser.REPLICATE_WILD_DO_TABLE - 494)) | (1 << (SqlParser.REPLICATE_WILD_IGNORE_TABLE - 494)) | (1 << (SqlParser.REPLICATION - 494)) | (1 << (SqlParser.RESET - 494)) | (1 << (SqlParser.RESUME - 494)) | (1 << (SqlParser.RETURNED_SQLSTATE - 494)) | (1 << (SqlParser.RETURNS - 494)) | (1 << (SqlParser.ROLE - 494)) | (1 << (SqlParser.ROLLBACK - 494)) | (1 << (SqlParser.ROLLUP - 494)) | (1 << (SqlParser.ROTATE - 494)) | (1 << (SqlParser.ROW - 494)) | (1 << (SqlParser.ROWS - 494)) | (1 << (SqlParser.ROW_FORMAT - 494)) | (1 << (SqlParser.SAVEPOINT - 494)) | (1 << (SqlParser.SCHEDULE - 494)) | (1 << (SqlParser.SECURITY - 494)) | (1 << (SqlParser.SERVER - 494)) | (1 << (SqlParser.SESSION - 494)) | (1 << (SqlParser.SHARE - 494)) | (1 << (SqlParser.SHARED - 494)) | (1 << (SqlParser.SIGNED - 494)) | (1 << (SqlParser.SIMPLE - 494)) | (1 << (SqlParser.SLAVE - 494)) | (1 << (SqlParser.SLOW - 494)) | (1 << (SqlParser.SNAPSHOT - 494)))) !== 0) || ((((_la - 526)) & ~0x1f) == 0 && ((1 << (_la - 526)) & ((1 << (SqlParser.SOCKET - 526)) | (1 << (SqlParser.SOME - 526)) | (1 << (SqlParser.SONAME - 526)) | (1 << (SqlParser.SOUNDS - 526)) | (1 << (SqlParser.SOURCE - 526)) | (1 << (SqlParser.SQL_AFTER_GTIDS - 526)) | (1 << (SqlParser.SQL_AFTER_MTS_GAPS - 526)) | (1 << (SqlParser.SQL_BEFORE_GTIDS - 526)) | (1 << (SqlParser.SQL_BUFFER_RESULT - 526)) | (1 << (SqlParser.SQL_CACHE - 526)) | (1 << (SqlParser.SQL_NO_CACHE - 526)) | (1 << (SqlParser.SQL_THREAD - 526)) | (1 << (SqlParser.START - 526)) | (1 << (SqlParser.STARTS - 526)) | (1 << (SqlParser.STATS_AUTO_RECALC - 526)) | (1 << (SqlParser.STATS_PERSISTENT - 526)) | (1 << (SqlParser.STATS_SAMPLE_PAGES - 526)) | (1 << (SqlParser.STATUS - 526)) | (1 << (SqlParser.STOP - 526)) | (1 << (SqlParser.STORAGE - 526)) | (1 << (SqlParser.STRING - 526)) | (1 << (SqlParser.SUBCLASS_ORIGIN - 526)) | (1 << (SqlParser.SUBJECT - 526)) | (1 << (SqlParser.SUBPARTITION - 526)) | (1 << (SqlParser.SUBPARTITIONS - 526)) | (1 << (SqlParser.SUSPEND - 526)) | (1 << (SqlParser.SWAPS - 526)) | (1 << (SqlParser.SWITCHES - 526)) | (1 << (SqlParser.TABLE_NAME - 526)) | (1 << (SqlParser.TABLESPACE - 526)) | (1 << (SqlParser.TEMPORARY - 526)))) !== 0) || ((((_la - 558)) & ~0x1f) == 0 && ((1 << (_la - 558)) & ((1 << (SqlParser.TEMPTABLE - 558)) | (1 << (SqlParser.THAN - 558)) | (1 << (SqlParser.TRADITIONAL - 558)) | (1 << (SqlParser.TRANSACTION - 558)) | (1 << (SqlParser.TRANSACTIONAL - 558)) | (1 << (SqlParser.TRIGGERS - 558)) | (1 << (SqlParser.TRUNCATE - 558)) | (1 << (SqlParser.UNDEFINED - 558)) | (1 << (SqlParser.UNDOFILE - 558)) | (1 << (SqlParser.UNDO_BUFFER_SIZE - 558)) | (1 << (SqlParser.UNINSTALL - 558)) | (1 << (SqlParser.UNKNOWN - 558)) | (1 << (SqlParser.UNTIL - 558)) | (1 << (SqlParser.UPGRADE - 558)) | (1 << (SqlParser.USER - 558)) | (1 << (SqlParser.USE_FRM - 558)) | (1 << (SqlParser.USER_RESOURCES - 558)) | (1 << (SqlParser.VALIDATION - 558)) | (1 << (SqlParser.VALUE - 558)) | (1 << (SqlParser.VARIABLES - 558)) | (1 << (SqlParser.VIEW - 558)) | (1 << (SqlParser.VISIBLE - 558)) | (1 << (SqlParser.WAIT - 558)) | (1 << (SqlParser.WARNINGS - 558)) | (1 << (SqlParser.WITHOUT - 558)) | (1 << (SqlParser.WORK - 558)) | (1 << (SqlParser.WRAPPER - 558)) | (1 << (SqlParser.X509 - 558)) | (1 << (SqlParser.XA - 558)) | (1 << (SqlParser.XML - 558)))) !== 0) || ((((_la - 593)) & ~0x1f) == 0 && ((1 << (_la - 593)) & ((1 << (SqlParser.INTERNAL - 593)) | (1 << (SqlParser.QUARTER - 593)) | (1 << (SqlParser.MONTH - 593)) | (1 << (SqlParser.DAY - 593)) | (1 << (SqlParser.HOUR - 593)) | (1 << (SqlParser.MINUTE - 593)) | (1 << (SqlParser.WEEK - 593)) | (1 << (SqlParser.SECOND - 593)) | (1 << (SqlParser.MICROSECOND - 593)) | (1 << (SqlParser.TABLES - 593)) | (1 << (SqlParser.ROUTINE - 593)) | (1 << (SqlParser.EXECUTE - 593)) | (1 << (SqlParser.FILE - 593)) | (1 << (SqlParser.PROCESS - 593)) | (1 << (SqlParser.RELOAD - 593)) | (1 << (SqlParser.SHUTDOWN - 593)) | (1 << (SqlParser.SUPER - 593)) | (1 << (SqlParser.PRIVILEGES - 593)) | (1 << (SqlParser.AUDIT_ADMIN - 593)) | (1 << (SqlParser.BACKUP_ADMIN - 593)) | (1 << (SqlParser.BINLOG_ADMIN - 593)) | (1 << (SqlParser.BINLOG_ENCRYPTION_ADMIN - 593)) | (1 << (SqlParser.CLONE_ADMIN - 593)) | (1 << (SqlParser.CONNECTION_ADMIN - 593)) | (1 << (SqlParser.ENCRYPTION_KEY_ADMIN - 593)) | (1 << (SqlParser.FIREWALL_ADMIN - 593)) | (1 << (SqlParser.FIREWALL_USER - 593)) | (1 << (SqlParser.GROUP_REPLICATION_ADMIN - 593)) | (1 << (SqlParser.INNODB_REDO_LOG_ARCHIVE - 593)) | (1 << (SqlParser.NDB_STORED_USER - 593)) | (1 << (SqlParser.PERSIST_RO_VARIABLES_ADMIN - 593)))) !== 0) || ((((_la - 625)) & ~0x1f) == 0 && ((1 << (_la - 625)) & ((1 << (SqlParser.REPLICATION_APPLIER - 625)) | (1 << (SqlParser.REPLICATION_SLAVE_ADMIN - 625)) | (1 << (SqlParser.RESOURCE_GROUP_ADMIN - 625)) | (1 << (SqlParser.RESOURCE_GROUP_USER - 625)) | (1 << (SqlParser.ROLE_ADMIN - 625)) | (1 << (SqlParser.SESSION_VARIABLES_ADMIN - 625)) | (1 << (SqlParser.SET_USER_ID - 625)) | (1 << (SqlParser.SHOW_ROUTINE - 625)) | (1 << (SqlParser.SYSTEM_VARIABLES_ADMIN - 625)) | (1 << (SqlParser.TABLE_ENCRYPTION_ADMIN - 625)) | (1 << (SqlParser.VERSION_TOKEN_ADMIN - 625)) | (1 << (SqlParser.XA_RECOVER_ADMIN - 625)) | (1 << (SqlParser.ARMSCII8 - 625)) | (1 << (SqlParser.ASCII - 625)) | (1 << (SqlParser.BIG5 - 625)) | (1 << (SqlParser.CP1250 - 625)) | (1 << (SqlParser.CP1251 - 625)) | (1 << (SqlParser.CP1256 - 625)) | (1 << (SqlParser.CP1257 - 625)) | (1 << (SqlParser.CP850 - 625)) | (1 << (SqlParser.CP852 - 625)) | (1 << (SqlParser.CP866 - 625)) | (1 << (SqlParser.CP932 - 625)) | (1 << (SqlParser.DEC8 - 625)) | (1 << (SqlParser.EUCJPMS - 625)) | (1 << (SqlParser.EUCKR - 625)) | (1 << (SqlParser.GB2312 - 625)) | (1 << (SqlParser.GBK - 625)) | (1 << (SqlParser.GEOSTD8 - 625)) | (1 << (SqlParser.GREEK - 625)) | (1 << (SqlParser.HEBREW - 625)) | (1 << (SqlParser.HP8 - 625)))) !== 0) || ((((_la - 657)) & ~0x1f) == 0 && ((1 << (_la - 657)) & ((1 << (SqlParser.KEYBCS2 - 657)) | (1 << (SqlParser.KOI8R - 657)) | (1 << (SqlParser.KOI8U - 657)) | (1 << (SqlParser.LATIN1 - 657)) | (1 << (SqlParser.LATIN2 - 657)) | (1 << (SqlParser.LATIN5 - 657)) | (1 << (SqlParser.LATIN7 - 657)) | (1 << (SqlParser.MACCE - 657)) | (1 << (SqlParser.MACROMAN - 657)) | (1 << (SqlParser.SJIS - 657)) | (1 << (SqlParser.SWE7 - 657)) | (1 << (SqlParser.TIS620 - 657)) | (1 << (SqlParser.UCS2 - 657)) | (1 << (SqlParser.UJIS - 657)) | (1 << (SqlParser.UTF16 - 657)) | (1 << (SqlParser.UTF16LE - 657)) | (1 << (SqlParser.UTF32 - 657)) | (1 << (SqlParser.UTF8 - 657)) | (1 << (SqlParser.UTF8MB3 - 657)) | (1 << (SqlParser.UTF8MB4 - 657)) | (1 << (SqlParser.ARCHIVE - 657)) | (1 << (SqlParser.BLACKHOLE - 657)) | (1 << (SqlParser.CSV - 657)) | (1 << (SqlParser.FEDERATED - 657)) | (1 << (SqlParser.INNODB - 657)) | (1 << (SqlParser.MEMORY - 657)) | (1 << (SqlParser.MRG_MYISAM - 657)) | (1 << (SqlParser.MYISAM - 657)) | (1 << (SqlParser.NDB - 657)) | (1 << (SqlParser.NDBCLUSTER - 657)) | (1 << (SqlParser.PERFORMANCE_SCHEMA - 657)) | (1 << (SqlParser.TOKUDB - 657)))) !== 0) || ((((_la - 689)) & ~0x1f) == 0 && ((1 << (_la - 689)) & ((1 << (SqlParser.REPEATABLE - 689)) | (1 << (SqlParser.COMMITTED - 689)) | (1 << (SqlParser.UNCOMMITTED - 689)) | (1 << (SqlParser.SERIALIZABLE - 689)) | (1 << (SqlParser.GEOMETRYCOLLECTION - 689)) | (1 << (SqlParser.LINESTRING - 689)) | (1 << (SqlParser.MULTILINESTRING - 689)) | (1 << (SqlParser.MULTIPOINT - 689)) | (1 << (SqlParser.MULTIPOLYGON - 689)) | (1 << (SqlParser.POINT - 689)) | (1 << (SqlParser.POLYGON - 689)) | (1 << (SqlParser.ABS - 689)) | (1 << (SqlParser.ACOS - 689)) | (1 << (SqlParser.ADDDATE - 689)) | (1 << (SqlParser.ADDTIME - 689)) | (1 << (SqlParser.AES_DECRYPT - 689)) | (1 << (SqlParser.AES_ENCRYPT - 689)) | (1 << (SqlParser.AREA - 689)) | (1 << (SqlParser.ASBINARY - 689)) | (1 << (SqlParser.ASIN - 689)) | (1 << (SqlParser.ASTEXT - 689)) | (1 << (SqlParser.ASWKB - 689)) | (1 << (SqlParser.ASWKT - 689)) | (1 << (SqlParser.ASYMMETRIC_DECRYPT - 689)) | (1 << (SqlParser.ASYMMETRIC_DERIVE - 689)) | (1 << (SqlParser.ASYMMETRIC_ENCRYPT - 689)) | (1 << (SqlParser.ASYMMETRIC_SIGN - 689)) | (1 << (SqlParser.ASYMMETRIC_VERIFY - 689)) | (1 << (SqlParser.ATAN - 689)) | (1 << (SqlParser.ATAN2 - 689)))) !== 0) || ((((_la - 721)) & ~0x1f) == 0 && ((1 << (_la - 721)) & ((1 << (SqlParser.BENCHMARK - 721)) | (1 << (SqlParser.BIN - 721)) | (1 << (SqlParser.BIT_COUNT - 721)) | (1 << (SqlParser.BIT_LENGTH - 721)) | (1 << (SqlParser.BUFFER - 721)) | (1 << (SqlParser.CATALOG_NAME - 721)) | (1 << (SqlParser.CEIL - 721)) | (1 << (SqlParser.CEILING - 721)) | (1 << (SqlParser.CENTROID - 721)) | (1 << (SqlParser.CHARACTER_LENGTH - 721)) | (1 << (SqlParser.CHARSET - 721)) | (1 << (SqlParser.CHAR_LENGTH - 721)) | (1 << (SqlParser.COERCIBILITY - 721)) | (1 << (SqlParser.COLLATION - 721)) | (1 << (SqlParser.COMPRESS - 721)) | (1 << (SqlParser.CONCAT - 721)) | (1 << (SqlParser.CONCAT_WS - 721)) | (1 << (SqlParser.CONNECTION_ID - 721)) | (1 << (SqlParser.CONV - 721)) | (1 << (SqlParser.CONVERT_TZ - 721)) | (1 << (SqlParser.COS - 721)) | (1 << (SqlParser.COT - 721)) | (1 << (SqlParser.CRC32 - 721)) | (1 << (SqlParser.CREATE_ASYMMETRIC_PRIV_KEY - 721)) | (1 << (SqlParser.CREATE_ASYMMETRIC_PUB_KEY - 721)) | (1 << (SqlParser.CREATE_DH_PARAMETERS - 721)) | (1 << (SqlParser.CREATE_DIGEST - 721)) | (1 << (SqlParser.CROSSES - 721)) | (1 << (SqlParser.DATEDIFF - 721)) | (1 << (SqlParser.DATE_FORMAT - 721)) | (1 << (SqlParser.DAYNAME - 721)) | (1 << (SqlParser.DAYOFMONTH - 721)))) !== 0) || ((((_la - 753)) & ~0x1f) == 0 && ((1 << (_la - 753)) & ((1 << (SqlParser.DAYOFWEEK - 753)) | (1 << (SqlParser.DAYOFYEAR - 753)) | (1 << (SqlParser.DECODE - 753)) | (1 << (SqlParser.DEGREES - 753)) | (1 << (SqlParser.DES_DECRYPT - 753)) | (1 << (SqlParser.DES_ENCRYPT - 753)) | (1 << (SqlParser.DIMENSION - 753)) | (1 << (SqlParser.DISJOINT - 753)) | (1 << (SqlParser.ELT - 753)) | (1 << (SqlParser.ENCODE - 753)) | (1 << (SqlParser.ENCRYPT - 753)) | (1 << (SqlParser.ENDPOINT - 753)) | (1 << (SqlParser.ENVELOPE - 753)) | (1 << (SqlParser.EQUALS - 753)) | (1 << (SqlParser.EXP - 753)) | (1 << (SqlParser.EXPORT_SET - 753)) | (1 << (SqlParser.EXTERIORRING - 753)) | (1 << (SqlParser.EXTRACTVALUE - 753)) | (1 << (SqlParser.FIELD - 753)) | (1 << (SqlParser.FIND_IN_SET - 753)) | (1 << (SqlParser.FLOOR - 753)) | (1 << (SqlParser.FORMAT - 753)) | (1 << (SqlParser.FOUND_ROWS - 753)) | (1 << (SqlParser.FROM_BASE64 - 753)) | (1 << (SqlParser.FROM_DAYS - 753)) | (1 << (SqlParser.FROM_UNIXTIME - 753)) | (1 << (SqlParser.GEOMCOLLFROMTEXT - 753)) | (1 << (SqlParser.GEOMCOLLFROMWKB - 753)) | (1 << (SqlParser.GEOMETRYCOLLECTIONFROMTEXT - 753)) | (1 << (SqlParser.GEOMETRYCOLLECTIONFROMWKB - 753)) | (1 << (SqlParser.GEOMETRYFROMTEXT - 753)) | (1 << (SqlParser.GEOMETRYFROMWKB - 753)))) !== 0) || ((((_la - 785)) & ~0x1f) == 0 && ((1 << (_la - 785)) & ((1 << (SqlParser.GEOMETRYN - 785)) | (1 << (SqlParser.GEOMETRYTYPE - 785)) | (1 << (SqlParser.GEOMFROMTEXT - 785)) | (1 << (SqlParser.GEOMFROMWKB - 785)) | (1 << (SqlParser.GET_FORMAT - 785)) | (1 << (SqlParser.GET_LOCK - 785)) | (1 << (SqlParser.GLENGTH - 785)) | (1 << (SqlParser.GREATEST - 785)) | (1 << (SqlParser.GTID_SUBSET - 785)) | (1 << (SqlParser.GTID_SUBTRACT - 785)) | (1 << (SqlParser.HEX - 785)) | (1 << (SqlParser.IFNULL - 785)) | (1 << (SqlParser.INET6_ATON - 785)) | (1 << (SqlParser.INET6_NTOA - 785)) | (1 << (SqlParser.INET_ATON - 785)) | (1 << (SqlParser.INET_NTOA - 785)) | (1 << (SqlParser.INSTR - 785)) | (1 << (SqlParser.INTERIORRINGN - 785)) | (1 << (SqlParser.INTERSECTS - 785)) | (1 << (SqlParser.ISCLOSED - 785)) | (1 << (SqlParser.ISEMPTY - 785)) | (1 << (SqlParser.ISNULL - 785)) | (1 << (SqlParser.ISSIMPLE - 785)) | (1 << (SqlParser.IS_FREE_LOCK - 785)) | (1 << (SqlParser.IS_IPV4 - 785)) | (1 << (SqlParser.IS_IPV4_COMPAT - 785)) | (1 << (SqlParser.IS_IPV4_MAPPED - 785)) | (1 << (SqlParser.IS_IPV6 - 785)) | (1 << (SqlParser.IS_USED_LOCK - 785)) | (1 << (SqlParser.LAST_INSERT_ID - 785)) | (1 << (SqlParser.LCASE - 785)) | (1 << (SqlParser.LEAST - 785)))) !== 0) || ((((_la - 817)) & ~0x1f) == 0 && ((1 << (_la - 817)) & ((1 << (SqlParser.LENGTH - 817)) | (1 << (SqlParser.LINEFROMTEXT - 817)) | (1 << (SqlParser.LINEFROMWKB - 817)) | (1 << (SqlParser.LINESTRINGFROMTEXT - 817)) | (1 << (SqlParser.LINESTRINGFROMWKB - 817)) | (1 << (SqlParser.LN - 817)) | (1 << (SqlParser.LOAD_FILE - 817)) | (1 << (SqlParser.LOCATE - 817)) | (1 << (SqlParser.LOG - 817)) | (1 << (SqlParser.LOG10 - 817)) | (1 << (SqlParser.LOG2 - 817)) | (1 << (SqlParser.LOWER - 817)) | (1 << (SqlParser.LPAD - 817)) | (1 << (SqlParser.LTRIM - 817)) | (1 << (SqlParser.MAKEDATE - 817)) | (1 << (SqlParser.MAKETIME - 817)) | (1 << (SqlParser.MAKE_SET - 817)) | (1 << (SqlParser.MASTER_POS_WAIT - 817)) | (1 << (SqlParser.MBRCONTAINS - 817)) | (1 << (SqlParser.MBRDISJOINT - 817)) | (1 << (SqlParser.MBREQUAL - 817)) | (1 << (SqlParser.MBRINTERSECTS - 817)) | (1 << (SqlParser.MBROVERLAPS - 817)) | (1 << (SqlParser.MBRTOUCHES - 817)) | (1 << (SqlParser.MBRWITHIN - 817)) | (1 << (SqlParser.MD5 - 817)) | (1 << (SqlParser.MLINEFROMTEXT - 817)) | (1 << (SqlParser.MLINEFROMWKB - 817)) | (1 << (SqlParser.MONTHNAME - 817)) | (1 << (SqlParser.MPOINTFROMTEXT - 817)) | (1 << (SqlParser.MPOINTFROMWKB - 817)) | (1 << (SqlParser.MPOLYFROMTEXT - 817)))) !== 0) || ((((_la - 849)) & ~0x1f) == 0 && ((1 << (_la - 849)) & ((1 << (SqlParser.MPOLYFROMWKB - 849)) | (1 << (SqlParser.MULTILINESTRINGFROMTEXT - 849)) | (1 << (SqlParser.MULTILINESTRINGFROMWKB - 849)) | (1 << (SqlParser.MULTIPOINTFROMTEXT - 849)) | (1 << (SqlParser.MULTIPOINTFROMWKB - 849)) | (1 << (SqlParser.MULTIPOLYGONFROMTEXT - 849)) | (1 << (SqlParser.MULTIPOLYGONFROMWKB - 849)) | (1 << (SqlParser.NAME_CONST - 849)) | (1 << (SqlParser.NULLIF - 849)) | (1 << (SqlParser.NUMGEOMETRIES - 849)) | (1 << (SqlParser.NUMINTERIORRINGS - 849)) | (1 << (SqlParser.NUMPOINTS - 849)) | (1 << (SqlParser.OCT - 849)) | (1 << (SqlParser.OCTET_LENGTH - 849)) | (1 << (SqlParser.ORD - 849)) | (1 << (SqlParser.OVERLAPS - 849)) | (1 << (SqlParser.PERIOD_ADD - 849)) | (1 << (SqlParser.PERIOD_DIFF - 849)) | (1 << (SqlParser.PI - 849)) | (1 << (SqlParser.POINTFROMTEXT - 849)) | (1 << (SqlParser.POINTFROMWKB - 849)) | (1 << (SqlParser.POINTN - 849)) | (1 << (SqlParser.POLYFROMTEXT - 849)) | (1 << (SqlParser.POLYFROMWKB - 849)) | (1 << (SqlParser.POLYGONFROMTEXT - 849)) | (1 << (SqlParser.POLYGONFROMWKB - 849)) | (1 << (SqlParser.POW - 849)) | (1 << (SqlParser.POWER - 849)) | (1 << (SqlParser.QUOTE - 849)) | (1 << (SqlParser.RADIANS - 849)) | (1 << (SqlParser.RAND - 849)) | (1 << (SqlParser.RANDOM_BYTES - 849)))) !== 0) || ((((_la - 881)) & ~0x1f) == 0 && ((1 << (_la - 881)) & ((1 << (SqlParser.RELEASE_LOCK - 881)) | (1 << (SqlParser.REVERSE - 881)) | (1 << (SqlParser.ROUND - 881)) | (1 << (SqlParser.ROW_COUNT - 881)) | (1 << (SqlParser.RPAD - 881)) | (1 << (SqlParser.RTRIM - 881)) | (1 << (SqlParser.SEC_TO_TIME - 881)) | (1 << (SqlParser.SESSION_USER - 881)) | (1 << (SqlParser.SHA - 881)) | (1 << (SqlParser.SHA1 - 881)) | (1 << (SqlParser.SHA2 - 881)) | (1 << (SqlParser.SCHEMA_NAME - 881)) | (1 << (SqlParser.SIGN - 881)) | (1 << (SqlParser.SIN - 881)) | (1 << (SqlParser.SLEEP - 881)) | (1 << (SqlParser.SOUNDEX - 881)) | (1 << (SqlParser.SQL_THREAD_WAIT_AFTER_GTIDS - 881)) | (1 << (SqlParser.SQRT - 881)) | (1 << (SqlParser.SRID - 881)) | (1 << (SqlParser.STARTPOINT - 881)) | (1 << (SqlParser.STRCMP - 881)) | (1 << (SqlParser.STR_TO_DATE - 881)) | (1 << (SqlParser.ST_AREA - 881)) | (1 << (SqlParser.ST_ASBINARY - 881)) | (1 << (SqlParser.ST_ASTEXT - 881)) | (1 << (SqlParser.ST_ASWKB - 881)) | (1 << (SqlParser.ST_ASWKT - 881)) | (1 << (SqlParser.ST_BUFFER - 881)) | (1 << (SqlParser.ST_CENTROID - 881)) | (1 << (SqlParser.ST_CONTAINS - 881)) | (1 << (SqlParser.ST_CROSSES - 881)) | (1 << (SqlParser.ST_DIFFERENCE - 881)))) !== 0) || ((((_la - 913)) & ~0x1f) == 0 && ((1 << (_la - 913)) & ((1 << (SqlParser.ST_DIMENSION - 913)) | (1 << (SqlParser.ST_DISJOINT - 913)) | (1 << (SqlParser.ST_DISTANCE - 913)) | (1 << (SqlParser.ST_ENDPOINT - 913)) | (1 << (SqlParser.ST_ENVELOPE - 913)) | (1 << (SqlParser.ST_EQUALS - 913)) | (1 << (SqlParser.ST_EXTERIORRING - 913)) | (1 << (SqlParser.ST_GEOMCOLLFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMCOLLFROMTXT - 913)) | (1 << (SqlParser.ST_GEOMCOLLFROMWKB - 913)) | (1 << (SqlParser.ST_GEOMETRYCOLLECTIONFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMETRYCOLLECTIONFROMWKB - 913)) | (1 << (SqlParser.ST_GEOMETRYFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMETRYFROMWKB - 913)) | (1 << (SqlParser.ST_GEOMETRYN - 913)) | (1 << (SqlParser.ST_GEOMETRYTYPE - 913)) | (1 << (SqlParser.ST_GEOMFROMTEXT - 913)) | (1 << (SqlParser.ST_GEOMFROMWKB - 913)) | (1 << (SqlParser.ST_INTERIORRINGN - 913)) | (1 << (SqlParser.ST_INTERSECTION - 913)) | (1 << (SqlParser.ST_INTERSECTS - 913)) | (1 << (SqlParser.ST_ISCLOSED - 913)) | (1 << (SqlParser.ST_ISEMPTY - 913)) | (1 << (SqlParser.ST_ISSIMPLE - 913)) | (1 << (SqlParser.ST_LINEFROMTEXT - 913)) | (1 << (SqlParser.ST_LINEFROMWKB - 913)) | (1 << (SqlParser.ST_LINESTRINGFROMTEXT - 913)) | (1 << (SqlParser.ST_LINESTRINGFROMWKB - 913)) | (1 << (SqlParser.ST_NUMGEOMETRIES - 913)) | (1 << (SqlParser.ST_NUMINTERIORRING - 913)) | (1 << (SqlParser.ST_NUMINTERIORRINGS - 913)) | (1 << (SqlParser.ST_NUMPOINTS - 913)))) !== 0) || ((((_la - 945)) & ~0x1f) == 0 && ((1 << (_la - 945)) & ((1 << (SqlParser.ST_OVERLAPS - 945)) | (1 << (SqlParser.ST_POINTFROMTEXT - 945)) | (1 << (SqlParser.ST_POINTFROMWKB - 945)) | (1 << (SqlParser.ST_POINTN - 945)) | (1 << (SqlParser.ST_POLYFROMTEXT - 945)) | (1 << (SqlParser.ST_POLYFROMWKB - 945)) | (1 << (SqlParser.ST_POLYGONFROMTEXT - 945)) | (1 << (SqlParser.ST_POLYGONFROMWKB - 945)) | (1 << (SqlParser.ST_SRID - 945)) | (1 << (SqlParser.ST_STARTPOINT - 945)) | (1 << (SqlParser.ST_SYMDIFFERENCE - 945)) | (1 << (SqlParser.ST_TOUCHES - 945)) | (1 << (SqlParser.ST_UNION - 945)) | (1 << (SqlParser.ST_WITHIN - 945)) | (1 << (SqlParser.ST_X - 945)) | (1 << (SqlParser.ST_Y - 945)) | (1 << (SqlParser.SUBDATE - 945)) | (1 << (SqlParser.SUBSTRING_INDEX - 945)) | (1 << (SqlParser.SUBTIME - 945)) | (1 << (SqlParser.SYSTEM_USER - 945)) | (1 << (SqlParser.TAN - 945)) | (1 << (SqlParser.TIMEDIFF - 945)) | (1 << (SqlParser.TIMESTAMPADD - 945)) | (1 << (SqlParser.TIMESTAMPDIFF - 945)) | (1 << (SqlParser.TIME_FORMAT - 945)) | (1 << (SqlParser.TIME_TO_SEC - 945)) | (1 << (SqlParser.TOUCHES - 945)) | (1 << (SqlParser.TO_BASE64 - 945)) | (1 << (SqlParser.TO_DAYS - 945)) | (1 << (SqlParser.TO_SECONDS - 945)) | (1 << (SqlParser.UCASE - 945)) | (1 << (SqlParser.UNCOMPRESS - 945)))) !== 0) || ((((_la - 977)) & ~0x1f) == 0 && ((1 << (_la - 977)) & ((1 << (SqlParser.UNCOMPRESSED_LENGTH - 977)) | (1 << (SqlParser.UNHEX - 977)) | (1 << (SqlParser.UNIX_TIMESTAMP - 977)) | (1 << (SqlParser.UPDATEXML - 977)) | (1 << (SqlParser.UPPER - 977)) | (1 << (SqlParser.UUID - 977)) | (1 << (SqlParser.UUID_SHORT - 977)) | (1 << (SqlParser.VALIDATE_PASSWORD_STRENGTH - 977)) | (1 << (SqlParser.VERSION - 977)) | (1 << (SqlParser.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS - 977)) | (1 << (SqlParser.WEEKDAY - 977)) | (1 << (SqlParser.WEEKOFYEAR - 977)) | (1 << (SqlParser.WEIGHT_STRING - 977)) | (1 << (SqlParser.WITHIN - 977)) | (1 << (SqlParser.YEARWEEK - 977)) | (1 << (SqlParser.Y_FUNCTION - 977)) | (1 << (SqlParser.X_FUNCTION - 977)))) !== 0) || ((((_la - 1043)) & ~0x1f) == 0 && ((1 << (_la - 1043)) & ((1 << (SqlParser.ID - 1043)) | (1 << (SqlParser.DOUBLE_QUOTE_ID - 1043)) | (1 << (SqlParser.REVERSE_QUOTE_ID - 1043)) | (1 << (SqlParser.BLOCKED_QUOTE_ID - 1043)))) !== 0)) {
            this.state = 292;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.AS) {
                this.state = 291;
                this.match(SqlParser.AS);
            }

            this.state = 294;
            localctx.alias = this.uid();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LimitClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_limitClause;
    this.offset = null; // LimitClauseAtomContext
    this.limit = null; // LimitClauseAtomContext
    return this;
}

LimitClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LimitClauseContext.prototype.constructor = LimitClauseContext;

LimitClauseContext.prototype.LIMIT = function() {
    return this.getToken(SqlParser.LIMIT, 0);
};

LimitClauseContext.prototype.OFFSET = function() {
    return this.getToken(SqlParser.OFFSET, 0);
};

LimitClauseContext.prototype.limitClauseAtom = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LimitClauseAtomContext);
    } else {
        return this.getTypedRuleContext(LimitClauseAtomContext,i);
    }
};

LimitClauseContext.prototype.COMMA = function() {
    return this.getToken(SqlParser.COMMA, 0);
};

LimitClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitLimitClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.LimitClauseContext = LimitClauseContext;

SqlParser.prototype.limitClause = function() {

    var localctx = new LimitClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SqlParser.RULE_limitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297;
        this.match(SqlParser.LIMIT);
        this.state = 308;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
        switch(la_) {
        case 1:
            this.state = 301;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
            if(la_===1) {
                this.state = 298;
                localctx.offset = this.limitClauseAtom();
                this.state = 299;
                this.match(SqlParser.COMMA);

            }
            this.state = 303;
            localctx.limit = this.limitClauseAtom();
            break;

        case 2:
            this.state = 304;
            localctx.limit = this.limitClauseAtom();
            this.state = 305;
            this.match(SqlParser.OFFSET);
            this.state = 306;
            localctx.offset = this.limitClauseAtom();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LimitClauseAtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_limitClauseAtom;
    return this;
}

LimitClauseAtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LimitClauseAtomContext.prototype.constructor = LimitClauseAtomContext;

LimitClauseAtomContext.prototype.decimalLiteral = function() {
    return this.getTypedRuleContext(DecimalLiteralContext,0);
};

LimitClauseAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitLimitClauseAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.LimitClauseAtomContext = LimitClauseAtomContext;

SqlParser.prototype.limitClauseAtom = function() {

    var localctx = new LimitClauseAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SqlParser.RULE_limitClauseAtom);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310;
        this.decimalLiteral();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FullIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_fullId;
    return this;
}

FullIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullIdContext.prototype.constructor = FullIdContext;

FullIdContext.prototype.uid = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UidContext);
    } else {
        return this.getTypedRuleContext(UidContext,i);
    }
};

FullIdContext.prototype.DOT_ID = function() {
    return this.getToken(SqlParser.DOT_ID, 0);
};

FullIdContext.prototype.DOT = function() {
    return this.getToken(SqlParser.DOT, 0);
};

FullIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitFullId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.FullIdContext = FullIdContext;

SqlParser.prototype.fullId = function() {

    var localctx = new FullIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SqlParser.RULE_fullId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 312;
        this.uid();
        this.state = 316;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        if(la_===1) {
            this.state = 313;
            this.match(SqlParser.DOT_ID);

        } else if(la_===2) {
            this.state = 314;
            this.match(SqlParser.DOT);
            this.state = 315;
            this.uid();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TableNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_tableName;
    this.table = null; // FullIdContext
    return this;
}

TableNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableNameContext.prototype.constructor = TableNameContext;

TableNameContext.prototype.fullId = function() {
    return this.getTypedRuleContext(FullIdContext,0);
};

TableNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitTableName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.TableNameContext = TableNameContext;

SqlParser.prototype.tableName = function() {

    var localctx = new TableNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SqlParser.RULE_tableName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        localctx.table = this.fullId();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FullColumnNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_fullColumnName;
    return this;
}

FullColumnNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullColumnNameContext.prototype.constructor = FullColumnNameContext;

FullColumnNameContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

FullColumnNameContext.prototype.dottedId = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DottedIdContext);
    } else {
        return this.getTypedRuleContext(DottedIdContext,i);
    }
};

FullColumnNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitFullColumnName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.FullColumnNameContext = FullColumnNameContext;

SqlParser.prototype.fullColumnName = function() {

    var localctx = new FullColumnNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SqlParser.RULE_fullColumnName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        this.uid();
        this.state = 324;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 321;
                this.dottedId(); 
            }
            this.state = 326;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EngineNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_engineName;
    return this;
}

EngineNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EngineNameContext.prototype.constructor = EngineNameContext;

EngineNameContext.prototype.ARCHIVE = function() {
    return this.getToken(SqlParser.ARCHIVE, 0);
};

EngineNameContext.prototype.BLACKHOLE = function() {
    return this.getToken(SqlParser.BLACKHOLE, 0);
};

EngineNameContext.prototype.CSV = function() {
    return this.getToken(SqlParser.CSV, 0);
};

EngineNameContext.prototype.FEDERATED = function() {
    return this.getToken(SqlParser.FEDERATED, 0);
};

EngineNameContext.prototype.INNODB = function() {
    return this.getToken(SqlParser.INNODB, 0);
};

EngineNameContext.prototype.MEMORY = function() {
    return this.getToken(SqlParser.MEMORY, 0);
};

EngineNameContext.prototype.MRG_MYISAM = function() {
    return this.getToken(SqlParser.MRG_MYISAM, 0);
};

EngineNameContext.prototype.MYISAM = function() {
    return this.getToken(SqlParser.MYISAM, 0);
};

EngineNameContext.prototype.NDB = function() {
    return this.getToken(SqlParser.NDB, 0);
};

EngineNameContext.prototype.NDBCLUSTER = function() {
    return this.getToken(SqlParser.NDBCLUSTER, 0);
};

EngineNameContext.prototype.PERFORMANCE_SCHEMA = function() {
    return this.getToken(SqlParser.PERFORMANCE_SCHEMA, 0);
};

EngineNameContext.prototype.TOKUDB = function() {
    return this.getToken(SqlParser.TOKUDB, 0);
};

EngineNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitEngineName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.EngineNameContext = EngineNameContext;

SqlParser.prototype.engineName = function() {

    var localctx = new EngineNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SqlParser.RULE_engineName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 327;
        _la = this._input.LA(1);
        if(!(((((_la - 677)) & ~0x1f) == 0 && ((1 << (_la - 677)) & ((1 << (SqlParser.ARCHIVE - 677)) | (1 << (SqlParser.BLACKHOLE - 677)) | (1 << (SqlParser.CSV - 677)) | (1 << (SqlParser.FEDERATED - 677)) | (1 << (SqlParser.INNODB - 677)) | (1 << (SqlParser.MEMORY - 677)) | (1 << (SqlParser.MRG_MYISAM - 677)) | (1 << (SqlParser.MYISAM - 677)) | (1 << (SqlParser.NDB - 677)) | (1 << (SqlParser.NDBCLUSTER - 677)) | (1 << (SqlParser.PERFORMANCE_SCHEMA - 677)) | (1 << (SqlParser.TOKUDB - 677)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UidContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_uid;
    return this;
}

UidContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UidContext.prototype.constructor = UidContext;

UidContext.prototype.simpleId = function() {
    return this.getTypedRuleContext(SimpleIdContext,0);
};

UidContext.prototype.DOUBLE_QUOTE_ID = function() {
    return this.getToken(SqlParser.DOUBLE_QUOTE_ID, 0);
};

UidContext.prototype.REVERSE_QUOTE_ID = function() {
    return this.getToken(SqlParser.REVERSE_QUOTE_ID, 0);
};

UidContext.prototype.BLOCKED_QUOTE_ID = function() {
    return this.getToken(SqlParser.BLOCKED_QUOTE_ID, 0);
};

UidContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitUid(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.UidContext = UidContext;

SqlParser.prototype.uid = function() {

    var localctx = new UidContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SqlParser.RULE_uid);
    try {
        this.state = 333;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.CURRENT:
        case SqlParser.DATABASE:
        case SqlParser.DIAGNOSTICS:
        case SqlParser.LEFT:
        case SqlParser.NUMBER:
        case SqlParser.RIGHT:
        case SqlParser.STACKED:
        case SqlParser.DATE:
        case SqlParser.TIME:
        case SqlParser.TIMESTAMP:
        case SqlParser.DATETIME:
        case SqlParser.YEAR:
        case SqlParser.TEXT:
        case SqlParser.ENUM:
        case SqlParser.SERIAL:
        case SqlParser.JSON_VALID:
        case SqlParser.JSON_SCHEMA_VALID:
        case SqlParser.COUNT:
        case SqlParser.POSITION:
        case SqlParser.ACCOUNT:
        case SqlParser.ACTION:
        case SqlParser.AFTER:
        case SqlParser.AGGREGATE:
        case SqlParser.ALGORITHM:
        case SqlParser.ANY:
        case SqlParser.AT:
        case SqlParser.AUTHORS:
        case SqlParser.AUTOCOMMIT:
        case SqlParser.AUTOEXTEND_SIZE:
        case SqlParser.AUTO_INCREMENT:
        case SqlParser.AVG_ROW_LENGTH:
        case SqlParser.BEGIN:
        case SqlParser.BINLOG:
        case SqlParser.BIT:
        case SqlParser.BLOCK:
        case SqlParser.BOOL:
        case SqlParser.BOOLEAN:
        case SqlParser.BTREE:
        case SqlParser.CACHE:
        case SqlParser.CASCADED:
        case SqlParser.CHAIN:
        case SqlParser.CHANGED:
        case SqlParser.CHANNEL:
        case SqlParser.CHECKSUM:
        case SqlParser.PAGE_CHECKSUM:
        case SqlParser.CIPHER:
        case SqlParser.CLASS_ORIGIN:
        case SqlParser.CLIENT:
        case SqlParser.CLOSE:
        case SqlParser.COALESCE:
        case SqlParser.CODE:
        case SqlParser.COLUMNS:
        case SqlParser.COLUMN_FORMAT:
        case SqlParser.COLUMN_NAME:
        case SqlParser.COMMENT:
        case SqlParser.COMMIT:
        case SqlParser.COMPACT:
        case SqlParser.COMPLETION:
        case SqlParser.COMPRESSED:
        case SqlParser.COMPRESSION:
        case SqlParser.CONCURRENT:
        case SqlParser.CONNECTION:
        case SqlParser.CONSISTENT:
        case SqlParser.CONSTRAINT_CATALOG:
        case SqlParser.CONSTRAINT_SCHEMA:
        case SqlParser.CONSTRAINT_NAME:
        case SqlParser.CONTAINS:
        case SqlParser.CONTEXT:
        case SqlParser.CONTRIBUTORS:
        case SqlParser.COPY:
        case SqlParser.CPU:
        case SqlParser.CURSOR_NAME:
        case SqlParser.DATA:
        case SqlParser.DATAFILE:
        case SqlParser.DEALLOCATE:
        case SqlParser.DEFAULT_AUTH:
        case SqlParser.DEFINER:
        case SqlParser.DELAY_KEY_WRITE:
        case SqlParser.DES_KEY_FILE:
        case SqlParser.DIRECTORY:
        case SqlParser.DISABLE:
        case SqlParser.DISCARD:
        case SqlParser.DISK:
        case SqlParser.DO:
        case SqlParser.DUMPFILE:
        case SqlParser.DUPLICATE:
        case SqlParser.DYNAMIC:
        case SqlParser.ENABLE:
        case SqlParser.ENCRYPTION:
        case SqlParser.END:
        case SqlParser.ENDS:
        case SqlParser.ENGINE:
        case SqlParser.ENGINES:
        case SqlParser.ERROR:
        case SqlParser.ERRORS:
        case SqlParser.ESCAPE:
        case SqlParser.EVEN:
        case SqlParser.EVENT:
        case SqlParser.EVENTS:
        case SqlParser.EVERY:
        case SqlParser.EXCHANGE:
        case SqlParser.EXCLUSIVE:
        case SqlParser.EXPIRE:
        case SqlParser.EXPORT:
        case SqlParser.EXTENDED:
        case SqlParser.EXTENT_SIZE:
        case SqlParser.FAST:
        case SqlParser.FAULTS:
        case SqlParser.FIELDS:
        case SqlParser.FILE_BLOCK_SIZE:
        case SqlParser.FILTER:
        case SqlParser.FIRST:
        case SqlParser.FIXED:
        case SqlParser.FLUSH:
        case SqlParser.FOLLOWS:
        case SqlParser.FOUND:
        case SqlParser.FULL:
        case SqlParser.FUNCTION:
        case SqlParser.GENERAL:
        case SqlParser.GLOBAL:
        case SqlParser.GRANTS:
        case SqlParser.GROUP_REPLICATION:
        case SqlParser.HANDLER:
        case SqlParser.HASH:
        case SqlParser.HELP:
        case SqlParser.HOST:
        case SqlParser.HOSTS:
        case SqlParser.IDENTIFIED:
        case SqlParser.IGNORE_SERVER_IDS:
        case SqlParser.IMPORT:
        case SqlParser.INDEXES:
        case SqlParser.INITIAL_SIZE:
        case SqlParser.INPLACE:
        case SqlParser.INSERT_METHOD:
        case SqlParser.INSTALL:
        case SqlParser.INSTANCE:
        case SqlParser.INVISIBLE:
        case SqlParser.INVOKER:
        case SqlParser.IO:
        case SqlParser.IO_THREAD:
        case SqlParser.IPC:
        case SqlParser.ISOLATION:
        case SqlParser.ISSUER:
        case SqlParser.JSON:
        case SqlParser.KEY_BLOCK_SIZE:
        case SqlParser.LANGUAGE:
        case SqlParser.LAST:
        case SqlParser.LEAVES:
        case SqlParser.LESS:
        case SqlParser.LEVEL:
        case SqlParser.LIST:
        case SqlParser.LOCAL:
        case SqlParser.LOGFILE:
        case SqlParser.LOGS:
        case SqlParser.MASTER:
        case SqlParser.MASTER_AUTO_POSITION:
        case SqlParser.MASTER_CONNECT_RETRY:
        case SqlParser.MASTER_DELAY:
        case SqlParser.MASTER_HEARTBEAT_PERIOD:
        case SqlParser.MASTER_HOST:
        case SqlParser.MASTER_LOG_FILE:
        case SqlParser.MASTER_LOG_POS:
        case SqlParser.MASTER_PASSWORD:
        case SqlParser.MASTER_PORT:
        case SqlParser.MASTER_RETRY_COUNT:
        case SqlParser.MASTER_SSL:
        case SqlParser.MASTER_SSL_CA:
        case SqlParser.MASTER_SSL_CAPATH:
        case SqlParser.MASTER_SSL_CERT:
        case SqlParser.MASTER_SSL_CIPHER:
        case SqlParser.MASTER_SSL_CRL:
        case SqlParser.MASTER_SSL_CRLPATH:
        case SqlParser.MASTER_SSL_KEY:
        case SqlParser.MASTER_TLS_VERSION:
        case SqlParser.MASTER_USER:
        case SqlParser.MAX_CONNECTIONS_PER_HOUR:
        case SqlParser.MAX_QUERIES_PER_HOUR:
        case SqlParser.MAX_ROWS:
        case SqlParser.MAX_SIZE:
        case SqlParser.MAX_UPDATES_PER_HOUR:
        case SqlParser.MAX_USER_CONNECTIONS:
        case SqlParser.MEDIUM:
        case SqlParser.MERGE:
        case SqlParser.MESSAGE_TEXT:
        case SqlParser.MID:
        case SqlParser.MIGRATE:
        case SqlParser.MIN_ROWS:
        case SqlParser.MODE:
        case SqlParser.MODIFY:
        case SqlParser.MUTEX:
        case SqlParser.MYSQL:
        case SqlParser.MYSQL_ERRNO:
        case SqlParser.NAME:
        case SqlParser.NAMES:
        case SqlParser.NCHAR:
        case SqlParser.NEVER:
        case SqlParser.NEXT:
        case SqlParser.NO:
        case SqlParser.NODEGROUP:
        case SqlParser.NONE:
        case SqlParser.OFFLINE:
        case SqlParser.OFFSET:
        case SqlParser.OJ:
        case SqlParser.OLD_PASSWORD:
        case SqlParser.ONE:
        case SqlParser.ONLINE:
        case SqlParser.ONLY:
        case SqlParser.OPEN:
        case SqlParser.OPTIMIZER_COSTS:
        case SqlParser.OPTIONS:
        case SqlParser.OWNER:
        case SqlParser.PACK_KEYS:
        case SqlParser.PAGE:
        case SqlParser.PARSER:
        case SqlParser.PARTIAL:
        case SqlParser.PARTITIONING:
        case SqlParser.PARTITIONS:
        case SqlParser.PASSWORD:
        case SqlParser.PHASE:
        case SqlParser.PLUGIN:
        case SqlParser.PLUGIN_DIR:
        case SqlParser.PLUGINS:
        case SqlParser.PORT:
        case SqlParser.PRECEDES:
        case SqlParser.PREPARE:
        case SqlParser.PRESERVE:
        case SqlParser.PREV:
        case SqlParser.PROCESSLIST:
        case SqlParser.PROFILE:
        case SqlParser.PROFILES:
        case SqlParser.PROXY:
        case SqlParser.QUERY:
        case SqlParser.QUICK:
        case SqlParser.REBUILD:
        case SqlParser.RECOVER:
        case SqlParser.REDO_BUFFER_SIZE:
        case SqlParser.REDUNDANT:
        case SqlParser.RELAY:
        case SqlParser.RELAY_LOG_FILE:
        case SqlParser.RELAY_LOG_POS:
        case SqlParser.RELAYLOG:
        case SqlParser.REMOVE:
        case SqlParser.REORGANIZE:
        case SqlParser.REPAIR:
        case SqlParser.REPLICATE_DO_DB:
        case SqlParser.REPLICATE_DO_TABLE:
        case SqlParser.REPLICATE_IGNORE_DB:
        case SqlParser.REPLICATE_IGNORE_TABLE:
        case SqlParser.REPLICATE_REWRITE_DB:
        case SqlParser.REPLICATE_WILD_DO_TABLE:
        case SqlParser.REPLICATE_WILD_IGNORE_TABLE:
        case SqlParser.REPLICATION:
        case SqlParser.RESET:
        case SqlParser.RESUME:
        case SqlParser.RETURNED_SQLSTATE:
        case SqlParser.RETURNS:
        case SqlParser.ROLE:
        case SqlParser.ROLLBACK:
        case SqlParser.ROLLUP:
        case SqlParser.ROTATE:
        case SqlParser.ROW:
        case SqlParser.ROWS:
        case SqlParser.ROW_FORMAT:
        case SqlParser.SAVEPOINT:
        case SqlParser.SCHEDULE:
        case SqlParser.SECURITY:
        case SqlParser.SERVER:
        case SqlParser.SESSION:
        case SqlParser.SHARE:
        case SqlParser.SHARED:
        case SqlParser.SIGNED:
        case SqlParser.SIMPLE:
        case SqlParser.SLAVE:
        case SqlParser.SLOW:
        case SqlParser.SNAPSHOT:
        case SqlParser.SOCKET:
        case SqlParser.SOME:
        case SqlParser.SONAME:
        case SqlParser.SOUNDS:
        case SqlParser.SOURCE:
        case SqlParser.SQL_AFTER_GTIDS:
        case SqlParser.SQL_AFTER_MTS_GAPS:
        case SqlParser.SQL_BEFORE_GTIDS:
        case SqlParser.SQL_BUFFER_RESULT:
        case SqlParser.SQL_CACHE:
        case SqlParser.SQL_NO_CACHE:
        case SqlParser.SQL_THREAD:
        case SqlParser.START:
        case SqlParser.STARTS:
        case SqlParser.STATS_AUTO_RECALC:
        case SqlParser.STATS_PERSISTENT:
        case SqlParser.STATS_SAMPLE_PAGES:
        case SqlParser.STATUS:
        case SqlParser.STOP:
        case SqlParser.STORAGE:
        case SqlParser.STRING:
        case SqlParser.SUBCLASS_ORIGIN:
        case SqlParser.SUBJECT:
        case SqlParser.SUBPARTITION:
        case SqlParser.SUBPARTITIONS:
        case SqlParser.SUSPEND:
        case SqlParser.SWAPS:
        case SqlParser.SWITCHES:
        case SqlParser.TABLE_NAME:
        case SqlParser.TABLESPACE:
        case SqlParser.TEMPORARY:
        case SqlParser.TEMPTABLE:
        case SqlParser.THAN:
        case SqlParser.TRADITIONAL:
        case SqlParser.TRANSACTION:
        case SqlParser.TRANSACTIONAL:
        case SqlParser.TRIGGERS:
        case SqlParser.TRUNCATE:
        case SqlParser.UNDEFINED:
        case SqlParser.UNDOFILE:
        case SqlParser.UNDO_BUFFER_SIZE:
        case SqlParser.UNINSTALL:
        case SqlParser.UNKNOWN:
        case SqlParser.UNTIL:
        case SqlParser.UPGRADE:
        case SqlParser.USER:
        case SqlParser.USE_FRM:
        case SqlParser.USER_RESOURCES:
        case SqlParser.VALIDATION:
        case SqlParser.VALUE:
        case SqlParser.VARIABLES:
        case SqlParser.VIEW:
        case SqlParser.VISIBLE:
        case SqlParser.WAIT:
        case SqlParser.WARNINGS:
        case SqlParser.WITHOUT:
        case SqlParser.WORK:
        case SqlParser.WRAPPER:
        case SqlParser.X509:
        case SqlParser.XA:
        case SqlParser.XML:
        case SqlParser.INTERNAL:
        case SqlParser.QUARTER:
        case SqlParser.MONTH:
        case SqlParser.DAY:
        case SqlParser.HOUR:
        case SqlParser.MINUTE:
        case SqlParser.WEEK:
        case SqlParser.SECOND:
        case SqlParser.MICROSECOND:
        case SqlParser.TABLES:
        case SqlParser.ROUTINE:
        case SqlParser.EXECUTE:
        case SqlParser.FILE:
        case SqlParser.PROCESS:
        case SqlParser.RELOAD:
        case SqlParser.SHUTDOWN:
        case SqlParser.SUPER:
        case SqlParser.PRIVILEGES:
        case SqlParser.AUDIT_ADMIN:
        case SqlParser.BACKUP_ADMIN:
        case SqlParser.BINLOG_ADMIN:
        case SqlParser.BINLOG_ENCRYPTION_ADMIN:
        case SqlParser.CLONE_ADMIN:
        case SqlParser.CONNECTION_ADMIN:
        case SqlParser.ENCRYPTION_KEY_ADMIN:
        case SqlParser.FIREWALL_ADMIN:
        case SqlParser.FIREWALL_USER:
        case SqlParser.GROUP_REPLICATION_ADMIN:
        case SqlParser.INNODB_REDO_LOG_ARCHIVE:
        case SqlParser.NDB_STORED_USER:
        case SqlParser.PERSIST_RO_VARIABLES_ADMIN:
        case SqlParser.REPLICATION_APPLIER:
        case SqlParser.REPLICATION_SLAVE_ADMIN:
        case SqlParser.RESOURCE_GROUP_ADMIN:
        case SqlParser.RESOURCE_GROUP_USER:
        case SqlParser.ROLE_ADMIN:
        case SqlParser.SESSION_VARIABLES_ADMIN:
        case SqlParser.SET_USER_ID:
        case SqlParser.SHOW_ROUTINE:
        case SqlParser.SYSTEM_VARIABLES_ADMIN:
        case SqlParser.TABLE_ENCRYPTION_ADMIN:
        case SqlParser.VERSION_TOKEN_ADMIN:
        case SqlParser.XA_RECOVER_ADMIN:
        case SqlParser.ARMSCII8:
        case SqlParser.ASCII:
        case SqlParser.BIG5:
        case SqlParser.CP1250:
        case SqlParser.CP1251:
        case SqlParser.CP1256:
        case SqlParser.CP1257:
        case SqlParser.CP850:
        case SqlParser.CP852:
        case SqlParser.CP866:
        case SqlParser.CP932:
        case SqlParser.DEC8:
        case SqlParser.EUCJPMS:
        case SqlParser.EUCKR:
        case SqlParser.GB2312:
        case SqlParser.GBK:
        case SqlParser.GEOSTD8:
        case SqlParser.GREEK:
        case SqlParser.HEBREW:
        case SqlParser.HP8:
        case SqlParser.KEYBCS2:
        case SqlParser.KOI8R:
        case SqlParser.KOI8U:
        case SqlParser.LATIN1:
        case SqlParser.LATIN2:
        case SqlParser.LATIN5:
        case SqlParser.LATIN7:
        case SqlParser.MACCE:
        case SqlParser.MACROMAN:
        case SqlParser.SJIS:
        case SqlParser.SWE7:
        case SqlParser.TIS620:
        case SqlParser.UCS2:
        case SqlParser.UJIS:
        case SqlParser.UTF16:
        case SqlParser.UTF16LE:
        case SqlParser.UTF32:
        case SqlParser.UTF8:
        case SqlParser.UTF8MB3:
        case SqlParser.UTF8MB4:
        case SqlParser.ARCHIVE:
        case SqlParser.BLACKHOLE:
        case SqlParser.CSV:
        case SqlParser.FEDERATED:
        case SqlParser.INNODB:
        case SqlParser.MEMORY:
        case SqlParser.MRG_MYISAM:
        case SqlParser.MYISAM:
        case SqlParser.NDB:
        case SqlParser.NDBCLUSTER:
        case SqlParser.PERFORMANCE_SCHEMA:
        case SqlParser.TOKUDB:
        case SqlParser.REPEATABLE:
        case SqlParser.COMMITTED:
        case SqlParser.UNCOMMITTED:
        case SqlParser.SERIALIZABLE:
        case SqlParser.GEOMETRYCOLLECTION:
        case SqlParser.LINESTRING:
        case SqlParser.MULTILINESTRING:
        case SqlParser.MULTIPOINT:
        case SqlParser.MULTIPOLYGON:
        case SqlParser.POINT:
        case SqlParser.POLYGON:
        case SqlParser.ABS:
        case SqlParser.ACOS:
        case SqlParser.ADDDATE:
        case SqlParser.ADDTIME:
        case SqlParser.AES_DECRYPT:
        case SqlParser.AES_ENCRYPT:
        case SqlParser.AREA:
        case SqlParser.ASBINARY:
        case SqlParser.ASIN:
        case SqlParser.ASTEXT:
        case SqlParser.ASWKB:
        case SqlParser.ASWKT:
        case SqlParser.ASYMMETRIC_DECRYPT:
        case SqlParser.ASYMMETRIC_DERIVE:
        case SqlParser.ASYMMETRIC_ENCRYPT:
        case SqlParser.ASYMMETRIC_SIGN:
        case SqlParser.ASYMMETRIC_VERIFY:
        case SqlParser.ATAN:
        case SqlParser.ATAN2:
        case SqlParser.BENCHMARK:
        case SqlParser.BIN:
        case SqlParser.BIT_COUNT:
        case SqlParser.BIT_LENGTH:
        case SqlParser.BUFFER:
        case SqlParser.CATALOG_NAME:
        case SqlParser.CEIL:
        case SqlParser.CEILING:
        case SqlParser.CENTROID:
        case SqlParser.CHARACTER_LENGTH:
        case SqlParser.CHARSET:
        case SqlParser.CHAR_LENGTH:
        case SqlParser.COERCIBILITY:
        case SqlParser.COLLATION:
        case SqlParser.COMPRESS:
        case SqlParser.CONCAT:
        case SqlParser.CONCAT_WS:
        case SqlParser.CONNECTION_ID:
        case SqlParser.CONV:
        case SqlParser.CONVERT_TZ:
        case SqlParser.COS:
        case SqlParser.COT:
        case SqlParser.CRC32:
        case SqlParser.CREATE_ASYMMETRIC_PRIV_KEY:
        case SqlParser.CREATE_ASYMMETRIC_PUB_KEY:
        case SqlParser.CREATE_DH_PARAMETERS:
        case SqlParser.CREATE_DIGEST:
        case SqlParser.CROSSES:
        case SqlParser.DATEDIFF:
        case SqlParser.DATE_FORMAT:
        case SqlParser.DAYNAME:
        case SqlParser.DAYOFMONTH:
        case SqlParser.DAYOFWEEK:
        case SqlParser.DAYOFYEAR:
        case SqlParser.DECODE:
        case SqlParser.DEGREES:
        case SqlParser.DES_DECRYPT:
        case SqlParser.DES_ENCRYPT:
        case SqlParser.DIMENSION:
        case SqlParser.DISJOINT:
        case SqlParser.ELT:
        case SqlParser.ENCODE:
        case SqlParser.ENCRYPT:
        case SqlParser.ENDPOINT:
        case SqlParser.ENVELOPE:
        case SqlParser.EQUALS:
        case SqlParser.EXP:
        case SqlParser.EXPORT_SET:
        case SqlParser.EXTERIORRING:
        case SqlParser.EXTRACTVALUE:
        case SqlParser.FIELD:
        case SqlParser.FIND_IN_SET:
        case SqlParser.FLOOR:
        case SqlParser.FORMAT:
        case SqlParser.FOUND_ROWS:
        case SqlParser.FROM_BASE64:
        case SqlParser.FROM_DAYS:
        case SqlParser.FROM_UNIXTIME:
        case SqlParser.GEOMCOLLFROMTEXT:
        case SqlParser.GEOMCOLLFROMWKB:
        case SqlParser.GEOMETRYCOLLECTIONFROMTEXT:
        case SqlParser.GEOMETRYCOLLECTIONFROMWKB:
        case SqlParser.GEOMETRYFROMTEXT:
        case SqlParser.GEOMETRYFROMWKB:
        case SqlParser.GEOMETRYN:
        case SqlParser.GEOMETRYTYPE:
        case SqlParser.GEOMFROMTEXT:
        case SqlParser.GEOMFROMWKB:
        case SqlParser.GET_FORMAT:
        case SqlParser.GET_LOCK:
        case SqlParser.GLENGTH:
        case SqlParser.GREATEST:
        case SqlParser.GTID_SUBSET:
        case SqlParser.GTID_SUBTRACT:
        case SqlParser.HEX:
        case SqlParser.IFNULL:
        case SqlParser.INET6_ATON:
        case SqlParser.INET6_NTOA:
        case SqlParser.INET_ATON:
        case SqlParser.INET_NTOA:
        case SqlParser.INSTR:
        case SqlParser.INTERIORRINGN:
        case SqlParser.INTERSECTS:
        case SqlParser.ISCLOSED:
        case SqlParser.ISEMPTY:
        case SqlParser.ISNULL:
        case SqlParser.ISSIMPLE:
        case SqlParser.IS_FREE_LOCK:
        case SqlParser.IS_IPV4:
        case SqlParser.IS_IPV4_COMPAT:
        case SqlParser.IS_IPV4_MAPPED:
        case SqlParser.IS_IPV6:
        case SqlParser.IS_USED_LOCK:
        case SqlParser.LAST_INSERT_ID:
        case SqlParser.LCASE:
        case SqlParser.LEAST:
        case SqlParser.LENGTH:
        case SqlParser.LINEFROMTEXT:
        case SqlParser.LINEFROMWKB:
        case SqlParser.LINESTRINGFROMTEXT:
        case SqlParser.LINESTRINGFROMWKB:
        case SqlParser.LN:
        case SqlParser.LOAD_FILE:
        case SqlParser.LOCATE:
        case SqlParser.LOG:
        case SqlParser.LOG10:
        case SqlParser.LOG2:
        case SqlParser.LOWER:
        case SqlParser.LPAD:
        case SqlParser.LTRIM:
        case SqlParser.MAKEDATE:
        case SqlParser.MAKETIME:
        case SqlParser.MAKE_SET:
        case SqlParser.MASTER_POS_WAIT:
        case SqlParser.MBRCONTAINS:
        case SqlParser.MBRDISJOINT:
        case SqlParser.MBREQUAL:
        case SqlParser.MBRINTERSECTS:
        case SqlParser.MBROVERLAPS:
        case SqlParser.MBRTOUCHES:
        case SqlParser.MBRWITHIN:
        case SqlParser.MD5:
        case SqlParser.MLINEFROMTEXT:
        case SqlParser.MLINEFROMWKB:
        case SqlParser.MONTHNAME:
        case SqlParser.MPOINTFROMTEXT:
        case SqlParser.MPOINTFROMWKB:
        case SqlParser.MPOLYFROMTEXT:
        case SqlParser.MPOLYFROMWKB:
        case SqlParser.MULTILINESTRINGFROMTEXT:
        case SqlParser.MULTILINESTRINGFROMWKB:
        case SqlParser.MULTIPOINTFROMTEXT:
        case SqlParser.MULTIPOINTFROMWKB:
        case SqlParser.MULTIPOLYGONFROMTEXT:
        case SqlParser.MULTIPOLYGONFROMWKB:
        case SqlParser.NAME_CONST:
        case SqlParser.NULLIF:
        case SqlParser.NUMGEOMETRIES:
        case SqlParser.NUMINTERIORRINGS:
        case SqlParser.NUMPOINTS:
        case SqlParser.OCT:
        case SqlParser.OCTET_LENGTH:
        case SqlParser.ORD:
        case SqlParser.OVERLAPS:
        case SqlParser.PERIOD_ADD:
        case SqlParser.PERIOD_DIFF:
        case SqlParser.PI:
        case SqlParser.POINTFROMTEXT:
        case SqlParser.POINTFROMWKB:
        case SqlParser.POINTN:
        case SqlParser.POLYFROMTEXT:
        case SqlParser.POLYFROMWKB:
        case SqlParser.POLYGONFROMTEXT:
        case SqlParser.POLYGONFROMWKB:
        case SqlParser.POW:
        case SqlParser.POWER:
        case SqlParser.QUOTE:
        case SqlParser.RADIANS:
        case SqlParser.RAND:
        case SqlParser.RANDOM_BYTES:
        case SqlParser.RELEASE_LOCK:
        case SqlParser.REVERSE:
        case SqlParser.ROUND:
        case SqlParser.ROW_COUNT:
        case SqlParser.RPAD:
        case SqlParser.RTRIM:
        case SqlParser.SEC_TO_TIME:
        case SqlParser.SESSION_USER:
        case SqlParser.SHA:
        case SqlParser.SHA1:
        case SqlParser.SHA2:
        case SqlParser.SCHEMA_NAME:
        case SqlParser.SIGN:
        case SqlParser.SIN:
        case SqlParser.SLEEP:
        case SqlParser.SOUNDEX:
        case SqlParser.SQL_THREAD_WAIT_AFTER_GTIDS:
        case SqlParser.SQRT:
        case SqlParser.SRID:
        case SqlParser.STARTPOINT:
        case SqlParser.STRCMP:
        case SqlParser.STR_TO_DATE:
        case SqlParser.ST_AREA:
        case SqlParser.ST_ASBINARY:
        case SqlParser.ST_ASTEXT:
        case SqlParser.ST_ASWKB:
        case SqlParser.ST_ASWKT:
        case SqlParser.ST_BUFFER:
        case SqlParser.ST_CENTROID:
        case SqlParser.ST_CONTAINS:
        case SqlParser.ST_CROSSES:
        case SqlParser.ST_DIFFERENCE:
        case SqlParser.ST_DIMENSION:
        case SqlParser.ST_DISJOINT:
        case SqlParser.ST_DISTANCE:
        case SqlParser.ST_ENDPOINT:
        case SqlParser.ST_ENVELOPE:
        case SqlParser.ST_EQUALS:
        case SqlParser.ST_EXTERIORRING:
        case SqlParser.ST_GEOMCOLLFROMTEXT:
        case SqlParser.ST_GEOMCOLLFROMTXT:
        case SqlParser.ST_GEOMCOLLFROMWKB:
        case SqlParser.ST_GEOMETRYCOLLECTIONFROMTEXT:
        case SqlParser.ST_GEOMETRYCOLLECTIONFROMWKB:
        case SqlParser.ST_GEOMETRYFROMTEXT:
        case SqlParser.ST_GEOMETRYFROMWKB:
        case SqlParser.ST_GEOMETRYN:
        case SqlParser.ST_GEOMETRYTYPE:
        case SqlParser.ST_GEOMFROMTEXT:
        case SqlParser.ST_GEOMFROMWKB:
        case SqlParser.ST_INTERIORRINGN:
        case SqlParser.ST_INTERSECTION:
        case SqlParser.ST_INTERSECTS:
        case SqlParser.ST_ISCLOSED:
        case SqlParser.ST_ISEMPTY:
        case SqlParser.ST_ISSIMPLE:
        case SqlParser.ST_LINEFROMTEXT:
        case SqlParser.ST_LINEFROMWKB:
        case SqlParser.ST_LINESTRINGFROMTEXT:
        case SqlParser.ST_LINESTRINGFROMWKB:
        case SqlParser.ST_NUMGEOMETRIES:
        case SqlParser.ST_NUMINTERIORRING:
        case SqlParser.ST_NUMINTERIORRINGS:
        case SqlParser.ST_NUMPOINTS:
        case SqlParser.ST_OVERLAPS:
        case SqlParser.ST_POINTFROMTEXT:
        case SqlParser.ST_POINTFROMWKB:
        case SqlParser.ST_POINTN:
        case SqlParser.ST_POLYFROMTEXT:
        case SqlParser.ST_POLYFROMWKB:
        case SqlParser.ST_POLYGONFROMTEXT:
        case SqlParser.ST_POLYGONFROMWKB:
        case SqlParser.ST_SRID:
        case SqlParser.ST_STARTPOINT:
        case SqlParser.ST_SYMDIFFERENCE:
        case SqlParser.ST_TOUCHES:
        case SqlParser.ST_UNION:
        case SqlParser.ST_WITHIN:
        case SqlParser.ST_X:
        case SqlParser.ST_Y:
        case SqlParser.SUBDATE:
        case SqlParser.SUBSTRING_INDEX:
        case SqlParser.SUBTIME:
        case SqlParser.SYSTEM_USER:
        case SqlParser.TAN:
        case SqlParser.TIMEDIFF:
        case SqlParser.TIMESTAMPADD:
        case SqlParser.TIMESTAMPDIFF:
        case SqlParser.TIME_FORMAT:
        case SqlParser.TIME_TO_SEC:
        case SqlParser.TOUCHES:
        case SqlParser.TO_BASE64:
        case SqlParser.TO_DAYS:
        case SqlParser.TO_SECONDS:
        case SqlParser.UCASE:
        case SqlParser.UNCOMPRESS:
        case SqlParser.UNCOMPRESSED_LENGTH:
        case SqlParser.UNHEX:
        case SqlParser.UNIX_TIMESTAMP:
        case SqlParser.UPDATEXML:
        case SqlParser.UPPER:
        case SqlParser.UUID:
        case SqlParser.UUID_SHORT:
        case SqlParser.VALIDATE_PASSWORD_STRENGTH:
        case SqlParser.VERSION:
        case SqlParser.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS:
        case SqlParser.WEEKDAY:
        case SqlParser.WEEKOFYEAR:
        case SqlParser.WEIGHT_STRING:
        case SqlParser.WITHIN:
        case SqlParser.YEARWEEK:
        case SqlParser.Y_FUNCTION:
        case SqlParser.X_FUNCTION:
        case SqlParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 329;
            this.simpleId();
            break;
        case SqlParser.DOUBLE_QUOTE_ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 330;
            this.match(SqlParser.DOUBLE_QUOTE_ID);
            break;
        case SqlParser.REVERSE_QUOTE_ID:
            this.enterOuterAlt(localctx, 3);
            this.state = 331;
            this.match(SqlParser.REVERSE_QUOTE_ID);
            break;
        case SqlParser.BLOCKED_QUOTE_ID:
            this.enterOuterAlt(localctx, 4);
            this.state = 332;
            this.match(SqlParser.BLOCKED_QUOTE_ID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SimpleIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_simpleId;
    return this;
}

SimpleIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleIdContext.prototype.constructor = SimpleIdContext;

SimpleIdContext.prototype.ID = function() {
    return this.getToken(SqlParser.ID, 0);
};

SimpleIdContext.prototype.charsetNameBase = function() {
    return this.getTypedRuleContext(CharsetNameBaseContext,0);
};

SimpleIdContext.prototype.transactionLevelBase = function() {
    return this.getTypedRuleContext(TransactionLevelBaseContext,0);
};

SimpleIdContext.prototype.engineName = function() {
    return this.getTypedRuleContext(EngineNameContext,0);
};

SimpleIdContext.prototype.privilegesBase = function() {
    return this.getTypedRuleContext(PrivilegesBaseContext,0);
};

SimpleIdContext.prototype.intervalTypeBase = function() {
    return this.getTypedRuleContext(IntervalTypeBaseContext,0);
};

SimpleIdContext.prototype.dataTypeBase = function() {
    return this.getTypedRuleContext(DataTypeBaseContext,0);
};

SimpleIdContext.prototype.keywordsCanBeId = function() {
    return this.getTypedRuleContext(KeywordsCanBeIdContext,0);
};

SimpleIdContext.prototype.functionNameBase = function() {
    return this.getTypedRuleContext(FunctionNameBaseContext,0);
};

SimpleIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitSimpleId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.SimpleIdContext = SimpleIdContext;

SqlParser.prototype.simpleId = function() {

    var localctx = new SimpleIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SqlParser.RULE_simpleId);
    try {
        this.state = 344;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 335;
            this.match(SqlParser.ID);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 336;
            this.charsetNameBase();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 337;
            this.transactionLevelBase();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 338;
            this.engineName();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 339;
            this.privilegesBase();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 340;
            this.intervalTypeBase();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 341;
            this.dataTypeBase();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 342;
            this.keywordsCanBeId();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 343;
            this.functionNameBase();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DottedIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_dottedId;
    return this;
}

DottedIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DottedIdContext.prototype.constructor = DottedIdContext;

DottedIdContext.prototype.DOT_ID = function() {
    return this.getToken(SqlParser.DOT_ID, 0);
};

DottedIdContext.prototype.DOT = function() {
    return this.getToken(SqlParser.DOT, 0);
};

DottedIdContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

DottedIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitDottedId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.DottedIdContext = DottedIdContext;

SqlParser.prototype.dottedId = function() {

    var localctx = new DottedIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SqlParser.RULE_dottedId);
    try {
        this.state = 349;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.DOT_ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 346;
            this.match(SqlParser.DOT_ID);
            break;
        case SqlParser.DOT:
            this.enterOuterAlt(localctx, 2);
            this.state = 347;
            this.match(SqlParser.DOT);
            this.state = 348;
            this.uid();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DecimalLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_decimalLiteral;
    return this;
}

DecimalLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DecimalLiteralContext.prototype.constructor = DecimalLiteralContext;

DecimalLiteralContext.prototype.DECIMAL_LITERAL = function() {
    return this.getToken(SqlParser.DECIMAL_LITERAL, 0);
};

DecimalLiteralContext.prototype.ZERO_DECIMAL = function() {
    return this.getToken(SqlParser.ZERO_DECIMAL, 0);
};

DecimalLiteralContext.prototype.ONE_DECIMAL = function() {
    return this.getToken(SqlParser.ONE_DECIMAL, 0);
};

DecimalLiteralContext.prototype.TWO_DECIMAL = function() {
    return this.getToken(SqlParser.TWO_DECIMAL, 0);
};

DecimalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitDecimalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.DecimalLiteralContext = DecimalLiteralContext;

SqlParser.prototype.decimalLiteral = function() {

    var localctx = new DecimalLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SqlParser.RULE_decimalLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 351;
        _la = this._input.LA(1);
        if(!(((((_la - 1025)) & ~0x1f) == 0 && ((1 << (_la - 1025)) & ((1 << (SqlParser.ZERO_DECIMAL - 1025)) | (1 << (SqlParser.ONE_DECIMAL - 1025)) | (1 << (SqlParser.TWO_DECIMAL - 1025)) | (1 << (SqlParser.DECIMAL_LITERAL - 1025)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_stringLiteral;
    return this;
}

StringLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringLiteralContext.prototype.constructor = StringLiteralContext;

StringLiteralContext.prototype.STRING_LITERAL = function() {
    return this.getToken(SqlParser.STRING_LITERAL, 0);
};

StringLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitStringLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.StringLiteralContext = StringLiteralContext;

SqlParser.prototype.stringLiteral = function() {

    var localctx = new StringLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SqlParser.RULE_stringLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 353;
        this.match(SqlParser.STRING_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BooleanLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_booleanLiteral;
    return this;
}

BooleanLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;

BooleanLiteralContext.prototype.TRUE = function() {
    return this.getToken(SqlParser.TRUE, 0);
};

BooleanLiteralContext.prototype.FALSE = function() {
    return this.getToken(SqlParser.FALSE, 0);
};

BooleanLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitBooleanLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.BooleanLiteralContext = BooleanLiteralContext;

SqlParser.prototype.booleanLiteral = function() {

    var localctx = new BooleanLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SqlParser.RULE_booleanLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355;
        _la = this._input.LA(1);
        if(!(_la===SqlParser.FALSE || _la===SqlParser.TRUE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HexadecimalLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_hexadecimalLiteral;
    return this;
}

HexadecimalLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HexadecimalLiteralContext.prototype.constructor = HexadecimalLiteralContext;

HexadecimalLiteralContext.prototype.HEXADECIMAL_LITERAL = function() {
    return this.getToken(SqlParser.HEXADECIMAL_LITERAL, 0);
};

HexadecimalLiteralContext.prototype.STRING_CHARSET_NAME = function() {
    return this.getToken(SqlParser.STRING_CHARSET_NAME, 0);
};

HexadecimalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitHexadecimalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.HexadecimalLiteralContext = HexadecimalLiteralContext;

SqlParser.prototype.hexadecimalLiteral = function() {

    var localctx = new HexadecimalLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SqlParser.RULE_hexadecimalLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.STRING_CHARSET_NAME) {
            this.state = 357;
            this.match(SqlParser.STRING_CHARSET_NAME);
        }

        this.state = 360;
        this.match(SqlParser.HEXADECIMAL_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstNumberLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_constNumberLiteral;
    this.negative = null; // Token
    return this;
}

ConstNumberLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstNumberLiteralContext.prototype.constructor = ConstNumberLiteralContext;

ConstNumberLiteralContext.prototype.decimalLiteral = function() {
    return this.getTypedRuleContext(DecimalLiteralContext,0);
};

ConstNumberLiteralContext.prototype.MINUS = function() {
    return this.getToken(SqlParser.MINUS, 0);
};

ConstNumberLiteralContext.prototype.REAL_LITERAL = function() {
    return this.getToken(SqlParser.REAL_LITERAL, 0);
};

ConstNumberLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitConstNumberLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.ConstNumberLiteralContext = ConstNumberLiteralContext;

SqlParser.prototype.constNumberLiteral = function() {

    var localctx = new ConstNumberLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SqlParser.RULE_constNumberLiteral);
    try {
        this.state = 369;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 363;
            this.decimalLiteral();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 364;
            localctx.negative = this.match(SqlParser.MINUS);
            this.state = 365;
            this.decimalLiteral();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 366;
            this.match(SqlParser.REAL_LITERAL);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 367;
            localctx.negative = this.match(SqlParser.MINUS);
            this.state = 368;
            this.match(SqlParser.REAL_LITERAL);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NullLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_nullLiteral;
    return this;
}

NullLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NullLiteralContext.prototype.constructor = NullLiteralContext;

NullLiteralContext.prototype.NULL_LITERAL = function() {
    return this.getToken(SqlParser.NULL_LITERAL, 0);
};

NullLiteralContext.prototype.NULL_SPEC_LITERAL = function() {
    return this.getToken(SqlParser.NULL_SPEC_LITERAL, 0);
};

NullLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitNullLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.NullLiteralContext = NullLiteralContext;

SqlParser.prototype.nullLiteral = function() {

    var localctx = new NullLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SqlParser.RULE_nullLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        _la = this._input.LA(1);
        if(!(_la===SqlParser.NULL_LITERAL || _la===SqlParser.NULL_SPEC_LITERAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.stringLiteral = function() {
    return this.getTypedRuleContext(StringLiteralContext,0);
};

ConstantContext.prototype.constNumberLiteral = function() {
    return this.getTypedRuleContext(ConstNumberLiteralContext,0);
};

ConstantContext.prototype.hexadecimalLiteral = function() {
    return this.getTypedRuleContext(HexadecimalLiteralContext,0);
};

ConstantContext.prototype.booleanLiteral = function() {
    return this.getTypedRuleContext(BooleanLiteralContext,0);
};

ConstantContext.prototype.nullLiteral = function() {
    return this.getTypedRuleContext(NullLiteralContext,0);
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.ConstantContext = ConstantContext;

SqlParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SqlParser.RULE_constant);
    try {
        this.state = 378;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 373;
            this.stringLiteral();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 374;
            this.constNumberLiteral();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 375;
            this.hexadecimalLiteral();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 376;
            this.booleanLiteral();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 377;
            this.nullLiteral();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstantOrDefaultContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_constantOrDefault;
    return this;
}

ConstantOrDefaultContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantOrDefaultContext.prototype.constructor = ConstantOrDefaultContext;

ConstantOrDefaultContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

ConstantOrDefaultContext.prototype.DEFAULT = function() {
    return this.getToken(SqlParser.DEFAULT, 0);
};

ConstantOrDefaultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitConstantOrDefault(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.ConstantOrDefaultContext = ConstantOrDefaultContext;

SqlParser.prototype.constantOrDefault = function() {

    var localctx = new ConstantOrDefaultContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SqlParser.RULE_constantOrDefault);
    try {
        this.state = 382;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.FALSE:
        case SqlParser.NULL_LITERAL:
        case SqlParser.TRUE:
        case SqlParser.MINUS:
        case SqlParser.RR_BRACKET:
        case SqlParser.COMMA:
        case SqlParser.ZERO_DECIMAL:
        case SqlParser.ONE_DECIMAL:
        case SqlParser.TWO_DECIMAL:
        case SqlParser.STRING_LITERAL:
        case SqlParser.DECIMAL_LITERAL:
        case SqlParser.HEXADECIMAL_LITERAL:
        case SqlParser.REAL_LITERAL:
        case SqlParser.NULL_SPEC_LITERAL:
        case SqlParser.STRING_CHARSET_NAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 380;
            this.constant();
            break;
        case SqlParser.DEFAULT:
            this.enterOuterAlt(localctx, 2);
            this.state = 381;
            this.match(SqlParser.DEFAULT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UidListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_uidList;
    return this;
}

UidListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UidListContext.prototype.constructor = UidListContext;

UidListContext.prototype.uid = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UidContext);
    } else {
        return this.getTypedRuleContext(UidContext,i);
    }
};

UidListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.COMMA);
    } else {
        return this.getToken(SqlParser.COMMA, i);
    }
};


UidListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitUidList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.UidListContext = UidListContext;

SqlParser.prototype.uidList = function() {

    var localctx = new UidListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SqlParser.RULE_uidList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        this.uid();
        this.state = 389;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 385;
            this.match(SqlParser.COMMA);
            this.state = 386;
            this.uid();
            this.state = 391;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstantsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_constants;
    return this;
}

ConstantsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantsContext.prototype.constructor = ConstantsContext;

ConstantsContext.prototype.constant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantContext);
    } else {
        return this.getTypedRuleContext(ConstantContext,i);
    }
};

ConstantsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.COMMA);
    } else {
        return this.getToken(SqlParser.COMMA, i);
    }
};


ConstantsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitConstants(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.ConstantsContext = ConstantsContext;

SqlParser.prototype.constants = function() {

    var localctx = new ConstantsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, SqlParser.RULE_constants);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        this.constant();
        this.state = 397;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 393;
            this.match(SqlParser.COMMA);
            this.state = 394;
            this.constant();
            this.state = 399;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstantsOrDefaultsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_constantsOrDefaults;
    return this;
}

ConstantsOrDefaultsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantsOrDefaultsContext.prototype.constructor = ConstantsOrDefaultsContext;

ConstantsOrDefaultsContext.prototype.constantOrDefault = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantOrDefaultContext);
    } else {
        return this.getTypedRuleContext(ConstantOrDefaultContext,i);
    }
};

ConstantsOrDefaultsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.COMMA);
    } else {
        return this.getToken(SqlParser.COMMA, i);
    }
};


ConstantsOrDefaultsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitConstantsOrDefaults(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.ConstantsOrDefaultsContext = ConstantsOrDefaultsContext;

SqlParser.prototype.constantsOrDefaults = function() {

    var localctx = new ConstantsOrDefaultsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, SqlParser.RULE_constantsOrDefaults);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 400;
        this.constantOrDefault();
        this.state = 405;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 401;
            this.match(SqlParser.COMMA);
            this.state = 402;
            this.constantOrDefault();
            this.state = 407;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function NotExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.not = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NotExpressionContext.prototype.constructor = NotExpressionContext;

SqlParser.NotExpressionContext = NotExpressionContext;

NotExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

NotExpressionContext.prototype.NOT = function() {
    return this.getToken(SqlParser.NOT, 0);
};

NotExpressionContext.prototype.EXCLAMATION_SYMBOL = function() {
    return this.getToken(SqlParser.EXCLAMATION_SYMBOL, 0);
};
NotExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitNotExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // LogicalOperatorContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalExpressionContext.prototype = Object.create(ExpressionContext.prototype);
LogicalExpressionContext.prototype.constructor = LogicalExpressionContext;

SqlParser.LogicalExpressionContext = LogicalExpressionContext;

LogicalExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LogicalExpressionContext.prototype.logicalOperator = function() {
    return this.getTypedRuleContext(LogicalOperatorContext,0);
};
LogicalExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitLogicalExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PredicateExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PredicateExpressionContext.prototype = Object.create(ExpressionContext.prototype);
PredicateExpressionContext.prototype.constructor = PredicateExpressionContext;

SqlParser.PredicateExpressionContext = PredicateExpressionContext;

PredicateExpressionContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};
PredicateExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitPredicateExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SqlParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 72;
    this.enterRecursionRule(localctx, 72, SqlParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
        switch(la_) {
        case 1:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 409;
            localctx.not = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===SqlParser.NOT || _la===SqlParser.EXCLAMATION_SYMBOL)) {
                localctx.not = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 410;
            this.expression(3);
            break;

        case 2:
            localctx = new PredicateExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 411;
            this.predicate();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 420;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,56,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new LogicalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, SqlParser.RULE_expression);
                this.state = 414;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 415;
                localctx.op = this.logicalOperator();
                this.state = 416;
                this.expression(3); 
            }
            this.state = 422;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,56,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function PredicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_predicate;
    return this;
}

PredicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateContext.prototype.constructor = PredicateContext;


 
PredicateContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ExpressionAtomPredicateContext(parser, ctx) {
	PredicateContext.call(this, parser);
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionAtomPredicateContext.prototype = Object.create(PredicateContext.prototype);
ExpressionAtomPredicateContext.prototype.constructor = ExpressionAtomPredicateContext;

SqlParser.ExpressionAtomPredicateContext = ExpressionAtomPredicateContext;

ExpressionAtomPredicateContext.prototype.expressionAtom = function() {
    return this.getTypedRuleContext(ExpressionAtomContext,0);
};
ExpressionAtomPredicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitExpressionAtomPredicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BinaryComparisonPredicateContext(parser, ctx) {
	PredicateContext.call(this, parser);
    this.left = null; // ConstOrColumnAtomContext;
    this.op = null; // ComparisonOperatorContext;
    this.right = null; // ConstOrColumnAtomContext;
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryComparisonPredicateContext.prototype = Object.create(PredicateContext.prototype);
BinaryComparisonPredicateContext.prototype.constructor = BinaryComparisonPredicateContext;

SqlParser.BinaryComparisonPredicateContext = BinaryComparisonPredicateContext;

BinaryComparisonPredicateContext.prototype.constOrColumnAtom = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstOrColumnAtomContext);
    } else {
        return this.getTypedRuleContext(ConstOrColumnAtomContext,i);
    }
};

BinaryComparisonPredicateContext.prototype.comparisonOperator = function() {
    return this.getTypedRuleContext(ComparisonOperatorContext,0);
};
BinaryComparisonPredicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitBinaryComparisonPredicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InPredicateContext(parser, ctx) {
	PredicateContext.call(this, parser);
    this.left = null; // ConstOrColumnAtomContext;
    this.not = null; // Token;
    this.values = null; // ConstantAtomsContext;
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InPredicateContext.prototype = Object.create(PredicateContext.prototype);
InPredicateContext.prototype.constructor = InPredicateContext;

SqlParser.InPredicateContext = InPredicateContext;

InPredicateContext.prototype.IN = function() {
    return this.getToken(SqlParser.IN, 0);
};

InPredicateContext.prototype.LR_BRACKET = function() {
    return this.getToken(SqlParser.LR_BRACKET, 0);
};

InPredicateContext.prototype.RR_BRACKET = function() {
    return this.getToken(SqlParser.RR_BRACKET, 0);
};

InPredicateContext.prototype.constOrColumnAtom = function() {
    return this.getTypedRuleContext(ConstOrColumnAtomContext,0);
};

InPredicateContext.prototype.constantAtoms = function() {
    return this.getTypedRuleContext(ConstantAtomsContext,0);
};

InPredicateContext.prototype.NOT = function() {
    return this.getToken(SqlParser.NOT, 0);
};
InPredicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitInPredicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BetweenPredicateContext(parser, ctx) {
	PredicateContext.call(this, parser);
    this.left = null; // ConstOrColumnAtomContext;
    this.not = null; // Token;
    this.min = null; // ConstantContext;
    this.max = null; // ConstantContext;
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BetweenPredicateContext.prototype = Object.create(PredicateContext.prototype);
BetweenPredicateContext.prototype.constructor = BetweenPredicateContext;

SqlParser.BetweenPredicateContext = BetweenPredicateContext;

BetweenPredicateContext.prototype.BETWEEN = function() {
    return this.getToken(SqlParser.BETWEEN, 0);
};

BetweenPredicateContext.prototype.AND = function() {
    return this.getToken(SqlParser.AND, 0);
};

BetweenPredicateContext.prototype.constOrColumnAtom = function() {
    return this.getTypedRuleContext(ConstOrColumnAtomContext,0);
};

BetweenPredicateContext.prototype.constant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantContext);
    } else {
        return this.getTypedRuleContext(ConstantContext,i);
    }
};

BetweenPredicateContext.prototype.NOT = function() {
    return this.getToken(SqlParser.NOT, 0);
};
BetweenPredicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitBetweenPredicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IsNullPredicateContext(parser, ctx) {
	PredicateContext.call(this, parser);
    this.left = null; // ConstOrColumnAtomContext;
    this.not = null; // Token;
    this.nil = null; // NullLiteralContext;
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IsNullPredicateContext.prototype = Object.create(PredicateContext.prototype);
IsNullPredicateContext.prototype.constructor = IsNullPredicateContext;

SqlParser.IsNullPredicateContext = IsNullPredicateContext;

IsNullPredicateContext.prototype.IS = function() {
    return this.getToken(SqlParser.IS, 0);
};

IsNullPredicateContext.prototype.constOrColumnAtom = function() {
    return this.getTypedRuleContext(ConstOrColumnAtomContext,0);
};

IsNullPredicateContext.prototype.nullLiteral = function() {
    return this.getTypedRuleContext(NullLiteralContext,0);
};

IsNullPredicateContext.prototype.NOT = function() {
    return this.getToken(SqlParser.NOT, 0);
};
IsNullPredicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitIsNullPredicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LikePredicateContext(parser, ctx) {
	PredicateContext.call(this, parser);
    this.left = null; // ConstOrColumnAtomContext;
    this.not = null; // Token;
    this.like = null; // Token;
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LikePredicateContext.prototype = Object.create(PredicateContext.prototype);
LikePredicateContext.prototype.constructor = LikePredicateContext;

SqlParser.LikePredicateContext = LikePredicateContext;

LikePredicateContext.prototype.LIKE = function() {
    return this.getToken(SqlParser.LIKE, 0);
};

LikePredicateContext.prototype.constOrColumnAtom = function() {
    return this.getTypedRuleContext(ConstOrColumnAtomContext,0);
};

LikePredicateContext.prototype.STRING_LITERAL = function() {
    return this.getToken(SqlParser.STRING_LITERAL, 0);
};

LikePredicateContext.prototype.NOT = function() {
    return this.getToken(SqlParser.NOT, 0);
};
LikePredicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitLikePredicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RegexpPredicateContext(parser, ctx) {
	PredicateContext.call(this, parser);
    this.left = null; // ConstOrColumnAtomContext;
    this.not = null; // Token;
    this.regex = null; // Token;
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RegexpPredicateContext.prototype = Object.create(PredicateContext.prototype);
RegexpPredicateContext.prototype.constructor = RegexpPredicateContext;

SqlParser.RegexpPredicateContext = RegexpPredicateContext;

RegexpPredicateContext.prototype.constOrColumnAtom = function() {
    return this.getTypedRuleContext(ConstOrColumnAtomContext,0);
};

RegexpPredicateContext.prototype.REGEXP = function() {
    return this.getToken(SqlParser.REGEXP, 0);
};

RegexpPredicateContext.prototype.RLIKE = function() {
    return this.getToken(SqlParser.RLIKE, 0);
};

RegexpPredicateContext.prototype.STRING_LITERAL = function() {
    return this.getToken(SqlParser.STRING_LITERAL, 0);
};

RegexpPredicateContext.prototype.NOT = function() {
    return this.getToken(SqlParser.NOT, 0);
};
RegexpPredicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitRegexpPredicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SqlParser.PredicateContext = PredicateContext;

SqlParser.prototype.predicate = function() {

    var localctx = new PredicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SqlParser.RULE_predicate);
    var _la = 0; // Token type
    try {
        this.state = 467;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
        switch(la_) {
        case 1:
            localctx = new InPredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 423;
            localctx.left = this.constOrColumnAtom();
            this.state = 425;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.NOT) {
                this.state = 424;
                localctx.not = this.match(SqlParser.NOT);
            }

            this.state = 427;
            this.match(SqlParser.IN);
            this.state = 428;
            this.match(SqlParser.LR_BRACKET);

            this.state = 429;
            localctx.values = this.constantAtoms();
            this.state = 430;
            this.match(SqlParser.RR_BRACKET);
            break;

        case 2:
            localctx = new IsNullPredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 432;
            localctx.left = this.constOrColumnAtom();
            this.state = 433;
            this.match(SqlParser.IS);
            this.state = 435;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.NOT) {
                this.state = 434;
                localctx.not = this.match(SqlParser.NOT);
            }

            this.state = 437;
            localctx.nil = this.nullLiteral();
            break;

        case 3:
            localctx = new BinaryComparisonPredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 439;
            localctx.left = this.constOrColumnAtom();
            this.state = 440;
            localctx.op = this.comparisonOperator();
            this.state = 441;
            localctx.right = this.constOrColumnAtom();
            break;

        case 4:
            localctx = new BetweenPredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 443;
            localctx.left = this.constOrColumnAtom();
            this.state = 445;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.NOT) {
                this.state = 444;
                localctx.not = this.match(SqlParser.NOT);
            }

            this.state = 447;
            this.match(SqlParser.BETWEEN);
            this.state = 448;
            localctx.min = this.constant();
            this.state = 449;
            this.match(SqlParser.AND);
            this.state = 450;
            localctx.max = this.constant();
            break;

        case 5:
            localctx = new LikePredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 452;
            localctx.left = this.constOrColumnAtom();
            this.state = 454;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.NOT) {
                this.state = 453;
                localctx.not = this.match(SqlParser.NOT);
            }

            this.state = 456;
            this.match(SqlParser.LIKE);
            this.state = 457;
            localctx.like = this.match(SqlParser.STRING_LITERAL);
            break;

        case 6:
            localctx = new RegexpPredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 459;
            localctx.left = this.constOrColumnAtom();
            this.state = 461;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.NOT) {
                this.state = 460;
                localctx.not = this.match(SqlParser.NOT);
            }

            this.state = 463;
            _la = this._input.LA(1);
            if(!(_la===SqlParser.REGEXP || _la===SqlParser.RLIKE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 464;
            localctx.regex = this.match(SqlParser.STRING_LITERAL);
            break;

        case 7:
            localctx = new ExpressionAtomPredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 466;
            this.expressionAtom();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstantAtomsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_constantAtoms;
    return this;
}

ConstantAtomsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantAtomsContext.prototype.constructor = ConstantAtomsContext;

ConstantAtomsContext.prototype.constant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantContext);
    } else {
        return this.getTypedRuleContext(ConstantContext,i);
    }
};

ConstantAtomsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.COMMA);
    } else {
        return this.getToken(SqlParser.COMMA, i);
    }
};


ConstantAtomsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitConstantAtoms(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.ConstantAtomsContext = ConstantAtomsContext;

SqlParser.prototype.constantAtoms = function() {

    var localctx = new ConstantAtomsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SqlParser.RULE_constantAtoms);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 469;
        this.constant();
        this.state = 474;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 470;
            this.match(SqlParser.COMMA);
            this.state = 471;
            this.constant();
            this.state = 476;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstOrColumnAtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_constOrColumnAtom;
    return this;
}

ConstOrColumnAtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstOrColumnAtomContext.prototype.constructor = ConstOrColumnAtomContext;


 
ConstOrColumnAtomContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FullColumnNameValueAtomContext(parser, ctx) {
	ConstOrColumnAtomContext.call(this, parser);
    ConstOrColumnAtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FullColumnNameValueAtomContext.prototype = Object.create(ConstOrColumnAtomContext.prototype);
FullColumnNameValueAtomContext.prototype.constructor = FullColumnNameValueAtomContext;

SqlParser.FullColumnNameValueAtomContext = FullColumnNameValueAtomContext;

FullColumnNameValueAtomContext.prototype.fullColumnName = function() {
    return this.getTypedRuleContext(FullColumnNameContext,0);
};
FullColumnNameValueAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitFullColumnNameValueAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstantValueAtomContext(parser, ctx) {
	ConstOrColumnAtomContext.call(this, parser);
    ConstOrColumnAtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantValueAtomContext.prototype = Object.create(ConstOrColumnAtomContext.prototype);
ConstantValueAtomContext.prototype.constructor = ConstantValueAtomContext;

SqlParser.ConstantValueAtomContext = ConstantValueAtomContext;

ConstantValueAtomContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
ConstantValueAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitConstantValueAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SqlParser.ConstOrColumnAtomContext = ConstOrColumnAtomContext;

SqlParser.prototype.constOrColumnAtom = function() {

    var localctx = new ConstOrColumnAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SqlParser.RULE_constOrColumnAtom);
    try {
        this.state = 479;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ConstantValueAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 477;
            this.constant();
            break;

        case 2:
            localctx = new FullColumnNameValueAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 478;
            this.fullColumnName();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionAtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_expressionAtom;
    return this;
}

ExpressionAtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionAtomContext.prototype.constructor = ExpressionAtomContext;


 
ExpressionAtomContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ConstantExpressionAtomContext(parser, ctx) {
	ExpressionAtomContext.call(this, parser);
    ExpressionAtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantExpressionAtomContext.prototype = Object.create(ExpressionAtomContext.prototype);
ConstantExpressionAtomContext.prototype.constructor = ConstantExpressionAtomContext;

SqlParser.ConstantExpressionAtomContext = ConstantExpressionAtomContext;

ConstantExpressionAtomContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};
ConstantExpressionAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitConstantExpressionAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FullColumnNameExpressionAtomContext(parser, ctx) {
	ExpressionAtomContext.call(this, parser);
    ExpressionAtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FullColumnNameExpressionAtomContext.prototype = Object.create(ExpressionAtomContext.prototype);
FullColumnNameExpressionAtomContext.prototype.constructor = FullColumnNameExpressionAtomContext;

SqlParser.FullColumnNameExpressionAtomContext = FullColumnNameExpressionAtomContext;

FullColumnNameExpressionAtomContext.prototype.fullColumnName = function() {
    return this.getTypedRuleContext(FullColumnNameContext,0);
};
FullColumnNameExpressionAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitFullColumnNameExpressionAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NestedExpressionAtomContext(parser, ctx) {
	ExpressionAtomContext.call(this, parser);
    ExpressionAtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NestedExpressionAtomContext.prototype = Object.create(ExpressionAtomContext.prototype);
NestedExpressionAtomContext.prototype.constructor = NestedExpressionAtomContext;

SqlParser.NestedExpressionAtomContext = NestedExpressionAtomContext;

NestedExpressionAtomContext.prototype.LR_BRACKET = function() {
    return this.getToken(SqlParser.LR_BRACKET, 0);
};

NestedExpressionAtomContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

NestedExpressionAtomContext.prototype.RR_BRACKET = function() {
    return this.getToken(SqlParser.RR_BRACKET, 0);
};
NestedExpressionAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitNestedExpressionAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SqlParser.ExpressionAtomContext = ExpressionAtomContext;

SqlParser.prototype.expressionAtom = function() {

    var localctx = new ExpressionAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, SqlParser.RULE_expressionAtom);
    try {
        this.state = 487;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,65,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ConstantExpressionAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 481;
            this.constant();
            break;

        case 2:
            localctx = new FullColumnNameExpressionAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 482;
            this.fullColumnName();
            break;

        case 3:
            localctx = new NestedExpressionAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 483;
            this.match(SqlParser.LR_BRACKET);
            this.state = 484;
            this.expression(0);
            this.state = 485;
            this.match(SqlParser.RR_BRACKET);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComparisonOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_comparisonOperator;
    return this;
}

ComparisonOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonOperatorContext.prototype.constructor = ComparisonOperatorContext;

ComparisonOperatorContext.prototype.EQUAL_SYMBOL = function() {
    return this.getToken(SqlParser.EQUAL_SYMBOL, 0);
};

ComparisonOperatorContext.prototype.GREATER_SYMBOL = function() {
    return this.getToken(SqlParser.GREATER_SYMBOL, 0);
};

ComparisonOperatorContext.prototype.LESS_SYMBOL = function() {
    return this.getToken(SqlParser.LESS_SYMBOL, 0);
};

ComparisonOperatorContext.prototype.EXCLAMATION_SYMBOL = function() {
    return this.getToken(SqlParser.EXCLAMATION_SYMBOL, 0);
};

ComparisonOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitComparisonOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.ComparisonOperatorContext = ComparisonOperatorContext;

SqlParser.prototype.comparisonOperator = function() {

    var localctx = new ComparisonOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, SqlParser.RULE_comparisonOperator);
    try {
        this.state = 503;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,66,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 489;
            this.match(SqlParser.EQUAL_SYMBOL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 490;
            this.match(SqlParser.GREATER_SYMBOL);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 491;
            this.match(SqlParser.LESS_SYMBOL);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 492;
            this.match(SqlParser.LESS_SYMBOL);
            this.state = 493;
            this.match(SqlParser.EQUAL_SYMBOL);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 494;
            this.match(SqlParser.GREATER_SYMBOL);
            this.state = 495;
            this.match(SqlParser.EQUAL_SYMBOL);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 496;
            this.match(SqlParser.LESS_SYMBOL);
            this.state = 497;
            this.match(SqlParser.GREATER_SYMBOL);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 498;
            this.match(SqlParser.EXCLAMATION_SYMBOL);
            this.state = 499;
            this.match(SqlParser.EQUAL_SYMBOL);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 500;
            this.match(SqlParser.LESS_SYMBOL);
            this.state = 501;
            this.match(SqlParser.EQUAL_SYMBOL);
            this.state = 502;
            this.match(SqlParser.GREATER_SYMBOL);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LogicalOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_logicalOperator;
    return this;
}

LogicalOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicalOperatorContext.prototype.constructor = LogicalOperatorContext;

LogicalOperatorContext.prototype.AND = function() {
    return this.getToken(SqlParser.AND, 0);
};

LogicalOperatorContext.prototype.BIT_AND_OP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.BIT_AND_OP);
    } else {
        return this.getToken(SqlParser.BIT_AND_OP, i);
    }
};


LogicalOperatorContext.prototype.XOR = function() {
    return this.getToken(SqlParser.XOR, 0);
};

LogicalOperatorContext.prototype.OR = function() {
    return this.getToken(SqlParser.OR, 0);
};

LogicalOperatorContext.prototype.BIT_OR_OP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.BIT_OR_OP);
    } else {
        return this.getToken(SqlParser.BIT_OR_OP, i);
    }
};


LogicalOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitLogicalOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.LogicalOperatorContext = LogicalOperatorContext;

SqlParser.prototype.logicalOperator = function() {

    var localctx = new LogicalOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, SqlParser.RULE_logicalOperator);
    try {
        this.state = 512;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.AND:
            this.enterOuterAlt(localctx, 1);
            this.state = 505;
            this.match(SqlParser.AND);
            break;
        case SqlParser.BIT_AND_OP:
            this.enterOuterAlt(localctx, 2);
            this.state = 506;
            this.match(SqlParser.BIT_AND_OP);
            this.state = 507;
            this.match(SqlParser.BIT_AND_OP);
            break;
        case SqlParser.XOR:
            this.enterOuterAlt(localctx, 3);
            this.state = 508;
            this.match(SqlParser.XOR);
            break;
        case SqlParser.OR:
            this.enterOuterAlt(localctx, 4);
            this.state = 509;
            this.match(SqlParser.OR);
            break;
        case SqlParser.BIT_OR_OP:
            this.enterOuterAlt(localctx, 5);
            this.state = 510;
            this.match(SqlParser.BIT_OR_OP);
            this.state = 511;
            this.match(SqlParser.BIT_OR_OP);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CharsetNameBaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_charsetNameBase;
    return this;
}

CharsetNameBaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CharsetNameBaseContext.prototype.constructor = CharsetNameBaseContext;

CharsetNameBaseContext.prototype.ARMSCII8 = function() {
    return this.getToken(SqlParser.ARMSCII8, 0);
};

CharsetNameBaseContext.prototype.ASCII = function() {
    return this.getToken(SqlParser.ASCII, 0);
};

CharsetNameBaseContext.prototype.BIG5 = function() {
    return this.getToken(SqlParser.BIG5, 0);
};

CharsetNameBaseContext.prototype.CP1250 = function() {
    return this.getToken(SqlParser.CP1250, 0);
};

CharsetNameBaseContext.prototype.CP1251 = function() {
    return this.getToken(SqlParser.CP1251, 0);
};

CharsetNameBaseContext.prototype.CP1256 = function() {
    return this.getToken(SqlParser.CP1256, 0);
};

CharsetNameBaseContext.prototype.CP1257 = function() {
    return this.getToken(SqlParser.CP1257, 0);
};

CharsetNameBaseContext.prototype.CP850 = function() {
    return this.getToken(SqlParser.CP850, 0);
};

CharsetNameBaseContext.prototype.CP852 = function() {
    return this.getToken(SqlParser.CP852, 0);
};

CharsetNameBaseContext.prototype.CP866 = function() {
    return this.getToken(SqlParser.CP866, 0);
};

CharsetNameBaseContext.prototype.CP932 = function() {
    return this.getToken(SqlParser.CP932, 0);
};

CharsetNameBaseContext.prototype.DEC8 = function() {
    return this.getToken(SqlParser.DEC8, 0);
};

CharsetNameBaseContext.prototype.EUCJPMS = function() {
    return this.getToken(SqlParser.EUCJPMS, 0);
};

CharsetNameBaseContext.prototype.EUCKR = function() {
    return this.getToken(SqlParser.EUCKR, 0);
};

CharsetNameBaseContext.prototype.GB2312 = function() {
    return this.getToken(SqlParser.GB2312, 0);
};

CharsetNameBaseContext.prototype.GBK = function() {
    return this.getToken(SqlParser.GBK, 0);
};

CharsetNameBaseContext.prototype.GEOSTD8 = function() {
    return this.getToken(SqlParser.GEOSTD8, 0);
};

CharsetNameBaseContext.prototype.GREEK = function() {
    return this.getToken(SqlParser.GREEK, 0);
};

CharsetNameBaseContext.prototype.HEBREW = function() {
    return this.getToken(SqlParser.HEBREW, 0);
};

CharsetNameBaseContext.prototype.HP8 = function() {
    return this.getToken(SqlParser.HP8, 0);
};

CharsetNameBaseContext.prototype.KEYBCS2 = function() {
    return this.getToken(SqlParser.KEYBCS2, 0);
};

CharsetNameBaseContext.prototype.KOI8R = function() {
    return this.getToken(SqlParser.KOI8R, 0);
};

CharsetNameBaseContext.prototype.KOI8U = function() {
    return this.getToken(SqlParser.KOI8U, 0);
};

CharsetNameBaseContext.prototype.LATIN1 = function() {
    return this.getToken(SqlParser.LATIN1, 0);
};

CharsetNameBaseContext.prototype.LATIN2 = function() {
    return this.getToken(SqlParser.LATIN2, 0);
};

CharsetNameBaseContext.prototype.LATIN5 = function() {
    return this.getToken(SqlParser.LATIN5, 0);
};

CharsetNameBaseContext.prototype.LATIN7 = function() {
    return this.getToken(SqlParser.LATIN7, 0);
};

CharsetNameBaseContext.prototype.MACCE = function() {
    return this.getToken(SqlParser.MACCE, 0);
};

CharsetNameBaseContext.prototype.MACROMAN = function() {
    return this.getToken(SqlParser.MACROMAN, 0);
};

CharsetNameBaseContext.prototype.SJIS = function() {
    return this.getToken(SqlParser.SJIS, 0);
};

CharsetNameBaseContext.prototype.SWE7 = function() {
    return this.getToken(SqlParser.SWE7, 0);
};

CharsetNameBaseContext.prototype.TIS620 = function() {
    return this.getToken(SqlParser.TIS620, 0);
};

CharsetNameBaseContext.prototype.UCS2 = function() {
    return this.getToken(SqlParser.UCS2, 0);
};

CharsetNameBaseContext.prototype.UJIS = function() {
    return this.getToken(SqlParser.UJIS, 0);
};

CharsetNameBaseContext.prototype.UTF16 = function() {
    return this.getToken(SqlParser.UTF16, 0);
};

CharsetNameBaseContext.prototype.UTF16LE = function() {
    return this.getToken(SqlParser.UTF16LE, 0);
};

CharsetNameBaseContext.prototype.UTF32 = function() {
    return this.getToken(SqlParser.UTF32, 0);
};

CharsetNameBaseContext.prototype.UTF8 = function() {
    return this.getToken(SqlParser.UTF8, 0);
};

CharsetNameBaseContext.prototype.UTF8MB3 = function() {
    return this.getToken(SqlParser.UTF8MB3, 0);
};

CharsetNameBaseContext.prototype.UTF8MB4 = function() {
    return this.getToken(SqlParser.UTF8MB4, 0);
};

CharsetNameBaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitCharsetNameBase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.CharsetNameBaseContext = CharsetNameBaseContext;

SqlParser.prototype.charsetNameBase = function() {

    var localctx = new CharsetNameBaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, SqlParser.RULE_charsetNameBase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 514;
        _la = this._input.LA(1);
        if(!(((((_la - 637)) & ~0x1f) == 0 && ((1 << (_la - 637)) & ((1 << (SqlParser.ARMSCII8 - 637)) | (1 << (SqlParser.ASCII - 637)) | (1 << (SqlParser.BIG5 - 637)) | (1 << (SqlParser.CP1250 - 637)) | (1 << (SqlParser.CP1251 - 637)) | (1 << (SqlParser.CP1256 - 637)) | (1 << (SqlParser.CP1257 - 637)) | (1 << (SqlParser.CP850 - 637)) | (1 << (SqlParser.CP852 - 637)) | (1 << (SqlParser.CP866 - 637)) | (1 << (SqlParser.CP932 - 637)) | (1 << (SqlParser.DEC8 - 637)) | (1 << (SqlParser.EUCJPMS - 637)) | (1 << (SqlParser.EUCKR - 637)) | (1 << (SqlParser.GB2312 - 637)) | (1 << (SqlParser.GBK - 637)) | (1 << (SqlParser.GEOSTD8 - 637)) | (1 << (SqlParser.GREEK - 637)) | (1 << (SqlParser.HEBREW - 637)) | (1 << (SqlParser.HP8 - 637)) | (1 << (SqlParser.KEYBCS2 - 637)) | (1 << (SqlParser.KOI8R - 637)) | (1 << (SqlParser.KOI8U - 637)) | (1 << (SqlParser.LATIN1 - 637)) | (1 << (SqlParser.LATIN2 - 637)) | (1 << (SqlParser.LATIN5 - 637)) | (1 << (SqlParser.LATIN7 - 637)) | (1 << (SqlParser.MACCE - 637)) | (1 << (SqlParser.MACROMAN - 637)) | (1 << (SqlParser.SJIS - 637)) | (1 << (SqlParser.SWE7 - 637)) | (1 << (SqlParser.TIS620 - 637)))) !== 0) || ((((_la - 669)) & ~0x1f) == 0 && ((1 << (_la - 669)) & ((1 << (SqlParser.UCS2 - 669)) | (1 << (SqlParser.UJIS - 669)) | (1 << (SqlParser.UTF16 - 669)) | (1 << (SqlParser.UTF16LE - 669)) | (1 << (SqlParser.UTF32 - 669)) | (1 << (SqlParser.UTF8 - 669)) | (1 << (SqlParser.UTF8MB3 - 669)) | (1 << (SqlParser.UTF8MB4 - 669)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TransactionLevelBaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_transactionLevelBase;
    return this;
}

TransactionLevelBaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TransactionLevelBaseContext.prototype.constructor = TransactionLevelBaseContext;

TransactionLevelBaseContext.prototype.REPEATABLE = function() {
    return this.getToken(SqlParser.REPEATABLE, 0);
};

TransactionLevelBaseContext.prototype.COMMITTED = function() {
    return this.getToken(SqlParser.COMMITTED, 0);
};

TransactionLevelBaseContext.prototype.UNCOMMITTED = function() {
    return this.getToken(SqlParser.UNCOMMITTED, 0);
};

TransactionLevelBaseContext.prototype.SERIALIZABLE = function() {
    return this.getToken(SqlParser.SERIALIZABLE, 0);
};

TransactionLevelBaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitTransactionLevelBase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.TransactionLevelBaseContext = TransactionLevelBaseContext;

SqlParser.prototype.transactionLevelBase = function() {

    var localctx = new TransactionLevelBaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, SqlParser.RULE_transactionLevelBase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 516;
        _la = this._input.LA(1);
        if(!(((((_la - 689)) & ~0x1f) == 0 && ((1 << (_la - 689)) & ((1 << (SqlParser.REPEATABLE - 689)) | (1 << (SqlParser.COMMITTED - 689)) | (1 << (SqlParser.UNCOMMITTED - 689)) | (1 << (SqlParser.SERIALIZABLE - 689)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrivilegesBaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_privilegesBase;
    return this;
}

PrivilegesBaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrivilegesBaseContext.prototype.constructor = PrivilegesBaseContext;

PrivilegesBaseContext.prototype.TABLES = function() {
    return this.getToken(SqlParser.TABLES, 0);
};

PrivilegesBaseContext.prototype.ROUTINE = function() {
    return this.getToken(SqlParser.ROUTINE, 0);
};

PrivilegesBaseContext.prototype.EXECUTE = function() {
    return this.getToken(SqlParser.EXECUTE, 0);
};

PrivilegesBaseContext.prototype.FILE = function() {
    return this.getToken(SqlParser.FILE, 0);
};

PrivilegesBaseContext.prototype.PROCESS = function() {
    return this.getToken(SqlParser.PROCESS, 0);
};

PrivilegesBaseContext.prototype.RELOAD = function() {
    return this.getToken(SqlParser.RELOAD, 0);
};

PrivilegesBaseContext.prototype.SHUTDOWN = function() {
    return this.getToken(SqlParser.SHUTDOWN, 0);
};

PrivilegesBaseContext.prototype.SUPER = function() {
    return this.getToken(SqlParser.SUPER, 0);
};

PrivilegesBaseContext.prototype.PRIVILEGES = function() {
    return this.getToken(SqlParser.PRIVILEGES, 0);
};

PrivilegesBaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitPrivilegesBase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.PrivilegesBaseContext = PrivilegesBaseContext;

SqlParser.prototype.privilegesBase = function() {

    var localctx = new PrivilegesBaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, SqlParser.RULE_privilegesBase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 518;
        _la = this._input.LA(1);
        if(!(((((_la - 602)) & ~0x1f) == 0 && ((1 << (_la - 602)) & ((1 << (SqlParser.TABLES - 602)) | (1 << (SqlParser.ROUTINE - 602)) | (1 << (SqlParser.EXECUTE - 602)) | (1 << (SqlParser.FILE - 602)) | (1 << (SqlParser.PROCESS - 602)) | (1 << (SqlParser.RELOAD - 602)) | (1 << (SqlParser.SHUTDOWN - 602)) | (1 << (SqlParser.SUPER - 602)) | (1 << (SqlParser.PRIVILEGES - 602)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IntervalTypeBaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_intervalTypeBase;
    return this;
}

IntervalTypeBaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntervalTypeBaseContext.prototype.constructor = IntervalTypeBaseContext;

IntervalTypeBaseContext.prototype.QUARTER = function() {
    return this.getToken(SqlParser.QUARTER, 0);
};

IntervalTypeBaseContext.prototype.MONTH = function() {
    return this.getToken(SqlParser.MONTH, 0);
};

IntervalTypeBaseContext.prototype.DAY = function() {
    return this.getToken(SqlParser.DAY, 0);
};

IntervalTypeBaseContext.prototype.HOUR = function() {
    return this.getToken(SqlParser.HOUR, 0);
};

IntervalTypeBaseContext.prototype.MINUTE = function() {
    return this.getToken(SqlParser.MINUTE, 0);
};

IntervalTypeBaseContext.prototype.WEEK = function() {
    return this.getToken(SqlParser.WEEK, 0);
};

IntervalTypeBaseContext.prototype.SECOND = function() {
    return this.getToken(SqlParser.SECOND, 0);
};

IntervalTypeBaseContext.prototype.MICROSECOND = function() {
    return this.getToken(SqlParser.MICROSECOND, 0);
};

IntervalTypeBaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitIntervalTypeBase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.IntervalTypeBaseContext = IntervalTypeBaseContext;

SqlParser.prototype.intervalTypeBase = function() {

    var localctx = new IntervalTypeBaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, SqlParser.RULE_intervalTypeBase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 520;
        _la = this._input.LA(1);
        if(!(((((_la - 594)) & ~0x1f) == 0 && ((1 << (_la - 594)) & ((1 << (SqlParser.QUARTER - 594)) | (1 << (SqlParser.MONTH - 594)) | (1 << (SqlParser.DAY - 594)) | (1 << (SqlParser.HOUR - 594)) | (1 << (SqlParser.MINUTE - 594)) | (1 << (SqlParser.WEEK - 594)) | (1 << (SqlParser.SECOND - 594)) | (1 << (SqlParser.MICROSECOND - 594)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DataTypeBaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_dataTypeBase;
    return this;
}

DataTypeBaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataTypeBaseContext.prototype.constructor = DataTypeBaseContext;

DataTypeBaseContext.prototype.DATE = function() {
    return this.getToken(SqlParser.DATE, 0);
};

DataTypeBaseContext.prototype.TIME = function() {
    return this.getToken(SqlParser.TIME, 0);
};

DataTypeBaseContext.prototype.TIMESTAMP = function() {
    return this.getToken(SqlParser.TIMESTAMP, 0);
};

DataTypeBaseContext.prototype.DATETIME = function() {
    return this.getToken(SqlParser.DATETIME, 0);
};

DataTypeBaseContext.prototype.YEAR = function() {
    return this.getToken(SqlParser.YEAR, 0);
};

DataTypeBaseContext.prototype.ENUM = function() {
    return this.getToken(SqlParser.ENUM, 0);
};

DataTypeBaseContext.prototype.TEXT = function() {
    return this.getToken(SqlParser.TEXT, 0);
};

DataTypeBaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitDataTypeBase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.DataTypeBaseContext = DataTypeBaseContext;

SqlParser.prototype.dataTypeBase = function() {

    var localctx = new DataTypeBaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, SqlParser.RULE_dataTypeBase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 522;
        _la = this._input.LA(1);
        if(!(((((_la - 199)) & ~0x1f) == 0 && ((1 << (_la - 199)) & ((1 << (SqlParser.DATE - 199)) | (1 << (SqlParser.TIME - 199)) | (1 << (SqlParser.TIMESTAMP - 199)) | (1 << (SqlParser.DATETIME - 199)) | (1 << (SqlParser.YEAR - 199)) | (1 << (SqlParser.TEXT - 199)) | (1 << (SqlParser.ENUM - 199)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function KeywordsCanBeIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_keywordsCanBeId;
    return this;
}

KeywordsCanBeIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordsCanBeIdContext.prototype.constructor = KeywordsCanBeIdContext;

KeywordsCanBeIdContext.prototype.ACCOUNT = function() {
    return this.getToken(SqlParser.ACCOUNT, 0);
};

KeywordsCanBeIdContext.prototype.ACTION = function() {
    return this.getToken(SqlParser.ACTION, 0);
};

KeywordsCanBeIdContext.prototype.AFTER = function() {
    return this.getToken(SqlParser.AFTER, 0);
};

KeywordsCanBeIdContext.prototype.AGGREGATE = function() {
    return this.getToken(SqlParser.AGGREGATE, 0);
};

KeywordsCanBeIdContext.prototype.ALGORITHM = function() {
    return this.getToken(SqlParser.ALGORITHM, 0);
};

KeywordsCanBeIdContext.prototype.ANY = function() {
    return this.getToken(SqlParser.ANY, 0);
};

KeywordsCanBeIdContext.prototype.AT = function() {
    return this.getToken(SqlParser.AT, 0);
};

KeywordsCanBeIdContext.prototype.AUDIT_ADMIN = function() {
    return this.getToken(SqlParser.AUDIT_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.AUTHORS = function() {
    return this.getToken(SqlParser.AUTHORS, 0);
};

KeywordsCanBeIdContext.prototype.AUTOCOMMIT = function() {
    return this.getToken(SqlParser.AUTOCOMMIT, 0);
};

KeywordsCanBeIdContext.prototype.AUTOEXTEND_SIZE = function() {
    return this.getToken(SqlParser.AUTOEXTEND_SIZE, 0);
};

KeywordsCanBeIdContext.prototype.AUTO_INCREMENT = function() {
    return this.getToken(SqlParser.AUTO_INCREMENT, 0);
};

KeywordsCanBeIdContext.prototype.AVG_ROW_LENGTH = function() {
    return this.getToken(SqlParser.AVG_ROW_LENGTH, 0);
};

KeywordsCanBeIdContext.prototype.BACKUP_ADMIN = function() {
    return this.getToken(SqlParser.BACKUP_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.BEGIN = function() {
    return this.getToken(SqlParser.BEGIN, 0);
};

KeywordsCanBeIdContext.prototype.BINLOG = function() {
    return this.getToken(SqlParser.BINLOG, 0);
};

KeywordsCanBeIdContext.prototype.BINLOG_ADMIN = function() {
    return this.getToken(SqlParser.BINLOG_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.BINLOG_ENCRYPTION_ADMIN = function() {
    return this.getToken(SqlParser.BINLOG_ENCRYPTION_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.BIT = function() {
    return this.getToken(SqlParser.BIT, 0);
};

KeywordsCanBeIdContext.prototype.BLOCK = function() {
    return this.getToken(SqlParser.BLOCK, 0);
};

KeywordsCanBeIdContext.prototype.BOOL = function() {
    return this.getToken(SqlParser.BOOL, 0);
};

KeywordsCanBeIdContext.prototype.BOOLEAN = function() {
    return this.getToken(SqlParser.BOOLEAN, 0);
};

KeywordsCanBeIdContext.prototype.BTREE = function() {
    return this.getToken(SqlParser.BTREE, 0);
};

KeywordsCanBeIdContext.prototype.CACHE = function() {
    return this.getToken(SqlParser.CACHE, 0);
};

KeywordsCanBeIdContext.prototype.CASCADED = function() {
    return this.getToken(SqlParser.CASCADED, 0);
};

KeywordsCanBeIdContext.prototype.CHAIN = function() {
    return this.getToken(SqlParser.CHAIN, 0);
};

KeywordsCanBeIdContext.prototype.CHANGED = function() {
    return this.getToken(SqlParser.CHANGED, 0);
};

KeywordsCanBeIdContext.prototype.CHANNEL = function() {
    return this.getToken(SqlParser.CHANNEL, 0);
};

KeywordsCanBeIdContext.prototype.CHECKSUM = function() {
    return this.getToken(SqlParser.CHECKSUM, 0);
};

KeywordsCanBeIdContext.prototype.PAGE_CHECKSUM = function() {
    return this.getToken(SqlParser.PAGE_CHECKSUM, 0);
};

KeywordsCanBeIdContext.prototype.CATALOG_NAME = function() {
    return this.getToken(SqlParser.CATALOG_NAME, 0);
};

KeywordsCanBeIdContext.prototype.CIPHER = function() {
    return this.getToken(SqlParser.CIPHER, 0);
};

KeywordsCanBeIdContext.prototype.CLASS_ORIGIN = function() {
    return this.getToken(SqlParser.CLASS_ORIGIN, 0);
};

KeywordsCanBeIdContext.prototype.CLIENT = function() {
    return this.getToken(SqlParser.CLIENT, 0);
};

KeywordsCanBeIdContext.prototype.CLONE_ADMIN = function() {
    return this.getToken(SqlParser.CLONE_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.CLOSE = function() {
    return this.getToken(SqlParser.CLOSE, 0);
};

KeywordsCanBeIdContext.prototype.COALESCE = function() {
    return this.getToken(SqlParser.COALESCE, 0);
};

KeywordsCanBeIdContext.prototype.CODE = function() {
    return this.getToken(SqlParser.CODE, 0);
};

KeywordsCanBeIdContext.prototype.COLUMNS = function() {
    return this.getToken(SqlParser.COLUMNS, 0);
};

KeywordsCanBeIdContext.prototype.COLUMN_FORMAT = function() {
    return this.getToken(SqlParser.COLUMN_FORMAT, 0);
};

KeywordsCanBeIdContext.prototype.COLUMN_NAME = function() {
    return this.getToken(SqlParser.COLUMN_NAME, 0);
};

KeywordsCanBeIdContext.prototype.COMMENT = function() {
    return this.getToken(SqlParser.COMMENT, 0);
};

KeywordsCanBeIdContext.prototype.COMMIT = function() {
    return this.getToken(SqlParser.COMMIT, 0);
};

KeywordsCanBeIdContext.prototype.COMPACT = function() {
    return this.getToken(SqlParser.COMPACT, 0);
};

KeywordsCanBeIdContext.prototype.COMPLETION = function() {
    return this.getToken(SqlParser.COMPLETION, 0);
};

KeywordsCanBeIdContext.prototype.COMPRESSED = function() {
    return this.getToken(SqlParser.COMPRESSED, 0);
};

KeywordsCanBeIdContext.prototype.COMPRESSION = function() {
    return this.getToken(SqlParser.COMPRESSION, 0);
};

KeywordsCanBeIdContext.prototype.CONCURRENT = function() {
    return this.getToken(SqlParser.CONCURRENT, 0);
};

KeywordsCanBeIdContext.prototype.CONNECTION = function() {
    return this.getToken(SqlParser.CONNECTION, 0);
};

KeywordsCanBeIdContext.prototype.CONNECTION_ADMIN = function() {
    return this.getToken(SqlParser.CONNECTION_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.CONSISTENT = function() {
    return this.getToken(SqlParser.CONSISTENT, 0);
};

KeywordsCanBeIdContext.prototype.CONSTRAINT_CATALOG = function() {
    return this.getToken(SqlParser.CONSTRAINT_CATALOG, 0);
};

KeywordsCanBeIdContext.prototype.CONSTRAINT_NAME = function() {
    return this.getToken(SqlParser.CONSTRAINT_NAME, 0);
};

KeywordsCanBeIdContext.prototype.CONSTRAINT_SCHEMA = function() {
    return this.getToken(SqlParser.CONSTRAINT_SCHEMA, 0);
};

KeywordsCanBeIdContext.prototype.CONTAINS = function() {
    return this.getToken(SqlParser.CONTAINS, 0);
};

KeywordsCanBeIdContext.prototype.CONTEXT = function() {
    return this.getToken(SqlParser.CONTEXT, 0);
};

KeywordsCanBeIdContext.prototype.CONTRIBUTORS = function() {
    return this.getToken(SqlParser.CONTRIBUTORS, 0);
};

KeywordsCanBeIdContext.prototype.COPY = function() {
    return this.getToken(SqlParser.COPY, 0);
};

KeywordsCanBeIdContext.prototype.CPU = function() {
    return this.getToken(SqlParser.CPU, 0);
};

KeywordsCanBeIdContext.prototype.CURRENT = function() {
    return this.getToken(SqlParser.CURRENT, 0);
};

KeywordsCanBeIdContext.prototype.CURSOR_NAME = function() {
    return this.getToken(SqlParser.CURSOR_NAME, 0);
};

KeywordsCanBeIdContext.prototype.DATA = function() {
    return this.getToken(SqlParser.DATA, 0);
};

KeywordsCanBeIdContext.prototype.DATAFILE = function() {
    return this.getToken(SqlParser.DATAFILE, 0);
};

KeywordsCanBeIdContext.prototype.DEALLOCATE = function() {
    return this.getToken(SqlParser.DEALLOCATE, 0);
};

KeywordsCanBeIdContext.prototype.DEFAULT_AUTH = function() {
    return this.getToken(SqlParser.DEFAULT_AUTH, 0);
};

KeywordsCanBeIdContext.prototype.DEFINER = function() {
    return this.getToken(SqlParser.DEFINER, 0);
};

KeywordsCanBeIdContext.prototype.DELAY_KEY_WRITE = function() {
    return this.getToken(SqlParser.DELAY_KEY_WRITE, 0);
};

KeywordsCanBeIdContext.prototype.DES_KEY_FILE = function() {
    return this.getToken(SqlParser.DES_KEY_FILE, 0);
};

KeywordsCanBeIdContext.prototype.DIAGNOSTICS = function() {
    return this.getToken(SqlParser.DIAGNOSTICS, 0);
};

KeywordsCanBeIdContext.prototype.DIRECTORY = function() {
    return this.getToken(SqlParser.DIRECTORY, 0);
};

KeywordsCanBeIdContext.prototype.DISABLE = function() {
    return this.getToken(SqlParser.DISABLE, 0);
};

KeywordsCanBeIdContext.prototype.DISCARD = function() {
    return this.getToken(SqlParser.DISCARD, 0);
};

KeywordsCanBeIdContext.prototype.DISK = function() {
    return this.getToken(SqlParser.DISK, 0);
};

KeywordsCanBeIdContext.prototype.DO = function() {
    return this.getToken(SqlParser.DO, 0);
};

KeywordsCanBeIdContext.prototype.DUMPFILE = function() {
    return this.getToken(SqlParser.DUMPFILE, 0);
};

KeywordsCanBeIdContext.prototype.DUPLICATE = function() {
    return this.getToken(SqlParser.DUPLICATE, 0);
};

KeywordsCanBeIdContext.prototype.DYNAMIC = function() {
    return this.getToken(SqlParser.DYNAMIC, 0);
};

KeywordsCanBeIdContext.prototype.ENABLE = function() {
    return this.getToken(SqlParser.ENABLE, 0);
};

KeywordsCanBeIdContext.prototype.ENCRYPTION = function() {
    return this.getToken(SqlParser.ENCRYPTION, 0);
};

KeywordsCanBeIdContext.prototype.ENCRYPTION_KEY_ADMIN = function() {
    return this.getToken(SqlParser.ENCRYPTION_KEY_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.END = function() {
    return this.getToken(SqlParser.END, 0);
};

KeywordsCanBeIdContext.prototype.ENDS = function() {
    return this.getToken(SqlParser.ENDS, 0);
};

KeywordsCanBeIdContext.prototype.ENGINE = function() {
    return this.getToken(SqlParser.ENGINE, 0);
};

KeywordsCanBeIdContext.prototype.ENGINES = function() {
    return this.getToken(SqlParser.ENGINES, 0);
};

KeywordsCanBeIdContext.prototype.ERROR = function() {
    return this.getToken(SqlParser.ERROR, 0);
};

KeywordsCanBeIdContext.prototype.ERRORS = function() {
    return this.getToken(SqlParser.ERRORS, 0);
};

KeywordsCanBeIdContext.prototype.ESCAPE = function() {
    return this.getToken(SqlParser.ESCAPE, 0);
};

KeywordsCanBeIdContext.prototype.EVEN = function() {
    return this.getToken(SqlParser.EVEN, 0);
};

KeywordsCanBeIdContext.prototype.EVENT = function() {
    return this.getToken(SqlParser.EVENT, 0);
};

KeywordsCanBeIdContext.prototype.EVENTS = function() {
    return this.getToken(SqlParser.EVENTS, 0);
};

KeywordsCanBeIdContext.prototype.EVERY = function() {
    return this.getToken(SqlParser.EVERY, 0);
};

KeywordsCanBeIdContext.prototype.EXCHANGE = function() {
    return this.getToken(SqlParser.EXCHANGE, 0);
};

KeywordsCanBeIdContext.prototype.EXCLUSIVE = function() {
    return this.getToken(SqlParser.EXCLUSIVE, 0);
};

KeywordsCanBeIdContext.prototype.EXPIRE = function() {
    return this.getToken(SqlParser.EXPIRE, 0);
};

KeywordsCanBeIdContext.prototype.EXPORT = function() {
    return this.getToken(SqlParser.EXPORT, 0);
};

KeywordsCanBeIdContext.prototype.EXTENDED = function() {
    return this.getToken(SqlParser.EXTENDED, 0);
};

KeywordsCanBeIdContext.prototype.EXTENT_SIZE = function() {
    return this.getToken(SqlParser.EXTENT_SIZE, 0);
};

KeywordsCanBeIdContext.prototype.FAST = function() {
    return this.getToken(SqlParser.FAST, 0);
};

KeywordsCanBeIdContext.prototype.FAULTS = function() {
    return this.getToken(SqlParser.FAULTS, 0);
};

KeywordsCanBeIdContext.prototype.FIELDS = function() {
    return this.getToken(SqlParser.FIELDS, 0);
};

KeywordsCanBeIdContext.prototype.FILE_BLOCK_SIZE = function() {
    return this.getToken(SqlParser.FILE_BLOCK_SIZE, 0);
};

KeywordsCanBeIdContext.prototype.FILTER = function() {
    return this.getToken(SqlParser.FILTER, 0);
};

KeywordsCanBeIdContext.prototype.FIREWALL_ADMIN = function() {
    return this.getToken(SqlParser.FIREWALL_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.FIREWALL_USER = function() {
    return this.getToken(SqlParser.FIREWALL_USER, 0);
};

KeywordsCanBeIdContext.prototype.FIRST = function() {
    return this.getToken(SqlParser.FIRST, 0);
};

KeywordsCanBeIdContext.prototype.FIXED = function() {
    return this.getToken(SqlParser.FIXED, 0);
};

KeywordsCanBeIdContext.prototype.FLUSH = function() {
    return this.getToken(SqlParser.FLUSH, 0);
};

KeywordsCanBeIdContext.prototype.FOLLOWS = function() {
    return this.getToken(SqlParser.FOLLOWS, 0);
};

KeywordsCanBeIdContext.prototype.FOUND = function() {
    return this.getToken(SqlParser.FOUND, 0);
};

KeywordsCanBeIdContext.prototype.FULL = function() {
    return this.getToken(SqlParser.FULL, 0);
};

KeywordsCanBeIdContext.prototype.FUNCTION = function() {
    return this.getToken(SqlParser.FUNCTION, 0);
};

KeywordsCanBeIdContext.prototype.GENERAL = function() {
    return this.getToken(SqlParser.GENERAL, 0);
};

KeywordsCanBeIdContext.prototype.GLOBAL = function() {
    return this.getToken(SqlParser.GLOBAL, 0);
};

KeywordsCanBeIdContext.prototype.GRANTS = function() {
    return this.getToken(SqlParser.GRANTS, 0);
};

KeywordsCanBeIdContext.prototype.GROUP_REPLICATION = function() {
    return this.getToken(SqlParser.GROUP_REPLICATION, 0);
};

KeywordsCanBeIdContext.prototype.GROUP_REPLICATION_ADMIN = function() {
    return this.getToken(SqlParser.GROUP_REPLICATION_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.HANDLER = function() {
    return this.getToken(SqlParser.HANDLER, 0);
};

KeywordsCanBeIdContext.prototype.HASH = function() {
    return this.getToken(SqlParser.HASH, 0);
};

KeywordsCanBeIdContext.prototype.HELP = function() {
    return this.getToken(SqlParser.HELP, 0);
};

KeywordsCanBeIdContext.prototype.HOST = function() {
    return this.getToken(SqlParser.HOST, 0);
};

KeywordsCanBeIdContext.prototype.HOSTS = function() {
    return this.getToken(SqlParser.HOSTS, 0);
};

KeywordsCanBeIdContext.prototype.IDENTIFIED = function() {
    return this.getToken(SqlParser.IDENTIFIED, 0);
};

KeywordsCanBeIdContext.prototype.IGNORE_SERVER_IDS = function() {
    return this.getToken(SqlParser.IGNORE_SERVER_IDS, 0);
};

KeywordsCanBeIdContext.prototype.IMPORT = function() {
    return this.getToken(SqlParser.IMPORT, 0);
};

KeywordsCanBeIdContext.prototype.INDEXES = function() {
    return this.getToken(SqlParser.INDEXES, 0);
};

KeywordsCanBeIdContext.prototype.INITIAL_SIZE = function() {
    return this.getToken(SqlParser.INITIAL_SIZE, 0);
};

KeywordsCanBeIdContext.prototype.INNODB_REDO_LOG_ARCHIVE = function() {
    return this.getToken(SqlParser.INNODB_REDO_LOG_ARCHIVE, 0);
};

KeywordsCanBeIdContext.prototype.INPLACE = function() {
    return this.getToken(SqlParser.INPLACE, 0);
};

KeywordsCanBeIdContext.prototype.INSERT_METHOD = function() {
    return this.getToken(SqlParser.INSERT_METHOD, 0);
};

KeywordsCanBeIdContext.prototype.INSTALL = function() {
    return this.getToken(SqlParser.INSTALL, 0);
};

KeywordsCanBeIdContext.prototype.INSTANCE = function() {
    return this.getToken(SqlParser.INSTANCE, 0);
};

KeywordsCanBeIdContext.prototype.INTERNAL = function() {
    return this.getToken(SqlParser.INTERNAL, 0);
};

KeywordsCanBeIdContext.prototype.INVOKER = function() {
    return this.getToken(SqlParser.INVOKER, 0);
};

KeywordsCanBeIdContext.prototype.IO = function() {
    return this.getToken(SqlParser.IO, 0);
};

KeywordsCanBeIdContext.prototype.IO_THREAD = function() {
    return this.getToken(SqlParser.IO_THREAD, 0);
};

KeywordsCanBeIdContext.prototype.IPC = function() {
    return this.getToken(SqlParser.IPC, 0);
};

KeywordsCanBeIdContext.prototype.ISOLATION = function() {
    return this.getToken(SqlParser.ISOLATION, 0);
};

KeywordsCanBeIdContext.prototype.ISSUER = function() {
    return this.getToken(SqlParser.ISSUER, 0);
};

KeywordsCanBeIdContext.prototype.JSON = function() {
    return this.getToken(SqlParser.JSON, 0);
};

KeywordsCanBeIdContext.prototype.KEY_BLOCK_SIZE = function() {
    return this.getToken(SqlParser.KEY_BLOCK_SIZE, 0);
};

KeywordsCanBeIdContext.prototype.LANGUAGE = function() {
    return this.getToken(SqlParser.LANGUAGE, 0);
};

KeywordsCanBeIdContext.prototype.LAST = function() {
    return this.getToken(SqlParser.LAST, 0);
};

KeywordsCanBeIdContext.prototype.LEAVES = function() {
    return this.getToken(SqlParser.LEAVES, 0);
};

KeywordsCanBeIdContext.prototype.LESS = function() {
    return this.getToken(SqlParser.LESS, 0);
};

KeywordsCanBeIdContext.prototype.LEVEL = function() {
    return this.getToken(SqlParser.LEVEL, 0);
};

KeywordsCanBeIdContext.prototype.LIST = function() {
    return this.getToken(SqlParser.LIST, 0);
};

KeywordsCanBeIdContext.prototype.LOCAL = function() {
    return this.getToken(SqlParser.LOCAL, 0);
};

KeywordsCanBeIdContext.prototype.LOGFILE = function() {
    return this.getToken(SqlParser.LOGFILE, 0);
};

KeywordsCanBeIdContext.prototype.LOGS = function() {
    return this.getToken(SqlParser.LOGS, 0);
};

KeywordsCanBeIdContext.prototype.MASTER = function() {
    return this.getToken(SqlParser.MASTER, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_AUTO_POSITION = function() {
    return this.getToken(SqlParser.MASTER_AUTO_POSITION, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_CONNECT_RETRY = function() {
    return this.getToken(SqlParser.MASTER_CONNECT_RETRY, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_DELAY = function() {
    return this.getToken(SqlParser.MASTER_DELAY, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_HEARTBEAT_PERIOD = function() {
    return this.getToken(SqlParser.MASTER_HEARTBEAT_PERIOD, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_HOST = function() {
    return this.getToken(SqlParser.MASTER_HOST, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_LOG_FILE = function() {
    return this.getToken(SqlParser.MASTER_LOG_FILE, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_LOG_POS = function() {
    return this.getToken(SqlParser.MASTER_LOG_POS, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_PASSWORD = function() {
    return this.getToken(SqlParser.MASTER_PASSWORD, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_PORT = function() {
    return this.getToken(SqlParser.MASTER_PORT, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_RETRY_COUNT = function() {
    return this.getToken(SqlParser.MASTER_RETRY_COUNT, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_SSL = function() {
    return this.getToken(SqlParser.MASTER_SSL, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_SSL_CA = function() {
    return this.getToken(SqlParser.MASTER_SSL_CA, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_SSL_CAPATH = function() {
    return this.getToken(SqlParser.MASTER_SSL_CAPATH, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_SSL_CERT = function() {
    return this.getToken(SqlParser.MASTER_SSL_CERT, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_SSL_CIPHER = function() {
    return this.getToken(SqlParser.MASTER_SSL_CIPHER, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_SSL_CRL = function() {
    return this.getToken(SqlParser.MASTER_SSL_CRL, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_SSL_CRLPATH = function() {
    return this.getToken(SqlParser.MASTER_SSL_CRLPATH, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_SSL_KEY = function() {
    return this.getToken(SqlParser.MASTER_SSL_KEY, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_TLS_VERSION = function() {
    return this.getToken(SqlParser.MASTER_TLS_VERSION, 0);
};

KeywordsCanBeIdContext.prototype.MASTER_USER = function() {
    return this.getToken(SqlParser.MASTER_USER, 0);
};

KeywordsCanBeIdContext.prototype.MAX_CONNECTIONS_PER_HOUR = function() {
    return this.getToken(SqlParser.MAX_CONNECTIONS_PER_HOUR, 0);
};

KeywordsCanBeIdContext.prototype.MAX_QUERIES_PER_HOUR = function() {
    return this.getToken(SqlParser.MAX_QUERIES_PER_HOUR, 0);
};

KeywordsCanBeIdContext.prototype.MAX_ROWS = function() {
    return this.getToken(SqlParser.MAX_ROWS, 0);
};

KeywordsCanBeIdContext.prototype.MAX_SIZE = function() {
    return this.getToken(SqlParser.MAX_SIZE, 0);
};

KeywordsCanBeIdContext.prototype.MAX_UPDATES_PER_HOUR = function() {
    return this.getToken(SqlParser.MAX_UPDATES_PER_HOUR, 0);
};

KeywordsCanBeIdContext.prototype.MAX_USER_CONNECTIONS = function() {
    return this.getToken(SqlParser.MAX_USER_CONNECTIONS, 0);
};

KeywordsCanBeIdContext.prototype.MEDIUM = function() {
    return this.getToken(SqlParser.MEDIUM, 0);
};

KeywordsCanBeIdContext.prototype.MEMORY = function() {
    return this.getToken(SqlParser.MEMORY, 0);
};

KeywordsCanBeIdContext.prototype.MERGE = function() {
    return this.getToken(SqlParser.MERGE, 0);
};

KeywordsCanBeIdContext.prototype.MESSAGE_TEXT = function() {
    return this.getToken(SqlParser.MESSAGE_TEXT, 0);
};

KeywordsCanBeIdContext.prototype.MID = function() {
    return this.getToken(SqlParser.MID, 0);
};

KeywordsCanBeIdContext.prototype.MIGRATE = function() {
    return this.getToken(SqlParser.MIGRATE, 0);
};

KeywordsCanBeIdContext.prototype.MIN_ROWS = function() {
    return this.getToken(SqlParser.MIN_ROWS, 0);
};

KeywordsCanBeIdContext.prototype.MODE = function() {
    return this.getToken(SqlParser.MODE, 0);
};

KeywordsCanBeIdContext.prototype.MODIFY = function() {
    return this.getToken(SqlParser.MODIFY, 0);
};

KeywordsCanBeIdContext.prototype.MUTEX = function() {
    return this.getToken(SqlParser.MUTEX, 0);
};

KeywordsCanBeIdContext.prototype.MYSQL = function() {
    return this.getToken(SqlParser.MYSQL, 0);
};

KeywordsCanBeIdContext.prototype.MYSQL_ERRNO = function() {
    return this.getToken(SqlParser.MYSQL_ERRNO, 0);
};

KeywordsCanBeIdContext.prototype.NAME = function() {
    return this.getToken(SqlParser.NAME, 0);
};

KeywordsCanBeIdContext.prototype.NAMES = function() {
    return this.getToken(SqlParser.NAMES, 0);
};

KeywordsCanBeIdContext.prototype.NCHAR = function() {
    return this.getToken(SqlParser.NCHAR, 0);
};

KeywordsCanBeIdContext.prototype.NDB_STORED_USER = function() {
    return this.getToken(SqlParser.NDB_STORED_USER, 0);
};

KeywordsCanBeIdContext.prototype.NEVER = function() {
    return this.getToken(SqlParser.NEVER, 0);
};

KeywordsCanBeIdContext.prototype.NEXT = function() {
    return this.getToken(SqlParser.NEXT, 0);
};

KeywordsCanBeIdContext.prototype.NO = function() {
    return this.getToken(SqlParser.NO, 0);
};

KeywordsCanBeIdContext.prototype.NODEGROUP = function() {
    return this.getToken(SqlParser.NODEGROUP, 0);
};

KeywordsCanBeIdContext.prototype.NONE = function() {
    return this.getToken(SqlParser.NONE, 0);
};

KeywordsCanBeIdContext.prototype.NUMBER = function() {
    return this.getToken(SqlParser.NUMBER, 0);
};

KeywordsCanBeIdContext.prototype.OFFLINE = function() {
    return this.getToken(SqlParser.OFFLINE, 0);
};

KeywordsCanBeIdContext.prototype.OFFSET = function() {
    return this.getToken(SqlParser.OFFSET, 0);
};

KeywordsCanBeIdContext.prototype.OJ = function() {
    return this.getToken(SqlParser.OJ, 0);
};

KeywordsCanBeIdContext.prototype.OLD_PASSWORD = function() {
    return this.getToken(SqlParser.OLD_PASSWORD, 0);
};

KeywordsCanBeIdContext.prototype.ONE = function() {
    return this.getToken(SqlParser.ONE, 0);
};

KeywordsCanBeIdContext.prototype.ONLINE = function() {
    return this.getToken(SqlParser.ONLINE, 0);
};

KeywordsCanBeIdContext.prototype.ONLY = function() {
    return this.getToken(SqlParser.ONLY, 0);
};

KeywordsCanBeIdContext.prototype.OPEN = function() {
    return this.getToken(SqlParser.OPEN, 0);
};

KeywordsCanBeIdContext.prototype.OPTIMIZER_COSTS = function() {
    return this.getToken(SqlParser.OPTIMIZER_COSTS, 0);
};

KeywordsCanBeIdContext.prototype.OPTIONS = function() {
    return this.getToken(SqlParser.OPTIONS, 0);
};

KeywordsCanBeIdContext.prototype.OWNER = function() {
    return this.getToken(SqlParser.OWNER, 0);
};

KeywordsCanBeIdContext.prototype.PACK_KEYS = function() {
    return this.getToken(SqlParser.PACK_KEYS, 0);
};

KeywordsCanBeIdContext.prototype.PAGE = function() {
    return this.getToken(SqlParser.PAGE, 0);
};

KeywordsCanBeIdContext.prototype.PARSER = function() {
    return this.getToken(SqlParser.PARSER, 0);
};

KeywordsCanBeIdContext.prototype.PARTIAL = function() {
    return this.getToken(SqlParser.PARTIAL, 0);
};

KeywordsCanBeIdContext.prototype.PARTITIONING = function() {
    return this.getToken(SqlParser.PARTITIONING, 0);
};

KeywordsCanBeIdContext.prototype.PARTITIONS = function() {
    return this.getToken(SqlParser.PARTITIONS, 0);
};

KeywordsCanBeIdContext.prototype.PASSWORD = function() {
    return this.getToken(SqlParser.PASSWORD, 0);
};

KeywordsCanBeIdContext.prototype.PERSIST_RO_VARIABLES_ADMIN = function() {
    return this.getToken(SqlParser.PERSIST_RO_VARIABLES_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.PHASE = function() {
    return this.getToken(SqlParser.PHASE, 0);
};

KeywordsCanBeIdContext.prototype.PLUGINS = function() {
    return this.getToken(SqlParser.PLUGINS, 0);
};

KeywordsCanBeIdContext.prototype.PLUGIN_DIR = function() {
    return this.getToken(SqlParser.PLUGIN_DIR, 0);
};

KeywordsCanBeIdContext.prototype.PLUGIN = function() {
    return this.getToken(SqlParser.PLUGIN, 0);
};

KeywordsCanBeIdContext.prototype.PORT = function() {
    return this.getToken(SqlParser.PORT, 0);
};

KeywordsCanBeIdContext.prototype.PRECEDES = function() {
    return this.getToken(SqlParser.PRECEDES, 0);
};

KeywordsCanBeIdContext.prototype.PREPARE = function() {
    return this.getToken(SqlParser.PREPARE, 0);
};

KeywordsCanBeIdContext.prototype.PRESERVE = function() {
    return this.getToken(SqlParser.PRESERVE, 0);
};

KeywordsCanBeIdContext.prototype.PREV = function() {
    return this.getToken(SqlParser.PREV, 0);
};

KeywordsCanBeIdContext.prototype.PROCESSLIST = function() {
    return this.getToken(SqlParser.PROCESSLIST, 0);
};

KeywordsCanBeIdContext.prototype.PROFILE = function() {
    return this.getToken(SqlParser.PROFILE, 0);
};

KeywordsCanBeIdContext.prototype.PROFILES = function() {
    return this.getToken(SqlParser.PROFILES, 0);
};

KeywordsCanBeIdContext.prototype.PROXY = function() {
    return this.getToken(SqlParser.PROXY, 0);
};

KeywordsCanBeIdContext.prototype.QUERY = function() {
    return this.getToken(SqlParser.QUERY, 0);
};

KeywordsCanBeIdContext.prototype.QUICK = function() {
    return this.getToken(SqlParser.QUICK, 0);
};

KeywordsCanBeIdContext.prototype.REBUILD = function() {
    return this.getToken(SqlParser.REBUILD, 0);
};

KeywordsCanBeIdContext.prototype.RECOVER = function() {
    return this.getToken(SqlParser.RECOVER, 0);
};

KeywordsCanBeIdContext.prototype.REDO_BUFFER_SIZE = function() {
    return this.getToken(SqlParser.REDO_BUFFER_SIZE, 0);
};

KeywordsCanBeIdContext.prototype.REDUNDANT = function() {
    return this.getToken(SqlParser.REDUNDANT, 0);
};

KeywordsCanBeIdContext.prototype.RELAY = function() {
    return this.getToken(SqlParser.RELAY, 0);
};

KeywordsCanBeIdContext.prototype.RELAYLOG = function() {
    return this.getToken(SqlParser.RELAYLOG, 0);
};

KeywordsCanBeIdContext.prototype.RELAY_LOG_FILE = function() {
    return this.getToken(SqlParser.RELAY_LOG_FILE, 0);
};

KeywordsCanBeIdContext.prototype.RELAY_LOG_POS = function() {
    return this.getToken(SqlParser.RELAY_LOG_POS, 0);
};

KeywordsCanBeIdContext.prototype.REMOVE = function() {
    return this.getToken(SqlParser.REMOVE, 0);
};

KeywordsCanBeIdContext.prototype.REORGANIZE = function() {
    return this.getToken(SqlParser.REORGANIZE, 0);
};

KeywordsCanBeIdContext.prototype.REPAIR = function() {
    return this.getToken(SqlParser.REPAIR, 0);
};

KeywordsCanBeIdContext.prototype.REPLICATE_DO_DB = function() {
    return this.getToken(SqlParser.REPLICATE_DO_DB, 0);
};

KeywordsCanBeIdContext.prototype.REPLICATE_DO_TABLE = function() {
    return this.getToken(SqlParser.REPLICATE_DO_TABLE, 0);
};

KeywordsCanBeIdContext.prototype.REPLICATE_IGNORE_DB = function() {
    return this.getToken(SqlParser.REPLICATE_IGNORE_DB, 0);
};

KeywordsCanBeIdContext.prototype.REPLICATE_IGNORE_TABLE = function() {
    return this.getToken(SqlParser.REPLICATE_IGNORE_TABLE, 0);
};

KeywordsCanBeIdContext.prototype.REPLICATE_REWRITE_DB = function() {
    return this.getToken(SqlParser.REPLICATE_REWRITE_DB, 0);
};

KeywordsCanBeIdContext.prototype.REPLICATE_WILD_DO_TABLE = function() {
    return this.getToken(SqlParser.REPLICATE_WILD_DO_TABLE, 0);
};

KeywordsCanBeIdContext.prototype.REPLICATE_WILD_IGNORE_TABLE = function() {
    return this.getToken(SqlParser.REPLICATE_WILD_IGNORE_TABLE, 0);
};

KeywordsCanBeIdContext.prototype.REPLICATION = function() {
    return this.getToken(SqlParser.REPLICATION, 0);
};

KeywordsCanBeIdContext.prototype.REPLICATION_APPLIER = function() {
    return this.getToken(SqlParser.REPLICATION_APPLIER, 0);
};

KeywordsCanBeIdContext.prototype.REPLICATION_SLAVE_ADMIN = function() {
    return this.getToken(SqlParser.REPLICATION_SLAVE_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.RESET = function() {
    return this.getToken(SqlParser.RESET, 0);
};

KeywordsCanBeIdContext.prototype.RESOURCE_GROUP_ADMIN = function() {
    return this.getToken(SqlParser.RESOURCE_GROUP_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.RESOURCE_GROUP_USER = function() {
    return this.getToken(SqlParser.RESOURCE_GROUP_USER, 0);
};

KeywordsCanBeIdContext.prototype.RESUME = function() {
    return this.getToken(SqlParser.RESUME, 0);
};

KeywordsCanBeIdContext.prototype.RETURNED_SQLSTATE = function() {
    return this.getToken(SqlParser.RETURNED_SQLSTATE, 0);
};

KeywordsCanBeIdContext.prototype.RETURNS = function() {
    return this.getToken(SqlParser.RETURNS, 0);
};

KeywordsCanBeIdContext.prototype.ROLE = function() {
    return this.getToken(SqlParser.ROLE, 0);
};

KeywordsCanBeIdContext.prototype.ROLE_ADMIN = function() {
    return this.getToken(SqlParser.ROLE_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.ROLLBACK = function() {
    return this.getToken(SqlParser.ROLLBACK, 0);
};

KeywordsCanBeIdContext.prototype.ROLLUP = function() {
    return this.getToken(SqlParser.ROLLUP, 0);
};

KeywordsCanBeIdContext.prototype.ROTATE = function() {
    return this.getToken(SqlParser.ROTATE, 0);
};

KeywordsCanBeIdContext.prototype.ROW = function() {
    return this.getToken(SqlParser.ROW, 0);
};

KeywordsCanBeIdContext.prototype.ROWS = function() {
    return this.getToken(SqlParser.ROWS, 0);
};

KeywordsCanBeIdContext.prototype.ROW_FORMAT = function() {
    return this.getToken(SqlParser.ROW_FORMAT, 0);
};

KeywordsCanBeIdContext.prototype.SAVEPOINT = function() {
    return this.getToken(SqlParser.SAVEPOINT, 0);
};

KeywordsCanBeIdContext.prototype.SCHEDULE = function() {
    return this.getToken(SqlParser.SCHEDULE, 0);
};

KeywordsCanBeIdContext.prototype.SCHEMA_NAME = function() {
    return this.getToken(SqlParser.SCHEMA_NAME, 0);
};

KeywordsCanBeIdContext.prototype.SECURITY = function() {
    return this.getToken(SqlParser.SECURITY, 0);
};

KeywordsCanBeIdContext.prototype.SERIAL = function() {
    return this.getToken(SqlParser.SERIAL, 0);
};

KeywordsCanBeIdContext.prototype.SERVER = function() {
    return this.getToken(SqlParser.SERVER, 0);
};

KeywordsCanBeIdContext.prototype.SESSION = function() {
    return this.getToken(SqlParser.SESSION, 0);
};

KeywordsCanBeIdContext.prototype.SESSION_VARIABLES_ADMIN = function() {
    return this.getToken(SqlParser.SESSION_VARIABLES_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.SET_USER_ID = function() {
    return this.getToken(SqlParser.SET_USER_ID, 0);
};

KeywordsCanBeIdContext.prototype.SHARE = function() {
    return this.getToken(SqlParser.SHARE, 0);
};

KeywordsCanBeIdContext.prototype.SHARED = function() {
    return this.getToken(SqlParser.SHARED, 0);
};

KeywordsCanBeIdContext.prototype.SHOW_ROUTINE = function() {
    return this.getToken(SqlParser.SHOW_ROUTINE, 0);
};

KeywordsCanBeIdContext.prototype.SIGNED = function() {
    return this.getToken(SqlParser.SIGNED, 0);
};

KeywordsCanBeIdContext.prototype.SIMPLE = function() {
    return this.getToken(SqlParser.SIMPLE, 0);
};

KeywordsCanBeIdContext.prototype.SLAVE = function() {
    return this.getToken(SqlParser.SLAVE, 0);
};

KeywordsCanBeIdContext.prototype.SLOW = function() {
    return this.getToken(SqlParser.SLOW, 0);
};

KeywordsCanBeIdContext.prototype.SNAPSHOT = function() {
    return this.getToken(SqlParser.SNAPSHOT, 0);
};

KeywordsCanBeIdContext.prototype.SOCKET = function() {
    return this.getToken(SqlParser.SOCKET, 0);
};

KeywordsCanBeIdContext.prototype.SOME = function() {
    return this.getToken(SqlParser.SOME, 0);
};

KeywordsCanBeIdContext.prototype.SONAME = function() {
    return this.getToken(SqlParser.SONAME, 0);
};

KeywordsCanBeIdContext.prototype.SOUNDS = function() {
    return this.getToken(SqlParser.SOUNDS, 0);
};

KeywordsCanBeIdContext.prototype.SOURCE = function() {
    return this.getToken(SqlParser.SOURCE, 0);
};

KeywordsCanBeIdContext.prototype.SQL_AFTER_GTIDS = function() {
    return this.getToken(SqlParser.SQL_AFTER_GTIDS, 0);
};

KeywordsCanBeIdContext.prototype.SQL_AFTER_MTS_GAPS = function() {
    return this.getToken(SqlParser.SQL_AFTER_MTS_GAPS, 0);
};

KeywordsCanBeIdContext.prototype.SQL_BEFORE_GTIDS = function() {
    return this.getToken(SqlParser.SQL_BEFORE_GTIDS, 0);
};

KeywordsCanBeIdContext.prototype.SQL_BUFFER_RESULT = function() {
    return this.getToken(SqlParser.SQL_BUFFER_RESULT, 0);
};

KeywordsCanBeIdContext.prototype.SQL_CACHE = function() {
    return this.getToken(SqlParser.SQL_CACHE, 0);
};

KeywordsCanBeIdContext.prototype.SQL_NO_CACHE = function() {
    return this.getToken(SqlParser.SQL_NO_CACHE, 0);
};

KeywordsCanBeIdContext.prototype.SQL_THREAD = function() {
    return this.getToken(SqlParser.SQL_THREAD, 0);
};

KeywordsCanBeIdContext.prototype.STACKED = function() {
    return this.getToken(SqlParser.STACKED, 0);
};

KeywordsCanBeIdContext.prototype.START = function() {
    return this.getToken(SqlParser.START, 0);
};

KeywordsCanBeIdContext.prototype.STARTS = function() {
    return this.getToken(SqlParser.STARTS, 0);
};

KeywordsCanBeIdContext.prototype.STATS_AUTO_RECALC = function() {
    return this.getToken(SqlParser.STATS_AUTO_RECALC, 0);
};

KeywordsCanBeIdContext.prototype.STATS_PERSISTENT = function() {
    return this.getToken(SqlParser.STATS_PERSISTENT, 0);
};

KeywordsCanBeIdContext.prototype.STATS_SAMPLE_PAGES = function() {
    return this.getToken(SqlParser.STATS_SAMPLE_PAGES, 0);
};

KeywordsCanBeIdContext.prototype.STATUS = function() {
    return this.getToken(SqlParser.STATUS, 0);
};

KeywordsCanBeIdContext.prototype.STOP = function() {
    return this.getToken(SqlParser.STOP, 0);
};

KeywordsCanBeIdContext.prototype.STORAGE = function() {
    return this.getToken(SqlParser.STORAGE, 0);
};

KeywordsCanBeIdContext.prototype.STRING = function() {
    return this.getToken(SqlParser.STRING, 0);
};

KeywordsCanBeIdContext.prototype.SUBCLASS_ORIGIN = function() {
    return this.getToken(SqlParser.SUBCLASS_ORIGIN, 0);
};

KeywordsCanBeIdContext.prototype.SUBJECT = function() {
    return this.getToken(SqlParser.SUBJECT, 0);
};

KeywordsCanBeIdContext.prototype.SUBPARTITION = function() {
    return this.getToken(SqlParser.SUBPARTITION, 0);
};

KeywordsCanBeIdContext.prototype.SUBPARTITIONS = function() {
    return this.getToken(SqlParser.SUBPARTITIONS, 0);
};

KeywordsCanBeIdContext.prototype.SUSPEND = function() {
    return this.getToken(SqlParser.SUSPEND, 0);
};

KeywordsCanBeIdContext.prototype.SWAPS = function() {
    return this.getToken(SqlParser.SWAPS, 0);
};

KeywordsCanBeIdContext.prototype.SWITCHES = function() {
    return this.getToken(SqlParser.SWITCHES, 0);
};

KeywordsCanBeIdContext.prototype.SYSTEM_VARIABLES_ADMIN = function() {
    return this.getToken(SqlParser.SYSTEM_VARIABLES_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.TABLE_NAME = function() {
    return this.getToken(SqlParser.TABLE_NAME, 0);
};

KeywordsCanBeIdContext.prototype.TABLESPACE = function() {
    return this.getToken(SqlParser.TABLESPACE, 0);
};

KeywordsCanBeIdContext.prototype.TABLE_ENCRYPTION_ADMIN = function() {
    return this.getToken(SqlParser.TABLE_ENCRYPTION_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.TEMPORARY = function() {
    return this.getToken(SqlParser.TEMPORARY, 0);
};

KeywordsCanBeIdContext.prototype.TEMPTABLE = function() {
    return this.getToken(SqlParser.TEMPTABLE, 0);
};

KeywordsCanBeIdContext.prototype.THAN = function() {
    return this.getToken(SqlParser.THAN, 0);
};

KeywordsCanBeIdContext.prototype.TRADITIONAL = function() {
    return this.getToken(SqlParser.TRADITIONAL, 0);
};

KeywordsCanBeIdContext.prototype.TRANSACTION = function() {
    return this.getToken(SqlParser.TRANSACTION, 0);
};

KeywordsCanBeIdContext.prototype.TRANSACTIONAL = function() {
    return this.getToken(SqlParser.TRANSACTIONAL, 0);
};

KeywordsCanBeIdContext.prototype.TRIGGERS = function() {
    return this.getToken(SqlParser.TRIGGERS, 0);
};

KeywordsCanBeIdContext.prototype.TRUNCATE = function() {
    return this.getToken(SqlParser.TRUNCATE, 0);
};

KeywordsCanBeIdContext.prototype.UNDEFINED = function() {
    return this.getToken(SqlParser.UNDEFINED, 0);
};

KeywordsCanBeIdContext.prototype.UNDOFILE = function() {
    return this.getToken(SqlParser.UNDOFILE, 0);
};

KeywordsCanBeIdContext.prototype.UNDO_BUFFER_SIZE = function() {
    return this.getToken(SqlParser.UNDO_BUFFER_SIZE, 0);
};

KeywordsCanBeIdContext.prototype.UNINSTALL = function() {
    return this.getToken(SqlParser.UNINSTALL, 0);
};

KeywordsCanBeIdContext.prototype.UNKNOWN = function() {
    return this.getToken(SqlParser.UNKNOWN, 0);
};

KeywordsCanBeIdContext.prototype.UNTIL = function() {
    return this.getToken(SqlParser.UNTIL, 0);
};

KeywordsCanBeIdContext.prototype.UPGRADE = function() {
    return this.getToken(SqlParser.UPGRADE, 0);
};

KeywordsCanBeIdContext.prototype.USER = function() {
    return this.getToken(SqlParser.USER, 0);
};

KeywordsCanBeIdContext.prototype.USE_FRM = function() {
    return this.getToken(SqlParser.USE_FRM, 0);
};

KeywordsCanBeIdContext.prototype.USER_RESOURCES = function() {
    return this.getToken(SqlParser.USER_RESOURCES, 0);
};

KeywordsCanBeIdContext.prototype.VALIDATION = function() {
    return this.getToken(SqlParser.VALIDATION, 0);
};

KeywordsCanBeIdContext.prototype.VALUE = function() {
    return this.getToken(SqlParser.VALUE, 0);
};

KeywordsCanBeIdContext.prototype.VARIABLES = function() {
    return this.getToken(SqlParser.VARIABLES, 0);
};

KeywordsCanBeIdContext.prototype.VERSION_TOKEN_ADMIN = function() {
    return this.getToken(SqlParser.VERSION_TOKEN_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.VIEW = function() {
    return this.getToken(SqlParser.VIEW, 0);
};

KeywordsCanBeIdContext.prototype.WAIT = function() {
    return this.getToken(SqlParser.WAIT, 0);
};

KeywordsCanBeIdContext.prototype.WARNINGS = function() {
    return this.getToken(SqlParser.WARNINGS, 0);
};

KeywordsCanBeIdContext.prototype.WITHOUT = function() {
    return this.getToken(SqlParser.WITHOUT, 0);
};

KeywordsCanBeIdContext.prototype.WORK = function() {
    return this.getToken(SqlParser.WORK, 0);
};

KeywordsCanBeIdContext.prototype.WRAPPER = function() {
    return this.getToken(SqlParser.WRAPPER, 0);
};

KeywordsCanBeIdContext.prototype.X509 = function() {
    return this.getToken(SqlParser.X509, 0);
};

KeywordsCanBeIdContext.prototype.XA = function() {
    return this.getToken(SqlParser.XA, 0);
};

KeywordsCanBeIdContext.prototype.XA_RECOVER_ADMIN = function() {
    return this.getToken(SqlParser.XA_RECOVER_ADMIN, 0);
};

KeywordsCanBeIdContext.prototype.XML = function() {
    return this.getToken(SqlParser.XML, 0);
};

KeywordsCanBeIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitKeywordsCanBeId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.KeywordsCanBeIdContext = KeywordsCanBeIdContext;

SqlParser.prototype.keywordsCanBeId = function() {

    var localctx = new KeywordsCanBeIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, SqlParser.RULE_keywordsCanBeId);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 524;
        _la = this._input.LA(1);
        if(!(_la===SqlParser.CURRENT || _la===SqlParser.DIAGNOSTICS || _la===SqlParser.NUMBER || _la===SqlParser.STACKED || _la===SqlParser.SERIAL || ((((_la - 270)) & ~0x1f) == 0 && ((1 << (_la - 270)) & ((1 << (SqlParser.ACCOUNT - 270)) | (1 << (SqlParser.ACTION - 270)) | (1 << (SqlParser.AFTER - 270)) | (1 << (SqlParser.AGGREGATE - 270)) | (1 << (SqlParser.ALGORITHM - 270)) | (1 << (SqlParser.ANY - 270)) | (1 << (SqlParser.AT - 270)) | (1 << (SqlParser.AUTHORS - 270)) | (1 << (SqlParser.AUTOCOMMIT - 270)) | (1 << (SqlParser.AUTOEXTEND_SIZE - 270)) | (1 << (SqlParser.AUTO_INCREMENT - 270)) | (1 << (SqlParser.AVG_ROW_LENGTH - 270)) | (1 << (SqlParser.BEGIN - 270)) | (1 << (SqlParser.BINLOG - 270)) | (1 << (SqlParser.BIT - 270)) | (1 << (SqlParser.BLOCK - 270)) | (1 << (SqlParser.BOOL - 270)) | (1 << (SqlParser.BOOLEAN - 270)) | (1 << (SqlParser.BTREE - 270)) | (1 << (SqlParser.CACHE - 270)) | (1 << (SqlParser.CASCADED - 270)) | (1 << (SqlParser.CHAIN - 270)) | (1 << (SqlParser.CHANGED - 270)) | (1 << (SqlParser.CHANNEL - 270)) | (1 << (SqlParser.CHECKSUM - 270)) | (1 << (SqlParser.PAGE_CHECKSUM - 270)) | (1 << (SqlParser.CIPHER - 270)) | (1 << (SqlParser.CLASS_ORIGIN - 270)) | (1 << (SqlParser.CLIENT - 270)) | (1 << (SqlParser.CLOSE - 270)) | (1 << (SqlParser.COALESCE - 270)) | (1 << (SqlParser.CODE - 270)))) !== 0) || ((((_la - 302)) & ~0x1f) == 0 && ((1 << (_la - 302)) & ((1 << (SqlParser.COLUMNS - 302)) | (1 << (SqlParser.COLUMN_FORMAT - 302)) | (1 << (SqlParser.COLUMN_NAME - 302)) | (1 << (SqlParser.COMMENT - 302)) | (1 << (SqlParser.COMMIT - 302)) | (1 << (SqlParser.COMPACT - 302)) | (1 << (SqlParser.COMPLETION - 302)) | (1 << (SqlParser.COMPRESSED - 302)) | (1 << (SqlParser.COMPRESSION - 302)) | (1 << (SqlParser.CONCURRENT - 302)) | (1 << (SqlParser.CONNECTION - 302)) | (1 << (SqlParser.CONSISTENT - 302)) | (1 << (SqlParser.CONSTRAINT_CATALOG - 302)) | (1 << (SqlParser.CONSTRAINT_SCHEMA - 302)) | (1 << (SqlParser.CONSTRAINT_NAME - 302)) | (1 << (SqlParser.CONTAINS - 302)) | (1 << (SqlParser.CONTEXT - 302)) | (1 << (SqlParser.CONTRIBUTORS - 302)) | (1 << (SqlParser.COPY - 302)) | (1 << (SqlParser.CPU - 302)) | (1 << (SqlParser.CURSOR_NAME - 302)) | (1 << (SqlParser.DATA - 302)) | (1 << (SqlParser.DATAFILE - 302)) | (1 << (SqlParser.DEALLOCATE - 302)) | (1 << (SqlParser.DEFAULT_AUTH - 302)) | (1 << (SqlParser.DEFINER - 302)) | (1 << (SqlParser.DELAY_KEY_WRITE - 302)) | (1 << (SqlParser.DES_KEY_FILE - 302)) | (1 << (SqlParser.DIRECTORY - 302)) | (1 << (SqlParser.DISABLE - 302)) | (1 << (SqlParser.DISCARD - 302)) | (1 << (SqlParser.DISK - 302)))) !== 0) || ((((_la - 334)) & ~0x1f) == 0 && ((1 << (_la - 334)) & ((1 << (SqlParser.DO - 334)) | (1 << (SqlParser.DUMPFILE - 334)) | (1 << (SqlParser.DUPLICATE - 334)) | (1 << (SqlParser.DYNAMIC - 334)) | (1 << (SqlParser.ENABLE - 334)) | (1 << (SqlParser.ENCRYPTION - 334)) | (1 << (SqlParser.END - 334)) | (1 << (SqlParser.ENDS - 334)) | (1 << (SqlParser.ENGINE - 334)) | (1 << (SqlParser.ENGINES - 334)) | (1 << (SqlParser.ERROR - 334)) | (1 << (SqlParser.ERRORS - 334)) | (1 << (SqlParser.ESCAPE - 334)) | (1 << (SqlParser.EVEN - 334)) | (1 << (SqlParser.EVENT - 334)) | (1 << (SqlParser.EVENTS - 334)) | (1 << (SqlParser.EVERY - 334)) | (1 << (SqlParser.EXCHANGE - 334)) | (1 << (SqlParser.EXCLUSIVE - 334)) | (1 << (SqlParser.EXPIRE - 334)) | (1 << (SqlParser.EXPORT - 334)) | (1 << (SqlParser.EXTENDED - 334)) | (1 << (SqlParser.EXTENT_SIZE - 334)) | (1 << (SqlParser.FAST - 334)) | (1 << (SqlParser.FAULTS - 334)) | (1 << (SqlParser.FIELDS - 334)) | (1 << (SqlParser.FILE_BLOCK_SIZE - 334)) | (1 << (SqlParser.FILTER - 334)) | (1 << (SqlParser.FIRST - 334)) | (1 << (SqlParser.FIXED - 334)) | (1 << (SqlParser.FLUSH - 334)) | (1 << (SqlParser.FOLLOWS - 334)))) !== 0) || ((((_la - 366)) & ~0x1f) == 0 && ((1 << (_la - 366)) & ((1 << (SqlParser.FOUND - 366)) | (1 << (SqlParser.FULL - 366)) | (1 << (SqlParser.FUNCTION - 366)) | (1 << (SqlParser.GENERAL - 366)) | (1 << (SqlParser.GLOBAL - 366)) | (1 << (SqlParser.GRANTS - 366)) | (1 << (SqlParser.GROUP_REPLICATION - 366)) | (1 << (SqlParser.HANDLER - 366)) | (1 << (SqlParser.HASH - 366)) | (1 << (SqlParser.HELP - 366)) | (1 << (SqlParser.HOST - 366)) | (1 << (SqlParser.HOSTS - 366)) | (1 << (SqlParser.IDENTIFIED - 366)) | (1 << (SqlParser.IGNORE_SERVER_IDS - 366)) | (1 << (SqlParser.IMPORT - 366)) | (1 << (SqlParser.INDEXES - 366)) | (1 << (SqlParser.INITIAL_SIZE - 366)) | (1 << (SqlParser.INPLACE - 366)) | (1 << (SqlParser.INSERT_METHOD - 366)) | (1 << (SqlParser.INSTALL - 366)) | (1 << (SqlParser.INSTANCE - 366)) | (1 << (SqlParser.INVOKER - 366)) | (1 << (SqlParser.IO - 366)) | (1 << (SqlParser.IO_THREAD - 366)) | (1 << (SqlParser.IPC - 366)) | (1 << (SqlParser.ISOLATION - 366)) | (1 << (SqlParser.ISSUER - 366)) | (1 << (SqlParser.JSON - 366)) | (1 << (SqlParser.KEY_BLOCK_SIZE - 366)) | (1 << (SqlParser.LANGUAGE - 366)) | (1 << (SqlParser.LAST - 366)))) !== 0) || ((((_la - 398)) & ~0x1f) == 0 && ((1 << (_la - 398)) & ((1 << (SqlParser.LEAVES - 398)) | (1 << (SqlParser.LESS - 398)) | (1 << (SqlParser.LEVEL - 398)) | (1 << (SqlParser.LIST - 398)) | (1 << (SqlParser.LOCAL - 398)) | (1 << (SqlParser.LOGFILE - 398)) | (1 << (SqlParser.LOGS - 398)) | (1 << (SqlParser.MASTER - 398)) | (1 << (SqlParser.MASTER_AUTO_POSITION - 398)) | (1 << (SqlParser.MASTER_CONNECT_RETRY - 398)) | (1 << (SqlParser.MASTER_DELAY - 398)) | (1 << (SqlParser.MASTER_HEARTBEAT_PERIOD - 398)) | (1 << (SqlParser.MASTER_HOST - 398)) | (1 << (SqlParser.MASTER_LOG_FILE - 398)) | (1 << (SqlParser.MASTER_LOG_POS - 398)) | (1 << (SqlParser.MASTER_PASSWORD - 398)) | (1 << (SqlParser.MASTER_PORT - 398)) | (1 << (SqlParser.MASTER_RETRY_COUNT - 398)) | (1 << (SqlParser.MASTER_SSL - 398)) | (1 << (SqlParser.MASTER_SSL_CA - 398)) | (1 << (SqlParser.MASTER_SSL_CAPATH - 398)) | (1 << (SqlParser.MASTER_SSL_CERT - 398)) | (1 << (SqlParser.MASTER_SSL_CIPHER - 398)) | (1 << (SqlParser.MASTER_SSL_CRL - 398)) | (1 << (SqlParser.MASTER_SSL_CRLPATH - 398)) | (1 << (SqlParser.MASTER_SSL_KEY - 398)) | (1 << (SqlParser.MASTER_TLS_VERSION - 398)) | (1 << (SqlParser.MASTER_USER - 398)) | (1 << (SqlParser.MAX_CONNECTIONS_PER_HOUR - 398)) | (1 << (SqlParser.MAX_QUERIES_PER_HOUR - 398)) | (1 << (SqlParser.MAX_ROWS - 398)) | (1 << (SqlParser.MAX_SIZE - 398)))) !== 0) || ((((_la - 430)) & ~0x1f) == 0 && ((1 << (_la - 430)) & ((1 << (SqlParser.MAX_UPDATES_PER_HOUR - 430)) | (1 << (SqlParser.MAX_USER_CONNECTIONS - 430)) | (1 << (SqlParser.MEDIUM - 430)) | (1 << (SqlParser.MERGE - 430)) | (1 << (SqlParser.MESSAGE_TEXT - 430)) | (1 << (SqlParser.MID - 430)) | (1 << (SqlParser.MIGRATE - 430)) | (1 << (SqlParser.MIN_ROWS - 430)) | (1 << (SqlParser.MODE - 430)) | (1 << (SqlParser.MODIFY - 430)) | (1 << (SqlParser.MUTEX - 430)) | (1 << (SqlParser.MYSQL - 430)) | (1 << (SqlParser.MYSQL_ERRNO - 430)) | (1 << (SqlParser.NAME - 430)) | (1 << (SqlParser.NAMES - 430)) | (1 << (SqlParser.NCHAR - 430)) | (1 << (SqlParser.NEVER - 430)) | (1 << (SqlParser.NEXT - 430)) | (1 << (SqlParser.NO - 430)) | (1 << (SqlParser.NODEGROUP - 430)) | (1 << (SqlParser.NONE - 430)) | (1 << (SqlParser.OFFLINE - 430)) | (1 << (SqlParser.OFFSET - 430)) | (1 << (SqlParser.OJ - 430)) | (1 << (SqlParser.OLD_PASSWORD - 430)) | (1 << (SqlParser.ONE - 430)) | (1 << (SqlParser.ONLINE - 430)) | (1 << (SqlParser.ONLY - 430)) | (1 << (SqlParser.OPEN - 430)) | (1 << (SqlParser.OPTIMIZER_COSTS - 430)) | (1 << (SqlParser.OPTIONS - 430)) | (1 << (SqlParser.OWNER - 430)))) !== 0) || ((((_la - 462)) & ~0x1f) == 0 && ((1 << (_la - 462)) & ((1 << (SqlParser.PACK_KEYS - 462)) | (1 << (SqlParser.PAGE - 462)) | (1 << (SqlParser.PARSER - 462)) | (1 << (SqlParser.PARTIAL - 462)) | (1 << (SqlParser.PARTITIONING - 462)) | (1 << (SqlParser.PARTITIONS - 462)) | (1 << (SqlParser.PASSWORD - 462)) | (1 << (SqlParser.PHASE - 462)) | (1 << (SqlParser.PLUGIN - 462)) | (1 << (SqlParser.PLUGIN_DIR - 462)) | (1 << (SqlParser.PLUGINS - 462)) | (1 << (SqlParser.PORT - 462)) | (1 << (SqlParser.PRECEDES - 462)) | (1 << (SqlParser.PREPARE - 462)) | (1 << (SqlParser.PRESERVE - 462)) | (1 << (SqlParser.PREV - 462)) | (1 << (SqlParser.PROCESSLIST - 462)) | (1 << (SqlParser.PROFILE - 462)) | (1 << (SqlParser.PROFILES - 462)) | (1 << (SqlParser.PROXY - 462)) | (1 << (SqlParser.QUERY - 462)) | (1 << (SqlParser.QUICK - 462)) | (1 << (SqlParser.REBUILD - 462)) | (1 << (SqlParser.RECOVER - 462)) | (1 << (SqlParser.REDO_BUFFER_SIZE - 462)) | (1 << (SqlParser.REDUNDANT - 462)) | (1 << (SqlParser.RELAY - 462)) | (1 << (SqlParser.RELAY_LOG_FILE - 462)) | (1 << (SqlParser.RELAY_LOG_POS - 462)) | (1 << (SqlParser.RELAYLOG - 462)) | (1 << (SqlParser.REMOVE - 462)) | (1 << (SqlParser.REORGANIZE - 462)))) !== 0) || ((((_la - 494)) & ~0x1f) == 0 && ((1 << (_la - 494)) & ((1 << (SqlParser.REPAIR - 494)) | (1 << (SqlParser.REPLICATE_DO_DB - 494)) | (1 << (SqlParser.REPLICATE_DO_TABLE - 494)) | (1 << (SqlParser.REPLICATE_IGNORE_DB - 494)) | (1 << (SqlParser.REPLICATE_IGNORE_TABLE - 494)) | (1 << (SqlParser.REPLICATE_REWRITE_DB - 494)) | (1 << (SqlParser.REPLICATE_WILD_DO_TABLE - 494)) | (1 << (SqlParser.REPLICATE_WILD_IGNORE_TABLE - 494)) | (1 << (SqlParser.REPLICATION - 494)) | (1 << (SqlParser.RESET - 494)) | (1 << (SqlParser.RESUME - 494)) | (1 << (SqlParser.RETURNED_SQLSTATE - 494)) | (1 << (SqlParser.RETURNS - 494)) | (1 << (SqlParser.ROLE - 494)) | (1 << (SqlParser.ROLLBACK - 494)) | (1 << (SqlParser.ROLLUP - 494)) | (1 << (SqlParser.ROTATE - 494)) | (1 << (SqlParser.ROW - 494)) | (1 << (SqlParser.ROWS - 494)) | (1 << (SqlParser.ROW_FORMAT - 494)) | (1 << (SqlParser.SAVEPOINT - 494)) | (1 << (SqlParser.SCHEDULE - 494)) | (1 << (SqlParser.SECURITY - 494)) | (1 << (SqlParser.SERVER - 494)) | (1 << (SqlParser.SESSION - 494)) | (1 << (SqlParser.SHARE - 494)) | (1 << (SqlParser.SHARED - 494)) | (1 << (SqlParser.SIGNED - 494)) | (1 << (SqlParser.SIMPLE - 494)) | (1 << (SqlParser.SLAVE - 494)) | (1 << (SqlParser.SLOW - 494)) | (1 << (SqlParser.SNAPSHOT - 494)))) !== 0) || ((((_la - 526)) & ~0x1f) == 0 && ((1 << (_la - 526)) & ((1 << (SqlParser.SOCKET - 526)) | (1 << (SqlParser.SOME - 526)) | (1 << (SqlParser.SONAME - 526)) | (1 << (SqlParser.SOUNDS - 526)) | (1 << (SqlParser.SOURCE - 526)) | (1 << (SqlParser.SQL_AFTER_GTIDS - 526)) | (1 << (SqlParser.SQL_AFTER_MTS_GAPS - 526)) | (1 << (SqlParser.SQL_BEFORE_GTIDS - 526)) | (1 << (SqlParser.SQL_BUFFER_RESULT - 526)) | (1 << (SqlParser.SQL_CACHE - 526)) | (1 << (SqlParser.SQL_NO_CACHE - 526)) | (1 << (SqlParser.SQL_THREAD - 526)) | (1 << (SqlParser.START - 526)) | (1 << (SqlParser.STARTS - 526)) | (1 << (SqlParser.STATS_AUTO_RECALC - 526)) | (1 << (SqlParser.STATS_PERSISTENT - 526)) | (1 << (SqlParser.STATS_SAMPLE_PAGES - 526)) | (1 << (SqlParser.STATUS - 526)) | (1 << (SqlParser.STOP - 526)) | (1 << (SqlParser.STORAGE - 526)) | (1 << (SqlParser.STRING - 526)) | (1 << (SqlParser.SUBCLASS_ORIGIN - 526)) | (1 << (SqlParser.SUBJECT - 526)) | (1 << (SqlParser.SUBPARTITION - 526)) | (1 << (SqlParser.SUBPARTITIONS - 526)) | (1 << (SqlParser.SUSPEND - 526)) | (1 << (SqlParser.SWAPS - 526)) | (1 << (SqlParser.SWITCHES - 526)) | (1 << (SqlParser.TABLE_NAME - 526)) | (1 << (SqlParser.TABLESPACE - 526)) | (1 << (SqlParser.TEMPORARY - 526)))) !== 0) || ((((_la - 558)) & ~0x1f) == 0 && ((1 << (_la - 558)) & ((1 << (SqlParser.TEMPTABLE - 558)) | (1 << (SqlParser.THAN - 558)) | (1 << (SqlParser.TRADITIONAL - 558)) | (1 << (SqlParser.TRANSACTION - 558)) | (1 << (SqlParser.TRANSACTIONAL - 558)) | (1 << (SqlParser.TRIGGERS - 558)) | (1 << (SqlParser.TRUNCATE - 558)) | (1 << (SqlParser.UNDEFINED - 558)) | (1 << (SqlParser.UNDOFILE - 558)) | (1 << (SqlParser.UNDO_BUFFER_SIZE - 558)) | (1 << (SqlParser.UNINSTALL - 558)) | (1 << (SqlParser.UNKNOWN - 558)) | (1 << (SqlParser.UNTIL - 558)) | (1 << (SqlParser.UPGRADE - 558)) | (1 << (SqlParser.USER - 558)) | (1 << (SqlParser.USE_FRM - 558)) | (1 << (SqlParser.USER_RESOURCES - 558)) | (1 << (SqlParser.VALIDATION - 558)) | (1 << (SqlParser.VALUE - 558)) | (1 << (SqlParser.VARIABLES - 558)) | (1 << (SqlParser.VIEW - 558)) | (1 << (SqlParser.WAIT - 558)) | (1 << (SqlParser.WARNINGS - 558)) | (1 << (SqlParser.WITHOUT - 558)) | (1 << (SqlParser.WORK - 558)) | (1 << (SqlParser.WRAPPER - 558)) | (1 << (SqlParser.X509 - 558)) | (1 << (SqlParser.XA - 558)) | (1 << (SqlParser.XML - 558)))) !== 0) || ((((_la - 593)) & ~0x1f) == 0 && ((1 << (_la - 593)) & ((1 << (SqlParser.INTERNAL - 593)) | (1 << (SqlParser.AUDIT_ADMIN - 593)) | (1 << (SqlParser.BACKUP_ADMIN - 593)) | (1 << (SqlParser.BINLOG_ADMIN - 593)) | (1 << (SqlParser.BINLOG_ENCRYPTION_ADMIN - 593)) | (1 << (SqlParser.CLONE_ADMIN - 593)) | (1 << (SqlParser.CONNECTION_ADMIN - 593)) | (1 << (SqlParser.ENCRYPTION_KEY_ADMIN - 593)) | (1 << (SqlParser.FIREWALL_ADMIN - 593)) | (1 << (SqlParser.FIREWALL_USER - 593)) | (1 << (SqlParser.GROUP_REPLICATION_ADMIN - 593)) | (1 << (SqlParser.INNODB_REDO_LOG_ARCHIVE - 593)) | (1 << (SqlParser.NDB_STORED_USER - 593)) | (1 << (SqlParser.PERSIST_RO_VARIABLES_ADMIN - 593)))) !== 0) || ((((_la - 625)) & ~0x1f) == 0 && ((1 << (_la - 625)) & ((1 << (SqlParser.REPLICATION_APPLIER - 625)) | (1 << (SqlParser.REPLICATION_SLAVE_ADMIN - 625)) | (1 << (SqlParser.RESOURCE_GROUP_ADMIN - 625)) | (1 << (SqlParser.RESOURCE_GROUP_USER - 625)) | (1 << (SqlParser.ROLE_ADMIN - 625)) | (1 << (SqlParser.SESSION_VARIABLES_ADMIN - 625)) | (1 << (SqlParser.SET_USER_ID - 625)) | (1 << (SqlParser.SHOW_ROUTINE - 625)) | (1 << (SqlParser.SYSTEM_VARIABLES_ADMIN - 625)) | (1 << (SqlParser.TABLE_ENCRYPTION_ADMIN - 625)) | (1 << (SqlParser.VERSION_TOKEN_ADMIN - 625)) | (1 << (SqlParser.XA_RECOVER_ADMIN - 625)))) !== 0) || _la===SqlParser.MEMORY || _la===SqlParser.CATALOG_NAME || _la===SqlParser.SCHEMA_NAME)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionNameBaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_functionNameBase;
    return this;
}

FunctionNameBaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionNameBaseContext.prototype.constructor = FunctionNameBaseContext;

FunctionNameBaseContext.prototype.ABS = function() {
    return this.getToken(SqlParser.ABS, 0);
};

FunctionNameBaseContext.prototype.ACOS = function() {
    return this.getToken(SqlParser.ACOS, 0);
};

FunctionNameBaseContext.prototype.ADDDATE = function() {
    return this.getToken(SqlParser.ADDDATE, 0);
};

FunctionNameBaseContext.prototype.ADDTIME = function() {
    return this.getToken(SqlParser.ADDTIME, 0);
};

FunctionNameBaseContext.prototype.AES_DECRYPT = function() {
    return this.getToken(SqlParser.AES_DECRYPT, 0);
};

FunctionNameBaseContext.prototype.AES_ENCRYPT = function() {
    return this.getToken(SqlParser.AES_ENCRYPT, 0);
};

FunctionNameBaseContext.prototype.AREA = function() {
    return this.getToken(SqlParser.AREA, 0);
};

FunctionNameBaseContext.prototype.ASBINARY = function() {
    return this.getToken(SqlParser.ASBINARY, 0);
};

FunctionNameBaseContext.prototype.ASIN = function() {
    return this.getToken(SqlParser.ASIN, 0);
};

FunctionNameBaseContext.prototype.ASTEXT = function() {
    return this.getToken(SqlParser.ASTEXT, 0);
};

FunctionNameBaseContext.prototype.ASWKB = function() {
    return this.getToken(SqlParser.ASWKB, 0);
};

FunctionNameBaseContext.prototype.ASWKT = function() {
    return this.getToken(SqlParser.ASWKT, 0);
};

FunctionNameBaseContext.prototype.ASYMMETRIC_DECRYPT = function() {
    return this.getToken(SqlParser.ASYMMETRIC_DECRYPT, 0);
};

FunctionNameBaseContext.prototype.ASYMMETRIC_DERIVE = function() {
    return this.getToken(SqlParser.ASYMMETRIC_DERIVE, 0);
};

FunctionNameBaseContext.prototype.ASYMMETRIC_ENCRYPT = function() {
    return this.getToken(SqlParser.ASYMMETRIC_ENCRYPT, 0);
};

FunctionNameBaseContext.prototype.ASYMMETRIC_SIGN = function() {
    return this.getToken(SqlParser.ASYMMETRIC_SIGN, 0);
};

FunctionNameBaseContext.prototype.ASYMMETRIC_VERIFY = function() {
    return this.getToken(SqlParser.ASYMMETRIC_VERIFY, 0);
};

FunctionNameBaseContext.prototype.ATAN = function() {
    return this.getToken(SqlParser.ATAN, 0);
};

FunctionNameBaseContext.prototype.ATAN2 = function() {
    return this.getToken(SqlParser.ATAN2, 0);
};

FunctionNameBaseContext.prototype.BENCHMARK = function() {
    return this.getToken(SqlParser.BENCHMARK, 0);
};

FunctionNameBaseContext.prototype.BIN = function() {
    return this.getToken(SqlParser.BIN, 0);
};

FunctionNameBaseContext.prototype.BIT_COUNT = function() {
    return this.getToken(SqlParser.BIT_COUNT, 0);
};

FunctionNameBaseContext.prototype.BIT_LENGTH = function() {
    return this.getToken(SqlParser.BIT_LENGTH, 0);
};

FunctionNameBaseContext.prototype.BUFFER = function() {
    return this.getToken(SqlParser.BUFFER, 0);
};

FunctionNameBaseContext.prototype.CEIL = function() {
    return this.getToken(SqlParser.CEIL, 0);
};

FunctionNameBaseContext.prototype.CEILING = function() {
    return this.getToken(SqlParser.CEILING, 0);
};

FunctionNameBaseContext.prototype.CENTROID = function() {
    return this.getToken(SqlParser.CENTROID, 0);
};

FunctionNameBaseContext.prototype.CHARACTER_LENGTH = function() {
    return this.getToken(SqlParser.CHARACTER_LENGTH, 0);
};

FunctionNameBaseContext.prototype.CHARSET = function() {
    return this.getToken(SqlParser.CHARSET, 0);
};

FunctionNameBaseContext.prototype.CHAR_LENGTH = function() {
    return this.getToken(SqlParser.CHAR_LENGTH, 0);
};

FunctionNameBaseContext.prototype.COERCIBILITY = function() {
    return this.getToken(SqlParser.COERCIBILITY, 0);
};

FunctionNameBaseContext.prototype.COLLATION = function() {
    return this.getToken(SqlParser.COLLATION, 0);
};

FunctionNameBaseContext.prototype.COMPRESS = function() {
    return this.getToken(SqlParser.COMPRESS, 0);
};

FunctionNameBaseContext.prototype.CONCAT = function() {
    return this.getToken(SqlParser.CONCAT, 0);
};

FunctionNameBaseContext.prototype.CONCAT_WS = function() {
    return this.getToken(SqlParser.CONCAT_WS, 0);
};

FunctionNameBaseContext.prototype.CONNECTION_ID = function() {
    return this.getToken(SqlParser.CONNECTION_ID, 0);
};

FunctionNameBaseContext.prototype.CONV = function() {
    return this.getToken(SqlParser.CONV, 0);
};

FunctionNameBaseContext.prototype.CONVERT_TZ = function() {
    return this.getToken(SqlParser.CONVERT_TZ, 0);
};

FunctionNameBaseContext.prototype.COS = function() {
    return this.getToken(SqlParser.COS, 0);
};

FunctionNameBaseContext.prototype.COT = function() {
    return this.getToken(SqlParser.COT, 0);
};

FunctionNameBaseContext.prototype.COUNT = function() {
    return this.getToken(SqlParser.COUNT, 0);
};

FunctionNameBaseContext.prototype.CRC32 = function() {
    return this.getToken(SqlParser.CRC32, 0);
};

FunctionNameBaseContext.prototype.CREATE_ASYMMETRIC_PRIV_KEY = function() {
    return this.getToken(SqlParser.CREATE_ASYMMETRIC_PRIV_KEY, 0);
};

FunctionNameBaseContext.prototype.CREATE_ASYMMETRIC_PUB_KEY = function() {
    return this.getToken(SqlParser.CREATE_ASYMMETRIC_PUB_KEY, 0);
};

FunctionNameBaseContext.prototype.CREATE_DH_PARAMETERS = function() {
    return this.getToken(SqlParser.CREATE_DH_PARAMETERS, 0);
};

FunctionNameBaseContext.prototype.CREATE_DIGEST = function() {
    return this.getToken(SqlParser.CREATE_DIGEST, 0);
};

FunctionNameBaseContext.prototype.CROSSES = function() {
    return this.getToken(SqlParser.CROSSES, 0);
};

FunctionNameBaseContext.prototype.DATABASE = function() {
    return this.getToken(SqlParser.DATABASE, 0);
};

FunctionNameBaseContext.prototype.DATE = function() {
    return this.getToken(SqlParser.DATE, 0);
};

FunctionNameBaseContext.prototype.DATEDIFF = function() {
    return this.getToken(SqlParser.DATEDIFF, 0);
};

FunctionNameBaseContext.prototype.DATE_FORMAT = function() {
    return this.getToken(SqlParser.DATE_FORMAT, 0);
};

FunctionNameBaseContext.prototype.DAY = function() {
    return this.getToken(SqlParser.DAY, 0);
};

FunctionNameBaseContext.prototype.DAYNAME = function() {
    return this.getToken(SqlParser.DAYNAME, 0);
};

FunctionNameBaseContext.prototype.DAYOFMONTH = function() {
    return this.getToken(SqlParser.DAYOFMONTH, 0);
};

FunctionNameBaseContext.prototype.DAYOFWEEK = function() {
    return this.getToken(SqlParser.DAYOFWEEK, 0);
};

FunctionNameBaseContext.prototype.DAYOFYEAR = function() {
    return this.getToken(SqlParser.DAYOFYEAR, 0);
};

FunctionNameBaseContext.prototype.DECODE = function() {
    return this.getToken(SqlParser.DECODE, 0);
};

FunctionNameBaseContext.prototype.DEGREES = function() {
    return this.getToken(SqlParser.DEGREES, 0);
};

FunctionNameBaseContext.prototype.DES_DECRYPT = function() {
    return this.getToken(SqlParser.DES_DECRYPT, 0);
};

FunctionNameBaseContext.prototype.DES_ENCRYPT = function() {
    return this.getToken(SqlParser.DES_ENCRYPT, 0);
};

FunctionNameBaseContext.prototype.DIMENSION = function() {
    return this.getToken(SqlParser.DIMENSION, 0);
};

FunctionNameBaseContext.prototype.DISJOINT = function() {
    return this.getToken(SqlParser.DISJOINT, 0);
};

FunctionNameBaseContext.prototype.ELT = function() {
    return this.getToken(SqlParser.ELT, 0);
};

FunctionNameBaseContext.prototype.ENCODE = function() {
    return this.getToken(SqlParser.ENCODE, 0);
};

FunctionNameBaseContext.prototype.ENCRYPT = function() {
    return this.getToken(SqlParser.ENCRYPT, 0);
};

FunctionNameBaseContext.prototype.ENDPOINT = function() {
    return this.getToken(SqlParser.ENDPOINT, 0);
};

FunctionNameBaseContext.prototype.ENVELOPE = function() {
    return this.getToken(SqlParser.ENVELOPE, 0);
};

FunctionNameBaseContext.prototype.EQUALS = function() {
    return this.getToken(SqlParser.EQUALS, 0);
};

FunctionNameBaseContext.prototype.EXP = function() {
    return this.getToken(SqlParser.EXP, 0);
};

FunctionNameBaseContext.prototype.EXPORT_SET = function() {
    return this.getToken(SqlParser.EXPORT_SET, 0);
};

FunctionNameBaseContext.prototype.EXTERIORRING = function() {
    return this.getToken(SqlParser.EXTERIORRING, 0);
};

FunctionNameBaseContext.prototype.EXTRACTVALUE = function() {
    return this.getToken(SqlParser.EXTRACTVALUE, 0);
};

FunctionNameBaseContext.prototype.FIELD = function() {
    return this.getToken(SqlParser.FIELD, 0);
};

FunctionNameBaseContext.prototype.FIND_IN_SET = function() {
    return this.getToken(SqlParser.FIND_IN_SET, 0);
};

FunctionNameBaseContext.prototype.FLOOR = function() {
    return this.getToken(SqlParser.FLOOR, 0);
};

FunctionNameBaseContext.prototype.FORMAT = function() {
    return this.getToken(SqlParser.FORMAT, 0);
};

FunctionNameBaseContext.prototype.FOUND_ROWS = function() {
    return this.getToken(SqlParser.FOUND_ROWS, 0);
};

FunctionNameBaseContext.prototype.FROM_BASE64 = function() {
    return this.getToken(SqlParser.FROM_BASE64, 0);
};

FunctionNameBaseContext.prototype.FROM_DAYS = function() {
    return this.getToken(SqlParser.FROM_DAYS, 0);
};

FunctionNameBaseContext.prototype.FROM_UNIXTIME = function() {
    return this.getToken(SqlParser.FROM_UNIXTIME, 0);
};

FunctionNameBaseContext.prototype.GEOMCOLLFROMTEXT = function() {
    return this.getToken(SqlParser.GEOMCOLLFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.GEOMCOLLFROMWKB = function() {
    return this.getToken(SqlParser.GEOMCOLLFROMWKB, 0);
};

FunctionNameBaseContext.prototype.GEOMETRYCOLLECTION = function() {
    return this.getToken(SqlParser.GEOMETRYCOLLECTION, 0);
};

FunctionNameBaseContext.prototype.GEOMETRYCOLLECTIONFROMTEXT = function() {
    return this.getToken(SqlParser.GEOMETRYCOLLECTIONFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.GEOMETRYCOLLECTIONFROMWKB = function() {
    return this.getToken(SqlParser.GEOMETRYCOLLECTIONFROMWKB, 0);
};

FunctionNameBaseContext.prototype.GEOMETRYFROMTEXT = function() {
    return this.getToken(SqlParser.GEOMETRYFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.GEOMETRYFROMWKB = function() {
    return this.getToken(SqlParser.GEOMETRYFROMWKB, 0);
};

FunctionNameBaseContext.prototype.GEOMETRYN = function() {
    return this.getToken(SqlParser.GEOMETRYN, 0);
};

FunctionNameBaseContext.prototype.GEOMETRYTYPE = function() {
    return this.getToken(SqlParser.GEOMETRYTYPE, 0);
};

FunctionNameBaseContext.prototype.GEOMFROMTEXT = function() {
    return this.getToken(SqlParser.GEOMFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.GEOMFROMWKB = function() {
    return this.getToken(SqlParser.GEOMFROMWKB, 0);
};

FunctionNameBaseContext.prototype.GET_FORMAT = function() {
    return this.getToken(SqlParser.GET_FORMAT, 0);
};

FunctionNameBaseContext.prototype.GET_LOCK = function() {
    return this.getToken(SqlParser.GET_LOCK, 0);
};

FunctionNameBaseContext.prototype.GLENGTH = function() {
    return this.getToken(SqlParser.GLENGTH, 0);
};

FunctionNameBaseContext.prototype.GREATEST = function() {
    return this.getToken(SqlParser.GREATEST, 0);
};

FunctionNameBaseContext.prototype.GTID_SUBSET = function() {
    return this.getToken(SqlParser.GTID_SUBSET, 0);
};

FunctionNameBaseContext.prototype.GTID_SUBTRACT = function() {
    return this.getToken(SqlParser.GTID_SUBTRACT, 0);
};

FunctionNameBaseContext.prototype.HEX = function() {
    return this.getToken(SqlParser.HEX, 0);
};

FunctionNameBaseContext.prototype.HOUR = function() {
    return this.getToken(SqlParser.HOUR, 0);
};

FunctionNameBaseContext.prototype.IFNULL = function() {
    return this.getToken(SqlParser.IFNULL, 0);
};

FunctionNameBaseContext.prototype.INET6_ATON = function() {
    return this.getToken(SqlParser.INET6_ATON, 0);
};

FunctionNameBaseContext.prototype.INET6_NTOA = function() {
    return this.getToken(SqlParser.INET6_NTOA, 0);
};

FunctionNameBaseContext.prototype.INET_ATON = function() {
    return this.getToken(SqlParser.INET_ATON, 0);
};

FunctionNameBaseContext.prototype.INET_NTOA = function() {
    return this.getToken(SqlParser.INET_NTOA, 0);
};

FunctionNameBaseContext.prototype.INSTR = function() {
    return this.getToken(SqlParser.INSTR, 0);
};

FunctionNameBaseContext.prototype.INTERIORRINGN = function() {
    return this.getToken(SqlParser.INTERIORRINGN, 0);
};

FunctionNameBaseContext.prototype.INTERSECTS = function() {
    return this.getToken(SqlParser.INTERSECTS, 0);
};

FunctionNameBaseContext.prototype.INVISIBLE = function() {
    return this.getToken(SqlParser.INVISIBLE, 0);
};

FunctionNameBaseContext.prototype.ISCLOSED = function() {
    return this.getToken(SqlParser.ISCLOSED, 0);
};

FunctionNameBaseContext.prototype.ISEMPTY = function() {
    return this.getToken(SqlParser.ISEMPTY, 0);
};

FunctionNameBaseContext.prototype.ISNULL = function() {
    return this.getToken(SqlParser.ISNULL, 0);
};

FunctionNameBaseContext.prototype.ISSIMPLE = function() {
    return this.getToken(SqlParser.ISSIMPLE, 0);
};

FunctionNameBaseContext.prototype.IS_FREE_LOCK = function() {
    return this.getToken(SqlParser.IS_FREE_LOCK, 0);
};

FunctionNameBaseContext.prototype.IS_IPV4 = function() {
    return this.getToken(SqlParser.IS_IPV4, 0);
};

FunctionNameBaseContext.prototype.IS_IPV4_COMPAT = function() {
    return this.getToken(SqlParser.IS_IPV4_COMPAT, 0);
};

FunctionNameBaseContext.prototype.IS_IPV4_MAPPED = function() {
    return this.getToken(SqlParser.IS_IPV4_MAPPED, 0);
};

FunctionNameBaseContext.prototype.IS_IPV6 = function() {
    return this.getToken(SqlParser.IS_IPV6, 0);
};

FunctionNameBaseContext.prototype.IS_USED_LOCK = function() {
    return this.getToken(SqlParser.IS_USED_LOCK, 0);
};

FunctionNameBaseContext.prototype.LAST_INSERT_ID = function() {
    return this.getToken(SqlParser.LAST_INSERT_ID, 0);
};

FunctionNameBaseContext.prototype.LCASE = function() {
    return this.getToken(SqlParser.LCASE, 0);
};

FunctionNameBaseContext.prototype.LEAST = function() {
    return this.getToken(SqlParser.LEAST, 0);
};

FunctionNameBaseContext.prototype.LEFT = function() {
    return this.getToken(SqlParser.LEFT, 0);
};

FunctionNameBaseContext.prototype.LENGTH = function() {
    return this.getToken(SqlParser.LENGTH, 0);
};

FunctionNameBaseContext.prototype.LINEFROMTEXT = function() {
    return this.getToken(SqlParser.LINEFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.LINEFROMWKB = function() {
    return this.getToken(SqlParser.LINEFROMWKB, 0);
};

FunctionNameBaseContext.prototype.LINESTRING = function() {
    return this.getToken(SqlParser.LINESTRING, 0);
};

FunctionNameBaseContext.prototype.LINESTRINGFROMTEXT = function() {
    return this.getToken(SqlParser.LINESTRINGFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.LINESTRINGFROMWKB = function() {
    return this.getToken(SqlParser.LINESTRINGFROMWKB, 0);
};

FunctionNameBaseContext.prototype.LN = function() {
    return this.getToken(SqlParser.LN, 0);
};

FunctionNameBaseContext.prototype.LOAD_FILE = function() {
    return this.getToken(SqlParser.LOAD_FILE, 0);
};

FunctionNameBaseContext.prototype.LOCATE = function() {
    return this.getToken(SqlParser.LOCATE, 0);
};

FunctionNameBaseContext.prototype.LOG = function() {
    return this.getToken(SqlParser.LOG, 0);
};

FunctionNameBaseContext.prototype.LOG10 = function() {
    return this.getToken(SqlParser.LOG10, 0);
};

FunctionNameBaseContext.prototype.LOG2 = function() {
    return this.getToken(SqlParser.LOG2, 0);
};

FunctionNameBaseContext.prototype.LOWER = function() {
    return this.getToken(SqlParser.LOWER, 0);
};

FunctionNameBaseContext.prototype.LPAD = function() {
    return this.getToken(SqlParser.LPAD, 0);
};

FunctionNameBaseContext.prototype.LTRIM = function() {
    return this.getToken(SqlParser.LTRIM, 0);
};

FunctionNameBaseContext.prototype.MAKEDATE = function() {
    return this.getToken(SqlParser.MAKEDATE, 0);
};

FunctionNameBaseContext.prototype.MAKETIME = function() {
    return this.getToken(SqlParser.MAKETIME, 0);
};

FunctionNameBaseContext.prototype.MAKE_SET = function() {
    return this.getToken(SqlParser.MAKE_SET, 0);
};

FunctionNameBaseContext.prototype.MASTER_POS_WAIT = function() {
    return this.getToken(SqlParser.MASTER_POS_WAIT, 0);
};

FunctionNameBaseContext.prototype.MBRCONTAINS = function() {
    return this.getToken(SqlParser.MBRCONTAINS, 0);
};

FunctionNameBaseContext.prototype.MBRDISJOINT = function() {
    return this.getToken(SqlParser.MBRDISJOINT, 0);
};

FunctionNameBaseContext.prototype.MBREQUAL = function() {
    return this.getToken(SqlParser.MBREQUAL, 0);
};

FunctionNameBaseContext.prototype.MBRINTERSECTS = function() {
    return this.getToken(SqlParser.MBRINTERSECTS, 0);
};

FunctionNameBaseContext.prototype.MBROVERLAPS = function() {
    return this.getToken(SqlParser.MBROVERLAPS, 0);
};

FunctionNameBaseContext.prototype.MBRTOUCHES = function() {
    return this.getToken(SqlParser.MBRTOUCHES, 0);
};

FunctionNameBaseContext.prototype.MBRWITHIN = function() {
    return this.getToken(SqlParser.MBRWITHIN, 0);
};

FunctionNameBaseContext.prototype.MD5 = function() {
    return this.getToken(SqlParser.MD5, 0);
};

FunctionNameBaseContext.prototype.MICROSECOND = function() {
    return this.getToken(SqlParser.MICROSECOND, 0);
};

FunctionNameBaseContext.prototype.MINUTE = function() {
    return this.getToken(SqlParser.MINUTE, 0);
};

FunctionNameBaseContext.prototype.MLINEFROMTEXT = function() {
    return this.getToken(SqlParser.MLINEFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.MLINEFROMWKB = function() {
    return this.getToken(SqlParser.MLINEFROMWKB, 0);
};

FunctionNameBaseContext.prototype.MONTH = function() {
    return this.getToken(SqlParser.MONTH, 0);
};

FunctionNameBaseContext.prototype.MONTHNAME = function() {
    return this.getToken(SqlParser.MONTHNAME, 0);
};

FunctionNameBaseContext.prototype.MPOINTFROMTEXT = function() {
    return this.getToken(SqlParser.MPOINTFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.MPOINTFROMWKB = function() {
    return this.getToken(SqlParser.MPOINTFROMWKB, 0);
};

FunctionNameBaseContext.prototype.MPOLYFROMTEXT = function() {
    return this.getToken(SqlParser.MPOLYFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.MPOLYFROMWKB = function() {
    return this.getToken(SqlParser.MPOLYFROMWKB, 0);
};

FunctionNameBaseContext.prototype.MULTILINESTRING = function() {
    return this.getToken(SqlParser.MULTILINESTRING, 0);
};

FunctionNameBaseContext.prototype.MULTILINESTRINGFROMTEXT = function() {
    return this.getToken(SqlParser.MULTILINESTRINGFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.MULTILINESTRINGFROMWKB = function() {
    return this.getToken(SqlParser.MULTILINESTRINGFROMWKB, 0);
};

FunctionNameBaseContext.prototype.MULTIPOINT = function() {
    return this.getToken(SqlParser.MULTIPOINT, 0);
};

FunctionNameBaseContext.prototype.MULTIPOINTFROMTEXT = function() {
    return this.getToken(SqlParser.MULTIPOINTFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.MULTIPOINTFROMWKB = function() {
    return this.getToken(SqlParser.MULTIPOINTFROMWKB, 0);
};

FunctionNameBaseContext.prototype.MULTIPOLYGON = function() {
    return this.getToken(SqlParser.MULTIPOLYGON, 0);
};

FunctionNameBaseContext.prototype.MULTIPOLYGONFROMTEXT = function() {
    return this.getToken(SqlParser.MULTIPOLYGONFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.MULTIPOLYGONFROMWKB = function() {
    return this.getToken(SqlParser.MULTIPOLYGONFROMWKB, 0);
};

FunctionNameBaseContext.prototype.NAME_CONST = function() {
    return this.getToken(SqlParser.NAME_CONST, 0);
};

FunctionNameBaseContext.prototype.NULLIF = function() {
    return this.getToken(SqlParser.NULLIF, 0);
};

FunctionNameBaseContext.prototype.NUMGEOMETRIES = function() {
    return this.getToken(SqlParser.NUMGEOMETRIES, 0);
};

FunctionNameBaseContext.prototype.NUMINTERIORRINGS = function() {
    return this.getToken(SqlParser.NUMINTERIORRINGS, 0);
};

FunctionNameBaseContext.prototype.NUMPOINTS = function() {
    return this.getToken(SqlParser.NUMPOINTS, 0);
};

FunctionNameBaseContext.prototype.OCT = function() {
    return this.getToken(SqlParser.OCT, 0);
};

FunctionNameBaseContext.prototype.OCTET_LENGTH = function() {
    return this.getToken(SqlParser.OCTET_LENGTH, 0);
};

FunctionNameBaseContext.prototype.ORD = function() {
    return this.getToken(SqlParser.ORD, 0);
};

FunctionNameBaseContext.prototype.OVERLAPS = function() {
    return this.getToken(SqlParser.OVERLAPS, 0);
};

FunctionNameBaseContext.prototype.PERIOD_ADD = function() {
    return this.getToken(SqlParser.PERIOD_ADD, 0);
};

FunctionNameBaseContext.prototype.PERIOD_DIFF = function() {
    return this.getToken(SqlParser.PERIOD_DIFF, 0);
};

FunctionNameBaseContext.prototype.PI = function() {
    return this.getToken(SqlParser.PI, 0);
};

FunctionNameBaseContext.prototype.POINT = function() {
    return this.getToken(SqlParser.POINT, 0);
};

FunctionNameBaseContext.prototype.POINTFROMTEXT = function() {
    return this.getToken(SqlParser.POINTFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.POINTFROMWKB = function() {
    return this.getToken(SqlParser.POINTFROMWKB, 0);
};

FunctionNameBaseContext.prototype.POINTN = function() {
    return this.getToken(SqlParser.POINTN, 0);
};

FunctionNameBaseContext.prototype.POLYFROMTEXT = function() {
    return this.getToken(SqlParser.POLYFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.POLYFROMWKB = function() {
    return this.getToken(SqlParser.POLYFROMWKB, 0);
};

FunctionNameBaseContext.prototype.POLYGON = function() {
    return this.getToken(SqlParser.POLYGON, 0);
};

FunctionNameBaseContext.prototype.POLYGONFROMTEXT = function() {
    return this.getToken(SqlParser.POLYGONFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.POLYGONFROMWKB = function() {
    return this.getToken(SqlParser.POLYGONFROMWKB, 0);
};

FunctionNameBaseContext.prototype.POSITION = function() {
    return this.getToken(SqlParser.POSITION, 0);
};

FunctionNameBaseContext.prototype.POW = function() {
    return this.getToken(SqlParser.POW, 0);
};

FunctionNameBaseContext.prototype.POWER = function() {
    return this.getToken(SqlParser.POWER, 0);
};

FunctionNameBaseContext.prototype.QUARTER = function() {
    return this.getToken(SqlParser.QUARTER, 0);
};

FunctionNameBaseContext.prototype.QUOTE = function() {
    return this.getToken(SqlParser.QUOTE, 0);
};

FunctionNameBaseContext.prototype.RADIANS = function() {
    return this.getToken(SqlParser.RADIANS, 0);
};

FunctionNameBaseContext.prototype.RAND = function() {
    return this.getToken(SqlParser.RAND, 0);
};

FunctionNameBaseContext.prototype.RANDOM_BYTES = function() {
    return this.getToken(SqlParser.RANDOM_BYTES, 0);
};

FunctionNameBaseContext.prototype.RELEASE_LOCK = function() {
    return this.getToken(SqlParser.RELEASE_LOCK, 0);
};

FunctionNameBaseContext.prototype.REVERSE = function() {
    return this.getToken(SqlParser.REVERSE, 0);
};

FunctionNameBaseContext.prototype.RIGHT = function() {
    return this.getToken(SqlParser.RIGHT, 0);
};

FunctionNameBaseContext.prototype.ROUND = function() {
    return this.getToken(SqlParser.ROUND, 0);
};

FunctionNameBaseContext.prototype.ROW_COUNT = function() {
    return this.getToken(SqlParser.ROW_COUNT, 0);
};

FunctionNameBaseContext.prototype.RPAD = function() {
    return this.getToken(SqlParser.RPAD, 0);
};

FunctionNameBaseContext.prototype.RTRIM = function() {
    return this.getToken(SqlParser.RTRIM, 0);
};

FunctionNameBaseContext.prototype.SECOND = function() {
    return this.getToken(SqlParser.SECOND, 0);
};

FunctionNameBaseContext.prototype.SEC_TO_TIME = function() {
    return this.getToken(SqlParser.SEC_TO_TIME, 0);
};

FunctionNameBaseContext.prototype.SESSION_USER = function() {
    return this.getToken(SqlParser.SESSION_USER, 0);
};

FunctionNameBaseContext.prototype.SESSION_VARIABLES_ADMIN = function() {
    return this.getToken(SqlParser.SESSION_VARIABLES_ADMIN, 0);
};

FunctionNameBaseContext.prototype.SHA = function() {
    return this.getToken(SqlParser.SHA, 0);
};

FunctionNameBaseContext.prototype.SHA1 = function() {
    return this.getToken(SqlParser.SHA1, 0);
};

FunctionNameBaseContext.prototype.SHA2 = function() {
    return this.getToken(SqlParser.SHA2, 0);
};

FunctionNameBaseContext.prototype.SIGN = function() {
    return this.getToken(SqlParser.SIGN, 0);
};

FunctionNameBaseContext.prototype.SIN = function() {
    return this.getToken(SqlParser.SIN, 0);
};

FunctionNameBaseContext.prototype.SLEEP = function() {
    return this.getToken(SqlParser.SLEEP, 0);
};

FunctionNameBaseContext.prototype.SOUNDEX = function() {
    return this.getToken(SqlParser.SOUNDEX, 0);
};

FunctionNameBaseContext.prototype.SQL_THREAD_WAIT_AFTER_GTIDS = function() {
    return this.getToken(SqlParser.SQL_THREAD_WAIT_AFTER_GTIDS, 0);
};

FunctionNameBaseContext.prototype.SQRT = function() {
    return this.getToken(SqlParser.SQRT, 0);
};

FunctionNameBaseContext.prototype.SRID = function() {
    return this.getToken(SqlParser.SRID, 0);
};

FunctionNameBaseContext.prototype.STARTPOINT = function() {
    return this.getToken(SqlParser.STARTPOINT, 0);
};

FunctionNameBaseContext.prototype.STRCMP = function() {
    return this.getToken(SqlParser.STRCMP, 0);
};

FunctionNameBaseContext.prototype.STR_TO_DATE = function() {
    return this.getToken(SqlParser.STR_TO_DATE, 0);
};

FunctionNameBaseContext.prototype.ST_AREA = function() {
    return this.getToken(SqlParser.ST_AREA, 0);
};

FunctionNameBaseContext.prototype.ST_ASBINARY = function() {
    return this.getToken(SqlParser.ST_ASBINARY, 0);
};

FunctionNameBaseContext.prototype.ST_ASTEXT = function() {
    return this.getToken(SqlParser.ST_ASTEXT, 0);
};

FunctionNameBaseContext.prototype.ST_ASWKB = function() {
    return this.getToken(SqlParser.ST_ASWKB, 0);
};

FunctionNameBaseContext.prototype.ST_ASWKT = function() {
    return this.getToken(SqlParser.ST_ASWKT, 0);
};

FunctionNameBaseContext.prototype.ST_BUFFER = function() {
    return this.getToken(SqlParser.ST_BUFFER, 0);
};

FunctionNameBaseContext.prototype.ST_CENTROID = function() {
    return this.getToken(SqlParser.ST_CENTROID, 0);
};

FunctionNameBaseContext.prototype.ST_CONTAINS = function() {
    return this.getToken(SqlParser.ST_CONTAINS, 0);
};

FunctionNameBaseContext.prototype.ST_CROSSES = function() {
    return this.getToken(SqlParser.ST_CROSSES, 0);
};

FunctionNameBaseContext.prototype.ST_DIFFERENCE = function() {
    return this.getToken(SqlParser.ST_DIFFERENCE, 0);
};

FunctionNameBaseContext.prototype.ST_DIMENSION = function() {
    return this.getToken(SqlParser.ST_DIMENSION, 0);
};

FunctionNameBaseContext.prototype.ST_DISJOINT = function() {
    return this.getToken(SqlParser.ST_DISJOINT, 0);
};

FunctionNameBaseContext.prototype.ST_DISTANCE = function() {
    return this.getToken(SqlParser.ST_DISTANCE, 0);
};

FunctionNameBaseContext.prototype.ST_ENDPOINT = function() {
    return this.getToken(SqlParser.ST_ENDPOINT, 0);
};

FunctionNameBaseContext.prototype.ST_ENVELOPE = function() {
    return this.getToken(SqlParser.ST_ENVELOPE, 0);
};

FunctionNameBaseContext.prototype.ST_EQUALS = function() {
    return this.getToken(SqlParser.ST_EQUALS, 0);
};

FunctionNameBaseContext.prototype.ST_EXTERIORRING = function() {
    return this.getToken(SqlParser.ST_EXTERIORRING, 0);
};

FunctionNameBaseContext.prototype.ST_GEOMCOLLFROMTEXT = function() {
    return this.getToken(SqlParser.ST_GEOMCOLLFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.ST_GEOMCOLLFROMTXT = function() {
    return this.getToken(SqlParser.ST_GEOMCOLLFROMTXT, 0);
};

FunctionNameBaseContext.prototype.ST_GEOMCOLLFROMWKB = function() {
    return this.getToken(SqlParser.ST_GEOMCOLLFROMWKB, 0);
};

FunctionNameBaseContext.prototype.ST_GEOMETRYCOLLECTIONFROMTEXT = function() {
    return this.getToken(SqlParser.ST_GEOMETRYCOLLECTIONFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.ST_GEOMETRYCOLLECTIONFROMWKB = function() {
    return this.getToken(SqlParser.ST_GEOMETRYCOLLECTIONFROMWKB, 0);
};

FunctionNameBaseContext.prototype.ST_GEOMETRYFROMTEXT = function() {
    return this.getToken(SqlParser.ST_GEOMETRYFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.ST_GEOMETRYFROMWKB = function() {
    return this.getToken(SqlParser.ST_GEOMETRYFROMWKB, 0);
};

FunctionNameBaseContext.prototype.ST_GEOMETRYN = function() {
    return this.getToken(SqlParser.ST_GEOMETRYN, 0);
};

FunctionNameBaseContext.prototype.ST_GEOMETRYTYPE = function() {
    return this.getToken(SqlParser.ST_GEOMETRYTYPE, 0);
};

FunctionNameBaseContext.prototype.ST_GEOMFROMTEXT = function() {
    return this.getToken(SqlParser.ST_GEOMFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.ST_GEOMFROMWKB = function() {
    return this.getToken(SqlParser.ST_GEOMFROMWKB, 0);
};

FunctionNameBaseContext.prototype.ST_INTERIORRINGN = function() {
    return this.getToken(SqlParser.ST_INTERIORRINGN, 0);
};

FunctionNameBaseContext.prototype.ST_INTERSECTION = function() {
    return this.getToken(SqlParser.ST_INTERSECTION, 0);
};

FunctionNameBaseContext.prototype.ST_INTERSECTS = function() {
    return this.getToken(SqlParser.ST_INTERSECTS, 0);
};

FunctionNameBaseContext.prototype.ST_ISCLOSED = function() {
    return this.getToken(SqlParser.ST_ISCLOSED, 0);
};

FunctionNameBaseContext.prototype.ST_ISEMPTY = function() {
    return this.getToken(SqlParser.ST_ISEMPTY, 0);
};

FunctionNameBaseContext.prototype.ST_ISSIMPLE = function() {
    return this.getToken(SqlParser.ST_ISSIMPLE, 0);
};

FunctionNameBaseContext.prototype.ST_LINEFROMTEXT = function() {
    return this.getToken(SqlParser.ST_LINEFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.ST_LINEFROMWKB = function() {
    return this.getToken(SqlParser.ST_LINEFROMWKB, 0);
};

FunctionNameBaseContext.prototype.ST_LINESTRINGFROMTEXT = function() {
    return this.getToken(SqlParser.ST_LINESTRINGFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.ST_LINESTRINGFROMWKB = function() {
    return this.getToken(SqlParser.ST_LINESTRINGFROMWKB, 0);
};

FunctionNameBaseContext.prototype.ST_NUMGEOMETRIES = function() {
    return this.getToken(SqlParser.ST_NUMGEOMETRIES, 0);
};

FunctionNameBaseContext.prototype.ST_NUMINTERIORRING = function() {
    return this.getToken(SqlParser.ST_NUMINTERIORRING, 0);
};

FunctionNameBaseContext.prototype.ST_NUMINTERIORRINGS = function() {
    return this.getToken(SqlParser.ST_NUMINTERIORRINGS, 0);
};

FunctionNameBaseContext.prototype.ST_NUMPOINTS = function() {
    return this.getToken(SqlParser.ST_NUMPOINTS, 0);
};

FunctionNameBaseContext.prototype.ST_OVERLAPS = function() {
    return this.getToken(SqlParser.ST_OVERLAPS, 0);
};

FunctionNameBaseContext.prototype.ST_POINTFROMTEXT = function() {
    return this.getToken(SqlParser.ST_POINTFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.ST_POINTFROMWKB = function() {
    return this.getToken(SqlParser.ST_POINTFROMWKB, 0);
};

FunctionNameBaseContext.prototype.ST_POINTN = function() {
    return this.getToken(SqlParser.ST_POINTN, 0);
};

FunctionNameBaseContext.prototype.ST_POLYFROMTEXT = function() {
    return this.getToken(SqlParser.ST_POLYFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.ST_POLYFROMWKB = function() {
    return this.getToken(SqlParser.ST_POLYFROMWKB, 0);
};

FunctionNameBaseContext.prototype.ST_POLYGONFROMTEXT = function() {
    return this.getToken(SqlParser.ST_POLYGONFROMTEXT, 0);
};

FunctionNameBaseContext.prototype.ST_POLYGONFROMWKB = function() {
    return this.getToken(SqlParser.ST_POLYGONFROMWKB, 0);
};

FunctionNameBaseContext.prototype.ST_SRID = function() {
    return this.getToken(SqlParser.ST_SRID, 0);
};

FunctionNameBaseContext.prototype.ST_STARTPOINT = function() {
    return this.getToken(SqlParser.ST_STARTPOINT, 0);
};

FunctionNameBaseContext.prototype.ST_SYMDIFFERENCE = function() {
    return this.getToken(SqlParser.ST_SYMDIFFERENCE, 0);
};

FunctionNameBaseContext.prototype.ST_TOUCHES = function() {
    return this.getToken(SqlParser.ST_TOUCHES, 0);
};

FunctionNameBaseContext.prototype.ST_UNION = function() {
    return this.getToken(SqlParser.ST_UNION, 0);
};

FunctionNameBaseContext.prototype.ST_WITHIN = function() {
    return this.getToken(SqlParser.ST_WITHIN, 0);
};

FunctionNameBaseContext.prototype.ST_X = function() {
    return this.getToken(SqlParser.ST_X, 0);
};

FunctionNameBaseContext.prototype.ST_Y = function() {
    return this.getToken(SqlParser.ST_Y, 0);
};

FunctionNameBaseContext.prototype.SUBDATE = function() {
    return this.getToken(SqlParser.SUBDATE, 0);
};

FunctionNameBaseContext.prototype.SUBSTRING_INDEX = function() {
    return this.getToken(SqlParser.SUBSTRING_INDEX, 0);
};

FunctionNameBaseContext.prototype.SUBTIME = function() {
    return this.getToken(SqlParser.SUBTIME, 0);
};

FunctionNameBaseContext.prototype.SYSTEM_USER = function() {
    return this.getToken(SqlParser.SYSTEM_USER, 0);
};

FunctionNameBaseContext.prototype.TAN = function() {
    return this.getToken(SqlParser.TAN, 0);
};

FunctionNameBaseContext.prototype.TIME = function() {
    return this.getToken(SqlParser.TIME, 0);
};

FunctionNameBaseContext.prototype.TIMEDIFF = function() {
    return this.getToken(SqlParser.TIMEDIFF, 0);
};

FunctionNameBaseContext.prototype.TIMESTAMP = function() {
    return this.getToken(SqlParser.TIMESTAMP, 0);
};

FunctionNameBaseContext.prototype.TIMESTAMPADD = function() {
    return this.getToken(SqlParser.TIMESTAMPADD, 0);
};

FunctionNameBaseContext.prototype.TIMESTAMPDIFF = function() {
    return this.getToken(SqlParser.TIMESTAMPDIFF, 0);
};

FunctionNameBaseContext.prototype.TIME_FORMAT = function() {
    return this.getToken(SqlParser.TIME_FORMAT, 0);
};

FunctionNameBaseContext.prototype.TIME_TO_SEC = function() {
    return this.getToken(SqlParser.TIME_TO_SEC, 0);
};

FunctionNameBaseContext.prototype.TOUCHES = function() {
    return this.getToken(SqlParser.TOUCHES, 0);
};

FunctionNameBaseContext.prototype.TO_BASE64 = function() {
    return this.getToken(SqlParser.TO_BASE64, 0);
};

FunctionNameBaseContext.prototype.TO_DAYS = function() {
    return this.getToken(SqlParser.TO_DAYS, 0);
};

FunctionNameBaseContext.prototype.TO_SECONDS = function() {
    return this.getToken(SqlParser.TO_SECONDS, 0);
};

FunctionNameBaseContext.prototype.UCASE = function() {
    return this.getToken(SqlParser.UCASE, 0);
};

FunctionNameBaseContext.prototype.UNCOMPRESS = function() {
    return this.getToken(SqlParser.UNCOMPRESS, 0);
};

FunctionNameBaseContext.prototype.UNCOMPRESSED_LENGTH = function() {
    return this.getToken(SqlParser.UNCOMPRESSED_LENGTH, 0);
};

FunctionNameBaseContext.prototype.UNHEX = function() {
    return this.getToken(SqlParser.UNHEX, 0);
};

FunctionNameBaseContext.prototype.UNIX_TIMESTAMP = function() {
    return this.getToken(SqlParser.UNIX_TIMESTAMP, 0);
};

FunctionNameBaseContext.prototype.UPDATEXML = function() {
    return this.getToken(SqlParser.UPDATEXML, 0);
};

FunctionNameBaseContext.prototype.UPPER = function() {
    return this.getToken(SqlParser.UPPER, 0);
};

FunctionNameBaseContext.prototype.UUID = function() {
    return this.getToken(SqlParser.UUID, 0);
};

FunctionNameBaseContext.prototype.UUID_SHORT = function() {
    return this.getToken(SqlParser.UUID_SHORT, 0);
};

FunctionNameBaseContext.prototype.VALIDATE_PASSWORD_STRENGTH = function() {
    return this.getToken(SqlParser.VALIDATE_PASSWORD_STRENGTH, 0);
};

FunctionNameBaseContext.prototype.VERSION = function() {
    return this.getToken(SqlParser.VERSION, 0);
};

FunctionNameBaseContext.prototype.VISIBLE = function() {
    return this.getToken(SqlParser.VISIBLE, 0);
};

FunctionNameBaseContext.prototype.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS = function() {
    return this.getToken(SqlParser.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS, 0);
};

FunctionNameBaseContext.prototype.WEEK = function() {
    return this.getToken(SqlParser.WEEK, 0);
};

FunctionNameBaseContext.prototype.WEEKDAY = function() {
    return this.getToken(SqlParser.WEEKDAY, 0);
};

FunctionNameBaseContext.prototype.WEEKOFYEAR = function() {
    return this.getToken(SqlParser.WEEKOFYEAR, 0);
};

FunctionNameBaseContext.prototype.WEIGHT_STRING = function() {
    return this.getToken(SqlParser.WEIGHT_STRING, 0);
};

FunctionNameBaseContext.prototype.WITHIN = function() {
    return this.getToken(SqlParser.WITHIN, 0);
};

FunctionNameBaseContext.prototype.YEAR = function() {
    return this.getToken(SqlParser.YEAR, 0);
};

FunctionNameBaseContext.prototype.YEARWEEK = function() {
    return this.getToken(SqlParser.YEARWEEK, 0);
};

FunctionNameBaseContext.prototype.Y_FUNCTION = function() {
    return this.getToken(SqlParser.Y_FUNCTION, 0);
};

FunctionNameBaseContext.prototype.X_FUNCTION = function() {
    return this.getToken(SqlParser.X_FUNCTION, 0);
};

FunctionNameBaseContext.prototype.JSON_VALID = function() {
    return this.getToken(SqlParser.JSON_VALID, 0);
};

FunctionNameBaseContext.prototype.JSON_SCHEMA_VALID = function() {
    return this.getToken(SqlParser.JSON_SCHEMA_VALID, 0);
};

FunctionNameBaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitFunctionNameBase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.FunctionNameBaseContext = FunctionNameBaseContext;

SqlParser.prototype.functionNameBase = function() {

    var localctx = new FunctionNameBaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, SqlParser.RULE_functionNameBase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 526;
        _la = this._input.LA(1);
        if(!(_la===SqlParser.DATABASE || _la===SqlParser.LEFT || _la===SqlParser.RIGHT || ((((_la - 199)) & ~0x1f) == 0 && ((1 << (_la - 199)) & ((1 << (SqlParser.DATE - 199)) | (1 << (SqlParser.TIME - 199)) | (1 << (SqlParser.TIMESTAMP - 199)) | (1 << (SqlParser.YEAR - 199)))) !== 0) || ((((_la - 233)) & ~0x1f) == 0 && ((1 << (_la - 233)) & ((1 << (SqlParser.JSON_VALID - 233)) | (1 << (SqlParser.JSON_SCHEMA_VALID - 233)) | (1 << (SqlParser.COUNT - 233)) | (1 << (SqlParser.POSITION - 233)))) !== 0) || _la===SqlParser.INVISIBLE || ((((_la - 580)) & ~0x1f) == 0 && ((1 << (_la - 580)) & ((1 << (SqlParser.VISIBLE - 580)) | (1 << (SqlParser.QUARTER - 580)) | (1 << (SqlParser.MONTH - 580)) | (1 << (SqlParser.DAY - 580)) | (1 << (SqlParser.HOUR - 580)) | (1 << (SqlParser.MINUTE - 580)) | (1 << (SqlParser.WEEK - 580)) | (1 << (SqlParser.SECOND - 580)) | (1 << (SqlParser.MICROSECOND - 580)))) !== 0) || _la===SqlParser.SESSION_VARIABLES_ADMIN || ((((_la - 693)) & ~0x1f) == 0 && ((1 << (_la - 693)) & ((1 << (SqlParser.GEOMETRYCOLLECTION - 693)) | (1 << (SqlParser.LINESTRING - 693)) | (1 << (SqlParser.MULTILINESTRING - 693)) | (1 << (SqlParser.MULTIPOINT - 693)) | (1 << (SqlParser.MULTIPOLYGON - 693)) | (1 << (SqlParser.POINT - 693)) | (1 << (SqlParser.POLYGON - 693)) | (1 << (SqlParser.ABS - 693)) | (1 << (SqlParser.ACOS - 693)) | (1 << (SqlParser.ADDDATE - 693)) | (1 << (SqlParser.ADDTIME - 693)) | (1 << (SqlParser.AES_DECRYPT - 693)) | (1 << (SqlParser.AES_ENCRYPT - 693)) | (1 << (SqlParser.AREA - 693)) | (1 << (SqlParser.ASBINARY - 693)) | (1 << (SqlParser.ASIN - 693)) | (1 << (SqlParser.ASTEXT - 693)) | (1 << (SqlParser.ASWKB - 693)) | (1 << (SqlParser.ASWKT - 693)) | (1 << (SqlParser.ASYMMETRIC_DECRYPT - 693)) | (1 << (SqlParser.ASYMMETRIC_DERIVE - 693)) | (1 << (SqlParser.ASYMMETRIC_ENCRYPT - 693)) | (1 << (SqlParser.ASYMMETRIC_SIGN - 693)) | (1 << (SqlParser.ASYMMETRIC_VERIFY - 693)) | (1 << (SqlParser.ATAN - 693)) | (1 << (SqlParser.ATAN2 - 693)) | (1 << (SqlParser.BENCHMARK - 693)) | (1 << (SqlParser.BIN - 693)) | (1 << (SqlParser.BIT_COUNT - 693)) | (1 << (SqlParser.BIT_LENGTH - 693)))) !== 0) || ((((_la - 725)) & ~0x1f) == 0 && ((1 << (_la - 725)) & ((1 << (SqlParser.BUFFER - 725)) | (1 << (SqlParser.CEIL - 725)) | (1 << (SqlParser.CEILING - 725)) | (1 << (SqlParser.CENTROID - 725)) | (1 << (SqlParser.CHARACTER_LENGTH - 725)) | (1 << (SqlParser.CHARSET - 725)) | (1 << (SqlParser.CHAR_LENGTH - 725)) | (1 << (SqlParser.COERCIBILITY - 725)) | (1 << (SqlParser.COLLATION - 725)) | (1 << (SqlParser.COMPRESS - 725)) | (1 << (SqlParser.CONCAT - 725)) | (1 << (SqlParser.CONCAT_WS - 725)) | (1 << (SqlParser.CONNECTION_ID - 725)) | (1 << (SqlParser.CONV - 725)) | (1 << (SqlParser.CONVERT_TZ - 725)) | (1 << (SqlParser.COS - 725)) | (1 << (SqlParser.COT - 725)) | (1 << (SqlParser.CRC32 - 725)) | (1 << (SqlParser.CREATE_ASYMMETRIC_PRIV_KEY - 725)) | (1 << (SqlParser.CREATE_ASYMMETRIC_PUB_KEY - 725)) | (1 << (SqlParser.CREATE_DH_PARAMETERS - 725)) | (1 << (SqlParser.CREATE_DIGEST - 725)) | (1 << (SqlParser.CROSSES - 725)) | (1 << (SqlParser.DATEDIFF - 725)) | (1 << (SqlParser.DATE_FORMAT - 725)) | (1 << (SqlParser.DAYNAME - 725)) | (1 << (SqlParser.DAYOFMONTH - 725)) | (1 << (SqlParser.DAYOFWEEK - 725)) | (1 << (SqlParser.DAYOFYEAR - 725)) | (1 << (SqlParser.DECODE - 725)) | (1 << (SqlParser.DEGREES - 725)))) !== 0) || ((((_la - 757)) & ~0x1f) == 0 && ((1 << (_la - 757)) & ((1 << (SqlParser.DES_DECRYPT - 757)) | (1 << (SqlParser.DES_ENCRYPT - 757)) | (1 << (SqlParser.DIMENSION - 757)) | (1 << (SqlParser.DISJOINT - 757)) | (1 << (SqlParser.ELT - 757)) | (1 << (SqlParser.ENCODE - 757)) | (1 << (SqlParser.ENCRYPT - 757)) | (1 << (SqlParser.ENDPOINT - 757)) | (1 << (SqlParser.ENVELOPE - 757)) | (1 << (SqlParser.EQUALS - 757)) | (1 << (SqlParser.EXP - 757)) | (1 << (SqlParser.EXPORT_SET - 757)) | (1 << (SqlParser.EXTERIORRING - 757)) | (1 << (SqlParser.EXTRACTVALUE - 757)) | (1 << (SqlParser.FIELD - 757)) | (1 << (SqlParser.FIND_IN_SET - 757)) | (1 << (SqlParser.FLOOR - 757)) | (1 << (SqlParser.FORMAT - 757)) | (1 << (SqlParser.FOUND_ROWS - 757)) | (1 << (SqlParser.FROM_BASE64 - 757)) | (1 << (SqlParser.FROM_DAYS - 757)) | (1 << (SqlParser.FROM_UNIXTIME - 757)) | (1 << (SqlParser.GEOMCOLLFROMTEXT - 757)) | (1 << (SqlParser.GEOMCOLLFROMWKB - 757)) | (1 << (SqlParser.GEOMETRYCOLLECTIONFROMTEXT - 757)) | (1 << (SqlParser.GEOMETRYCOLLECTIONFROMWKB - 757)) | (1 << (SqlParser.GEOMETRYFROMTEXT - 757)) | (1 << (SqlParser.GEOMETRYFROMWKB - 757)) | (1 << (SqlParser.GEOMETRYN - 757)) | (1 << (SqlParser.GEOMETRYTYPE - 757)) | (1 << (SqlParser.GEOMFROMTEXT - 757)) | (1 << (SqlParser.GEOMFROMWKB - 757)))) !== 0) || ((((_la - 789)) & ~0x1f) == 0 && ((1 << (_la - 789)) & ((1 << (SqlParser.GET_FORMAT - 789)) | (1 << (SqlParser.GET_LOCK - 789)) | (1 << (SqlParser.GLENGTH - 789)) | (1 << (SqlParser.GREATEST - 789)) | (1 << (SqlParser.GTID_SUBSET - 789)) | (1 << (SqlParser.GTID_SUBTRACT - 789)) | (1 << (SqlParser.HEX - 789)) | (1 << (SqlParser.IFNULL - 789)) | (1 << (SqlParser.INET6_ATON - 789)) | (1 << (SqlParser.INET6_NTOA - 789)) | (1 << (SqlParser.INET_ATON - 789)) | (1 << (SqlParser.INET_NTOA - 789)) | (1 << (SqlParser.INSTR - 789)) | (1 << (SqlParser.INTERIORRINGN - 789)) | (1 << (SqlParser.INTERSECTS - 789)) | (1 << (SqlParser.ISCLOSED - 789)) | (1 << (SqlParser.ISEMPTY - 789)) | (1 << (SqlParser.ISNULL - 789)) | (1 << (SqlParser.ISSIMPLE - 789)) | (1 << (SqlParser.IS_FREE_LOCK - 789)) | (1 << (SqlParser.IS_IPV4 - 789)) | (1 << (SqlParser.IS_IPV4_COMPAT - 789)) | (1 << (SqlParser.IS_IPV4_MAPPED - 789)) | (1 << (SqlParser.IS_IPV6 - 789)) | (1 << (SqlParser.IS_USED_LOCK - 789)) | (1 << (SqlParser.LAST_INSERT_ID - 789)) | (1 << (SqlParser.LCASE - 789)) | (1 << (SqlParser.LEAST - 789)) | (1 << (SqlParser.LENGTH - 789)) | (1 << (SqlParser.LINEFROMTEXT - 789)) | (1 << (SqlParser.LINEFROMWKB - 789)) | (1 << (SqlParser.LINESTRINGFROMTEXT - 789)))) !== 0) || ((((_la - 821)) & ~0x1f) == 0 && ((1 << (_la - 821)) & ((1 << (SqlParser.LINESTRINGFROMWKB - 821)) | (1 << (SqlParser.LN - 821)) | (1 << (SqlParser.LOAD_FILE - 821)) | (1 << (SqlParser.LOCATE - 821)) | (1 << (SqlParser.LOG - 821)) | (1 << (SqlParser.LOG10 - 821)) | (1 << (SqlParser.LOG2 - 821)) | (1 << (SqlParser.LOWER - 821)) | (1 << (SqlParser.LPAD - 821)) | (1 << (SqlParser.LTRIM - 821)) | (1 << (SqlParser.MAKEDATE - 821)) | (1 << (SqlParser.MAKETIME - 821)) | (1 << (SqlParser.MAKE_SET - 821)) | (1 << (SqlParser.MASTER_POS_WAIT - 821)) | (1 << (SqlParser.MBRCONTAINS - 821)) | (1 << (SqlParser.MBRDISJOINT - 821)) | (1 << (SqlParser.MBREQUAL - 821)) | (1 << (SqlParser.MBRINTERSECTS - 821)) | (1 << (SqlParser.MBROVERLAPS - 821)) | (1 << (SqlParser.MBRTOUCHES - 821)) | (1 << (SqlParser.MBRWITHIN - 821)) | (1 << (SqlParser.MD5 - 821)) | (1 << (SqlParser.MLINEFROMTEXT - 821)) | (1 << (SqlParser.MLINEFROMWKB - 821)) | (1 << (SqlParser.MONTHNAME - 821)) | (1 << (SqlParser.MPOINTFROMTEXT - 821)) | (1 << (SqlParser.MPOINTFROMWKB - 821)) | (1 << (SqlParser.MPOLYFROMTEXT - 821)) | (1 << (SqlParser.MPOLYFROMWKB - 821)) | (1 << (SqlParser.MULTILINESTRINGFROMTEXT - 821)) | (1 << (SqlParser.MULTILINESTRINGFROMWKB - 821)) | (1 << (SqlParser.MULTIPOINTFROMTEXT - 821)))) !== 0) || ((((_la - 853)) & ~0x1f) == 0 && ((1 << (_la - 853)) & ((1 << (SqlParser.MULTIPOINTFROMWKB - 853)) | (1 << (SqlParser.MULTIPOLYGONFROMTEXT - 853)) | (1 << (SqlParser.MULTIPOLYGONFROMWKB - 853)) | (1 << (SqlParser.NAME_CONST - 853)) | (1 << (SqlParser.NULLIF - 853)) | (1 << (SqlParser.NUMGEOMETRIES - 853)) | (1 << (SqlParser.NUMINTERIORRINGS - 853)) | (1 << (SqlParser.NUMPOINTS - 853)) | (1 << (SqlParser.OCT - 853)) | (1 << (SqlParser.OCTET_LENGTH - 853)) | (1 << (SqlParser.ORD - 853)) | (1 << (SqlParser.OVERLAPS - 853)) | (1 << (SqlParser.PERIOD_ADD - 853)) | (1 << (SqlParser.PERIOD_DIFF - 853)) | (1 << (SqlParser.PI - 853)) | (1 << (SqlParser.POINTFROMTEXT - 853)) | (1 << (SqlParser.POINTFROMWKB - 853)) | (1 << (SqlParser.POINTN - 853)) | (1 << (SqlParser.POLYFROMTEXT - 853)) | (1 << (SqlParser.POLYFROMWKB - 853)) | (1 << (SqlParser.POLYGONFROMTEXT - 853)) | (1 << (SqlParser.POLYGONFROMWKB - 853)) | (1 << (SqlParser.POW - 853)) | (1 << (SqlParser.POWER - 853)) | (1 << (SqlParser.QUOTE - 853)) | (1 << (SqlParser.RADIANS - 853)) | (1 << (SqlParser.RAND - 853)) | (1 << (SqlParser.RANDOM_BYTES - 853)) | (1 << (SqlParser.RELEASE_LOCK - 853)) | (1 << (SqlParser.REVERSE - 853)) | (1 << (SqlParser.ROUND - 853)) | (1 << (SqlParser.ROW_COUNT - 853)))) !== 0) || ((((_la - 885)) & ~0x1f) == 0 && ((1 << (_la - 885)) & ((1 << (SqlParser.RPAD - 885)) | (1 << (SqlParser.RTRIM - 885)) | (1 << (SqlParser.SEC_TO_TIME - 885)) | (1 << (SqlParser.SESSION_USER - 885)) | (1 << (SqlParser.SHA - 885)) | (1 << (SqlParser.SHA1 - 885)) | (1 << (SqlParser.SHA2 - 885)) | (1 << (SqlParser.SIGN - 885)) | (1 << (SqlParser.SIN - 885)) | (1 << (SqlParser.SLEEP - 885)) | (1 << (SqlParser.SOUNDEX - 885)) | (1 << (SqlParser.SQL_THREAD_WAIT_AFTER_GTIDS - 885)) | (1 << (SqlParser.SQRT - 885)) | (1 << (SqlParser.SRID - 885)) | (1 << (SqlParser.STARTPOINT - 885)) | (1 << (SqlParser.STRCMP - 885)) | (1 << (SqlParser.STR_TO_DATE - 885)) | (1 << (SqlParser.ST_AREA - 885)) | (1 << (SqlParser.ST_ASBINARY - 885)) | (1 << (SqlParser.ST_ASTEXT - 885)) | (1 << (SqlParser.ST_ASWKB - 885)) | (1 << (SqlParser.ST_ASWKT - 885)) | (1 << (SqlParser.ST_BUFFER - 885)) | (1 << (SqlParser.ST_CENTROID - 885)) | (1 << (SqlParser.ST_CONTAINS - 885)) | (1 << (SqlParser.ST_CROSSES - 885)) | (1 << (SqlParser.ST_DIFFERENCE - 885)) | (1 << (SqlParser.ST_DIMENSION - 885)) | (1 << (SqlParser.ST_DISJOINT - 885)) | (1 << (SqlParser.ST_DISTANCE - 885)) | (1 << (SqlParser.ST_ENDPOINT - 885)))) !== 0) || ((((_la - 917)) & ~0x1f) == 0 && ((1 << (_la - 917)) & ((1 << (SqlParser.ST_ENVELOPE - 917)) | (1 << (SqlParser.ST_EQUALS - 917)) | (1 << (SqlParser.ST_EXTERIORRING - 917)) | (1 << (SqlParser.ST_GEOMCOLLFROMTEXT - 917)) | (1 << (SqlParser.ST_GEOMCOLLFROMTXT - 917)) | (1 << (SqlParser.ST_GEOMCOLLFROMWKB - 917)) | (1 << (SqlParser.ST_GEOMETRYCOLLECTIONFROMTEXT - 917)) | (1 << (SqlParser.ST_GEOMETRYCOLLECTIONFROMWKB - 917)) | (1 << (SqlParser.ST_GEOMETRYFROMTEXT - 917)) | (1 << (SqlParser.ST_GEOMETRYFROMWKB - 917)) | (1 << (SqlParser.ST_GEOMETRYN - 917)) | (1 << (SqlParser.ST_GEOMETRYTYPE - 917)) | (1 << (SqlParser.ST_GEOMFROMTEXT - 917)) | (1 << (SqlParser.ST_GEOMFROMWKB - 917)) | (1 << (SqlParser.ST_INTERIORRINGN - 917)) | (1 << (SqlParser.ST_INTERSECTION - 917)) | (1 << (SqlParser.ST_INTERSECTS - 917)) | (1 << (SqlParser.ST_ISCLOSED - 917)) | (1 << (SqlParser.ST_ISEMPTY - 917)) | (1 << (SqlParser.ST_ISSIMPLE - 917)) | (1 << (SqlParser.ST_LINEFROMTEXT - 917)) | (1 << (SqlParser.ST_LINEFROMWKB - 917)) | (1 << (SqlParser.ST_LINESTRINGFROMTEXT - 917)) | (1 << (SqlParser.ST_LINESTRINGFROMWKB - 917)) | (1 << (SqlParser.ST_NUMGEOMETRIES - 917)) | (1 << (SqlParser.ST_NUMINTERIORRING - 917)) | (1 << (SqlParser.ST_NUMINTERIORRINGS - 917)) | (1 << (SqlParser.ST_NUMPOINTS - 917)) | (1 << (SqlParser.ST_OVERLAPS - 917)) | (1 << (SqlParser.ST_POINTFROMTEXT - 917)) | (1 << (SqlParser.ST_POINTFROMWKB - 917)) | (1 << (SqlParser.ST_POINTN - 917)))) !== 0) || ((((_la - 949)) & ~0x1f) == 0 && ((1 << (_la - 949)) & ((1 << (SqlParser.ST_POLYFROMTEXT - 949)) | (1 << (SqlParser.ST_POLYFROMWKB - 949)) | (1 << (SqlParser.ST_POLYGONFROMTEXT - 949)) | (1 << (SqlParser.ST_POLYGONFROMWKB - 949)) | (1 << (SqlParser.ST_SRID - 949)) | (1 << (SqlParser.ST_STARTPOINT - 949)) | (1 << (SqlParser.ST_SYMDIFFERENCE - 949)) | (1 << (SqlParser.ST_TOUCHES - 949)) | (1 << (SqlParser.ST_UNION - 949)) | (1 << (SqlParser.ST_WITHIN - 949)) | (1 << (SqlParser.ST_X - 949)) | (1 << (SqlParser.ST_Y - 949)) | (1 << (SqlParser.SUBDATE - 949)) | (1 << (SqlParser.SUBSTRING_INDEX - 949)) | (1 << (SqlParser.SUBTIME - 949)) | (1 << (SqlParser.SYSTEM_USER - 949)) | (1 << (SqlParser.TAN - 949)) | (1 << (SqlParser.TIMEDIFF - 949)) | (1 << (SqlParser.TIMESTAMPADD - 949)) | (1 << (SqlParser.TIMESTAMPDIFF - 949)) | (1 << (SqlParser.TIME_FORMAT - 949)) | (1 << (SqlParser.TIME_TO_SEC - 949)) | (1 << (SqlParser.TOUCHES - 949)) | (1 << (SqlParser.TO_BASE64 - 949)) | (1 << (SqlParser.TO_DAYS - 949)) | (1 << (SqlParser.TO_SECONDS - 949)) | (1 << (SqlParser.UCASE - 949)) | (1 << (SqlParser.UNCOMPRESS - 949)) | (1 << (SqlParser.UNCOMPRESSED_LENGTH - 949)) | (1 << (SqlParser.UNHEX - 949)) | (1 << (SqlParser.UNIX_TIMESTAMP - 949)) | (1 << (SqlParser.UPDATEXML - 949)))) !== 0) || ((((_la - 981)) & ~0x1f) == 0 && ((1 << (_la - 981)) & ((1 << (SqlParser.UPPER - 981)) | (1 << (SqlParser.UUID - 981)) | (1 << (SqlParser.UUID_SHORT - 981)) | (1 << (SqlParser.VALIDATE_PASSWORD_STRENGTH - 981)) | (1 << (SqlParser.VERSION - 981)) | (1 << (SqlParser.WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS - 981)) | (1 << (SqlParser.WEEKDAY - 981)) | (1 << (SqlParser.WEEKOFYEAR - 981)) | (1 << (SqlParser.WEIGHT_STRING - 981)) | (1 << (SqlParser.WITHIN - 981)) | (1 << (SqlParser.YEARWEEK - 981)) | (1 << (SqlParser.Y_FUNCTION - 981)) | (1 << (SqlParser.X_FUNCTION - 981)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


SqlParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 36:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SqlParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SqlParser = SqlParser;
