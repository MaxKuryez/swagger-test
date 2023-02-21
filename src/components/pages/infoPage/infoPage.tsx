import { useState, useEffect } from "react";
import InfoPanel from "../../modules/infoPanel/infoPanel";
import NavigationLinks from "../../layout/navigationLinks/navigationLinks";
import { InfoPagePayload } from "./types";
import { API_URL, PROJECT_ENDPOINTS } from 'endpoints';

const InfoPage = () => {
  const [info, setInfo] = useState<InfoPagePayload | null>(null);

  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(`${API_URL}${PROJECT_ENDPOINTS.INFO_JSON}`);
      const json = await response.json();
      setInfo(json.info);
    }
    getInfo();
  }, []);

  if (!info) {
    return <><NavigationLinks />Loading...</>;
  }

  return (
    <>
      <NavigationLinks />
      <InfoPanel {...info} />
    </>
  );
};

export default InfoPage;
