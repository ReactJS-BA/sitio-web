import styled from "styled-components";

interface YoutubeEmbedProps {
  embedId: string;
}

const YouTubeContainer = styled.div`
  display: flex;
  overflow: hidden;
  padding-bottom: inherit;
  width: 100%;
  height: 100%;

  iframe {
    left: 0;
    top: 0;
    width: 100%;
  }
`;

// TODO: Make responsive embed
const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId }) => (
  <YouTubeContainer>
    <iframe
      width="853"
      height="380"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </YouTubeContainer>
);

export default YoutubeEmbed;
