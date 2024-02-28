import Section from '@/components/Section'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const About = () => {
  return (
    <Section title={'About Me'} id="about">
      <p>
        Hey there! My name is Michel and I&apos;m a dedicated Full-Stack
        Developer with a special place in my heart for React and TypeScript. My
        professional journey has been a thrilling ride, filled with projects
        that stretched from simple websites to complex factory applications,
        each teaching me invaluable lessons about the tech world and beyond.
      </p>
      <p>
        But who am I beyond the code? Well, I&apos;m a bit of a thrill-seeker
        and a creator at heart. Growing up in a quaint town in northern Germany,
        I developed a love for the simpler, yet profound things in life. Whether
        it&apos;s carving the streets on my skateboard (admittedly, with more
        enthusiasm than skill) or embracing the serenity of water sports, I find
        joy in the push and pull of the tide and the wind against my face.{' '}
      </p>
      <p>
        When I&apos;m not chasing the next big swell or working on my latest
        tech project, I love getting my hands dirty - building things out of
        wood or tinkering with microcontrollers. It&apos;s this passion for
        creating, whether it&apos;s crafting a piece of furniture or programming
        a new app, that really lights my fire.
      </p>
      <div className="mt-4 flex justify-start space-x-4">
        <a
          href="https://github.com/michelehmen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/michel-ehmen/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a href="mailto:michelehmen@hotmail.de" className="text-primary">
          <FaEnvelope size={24} />
        </a>
      </div>
    </Section>
  )
}

export default About
