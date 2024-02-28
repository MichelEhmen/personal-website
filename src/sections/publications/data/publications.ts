import { Publication } from '../types/Publication'
import { IMAGES } from './images'

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Knowledge and Task Management in Notion',
    description:
      'Explore how Notion can revolutionize knowledge and task management in IT consultancy. Learn about the PARA method for organizing information and implementing a robust system in Notion, including relational databases and advanced features like dashboards and API integrations, to enhance productivity and organization.',
    image: IMAGES.blog,
    url: 'https://www.codecentric.de/wissens-hub/blog/knowledge-und-task-management-in-notion',
    type: 'article'
  },
  {
    title: 'Development of edge-solutions with Balena',
    description:
      'I discussed how Balena provides a versatile solution for managing edge devices and gateways, enabling seamless connection to various platforms for data distribution. Highlighting its edge and software platform, I noted its suitability for all project stages, from proof-of-concept to full production, with features like OTA updates, remote access, and device diagnostics to support diverse application needs.',
    image: IMAGES.buildingIot,
    type: 'talk',
    url: 'https://www.buildingiot.de/veranstaltung-14061-0-entwicklung-von-edge-loesungen-mit-balena-sponsored-talk.html'
  },
  {
    title: 'Perspective-correct distance measurement between people',
    description:
      'The blog post "Smart DistancR" discusses a machine learning-based application developed to accurately measure distances between people in camera footage, ensuring adherence to social distancing guidelines. By utilizing techniques such as object detection and perspective correction, Smart DistancR computes distances in real-time without cloud connectivity, prioritizing privacy. Optimized for lightweight hardware like the Raspberry Pi 4 and Googles Coral Device, this solution addresses the need for effective social distancing tools during the ongoing pandemic.',
    image: IMAGES.blog,
    url: 'https://www.codecentric.de/wissens-hub/blog/smart-distancr',
    type: 'article'
  }
]
