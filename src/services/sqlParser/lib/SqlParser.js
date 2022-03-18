// Generated from /home/rogerk/projects/rogerk/firestore-ui/antlr/grammar/SqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SqlParserVisitor = require('./SqlParserVisitor').SqlParserVisitor;

var grammarFileName = "SqlParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003T\u0202\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0005\u0003i\n\u0003\u0003",
    "\u0003\u0005\u0003l\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0005\u0004r\n\u0004\u0003\u0004\u0005\u0004u\n\u0004\u0003\u0004",
    "\u0007\u0004x\n\u0004\f\u0004\u000e\u0004{\u000b\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004\u007f\n\u0004\u0003\u0004\u0005\u0004\u0082\n\u0004",
    "\u0003\u0004\u0005\u0004\u0085\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005\u008b\n\u0005\u0003\u0006\u0003\u0006",
    "\u0005\u0006\u008f\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006\u0095\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "\u0099\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u0007\u009f\n\u0007\f\u0007\u000e\u0007\u00a2\u000b\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00b3\n\t\f\t\u000e\t\u00b6",
    "\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00be",
    "\n\n\f\n\u000e\n\u00c1\u000b\n\u0003\n\u0003\n\u0005\n\u00c5\n\n\u0003",
    "\n\u0005\n\u00c8\n\n\u0003\n\u0005\n\u00cb\n\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000b\u00d1\n\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u00d8\n\f\u0003\f\u0005\f\u00db\n\f\u0003",
    "\f\u0005\f\u00de\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00e4\n",
    "\r\u0003\r\u0005\r\u00e7\n\r\u0005\r\u00e9\n\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0007\u000e\u00ef\n\u000e\f\u000e\u000e\u000e",
    "\u00f2\u000b\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00f6\n\u000e",
    "\u0005\u000e\u00f8\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u0100\n\u000f\u0003\u000f",
    "\u0005\u000f\u0103\n\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u0107",
    "\n\u000f\u0003\u000f\u0005\u000f\u010a\n\u000f\u0005\u000f\u010c\n\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0112\n",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007",
    "\u0011\u0119\n\u0011\f\u0011\u000e\u0011\u011c\u000b\u0011\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u0120\n\u0012\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u0124\n\u0013\u0003\u0013\u0005\u0013\u0127\n\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u012c\n\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0132\n\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0139\n",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u013f",
    "\n\u0015\f\u0015\u000e\u0015\u0142\u000b\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0007\u0017\u0148\n\u0017\f\u0017\u000e\u0017",
    "\u014b\u000b\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u0151\n\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u0160\n\u001e\u0003",
    "\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0005#\u0171\n#\u0003$\u0003",
    "$\u0003%\u0003%\u0003%\u0003%\u0003%\u0005%\u017a\n%\u0003&\u0003&\u0005",
    "&\u017e\n&\u0003\'\u0003\'\u0003\'\u0007\'\u0183\n\'\f\'\u000e\'\u0186",
    "\u000b\'\u0003(\u0003(\u0003(\u0007(\u018b\n(\f(\u000e(\u018e\u000b",
    "(\u0003)\u0003)\u0003)\u0007)\u0193\n)\f)\u000e)\u0196\u000b)\u0003",
    "*\u0003*\u0003+\u0003+\u0003+\u0003+\u0005+\u019e\n+\u0003+\u0003+\u0003",
    "+\u0003+\u0007+\u01a4\n+\f+\u000e+\u01a7\u000b+\u0003,\u0003,\u0005",
    ",\u01ab\n,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0005",
    ",\u01b5\n,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0005",
    ",\u01bf\n,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0005,\u01c8",
    "\n,\u0003,\u0003,\u0003,\u0003,\u0003,\u0005,\u01cf\n,\u0003,\u0003",
    ",\u0003,\u0003,\u0005,\u01d5\n,\u0003-\u0003-\u0003-\u0007-\u01da\n",
    "-\f-\u000e-\u01dd\u000b-\u0003.\u0003.\u0003/\u0003/\u0005/\u01e3\n",
    "/\u00030\u00030\u00030\u00030\u00030\u00030\u00050\u01eb\n0\u00031\u0003",
    "1\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u0005",
    "1\u01f8\n1\u00032\u00032\u00032\u00032\u00032\u00032\u00052\u0200\n",
    "2\u00032\u0002\u0003T3\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`b\u0002",
    "\t\u0003\u0002#$\u0004\u0002\t\t\u000e\u000e\u0004\u0002=?GG\u0004\u0002",
    "\u000f\u000f!!\u0004\u0002\u0019\u0019JJ\u0004\u0002\u0018\u001822\u0003",
    "\u0002\u001d\u001e\u0002\u022a\u0002d\u0003\u0002\u0002\u0002\u0004",
    "h\u0003\u0002\u0002\u0002\u0006y\u0003\u0002\u0002\u0002\b\u008a\u0003",
    "\u0002\u0002\u0002\n\u008c\u0003\u0002\u0002\u0002\f\u009a\u0003\u0002",
    "\u0002\u0002\u000e\u00a3\u0003\u0002\u0002\u0002\u0010\u00a9\u0003\u0002",
    "\u0002\u0002\u0012\u00b7\u0003\u0002\u0002\u0002\u0014\u00cc\u0003\u0002",
    "\u0002\u0002\u0016\u00d2\u0003\u0002\u0002\u0002\u0018\u00df\u0003\u0002",
    "\u0002\u0002\u001a\u00f7\u0003\u0002\u0002\u0002\u001c\u010b\u0003\u0002",
    "\u0002\u0002\u001e\u010d\u0003\u0002\u0002\u0002 \u0113\u0003\u0002",
    "\u0002\u0002\"\u011d\u0003\u0002\u0002\u0002$\u0121\u0003\u0002\u0002",
    "\u0002&\u012d\u0003\u0002\u0002\u0002(\u013a\u0003\u0002\u0002\u0002",
    "*\u0143\u0003\u0002\u0002\u0002,\u0145\u0003\u0002\u0002\u0002.\u0150",
    "\u0003\u0002\u0002\u00020\u0152\u0003\u0002\u0002\u00022\u0154\u0003",
    "\u0002\u0002\u00024\u0156\u0003\u0002\u0002\u00026\u0158\u0003\u0002",
    "\u0002\u00028\u015a\u0003\u0002\u0002\u0002:\u015f\u0003\u0002\u0002",
    "\u0002<\u0161\u0003\u0002\u0002\u0002>\u0163\u0003\u0002\u0002\u0002",
    "@\u0165\u0003\u0002\u0002\u0002B\u0167\u0003\u0002\u0002\u0002D\u0170",
    "\u0003\u0002\u0002\u0002F\u0172\u0003\u0002\u0002\u0002H\u0179\u0003",
    "\u0002\u0002\u0002J\u017d\u0003\u0002\u0002\u0002L\u017f\u0003\u0002",
    "\u0002\u0002N\u0187\u0003\u0002\u0002\u0002P\u018f\u0003\u0002\u0002",
    "\u0002R\u0197\u0003\u0002\u0002\u0002T\u019d\u0003\u0002\u0002\u0002",
    "V\u01d4\u0003\u0002\u0002\u0002X\u01d6\u0003\u0002\u0002\u0002Z\u01de",
    "\u0003\u0002\u0002\u0002\\\u01e2\u0003\u0002\u0002\u0002^\u01ea\u0003",
    "\u0002\u0002\u0002`\u01f7\u0003\u0002\u0002\u0002b\u01ff\u0003\u0002",
    "\u0002\u0002de\u0005\u0004\u0003\u0002ef\u0007\u0002\u0002\u0003f\u0003",
    "\u0003\u0002\u0002\u0002gi\u0005\u0006\u0004\u0002hg\u0003\u0002\u0002",
    "\u0002hi\u0003\u0002\u0002\u0002ik\u0003\u0002\u0002\u0002jl\u0007+",
    "\u0002\u0002kj\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\u0003",
    "\u0002\u0002\u0002mn\u0007\u0002\u0002\u0003n\u0005\u0003\u0002\u0002",
    "\u0002oq\u0005\b\u0005\u0002pr\u0007+\u0002\u0002qp\u0003\u0002\u0002",
    "\u0002qr\u0003\u0002\u0002\u0002rt\u0003\u0002\u0002\u0002su\u0007;",
    "\u0002\u0002ts\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002ux\u0003",
    "\u0002\u0002\u0002vx\u0007;\u0002\u0002wo\u0003\u0002\u0002\u0002wv",
    "\u0003\u0002\u0002\u0002x{\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002",
    "\u0002yz\u0003\u0002\u0002\u0002z\u0084\u0003\u0002\u0002\u0002{y\u0003",
    "\u0002\u0002\u0002|\u0081\u0005\b\u0005\u0002}\u007f\u0007+\u0002\u0002",
    "~}\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0080",
    "\u0003\u0002\u0002\u0002\u0080\u0082\u0007;\u0002\u0002\u0081~\u0003",
    "\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0085\u0003",
    "\u0002\u0002\u0002\u0083\u0085\u0007;\u0002\u0002\u0084|\u0003\u0002",
    "\u0002\u0002\u0084\u0083\u0003\u0002\u0002\u0002\u0085\u0007\u0003\u0002",
    "\u0002\u0002\u0086\u008b\u0005\u0018\r\u0002\u0087\u008b\u0005\n\u0006",
    "\u0002\u0088\u008b\u0005\u0012\n\u0002\u0089\u008b\u0005\u0016\f\u0002",
    "\u008a\u0086\u0003\u0002\u0002\u0002\u008a\u0087\u0003\u0002\u0002\u0002",
    "\u008a\u0088\u0003\u0002\u0002\u0002\u008a\u0089\u0003\u0002\u0002\u0002",
    "\u008b\t\u0003\u0002\u0002\u0002\u008c\u008e\u0007\u0012\u0002\u0002",
    "\u008d\u008f\u0007\u0013\u0002\u0002\u008e\u008d\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002",
    "\u0090\u0094\u0005*\u0016\u0002\u0091\u0092\u0007&\u0002\u0002\u0092",
    "\u0093\u0007\u0015\u0002\u0002\u0093\u0095\u0005,\u0017\u0002\u0094",
    "\u0091\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095",
    "\u0098\u0003\u0002\u0002\u0002\u0096\u0099\u0005\f\u0007\u0002\u0097",
    "\u0099\u0005\u000e\b\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0098",
    "\u0097\u0003\u0002\u0002\u0002\u0099\u000b\u0003\u0002\u0002\u0002\u009a",
    "\u009b\u0007 \u0002\u0002\u009b\u00a0\u0005\u0014\u000b\u0002\u009c",
    "\u009d\u0007:\u0002\u0002\u009d\u009f\u0005\u0014\u000b\u0002\u009e",
    "\u009c\u0003\u0002\u0002\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0",
    "\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1",
    "\r\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u00078\u0002\u0002\u00a4\u00a5\u0005L\'\u0002\u00a5\u00a6\u0007",
    "9\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7\u00a8\u0005",
    "\u0010\t\u0002\u00a8\u000f\u0003\u0002\u0002\u0002\u00a9\u00aa\t\u0002",
    "\u0002\u0002\u00aa\u00ab\u00078\u0002\u0002\u00ab\u00ac\u0005P)\u0002",
    "\u00ac\u00b4\u00079\u0002\u0002\u00ad\u00ae\u0007:\u0002\u0002\u00ae",
    "\u00af\u00078\u0002\u0002\u00af\u00b0\u0005P)\u0002\u00b0\u00b1\u0007",
    "9\u0002\u0002\u00b1\u00b3\u0003\u0002\u0002\u0002\u00b2\u00ad\u0003",
    "\u0002\u0002\u0002\u00b3\u00b6\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003",
    "\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u0011\u0003",
    "\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007",
    "\"\u0002\u0002\u00b8\u00b9\u0005$\u0013\u0002\u00b9\u00ba\u0007 \u0002",
    "\u0002\u00ba\u00bf\u0005\u0014\u000b\u0002\u00bb\u00bc\u0007:\u0002",
    "\u0002\u00bc\u00be\u0005\u0014\u000b\u0002\u00bd\u00bb\u0003\u0002\u0002",
    "\u0002\u00be\u00c1\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002",
    "\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0\u00c4\u0003\u0002\u0002",
    "\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007%\u0002",
    "\u0002\u00c3\u00c5\u0005R*\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002",
    "\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c7\u0003\u0002\u0002\u0002",
    "\u00c6\u00c8\u0005 \u0011\u0002\u00c7\u00c6\u0003\u0002\u0002\u0002",
    "\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8\u00ca\u0003\u0002\u0002\u0002",
    "\u00c9\u00cb\u0005&\u0014\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002",
    "\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u0013\u0003\u0002\u0002\u0002",
    "\u00cc\u00cd\u0005,\u0017\u0002\u00cd\u00d0\u0007/\u0002\u0002\u00ce",
    "\u00d1\u0005\\/\u0002\u00cf\u00d1\u0007\f\u0002\u0002\u00d0\u00ce\u0003",
    "\u0002\u0002\u0002\u00d0\u00cf\u0003\u0002\u0002\u0002\u00d1\u0015\u0003",
    "\u0002\u0002\u0002\u00d2\u00d3\u0007\r\u0002\u0002\u00d3\u00d4\u0007",
    "\u0010\u0002\u0002\u00d4\u00d7\u0005$\u0013\u0002\u00d5\u00d6\u0007",
    "%\u0002\u0002\u00d6\u00d8\u0005R*\u0002\u00d7\u00d5\u0003\u0002\u0002",
    "\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00da\u0003\u0002\u0002",
    "\u0002\u00d9\u00db\u0005 \u0011\u0002\u00da\u00d9\u0003\u0002\u0002",
    "\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db\u00dd\u0003\u0002\u0002",
    "\u0002\u00dc\u00de\u0005&\u0014\u0002\u00dd\u00dc\u0003\u0002\u0002",
    "\u0002\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u0017\u0003\u0002\u0002",
    "\u0002\u00df\u00e0\u0007\u001f\u0002\u0002\u00e0\u00e8\u0005\u001a\u000e",
    "\u0002\u00e1\u00e3\u0005\u001e\u0010\u0002\u00e2\u00e4\u0005 \u0011",
    "\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002",
    "\u0002\u00e4\u00e6\u0003\u0002\u0002\u0002\u00e5\u00e7\u0005&\u0014",
    "\u0002\u00e6\u00e5\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002",
    "\u0002\u00e7\u00e9\u0003\u0002\u0002\u0002\u00e8\u00e1\u0003\u0002\u0002",
    "\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e9\u0019\u0003\u0002\u0002",
    "\u0002\u00ea\u00f8\u0007\'\u0002\u0002\u00eb\u00f0\u0005\u001c\u000f",
    "\u0002\u00ec\u00ed\u0007:\u0002\u0002\u00ed\u00ef\u0005\u001c\u000f",
    "\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef\u00f2\u0003\u0002\u0002",
    "\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002",
    "\u0002\u00f1\u00f5\u0003\u0002\u0002\u0002\u00f2\u00f0\u0003\u0002\u0002",
    "\u0002\u00f3\u00f4\u0007:\u0002\u0002\u00f4\u00f6\u0007\'\u0002\u0002",
    "\u00f5\u00f3\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002",
    "\u00f6\u00f8\u0003\u0002\u0002\u0002\u00f7\u00ea\u0003\u0002\u0002\u0002",
    "\u00f7\u00eb\u0003\u0002\u0002\u0002\u00f8\u001b\u0003\u0002\u0002\u0002",
    "\u00f9\u00fa\u0005(\u0015\u0002\u00fa\u00fb\u00077\u0002\u0002\u00fb",
    "\u00fc\u0007\'\u0002\u0002\u00fc\u010c\u0003\u0002\u0002\u0002\u00fd",
    "\u0102\u0005,\u0017\u0002\u00fe\u0100\u0007\b\u0002\u0002\u00ff\u00fe",
    "\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002\u0002\u0100\u0101",
    "\u0003\u0002\u0002\u0002\u0101\u0103\u0005.\u0018\u0002\u0102\u00ff",
    "\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002\u0103\u010c",
    "\u0003\u0002\u0002\u0002\u0104\u0109\u0005H%\u0002\u0105\u0107\u0007",
    "\b\u0002\u0002\u0106\u0105\u0003\u0002\u0002\u0002\u0106\u0107\u0003",
    "\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u010a\u0005",
    ".\u0018\u0002\u0109\u0106\u0003\u0002\u0002\u0002\u0109\u010a\u0003",
    "\u0002\u0002\u0002\u010a\u010c\u0003\u0002\u0002\u0002\u010b\u00f9\u0003",
    "\u0002\u0002\u0002\u010b\u00fd\u0003\u0002\u0002\u0002\u010b\u0104\u0003",
    "\u0002\u0002\u0002\u010c\u001d\u0003\u0002\u0002\u0002\u010d\u010e\u0007",
    "\u0010\u0002\u0002\u010e\u0111\u0005$\u0013\u0002\u010f\u0110\u0007",
    "%\u0002\u0002\u0110\u0112\u0005R*\u0002\u0111\u010f\u0003\u0002\u0002",
    "\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112\u001f\u0003\u0002\u0002",
    "\u0002\u0113\u0114\u0007\u001c\u0002\u0002\u0114\u0115\u0007\u000b\u0002",
    "\u0002\u0115\u011a\u0005\"\u0012\u0002\u0116\u0117\u0007:\u0002\u0002",
    "\u0117\u0119\u0005\"\u0012\u0002\u0118\u0116\u0003\u0002\u0002\u0002",
    "\u0119\u011c\u0003\u0002\u0002\u0002\u011a\u0118\u0003\u0002\u0002\u0002",
    "\u011a\u011b\u0003\u0002\u0002\u0002\u011b!\u0003\u0002\u0002\u0002",
    "\u011c\u011a\u0003\u0002\u0002\u0002\u011d\u011f\u0005,\u0017\u0002",
    "\u011e\u0120\t\u0003\u0002\u0002\u011f\u011e\u0003\u0002\u0002\u0002",
    "\u011f\u0120\u0003\u0002\u0002\u0002\u0120#\u0003\u0002\u0002\u0002",
    "\u0121\u0126\u0005*\u0016\u0002\u0122\u0124\u0007\b\u0002\u0002\u0123",
    "\u0122\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002\u0124",
    "\u0125\u0003\u0002\u0002\u0002\u0125\u0127\u0005.\u0018\u0002\u0126",
    "\u0123\u0003\u0002\u0002\u0002\u0126\u0127\u0003\u0002\u0002\u0002\u0127",
    "\u012b\u0003\u0002\u0002\u0002\u0128\u0129\u0007&\u0002\u0002\u0129",
    "\u012a\u0007\u0015\u0002\u0002\u012a\u012c\u0005,\u0017\u0002\u012b",
    "\u0128\u0003\u0002\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c",
    "%\u0003\u0002\u0002\u0002\u012d\u0138\u0007\u0017\u0002\u0002\u012e",
    "\u012f\u0005<\u001f\u0002\u012f\u0130\u0007:\u0002\u0002\u0130\u0132",
    "\u0003\u0002\u0002\u0002\u0131\u012e\u0003\u0002\u0002\u0002\u0131\u0132",
    "\u0003\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u0133\u0139",
    "\u0005<\u001f\u0002\u0134\u0135\u0005<\u001f\u0002\u0135\u0136\u0007",
    "\u001a\u0002\u0002\u0136\u0137\u0005<\u001f\u0002\u0137\u0139\u0003",
    "\u0002\u0002\u0002\u0138\u0131\u0003\u0002\u0002\u0002\u0138\u0134\u0003",
    "\u0002\u0002\u0002\u0139\'\u0003\u0002\u0002\u0002\u013a\u0140\u0005",
    ".\u0018\u0002\u013b\u013f\u00058\u001d\u0002\u013c\u013d\u00077\u0002",
    "\u0002\u013d\u013f\u0005.\u0018\u0002\u013e\u013b\u0003\u0002\u0002",
    "\u0002\u013e\u013c\u0003\u0002\u0002\u0002\u013f\u0142\u0003\u0002\u0002",
    "\u0002\u0140\u013e\u0003\u0002\u0002\u0002\u0140\u0141\u0003\u0002\u0002",
    "\u0002\u0141)\u0003\u0002\u0002\u0002\u0142\u0140\u0003\u0002\u0002",
    "\u0002\u0143\u0144\u0005(\u0015\u0002\u0144+\u0003\u0002\u0002\u0002",
    "\u0145\u0149\u0005.\u0018\u0002\u0146\u0148\u0005:\u001e\u0002\u0147",
    "\u0146\u0003\u0002\u0002\u0002\u0148\u014b\u0003\u0002\u0002\u0002\u0149",
    "\u0147\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014a",
    "-\u0003\u0002\u0002\u0002\u014b\u0149\u0003\u0002\u0002\u0002\u014c",
    "\u0151\u00056\u001c\u0002\u014d\u0151\u00050\u0019\u0002\u014e\u0151",
    "\u00052\u001a\u0002\u014f\u0151\u00054\u001b\u0002\u0150\u014c\u0003",
    "\u0002\u0002\u0002\u0150\u014d\u0003\u0002\u0002\u0002\u0150\u014e\u0003",
    "\u0002\u0002\u0002\u0150\u014f\u0003\u0002\u0002\u0002\u0151/\u0003",
    "\u0002\u0002\u0002\u0152\u0153\u0007N\u0002\u0002\u01531\u0003\u0002",
    "\u0002\u0002\u0154\u0155\u0007O\u0002\u0002\u01553\u0003\u0002\u0002",
    "\u0002\u0156\u0157\u0007P\u0002\u0002\u01575\u0003\u0002\u0002\u0002",
    "\u0158\u0159\u0007M\u0002\u0002\u01597\u0003\u0002\u0002\u0002\u015a",
    "\u015b\u0007L\u0002\u0002\u015b9\u0003\u0002\u0002\u0002\u015c\u0160",
    "\u00058\u001d\u0002\u015d\u015e\u00077\u0002\u0002\u015e\u0160\u0005",
    ".\u0018\u0002\u015f\u015c\u0003\u0002\u0002\u0002\u015f\u015d\u0003",
    "\u0002\u0002\u0002\u0160;\u0003\u0002\u0002\u0002\u0161\u0162\t\u0004",
    "\u0002\u0002\u0162=\u0003\u0002\u0002\u0002\u0163\u0164\u0007F\u0002",
    "\u0002\u0164?\u0003\u0002\u0002\u0002\u0165\u0166\t\u0005\u0002\u0002",
    "\u0166A\u0003\u0002\u0002\u0002\u0167\u0168\u0007H\u0002\u0002\u0168",
    "C\u0003\u0002\u0002\u0002\u0169\u0171\u0003\u0002\u0002\u0002\u016a",
    "\u0171\u0005<\u001f\u0002\u016b\u016c\u0007,\u0002\u0002\u016c\u0171",
    "\u0005<\u001f\u0002\u016d\u0171\u0007I\u0002\u0002\u016e\u016f\u0007",
    ",\u0002\u0002\u016f\u0171\u0007I\u0002\u0002\u0170\u0169\u0003\u0002",
    "\u0002\u0002\u0170\u016a\u0003\u0002\u0002\u0002\u0170\u016b\u0003\u0002",
    "\u0002\u0002\u0170\u016d\u0003\u0002\u0002\u0002\u0170\u016e\u0003\u0002",
    "\u0002\u0002\u0171E\u0003\u0002\u0002\u0002\u0172\u0173\t\u0006\u0002",
    "\u0002\u0173G\u0003\u0002\u0002\u0002\u0174\u017a\u0005> \u0002\u0175",
    "\u017a\u0005D#\u0002\u0176\u017a\u0005B\"\u0002\u0177\u017a\u0005@!",
    "\u0002\u0178\u017a\u0005F$\u0002\u0179\u0174\u0003\u0002\u0002\u0002",
    "\u0179\u0175\u0003\u0002\u0002\u0002\u0179\u0176\u0003\u0002\u0002\u0002",
    "\u0179\u0177\u0003\u0002\u0002\u0002\u0179\u0178\u0003\u0002\u0002\u0002",
    "\u017aI\u0003\u0002\u0002\u0002\u017b\u017e\u0005H%\u0002\u017c\u017e",
    "\u0007\f\u0002\u0002\u017d\u017b\u0003\u0002\u0002\u0002\u017d\u017c",
    "\u0003\u0002\u0002\u0002\u017eK\u0003\u0002\u0002\u0002\u017f\u0184",
    "\u0005,\u0017\u0002\u0180\u0181\u0007:\u0002\u0002\u0181\u0183\u0005",
    ",\u0017\u0002\u0182\u0180\u0003\u0002\u0002\u0002\u0183\u0186\u0003",
    "\u0002\u0002\u0002\u0184\u0182\u0003\u0002\u0002\u0002\u0184\u0185\u0003",
    "\u0002\u0002\u0002\u0185M\u0003\u0002\u0002\u0002\u0186\u0184\u0003",
    "\u0002\u0002\u0002\u0187\u018c\u0005H%\u0002\u0188\u0189\u0007:\u0002",
    "\u0002\u0189\u018b\u0005H%\u0002\u018a\u0188\u0003\u0002\u0002\u0002",
    "\u018b\u018e\u0003\u0002\u0002\u0002\u018c\u018a\u0003\u0002\u0002\u0002",
    "\u018c\u018d\u0003\u0002\u0002\u0002\u018dO\u0003\u0002\u0002\u0002",
    "\u018e\u018c\u0003\u0002\u0002\u0002\u018f\u0194\u0005J&\u0002\u0190",
    "\u0191\u0007:\u0002\u0002\u0191\u0193\u0005J&\u0002\u0192\u0190\u0003",
    "\u0002\u0002\u0002\u0193\u0196\u0003\u0002\u0002\u0002\u0194\u0192\u0003",
    "\u0002\u0002\u0002\u0194\u0195\u0003\u0002\u0002\u0002\u0195Q\u0003",
    "\u0002\u0002\u0002\u0196\u0194\u0003\u0002\u0002\u0002\u0197\u0198\u0005",
    "T+\u0002\u0198S\u0003\u0002\u0002\u0002\u0199\u019a\b+\u0001\u0002\u019a",
    "\u019b\t\u0007\u0002\u0002\u019b\u019e\u0005T+\u0005\u019c\u019e\u0005",
    "V,\u0002\u019d\u0199\u0003\u0002\u0002\u0002\u019d\u019c\u0003\u0002",
    "\u0002\u0002\u019e\u01a5\u0003\u0002\u0002\u0002\u019f\u01a0\f\u0004",
    "\u0002\u0002\u01a0\u01a1\u0005b2\u0002\u01a1\u01a2\u0005T+\u0005\u01a2",
    "\u01a4\u0003\u0002\u0002\u0002\u01a3\u019f\u0003\u0002\u0002\u0002\u01a4",
    "\u01a7\u0003\u0002\u0002\u0002\u01a5\u01a3\u0003\u0002\u0002\u0002\u01a5",
    "\u01a6\u0003\u0002\u0002\u0002\u01a6U\u0003\u0002\u0002\u0002\u01a7",
    "\u01a5\u0003\u0002\u0002\u0002\u01a8\u01aa\u0005Z.\u0002\u01a9\u01ab",
    "\u0007\u0018\u0002\u0002\u01aa\u01a9\u0003\u0002\u0002\u0002\u01aa\u01ab",
    "\u0003\u0002\u0002\u0002\u01ab\u01ac\u0003\u0002\u0002\u0002\u01ac\u01ad",
    "\u0007\u0011\u0002\u0002\u01ad\u01ae\u00078\u0002\u0002\u01ae\u01af",
    "\u0005X-\u0002\u01af\u01b0\u00079\u0002\u0002\u01b0\u01d5\u0003\u0002",
    "\u0002\u0002\u01b1\u01b2\u0005Z.\u0002\u01b2\u01b4\u0007\u0014\u0002",
    "\u0002\u01b3\u01b5\u0007\u0018\u0002\u0002\u01b4\u01b3\u0003\u0002\u0002",
    "\u0002\u01b4\u01b5\u0003\u0002\u0002\u0002\u01b5\u01b6\u0003\u0002\u0002",
    "\u0002\u01b6\u01b7\u0005F$\u0002\u01b7\u01d5\u0003\u0002\u0002\u0002",
    "\u01b8\u01b9\u0005Z.\u0002\u01b9\u01ba\u0005`1\u0002\u01ba\u01bb\u0005",
    "Z.\u0002\u01bb\u01d5\u0003\u0002\u0002\u0002\u01bc\u01be\u0005Z.\u0002",
    "\u01bd\u01bf\u0007\u0018\u0002\u0002\u01be\u01bd\u0003\u0002\u0002\u0002",
    "\u01be\u01bf\u0003\u0002\u0002\u0002\u01bf\u01c0\u0003\u0002\u0002\u0002",
    "\u01c0\u01c1\u0007\n\u0002\u0002\u01c1\u01c2\u0005H%\u0002\u01c2\u01c3",
    "\u0007\u0007\u0002\u0002\u01c3\u01c4\u0005H%\u0002\u01c4\u01d5\u0003",
    "\u0002\u0002\u0002\u01c5\u01c7\u0005Z.\u0002\u01c6\u01c8\u0007\u0018",
    "\u0002\u0002\u01c7\u01c6\u0003\u0002\u0002\u0002\u01c7\u01c8\u0003\u0002",
    "\u0002\u0002\u01c8\u01c9\u0003\u0002\u0002\u0002\u01c9\u01ca\u0007\u0016",
    "\u0002\u0002\u01ca\u01cb\u0005> \u0002\u01cb\u01d5\u0003\u0002\u0002",
    "\u0002\u01cc\u01ce\u0005Z.\u0002\u01cd\u01cf\u0007\u0018\u0002\u0002",
    "\u01ce\u01cd\u0003\u0002\u0002\u0002\u01ce\u01cf\u0003\u0002\u0002\u0002",
    "\u01cf\u01d0\u0003\u0002\u0002\u0002\u01d0\u01d1\t\b\u0002\u0002\u01d1",
    "\u01d2\u0005> \u0002\u01d2\u01d5\u0003\u0002\u0002\u0002\u01d3\u01d5",
    "\u0005^0\u0002\u01d4\u01a8\u0003\u0002\u0002\u0002\u01d4\u01b1\u0003",
    "\u0002\u0002\u0002\u01d4\u01b8\u0003\u0002\u0002\u0002\u01d4\u01bc\u0003",
    "\u0002\u0002\u0002\u01d4\u01c5\u0003\u0002\u0002\u0002\u01d4\u01cc\u0003",
    "\u0002\u0002\u0002\u01d4\u01d3\u0003\u0002\u0002\u0002\u01d5W\u0003",
    "\u0002\u0002\u0002\u01d6\u01db\u0005H%\u0002\u01d7\u01d8\u0007:\u0002",
    "\u0002\u01d8\u01da\u0005H%\u0002\u01d9\u01d7\u0003\u0002\u0002\u0002",
    "\u01da\u01dd\u0003\u0002\u0002\u0002\u01db\u01d9\u0003\u0002\u0002\u0002",
    "\u01db\u01dc\u0003\u0002\u0002\u0002\u01dcY\u0003\u0002\u0002\u0002",
    "\u01dd\u01db\u0003\u0002\u0002\u0002\u01de\u01df\u0005\\/\u0002\u01df",
    "[\u0003\u0002\u0002\u0002\u01e0\u01e3\u0005H%\u0002\u01e1\u01e3\u0005",
    ",\u0017\u0002\u01e2\u01e0\u0003\u0002\u0002\u0002\u01e2\u01e1\u0003",
    "\u0002\u0002\u0002\u01e3]\u0003\u0002\u0002\u0002\u01e4\u01eb\u0005",
    "H%\u0002\u01e5\u01eb\u0005,\u0017\u0002\u01e6\u01e7\u00078\u0002\u0002",
    "\u01e7\u01e8\u0005T+\u0002\u01e8\u01e9\u00079\u0002\u0002\u01e9\u01eb",
    "\u0003\u0002\u0002\u0002\u01ea\u01e4\u0003\u0002\u0002\u0002\u01ea\u01e5",
    "\u0003\u0002\u0002\u0002\u01ea\u01e6\u0003\u0002\u0002\u0002\u01eb_",
    "\u0003\u0002\u0002\u0002\u01ec\u01f8\u0007/\u0002\u0002\u01ed\u01f8",
    "\u00070\u0002\u0002\u01ee\u01f8\u00071\u0002\u0002\u01ef\u01f0\u0007",
    "1\u0002\u0002\u01f0\u01f8\u0007/\u0002\u0002\u01f1\u01f2\u00070\u0002",
    "\u0002\u01f2\u01f8\u0007/\u0002\u0002\u01f3\u01f4\u00071\u0002\u0002",
    "\u01f4\u01f8\u00070\u0002\u0002\u01f5\u01f6\u00072\u0002\u0002\u01f6",
    "\u01f8\u0007/\u0002\u0002\u01f7\u01ec\u0003\u0002\u0002\u0002\u01f7",
    "\u01ed\u0003\u0002\u0002\u0002\u01f7\u01ee\u0003\u0002\u0002\u0002\u01f7",
    "\u01ef\u0003\u0002\u0002\u0002\u01f7\u01f1\u0003\u0002\u0002\u0002\u01f7",
    "\u01f3\u0003\u0002\u0002\u0002\u01f7\u01f5\u0003\u0002\u0002\u0002\u01f8",
    "a\u0003\u0002\u0002\u0002\u01f9\u0200\u0007\u0007\u0002\u0002\u01fa",
    "\u01fb\u00075\u0002\u0002\u01fb\u0200\u00075\u0002\u0002\u01fc\u0200",
    "\u0007\u001b\u0002\u0002\u01fd\u01fe\u00074\u0002\u0002\u01fe\u0200",
    "\u00074\u0002\u0002\u01ff\u01f9\u0003\u0002\u0002\u0002\u01ff\u01fa",
    "\u0003\u0002\u0002\u0002\u01ff\u01fc\u0003\u0002\u0002\u0002\u01ff\u01fd",
    "\u0003\u0002\u0002\u0002\u0200c\u0003\u0002\u0002\u0002Dhkqtwy~\u0081",
    "\u0084\u008a\u008e\u0094\u0098\u00a0\u00b4\u00bf\u00c4\u00c7\u00ca\u00d0",
    "\u00d7\u00da\u00dd\u00e3\u00e6\u00e8\u00f0\u00f5\u00f7\u00ff\u0102\u0106",
    "\u0109\u010b\u0111\u011a\u011f\u0123\u0126\u012b\u0131\u0138\u013e\u0140",
    "\u0149\u0150\u015f\u0170\u0179\u017d\u0184\u018c\u0194\u019d\u01a5\u01aa",
    "\u01b4\u01be\u01c7\u01ce\u01d4\u01db\u01e2\u01ea\u01f7\u01ff"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'AND'", "'AS'", "'ASC'", 
                     "'BETWEEN'", "'BY'", "'DEFAULT'", "'DELETE'", "'DESC'", 
                     "'FALSE'", "'FROM'", "'IN'", "'INSERT'", "'INTO'", 
                     "'IS'", "'KEY'", "'LIKE'", "'LIMIT'", "'NOT'", "'NULL'", 
                     "'OFFSET'", "'OR'", "'ORDER'", "'REGEXP'", "'RLIKE'", 
                     "'SELECT'", "'SET'", "'TRUE'", "'UPDATE'", "'VALUE'", 
                     "'VALUES'", "'WHERE'", "'WITH'", "'*'", "'/'", "'%'", 
                     "'+'", "'--'", "'-'", "'DIV'", "'MOD'", "'='", "'>'", 
                     "'<'", "'!'", "'~'", "'|'", "'&'", "'^'", "'.'", "'('", 
                     "')'", "','", "';'", "'@'", "'0'", "'1'", "'2'", "'''", 
                     "'\"'", "'`'", "':'" ];

var symbolicNames = [ null, "SPACE", "SPEC_MYSQL_COMMENT", "COMMENT_INPUT", 
                      "LINE_COMMENT", "AND", "AS", "ASC", "BETWEEN", "BY", 
                      "DEFAULT", "DELETE", "DESC", "FALSE", "FROM", "IN", 
                      "INSERT", "INTO", "IS", "KEY", "LIKE", "LIMIT", "NOT", 
                      "NULL_LITERAL", "OFFSET", "OR", "ORDER", "REGEXP", 
                      "RLIKE", "SELECT", "SET", "TRUE", "UPDATE", "VALUE", 
                      "VALUES", "WHERE", "WITH", "STAR", "DIVIDE", "MODULE", 
                      "PLUS", "MINUSMINUS", "MINUS", "DIV", "MOD", "EQUAL_SYMBOL", 
                      "GREATER_SYMBOL", "LESS_SYMBOL", "EXCLAMATION_SYMBOL", 
                      "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", 
                      "DOT", "LR_BRACKET", "RR_BRACKET", "COMMA", "SEMI", 
                      "AT_SIGN", "ZERO_DECIMAL", "ONE_DECIMAL", "TWO_DECIMAL", 
                      "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", "REVERSE_QUOTE_SYMB", 
                      "COLON_SYMB", "FILESIZE_LITERAL", "START_NATIONAL_STRING_LITERAL", 
                      "STRING_LITERAL", "DECIMAL_LITERAL", "HEXADECIMAL_LITERAL", 
                      "REAL_LITERAL", "NULL_SPEC_LITERAL", "BIT_STRING", 
                      "DOT_ID", "ID", "DOUBLE_QUOTE_ID", "REVERSE_QUOTE_ID", 
                      "BLOCKED_QUOTE_ID", "STRING_USER_NAME", "LOCAL_ID", 
                      "GLOBAL_ID", "ERROR_RECONGNIGION" ];

var ruleNames =  [ "program", "statement", "sqlStatements", "sqlStatement", 
                   "insertStatement", "insertStatementSetValues", "insertStatementValues", 
                   "insertStatementValue", "updateStatement", "updatedElement", 
                   "deleteStatement", "selectStatement", "selectElements", 
                   "selectElement", "fromClause", "orderByClause", "orderByExpression", 
                   "tableSource", "limitClause", "fullId", "tableName", 
                   "fullColumnName", "uid", "doubleQuoteId", "reverseQuoteId", 
                   "blockedQuoteId", "simpleId", "dotLiteral", "dottedId", 
                   "decimalLiteral", "stringLiteral", "booleanLiteral", 
                   "hexadecimalLiteral", "constNumberLiteral", "nullLiteral", 
                   "constant", "constantOrDefault", "fullColumnNameList", 
                   "constants", "constantsOrDefaults", "whereExpression", 
                   "expression", "predicate", "constantAtoms", "predicateOperand", 
                   "constOrColumnAtom", "expressionAtom", "comparisonOperator", 
                   "logicalOperator" ];

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
SqlParser.AND = 5;
SqlParser.AS = 6;
SqlParser.ASC = 7;
SqlParser.BETWEEN = 8;
SqlParser.BY = 9;
SqlParser.DEFAULT = 10;
SqlParser.DELETE = 11;
SqlParser.DESC = 12;
SqlParser.FALSE = 13;
SqlParser.FROM = 14;
SqlParser.IN = 15;
SqlParser.INSERT = 16;
SqlParser.INTO = 17;
SqlParser.IS = 18;
SqlParser.KEY = 19;
SqlParser.LIKE = 20;
SqlParser.LIMIT = 21;
SqlParser.NOT = 22;
SqlParser.NULL_LITERAL = 23;
SqlParser.OFFSET = 24;
SqlParser.OR = 25;
SqlParser.ORDER = 26;
SqlParser.REGEXP = 27;
SqlParser.RLIKE = 28;
SqlParser.SELECT = 29;
SqlParser.SET = 30;
SqlParser.TRUE = 31;
SqlParser.UPDATE = 32;
SqlParser.VALUE = 33;
SqlParser.VALUES = 34;
SqlParser.WHERE = 35;
SqlParser.WITH = 36;
SqlParser.STAR = 37;
SqlParser.DIVIDE = 38;
SqlParser.MODULE = 39;
SqlParser.PLUS = 40;
SqlParser.MINUSMINUS = 41;
SqlParser.MINUS = 42;
SqlParser.DIV = 43;
SqlParser.MOD = 44;
SqlParser.EQUAL_SYMBOL = 45;
SqlParser.GREATER_SYMBOL = 46;
SqlParser.LESS_SYMBOL = 47;
SqlParser.EXCLAMATION_SYMBOL = 48;
SqlParser.BIT_NOT_OP = 49;
SqlParser.BIT_OR_OP = 50;
SqlParser.BIT_AND_OP = 51;
SqlParser.BIT_XOR_OP = 52;
SqlParser.DOT = 53;
SqlParser.LR_BRACKET = 54;
SqlParser.RR_BRACKET = 55;
SqlParser.COMMA = 56;
SqlParser.SEMI = 57;
SqlParser.AT_SIGN = 58;
SqlParser.ZERO_DECIMAL = 59;
SqlParser.ONE_DECIMAL = 60;
SqlParser.TWO_DECIMAL = 61;
SqlParser.SINGLE_QUOTE_SYMB = 62;
SqlParser.DOUBLE_QUOTE_SYMB = 63;
SqlParser.REVERSE_QUOTE_SYMB = 64;
SqlParser.COLON_SYMB = 65;
SqlParser.FILESIZE_LITERAL = 66;
SqlParser.START_NATIONAL_STRING_LITERAL = 67;
SqlParser.STRING_LITERAL = 68;
SqlParser.DECIMAL_LITERAL = 69;
SqlParser.HEXADECIMAL_LITERAL = 70;
SqlParser.REAL_LITERAL = 71;
SqlParser.NULL_SPEC_LITERAL = 72;
SqlParser.BIT_STRING = 73;
SqlParser.DOT_ID = 74;
SqlParser.ID = 75;
SqlParser.DOUBLE_QUOTE_ID = 76;
SqlParser.REVERSE_QUOTE_ID = 77;
SqlParser.BLOCKED_QUOTE_ID = 78;
SqlParser.STRING_USER_NAME = 79;
SqlParser.LOCAL_ID = 80;
SqlParser.GLOBAL_ID = 81;
SqlParser.ERROR_RECONGNIGION = 82;

SqlParser.RULE_program = 0;
SqlParser.RULE_statement = 1;
SqlParser.RULE_sqlStatements = 2;
SqlParser.RULE_sqlStatement = 3;
SqlParser.RULE_insertStatement = 4;
SqlParser.RULE_insertStatementSetValues = 5;
SqlParser.RULE_insertStatementValues = 6;
SqlParser.RULE_insertStatementValue = 7;
SqlParser.RULE_updateStatement = 8;
SqlParser.RULE_updatedElement = 9;
SqlParser.RULE_deleteStatement = 10;
SqlParser.RULE_selectStatement = 11;
SqlParser.RULE_selectElements = 12;
SqlParser.RULE_selectElement = 13;
SqlParser.RULE_fromClause = 14;
SqlParser.RULE_orderByClause = 15;
SqlParser.RULE_orderByExpression = 16;
SqlParser.RULE_tableSource = 17;
SqlParser.RULE_limitClause = 18;
SqlParser.RULE_fullId = 19;
SqlParser.RULE_tableName = 20;
SqlParser.RULE_fullColumnName = 21;
SqlParser.RULE_uid = 22;
SqlParser.RULE_doubleQuoteId = 23;
SqlParser.RULE_reverseQuoteId = 24;
SqlParser.RULE_blockedQuoteId = 25;
SqlParser.RULE_simpleId = 26;
SqlParser.RULE_dotLiteral = 27;
SqlParser.RULE_dottedId = 28;
SqlParser.RULE_decimalLiteral = 29;
SqlParser.RULE_stringLiteral = 30;
SqlParser.RULE_booleanLiteral = 31;
SqlParser.RULE_hexadecimalLiteral = 32;
SqlParser.RULE_constNumberLiteral = 33;
SqlParser.RULE_nullLiteral = 34;
SqlParser.RULE_constant = 35;
SqlParser.RULE_constantOrDefault = 36;
SqlParser.RULE_fullColumnNameList = 37;
SqlParser.RULE_constants = 38;
SqlParser.RULE_constantsOrDefaults = 39;
SqlParser.RULE_whereExpression = 40;
SqlParser.RULE_expression = 41;
SqlParser.RULE_predicate = 42;
SqlParser.RULE_constantAtoms = 43;
SqlParser.RULE_predicateOperand = 44;
SqlParser.RULE_constOrColumnAtom = 45;
SqlParser.RULE_expressionAtom = 46;
SqlParser.RULE_comparisonOperator = 47;
SqlParser.RULE_logicalOperator = 48;


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
        this.state = 98;
        this.statement();
        this.state = 99;
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
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SqlParser.DELETE) | (1 << SqlParser.INSERT) | (1 << SqlParser.SELECT))) !== 0) || _la===SqlParser.UPDATE || _la===SqlParser.SEMI) {
            this.state = 101;
            this.sqlStatements();
        }

        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.MINUSMINUS) {
            this.state = 104;
            this.match(SqlParser.MINUSMINUS);
        }

        this.state = 107;
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
        this.state = 119;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 117;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case SqlParser.DELETE:
                case SqlParser.INSERT:
                case SqlParser.SELECT:
                case SqlParser.UPDATE:
                    this.state = 109;
                    this.sqlStatement();
                    this.state = 111;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===SqlParser.MINUSMINUS) {
                        this.state = 110;
                        this.match(SqlParser.MINUSMINUS);
                    }

                    this.state = 114;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                    if(la_===1) {
                        this.state = 113;
                        this.match(SqlParser.SEMI);

                    }
                    break;
                case SqlParser.SEMI:
                    this.state = 116;
                    this.match(SqlParser.SEMI);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                } 
            }
            this.state = 121;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

        this.state = 130;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.DELETE:
        case SqlParser.INSERT:
        case SqlParser.SELECT:
        case SqlParser.UPDATE:
            this.state = 122;
            this.sqlStatement();
            this.state = 127;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            if(la_===1) {
                this.state = 124;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===SqlParser.MINUSMINUS) {
                    this.state = 123;
                    this.match(SqlParser.MINUSMINUS);
                }

                this.state = 126;
                this.match(SqlParser.SEMI);

            }
            break;
        case SqlParser.SEMI:
            this.state = 129;
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
        this.state = 136;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.SELECT:
            this.enterOuterAlt(localctx, 1);
            this.state = 132;
            this.selectStatement();
            break;
        case SqlParser.INSERT:
            this.enterOuterAlt(localctx, 2);
            this.state = 133;
            this.insertStatement();
            break;
        case SqlParser.UPDATE:
            this.enterOuterAlt(localctx, 3);
            this.state = 134;
            this.updateStatement();
            break;
        case SqlParser.DELETE:
            this.enterOuterAlt(localctx, 4);
            this.state = 135;
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
    this.table = null; // TableNameContext
    this.identifier = null; // FullColumnNameContext
    this.valueSet = null; // InsertStatementSetValuesContext
    this.values = null; // InsertStatementValuesContext
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

InsertStatementContext.prototype.INTO = function() {
    return this.getToken(SqlParser.INTO, 0);
};

InsertStatementContext.prototype.WITH = function() {
    return this.getToken(SqlParser.WITH, 0);
};

InsertStatementContext.prototype.KEY = function() {
    return this.getToken(SqlParser.KEY, 0);
};

InsertStatementContext.prototype.insertStatementSetValues = function() {
    return this.getTypedRuleContext(InsertStatementSetValuesContext,0);
};

InsertStatementContext.prototype.insertStatementValues = function() {
    return this.getTypedRuleContext(InsertStatementValuesContext,0);
};

InsertStatementContext.prototype.fullColumnName = function() {
    return this.getTypedRuleContext(FullColumnNameContext,0);
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
        this.state = 138;
        this.match(SqlParser.INSERT);
        this.state = 140;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.INTO) {
            this.state = 139;
            this.match(SqlParser.INTO);
        }

        this.state = 142;
        localctx.table = this.tableName();
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.WITH) {
            this.state = 143;
            this.match(SqlParser.WITH);
            this.state = 144;
            this.match(SqlParser.KEY);
            this.state = 145;
            localctx.identifier = this.fullColumnName();
        }

        this.state = 150;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.SET:
            this.state = 148;
            localctx.valueSet = this.insertStatementSetValues();
            break;
        case SqlParser.LR_BRACKET:
            this.state = 149;
            localctx.values = this.insertStatementValues();
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


function InsertStatementSetValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_insertStatementSetValues;
    return this;
}

InsertStatementSetValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InsertStatementSetValuesContext.prototype.constructor = InsertStatementSetValuesContext;

InsertStatementSetValuesContext.prototype.SET = function() {
    return this.getToken(SqlParser.SET, 0);
};

InsertStatementSetValuesContext.prototype.updatedElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UpdatedElementContext);
    } else {
        return this.getTypedRuleContext(UpdatedElementContext,i);
    }
};

InsertStatementSetValuesContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.COMMA);
    } else {
        return this.getToken(SqlParser.COMMA, i);
    }
};


InsertStatementSetValuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitInsertStatementSetValues(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.InsertStatementSetValuesContext = InsertStatementSetValuesContext;

SqlParser.prototype.insertStatementSetValues = function() {

    var localctx = new InsertStatementSetValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SqlParser.RULE_insertStatementSetValues);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(SqlParser.SET);
        this.state = 153;
        this.updatedElement();
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 154;
            this.match(SqlParser.COMMA);
            this.state = 155;
            this.updatedElement();
            this.state = 160;
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


function InsertStatementValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_insertStatementValues;
    this.columns = null; // FullColumnNameListContext
    this.values = null; // InsertStatementValueContext
    return this;
}

InsertStatementValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InsertStatementValuesContext.prototype.constructor = InsertStatementValuesContext;

InsertStatementValuesContext.prototype.insertStatementValue = function() {
    return this.getTypedRuleContext(InsertStatementValueContext,0);
};

InsertStatementValuesContext.prototype.LR_BRACKET = function() {
    return this.getToken(SqlParser.LR_BRACKET, 0);
};

InsertStatementValuesContext.prototype.RR_BRACKET = function() {
    return this.getToken(SqlParser.RR_BRACKET, 0);
};

InsertStatementValuesContext.prototype.fullColumnNameList = function() {
    return this.getTypedRuleContext(FullColumnNameListContext,0);
};

InsertStatementValuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitInsertStatementValues(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.InsertStatementValuesContext = InsertStatementValuesContext;

SqlParser.prototype.insertStatementValues = function() {

    var localctx = new InsertStatementValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SqlParser.RULE_insertStatementValues);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(SqlParser.LR_BRACKET);
        this.state = 162;
        localctx.columns = this.fullColumnNameList();
        this.state = 163;
        this.match(SqlParser.RR_BRACKET);
        this.state = 165;
        localctx.values = this.insertStatementValue();
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
    this.enterRule(localctx, 14, SqlParser.RULE_insertStatementValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        _la = this._input.LA(1);
        if(!(_la===SqlParser.VALUE || _la===SqlParser.VALUES)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 168;
        this.match(SqlParser.LR_BRACKET);
        this.state = 169;
        this.constantsOrDefaults();
        this.state = 170;
        this.match(SqlParser.RR_BRACKET);
        this.state = 178;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 171;
            this.match(SqlParser.COMMA);
            this.state = 172;
            this.match(SqlParser.LR_BRACKET);
            this.state = 173;
            this.constantsOrDefaults();
            this.state = 174;
            this.match(SqlParser.RR_BRACKET);
            this.state = 180;
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
    this.table = null; // TableSourceContext
    this.whereExp = null; // WhereExpressionContext
    this.order = null; // OrderByClauseContext
    this.limit = null; // LimitClauseContext
    return this;
}

UpdateStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UpdateStatementContext.prototype.constructor = UpdateStatementContext;

UpdateStatementContext.prototype.UPDATE = function() {
    return this.getToken(SqlParser.UPDATE, 0);
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

UpdateStatementContext.prototype.tableSource = function() {
    return this.getTypedRuleContext(TableSourceContext,0);
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

UpdateStatementContext.prototype.whereExpression = function() {
    return this.getTypedRuleContext(WhereExpressionContext,0);
};

UpdateStatementContext.prototype.orderByClause = function() {
    return this.getTypedRuleContext(OrderByClauseContext,0);
};

UpdateStatementContext.prototype.limitClause = function() {
    return this.getTypedRuleContext(LimitClauseContext,0);
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
    this.enterRule(localctx, 16, SqlParser.RULE_updateStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(SqlParser.UPDATE);
        this.state = 182;
        localctx.table = this.tableSource();
        this.state = 183;
        this.match(SqlParser.SET);
        this.state = 184;
        this.updatedElement();
        this.state = 189;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 185;
            this.match(SqlParser.COMMA);
            this.state = 186;
            this.updatedElement();
            this.state = 191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 194;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.WHERE) {
            this.state = 192;
            this.match(SqlParser.WHERE);
            this.state = 193;
            localctx.whereExp = this.whereExpression();
        }

        this.state = 197;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.ORDER) {
            this.state = 196;
            localctx.order = this.orderByClause();
        }

        this.state = 200;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.LIMIT) {
            this.state = 199;
            localctx.limit = this.limitClause();
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
    this.isDefault = null; // Token
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
    this.enterRule(localctx, 18, SqlParser.RULE_updatedElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.fullColumnName();
        this.state = 203;
        this.match(SqlParser.EQUAL_SYMBOL);
        this.state = 206;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.EOF:
        case SqlParser.DELETE:
        case SqlParser.FALSE:
        case SqlParser.INSERT:
        case SqlParser.LIMIT:
        case SqlParser.NULL_LITERAL:
        case SqlParser.ORDER:
        case SqlParser.SELECT:
        case SqlParser.TRUE:
        case SqlParser.UPDATE:
        case SqlParser.WHERE:
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
        case SqlParser.ID:
        case SqlParser.DOUBLE_QUOTE_ID:
        case SqlParser.REVERSE_QUOTE_ID:
        case SqlParser.BLOCKED_QUOTE_ID:
            this.state = 204;
            this.constOrColumnAtom();
            break;
        case SqlParser.DEFAULT:
            this.state = 205;
            localctx.isDefault = this.match(SqlParser.DEFAULT);
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
    this.table = null; // TableSourceContext
    this.whereExp = null; // WhereExpressionContext
    this.order = null; // OrderByClauseContext
    this.limit = null; // LimitClauseContext
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

DeleteStatementContext.prototype.tableSource = function() {
    return this.getTypedRuleContext(TableSourceContext,0);
};

DeleteStatementContext.prototype.WHERE = function() {
    return this.getToken(SqlParser.WHERE, 0);
};

DeleteStatementContext.prototype.whereExpression = function() {
    return this.getTypedRuleContext(WhereExpressionContext,0);
};

DeleteStatementContext.prototype.orderByClause = function() {
    return this.getTypedRuleContext(OrderByClauseContext,0);
};

DeleteStatementContext.prototype.limitClause = function() {
    return this.getTypedRuleContext(LimitClauseContext,0);
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
    this.enterRule(localctx, 20, SqlParser.RULE_deleteStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(SqlParser.DELETE);
        this.state = 209;
        this.match(SqlParser.FROM);
        this.state = 210;
        localctx.table = this.tableSource();
        this.state = 213;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.WHERE) {
            this.state = 211;
            this.match(SqlParser.WHERE);
            this.state = 212;
            localctx.whereExp = this.whereExpression();
        }

        this.state = 216;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.ORDER) {
            this.state = 215;
            localctx.order = this.orderByClause();
        }

        this.state = 219;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.LIMIT) {
            this.state = 218;
            localctx.limit = this.limitClause();
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
    this.enterRule(localctx, 22, SqlParser.RULE_selectStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this.match(SqlParser.SELECT);
        this.state = 222;
        this.selectElements();
        this.state = 230;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.FROM) {
            this.state = 223;
            this.fromClause();
            this.state = 225;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.ORDER) {
                this.state = 224;
                this.orderByClause();
            }

            this.state = 228;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.LIMIT) {
                this.state = 227;
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
    this.enterRule(localctx, 24, SqlParser.RULE_selectElements);
    var _la = 0; // Token type
    try {
        this.state = 245;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.STAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 232;
            localctx.star = this.match(SqlParser.STAR);
            break;
        case SqlParser.EOF:
        case SqlParser.AS:
        case SqlParser.DELETE:
        case SqlParser.FALSE:
        case SqlParser.FROM:
        case SqlParser.INSERT:
        case SqlParser.NULL_LITERAL:
        case SqlParser.SELECT:
        case SqlParser.TRUE:
        case SqlParser.UPDATE:
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
        case SqlParser.ID:
        case SqlParser.DOUBLE_QUOTE_ID:
        case SqlParser.REVERSE_QUOTE_ID:
        case SqlParser.BLOCKED_QUOTE_ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 233;
            this.selectElement();
            this.state = 238;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 234;
                    this.match(SqlParser.COMMA);
                    this.state = 235;
                    this.selectElement(); 
                }
                this.state = 240;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
            }

            this.state = 243;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.COMMA) {
                this.state = 241;
                this.match(SqlParser.COMMA);
                this.state = 242;
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
    this.enterRule(localctx, 26, SqlParser.RULE_selectElement);
    var _la = 0; // Token type
    try {
        this.state = 265;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 247;
            localctx.starOf = this.fullId();
            this.state = 248;
            this.match(SqlParser.DOT);
            this.state = 249;
            this.match(SqlParser.STAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 251;
            localctx.column = this.fullColumnName();
            this.state = 256;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.AS || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (SqlParser.ID - 75)) | (1 << (SqlParser.DOUBLE_QUOTE_ID - 75)) | (1 << (SqlParser.REVERSE_QUOTE_ID - 75)) | (1 << (SqlParser.BLOCKED_QUOTE_ID - 75)))) !== 0)) {
                this.state = 253;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===SqlParser.AS) {
                    this.state = 252;
                    this.match(SqlParser.AS);
                }

                this.state = 255;
                localctx.alias = this.uid();
            }

            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 258;
            localctx.value = this.constant();
            this.state = 263;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.AS || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (SqlParser.ID - 75)) | (1 << (SqlParser.DOUBLE_QUOTE_ID - 75)) | (1 << (SqlParser.REVERSE_QUOTE_ID - 75)) | (1 << (SqlParser.BLOCKED_QUOTE_ID - 75)))) !== 0)) {
                this.state = 260;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===SqlParser.AS) {
                    this.state = 259;
                    this.match(SqlParser.AS);
                }

                this.state = 262;
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
    this.whereExp = null; // WhereExpressionContext
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

FromClauseContext.prototype.whereExpression = function() {
    return this.getTypedRuleContext(WhereExpressionContext,0);
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
    this.enterRule(localctx, 28, SqlParser.RULE_fromClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        this.match(SqlParser.FROM);
        this.state = 268;
        this.tableSource();
        this.state = 271;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.WHERE) {
            this.state = 269;
            this.match(SqlParser.WHERE);
            this.state = 270;
            localctx.whereExp = this.whereExpression();
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
    this.enterRule(localctx, 30, SqlParser.RULE_orderByClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(SqlParser.ORDER);
        this.state = 274;
        this.match(SqlParser.BY);
        this.state = 275;
        this.orderByExpression();
        this.state = 280;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 276;
            this.match(SqlParser.COMMA);
            this.state = 277;
            this.orderByExpression();
            this.state = 282;
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
    this.enterRule(localctx, 32, SqlParser.RULE_orderByExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        localctx.orderOn = this.fullColumnName();
        this.state = 285;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.ASC || _la===SqlParser.DESC) {
            this.state = 284;
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
    this.identifier = null; // FullColumnNameContext
    return this;
}

TableSourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableSourceContext.prototype.constructor = TableSourceContext;

TableSourceContext.prototype.tableName = function() {
    return this.getTypedRuleContext(TableNameContext,0);
};

TableSourceContext.prototype.WITH = function() {
    return this.getToken(SqlParser.WITH, 0);
};

TableSourceContext.prototype.KEY = function() {
    return this.getToken(SqlParser.KEY, 0);
};

TableSourceContext.prototype.uid = function() {
    return this.getTypedRuleContext(UidContext,0);
};

TableSourceContext.prototype.fullColumnName = function() {
    return this.getTypedRuleContext(FullColumnNameContext,0);
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
    this.enterRule(localctx, 34, SqlParser.RULE_tableSource);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.tableName();
        this.state = 292;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.AS || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (SqlParser.ID - 75)) | (1 << (SqlParser.DOUBLE_QUOTE_ID - 75)) | (1 << (SqlParser.REVERSE_QUOTE_ID - 75)) | (1 << (SqlParser.BLOCKED_QUOTE_ID - 75)))) !== 0)) {
            this.state = 289;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.AS) {
                this.state = 288;
                this.match(SqlParser.AS);
            }

            this.state = 291;
            localctx.alias = this.uid();
        }

        this.state = 297;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlParser.WITH) {
            this.state = 294;
            this.match(SqlParser.WITH);
            this.state = 295;
            this.match(SqlParser.KEY);
            this.state = 296;
            localctx.identifier = this.fullColumnName();
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
    this.offset = null; // DecimalLiteralContext
    this.limit = null; // DecimalLiteralContext
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

LimitClauseContext.prototype.decimalLiteral = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DecimalLiteralContext);
    } else {
        return this.getTypedRuleContext(DecimalLiteralContext,i);
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
    this.enterRule(localctx, 36, SqlParser.RULE_limitClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        this.match(SqlParser.LIMIT);
        this.state = 310;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
        switch(la_) {
        case 1:
            this.state = 303;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
            if(la_===1) {
                this.state = 300;
                localctx.offset = this.decimalLiteral();
                this.state = 301;
                this.match(SqlParser.COMMA);

            }
            this.state = 305;
            localctx.limit = this.decimalLiteral();
            break;

        case 2:
            this.state = 306;
            localctx.limit = this.decimalLiteral();
            this.state = 307;
            this.match(SqlParser.OFFSET);
            this.state = 308;
            localctx.offset = this.decimalLiteral();
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

FullIdContext.prototype.dotLiteral = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DotLiteralContext);
    } else {
        return this.getTypedRuleContext(DotLiteralContext,i);
    }
};

FullIdContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.DOT);
    } else {
        return this.getToken(SqlParser.DOT, i);
    }
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
    this.enterRule(localctx, 38, SqlParser.RULE_fullId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 312;
        this.uid();
        this.state = 318;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 316;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case SqlParser.DOT_ID:
                    this.state = 313;
                    this.dotLiteral();
                    break;
                case SqlParser.DOT:
                    this.state = 314;
                    this.match(SqlParser.DOT);
                    this.state = 315;
                    this.uid();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                } 
            }
            this.state = 320;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
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
    this.enterRule(localctx, 40, SqlParser.RULE_tableName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
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
    this.enterRule(localctx, 42, SqlParser.RULE_fullColumnName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
        this.uid();
        this.state = 327;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 324;
                this.dottedId(); 
            }
            this.state = 329;
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

UidContext.prototype.doubleQuoteId = function() {
    return this.getTypedRuleContext(DoubleQuoteIdContext,0);
};

UidContext.prototype.reverseQuoteId = function() {
    return this.getTypedRuleContext(ReverseQuoteIdContext,0);
};

UidContext.prototype.blockedQuoteId = function() {
    return this.getTypedRuleContext(BlockedQuoteIdContext,0);
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
        this.state = 334;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 330;
            this.simpleId();
            break;
        case SqlParser.DOUBLE_QUOTE_ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 331;
            this.doubleQuoteId();
            break;
        case SqlParser.REVERSE_QUOTE_ID:
            this.enterOuterAlt(localctx, 3);
            this.state = 332;
            this.reverseQuoteId();
            break;
        case SqlParser.BLOCKED_QUOTE_ID:
            this.enterOuterAlt(localctx, 4);
            this.state = 333;
            this.blockedQuoteId();
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


function DoubleQuoteIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_doubleQuoteId;
    return this;
}

DoubleQuoteIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DoubleQuoteIdContext.prototype.constructor = DoubleQuoteIdContext;

DoubleQuoteIdContext.prototype.DOUBLE_QUOTE_ID = function() {
    return this.getToken(SqlParser.DOUBLE_QUOTE_ID, 0);
};

DoubleQuoteIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitDoubleQuoteId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.DoubleQuoteIdContext = DoubleQuoteIdContext;

SqlParser.prototype.doubleQuoteId = function() {

    var localctx = new DoubleQuoteIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SqlParser.RULE_doubleQuoteId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
        this.match(SqlParser.DOUBLE_QUOTE_ID);
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


function ReverseQuoteIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_reverseQuoteId;
    return this;
}

ReverseQuoteIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReverseQuoteIdContext.prototype.constructor = ReverseQuoteIdContext;

ReverseQuoteIdContext.prototype.REVERSE_QUOTE_ID = function() {
    return this.getToken(SqlParser.REVERSE_QUOTE_ID, 0);
};

ReverseQuoteIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitReverseQuoteId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.ReverseQuoteIdContext = ReverseQuoteIdContext;

SqlParser.prototype.reverseQuoteId = function() {

    var localctx = new ReverseQuoteIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SqlParser.RULE_reverseQuoteId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this.match(SqlParser.REVERSE_QUOTE_ID);
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


function BlockedQuoteIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_blockedQuoteId;
    return this;
}

BlockedQuoteIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockedQuoteIdContext.prototype.constructor = BlockedQuoteIdContext;

BlockedQuoteIdContext.prototype.BLOCKED_QUOTE_ID = function() {
    return this.getToken(SqlParser.BLOCKED_QUOTE_ID, 0);
};

BlockedQuoteIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitBlockedQuoteId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.BlockedQuoteIdContext = BlockedQuoteIdContext;

SqlParser.prototype.blockedQuoteId = function() {

    var localctx = new BlockedQuoteIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SqlParser.RULE_blockedQuoteId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 340;
        this.match(SqlParser.BLOCKED_QUOTE_ID);
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
    this.enterRule(localctx, 52, SqlParser.RULE_simpleId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 342;
        this.match(SqlParser.ID);
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


function DotLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_dotLiteral;
    return this;
}

DotLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DotLiteralContext.prototype.constructor = DotLiteralContext;

DotLiteralContext.prototype.DOT_ID = function() {
    return this.getToken(SqlParser.DOT_ID, 0);
};

DotLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitDotLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.DotLiteralContext = DotLiteralContext;

SqlParser.prototype.dotLiteral = function() {

    var localctx = new DotLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SqlParser.RULE_dotLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 344;
        this.match(SqlParser.DOT_ID);
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

DottedIdContext.prototype.dotLiteral = function() {
    return this.getTypedRuleContext(DotLiteralContext,0);
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
    this.enterRule(localctx, 56, SqlParser.RULE_dottedId);
    try {
        this.state = 349;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.DOT_ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 346;
            this.dotLiteral();
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
    this.enterRule(localctx, 58, SqlParser.RULE_decimalLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 351;
        _la = this._input.LA(1);
        if(!(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (SqlParser.ZERO_DECIMAL - 59)) | (1 << (SqlParser.ONE_DECIMAL - 59)) | (1 << (SqlParser.TWO_DECIMAL - 59)) | (1 << (SqlParser.DECIMAL_LITERAL - 59)))) !== 0))) {
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
    this.enterRule(localctx, 60, SqlParser.RULE_stringLiteral);
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
    this.enterRule(localctx, 62, SqlParser.RULE_booleanLiteral);
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
    this.enterRule(localctx, 64, SqlParser.RULE_hexadecimalLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
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
    this.enterRule(localctx, 66, SqlParser.RULE_constNumberLiteral);
    try {
        this.state = 366;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 360;
            this.decimalLiteral();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 361;
            localctx.negative = this.match(SqlParser.MINUS);
            this.state = 362;
            this.decimalLiteral();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 363;
            this.match(SqlParser.REAL_LITERAL);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 364;
            localctx.negative = this.match(SqlParser.MINUS);
            this.state = 365;
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
    this.enterRule(localctx, 68, SqlParser.RULE_nullLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 368;
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
    this.enterRule(localctx, 70, SqlParser.RULE_constant);
    try {
        this.state = 375;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 370;
            this.stringLiteral();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 371;
            this.constNumberLiteral();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 372;
            this.hexadecimalLiteral();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 373;
            this.booleanLiteral();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 374;
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
    this.isDefault = null; // Token
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
    this.enterRule(localctx, 72, SqlParser.RULE_constantOrDefault);
    try {
        this.state = 379;
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
            this.enterOuterAlt(localctx, 1);
            this.state = 377;
            this.constant();
            break;
        case SqlParser.DEFAULT:
            this.enterOuterAlt(localctx, 2);
            this.state = 378;
            localctx.isDefault = this.match(SqlParser.DEFAULT);
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


function FullColumnNameListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_fullColumnNameList;
    return this;
}

FullColumnNameListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullColumnNameListContext.prototype.constructor = FullColumnNameListContext;

FullColumnNameListContext.prototype.fullColumnName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FullColumnNameContext);
    } else {
        return this.getTypedRuleContext(FullColumnNameContext,i);
    }
};

FullColumnNameListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlParser.COMMA);
    } else {
        return this.getToken(SqlParser.COMMA, i);
    }
};


FullColumnNameListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitFullColumnNameList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.FullColumnNameListContext = FullColumnNameListContext;

SqlParser.prototype.fullColumnNameList = function() {

    var localctx = new FullColumnNameListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SqlParser.RULE_fullColumnNameList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 381;
        this.fullColumnName();
        this.state = 386;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 382;
            this.match(SqlParser.COMMA);
            this.state = 383;
            this.fullColumnName();
            this.state = 388;
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
    this.enterRule(localctx, 76, SqlParser.RULE_constants);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 389;
        this.constant();
        this.state = 394;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 390;
            this.match(SqlParser.COMMA);
            this.state = 391;
            this.constant();
            this.state = 396;
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
    this.enterRule(localctx, 78, SqlParser.RULE_constantsOrDefaults);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 397;
        this.constantOrDefault();
        this.state = 402;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 398;
            this.match(SqlParser.COMMA);
            this.state = 399;
            this.constantOrDefault();
            this.state = 404;
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


function WhereExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_whereExpression;
    return this;
}

WhereExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhereExpressionContext.prototype.constructor = WhereExpressionContext;

WhereExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhereExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitWhereExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.WhereExpressionContext = WhereExpressionContext;

SqlParser.prototype.whereExpression = function() {

    var localctx = new WhereExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, SqlParser.RULE_whereExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
        this.expression(0);
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
    var _startState = 82;
    this.enterRecursionRule(localctx, 82, SqlParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 411;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
        switch(la_) {
        case 1:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 408;
            localctx.not = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===SqlParser.NOT || _la===SqlParser.EXCLAMATION_SYMBOL)) {
                localctx.not = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 409;
            this.expression(3);
            break;

        case 2:
            localctx = new PredicateExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 410;
            this.predicate();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 419;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,54,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new LogicalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, SqlParser.RULE_expression);
                this.state = 413;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 414;
                localctx.op = this.logicalOperator();
                this.state = 415;
                this.expression(3); 
            }
            this.state = 421;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,54,this._ctx);
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
    this.left = null; // PredicateOperandContext;
    this.op = null; // ComparisonOperatorContext;
    this.right = null; // PredicateOperandContext;
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryComparisonPredicateContext.prototype = Object.create(PredicateContext.prototype);
BinaryComparisonPredicateContext.prototype.constructor = BinaryComparisonPredicateContext;

SqlParser.BinaryComparisonPredicateContext = BinaryComparisonPredicateContext;

BinaryComparisonPredicateContext.prototype.predicateOperand = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PredicateOperandContext);
    } else {
        return this.getTypedRuleContext(PredicateOperandContext,i);
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
    this.left = null; // PredicateOperandContext;
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

InPredicateContext.prototype.predicateOperand = function() {
    return this.getTypedRuleContext(PredicateOperandContext,0);
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
    this.left = null; // PredicateOperandContext;
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

BetweenPredicateContext.prototype.predicateOperand = function() {
    return this.getTypedRuleContext(PredicateOperandContext,0);
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
    this.left = null; // PredicateOperandContext;
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

IsNullPredicateContext.prototype.predicateOperand = function() {
    return this.getTypedRuleContext(PredicateOperandContext,0);
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
    this.left = null; // PredicateOperandContext;
    this.not = null; // Token;
    this.like = null; // StringLiteralContext;
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LikePredicateContext.prototype = Object.create(PredicateContext.prototype);
LikePredicateContext.prototype.constructor = LikePredicateContext;

SqlParser.LikePredicateContext = LikePredicateContext;

LikePredicateContext.prototype.LIKE = function() {
    return this.getToken(SqlParser.LIKE, 0);
};

LikePredicateContext.prototype.predicateOperand = function() {
    return this.getTypedRuleContext(PredicateOperandContext,0);
};

LikePredicateContext.prototype.stringLiteral = function() {
    return this.getTypedRuleContext(StringLiteralContext,0);
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
    this.left = null; // PredicateOperandContext;
    this.not = null; // Token;
    this.regex = null; // StringLiteralContext;
    PredicateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RegexpPredicateContext.prototype = Object.create(PredicateContext.prototype);
RegexpPredicateContext.prototype.constructor = RegexpPredicateContext;

SqlParser.RegexpPredicateContext = RegexpPredicateContext;

RegexpPredicateContext.prototype.predicateOperand = function() {
    return this.getTypedRuleContext(PredicateOperandContext,0);
};

RegexpPredicateContext.prototype.REGEXP = function() {
    return this.getToken(SqlParser.REGEXP, 0);
};

RegexpPredicateContext.prototype.RLIKE = function() {
    return this.getToken(SqlParser.RLIKE, 0);
};

RegexpPredicateContext.prototype.stringLiteral = function() {
    return this.getTypedRuleContext(StringLiteralContext,0);
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
    this.enterRule(localctx, 84, SqlParser.RULE_predicate);
    var _la = 0; // Token type
    try {
        this.state = 466;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
        switch(la_) {
        case 1:
            localctx = new InPredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 422;
            localctx.left = this.predicateOperand();
            this.state = 424;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.NOT) {
                this.state = 423;
                localctx.not = this.match(SqlParser.NOT);
            }

            this.state = 426;
            this.match(SqlParser.IN);
            this.state = 427;
            this.match(SqlParser.LR_BRACKET);

            this.state = 428;
            localctx.values = this.constantAtoms();
            this.state = 429;
            this.match(SqlParser.RR_BRACKET);
            break;

        case 2:
            localctx = new IsNullPredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 431;
            localctx.left = this.predicateOperand();
            this.state = 432;
            this.match(SqlParser.IS);
            this.state = 434;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.NOT) {
                this.state = 433;
                localctx.not = this.match(SqlParser.NOT);
            }

            this.state = 436;
            localctx.nil = this.nullLiteral();
            break;

        case 3:
            localctx = new BinaryComparisonPredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 438;
            localctx.left = this.predicateOperand();
            this.state = 439;
            localctx.op = this.comparisonOperator();
            this.state = 440;
            localctx.right = this.predicateOperand();
            break;

        case 4:
            localctx = new BetweenPredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 442;
            localctx.left = this.predicateOperand();
            this.state = 444;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.NOT) {
                this.state = 443;
                localctx.not = this.match(SqlParser.NOT);
            }

            this.state = 446;
            this.match(SqlParser.BETWEEN);
            this.state = 447;
            localctx.min = this.constant();
            this.state = 448;
            this.match(SqlParser.AND);
            this.state = 449;
            localctx.max = this.constant();
            break;

        case 5:
            localctx = new LikePredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 451;
            localctx.left = this.predicateOperand();
            this.state = 453;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.NOT) {
                this.state = 452;
                localctx.not = this.match(SqlParser.NOT);
            }

            this.state = 455;
            this.match(SqlParser.LIKE);
            this.state = 456;
            localctx.like = this.stringLiteral();
            break;

        case 6:
            localctx = new RegexpPredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 458;
            localctx.left = this.predicateOperand();
            this.state = 460;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlParser.NOT) {
                this.state = 459;
                localctx.not = this.match(SqlParser.NOT);
            }

            this.state = 462;
            _la = this._input.LA(1);
            if(!(_la===SqlParser.REGEXP || _la===SqlParser.RLIKE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 463;
            localctx.regex = this.stringLiteral();
            break;

        case 7:
            localctx = new ExpressionAtomPredicateContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 465;
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
    this.enterRule(localctx, 86, SqlParser.RULE_constantAtoms);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 468;
        this.constant();
        this.state = 473;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlParser.COMMA) {
            this.state = 469;
            this.match(SqlParser.COMMA);
            this.state = 470;
            this.constant();
            this.state = 475;
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


function PredicateOperandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlParser.RULE_predicateOperand;
    return this;
}

PredicateOperandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateOperandContext.prototype.constructor = PredicateOperandContext;

PredicateOperandContext.prototype.constOrColumnAtom = function() {
    return this.getTypedRuleContext(ConstOrColumnAtomContext,0);
};

PredicateOperandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlParserVisitor ) {
        return visitor.visitPredicateOperand(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlParser.PredicateOperandContext = PredicateOperandContext;

SqlParser.prototype.predicateOperand = function() {

    var localctx = new PredicateOperandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, SqlParser.RULE_predicateOperand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 476;
        this.constOrColumnAtom();
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
    this.enterRule(localctx, 90, SqlParser.RULE_constOrColumnAtom);
    try {
        this.state = 480;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ConstantValueAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 478;
            this.constant();
            break;

        case 2:
            localctx = new FullColumnNameValueAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 479;
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
    this.enterRule(localctx, 92, SqlParser.RULE_expressionAtom);
    try {
        this.state = 488;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ConstantExpressionAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 482;
            this.constant();
            break;

        case 2:
            localctx = new FullColumnNameExpressionAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 483;
            this.fullColumnName();
            break;

        case 3:
            localctx = new NestedExpressionAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 484;
            this.match(SqlParser.LR_BRACKET);
            this.state = 485;
            this.expression(0);
            this.state = 486;
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
    this.enterRule(localctx, 94, SqlParser.RULE_comparisonOperator);
    try {
        this.state = 501;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 490;
            this.match(SqlParser.EQUAL_SYMBOL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 491;
            this.match(SqlParser.GREATER_SYMBOL);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 492;
            this.match(SqlParser.LESS_SYMBOL);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 493;
            this.match(SqlParser.LESS_SYMBOL);
            this.state = 494;
            this.match(SqlParser.EQUAL_SYMBOL);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 495;
            this.match(SqlParser.GREATER_SYMBOL);
            this.state = 496;
            this.match(SqlParser.EQUAL_SYMBOL);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 497;
            this.match(SqlParser.LESS_SYMBOL);
            this.state = 498;
            this.match(SqlParser.GREATER_SYMBOL);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 499;
            this.match(SqlParser.EXCLAMATION_SYMBOL);
            this.state = 500;
            this.match(SqlParser.EQUAL_SYMBOL);
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
    this.enterRule(localctx, 96, SqlParser.RULE_logicalOperator);
    try {
        this.state = 509;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlParser.AND:
            this.enterOuterAlt(localctx, 1);
            this.state = 503;
            this.match(SqlParser.AND);
            break;
        case SqlParser.BIT_AND_OP:
            this.enterOuterAlt(localctx, 2);
            this.state = 504;
            this.match(SqlParser.BIT_AND_OP);
            this.state = 505;
            this.match(SqlParser.BIT_AND_OP);
            break;
        case SqlParser.OR:
            this.enterOuterAlt(localctx, 3);
            this.state = 506;
            this.match(SqlParser.OR);
            break;
        case SqlParser.BIT_OR_OP:
            this.enterOuterAlt(localctx, 4);
            this.state = 507;
            this.match(SqlParser.BIT_OR_OP);
            this.state = 508;
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


SqlParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 41:
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
