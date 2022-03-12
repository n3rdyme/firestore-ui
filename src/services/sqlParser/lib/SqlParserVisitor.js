// Generated from /home/rogerk/projects/rogerk/firestore-ui/antlr/grammar/SqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SqlParser.

function SqlParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SqlParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SqlParserVisitor.prototype.constructor = SqlParserVisitor;

// Visit a parse tree produced by SqlParser#program.
SqlParserVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#statement.
SqlParserVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#sqlStatements.
SqlParserVisitor.prototype.visitSqlStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#sqlStatement.
SqlParserVisitor.prototype.visitSqlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#insertStatement.
SqlParserVisitor.prototype.visitInsertStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#insertStatementValue.
SqlParserVisitor.prototype.visitInsertStatementValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#updateStatement.
SqlParserVisitor.prototype.visitUpdateStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#updatedElement.
SqlParserVisitor.prototype.visitUpdatedElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#deleteStatement.
SqlParserVisitor.prototype.visitDeleteStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectStatement.
SqlParserVisitor.prototype.visitSelectStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectElements.
SqlParserVisitor.prototype.visitSelectElements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#selectElement.
SqlParserVisitor.prototype.visitSelectElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#fromClause.
SqlParserVisitor.prototype.visitFromClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#orderByClause.
SqlParserVisitor.prototype.visitOrderByClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#orderByExpression.
SqlParserVisitor.prototype.visitOrderByExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableSource.
SqlParserVisitor.prototype.visitTableSource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#limitClause.
SqlParserVisitor.prototype.visitLimitClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#limitClauseAtom.
SqlParserVisitor.prototype.visitLimitClauseAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#fullId.
SqlParserVisitor.prototype.visitFullId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#tableName.
SqlParserVisitor.prototype.visitTableName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#fullColumnName.
SqlParserVisitor.prototype.visitFullColumnName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#engineName.
SqlParserVisitor.prototype.visitEngineName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#uid.
SqlParserVisitor.prototype.visitUid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#simpleId.
SqlParserVisitor.prototype.visitSimpleId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dottedId.
SqlParserVisitor.prototype.visitDottedId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#decimalLiteral.
SqlParserVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#stringLiteral.
SqlParserVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#booleanLiteral.
SqlParserVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#hexadecimalLiteral.
SqlParserVisitor.prototype.visitHexadecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#constNumberLiteral.
SqlParserVisitor.prototype.visitConstNumberLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#nullLiteral.
SqlParserVisitor.prototype.visitNullLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#constant.
SqlParserVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#constantOrDefault.
SqlParserVisitor.prototype.visitConstantOrDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#uidList.
SqlParserVisitor.prototype.visitUidList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#constants.
SqlParserVisitor.prototype.visitConstants = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#constantsOrDefaults.
SqlParserVisitor.prototype.visitConstantsOrDefaults = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#notExpression.
SqlParserVisitor.prototype.visitNotExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#logicalExpression.
SqlParserVisitor.prototype.visitLogicalExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#predicateExpression.
SqlParserVisitor.prototype.visitPredicateExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#inPredicate.
SqlParserVisitor.prototype.visitInPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#isNullPredicate.
SqlParserVisitor.prototype.visitIsNullPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#binaryComparisonPredicate.
SqlParserVisitor.prototype.visitBinaryComparisonPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#betweenPredicate.
SqlParserVisitor.prototype.visitBetweenPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#likePredicate.
SqlParserVisitor.prototype.visitLikePredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#regexpPredicate.
SqlParserVisitor.prototype.visitRegexpPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#expressionAtomPredicate.
SqlParserVisitor.prototype.visitExpressionAtomPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#constantAtoms.
SqlParserVisitor.prototype.visitConstantAtoms = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#constantValueAtom.
SqlParserVisitor.prototype.visitConstantValueAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#fullColumnNameValueAtom.
SqlParserVisitor.prototype.visitFullColumnNameValueAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#constantExpressionAtom.
SqlParserVisitor.prototype.visitConstantExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#fullColumnNameExpressionAtom.
SqlParserVisitor.prototype.visitFullColumnNameExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#nestedExpressionAtom.
SqlParserVisitor.prototype.visitNestedExpressionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#comparisonOperator.
SqlParserVisitor.prototype.visitComparisonOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#logicalOperator.
SqlParserVisitor.prototype.visitLogicalOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#charsetNameBase.
SqlParserVisitor.prototype.visitCharsetNameBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#transactionLevelBase.
SqlParserVisitor.prototype.visitTransactionLevelBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#privilegesBase.
SqlParserVisitor.prototype.visitPrivilegesBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#intervalTypeBase.
SqlParserVisitor.prototype.visitIntervalTypeBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#dataTypeBase.
SqlParserVisitor.prototype.visitDataTypeBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#keywordsCanBeId.
SqlParserVisitor.prototype.visitKeywordsCanBeId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlParser#functionNameBase.
SqlParserVisitor.prototype.visitFunctionNameBase = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SqlParserVisitor = SqlParserVisitor;