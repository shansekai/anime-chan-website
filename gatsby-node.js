exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/api/*',
    toPath: 'https://anime-chan.herokuapp.com/:splat',
    statusCode: 200,
  })
}
