export const refreshingTokensExecutor = ({ error, dispatch, action }) => {
  if (
    error.response.data.code === 403 &&
    error.response.data.message.toLowerCase().includes('expired')
  ) {
    console.log(dispatch, action);
    dispatch(action());
    return 'expired';
  }
  return 'error';
};
