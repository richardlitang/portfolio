import ghpages from 'gh-pages'

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/heisenberlar/portfolio.git',
        user: {
            name: 'Richard Jason Litang',
            email: 'litang.richard@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)