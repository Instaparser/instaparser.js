/*
  Test path configuration file
 */
var testsContext = require.context('./test', true, /Test\.js$/);
testsContext.keys().forEach(testsContext);
