// Tech stack icons mapping
import { 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiExpress, 
  SiNodedotjs, 
  SiFirebase, 
  SiJava, 
  SiMongodb,
  SiCypress,
  SiJest,
  SiRender,
  SiJira,
  SiBitbucket,
  SiAmazonaws
} from 'react-icons/si';

export const techIcons = {
  'JavaScript/TypeScript': SiJavascript,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Express.js': SiExpress,
  'Node.js': SiNodedotjs,
  'Firestore': SiFirebase,
  'Java': SiJava,
  'MongoDB': SiMongodb,
  'Cypress': SiCypress,
  'Jest.js': SiJest,
  'Render': SiRender,
  'Jira': SiJira,
  'Bitbucket': SiBitbucket,
  'AWS': SiAmazonaws
};

export const getTechIcon = (techName) => {
  return techIcons[techName] || null;
};
