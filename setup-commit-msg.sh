#!/usr/bin/env sh
 
ALLOWED_TYPES="feat|fix|docs|test|refactor|perf|style|chore|release|wip|ci"
ALLOWED_SCOPES="system|auth|user|build|resource|api|sam"

COMMIT_MESSAGE=$(cat "$1")
 
TYPE_REGEX="^($ALLOWED_TYPES)"
SCOPE_REGEX="^\w+\((($ALLOWED_SCOPES)?)\):"
JIRA_REGEX="PREV-(?:[1-9]|[1-9][0-9]{0,2})"
DESCRIPTION_REGEX='^[^A-Z]+$'

ERROR_MSG="❌ Bad commit msg! Check the errors below:\n"

VALID=true

# Validate type
if ! echo "$COMMIT_MESSAGE" | grep -Eq "$TYPE_REGEX"; then
  ERROR_MSG="${ERROR_MSG}- The type is incorrect. The available types are: ($ALLOWED_TYPES)\n"
  VALID=false
fi

# Validate scope
if echo "$COMMIT_MESSAGE" | grep -q "("; then
  if ! echo "$COMMIT_MESSAGE" | grep -Eq "$SCOPE_REGEX"; then
    ERROR_MSG="${ERROR_MSG}- The scope is incorrect. The available scopes are: ($ALLOWED_SCOPES) ou remova os parênteses.\n"
    VALID=false
  fi
fi

# Validate if (PREV-<1-999>) is avaible
if echo "$COMMIT_MESSAGE" | grep -q "PREV-"; then
  # Se estiver presente, verifica se segue o formato correto
  if ! echo "$COMMIT_MESSAGE" | grep -Eq "$JIRA_REGEX"; then
    ERROR_MSG="${ERROR_MSG}- The JIRA tag is in incorrect format. The format must follow the standard PREV-<1-999>, without leading zeros.\n"
    VALID=false
  fi
fi

# Validate capital letters
if ! echo "$COMMIT_MESSAGE" | grep -Eq "$DESCRIPTION_REGEX"; then
  ERROR_MSG="${ERROR_MSG}- Description is missing or contains capital letters. Use only lowercase letters and numbers.\n"
  VALID=false
fi

# Allow merge out of pattern
REGEX_EXCEPTION="Merge"
if echo "$COMMIT_MESSAGE" | grep -q "^$REGEX_EXCEPTION"; then
  exit 0
fi

# Error messages
if [ "$VALID" = false ]; then
  echo -e "$ERROR_MSG"
  exit 1
fi

echo "✅ Nice commit msg! Great job! 🚀"
exit 0
