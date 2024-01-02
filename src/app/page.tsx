import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({ heading: { color: 'blue' } })

const Home = () => {
  return <div {...stylex.props(styles.heading)}>test</div>
}

export default Home
