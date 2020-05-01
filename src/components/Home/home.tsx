import React from "react";
import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";
import { Link } from "react-router-dom";
import { Primary } from "../../common/buttons";

const ThemedSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const BannerStatement = styled.h3`
  text-shadow: ${(props) => props.theme.all.lightShadow};
  color: ${(props) => props.theme.secondary.dark};
`;

const Home: React.FC<StyledProps> = ({ className }) => {
  return (
    <ThemedSection className={className}>
      <BannerStatement>Welcome to Quizzy!</BannerStatement>

      <div className="home_message">
        You will be presented with 10 True or False questions.
      </div>

      <div className="callout">Can you score 100%?</div>

      <Link to="/quiz" className="action">
        <Primary>BEGIN</Primary>
      </Link>
    </ThemedSection>
  );
};

export default styled(Home)`
  .home_message {
    width: 80%;
    margin: 0 auto;
  }
  .action {
    text-decoration: none;
    color: inherit;
    margin: 0 auto;
  }
`;
