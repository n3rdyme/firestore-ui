// Generated from /home/rogerk/projects/rogerk/dt-sql-parser/src/grammar/reduced/SqlParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4');

// This class defines a complete listener for a parse tree produced by SqlParser.
function SqlParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SqlParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SqlParserListener.prototype.constructor = SqlParserListener;

// Enter a parse tree produced by SqlParser#program.
SqlParserListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by SqlParser#program.
SqlParserListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by SqlParser#statement.
SqlParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#statement.
SqlParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#sqlStatements.
SqlParserListener.prototype.enterSqlStatements = function(ctx) {
};

// Exit a parse tree produced by SqlParser#sqlStatements.
SqlParserListener.prototype.exitSqlStatements = function(ctx) {
};


// Enter a parse tree produced by SqlParser#sqlStatement.
SqlParserListener.prototype.enterSqlStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#sqlStatement.
SqlParserListener.prototype.exitSqlStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#emptyStatement.
SqlParserListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#emptyStatement.
SqlParserListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dmlStatement.
SqlParserListener.prototype.enterDmlStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dmlStatement.
SqlParserListener.prototype.exitDmlStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#deleteStatement.
SqlParserListener.prototype.enterDeleteStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#deleteStatement.
SqlParserListener.prototype.exitDeleteStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#simpleSelect.
SqlParserListener.prototype.enterSimpleSelect = function(ctx) {
};

// Exit a parse tree produced by SqlParser#simpleSelect.
SqlParserListener.prototype.exitSimpleSelect = function(ctx) {
};


// Enter a parse tree produced by SqlParser#updateStatement.
SqlParserListener.prototype.enterUpdateStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#updateStatement.
SqlParserListener.prototype.exitUpdateStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#insertStatement.
SqlParserListener.prototype.enterInsertStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#insertStatement.
SqlParserListener.prototype.exitInsertStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#insertStatementValue.
SqlParserListener.prototype.enterInsertStatementValue = function(ctx) {
};

// Exit a parse tree produced by SqlParser#insertStatementValue.
SqlParserListener.prototype.exitInsertStatementValue = function(ctx) {
};


// Enter a parse tree produced by SqlParser#updatedElement.
SqlParserListener.prototype.enterUpdatedElement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#updatedElement.
SqlParserListener.prototype.exitUpdatedElement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#assignmentField.
SqlParserListener.prototype.enterAssignmentField = function(ctx) {
};

// Exit a parse tree produced by SqlParser#assignmentField.
SqlParserListener.prototype.exitAssignmentField = function(ctx) {
};


// Enter a parse tree produced by SqlParser#singleDeleteStatement.
SqlParserListener.prototype.enterSingleDeleteStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#singleDeleteStatement.
SqlParserListener.prototype.exitSingleDeleteStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#singleUpdateStatement.
SqlParserListener.prototype.enterSingleUpdateStatement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#singleUpdateStatement.
SqlParserListener.prototype.exitSingleUpdateStatement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#orderByClause.
SqlParserListener.prototype.enterOrderByClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#orderByClause.
SqlParserListener.prototype.exitOrderByClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#orderByExpression.
SqlParserListener.prototype.enterOrderByExpression = function(ctx) {
};

// Exit a parse tree produced by SqlParser#orderByExpression.
SqlParserListener.prototype.exitOrderByExpression = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableSources.
SqlParserListener.prototype.enterTableSources = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableSources.
SqlParserListener.prototype.exitTableSources = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableSourceBase.
SqlParserListener.prototype.enterTableSourceBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableSourceBase.
SqlParserListener.prototype.exitTableSourceBase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableSourceItem.
SqlParserListener.prototype.enterTableSourceItem = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableSourceItem.
SqlParserListener.prototype.exitTableSourceItem = function(ctx) {
};


// Enter a parse tree produced by SqlParser#querySpecification.
SqlParserListener.prototype.enterQuerySpecification = function(ctx) {
};

// Exit a parse tree produced by SqlParser#querySpecification.
SqlParserListener.prototype.exitQuerySpecification = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectElements.
SqlParserListener.prototype.enterSelectElements = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectElements.
SqlParserListener.prototype.exitSelectElements = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectStarElement.
SqlParserListener.prototype.enterSelectStarElement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectStarElement.
SqlParserListener.prototype.exitSelectStarElement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectColumnElement.
SqlParserListener.prototype.enterSelectColumnElement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectColumnElement.
SqlParserListener.prototype.exitSelectColumnElement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#selectConstantElement.
SqlParserListener.prototype.enterSelectConstantElement = function(ctx) {
};

// Exit a parse tree produced by SqlParser#selectConstantElement.
SqlParserListener.prototype.exitSelectConstantElement = function(ctx) {
};


// Enter a parse tree produced by SqlParser#fromClause.
SqlParserListener.prototype.enterFromClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#fromClause.
SqlParserListener.prototype.exitFromClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#limitClause.
SqlParserListener.prototype.enterLimitClause = function(ctx) {
};

// Exit a parse tree produced by SqlParser#limitClause.
SqlParserListener.prototype.exitLimitClause = function(ctx) {
};


// Enter a parse tree produced by SqlParser#limitClauseAtom.
SqlParserListener.prototype.enterLimitClauseAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#limitClauseAtom.
SqlParserListener.prototype.exitLimitClauseAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#fullId.
SqlParserListener.prototype.enterFullId = function(ctx) {
};

// Exit a parse tree produced by SqlParser#fullId.
SqlParserListener.prototype.exitFullId = function(ctx) {
};


// Enter a parse tree produced by SqlParser#tableName.
SqlParserListener.prototype.enterTableName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#tableName.
SqlParserListener.prototype.exitTableName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#fullColumnName.
SqlParserListener.prototype.enterFullColumnName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#fullColumnName.
SqlParserListener.prototype.exitFullColumnName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#mysqlVariable.
SqlParserListener.prototype.enterMysqlVariable = function(ctx) {
};

// Exit a parse tree produced by SqlParser#mysqlVariable.
SqlParserListener.prototype.exitMysqlVariable = function(ctx) {
};


// Enter a parse tree produced by SqlParser#engineName.
SqlParserListener.prototype.enterEngineName = function(ctx) {
};

// Exit a parse tree produced by SqlParser#engineName.
SqlParserListener.prototype.exitEngineName = function(ctx) {
};


// Enter a parse tree produced by SqlParser#uid.
SqlParserListener.prototype.enterUid = function(ctx) {
};

// Exit a parse tree produced by SqlParser#uid.
SqlParserListener.prototype.exitUid = function(ctx) {
};


// Enter a parse tree produced by SqlParser#simpleId.
SqlParserListener.prototype.enterSimpleId = function(ctx) {
};

// Exit a parse tree produced by SqlParser#simpleId.
SqlParserListener.prototype.exitSimpleId = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dottedId.
SqlParserListener.prototype.enterDottedId = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dottedId.
SqlParserListener.prototype.exitDottedId = function(ctx) {
};


// Enter a parse tree produced by SqlParser#decimalLiteral.
SqlParserListener.prototype.enterDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlParser#decimalLiteral.
SqlParserListener.prototype.exitDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlParser#stringLiteral.
SqlParserListener.prototype.enterStringLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlParser#stringLiteral.
SqlParserListener.prototype.exitStringLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlParser#booleanLiteral.
SqlParserListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlParser#booleanLiteral.
SqlParserListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlParser#hexadecimalLiteral.
SqlParserListener.prototype.enterHexadecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlParser#hexadecimalLiteral.
SqlParserListener.prototype.exitHexadecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlParser#nullNotnull.
SqlParserListener.prototype.enterNullNotnull = function(ctx) {
};

// Exit a parse tree produced by SqlParser#nullNotnull.
SqlParserListener.prototype.exitNullNotnull = function(ctx) {
};


// Enter a parse tree produced by SqlParser#constant.
SqlParserListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by SqlParser#constant.
SqlParserListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by SqlParser#uidList.
SqlParserListener.prototype.enterUidList = function(ctx) {
};

// Exit a parse tree produced by SqlParser#uidList.
SqlParserListener.prototype.exitUidList = function(ctx) {
};


// Enter a parse tree produced by SqlParser#expressions.
SqlParserListener.prototype.enterExpressions = function(ctx) {
};

// Exit a parse tree produced by SqlParser#expressions.
SqlParserListener.prototype.exitExpressions = function(ctx) {
};


// Enter a parse tree produced by SqlParser#expressionsWithDefaults.
SqlParserListener.prototype.enterExpressionsWithDefaults = function(ctx) {
};

// Exit a parse tree produced by SqlParser#expressionsWithDefaults.
SqlParserListener.prototype.exitExpressionsWithDefaults = function(ctx) {
};


// Enter a parse tree produced by SqlParser#constants.
SqlParserListener.prototype.enterConstants = function(ctx) {
};

// Exit a parse tree produced by SqlParser#constants.
SqlParserListener.prototype.exitConstants = function(ctx) {
};


// Enter a parse tree produced by SqlParser#simpleStrings.
SqlParserListener.prototype.enterSimpleStrings = function(ctx) {
};

// Exit a parse tree produced by SqlParser#simpleStrings.
SqlParserListener.prototype.exitSimpleStrings = function(ctx) {
};


// Enter a parse tree produced by SqlParser#defaultValue.
SqlParserListener.prototype.enterDefaultValue = function(ctx) {
};

// Exit a parse tree produced by SqlParser#defaultValue.
SqlParserListener.prototype.exitDefaultValue = function(ctx) {
};


// Enter a parse tree produced by SqlParser#currentTimestamp.
SqlParserListener.prototype.enterCurrentTimestamp = function(ctx) {
};

// Exit a parse tree produced by SqlParser#currentTimestamp.
SqlParserListener.prototype.exitCurrentTimestamp = function(ctx) {
};


// Enter a parse tree produced by SqlParser#expressionOrDefault.
SqlParserListener.prototype.enterExpressionOrDefault = function(ctx) {
};

// Exit a parse tree produced by SqlParser#expressionOrDefault.
SqlParserListener.prototype.exitExpressionOrDefault = function(ctx) {
};


// Enter a parse tree produced by SqlParser#notExpression.
SqlParserListener.prototype.enterNotExpression = function(ctx) {
};

// Exit a parse tree produced by SqlParser#notExpression.
SqlParserListener.prototype.exitNotExpression = function(ctx) {
};


// Enter a parse tree produced by SqlParser#logicalExpression.
SqlParserListener.prototype.enterLogicalExpression = function(ctx) {
};

// Exit a parse tree produced by SqlParser#logicalExpression.
SqlParserListener.prototype.exitLogicalExpression = function(ctx) {
};


// Enter a parse tree produced by SqlParser#predicateExpression.
SqlParserListener.prototype.enterPredicateExpression = function(ctx) {
};

// Exit a parse tree produced by SqlParser#predicateExpression.
SqlParserListener.prototype.exitPredicateExpression = function(ctx) {
};


// Enter a parse tree produced by SqlParser#inPredicate.
SqlParserListener.prototype.enterInPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#inPredicate.
SqlParserListener.prototype.exitInPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#isNullPredicate.
SqlParserListener.prototype.enterIsNullPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#isNullPredicate.
SqlParserListener.prototype.exitIsNullPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#binaryComparasionPredicate.
SqlParserListener.prototype.enterBinaryComparasionPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#binaryComparasionPredicate.
SqlParserListener.prototype.exitBinaryComparasionPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#betweenPredicate.
SqlParserListener.prototype.enterBetweenPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#betweenPredicate.
SqlParserListener.prototype.exitBetweenPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#likePredicate.
SqlParserListener.prototype.enterLikePredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#likePredicate.
SqlParserListener.prototype.exitLikePredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#regexpPredicate.
SqlParserListener.prototype.enterRegexpPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#regexpPredicate.
SqlParserListener.prototype.exitRegexpPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#expressionAtomPredicate.
SqlParserListener.prototype.enterExpressionAtomPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlParser#expressionAtomPredicate.
SqlParserListener.prototype.exitExpressionAtomPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlParser#constantAtoms.
SqlParserListener.prototype.enterConstantAtoms = function(ctx) {
};

// Exit a parse tree produced by SqlParser#constantAtoms.
SqlParserListener.prototype.exitConstantAtoms = function(ctx) {
};


// Enter a parse tree produced by SqlParser#expressionAtoms.
SqlParserListener.prototype.enterExpressionAtoms = function(ctx) {
};

// Exit a parse tree produced by SqlParser#expressionAtoms.
SqlParserListener.prototype.exitExpressionAtoms = function(ctx) {
};


// Enter a parse tree produced by SqlParser#constantValueAtom.
SqlParserListener.prototype.enterConstantValueAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#constantValueAtom.
SqlParserListener.prototype.exitConstantValueAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#fullColumnNameValueAtom.
SqlParserListener.prototype.enterFullColumnNameValueAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#fullColumnNameValueAtom.
SqlParserListener.prototype.exitFullColumnNameValueAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#constantExpressionAtom.
SqlParserListener.prototype.enterConstantExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#constantExpressionAtom.
SqlParserListener.prototype.exitConstantExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#fullColumnNameExpressionAtom.
SqlParserListener.prototype.enterFullColumnNameExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#fullColumnNameExpressionAtom.
SqlParserListener.prototype.exitFullColumnNameExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#nestedExpressionAtom.
SqlParserListener.prototype.enterNestedExpressionAtom = function(ctx) {
};

// Exit a parse tree produced by SqlParser#nestedExpressionAtom.
SqlParserListener.prototype.exitNestedExpressionAtom = function(ctx) {
};


// Enter a parse tree produced by SqlParser#comparisonOperator.
SqlParserListener.prototype.enterComparisonOperator = function(ctx) {
};

// Exit a parse tree produced by SqlParser#comparisonOperator.
SqlParserListener.prototype.exitComparisonOperator = function(ctx) {
};


// Enter a parse tree produced by SqlParser#logicalOperator.
SqlParserListener.prototype.enterLogicalOperator = function(ctx) {
};

// Exit a parse tree produced by SqlParser#logicalOperator.
SqlParserListener.prototype.exitLogicalOperator = function(ctx) {
};


// Enter a parse tree produced by SqlParser#charsetNameBase.
SqlParserListener.prototype.enterCharsetNameBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#charsetNameBase.
SqlParserListener.prototype.exitCharsetNameBase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#transactionLevelBase.
SqlParserListener.prototype.enterTransactionLevelBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#transactionLevelBase.
SqlParserListener.prototype.exitTransactionLevelBase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#privilegesBase.
SqlParserListener.prototype.enterPrivilegesBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#privilegesBase.
SqlParserListener.prototype.exitPrivilegesBase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#intervalTypeBase.
SqlParserListener.prototype.enterIntervalTypeBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#intervalTypeBase.
SqlParserListener.prototype.exitIntervalTypeBase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#dataTypeBase.
SqlParserListener.prototype.enterDataTypeBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#dataTypeBase.
SqlParserListener.prototype.exitDataTypeBase = function(ctx) {
};


// Enter a parse tree produced by SqlParser#keywordsCanBeId.
SqlParserListener.prototype.enterKeywordsCanBeId = function(ctx) {
};

// Exit a parse tree produced by SqlParser#keywordsCanBeId.
SqlParserListener.prototype.exitKeywordsCanBeId = function(ctx) {
};


// Enter a parse tree produced by SqlParser#functionNameBase.
SqlParserListener.prototype.enterFunctionNameBase = function(ctx) {
};

// Exit a parse tree produced by SqlParser#functionNameBase.
SqlParserListener.prototype.exitFunctionNameBase = function(ctx) {
};



exports.SqlParserListener = SqlParserListener;