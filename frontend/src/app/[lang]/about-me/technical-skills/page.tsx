import CommentedText from 'components/pages/about/components/commentedText';

function TechSkills() {
  return (
    <>
      <CommentedText id='Frontend Core' text={'JavaScript\nTypeScript\nHTML\nCSS'} title={'Frontend Core:'} />
      <CommentedText
        id='Frameworks & Libraries'
        text={'Next.js\nReact\nRedux-Toolkit'}
        title={'Frameworks and Libraries:'}
      />
      <CommentedText id='Styling & UI' text={'SASS\nTailwind CSS\nBootStrap\nNextUI'} title={'Styling and UI:'} />
      <CommentedText
        id='Tools & version control'
        text={'Git\nGitlab\nGithub\nDocker'}
        title={'Tools and Version Control:'}
      />
    </>
  );
}

export default TechSkills;
