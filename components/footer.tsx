import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          All content copyright &copy; Marks Polakovs 2020&mdash;(date of his death + 70 years)
          unless otherwise noted
        </div>
      </Container>
    </footer>
  )
}

export default Footer
