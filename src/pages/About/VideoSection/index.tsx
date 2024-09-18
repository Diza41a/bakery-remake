import S, { classes } from './styles';

const VideoSection = (): JSX.Element => {
  return (
    <S.VideoSection className={classes.root}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NovEJt8khuU?si=pIKs69KZmjjy5uUR"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </S.VideoSection>
  );
};

export default VideoSection;
