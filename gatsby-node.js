exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/api/*',
    toPath: `${process.env.API_URL}/:splat`,
    statusCode: 200,
  })
}
