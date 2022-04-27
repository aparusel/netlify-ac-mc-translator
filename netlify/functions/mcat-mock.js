exports.handler = async function (event, context) {

  /**
   * TBD. Mock ac mc tuple
   **/
  const mockData = {
    'OM.MI.MIXXXa': 'MC.1',
    'OM.MI.MIXXXb': 'MC.2',
    'OM.MI.MIXXXc': 'MC.3',
    'OM.MI.MIXXXd': 'MC.4',
    'OM.MI.MIXXXe': 'MC.5',
  };

  /**
   * Fallback mc
   **/
  const mcDefault = 'MC.0';

  /**
   * Get mc from mockData
   **/
  const getMc = (ac) => {
    if (typeof mockData[ac] !== 'undefined') return mockData[ac];
    return mcDefault;
  };

  const { queryStringParameters: { ac = null }} = event;

  if (ac) {
    return {
      statusCode: 200,
      body: JSON.stringify({ mc: getMc(ac) }),
    }
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ mc: getMc(ac), message: 'No AC defined. Using default mc' }),
  }
};