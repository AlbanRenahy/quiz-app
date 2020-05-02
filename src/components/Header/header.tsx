import React from "react";
import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";
import Settings from "../Settings/settings";

const ThemedHeader = styled.header`
  background: ${(props) => props.theme.primary.light};
  color: ${(props) => props.theme.primary.text};
  padding: 4px;
  display: flex;
  flex-direction: row;
`;

const Header: React.FC<StyledProps> = ({ className }) => {
  return (
    <ThemedHeader className={className}>
      <div className="left">
        <h1>Quizzy</h1>
      </div>
      <Settings />
    </ThemedHeader>
  );
};

export default styled(Header)`
  .logo {
    object-fit: contain;
    width: 100%;
  }
  .left {
    flex: 5;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
`;
