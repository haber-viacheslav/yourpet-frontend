const { refreshingTokensExecutor } = require('./refreshingTokensExecutor');

export const fetchDecorator = async (dispatch, action, callback) => {
  try {
    if (!dispatch || !action || !callback) {
      throw new Error('Forgot to use required arguments!');
    }
    const resp = await callback();
    return resp;
  } catch (error) {
    refreshingTokensExecutor({ error, dispatch, action });
  }
};
