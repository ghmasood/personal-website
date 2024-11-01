import CommentedText from 'components/pages/about/components/commentedText';

function Education() {
  return (
    <>
      <CommentedText
        id='Bachelor'
        title={'Bachelor of Software Engineering'}
        text={'Kharazmi University Tehran-Iran \n 2015-2019'}
      />
      <CommentedText id='Diploma' text={'Mofid High School Tehran-Iran \n2015'} title={'Mathematics Diploma'} />
    </>
  );
}

export default Education;
