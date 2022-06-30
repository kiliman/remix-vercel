const { createRequestHandler } = require('@remix-run/vercel')

const getLoadContext = () => ({
  _requestContext: {},
  getRequestContext: () => this._requestContext,
  setRequestContext: ({ user, context, metaData }) => {
    this._requestContext = { user, context, metaData }
  },
})

module.exports = createRequestHandler({
  build: require('./_build'),
  getLoadContext,
})
