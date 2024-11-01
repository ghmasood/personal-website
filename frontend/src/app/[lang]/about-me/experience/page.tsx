import CommentedText from 'components/pagess/about/components/commentedText';

function Experience() {
  return (
    <>
      <CommentedText title='IroTeam' text={iroTeamText} id='IroTeam' />
      <CommentedText title='Wallex' text={wallexText} id='Wallex Exchange' />
    </>
  );
}

export default Experience;
const iroTeamText = `Managed state efficiently with Redux Toolkit and RTKQuery,ensuring smooth data flow and consistency across complex applications.
This resulted in a better user experience due to the global cache.\nBuilt complex forms with Formik and Yup for validation,ensuring robust data flow to the server.\nCollaborated with backend developers to integrate RESTful and GraphQL APIs,ensuring seamless data exchange and application functionality, reducing API-related errors, and enhancing overall application stability.\nEnsured code quality and consistency by configuring and enforcing coding standards with Prettier and ESLint,reducing code review time and improving maintainability.
`;

const wallexText = `At Wallex, a company focused on the financial markets, I work in the Algo Trade team, which functions as a startup studio.
 Built various dashboards as SPAs with React.js, Next.js, and TailwindCSS for data visualization and user interaction.
 Utilized TypeScript to enhance code quality and maintainability, reducing type-related bugs.
 Implemented unit and integration testing (Jest, Storybook) for some projects.
 Integrated Axios for efficient HTTP requests and API interactions, improving reusability and code splitting by using its interceptors.
 Worked closely with UI/UX designers to translate designs into high-quality code, enhancing the overall look and feel of the application and
increasing customer satisfaction scores.
 Designed and implemented complex animations and transitions using libraries like Framer Motion, creating engaging and interactive
user experiences.
 Created interactive data visualizations with Highcharts and Chart.js, enhancing user engagement and providing actionable insights.
 Actively participated in Agile development processes, contributing to sprint planning and daily stand-ups. Effectively managed time and
fostered collaboration, which increased team productivity and ensured all projects met their deadlines.
 Utilized Git and GitLab for version control and streamlining code reviews, enhancing collaboration and reducing deployment times.
 Migrated legacy code bases from Vue.js to Next.js for the entire product stack, enhancing team collaboration and refactoring old code bases for better performance and maintainability.`;
