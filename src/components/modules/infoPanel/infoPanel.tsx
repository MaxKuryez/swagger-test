import { useRef, useEffect } from "react";
import { InfoPagePayload } from "components/pages/infoPage/types";
import { StyledInfo, StyledOtherInfo, StyledLink } from "./styled";

const convertUrlsToLinks = (text: string) => {
  return text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    .replace(/\((.*?)\)\[(.*?)\]/g, '<a href="$1">$2</a>');
};

const InfoPanel = ({ title, description, termsOfService, license, contact, version }: InfoPagePayload) => {
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (linksRef.current) {
      linksRef.current.innerHTML = convertUrlsToLinks(description);
    }
  }, [description]);

  return (
    <StyledInfo>
      <h1>{title}</h1>
      <p ref={linksRef}></p>
      <StyledOtherInfo>
        <h2>Other Info</h2>
        <div>Terms of Service: <StyledLink href={termsOfService}>{termsOfService}</StyledLink></div>
        <br/>
        <div>License: <StyledLink href={license.url}>{license.name}</StyledLink></div>
        <br/>
        <div>Contact: <StyledLink href={`mailto:${contact.email}`}>{contact.email}</StyledLink></div>
        <br/>
        <div>Version: {version}</div>
      </StyledOtherInfo>
    </StyledInfo>
  );
};

export default InfoPanel;
